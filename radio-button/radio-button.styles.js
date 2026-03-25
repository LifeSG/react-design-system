import{CircleIcon as e,CircleDotIcon as i}from"@lifesg/react-icons";import t,{css as o}from"styled-components";import{V3_Motion as n,V3_Colour as r}from"../v3_theme/index.js";const d=t.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${e=>"small"===e.$displaySize?o`
                height: 1.5rem;
                width: 1.5rem;
            `:o`
                height: 2rem;
                width: 2rem;
            `}
    position: relative;
`,s=t(e)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?r["icon-disabled-subtle"](e):r["icon-subtle"](e)};
    transition: ${n["duration-150"]} ${n["ease-default"]};
`,a=t(i)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?r["icon-selected-disabled"](e):r["icon-selected"](e)};

    transition: ${n["duration-150"]} ${n["ease-default"]};
`,l=t.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${s}, &:hover + ${a} {
        @media (pointer: fine) {
            color: ${e=>!e.disabled&&r["icon-hover"](e)};
        }
    }
`;export{d as Container,l as Input,a as StyledCheckedIcon,s as StyledUnCheckedIcon};
//# sourceMappingURL=radio-button.styles.js.map
