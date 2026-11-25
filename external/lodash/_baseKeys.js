import{__require as r}from"./_isPrototype.js";import{__require as t}from"./_nativeKeys.js";var e,o;function i(){if(o)return e;o=1;var i=r(),n=t(),u=Object.prototype.hasOwnProperty;return e=function(r){if(!i(r))return n(r);var t=[];for(var e in Object(r))u.call(r,e)&&"constructor"!=e&&t.push(e);return t}}export{i as __require};
//# sourceMappingURL=_baseKeys.js.map
