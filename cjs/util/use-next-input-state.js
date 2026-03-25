"use strict";exports.useNextInputState=function({ref:t,formatter:e}){return()=>{var n;const r=t.current;if(!r)return;const u=r.value,a=e(u),s=null!==(n=r.selectionEnd)&&void 0!==n?n:0,o=u.substring(0,s),i=e(o),l=o.length-i.length,c=Math.max(0,s-l);return{nextValue:a,updateCaretPosition:()=>{r.value=a,r.setSelectionRange(c,c)}}}};
//# sourceMappingURL=use-next-input-state.js.map
