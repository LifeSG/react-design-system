"use strict";var r,e,u=require("./_deburrLetter.js"),f=require("./toString.js");exports.__require=function(){if(e)return r;e=1;var t=u.__require(),i=f.__require(),n=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,x=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");return r=function(r){return(r=i(r))&&r.replace(n,t).replace(x,"")}};
//# sourceMappingURL=deburr.js.map
