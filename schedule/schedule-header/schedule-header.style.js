import t from"styled-components";import{Button as i}from"../../button/button.js";import{DateNavigator as e}from"../../date-navigator/date-navigator.js";import{Typography as a}from"../../typography/index.js";import{V3_Spacing as n,V3_Colour as o,V3_MediaQuery as p}from"../../v3_theme/index.js";const d=t.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${n["spacing-16"]};
    color: ${o["text-primary"]};
    gap: ${n["spacing-16"]};
`,r=t.div`
    display: flex;
    align-items: center;
    gap: ${n["spacing-16"]};

    ${p.MaxWidth.md} {
        flex-direction: column;
        align-items: stretch;
        width: 100%;
    }
`,s=t.div`
    display: flex;
    align-items: center;
    gap: ${n["spacing-16"]};

    ${p.MaxWidth.lg} {
        display: none;
    }
`,m=t(e)`
    width: 100%;
    max-width: 400px;
`,l=t(a.BodyMD)`
    color: ${o["text-subtler"]};
`,g=t(i.Default)`
    min-width: 5rem;

    ${p.MaxWidth.lg} {
        display: none;
    }
`,c="240px";export{c as DROPDOWN_WIDTH,r as LeftSection,s as RightSection,d as ScheduleHeaderWrapper,g as StyledButton,m as StyledDateNavigator,l as StyledText};
//# sourceMappingURL=schedule-header.style.js.map
