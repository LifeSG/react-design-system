"use strict";var e,r,t=require("./_baseIsArguments.js"),u=require("./isObjectLike.js");exports.__require=function(){if(r)return e;r=1;var n=t.__require(),i=u.__require(),s=Object.prototype,c=s.hasOwnProperty,a=s.propertyIsEnumerable,l=n(function(){return arguments}())?n:function(e){return i(e)&&c.call(e,"callee")&&!a.call(e,"callee")};return e=l};
//# sourceMappingURL=isArguments.js.map
