"use strict";var e=require("styled-components"),o=require("../layout/index.js"),t=require("../shared/clickable-icon/clickable-icon.js"),i=require("../typography/index.js"),r=require("../v3_theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(e);const l=e.css`
    color: ${r.V3_Colour["hyperlink-inverse"]};

    svg {
        color: ${r.V3_Colour["icon-primary-inverse"]};
    }

    &:hover,
    &:active,
    &:visited,
    &:focus {
        color: ${r.V3_Colour["hyperlink-inverse"]};
        svg {
            color: ${r.V3_Colour["icon-primary-inverse"]};
        }
    }
`,s=a.default.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${r.V3_Motion["duration-800"]} ${r.V3_Motion["ease-default"]};
    background: ${r.V3_Colour["bg-inverse-subtle"]};
    border-radius: ${r.V3_Radius.none};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,p=a.default(o.Layout.Content)``,c=a.default.div`
    flex: 1;
    align-items: flex-start;
    padding: ${r.V3_Spacing["spacing-24"]} 0;
`,d=a.default.div`
    display: flex;
    flex: 1;
    align-items: flex-start;

    ${r.V3_Font["body-baseline-regular"]}
    color: ${r.V3_Colour["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${r.V3_Font["body-baseline-semibold"]}
        color: ${r.V3_Colour["text-inverse"]};
    }

    a {
        ${r.V3_Font["body-baseline-regular"]}
        ${l}
    }
`,u=a.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`,g=a.default.div`
    flex: 1;
    word-wrap: break-word;
    overflow-wrap: break-word;
    ${o=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(o.$maxCollapsedHeight)return e.css`
                max-height: ${o.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,f=a.default(i.Typography.LinkBL)`
    position: relative;

    ${l}
`,x=a.default(t.ClickableIcon)`
    margin-right: -${r.V3_Spacing["spacing-24"]};
    padding-left: ${r.V3_Spacing["spacing-16"]};
    height: max-content;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${r.V3_Colour["icon-inverse"]};
    }
`,$=a.default.button`
    display: flex;
    align-items: center;
    gap: ${r.V3_Spacing["spacing-4"]};
    align-self: flex-start;
    margin-top: ${r.V3_Spacing["spacing-8"]};

    border: none;
    background: transparent;
    color: ${r.V3_Colour["hyperlink-inverse"]};
    ${r.V3_Font["body-md-semibold"]};

    cursor: pointer;
`,h=a.default.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,v=a.default.div`
    height: 1.5rem;
    width: 1.5rem;
    margin: ${r.V3_Spacing["spacing-24"]} ${r.V3_Spacing["spacing-24"]} 0 0;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
        color: ${r.V3_Colour["hyperlink-inverse"]};
    }
`;exports.AccessibleBannerButton=h,exports.ActionButton=$,exports.Container=p,exports.Content=d,exports.ContentContainer=c,exports.ContentLink=f,exports.ContentText=g,exports.ContentWrapper=u,exports.IconContainer=v,exports.StyledIconButton=x,exports.Wrapper=s;
//# sourceMappingURL=notification-banner.styles.js.map
