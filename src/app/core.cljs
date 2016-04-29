(ns app.core
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(defn handler [event context]
  (.succeed context (js->clj event :keywordize-keys true)))
