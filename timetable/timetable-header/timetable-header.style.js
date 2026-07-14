import t,{keyframes as o,css as i}from"styled-components";import{DateNavigator as n}from"../../date-navigator/date-navigator.js";import{IconButton as e}from"../../icon-button/icon-button.js";import{Colour as r,Spacing as a}from"../../theme/index.js";import{Typography as p}from"../../typography/typography.js";const s=o`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,m=t(e)`
    color: ${r.icon};
    svg {
        ${t=>{if(t.$loading)return i`
                    animation: ${s} 4s linear infinite;
                `}}
    }
`,c=t.div`
    display: flex;
    padding-bottom: ${a["spacing-16"]};
    justify-content: space-between;
    gap: ${a["spacing-8"]};
`,d=t.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${a["spacing-8"]};
`,g=t(p.BodySM)`
    color: ${r["text-subtler"]};
`,f=t(n)`
    width: 400px;
`;export{d as NavigationHeaderSubtitleWrapper,c as NavigationHeaderWrapper,f as StyledDateNavigator,m as StyledRefreshButton,g as StyledResultText};
//# sourceMappingURL=timetable-header.style.js.map
