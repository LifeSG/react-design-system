"use strict";var r=require("./_isPrototype.js"),e=require("./_nativeKeys.js"),t=r._isPrototype,s=e._nativeKeys,o=Object.prototype.hasOwnProperty;var i=function(r){if(!t(r))return s(r);var e=[];for(var i in Object(r))o.call(r,i)&&"constructor"!=i&&e.push(i);return e};exports._baseKeys=i;
//# sourceMappingURL=_baseKeys.js.map
