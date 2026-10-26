"use strict";var e=require("react");exports.useEvent=function(r){const u=e.useRef(null);return e.useLayoutEffect((()=>{u.current=r}),[r]),e.useCallback(((...e)=>{var r;return null===(r=u.current)||void 0===r?void 0:r.call(u,...e)}),[])};
//# sourceMappingURL=use-event.js.map
