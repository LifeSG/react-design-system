import a from"styled-components";import{V3_Radius as r,V3_Border as i,V3_Colour as o,V3_Shadow as d,V3_MediaQuery as n,V3_Breakpoint as t}from"../v3_theme/index.js";const e=a.div`
    border-radius: ${r.md};
    border: ${i["width-010"]} ${i.solid}
        ${o.border};
    background: ${o.bg};
    box-shadow: ${d["md-subtle"]};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${n.MaxWidth.sm} {
        --x-spacing: ${t["sm-margin"]}px;
    }

    ${n.MaxWidth.xs} {
        --x-spacing: ${t["xs-margin"]}px;
    }

    ${n.MaxWidth.xxs} {
        --x-spacing: ${t["xxs-margin"]}px;
    }

    min-width: min(15rem, var(--available-width));
    max-width: min(24rem, var(--available-width));

    ${({$maxHeight:a})=>void 0!==a&&`\n        max-height: ${a}px;\n    `}

    ${({$overflow:a})=>a&&`\n        overflow-y: ${a};\n    `}

    &:focus {
        outline: none;
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${o["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${r.full};
        background-clip: padding-box;
    }
`;export{e as MenuPanel};
//# sourceMappingURL=menu-content.styles.js.map
