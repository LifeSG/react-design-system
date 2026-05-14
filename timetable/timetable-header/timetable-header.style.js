import t,{keyframes as o,css as e}from"styled-components";import{Button as i}from"../../button/button.js";import{DateNavigator as n}from"../../date-navigator/date-navigator.js";import{Typography as r}from"../../typography/index.js";import{V3_Colour as a,V3_Spacing as s}from"../../v3_theme/index.js";const p=o`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,m=t(i)`
    color: ${a.icon};
    svg {
        ${t=>{if(t.$loading)return e`
                    animation: ${p} 4s linear infinite;
                `}}
    }
`,d=t.div`
    display: flex;
    padding-bottom: ${s["spacing-16"]};
    justify-content: space-between;
    gap: ${s["spacing-8"]};
`,g=t.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${s["spacing-8"]};
`,c=t(r.BodySM)`
    color: ${a["text-subtler"]};
`,f=t(n)`
    width: 400px;
`;export{g as NavigationHeaderSubtitleWrapper,d as NavigationHeaderWrapper,f as StyledDateNavigator,m as StyledRefreshButton,c as StyledResultText};
//# sourceMappingURL=timetable-header.style.js.map
