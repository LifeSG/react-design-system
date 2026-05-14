import e,{css as t}from"styled-components";import{Input as i}from"../input/input.js";import{Typography as r}from"../typography/index.js";import{V3_Colour as o}from"../v3_theme/index.js";const n=e.div`
    margin-right: 0.5rem;
`,m=e(i)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,d=e(m)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,l=e(r.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return t`
                color: ${o["text-disabled"]};
            `}}
`,a=e.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,p=e(r.BodyBL)``;export{m as FloorInput,n as HashContainer,a as ReadOnlyContainer,p as ReadOnlyLabel,d as UnitInput,l as UnitNumberDivider};
//# sourceMappingURL=unit-number-input.style.js.map
