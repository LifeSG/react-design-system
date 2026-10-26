import{i as r}from"./isArrayLike.js";var n=r;var t=function(r,t){return function(e,i){if(null==e)return e;if(!n(e))return r(e,i);for(var u=e.length,a=t?u:-1,f=Object(e);(t?a--:++a<u)&&!1!==i(f[a],a,f););return e}};export{t as _};
//# sourceMappingURL=_createBaseEach.js.map
