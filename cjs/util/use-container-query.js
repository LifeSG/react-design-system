"use strict";var e=require("react"),t=require("../external/react-resize-detector/build/index.esm.js");exports.useContainerQuery=({maxWidth:r,targetRef:s})=>{const[a,i]=e.useState(!1),u=e.useCallback((e=>{i(e<=r)}),[r]);return t.useResizeDetector({targetRef:s,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:u}),a};
//# sourceMappingURL=use-container-query.js.map
