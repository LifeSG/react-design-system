"use strict";var e=require("styled-components"),t=require("../../theme/index.js"),i=require("../../typography/typography.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e);const a=n.default.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
`,l=n.default(i.Typography.BodyBL)`
    margin: 0;
`,r=n.default.span`
    display: flex;
    align-items: center;
    gap: ${t.Spacing["spacing-8"]};
    width: 100%;
`,s=n.default.span`
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    min-height: ${t.Font.Spec["body-lh-baseline"]};
`,p=n.default.span`
    display: inline-flex;
    align-items: center;
    margin-left: auto;
`,d=n.default.li`
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
        background-color: ${e=>e.$isSelected?t.Colour["bg-primary"]:t.Colour["bg-primary-subtler"]};
        transition: all 250ms linear;
    }

    &:hover,
    &:focus-within {
        background-color: ${t.Colour["bg-hover-subtle"]};
    }
`,u=n.default.div`
    display: block;
    padding: ${t.Spacing["spacing-16"]};
    padding-left: ${t.Spacing["spacing-20"]};

    &:focus-visible {
        outline: 2px solid ${t.Colour["focus-ring"]};
        outline-offset: 2px;
        border-radius: ${t.Radius.sm};
    }
`;exports.LeftAddon=s,exports.Nav=a,exports.NavItem=d,exports.NavItemContent=u,exports.RightAddon=p,exports.TextLabel=l,exports.TitleContainer=r;
//# sourceMappingURL=local-nav-menu.styles.js.map
