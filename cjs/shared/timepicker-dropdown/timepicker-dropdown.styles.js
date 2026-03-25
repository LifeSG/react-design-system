"use strict";var e=require("styled-components"),i=require("../../button/button.js"),t=require("../../toggle/toggle.js"),r=require("../../typography/index.js"),n=require("../../v3_theme/index.js"),a=require("../clickable-icon/clickable-icon.js"),o=require("../input-wrapper/input-wrapper.js");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=d(e);const c=l.default.div`
    overflow: hidden;

    ${n.V3_MediaQuery.MaxWidth.xxs} {
        max-width: 100%;
    }
`,s=l.default.div`
    position: relative;
    width: 100%;
    padding: ${n.V3_Spacing["spacing-8"]} ${n.V3_Spacing["spacing-20"]}
        ${n.V3_Spacing["spacing-24"]} ${n.V3_Spacing["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${n.V3_Colour.bg};
    border: ${n.V3_Border["width-010"]} ${n.V3_Border.solid}
        ${n.V3_Colour.border};
    border-radius: ${n.V3_Radius.sm};
`,p=l.default.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${n.V3_MediaQuery.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,u=l.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${n.V3_Spacing["spacing-16"]};
    gap: ${n.V3_Spacing["spacing-8"]};

    ${n.V3_MediaQuery.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${n.V3_Spacing["spacing-32"]};
    }
`,x=l.default.div`
    display: flex;
    align-items: center;
    margin-right: ${n.V3_Spacing["spacing-32"]};

    ${n.V3_MediaQuery.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,g=l.default.div`
    display: flex;
    gap: ${n.V3_Spacing["spacing-8"]};

    ${n.V3_MediaQuery.MaxWidth.lg} {
        flex-direction: column;
    }

    ${n.V3_MediaQuery.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,h=l.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${n.V3_MediaQuery.MaxWidth.xxs} {
        width: 6rem;
    }
`,f=l.default(a.ClickableIcon)`
    width: 5rem;
    padding: ${n.V3_Spacing["spacing-16"]} 0;
    color: ${n.V3_Colour.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${n.V3_Colour["icon-hover"]};
    }
`,m=l.default(r.Typography.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,y=l.default(o.InputBox)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${n.V3_MediaQuery.MaxWidth.xxs} {
        width: 100%;
    }
`,_=l.default(o.BasicInput)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,V=l.default(t.Toggle)`
    min-width: 5rem;
    flex: 1;
`,$=l.default(i.Button.Small)`
    width: 7rem;

    ${n.V3_MediaQuery.MaxWidth.sm} {
        flex: 1;
    }

    ${n.V3_MediaQuery.MaxWidth.xxs} {
        width: 100%;
    }
`;exports.Container=s,exports.ControlButton=$,exports.ControlSection=u,exports.DividerLabel=m,exports.HourMinuteSection=x,exports.InputContainer=h,exports.InputSection=p,exports.StyledDiv=c,exports.SwitchButton=f,exports.TimeInput=_,exports.TimeInputBox=y,exports.TimePeriodSection=g,exports.TimePeriodToggle=V;
//# sourceMappingURL=timepicker-dropdown.styles.js.map
