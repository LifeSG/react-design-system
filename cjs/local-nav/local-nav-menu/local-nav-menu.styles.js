"use strict";var e=require("styled-components"),o=require("../../theme/index.js"),t=require("../../typography/typography.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=i(e);const a=r.default.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
`,n=r.default(t.Typography.BodyBL)`
    margin: 0;
`,l=r.default.li`
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 4px;
        height: 100%;
        top: 0;
        background-color: ${e=>e.$isSelected?o.Colour["bg-primary"]:o.Colour["bg-primary-subtler"]};
        transition: all 250ms linear;
    }

    &:hover,
    &:focus-within {
        background-color: ${o.Colour["bg-hover-subtle"]};
    }
`,s=r.default.div`
    display: block;
    padding: ${o.Spacing["spacing-16"]};
    padding-left: ${o.Spacing["spacing-20"]};

    &:focus-visible {
        outline: 2px solid ${o.Colour["focus-ring"]};
        outline-offset: 2px;
        border-radius: ${o.Radius.sm};
    }
`;exports.Nav=a,exports.NavItem=l,exports.NavItemContent=s,exports.TextLabel=n;
//# sourceMappingURL=local-nav-menu.styles.js.map
