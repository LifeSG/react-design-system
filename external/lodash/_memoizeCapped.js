import{__require as r}from"./memoize.js";var e,n;function i(){if(n)return e;n=1;var i=r();return e=function(r){var e=i(r,function(r){return 500===n.size&&n.clear(),r}),n=e.cache;return e}}export{i as __require};
//# sourceMappingURL=_memoizeCapped.js.map
