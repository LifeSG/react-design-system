"use strict";var e=require("styled-components"),r=require("../shared/styles/index.js"),o=require("../theme/index.js"),i=require("../typography/typography.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=t(e);const n=s.default.li`
    display: flex;
    flex-direction: column;
`,a=s.default(i.Typography.LinkMD)`
    color: ${o.Colour.text};

    margin: 0 ${o.Spacing["spacing-8"]};

    border: ${o.Border.solid} transparent;
    border-width: ${o.Spacing["spacing-8"]} ${o.Spacing["spacing-8"]};

    border-radius: ${o.Radius.md};

    ${r.lineClampCss(2)}
    white-space: pre-wrap;

    &:hover,
    &:active,
    &:focus {
        background-color: ${o.Colour["bg-hover"]};
        color: ${o.Colour.text};
    }

    &:focus-visible {
        outline: 2px solid ${o.Colour["focus-ring"]};
        outline-offset: 0;
    }
`;exports.Link=a,exports.MenuLinkDiv=n;
//# sourceMappingURL=menu-link.styles.js.map
