import{__require as r}from"./_deburrLetter.js";import{__require as e}from"./toString.js";var u,f;function t(){if(f)return u;f=1;var t=r(),i=e(),n=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");return u=function(r){return(r=i(r))&&r.replace(n,t).replace(o,"")}}export{t as __require};
//# sourceMappingURL=deburr.js.map
