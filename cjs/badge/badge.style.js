"use strict";var e=require("styled-components"),r=require("../v3_theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e);const s=o.default.div`
    ${r=>r.$isOverlay&&e.css`
            position: relative;
            width: fit-content;
            height: fit-content;
        `}
`,i=o.default.div`
    ${r=>r.$isOverlay&&e.css`
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%, -25%)
                ${r.$offset?`translate(${r.$offset[0]},${r.$offset[1]})`:""};
        `}
`,d=e.css`
    min-width: 1.25rem;
    padding: 0.25rem 0.375rem;
    font-size: ${r.V3_Font.Spec["body-size-xs"]};
    font-weight: ${r.V3_Font.Spec["weight-bold"]};
    line-height: 1;
`,a=e.css`
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
`,n=o.default.div`
    background-color: ${({$color:e})=>"important"===e?r.V3_Colour["icon-error"]:r.V3_Colour["bg-primary"]};
    color: ${r.V3_Colour["text-inverse"]};
    font-weight: ${r.V3_Font.Spec["weight-bold"]};
    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    ${({$variant:t,$color:o})=>{switch(t){case"number":return e.css`
                    ${d}
                    border-radius: ${r.V3_Radius.full};
                `;case"number-with-border":return e.css`
                    ${d}
                    border-radius: ${r.V3_Radius.full};
                    box-shadow: 0 0 0 ${r.V3_Border["width-020"]}
                        ${r.V3_Colour.bg};
                `;case"dot":return e.css`
                    ${a}
                `;case"dot-with-border":return e.css`
                    ${a}
                    box-shadow: 0 0 0  ${r.V3_Border["width-020"]} ${r.V3_Colour.bg};
                `;case"square-number":return e.css`
                    ${d}
                    border-radius: ${r.V3_Radius.sm};
                    padding: 0.25rem 0.4375rem;
                    ${"default"===o&&e.css`
                        background-color: ${r.V3_Colour["bg-primary-subtler"]};
                        color: ${r.V3_Colour["text-primary"]};
                    `}
                `;default:return""}}};
`;exports.BadgeOverlay=s,exports.BadgeWrapper=i,exports.StyledBadge=n;
//# sourceMappingURL=badge.style.js.map
