"use strict";var e=require("styled-components"),r=require("../shared/styles/index.js"),o=require("../typography/index.js"),i=require("../v3_theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);const s=n.default.li`
    display: flex;
    flex-direction: column;
`,a=n.default(o.Typography.LinkMD)`
    color: ${i.V3_Colour.text};

    margin: 0 ${i.V3_Spacing["spacing-8"]};

    border: ${i.V3_Border.solid} transparent;
    border-width: ${i.V3_Spacing["spacing-8"]} ${i.V3_Spacing["spacing-8"]};

    border-radius: ${i.V3_Radius.md};

    ${r.lineClampCss(2)}
    white-space: pre-wrap;

    &:hover,
    &:active,
    &:focus {
        background-color: ${i.V3_Colour["bg-hover"]};
        color: ${i.V3_Colour.text};
    }

    &:focus-visible {
        outline: 2px solid ${i.V3_Colour["focus-ring"]};
        outline-offset: 0;
    }
`;exports.Link=a,exports.MenuLinkDiv=s;
//# sourceMappingURL=menu-link.styles.js.map
