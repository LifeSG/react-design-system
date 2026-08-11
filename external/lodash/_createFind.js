import{_ as r}from"./_baseIteratee.js";import{i as t}from"./isArrayLike.js";import{k as a}from"./keys.js";var e=r,i=t,o=a;var s=function(r){return function(t,a,s){var n=Object(t);if(!i(t)){var f=e(a);t=o(t),a=function(r){return f(n[r],r,n)}}var m=r(t,a,s);return m>-1?n[f?t[m]:m]:void 0}};export{s as _};
//# sourceMappingURL=_createFind.js.map
