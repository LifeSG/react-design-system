"use strict";var e=require("styled-components"),t=require("../shared/image-placeholder/image-placeholder.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=a(e);const i=r.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,l=r.default.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,o=r.default(t.ImagePlaceholder)`
    width: 100%;
    height: 100%;
`;exports.DefaultPlaceholder=o,exports.ImageBox=l,exports.ImageWrapper=i;
//# sourceMappingURL=stateful-image.style.js.map
