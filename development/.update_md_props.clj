(require '[clojure.tools.cli :as cli])

(load-file "development/cli.clj")
(load-file "development/fs.clj")

(def cli-options [["-h" "--help"]])

(defn update-md-props [md]
  (let [root-dir (find-root-dir md)]
    (prn (.getAbsolutePath root-dir))))

(defn find-md [dir]
  (println (str "looking for markdown files under " dir))
  (remove nil? (flatten (travers-dir dir md?))))

(defn -main []
  (let [{:keys [options arguments summary errors]}
        (cli/parse-opts *command-line-args* cli-options)]
    (cond errors
          (exit 1 (first errors))
          (:help options)
          (println summary)
          arguments
          (doseq [dir arguments]
            (-> dir
                dir?
                find-md
                (#(doseq [md %] (update-md-props md))))))))

(-main)