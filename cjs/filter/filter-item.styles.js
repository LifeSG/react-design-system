"use strict";var e=require("@lifesg/react-icons/chevron-down"),o=require("@react-spring/web"),i=require("styled-components"),n=require("../button/button.js"),t=require("../shared/clickable-icon/clickable-icon.js"),r=require("../theme/index.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(i);const s=l.default.div`
    background-color: ${e=>e.$collapsible?r.Colour["bg-strong"]:r.Colour.bg};
    ${e=>e.$isMobile&&i.css`
            background-color: ${r.Colour["bg-strong"]};
        `}
`,c=l.default.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${r.Colour.border};

    ${e=>e.$isMobile&&i.css`
            display: ${e.$showMobileDivider?"block":"none"};
            margin: 0 ${r.Spacing["spacing-16"]};
        `}
`,d=l.default.div`
    display: flex;
    align-items: center;

    background-color: ${r.Colour.bg};

    ${e=>e.$isMobile&&i.css`
            background-color: transparent;
        `}
`,g=l.default(t.ClickableIcon)`
    margin: 0 0 0 auto;

    color: ${r.Colour.icon};
    &:hover {
        color: ${r.Colour["icon-hover"]};
    }
`,p=l.default(e.ChevronDownIcon)`
    height: ${r.Font.Spec["body-size-baseline"]};
    width: ${r.Font.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${r.Motion["duration-350"]} ${r.Motion["ease-standard"]};
`,$=l.default.h3`
    ${r.Font["heading-xs-semibold"]}
    color: ${r.Colour.text};

    margin: ${r.Spacing["spacing-24"]} 0 ${r.Spacing["spacing-24"]}
        ${r.Spacing["spacing-20"]};

    ${e=>e.$isMobile&&i.css`
            ${r.Font["body-md-semibold"]}
            color: ${r.Colour["text-subtle"]};

            margin: ${r.Spacing["spacing-24"]} ${r.Spacing["spacing-20"]} 0
                ${r.Spacing["spacing-20"]};
        `}
`,u=o.animated(l.default.div`
    overflow: hidden;
`),b=l.default.div`
    padding: ${r.Spacing["spacing-24"]} ${r.Spacing["spacing-20"]};
`,m=o.animated(l.default.div`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`),h=l.default(n.Button.Small)`
    height: fit-content;
    padding: 0;
    margin: ${r.Spacing["spacing-16"]} 0 0 0;
`;exports.ChevronIcon=p,exports.Divider=c,exports.ExpandableItem=u,exports.FilterItemBody=b,exports.FilterItemExpandButton=g,exports.FilterItemHeader=d,exports.FilterItemMinimiseButton=h,exports.FilterItemTitle=$,exports.FilterItemWrapper=s,exports.MinimisableContent=m;
//# sourceMappingURL=filter-item.styles.js.map
