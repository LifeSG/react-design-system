"use strict";var r,e,t=require("./_baseIsMatch.js"),u=require("./_getMatchData.js"),i=require("./_matchesStrictComparable.js");exports.__require=function(){if(e)return r;e=1;var a=t.__require(),n=u.__require(),_=i.__require();return r=function(r){var e=n(r);return 1==e.length&&e[0][2]?_(e[0][0],e[0][1]):function(t){return t===r||a(t,r,e)}}};
//# sourceMappingURL=_baseMatches.js.map
