import{useReducer as e}from"react";const t=({initialState:t,reducers:p,name:r,debug:a})=>{const[s,c]=e(((e,t)=>p[t.type]?p[t.type](e,t.payload):e),t);return[s,Object.fromEntries(Object.keys(p).map((e=>[e,t=>{a&&o(r,e,t),c({type:e,payload:t})}])))]},o=(e,t,o)=>{const p=[];p.push(`[${e}]`),p.push(t,o),console.log(...p)};export{t as useStateActions};
//# sourceMappingURL=use-state-actions.js.map
