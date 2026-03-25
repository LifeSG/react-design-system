import e,{css as r}from"styled-components";import{InputRangeSlider as i}from"../input-range-slider/input-range-slider.js";import{V3_Spacing as d,V3_Radius as s,V3_Colour as t}from"../v3_theme/index.js";const n=e.div`
    display: flex;
    margin-bottom: ${d["spacing-16"]};
    align-items: baseline;
`,o=e.div`
    margin: 0 0.5rem;
`,l=e.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,a=e.div`
    flex: 1;
    border-radius: ${s.sm} ${s.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let i=t["bg-strongest"];return e.$disabled&&e.$selected?i=t["bg-selected-stronger-disabled"]:e.$disabled?i=t["bg-disabled"]:e.$selected&&(i=t["bg-selected-stronger"]),r`
            background-color: ${i};
        `}}
`,m=e(i)`
    margin-top: -0.3125rem;
`;export{a as Bar,l as Histogram,n as Label,o as Separator,m as Slider};
//# sourceMappingURL=histogram-slider.styles.js.map
