"use strict";var e=require("react");exports.useStateCallback=r=>{const[t,u]=e.useState(r),c=e.useRef(void 0),s=e.useCallback(((e,r)=>{c.current=r,u(e)}),[]);return e.useEffect((()=>{c.current&&(c.current(t),c.current=void 0)}),[t]),[t,s]};
//# sourceMappingURL=use-state-callback.js.map
