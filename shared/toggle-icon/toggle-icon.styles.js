import e,{css as i}from"styled-components";import{V3_Colour as o}from"../../v3_theme/index.js";const t=e.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?i`
                    color: ${o["icon-selected-disabled"]};
                `:i`
                    color: ${o["icon-disabled-subtle"]};
                `:e.$active?i`
                color: ${o["icon-selected"]};
            `:i`
            color: ${o["icon-subtle"]};
        `};
`;export{t as Wrapper};
//# sourceMappingURL=toggle-icon.styles.js.map
