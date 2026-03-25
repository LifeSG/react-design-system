"use strict";var e=require("@react-spring/web"),r=require("styled-components"),t=require("../button/button.js"),o=require("../shared/clickable-icon/clickable-icon.js"),i=require("../typography/index.js"),n=require("../v3_theme/index.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=a(r);const d=e=>{const r={success:{Background:"bg-success",Border:"border-success",Text:"text-success",Icon:"icon-success"},warning:{Background:"bg-warning",Border:"border-warning",Text:"text-warning",Icon:"icon-warning"},error:{Background:"bg-error",Border:"border-error",Text:"text-error",Icon:"icon-error"},info:{Background:"bg-info",Border:"border-info",Text:"text-info",Icon:"icon-info"}}[e.$type];return{Background:n.V3_Colour[r.Background],Border:n.V3_Colour[r.Border],Text:n.V3_Colour[r.Text],Icon:n.V3_Colour[r.Icon]}},c=e.animated(s.default.div`
    display: flex;
    flex-direction: row;
    position: ${e=>e.$fixed?"fixed":"relative"};
    margin: ${e=>e.$fixed?"1rem":0};
    top: 0;
    right: 0;
    padding: 1rem;
    border-radius: ${n.V3_Radius.md};
    z-index: 10;
    align-items: center;
    gap: 2rem;

    ${n.V3_MediaQuery.MaxWidth.lg} {
        left: 0;
    }

    ${e=>r.css`
            background: ${d(e).Background};
            border: 1px solid ${d(e).Border};
            color: ${d(e).Text};
        `};
`),l=s.default.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${n.V3_MediaQuery.MaxWidth.sm} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,u=s.default.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ${e=>r.css`
            & > svg {
                flex-shrink: 0;
                width: 1.5rem;
                height: 1.5rem;
                margin-top: 0.0625rem;
                margin-right: 0.5rem;
                color: ${d(e).Icon};
            }
        `};
`,x=s.default.div`
    display: flex;
    flex-direction: column;
`,g=s.default.h2`
    display: flex;
    ${n.V3_Font["body-baseline-semibold"]}

    ${e=>r.css`
            color: ${d(e).Text};
        `}
`,f=s.default(i.Typography.BodyMD)`
    ${e=>r.css`
            color: ${d(e).Text};
        `}
`,p=s.default(i.Typography.BodyBL)`
    ${e=>r.css`
            color: ${d(e).Text};
        `}
`,m=s.default(t.Button.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${n.V3_MediaQuery.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,h=s.default(o.ClickableIcon)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>r.css`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${d(e).Text};
            }
            &:hover {
                background: transparent;
            }
            ${n.V3_MediaQuery.MaxWidth.sm} {
                align-self: center;
            }
        `};
`;exports.ActionButton=m,exports.ContentWrapper=l,exports.DescriptionBL=p,exports.DescriptionMD=f,exports.DismissButton=h,exports.TextContainer=x,exports.TextIconWrapper=u,exports.Title=g,exports.Wrapper=c;
//# sourceMappingURL=toast.styles.js.map
