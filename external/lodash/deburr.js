import{_ as r}from"./_deburrLetter.js";import{t as f}from"./toString.js";var e=r,u=f,t=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,x=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var a=function(r){return(r=u(r))&&r.replace(t,e).replace(x,"")};export{a as d};
//# sourceMappingURL=deburr.js.map
