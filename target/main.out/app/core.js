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
return (function (p1__11873_SHARP_,p2__11872_SHARP_){
var c__8953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto__,c,query){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto__,c,query){
return (function (state_11891){
var state_val_11892 = (state_11891[(1)]);
if((state_val_11892 === (1))){
var inst_11887 = cljs.core.clj__GT_js.call(null,p2__11872_SHARP_);
var state_11891__$1 = state_11891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11891__$1,(2),c,inst_11887);
} else {
if((state_val_11892 === (2))){
var inst_11889 = (state_11891[(2)]);
var state_11891__$1 = state_11891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11891__$1,inst_11889);
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
var statearr_11896 = [null,null,null,null,null,null,null];
(statearr_11896[(0)] = app$core$save_course_$_state_machine__8842__auto__);

(statearr_11896[(1)] = (1));

return statearr_11896;
});
var app$core$save_course_$_state_machine__8842__auto____1 = (function (state_11891){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_11891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e11897){if((e11897 instanceof Object)){
var ex__8845__auto__ = e11897;
var statearr_11898_11900 = state_11891;
(statearr_11898_11900[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11901 = state_11891;
state_11891 = G__11901;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
app$core$save_course_$_state_machine__8842__auto__ = function(state_11891){
switch(arguments.length){
case 0:
return app$core$save_course_$_state_machine__8842__auto____0.call(this);
case 1:
return app$core$save_course_$_state_machine__8842__auto____1.call(this,state_11891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$core$save_course_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = app$core$save_course_$_state_machine__8842__auto____0;
app$core$save_course_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = app$core$save_course_$_state_machine__8842__auto____1;
return app$core$save_course_$_state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto__,c,query))
})();
var state__8955__auto__ = (function (){var statearr_11899 = f__8954__auto__.call(null);
(statearr_11899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto__);

return statearr_11899;
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
var course = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,event,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var c__8953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto__,course){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto__,course){
return (function (state_11921){
var state_val_11922 = (state_11921[(1)]);
if((state_val_11922 === (1))){
var inst_11916 = app.core.save_course.call(null,course);
var state_11921__$1 = state_11921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11921__$1,(2),inst_11916);
} else {
if((state_val_11922 === (2))){
var inst_11918 = (state_11921[(2)]);
var inst_11919 = cljs.core.println.call(null,inst_11918);
var state_11921__$1 = state_11921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11921__$1,inst_11919);
} else {
return null;
}
}
});})(c__8953__auto__,course))
;
return ((function (switch__8841__auto__,c__8953__auto__,course){
return (function() {
var app$core$handler_$_state_machine__8842__auto__ = null;
var app$core$handler_$_state_machine__8842__auto____0 = (function (){
var statearr_11926 = [null,null,null,null,null,null,null];
(statearr_11926[(0)] = app$core$handler_$_state_machine__8842__auto__);

(statearr_11926[(1)] = (1));

return statearr_11926;
});
var app$core$handler_$_state_machine__8842__auto____1 = (function (state_11921){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_11921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e11927){if((e11927 instanceof Object)){
var ex__8845__auto__ = e11927;
var statearr_11928_11930 = state_11921;
(statearr_11928_11930[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11931 = state_11921;
state_11921 = G__11931;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
app$core$handler_$_state_machine__8842__auto__ = function(state_11921){
switch(arguments.length){
case 0:
return app$core$handler_$_state_machine__8842__auto____0.call(this);
case 1:
return app$core$handler_$_state_machine__8842__auto____1.call(this,state_11921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$core$handler_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = app$core$handler_$_state_machine__8842__auto____0;
app$core$handler_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = app$core$handler_$_state_machine__8842__auto____1;
return app$core$handler_$_state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto__,course))
})();
var state__8955__auto__ = (function (){var statearr_11929 = f__8954__auto__.call(null);
(statearr_11929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto__);

return statearr_11929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto__,course))
);

return c__8953__auto__;
});

//# sourceMappingURL=core.js.map