import{isReact19 as o}from"./version.js";const n=(...n)=>t=>{const r=[];for(const o of n)if("function"==typeof o){const n=o(t),f="function"==typeof n;r.push(f?n:()=>o(null))}else o&&(o.current=t,r.push((()=>{o.current=null})));if(o())return()=>{for(const o of r)o()}};export{n as mergeRefs};
//# sourceMappingURL=merge-refs.js.map
