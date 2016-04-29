(ns app.core
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(def yaml (nodejs/require "js-yaml"))

(defn handler [event context]
  (.succeed context (get (js->clj event :keywordize-keys true) :type)))
