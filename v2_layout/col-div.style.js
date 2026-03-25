import t,{css as o}from"styled-components";import{V2_MediaQuery as a}from"../v2_media/media.js";const e=t.div`
    position: relative;
    ${t=>{const{$desktopStart:e,$desktopSpan:i,$tabletStart:n,$tabletSpan:$,$mobileStart:r,$mobileSpan:m}=t;return o`
            grid-column: ${e||"auto"} / span ${i||1};

            ${a.MaxWidth.tablet} {
                grid-column: ${n||"auto"} / span
                    ${$||1};
            }

            ${a.MaxWidth.mobileL} {
                grid-column: ${r||"auto"} / span
                    ${m||1};
            }
        `}}
`;export{e as StyledDiv};
//# sourceMappingURL=col-div.style.js.map
