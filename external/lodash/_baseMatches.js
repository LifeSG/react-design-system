import{__require as r}from"./_baseIsMatch.js";import{__require as t}from"./_getMatchData.js";import{__require as e}from"./_matchesStrictComparable.js";var a,i;function n(){if(i)return a;i=1;var n=r(),o=t(),u=e();return a=function(r){var t=o(r);return 1==t.length&&t[0][2]?u(t[0][0],t[0][1]):function(e){return e===r||n(e,r,t)}}}export{n as __require};
//# sourceMappingURL=_baseMatches.js.map
