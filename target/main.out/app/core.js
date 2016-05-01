// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
app.core.AWS = cljs.nodejs.require.call(null,"aws-sdk");
app.core.doc = cljs.nodejs.require.call(null,"dynamodb-doc");
app.core.dynamo = app.core.doc.DynamoDB();
app.core.save_course = (function app$core$save_course(course){
var c = cljs.core.async.chan.call(null);
var query = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"TableName","TableName",1349571255),"courses",new cljs.core.Keyword(null,"Item","Item",-1374423044),course], null);
app.core.dynamo.putItem(cljs.core.clj__GT_js.call(null,query),((function (c,query){
return (function (p1__12388_SHARP_,p2__12387_SHARP_){
var c__8953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto__,c,query){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto__,c,query){
return (function (state_12406){
var state_val_12407 = (state_12406[(1)]);
if((state_val_12407 === (1))){
var inst_12402 = cljs.core.clj__GT_js.call(null,p2__12387_SHARP_);
var state_12406__$1 = state_12406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12406__$1,(2),c,inst_12402);
} else {
if((state_val_12407 === (2))){
var inst_12404 = (state_12406[(2)]);
var state_12406__$1 = state_12406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12406__$1,inst_12404);
} else {
return null;
}
}
});})(c__8953__auto__,c,query))
;
return ((function (switch__8841__auto__,c__8953__auto__,c,query){
return (function() {
var app$core$save_course_$_state_machine__8842__auto__ = null;
var app$core$save_course_$_state_machine__8842__auto____0 = (function (){
var statearr_12411 = [null,null,null,null,null,null,null];
(statearr_12411[(0)] = app$core$save_course_$_state_machine__8842__auto__);

(statearr_12411[(1)] = (1));

return statearr_12411;
});
var app$core$save_course_$_state_machine__8842__auto____1 = (function (state_12406){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_12406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e12412){if((e12412 instanceof Object)){
var ex__8845__auto__ = e12412;
var statearr_12413_12415 = state_12406;
(statearr_12413_12415[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12416 = state_12406;
state_12406 = G__12416;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
app$core$save_course_$_state_machine__8842__auto__ = function(state_12406){
switch(arguments.length){
case 0:
return app$core$save_course_$_state_machine__8842__auto____0.call(this);
case 1:
return app$core$save_course_$_state_machine__8842__auto____1.call(this,state_12406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$core$save_course_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = app$core$save_course_$_state_machine__8842__auto____0;
app$core$save_course_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = app$core$save_course_$_state_machine__8842__auto____1;
return app$core$save_course_$_state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto__,c,query))
})();
var state__8955__auto__ = (function (){var statearr_12414 = f__8954__auto__.call(null);
(statearr_12414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto__);

return statearr_12414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto__,c,query))
);

return c__8953__auto__;
});})(c,query))
);

return c;
});
app.core.handler = (function app$core$handler(event,context,cb){
var temp__4423__auto__ = (function (){var G__12432 = event;
var G__12432__$1 = (((G__12432 == null))?null:cljs.core.js__GT_clj.call(null,G__12432,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var G__12432__$2 = (((G__12432__$1 == null))?null:new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(G__12432__$1));
return G__12432__$2;
})();
if(cljs.core.truth_(temp__4423__auto__)){
var course = temp__4423__auto__;
var c__8953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto__,course,temp__4423__auto__){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto__,course,temp__4423__auto__){
return (function (state_12438){
var state_val_12439 = (state_12438[(1)]);
if((state_val_12439 === (1))){
var inst_12433 = app.core.save_course.call(null,course);
var state_12438__$1 = state_12438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12438__$1,(2),inst_12433);
} else {
if((state_val_12439 === (2))){
var inst_12435 = (state_12438[(2)]);
var inst_12436 = cb.call(null,null,inst_12435);
var state_12438__$1 = state_12438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12438__$1,inst_12436);
} else {
return null;
}
}
});})(c__8953__auto__,course,temp__4423__auto__))
;
return ((function (switch__8841__auto__,c__8953__auto__,course,temp__4423__auto__){
return (function() {
var app$core$handler_$_state_machine__8842__auto__ = null;
var app$core$handler_$_state_machine__8842__auto____0 = (function (){
var statearr_12443 = [null,null,null,null,null,null,null];
(statearr_12443[(0)] = app$core$handler_$_state_machine__8842__auto__);

(statearr_12443[(1)] = (1));

return statearr_12443;
});
var app$core$handler_$_state_machine__8842__auto____1 = (function (state_12438){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_12438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e12444){if((e12444 instanceof Object)){
var ex__8845__auto__ = e12444;
var statearr_12445_12447 = state_12438;
(statearr_12445_12447[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12448 = state_12438;
state_12438 = G__12448;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
app$core$handler_$_state_machine__8842__auto__ = function(state_12438){
switch(arguments.length){
case 0:
return app$core$handler_$_state_machine__8842__auto____0.call(this);
case 1:
return app$core$handler_$_state_machine__8842__auto____1.call(this,state_12438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$core$handler_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = app$core$handler_$_state_machine__8842__auto____0;
app$core$handler_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = app$core$handler_$_state_machine__8842__auto____1;
return app$core$handler_$_state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto__,course,temp__4423__auto__))
})();
var state__8955__auto__ = (function (){var statearr_12446 = f__8954__auto__.call(null);
(statearr_12446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto__);

return statearr_12446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto__,course,temp__4423__auto__))
);

return c__8953__auto__;
} else {
return cb.call(null,"couldn't save course");
}
});

//# sourceMappingURL=core.js.map