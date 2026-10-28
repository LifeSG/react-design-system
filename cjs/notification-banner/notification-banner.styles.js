"use strict";var e=require("styled-components"),o=require("../layout/index.js"),t=require("../shared/clickable-icon/clickable-icon.js"),i=require("../theme/index.js"),r=require("../typography/typography.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(e);const l=e.css`
    color: ${i.Colour["hyperlink-inverse"]};

    svg {
        color: ${i.Colour["icon-primary-inverse"]};
    }

    &:hover,
    &:active,
    &:visited,
    &:focus {
        color: ${i.Colour["hyperlink-inverse"]};
        svg {
            color: ${i.Colour["icon-primary-inverse"]};
        }
    }
`,s=a.default.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${i.Motion["duration-800"]} ${i.Motion["ease-default"]};
    background: ${i.Colour["bg-inverse-subtle"]};
    border-radius: ${i.Radius.none};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,p=a.default(o.Layout.Content)``,c=a.default.div`
    flex: 1;
    align-items: flex-start;
    padding: ${i.Spacing["spacing-24"]} 0;
`,d=a.default.div`
    display: flex;
    flex: 1;
    align-items: flex-start;

    ${i.Font["body-baseline-regular"]}
    color: ${i.Colour["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${i.Font["body-baseline-semibold"]}
        color: ${i.Colour["text-inverse"]};
    }

    a {
        ${i.Font["body-baseline-regular"]}
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
`,f=a.default(r.Typography.LinkBL)`
    position: relative;

    ${l}
`,x=a.default(t.ClickableIcon)`
    margin-right: -${i.Spacing["spacing-24"]};
    padding-left: ${i.Spacing["spacing-16"]};
    height: max-content;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${i.Colour["icon-inverse"]};
    }
`,$=a.default.button`
    display: flex;
    align-items: center;
    gap: ${i.Spacing["spacing-4"]};
    align-self: flex-start;
    margin-top: ${i.Spacing["spacing-8"]};

    border: none;
    background: transparent;
    color: ${i.Colour["hyperlink-inverse"]};
    ${i.Font["body-md-semibold"]};

    cursor: pointer;
`,h=a.default.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,b=a.default.div`
    height: 1.5rem;
    width: 1.5rem;
    margin: ${i.Spacing["spacing-24"]} ${i.Spacing["spacing-24"]} 0 0;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
        color: ${i.Colour["hyperlink-inverse"]};
    }
`;exports.AccessibleBannerButton=h,exports.ActionButton=$,exports.Container=p,exports.Content=d,exports.ContentContainer=c,exports.ContentLink=f,exports.ContentText=g,exports.ContentWrapper=u,exports.IconContainer=b,exports.StyledIconButton=x,exports.Wrapper=s;
//# sourceMappingURL=notification-banner.styles.js.map
