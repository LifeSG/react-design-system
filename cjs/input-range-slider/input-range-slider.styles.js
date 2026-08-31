"use strict";var e=require("react-slider"),r=require("styled-components"),o=require("../theme/index.js"),t=require("../typography/typography.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(e),d=a(r);const l=d.default.div`
    isolation: isolate;
`,s=d.default.div`
    margin-top: ${o.Spacing["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${o.Spacing["spacing-8"]};
`,n=d.default.div`
    margin-bottom: ${o.Spacing["spacing-8"]};
`,u=d.default(t.Typography.BodyBL)`
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

        background-color: ${o.Colour.bg};
        box-shadow: ${o.Shadow["sm-subtle"]};
        border: ${o.Border["width-010"]} ${o.Border.solid}
            ${e=>e.$disabled?o.Colour["border-selected-disabled"]:o.Colour["border-strong"]};
        border-radius: ${o.Radius.full};
    }
`,f=d.default.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${c}:after, &[data-focused="true"] ${c}:after {
        outline-offset: -1px;
        outline: ${o.Border["width-040"]} ${o.Border.solid}
            ${o.Colour["border-selected"]};
    }
`,b=d.default.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${o.Radius.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||o.Colour["border-strong"](e)};
`;exports.IndicatorLabelContainer=n,exports.Knob=c,exports.LabelContainer=s,exports.LabelText=u,exports.Slider=p,exports.SliderThumb=f,exports.SliderTrack=b,exports.Wrapper=l;
//# sourceMappingURL=input-range-slider.styles.js.map
