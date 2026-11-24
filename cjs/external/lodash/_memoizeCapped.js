"use strict";var r,e,u=require("./memoize.js");exports.__require=function(){if(e)return r;e=1;var i=u.__require();return r=function(r){var e=i(r,(function(r){return 500===u.size&&u.clear(),r})),u=e.cache;return e}};
//# sourceMappingURL=_memoizeCapped.js.map
