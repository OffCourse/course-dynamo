// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
app.core.yaml = cljs.nodejs.require.call(null,"js-yaml");
app.core.handler = (function app$core$handler(event,context){
return context.succeed(cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,event,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"type","type",1174270348)));
});

//# sourceMappingURL=core.js.map