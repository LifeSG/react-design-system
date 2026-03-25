"use strict";var a=require("styled-components"),t=require("../v3_theme/breakpoint/media-query-helper.js");function e(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}const r=e(a).default.div`
    position: relative;

    ${e=>{const{$xxlStart:r,$xxlSpan:$,$xlStart:n,$xlSpan:i,$lgStart:u,$lgSpan:d,$mdStart:s,$mdSpan:o,$smStart:x,$smSpan:l,$xsStart:p,$xsSpan:m,$xxsStart:S,$xxsSpan:c}=e;return a.css`
            grid-column: ${r||"auto"} / span ${$||1};

            ${t.V3_MediaQuery.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${i||1};
            }

            ${t.V3_MediaQuery.MaxWidth.lg} {
                grid-column: ${u||"auto"} / span ${d||1};
            }

            ${t.V3_MediaQuery.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${o||1};
            }

            ${t.V3_MediaQuery.MaxWidth.sm} {
                grid-column: ${x||"auto"} / span ${l||1};
            }

            ${t.V3_MediaQuery.MaxWidth.xs} {
                grid-column: ${p||"auto"} / span ${m||1};
            }

            ${t.V3_MediaQuery.MaxWidth.xxs} {
                grid-column: ${S||"auto"} / span ${c||1};
            }
        `}}
`;exports.StyledDiv=r;
//# sourceMappingURL=col-div.style.js.map
