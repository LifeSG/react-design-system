import t from"styled-components";import{Button as i}from"../button/button.js";import{applyHtmlContentStyle as e}from"../shared/html-content/html-content.js";import{Typography as n}from"../typography/index.js";import{V3_MediaQuery as o,V3_Spacing as r,V3_Colour as a}from"../v3_theme/index.js";const p=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,s=t.img`
    position: relative;
    width: 400px;
    height: auto;

    ${o.MaxWidth.sm} {
        width: 320px;
    }

    ${o.MaxWidth.xs} {
        width: 288px;
    }

    ${o.MaxWidth.xxs} {
        width: 240px;
    }
`,d=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,m=t(n.HeadingMD).attrs((()=>({forwardedAs:"h2"})))`
    margin: ${r["spacing-32"]} 0 ${r["spacing-16"]};
    text-align: center;
`,x=t.div`
    color: ${a.text};
    text-align: center;

    ${e({textSize:"body-baseline"})}

    p + p {
        margin-top: ${r["spacing-16"]};
    }
`,c=t(i.Default)`
    margin: ${r["spacing-32"]} auto 0;
    width: 21rem;

    ${o.MaxWidth.sm} {
        width: 100%;
    }
`;export{c as ActionButton,p as Container,x as DescriptionContainer,s as Img,d as TextContainer,m as Title};
//# sourceMappingURL=error-display.style.js.map
