goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11936__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11937__i = 0, G__11937__a = new Array(arguments.length -  0);
while (G__11937__i < G__11937__a.length) {G__11937__a[G__11937__i] = arguments[G__11937__i + 0]; ++G__11937__i;}
  args = new cljs.core.IndexedSeq(G__11937__a,0);
} 
return G__11936__delegate.call(this,args);};
G__11936.cljs$lang$maxFixedArity = 0;
G__11936.cljs$lang$applyTo = (function (arglist__11938){
var args = cljs.core.seq(arglist__11938);
return G__11936__delegate(args);
});
G__11936.cljs$core$IFn$_invoke$arity$variadic = G__11936__delegate;
return G__11936;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11939__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11940__i = 0, G__11940__a = new Array(arguments.length -  0);
while (G__11940__i < G__11940__a.length) {G__11940__a[G__11940__i] = arguments[G__11940__i + 0]; ++G__11940__i;}
  args = new cljs.core.IndexedSeq(G__11940__a,0);
} 
return G__11939__delegate.call(this,args);};
G__11939.cljs$lang$maxFixedArity = 0;
G__11939.cljs$lang$applyTo = (function (arglist__11941){
var args = cljs.core.seq(arglist__11941);
return G__11939__delegate(args);
});
G__11939.cljs$core$IFn$_invoke$arity$variadic = G__11939__delegate;
return G__11939;
})()
;

return null;
});
