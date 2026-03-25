import t,{keyframes as o,css as i}from"styled-components";import{DateNavigator as n}from"../../date-navigator/date-navigator.js";import{IconButton as e}from"../../icon-button/icon-button.js";import{Typography as r}from"../../typography/index.js";import{V3_Colour as a,V3_Spacing as s}from"../../v3_theme/index.js";const p=o`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,m=t(e)`
    color: ${a.icon};
    svg {
        ${t=>{if(t.$loading)return i`
                    animation: ${p} 4s linear infinite;
                `}}
    }
`,d=t.div`
    display: flex;
    padding-bottom: ${s["spacing-16"]};
    justify-content: space-between;
    gap: ${s["spacing-8"]};
`,c=t.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${s["spacing-8"]};
`,g=t(r.BodySM)`
    color: ${a["text-subtler"]};
`,f=t(n)`
    width: 400px;
`;export{c as NavigationHeaderSubtitleWrapper,d as NavigationHeaderWrapper,f as StyledDateNavigator,m as StyledRefreshButton,g as StyledResultText};
//# sourceMappingURL=timetable-header.style.js.map
