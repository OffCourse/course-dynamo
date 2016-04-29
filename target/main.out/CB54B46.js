goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11861__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11862__i = 0, G__11862__a = new Array(arguments.length -  0);
while (G__11862__i < G__11862__a.length) {G__11862__a[G__11862__i] = arguments[G__11862__i + 0]; ++G__11862__i;}
  args = new cljs.core.IndexedSeq(G__11862__a,0);
} 
return G__11861__delegate.call(this,args);};
G__11861.cljs$lang$maxFixedArity = 0;
G__11861.cljs$lang$applyTo = (function (arglist__11863){
var args = cljs.core.seq(arglist__11863);
return G__11861__delegate(args);
});
G__11861.cljs$core$IFn$_invoke$arity$variadic = G__11861__delegate;
return G__11861;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11864__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11865__i = 0, G__11865__a = new Array(arguments.length -  0);
while (G__11865__i < G__11865__a.length) {G__11865__a[G__11865__i] = arguments[G__11865__i + 0]; ++G__11865__i;}
  args = new cljs.core.IndexedSeq(G__11865__a,0);
} 
return G__11864__delegate.call(this,args);};
G__11864.cljs$lang$maxFixedArity = 0;
G__11864.cljs$lang$applyTo = (function (arglist__11866){
var args = cljs.core.seq(arglist__11866);
return G__11864__delegate(args);
});
G__11864.cljs$core$IFn$_invoke$arity$variadic = G__11864__delegate;
return G__11864;
})()
;

return null;
});
