"use strict";var r=require("./isArrayLike.js").isArrayLike_1;var e=function(e,t){return function(i,n){if(null==i)return i;if(!r(i))return e(i,n);for(var u=i.length,a=t?u:-1,s=Object(i);(t?a--:++a<u)&&!1!==n(s[a],a,s););return i}};exports._createBaseEach=e;
//# sourceMappingURL=_createBaseEach.js.map
