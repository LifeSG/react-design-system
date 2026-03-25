"use strict";var e=require("styled-components"),t=require("../../v3_theme/index.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e);const o=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},i=n.default.span`
    color: ${t.V3_Colour["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>o(e)}

    &:hover,
    &:focus-visible {
        color: ${t.V3_Colour["text-hover"]};
        ${({$hoverStyle:e})=>o(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,l=n.default.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`;exports.StyledIcon=l,exports.StyledText=i;
//# sourceMappingURL=popover-inline.styles.js.map
