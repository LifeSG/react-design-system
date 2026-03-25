"use strict";var e=require("../v2_spec/media-spec.js");const i=i=>Object.keys(e.MediaWidths).reduce(((d,t)=>{const s=e.MediaWidths[t];return d[t]=`@media screen and (${i}: ${s}px)`,d}),{}),d={MaxWidth:i("max-width"),MinWidth:i("min-width")},t=e.MediaWidths;exports.V2_MediaQuery=d,exports.V2_MediaWidths=t;
//# sourceMappingURL=media.js.map
