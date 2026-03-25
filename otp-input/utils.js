const t=(t,e=1)=>!!t&&RegExp(`^[0-9]{${e}}$`).test(t),e=(t,e,r)=>{if(t.length===e)return t;if(r){const[n,s]=t.split(r.separator);return n===r.value&&s.length===e?s:""}return""};export{e as stripOtpFromAutofill,t as validateUserInput};
//# sourceMappingURL=utils.js.map
