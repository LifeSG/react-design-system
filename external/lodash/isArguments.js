import{_ as e}from"./_baseIsArguments.js";import{i as r}from"./isObjectLike.js";var t=e,a=r,o=Object.prototype,s=o.hasOwnProperty,l=o.propertyIsEnumerable,n=t(function(){return arguments}())?t:function(e){return a(e)&&s.call(e,"callee")&&!l.call(e,"callee")};export{n as i};
//# sourceMappingURL=isArguments.js.map
