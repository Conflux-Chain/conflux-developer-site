(require '[clojure.java.shell :refer [sh]])
(require '[clojure.java.io :as io])
(require '[clojure.string :as str])
(require '[cheshire.core :as json])

(load-file "development/cli.clj")
(load-file "development/fs.clj")
(load-file "development/md.clj")
(load-file "development/git.clj")

(defonce updated? false)
(defonce langs [:en])

(defn find-devdoc-json [dir]
  (let [dir-name (.getName dir)
        dir      (.getAbsolutePath dir)
        jsonf    (io/file
                  (first
                   (sh->vec "fd" "-t" "f" "--regex" "conflux-docs\\.json$" dir)))]
    (if (.exists jsonf)
      (do (println "Found conflux-docs.json under" dir-name)
          jsonf)
      (exit 1 (str "Can't find conflux-docs.json file under " dir)))))

(defn docs->devdoc-jsons [docs]
  (mapv find-devdoc-json docs))

(defn each-sidebar-item [metadata file-f item]
  (let [item (if (map? item) (first (into [] item)) item) ;; nested level
        [k v] item]
    (cond
      (string? item)
      (file-f metadata item)
      (and (map? v) (:type v))
      {k v}
      (vector? v)
      {:type "category"
       :label (name k)
       :items (mapv #(each-sidebar-item metadata file-f %) v)}
      (map? v)
      (each-sidebar-item metadata file-f [k v]))))

(defn process-md [{:keys [repo-name doc-json-file lang] :as metadata} file-path]
  (if (member? lang langs)
    (let [md (->file (.getParent doc-json-file) file-path)
          md-headers (md->md-header-edn md)
          md-headers (assoc md-headers :id (str lang "/" repo-name "/" (:id md-headers)))]
      #_(edn->update-md-header! md-headers md)
      {:id (:id md-headers) :type "doc"})
    []))

(defn process-each-lang-config
  "Process sidebar config of each language"
  [metadata [lang conf]]
  {lang (mapv #(each-sidebar-item (assoc metadata :lang lang) process-md %) conf)})

(defn process-config
  "Process config from each project, return transformed config"
  [[{:keys [repo-name] :as metadata} config]]
  {(keyword repo-name) (mapv #(process-each-lang-config metadata %) config)})

(defn get-config [[doc-dir doc-json-file]]
  (let [config (json->edn doc-json-file)
        repo-name (or (:repo config) (.getName doc-dir))
        docs-config (:docs config)]
    [{:repo-name repo-name
      :doc-dir doc-dir
      :doc-json-file doc-json-file
      :dochash (submodule-hash doc-dir)}
     (into [] docs-config)]))

(defn -main []
  (let [docs ;; project-root-dir-file
        (-> "conflux-docs-index.json"
            json->edn
            :docs
            (#(mapv #(io/file (str "docs/" %)) %)))
        jsons (-> docs docs->devdoc-jsons) ;; project-docs-json-file
        rst (-> (zipmap docs jsons)
                (#(mapv get-config %))
                (#(mapv process-config %)))]
    (prn rst)
    (exit 0 "Finished!")))


(println "-------------------")
(-main)