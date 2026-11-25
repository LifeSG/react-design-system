import{__require as r}from"./isArrayLike.js";var e,n;function t(){if(n)return e;n=1;var t=r();return e=function(r,e){return function(n,u){if(null==n)return n;if(!t(n))return r(n,u);for(var i=n.length,f=e?i:-1,o=Object(n);(e?f--:++f<i)&&!1!==u(o[f],f,o););return n}}}export{t as __require};
//# sourceMappingURL=_createBaseEach.js.map
