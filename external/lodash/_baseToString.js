import{_ as r}from"./_Symbol.js";import{_ as o}from"./_arrayMap.js";import{i}from"./isArray.js";import{i as t}from"./isSymbol.js";var a=o,s=i,m=t,f=r?r.prototype:void 0,p=f?f.toString:void 0;var n=function r(o){if("string"==typeof o)return o;if(s(o))return a(o,r)+"";if(m(o))return p?p.call(o):"";var i=o+"";return"0"==i&&1/o==-1/0?"-0":i};export{n as _};
//# sourceMappingURL=_baseToString.js.map
