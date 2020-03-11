(require '[clojure.string :as str])

(load-file "development/fs.clj")
(load-file "development/cli.clj")

(defn get-md-header-range [lines md]
  (let [path (.getAbsolutePath (->file md))
        header-start-idx
        (loop [iter 0]
          (let [line (nth lines iter)]
            (if (= "---" line)
              (inc iter)
              (if (>= (inc iter) (count lines))
                (exit 1 (str "Can't find markdown headers in file " path))
                (recur (inc iter))))))
        header-end-idx
        (loop [iter 0]
          (let [line (nth lines iter)]
            (if (and (> iter header-start-idx) (= "---" line))
              iter
              (if (>= (inc iter) (count lines))
                (exit 1 (str "Can't find markdown headers in file " path))
                (recur (inc iter))))))]
    [header-start-idx header-end-idx]))

(defn md->md-header-edn [md]
  (let [path                              (.getAbsolutePath (->file md))
        lines                             (-> path slurp (#(str/split % #"\n")))
        [header-start-idx header-end-idx] (get-md-header-range lines md)
        headers                           (subvec lines header-start-idx header-end-idx)
        headers-edn                       (mapv (fn [header] (let [[k v] (str/split header #":")]
                                                              [(keyword k) (str/trim v)])) headers)
        flat-headers                      (flatten headers-edn)]
    (when-not (member? :id flat-headers)
      (exit 1 (str "id is not defined in " path)))
    (when-not (member? :title flat-headers)
      (exit 1 (str "title is not defined in " path)))
    (apply array-map flat-headers)))

(defn edn->update-md-header! [edn md]
  (let [md                                (->file md)
        path                              (.getAbsolutePath (->file md))
        lines                             (-> path slurp (#(str/split % #"\n")))
        headers                           (mapv (fn [[k v]] (str (name k) ": " v)) edn)
        [header-start-idx header-end-idx] (get-md-header-range lines md)
        new-lines                         (loop [x   header-start-idx
                                                 y   0
                                                 rst lines]
                                            (if (= x (- header-end-idx 1))
                                              rst
                                              (recur (inc x) (inc y) (assoc rst x (nth headers y)))))]
    (spit path (str/join "
" new-lines))))