import t,{css as a}from"styled-components";import{V3_MediaQuery as $}from"../v3_theme/breakpoint/media-query-helper.js";const n=t.div`
    position: relative;

    ${t=>{const{$xxlStart:n,$xxlSpan:o,$xlStart:r,$xlSpan:x,$lgStart:s,$lgSpan:i,$mdStart:p,$mdSpan:m,$smStart:d,$smSpan:l,$xsStart:u,$xsSpan:S,$xxsStart:e,$xxsSpan:c}=t;return a`
            grid-column: ${n||"auto"} / span ${o||1};

            ${$.MaxWidth.xl} {
                grid-column: ${r||"auto"} / span ${x||1};
            }

            ${$.MaxWidth.lg} {
                grid-column: ${s||"auto"} / span ${i||1};
            }

            ${$.MaxWidth.md} {
                grid-column: ${p||"auto"} / span ${m||1};
            }

            ${$.MaxWidth.sm} {
                grid-column: ${d||"auto"} / span ${l||1};
            }

            ${$.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${S||1};
            }

            ${$.MaxWidth.xxs} {
                grid-column: ${e||"auto"} / span ${c||1};
            }
        `}}
`;export{n as StyledDiv};
//# sourceMappingURL=col-div.style.js.map
