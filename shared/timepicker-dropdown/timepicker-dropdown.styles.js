import i from"styled-components";import{Button as e}from"../../button/button.js";import{Toggle as t}from"../../toggle/toggle.js";import{Typography as r}from"../../typography/index.js";import{V3_MediaQuery as n,V3_Spacing as o,V3_Colour as d,V3_Border as a,V3_Radius as s}from"../../v3_theme/index.js";import{ClickableIcon as l}from"../clickable-icon/clickable-icon.js";import{InputBox as c,BasicInput as x}from"../input-wrapper/input-wrapper.js";const p=i.div`
    overflow: hidden;

    ${n.MaxWidth.xxs} {
        max-width: 100%;
    }
`,m=i.div`
    position: relative;
    width: 100%;
    padding: ${o["spacing-8"]} ${o["spacing-20"]}
        ${o["spacing-24"]} ${o["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${d.bg};
    border: ${a["width-010"]} ${a.solid}
        ${d.border};
    border-radius: ${s.sm};
`,h=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${n.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,g=i.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${o["spacing-16"]};
    gap: ${o["spacing-8"]};

    ${n.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${o["spacing-32"]};
    }
`,f=i.div`
    display: flex;
    align-items: center;
    margin-right: ${o["spacing-32"]};

    ${n.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,$=i.div`
    display: flex;
    gap: ${o["spacing-8"]};

    ${n.MaxWidth.lg} {
        flex-direction: column;
    }

    ${n.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,w=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${n.MaxWidth.xxs} {
        width: 6rem;
    }
`,u=i(l)`
    width: 5rem;
    padding: ${o["spacing-16"]} 0;
    color: ${d.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${d["icon-hover"]};
    }
`,v=i(r.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,y=i(c)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${n.MaxWidth.xxs} {
        width: 100%;
    }
`,b=i(x)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,M=i(t)`
    min-width: 5rem;
    flex: 1;
`,W=i(e.Small)`
    width: 7rem;

    ${n.MaxWidth.sm} {
        flex: 1;
    }

    ${n.MaxWidth.xxs} {
        width: 100%;
    }
`;export{m as Container,W as ControlButton,g as ControlSection,v as DividerLabel,f as HourMinuteSection,w as InputContainer,h as InputSection,p as StyledDiv,u as SwitchButton,b as TimeInput,y as TimeInputBox,$ as TimePeriodSection,M as TimePeriodToggle};
//# sourceMappingURL=timepicker-dropdown.styles.js.map
