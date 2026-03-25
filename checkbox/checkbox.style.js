import{SquareIcon as e,SquareFillIcon as i,SquareTickFillIcon as o,MinusSquareFillIcon as t}from"@lifesg/react-icons";import s,{keyframes as l,css as r}from"styled-components";import{V3_Motion as n,V3_Colour as d}from"../v3_theme/index.js";const a=l`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,c=r`
    animation: ${n["duration-150"]} ${n["ease-default"]}
        ${a};
    width: 100%;
    height: 100%;
    transition: color ${n["duration-150"]} ${n["ease-default"]};
`,$=s(e)`
    ${c}
    color: ${d["icon-primary-subtlest"]};
`,p=s(i)`
    ${c}
    color: ${d["icon-disabled-subtle"]};
`,u=s(o)`
    ${c}
    color: ${e=>e.$disabled?d["icon-disabled-subtle"](e):d["icon-selected"](e)};
`,m=s(t)`
    ${c}
    color: ${e=>e.$disabled?d["icon-disabled-subtle"](e):d["icon-selected"](e)};
`,h=s.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>r`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
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
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${$},
        &:hover
        + ${u},
        &:hover
        + ${m} {
        @media (pointer: fine) {
            color: ${e=>!e.disabled&&d["icon-hover"](e)};
        }
    }
`;export{h as Container,f as Input,u as StyledCheckedIcon,m as StyledInteremediateIcon,p as StyledUncheckedDisabledIcon,$ as StyledUncheckedIcon};
//# sourceMappingURL=checkbox.style.js.map
