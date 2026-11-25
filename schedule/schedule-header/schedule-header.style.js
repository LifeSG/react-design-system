import t from"styled-components";import{DateNavigator as i}from"../../date-navigator/date-navigator.js";import{Spacing as e,Colour as a,MediaQuery as o}from"../../theme/index.js";import{Typography as n}from"../../typography/typography.js";import{Button as p}from"../../button/button.js";const r=t.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${e["spacing-16"]};
    color: ${a["text-primary"]};
    gap: ${e["spacing-16"]};
`,d=t.div`
    display: flex;
    align-items: center;
    gap: ${e["spacing-16"]};

    ${o.MaxWidth.md} {
        flex-direction: column;
        align-items: stretch;
        width: 100%;
    }
`,s=t.div`
    display: flex;
    align-items: center;
    gap: ${e["spacing-16"]};

    ${o.MaxWidth.lg} {
        display: none;
    }
`,m=t(i)`
    width: 100%;
    max-width: 400px;
`,l=t(n.BodyMD)`
    color: ${a["text-subtler"]};
`,g=t(p.Default)`
    min-width: 5rem;

    ${o.MaxWidth.lg} {
        display: none;
    }
`,c="240px";export{c as DROPDOWN_WIDTH,d as LeftSection,s as RightSection,r as ScheduleHeaderWrapper,g as StyledButton,m as StyledDateNavigator,l as StyledText};
//# sourceMappingURL=schedule-header.style.js.map
