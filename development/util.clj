(defn member?
  "I'm still amazed that Clojure does not provide a simple member function.
   Returns true if `item` is a member of `series`, else nil."
  [item series]
  (and (some #(= item %) series) true))

(defn x-nils
  "Remove any nil in coll"
  [coll]
  (remove nil? coll))

(defn sh->vec [& args]
  (-> args
      (#(apply sh %))
      :out
      (#(str/split % #"\n"))))