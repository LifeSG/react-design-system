"use strict";var e=require("styled-components"),o=require("../../typography/index.js"),t=require("../../v3_theme/index.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=i(e);const a=r.default.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
`,n=r.default(o.Typography.BodyBL)`
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
        background-color: ${e=>e.$isSelected?t.V3_Colour["bg-primary"]:t.V3_Colour["bg-primary-subtler"]};
        transition: all 250ms linear;
    }

    &:hover,
    &:focus-within {
        background-color: ${t.V3_Colour["bg-hover-subtle"]};
    }
`,s=r.default.div`
    display: block;
    padding: ${t.V3_Spacing["spacing-16"]};
    padding-left: ${t.V3_Spacing["spacing-20"]};

    &:focus-visible {
        outline: 2px solid ${t.V3_Colour["focus-ring"]};
        outline-offset: 2px;
        border-radius: ${t.V3_Radius.sm};
    }
`;exports.Nav=a,exports.NavItem=l,exports.NavItemContent=s,exports.TextLabel=n;
//# sourceMappingURL=local-nav-menu.styles.js.map
