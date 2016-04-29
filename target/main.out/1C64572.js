goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11741__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11742__i = 0, G__11742__a = new Array(arguments.length -  0);
while (G__11742__i < G__11742__a.length) {G__11742__a[G__11742__i] = arguments[G__11742__i + 0]; ++G__11742__i;}
  args = new cljs.core.IndexedSeq(G__11742__a,0);
} 
return G__11741__delegate.call(this,args);};
G__11741.cljs$lang$maxFixedArity = 0;
G__11741.cljs$lang$applyTo = (function (arglist__11743){
var args = cljs.core.seq(arglist__11743);
return G__11741__delegate(args);
});
G__11741.cljs$core$IFn$_invoke$arity$variadic = G__11741__delegate;
return G__11741;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11744__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11745__i = 0, G__11745__a = new Array(arguments.length -  0);
while (G__11745__i < G__11745__a.length) {G__11745__a[G__11745__i] = arguments[G__11745__i + 0]; ++G__11745__i;}
  args = new cljs.core.IndexedSeq(G__11745__a,0);
} 
return G__11744__delegate.call(this,args);};
G__11744.cljs$lang$maxFixedArity = 0;
G__11744.cljs$lang$applyTo = (function (arglist__11746){
var args = cljs.core.seq(arglist__11746);
return G__11744__delegate(args);
});
G__11744.cljs$core$IFn$_invoke$arity$variadic = G__11744__delegate;
return G__11744;
})()
;

return null;
});
