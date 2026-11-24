import{__require as r}from"./_baseIsArguments.js";import{__require as e}from"./isObjectLike.js";var t,n;function a(){if(n)return t;n=1;var a=r(),o=e(),u=Object.prototype,i=u.hasOwnProperty,s=u.propertyIsEnumerable,c=a(function(){return arguments}())?a:function(r){return o(r)&&i.call(r,"callee")&&!s.call(r,"callee")};return t=c}export{a as __require};
//# sourceMappingURL=isArguments.js.map
