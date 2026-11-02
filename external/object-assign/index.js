/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r,e;function t(){if(e)return r;e=1;var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;return r=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(r){n[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(r,e){for(var a,c,i=function(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}(r),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))n.call(a,u)&&(i[u]=a[u]);if(t){c=t(a);for(var b=0;b<c.length;b++)o.call(a,c[b])&&(i[c[b]]=a[c[b]])}}return i},r}export{t as __require};
//# sourceMappingURL=index.js.map
