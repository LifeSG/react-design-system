import r,{css as o}from"styled-components";import{BasicInput as e}from"../shared/input-wrapper/input-wrapper.js";import{Colour as t}from"../theme/index.js";r.div`
    position: relative;
`;const i=r(e)`
    height: calc(3rem - 2px); // exclude top and bottom borders
    cursor: inherit;
    ${r=>r.$disabled&&o`
            color: ${t["text-subtler"]};
            cursor: not-allowed;
        `}
`;export{i as InputSelectorElement};
//# sourceMappingURL=timepicker.styles.js.map
