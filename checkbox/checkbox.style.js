import{SquareIcon as i,SquareFillIcon as e,SquareTickFillIcon as o,MinusSquareFillIcon as t}from"@lifesg/react-icons";import s,{keyframes as l,css as r}from"styled-components";import{Motion as n,Colour as d}from"../theme/index.js";const a=l`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,c=r`
    animation: ${n["duration-150"]} ${n["ease-default"]} ${a};
    width: 100%;
    height: 100%;
    transition: color ${n["duration-150"]} ${n["ease-default"]};
`,$=s(i)`
    ${c}
    color: ${d["icon-primary-subtlest"]};
`,u=s(e)`
    ${c}
    color: ${d["icon-disabled-subtle"]};
`,p=s(o)`
    ${c}
    color: ${i=>i.$disabled?d["icon-disabled-subtle"](i):d["icon-selected"](i)};
`,m=s(t)`
    ${c}
    color: ${i=>i.$disabled?d["icon-disabled-subtle"](i):d["icon-selected"](i)};
`,h=s.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${i=>r`
        height: ${"small"===i.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===i.$displaySize?"1.5rem":"2rem"};
    `}

    // Show custom focus ring when input is focused
    input:focus-visible + svg {
        outline: 2px solid ${d["focus-ring"]};
        outline-offset: 0px;
        border-radius: 4px;
    }
`,f=s.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${i=>i.$disabledVisual?"not-allowed":"pointer"};

    &:hover
        + ${$},
        &:hover
        + ${p},
        &:hover
        + ${m} {
        @media (pointer: fine) {
            color: ${i=>!i.$disabledVisual&&d["icon-hover"](i)};
        }
    }
`;export{h as Container,f as Input,p as StyledCheckedIcon,m as StyledInteremediateIcon,u as StyledUncheckedDisabledIcon,$ as StyledUncheckedIcon};
//# sourceMappingURL=checkbox.style.js.map
