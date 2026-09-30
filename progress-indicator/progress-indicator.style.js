import r from"styled-components";import{MediaQuery as e,Spacing as t,Radius as i,Colour as o}from"../theme/index.js";import{Typography as a}from"../typography/typography.js";const l=.5,n=r.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${e.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${e.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,d=r.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,m=r.div`
    height: 4px;
    margin-bottom: ${t["spacing-8"]};
    border-radius: ${i.full};
    ${r=>{const{$highlighted:e}=r;return`\n            background-color: ${(e?o["bg-primary-subtle"]:o["bg-disabled"])(r)};\n        `}};
`,s=r(a.BodyMD)`
    overflow-wrap: anywhere;
    ${r=>{const{$highlighted:e}=r;return`color: ${(e?o["text-primary"]:o["text-disabled"])(r)};`}};
`,h=r(a.BodyMD)`
    overflow-wrap: anywhere;
    color: ${o.text};
`,p=r.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;export{d as Content,l as INDICATOR_BAR_MARGIN_RIGHT_TABLET,p as Indicator,m as IndicatorBar,s as IndicatorTitleDesktop,h as IndicatorTitleTablet,n as Wrapper};
//# sourceMappingURL=progress-indicator.style.js.map
