function e({ref:e,formatter:t}){return()=>{var n;const r=e.current;if(!r)return;const u=r.value,a=t(u),o=null!==(n=r.selectionEnd)&&void 0!==n?n:0,l=u.substring(0,o),i=t(l),s=l.length-i.length,c=Math.max(0,o-s);return{nextValue:a,updateCaretPosition:()=>{r.value=a,r.setSelectionRange(c,c)}}}}export{e as useNextInputState};
//# sourceMappingURL=use-next-input-state.js.map
