import t from"react";var r;class e{static generate(){return Math.random().toString(36).substring(2,9)}}const n=null!==(r=t.useId)&&void 0!==r?r:()=>{const[r]=t.useState((()=>e.generate()));return r};export{e as SimpleIdGenerator,n as useId};
//# sourceMappingURL=simple-id-generator.js.map
