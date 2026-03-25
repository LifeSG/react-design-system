import{animated as e}from"@react-spring/web";import r,{css as o}from"styled-components";import{Button as i}from"../button/button.js";import{ClickableIcon as t}from"../shared/clickable-icon/clickable-icon.js";import{Typography as n}from"../typography/index.js";import{V3_Radius as d,V3_MediaQuery as a,V3_Font as c,V3_Colour as s}from"../v3_theme/index.js";const l=e=>{const r={success:{Background:"bg-success",Border:"border-success",Text:"text-success",Icon:"icon-success"},warning:{Background:"bg-warning",Border:"border-warning",Text:"text-warning",Icon:"icon-warning"},error:{Background:"bg-error",Border:"border-error",Text:"text-error",Icon:"icon-error"},info:{Background:"bg-info",Border:"border-info",Text:"text-info",Icon:"icon-info"}}[e.$type];return{Background:s[r.Background],Border:s[r.Border],Text:s[r.Text],Icon:s[r.Icon]}},g=e(r.div`
    display: flex;
    flex-direction: row;
    position: ${e=>e.$fixed?"fixed":"relative"};
    margin: ${e=>e.$fixed?"1rem":0};
    top: 0;
    right: 0;
    padding: 1rem;
    border-radius: ${d.md};
    z-index: 10;
    align-items: center;
    gap: 2rem;

    ${a.MaxWidth.lg} {
        left: 0;
    }

    ${e=>o`
            background: ${l(e).Background};
            border: 1px solid ${l(e).Border};
            color: ${l(e).Text};
        `};
`),m=r.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${a.MaxWidth.sm} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,x=r.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ${e=>o`
            & > svg {
                flex-shrink: 0;
                width: 1.5rem;
                height: 1.5rem;
                margin-top: 0.0625rem;
                margin-right: 0.5rem;
                color: ${l(e).Icon};
            }
        `};
`,f=r.div`
    display: flex;
    flex-direction: column;
`,p=r.h2`
    display: flex;
    ${c["body-baseline-semibold"]}

    ${e=>o`
            color: ${l(e).Text};
        `}
`,$=r(n.BodyMD)`
    ${e=>o`
            color: ${l(e).Text};
        `}
`,h=r(n.BodyBL)`
    ${e=>o`
            color: ${l(e).Text};
        `}
`,u=r(i.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${a.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,b=r(t)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>o`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${l(e).Text};
            }
            &:hover {
                background: transparent;
            }
            ${a.MaxWidth.sm} {
                align-self: center;
            }
        `};
`;export{u as ActionButton,m as ContentWrapper,h as DescriptionBL,$ as DescriptionMD,b as DismissButton,f as TextContainer,x as TextIconWrapper,p as Title,g as Wrapper};
//# sourceMappingURL=toast.styles.js.map
