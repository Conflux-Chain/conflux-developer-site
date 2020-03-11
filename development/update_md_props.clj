(require '[clojure.java.shell :refer [sh]])
(require '[clojure.java.io :as io])
(require '[clojure.string :as str])
(require '[cheshire.core :as json])

(load-file "development/cli.clj")
(load-file "development/fs.clj")
(load-file "development/md.clj")

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
  (let [[k v] item]
    (cond
      (string? item)
      (file-f metadata item)
      (vector? v)
      (mapv #(each-sidebar-item metadata file-f %) v)
      (and (map? v) (:type v))
      {k v}
      :else
      (mapv #(each-sidebar-item metadata file-f v)))))

(defn process-md [[repo-name doc-json-file lang] file-path]
  (let [md (->file (.getParent doc-json-file) file-path)
        md-headers (md->md-header-edn md)]
    (prn "md-headers" md-headers)))

(defn process-each-lang-config [metadata [lang conf]]
  (mapv #(each-sidebar-item (conj metadata lang) process-md %) conf))

(defn process-config [[metadata config]]
  (mapv #(process-each-lang-config metadata %) config))

(defn get-config [[doc-dir doc-json-file]]
  (let [config (json->edn doc-json-file)
        repo-name (or (:repo config) (.getName doc-dir))
        docs-config (:docs config)]
    [[repo-name doc-json-file] (into [] docs-config)]))

(defn -main []
  (let [docs                            ;; project-root-dir-file
        (-> "conflux-docs-index.json"
            json->edn
            :docs
            (#(mapv #(io/file (str "docs/" %)) %)))
        jsons (-> docs docs->devdoc-jsons)]  ;; project-docs-json-file
    (-> (zipmap docs jsons)
        (#(mapv get-config %))
        (#(mapv process-config %)))
    (exit 0 "Finished!")))

(println "-------------------")
(-main)