import{useState as e,useCallback as t}from"react";import{useResizeDetector as r}from"../external/react-resize-detector/build/index.esm.js";const o=({maxWidth:o,targetRef:a})=>{const[i,s]=e(!1),n=t((e=>{s(e<=o)}),[o]);return r({targetRef:a,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:n}),i};export{o as useContainerQuery};
//# sourceMappingURL=use-container-query.js.map
