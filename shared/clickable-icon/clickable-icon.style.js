import e,{css as t}from"styled-components";import{V3_Spacing as n,V3_Colour as o}from"../../v3_theme/index.js";const r=e.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${n["spacing-24"]};
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    svg {
        height: 1.125rem;
        width: 1.125rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&t`
                background-color: ${o["bg-hover-neutral"]};
            `}
    }
`;export{r as Main};
//# sourceMappingURL=clickable-icon.style.js.map
