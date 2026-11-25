import{__require as r}from"./_arrayReduce.js";import{__require as e}from"./deburr.js";import{__require as u}from"./words.js";var i,o;function t(){if(o)return i;o=1;var t=r(),n=e(),a=u(),_=RegExp("['’]","g");return i=function(r){return function(e){return t(a(n(e).replace(_,"")),r,"")}}}export{t as __require};
//# sourceMappingURL=_createCompounder.js.map
