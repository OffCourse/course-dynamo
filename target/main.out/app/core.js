// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
app.core.AWS = cljs.nodejs.require.call(null,"aws-sdk");
app.core.doc = cljs.nodejs.require.call(null,"dynamodb-doc");
app.core.dynamo = app.core.doc.DynamoDB();
app.core.handler = (function app$core$handler(event,context,cb){
var course = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,event,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var query = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"TableName","TableName",1349571255),"courses",new cljs.core.Keyword(null,"Item","Item",-1374423044),course], null);
return app.core.dynamo.putItem(cljs.core.clj__GT_js.call(null,query),((function (course,query){
return (function (p1__7573_SHARP_,p2__7574_SHARP_){
return cb.call(null,(cljs.core.truth_(p1__7573_SHARP_)?cljs.core.clj__GT_js.call(null,p1__7573_SHARP_):null),(cljs.core.truth_(p2__7574_SHARP_)?cljs.core.clj__GT_js.call(null,p2__7574_SHARP_):null));
});})(course,query))
);
});

//# sourceMappingURL=core.js.map