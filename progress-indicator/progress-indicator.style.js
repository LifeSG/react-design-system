import e from"styled-components";import{Typography as r}from"../typography/index.js";import{V3_MediaQuery as i,V3_Spacing as t,V3_Radius as o,V3_Colour as n}from"../v3_theme/index.js";const d=.5,l=e.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${i.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${i.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,a=e.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,m=e.div`
    height: 4px;
    margin-bottom: ${t["spacing-8"]};
    border-radius: ${o.full};
    ${e=>{const{$highlighted:r}=e;return`\n            background-color: ${(r?n["bg-primary-subtle"]:n["bg-disabled"])(e)};\n        `}};
`,s=e(r.BodyMD)`
    overflow-wrap: anywhere;
    ${e=>{const{$highlighted:r}=e;return`color: ${(r?n["text-primary"]:n["text-disabled"])(e)};`}};
`,h=e(r.BodyMD)`
    overflow-wrap: anywhere;
    color: ${n.text};
`,g=e.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;export{a as Content,d as INDICATOR_BAR_MARGIN_RIGHT_TABLET,g as Indicator,m as IndicatorBar,s as IndicatorTitleDesktop,h as IndicatorTitleTablet,l as Wrapper};
//# sourceMappingURL=progress-indicator.style.js.map
