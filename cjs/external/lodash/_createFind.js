"use strict";var e=require("./_baseIteratee.js"),r=require("./isArrayLike.js"),t=require("./keys.js"),i=e._baseIteratee,a=r.isArrayLike_1,s=t.keys_1;var n=function(e){return function(r,t,n){var u=Object(r);if(!a(r)){var c=i(t);r=s(r),t=function(e){return c(u[e],e,u)}}var v=e(r,t,n);return v>-1?u[c?r[v]:v]:void 0}};exports._createFind=n;
//# sourceMappingURL=_createFind.js.map
