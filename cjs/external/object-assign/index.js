"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r,t;exports.__require=function(){if(t)return r;t=1;var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;return r=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(r){return t[r]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(r){n[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(r,t){for(var c,i,a=function(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}(r),u=1;u<arguments.length;u++){for(var f in c=Object(arguments[u]))n.call(c,f)&&(a[f]=c[f]);if(e){i=e(c);for(var s=0;s<i.length;s++)o.call(c,i[s])&&(a[i[s]]=c[i[s]])}}return a}};
//# sourceMappingURL=index.js.map
