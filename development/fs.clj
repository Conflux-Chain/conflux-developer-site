(require
 '[clojure.string :as s]
 '[clojure.java.io :as io]
 '[cheshire.core :as json])


(load-file "development/cli.clj")
(load-file "development/util.clj")

(def git-ignore-cache {})

(defn ->file [& args]
  (if (string? (first args)) (apply io/file args) (first args)))

(defn ->file-path [file-or-string]
  (if (string? file-or-string) file-or-string (.getAbsolutePath file-or-string)))

(defn json->edn [file]
  (-> file
      ->file-path
      slurp
      (#(json/parse-string % true))))

(defn file? [file]
  (-> file ->file (#(.isFile %))))

(defn md? [file]
  (when (s/ends-with? (.toString file) ".md") file))

(defn line-to-v [file]
  (with-open [rdr (io/reader (.getAbsolutePath file))]
    (mapv identity (line-seq rdr))))

(defn root? [dir]
  (member? ".git" (.list dir)))

(defn dir? [dir]
  (let [dir (->file dir)]
    (if (.isDirectory dir)
      dir
      (exit 1 (str "Invalid directory " dir)))))

(defn get-git-file-updated-at [file]
  (:out (sh "git" "log" "-1" "--format=\"%ad\"" "--" (-> file ->file (#(.getAbsolutePath %))))))

(defn find-root-dir [file]
  (let [file (->file file)]
    (if (.isDirectory file)
      (if (root? file) file (find-root-dir (.getParentFile file)))
      (find-root-dir (.getParentFile file)))))

#_(defn git-ignore? [file]
  (let [file-name (.getName file)
        root      (find-root-dir file)
        ignore-re (or (get git-ignore-cache (.getAbsolutePath root))
                      (filter #(not (s/starts-with? % "#"))
                              (line-to-v (io/file root ".gitignore"))))]
    (member? true (map #(re-find (re-pattern %) file-name) ignore-re))))

(defn travers-dir [dir f]
  (if (.isDirectory dir)
    (mapv #(travers-dir % f) (.listFiles dir))
    (f dir)))