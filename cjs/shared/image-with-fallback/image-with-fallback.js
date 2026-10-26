"use strict";var r=require("react/jsx-runtime"),t=require("./default.png.js");exports.ImageWithFallback=({src:a,alt:e,className:s,"data-testid":l})=>r.jsx("img",{src:a,alt:e||"",className:s,"data-testid":l,onError:r=>{r.target.onerror=null,r.target.src=t.default}});
//# sourceMappingURL=image-with-fallback.js.map
