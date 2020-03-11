(require '[clojure.java.shell :refer [sh]])
(require '[clojure.java.io :as io])
(require '[clojure.string :as str])
(require '[cheshire.core :as json])

(load-file "development/cli.clj")
(load-file "development/fs.clj")

(defn sh->vec [& args]
  (-> args
      (#(apply sh %))
      :out
      (#(str/split % #"\n"))))

(defn find-devdoc-json [dir]
  (let [dir (.getAbsolutePath dir)
        jsonf (io/file
              (first
               (sh->vec "fd" "-t" "f" "--regex" "devdocs\\.json$" dir)))]
    (if (.exists jsonf) jsonf
        (exit 1 (str "Can't find devdocs.json file under " dir)))))

(defn docs->devdoc-jsons [docs]
  (mapv find-devdoc-json docs))

(defn -main []
  (let [docs
        (-> "docs"
            ->file
            (#(.listFiles %))
            x-nils
            (#(remove file? %)))
        jsons (-> docs docs->devdoc-jsons)]
    jsons))

(println "------")
(-main)