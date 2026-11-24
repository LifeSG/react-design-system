"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t,r=e(require("react"));class n{static generate(){return Math.random().toString(36).substring(2,9)}}const u=null!==(t=r.default.useId)&&void 0!==t?t:()=>{const[e]=r.default.useState((()=>n.generate()));return e};exports.SimpleIdGenerator=n,exports.useId=u;
//# sourceMappingURL=simple-id-generator.js.map
