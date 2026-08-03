import t from"styled-components";import{applyHtmlContentStyle as i}from"../shared/html-content/html-content.js";import{Button as e}from"../button/button.js";import{MediaQuery as n,Spacing as o,Colour as r}from"../theme/index.js";import{Typography as a}from"../typography/typography.js";const p=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,s=t.img`
    position: relative;
    width: 400px;
    height: auto;

    ${n.MaxWidth.sm} {
        width: 320px;
    }

    ${n.MaxWidth.xs} {
        width: 288px;
    }

    ${n.MaxWidth.xxs} {
        width: 240px;
    }
`,m=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,d=t(a.HeadingMD).attrs((()=>({forwardedAs:"h2"})))`
    margin: ${o["spacing-32"]} 0 ${o["spacing-16"]};
    text-align: center;
`,x=t.div`
    color: ${r.text};
    text-align: center;

    ${i({textSize:"body-baseline"})}

    p + p {
        margin-top: ${o["spacing-16"]};
    }
`,c=t(e.Default)`
    margin: ${o["spacing-32"]} auto 0;
    width: 21rem;

    ${n.MaxWidth.sm} {
        width: 100%;
    }
`;export{c as ActionButton,p as Container,x as DescriptionContainer,s as Img,m as TextContainer,d as Title};
//# sourceMappingURL=error-display.style.js.map
