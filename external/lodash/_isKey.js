import{i as r}from"./isArray.js";import{i as t}from"./isSymbol.js";var o=r,s=t,e=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;var n=function(r,t){if(o(r))return!1;var n=typeof r;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=r&&!s(r))||(i.test(r)||!e.test(r)||null!=t&&r in Object(t))};export{n as _};
//# sourceMappingURL=_isKey.js.map
