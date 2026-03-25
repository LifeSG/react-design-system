"use strict";var r=require("./isArray.js"),e=require("./isSymbol.js"),s=r.isArray_1,t=e.isSymbol_1,i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/;var u=function(r,e){if(s(r))return!1;var u=typeof r;return!("number"!=u&&"symbol"!=u&&"boolean"!=u&&null!=r&&!t(r))||(n.test(r)||!i.test(r)||null!=e&&r in Object(e))};exports._isKey=u;
//# sourceMappingURL=_isKey.js.map
