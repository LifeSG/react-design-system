"use strict";var e=require("react-slider"),r=require("styled-components"),o=require("../typography/index.js"),t=require("../v3_theme/index.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(e),d=a(r);const l=d.default.div`
    isolation: isolate;
`,s=d.default.div`
    margin-top: ${t.V3_Spacing["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${t.V3_Spacing["spacing-8"]};
`,n=d.default.div`
    margin-bottom: ${t.V3_Spacing["spacing-8"]};
`,u=d.default(o.Typography.BodyBL)`
    overflow-wrap: anywhere;
`,p=d.default(i.default)`
    height: 0.875rem;
`,c=d.default.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?r.css`
                cursor: not-allowed;
            `:e.$readOnly?void 0:r.css`
                cursor: grab;
                &:active {
                    cursor: grabbing;
                }
            `}

    &:after {
        content: "";
        display: block;
        height: 0.875rem;
        width: 0.875rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: ${t.V3_Colour.bg};
        box-shadow: ${t.V3_Shadow["sm-subtle"]};
        border: ${t.V3_Border["width-010"]} ${t.V3_Border.solid}
            ${e=>e.$disabled?t.V3_Colour["border-selected-disabled"]:t.V3_Colour["border-strong"]};
        border-radius: ${t.V3_Radius.full};
    }
`,f=d.default.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${c}:after {
        outline-offset: -1px;
        outline: ${t.V3_Border["width-040"]} ${t.V3_Border.solid}
            ${t.V3_Colour["border-selected"]};
    }
`,b=d.default.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${t.V3_Radius.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||t.V3_Colour["border-strong"](e)};
`;exports.IndicatorLabelContainer=n,exports.Knob=c,exports.LabelContainer=s,exports.LabelText=u,exports.Slider=p,exports.SliderThumb=f,exports.SliderTrack=b,exports.Wrapper=l;
//# sourceMappingURL=input-range-slider.styles.js.map
