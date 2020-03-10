(require '[clojure.string :as s]
         '[clojure.java.io :as io]
         '[clojure.tools.cli :refer [parse-opts]])

(defn exit [status & [msg]]
  (if msg (println msg))
  (System/exit status))