import{__require as r}from"./_baseFindIndex.js";import{__require as e}from"./_baseIteratee.js";import{__require as t}from"./toInteger.js";var n,a;function i(){if(a)return n;a=1;var i=r(),u=e(),o=t(),_=Math.max;return n=function(r,e,t){var n=null==r?0:r.length;if(!n)return-1;var a=null==t?0:o(t);return a<0&&(a=_(n+a,0)),i(r,u(e,3),a)}}export{i as __require};
//# sourceMappingURL=findIndex.js.map
