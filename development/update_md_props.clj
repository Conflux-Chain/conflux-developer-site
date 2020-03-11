(require '[clojure.java.shell :refer [sh]])
(require '[clojure.java.io :as io])
(require '[clojure.string :as str])
(require '[cheshire.core :as json])

(load-file "development/cli.clj")
(load-file "development/fs.clj")

(defn find-devdoc-json [dir]
  (let [dir (.getAbsolutePath dir)
        jsonf (io/file
              (first
               (sh->vec "fd" "-t" "f" "--regex" "conflux-docs\\.json$" dir)))]
    (if (.exists jsonf) jsonf
        (exit 1 (str "Can't find conflux-docs.json file under " dir)))))

(defn docs->devdoc-jsons [docs]
  (mapv find-devdoc-json docs))

(defn -main []
  (let [docs
        (-> "conflux-docs-index.json"
            json->edn
            :docs
            (#(mapv #(io/file (str "docs/" %)) %)))
        jsons (-> docs docs->devdoc-jsons)]
    jsons))

(println "------")
(-main)