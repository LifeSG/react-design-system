import i,{css as e}from"styled-components";import{lineClampCss as d}from"../shared/styles/index.js";import{V3_Border as r,V3_Colour as t,V3_Radius as a,V3_Spacing as o,V3_MediaQuery as s,V3_Breakpoint as n,V3_Font as l}from"../v3_theme/index.js";const m=i.div`
    overflow: hidden;
    border: ${r["width-010"]} ${r.solid}
        ${t.border};
    border-radius: ${a.sm};
    background: ${t.bg};
    padding: ${o["spacing-16"]};
    min-width: 23rem;

    ${s.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${n["sm-margin"]}px * 2);
    }

    ${s.MaxWidth.xs} {
        width: calc(100vw - ${n["xs-margin"]}px * 2);
    }

    ${s.MaxWidth.xxs} {
        width: calc(100vw - ${n["xxs-margin"]}px * 2);
    }
`,x=i.div`
    display: flex;
    align-items: baseline;
`,$=i.div`
    margin: 0 0.5rem;
    color: ${t.text};
`,c=i.div`
    ${i=>"small"===i.$variant?l["body-md-regular"]:l["body-baseline-regular"]}
    text-align: left;
    ${i=>{if("middle"!==i.$truncateType)return e`
                    ${d(1)}
                `}}
    overflow: hidden;
`,h=i(c)`
    color: ${t["text-subtler"]};
`;export{m as HistogramSliderDropdownContainer,x as Label,h as PlaceholderLabel,$ as Separator,c as ValueLabel};
//# sourceMappingURL=select-histogram.styles.js.map
