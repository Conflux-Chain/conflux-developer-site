(load-file "development/util.clj")
(load-file "development/fs.clj")

(defn git? [dir]
  (let [file (->file dir)
        git (->file (.getAbsolutePath file) ".git")]
    (.exists git)))

(defn submodule? [dir]
  (git? dir))

(defn submodule-hash [dir & args]
  (let [dir (->file dir)]
    (if (submodule? dir)
      (let [diff (apply sh->vec
                        (concat
                         ["bash" "-c" (str "git diff --no-color " (.getAbsolutePath dir) " | tail -2")]
                         args))
            diff (mapv #(re-find #"\b[0-9a-f]{5,40}\b" %) diff)]
        (if (first diff) diff [nil nil]))
      [nil nil])))