"use strict";var e=require("@lifesg/react-icons/chevron-down"),o=require("@react-spring/web"),i=require("styled-components"),n=require("../button/button.js"),t=require("../shared/clickable-icon/clickable-icon.js"),r=require("../v3_theme/index.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(i);const s=l.default.div`
    background-color: ${e=>e.$collapsible?r.V3_Colour["bg-strong"]:r.V3_Colour.bg};
    ${e=>e.$isMobile&&i.css`
            background-color: ${r.V3_Colour["bg-strong"]};
        `}
`,c=l.default.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${r.V3_Colour.border};

    ${e=>e.$isMobile&&i.css`
            display: ${e.$showMobileDivider?"block":"none"};
            margin: 0 ${r.V3_Spacing["spacing-16"]};
        `}
`,d=l.default.div`
    display: flex;
    align-items: center;

    background-color: ${r.V3_Colour.bg};

    ${e=>e.$isMobile&&i.css`
            background-color: transparent;
        `}
`,g=l.default(t.ClickableIcon)`
    margin: 0 0 0 auto;

    color: ${r.V3_Colour.icon};
    &:hover {
        color: ${r.V3_Colour["icon-hover"]};
    }
`,p=l.default(e.ChevronDownIcon)`
    height: ${r.V3_Font.Spec["body-size-baseline"]};
    width: ${r.V3_Font.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${r.V3_Motion["duration-350"]}
        ${r.V3_Motion["ease-standard"]};
`,$=l.default.h3`
    ${r.V3_Font["heading-xs-semibold"]}
    color: ${r.V3_Colour.text};

    margin: ${r.V3_Spacing["spacing-24"]} 0 ${r.V3_Spacing["spacing-24"]}
        ${r.V3_Spacing["spacing-20"]};

    ${e=>e.$isMobile&&i.css`
            ${r.V3_Font["body-md-semibold"]}
            color: ${r.V3_Colour["text-subtle"]};

            margin: ${r.V3_Spacing["spacing-24"]} ${r.V3_Spacing["spacing-20"]} 0
                ${r.V3_Spacing["spacing-20"]};
        `}
`,u=o.animated(l.default.div`
    overflow: hidden;
`),b=l.default.div`
    padding: ${r.V3_Spacing["spacing-24"]} ${r.V3_Spacing["spacing-20"]};
`,m=o.animated(l.default.div`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`),h=l.default(n.Button.Small)`
    height: fit-content;
    padding: 0;
    margin: ${r.V3_Spacing["spacing-16"]} 0 0 0;
`;exports.ChevronIcon=p,exports.Divider=c,exports.ExpandableItem=u,exports.FilterItemBody=b,exports.FilterItemExpandButton=g,exports.FilterItemHeader=d,exports.FilterItemMinimiseButton=h,exports.FilterItemTitle=$,exports.FilterItemWrapper=s,exports.MinimisableContent=m;
//# sourceMappingURL=filter-item.styles.js.map
