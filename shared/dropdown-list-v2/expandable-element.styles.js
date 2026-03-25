import e,{css as i}from"styled-components";import{V3_Spacing as t,V3_Colour as r,V3_Font as o,V3_Motion as a}from"../../v3_theme/index.js";import{BasicButton as n}from"../input-wrapper/input-wrapper.js";const s=e(n)`
    display: flex;
    align-items: center;
    gap: ${t["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${t["spacing-16"]}`:t["spacing-16"]};

    ${e=>"small"===e.$variant?i`
                  ${o["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:i`
                  ${o["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${r["focus-ring"]};
        outline-offset: -2px;
    }
`,d=e.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${a["duration-250"]}
        ${a["ease-default"]};

    svg {
        color: ${r.icon};
        height: 1em;
        width: 1em;
    }
`;export{d as IconContainer,s as Selector};
//# sourceMappingURL=expandable-element.styles.js.map
