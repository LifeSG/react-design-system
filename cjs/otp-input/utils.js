"use strict";exports.stripOtpFromAutofill=(t,e,r)=>{if(t.length===e)return t;if(r){const[s,p]=t.split(r.separator);return s===r.value&&p.length===e?p:""}return""},exports.validateUserInput=(t,e=1)=>!!t&&RegExp(`^[0-9]{${e}}$`).test(t);
//# sourceMappingURL=utils.js.map
