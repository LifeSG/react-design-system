"use strict";var r,e,u=require("./_baseFindIndex.js"),t=require("./_baseIteratee.js"),n=require("./toInteger.js");exports.__require=function(){if(e)return r;e=1;var i=u.__require(),_=t.__require(),a=n.__require(),s=Math.max;return r=function(r,e,u){var t=null==r?0:r.length;if(!t)return-1;var n=null==u?0:a(u);return n<0&&(n=s(t+n,0)),i(r,_(e,3),n)}};
//# sourceMappingURL=findIndex.js.map
