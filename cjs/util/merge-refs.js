"use strict";var e=require("./version.js");exports.mergeRefs=(...r)=>t=>{const n=[];for(const e of r)if("function"==typeof e){const r=e(t),o="function"==typeof r;n.push(o?r:()=>e(null))}else e&&(e.current=t,n.push((()=>{e.current=null})));if(e.isReact19())return()=>{for(const e of n)e()}};
//# sourceMappingURL=merge-refs.js.map
