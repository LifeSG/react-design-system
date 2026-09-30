import t,{css as e}from"styled-components";import{Input as r}from"../input/input.js";import{LabelAddonContainer as i}from"../input-group/input-group.style.js";import{Colour as o}from"../theme/index.js";import{Typography as n}from"../typography/typography.js";const m=t(i)`
    margin-right: 0.5rem;
`,p=t(r)`
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
`,a=t(n.BodyBL)`
    margin: 0 0.25rem;
    ${t=>{if(t.$inactive)return e`
                color: ${o["text-disabled"]};
            `}}
`,d=t.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,g=t(n.BodyBL)``;export{p as FloorInput,m as HashContainer,d as ReadOnlyContainer,g as ReadOnlyLabel,l as UnitInput,a as UnitNumberDivider};
//# sourceMappingURL=unit-number-input.style.js.map
