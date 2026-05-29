import i from"styled-components";import{Button as t}from"../../button/button.js";import{MediaQuery as e,Spacing as r,Colour as n,Border as o,Radius as d}from"../../theme/index.js";import{Toggle as a}from"../../toggle/toggle.js";import{Typography as s}from"../../typography/typography.js";import{ClickableIcon as l}from"../clickable-icon/clickable-icon.js";import{InputBox as c,BasicInput as x}from"../input-wrapper/input-wrapper.js";const p=i.div`
    overflow: hidden;

    ${e.MaxWidth.xxs} {
        max-width: 100%;
    }
`,m=i.div`
    position: relative;
    width: 100%;
    padding: ${r["spacing-8"]} ${r["spacing-20"]}
        ${r["spacing-24"]} ${r["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${n.bg};
    border: ${o["width-010"]} ${o.solid} ${n.border};
    border-radius: ${d.sm};
`,h=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${e.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,g=i.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${r["spacing-16"]};
    gap: ${r["spacing-8"]};

    ${e.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${r["spacing-32"]};
    }
`,f=i.div`
    display: flex;
    align-items: center;
    margin-right: ${r["spacing-32"]};

    ${e.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,$=i.div`
    display: flex;
    gap: ${r["spacing-8"]};

    ${e.MaxWidth.lg} {
        flex-direction: column;
    }

    ${e.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,w=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${e.MaxWidth.xxs} {
        width: 6rem;
    }
`,u=i(l)`
    width: 5rem;
    padding: ${r["spacing-16"]} 0;
    color: ${n.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${n["icon-hover"]};
    }
`,y=i(s.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,v=i(c)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${e.MaxWidth.xxs} {
        width: 100%;
    }
`,b=i(x)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,M=i(a)`
    min-width: 5rem;
    flex: 1;
`,W=i(t.Small)`
    width: 7rem;

    ${e.MaxWidth.sm} {
        flex: 1;
    }

    ${e.MaxWidth.xxs} {
        width: 100%;
    }
`;export{m as Container,W as ControlButton,g as ControlSection,y as DividerLabel,f as HourMinuteSection,w as InputContainer,h as InputSection,p as StyledDiv,u as SwitchButton,b as TimeInput,v as TimeInputBox,$ as TimePeriodSection,M as TimePeriodToggle};
//# sourceMappingURL=timepicker-dropdown.styles.js.map
