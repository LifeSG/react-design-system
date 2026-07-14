"use strict";var e=require("./_baseIsArguments.js"),r=require("./isObjectLike.js"),s=e._baseIsArguments,t=r.isObjectLike_1,n=Object.prototype,u=n.hasOwnProperty,c=n.propertyIsEnumerable,i=s(function(){return arguments}())?s:function(e){return t(e)&&u.call(e,"callee")&&!c.call(e,"callee")};exports.isArguments_1=i;
//# sourceMappingURL=isArguments.js.map
