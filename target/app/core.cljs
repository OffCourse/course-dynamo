(ns app.core
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)
(def AWS (nodejs/require "aws-sdk"))
(def doc (nodejs/require "dynamodb-doc"))
(def dynamo (.DynamoDB doc))

(defn handler [event context cb]
  (let [course (-> event
                   (js->clj :keywordize-keys true)
                   :course)
        query {:TableName "courses"
               :Item course}]
    (.putItem dynamo (clj->js query) #(cb (when %1 (clj->js %1)) (when %2 (clj->js %2))))))
