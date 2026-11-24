"use strict";var r,e,u=require("./_arrayReduce.js"),i=require("./deburr.js"),n=require("./words.js");exports.__require=function(){if(e)return r;e=1;var t=u.__require(),_=i.__require(),q=n.__require(),s=RegExp("['’]","g");return r=function(r){return function(e){return t(q(_(e).replace(s,"")),r,"")}}};
//# sourceMappingURL=_createCompounder.js.map
