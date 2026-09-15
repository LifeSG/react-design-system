import{_ as s}from"./_ListCache.js";import{_ as t}from"./_Map.js";import{_ as a}from"./_MapCache.js";var _=s,i=t,r=a;var e=function(s,t){var a=this.__data__;if(a instanceof _){var e=a.__data__;if(!i||e.length<199)return e.push([s,t]),this.size=++a.size,this;a=this.__data__=new r(e)}return a.set(s,t),this.size=a.size,this};export{e as _};
//# sourceMappingURL=_stackSet.js.map
