import o from"react-slider";import r,{css as e}from"styled-components";import{Typography as t}from"../typography/index.js";import{V3_Spacing as i,V3_Colour as s,V3_Shadow as d,V3_Border as a,V3_Radius as l}from"../v3_theme/index.js";const n=r.div`
    isolation: isolate;
`,c=r.div`
    margin-top: ${i["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${i["spacing-8"]};
`,m=r.div`
    margin-bottom: ${i["spacing-8"]};
`,p=r(t.BodyBL)`
    overflow-wrap: anywhere;
`,b=r(o)`
    height: 0.875rem;
`,$=r.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${o=>o.$disabled?e`
                cursor: not-allowed;
            `:o.$readOnly?void 0:e`
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

        background-color: ${s.bg};
        box-shadow: ${d["sm-subtle"]};
        border: ${a["width-010"]} ${a.solid}
            ${o=>o.$disabled?s["border-selected-disabled"]:s["border-strong"]};
        border-radius: ${l.full};
    }
`,f=r.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${$}:after {
        outline-offset: -1px;
        outline: ${a["width-040"]} ${a.solid}
            ${s["border-selected"]};
    }
`,g=r.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${l.full};

    background: ${o=>o.$color&&"function"==typeof o.$color?o.$color(o):o.$color||s["border-strong"](o)};
`;export{m as IndicatorLabelContainer,$ as Knob,c as LabelContainer,p as LabelText,b as Slider,f as SliderThumb,g as SliderTrack,n as Wrapper};
//# sourceMappingURL=input-range-slider.styles.js.map
