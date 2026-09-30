"use strict";var e=require("styled-components"),i=require("../../button/button.js"),t=require("../../theme/index.js"),r=require("../../toggle/toggle.js"),a=require("../../typography/typography.js"),n=require("../clickable-icon/clickable-icon.js"),o=require("../input-wrapper/input-wrapper.js");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=d(e);const c=l.default.div`
    overflow: hidden;

    ${t.MediaQuery.MaxWidth.xxs} {
        max-width: 100%;
    }
`,s=l.default.div`
    position: relative;
    width: 100%;
    padding: ${t.Spacing["spacing-8"]} ${t.Spacing["spacing-20"]}
        ${t.Spacing["spacing-24"]} ${t.Spacing["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${t.Colour.bg};
    border: ${t.Border["width-010"]} ${t.Border.solid} ${t.Colour.border};
    border-radius: ${t.Radius.sm};
`,p=l.default.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${t.MediaQuery.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,u=l.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${t.Spacing["spacing-16"]};
    gap: ${t.Spacing["spacing-8"]};

    ${t.MediaQuery.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${t.Spacing["spacing-32"]};
    }
`,x=l.default.div`
    display: flex;
    align-items: center;
    margin-right: ${t.Spacing["spacing-32"]};

    ${t.MediaQuery.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,g=l.default.div`
    display: flex;
    gap: ${t.Spacing["spacing-8"]};

    ${t.MediaQuery.MaxWidth.lg} {
        flex-direction: column;
    }

    ${t.MediaQuery.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,h=l.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${t.MediaQuery.MaxWidth.xxs} {
        width: 6rem;
    }
`,f=l.default(n.ClickableIcon)`
    width: 5rem;
    padding: ${t.Spacing["spacing-16"]} 0;
    color: ${t.Colour.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${t.Colour["icon-hover"]};
    }
`,m=l.default(a.Typography.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,y=l.default(o.InputBox)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${t.MediaQuery.MaxWidth.xxs} {
        width: 100%;
    }
`,$=l.default(o.BasicInput)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,w=l.default(r.Toggle)`
    min-width: 5rem;
    flex: 1;
`,M=l.default(i.Button.Small)`
    width: 7rem;

    ${t.MediaQuery.MaxWidth.sm} {
        flex: 1;
    }

    ${t.MediaQuery.MaxWidth.xxs} {
        width: 100%;
    }
`;exports.Container=s,exports.ControlButton=M,exports.ControlSection=u,exports.DividerLabel=m,exports.HourMinuteSection=x,exports.InputContainer=h,exports.InputSection=p,exports.StyledDiv=c,exports.SwitchButton=f,exports.TimeInput=$,exports.TimeInputBox=y,exports.TimePeriodSection=g,exports.TimePeriodToggle=w;
//# sourceMappingURL=timepicker-dropdown.styles.js.map
