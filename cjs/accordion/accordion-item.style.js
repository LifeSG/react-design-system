"use strict";var e=require("@lifesg/react-icons/chevron-up"),o=require("@react-spring/web"),t=require("styled-components"),n=require("../v3_theme/index.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(t);const a=i.default.div`
    background-color: ${n.V3_Colour.bg};
    border-top: ${n.V3_Border["width-010"]} ${n.V3_Border.solid} ${n.V3_Colour.border};
    ${e=>e.$expanded&&t.css`
            padding-bottom: ${n.V3_Spacing["spacing-16"]};
        `}
`,d=i.default.button`
    background: transparent;
    border: none;
    border-radius: ${n.V3_Radius.sm};
    outline: none;
    text-align: left;
    user-select: text;

    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${n.V3_Spacing["spacing-48"]};
    padding: ${n.V3_Spacing["spacing-16"]} 0;

    ${e=>e.$expanded&&t.css`
            padding-bottom: ${n.V3_Spacing["spacing-8"]};
        `}

    ${e=>e.$collapsible&&t.css`
            cursor: pointer;
        `}

    &:focus-visible {
        outline: 2px solid ${n.V3_Colour["focus-ring"]};
        outline-offset: 0;
    }
`,s=i.default.span`
    flex: 1;
    transition: all ${n.V3_Motion["duration-250"]} ${n.V3_Motion["ease-standard"]};
    color: ${n.V3_Colour.text};

    ${e=>"small"===e.$type?n.V3_Font["heading-xs-bold"]:n.V3_Font["heading-sm-bold"]}
`,l=i.default.span`
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform ${n.V3_Motion["duration-250"]}${n.V3_Motion["ease-default"]};
`,p=i.default(e.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${n.V3_Colour["icon-primary"]};
`,c=o.animated(i.default.div`
    overflow: hidden;
`),u=i.default.div`
    display: inline-block;
    padding-right: ${n.V3_Spacing["spacing-64"]};

    ${n.V3_MediaQuery.MaxWidth.lg} {
        padding-right: 0;
    }
`;exports.ChevronIcon=p,exports.Container=a,exports.ContentContainer=u,exports.ExpandCollapseButton=d,exports.Expandable=c,exports.IconContainer=l,exports.Title=s;
//# sourceMappingURL=accordion-item.style.js.map
