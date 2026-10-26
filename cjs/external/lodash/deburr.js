"use strict";var r=require("./_deburrLetter.js"),e=require("./toString.js"),u=r._deburrLetter,t=e.toString_1,f=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,x=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var d=function(r){return(r=t(r))&&r.replace(f,u).replace(x,"")};exports.deburr_1=d;
//# sourceMappingURL=deburr.js.map
