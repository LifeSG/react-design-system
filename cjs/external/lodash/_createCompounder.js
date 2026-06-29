"use strict";var r=require("./_arrayReduce.js"),e=require("./deburr.js"),u=require("./words.js"),a=r._arrayReduce,s=e.deburr_1,t=u.words_1,c=RegExp("['’]","g");var d=function(r){return function(e){return a(t(s(e).replace(c,"")),r,"")}};exports._createCompounder=d;
//# sourceMappingURL=_createCompounder.js.map
