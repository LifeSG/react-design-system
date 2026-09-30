"use strict";var t=require("./_baseIsMatch.js"),a=require("./_getMatchData.js"),e=require("./_matchesStrictComparable.js"),r=t._baseIsMatch,s=a._getMatchData,c=e._matchesStrictComparable;var h=function(t){var a=s(t);return 1==a.length&&a[0][2]?c(a[0][0],a[0][1]):function(e){return e===t||r(e,t,a)}};exports._baseMatches=h;
//# sourceMappingURL=_baseMatches.js.map
