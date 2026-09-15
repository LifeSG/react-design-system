"use strict";var t=require("styled-components"),e=require("../v2_media/media.js");function a(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}const i=a(t).default.div`
    position: relative;
    ${a=>{const{$desktopStart:i,$desktopSpan:o,$tabletStart:r,$tabletSpan:n,$mobileStart:d,$mobileSpan:u}=a;return t.css`
            grid-column: ${i||"auto"} / span ${o||1};

            ${e.V2_MediaQuery.MaxWidth.tablet} {
                grid-column: ${r||"auto"} / span
                    ${n||1};
            }

            ${e.V2_MediaQuery.MaxWidth.mobileL} {
                grid-column: ${d||"auto"} / span
                    ${u||1};
            }
        `}}
`;exports.StyledDiv=i;
//# sourceMappingURL=col-div.style.js.map
