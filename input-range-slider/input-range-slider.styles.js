import o from"react-slider";import r,{css as e}from"styled-components";import{Spacing as t,Colour as i,Shadow as a,Border as s,Radius as d}from"../theme/index.js";import{Typography as l}from"../typography/typography.js";const n=r.div`
    isolation: isolate;
`,p=r.div`
    margin-top: ${t["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${t["spacing-8"]};
`,c=r.div`
    margin-bottom: ${t["spacing-8"]};
`,m=r(l.BodyBL)`
    overflow-wrap: anywhere;
`,$=r(o)`
    height: 0.875rem;
`,b=r.div`
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

        background-color: ${i.bg};
        box-shadow: ${a["sm-subtle"]};
        border: ${s["width-010"]} ${s.solid}
            ${o=>o.$disabled?i["border-selected-disabled"]:i["border-strong"]};
        border-radius: ${d.full};
    }
`,f=r.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${b}:after, &[data-focused="true"] ${b}:after {
        outline-offset: -1px;
        outline: ${s["width-040"]} ${s.solid}
            ${i["border-selected"]};
    }
`,g=r.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${d.full};

    background: ${o=>o.$color&&"function"==typeof o.$color?o.$color(o):o.$color||i["border-strong"](o)};
`;export{c as IndicatorLabelContainer,b as Knob,p as LabelContainer,m as LabelText,$ as Slider,f as SliderThumb,g as SliderTrack,n as Wrapper};
//# sourceMappingURL=input-range-slider.styles.js.map
