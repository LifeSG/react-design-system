import t,{css as e}from"styled-components";import{Input as i}from"../input/input.js";import{LabelAddonContainer as r}from"../input-group/input-group.style.js";import{Typography as o}from"../typography/index.js";import{V3_Colour as n}from"../v3_theme/index.js";const m=t(r)`
    margin-right: 0.5rem;
`,p=t(i)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,l=t(p)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,a=t(o.BodyBL)`
    margin: 0 0.25rem;
    ${t=>{if(t.$inactive)return e`
                color: ${n["text-disabled"]};
            `}}
`,d=t.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,g=t(o.BodyBL)``;export{p as FloorInput,m as HashContainer,d as ReadOnlyContainer,g as ReadOnlyLabel,l as UnitInput,a as UnitNumberDivider};
//# sourceMappingURL=unit-number-input.style.js.map
