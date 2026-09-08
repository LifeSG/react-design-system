"use strict";var e=require("react");exports.useStateRef=t=>{const[r,s]=e.useState(t),u=e.useRef(t);return[r,e.useCallback((e=>{u.current=e,s(e)}),[]),u]};
//# sourceMappingURL=use-state-ref.js.map
