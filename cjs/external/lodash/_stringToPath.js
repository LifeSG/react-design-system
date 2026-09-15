"use strict";var e=require("./_memoizeCapped.js")._memoizeCapped,r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p=/\\(\\)?/g,t=e((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(r,(function(e,r,a,i){t.push(a?i.replace(p,"$1"):r||e)})),t}));exports._stringToPath=t;
//# sourceMappingURL=_stringToPath.js.map
