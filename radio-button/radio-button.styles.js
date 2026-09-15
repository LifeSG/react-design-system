import e,{css as i}from"styled-components";import{Motion as t,Colour as o}from"../theme/index.js";import{CircleIcon as n,CircleDotIcon as r}from"@lifesg/react-icons";const d=e.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${e=>"small"===e.$displaySize?i`
                height: 1.5rem;
                width: 1.5rem;
            `:i`
                height: 2rem;
                width: 2rem;
            `}
    position: relative;
`,s=e(n)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?o["icon-disabled-subtle"](e):o["icon-subtle"](e)};
    transition: ${t["duration-150"]} ${t["ease-default"]};
`,a=e(r)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?o["icon-selected-disabled"](e):o["icon-selected"](e)};

    transition: ${t["duration-150"]} ${t["ease-default"]};
`,l=e.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.$disabledVisual?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${s}, &:hover + ${a} {
        @media (pointer: fine) {
            color: ${e=>!e.$disabledVisual&&o["icon-hover"](e)};
        }
    }
`;export{d as Container,l as Input,a as StyledCheckedIcon,s as StyledUnCheckedIcon};
//# sourceMappingURL=radio-button.styles.js.map
