import a from"styled-components";import{Radius as i,Border as r,Colour as d,Shadow as o,MediaQuery as t,Breakpoint as n}from"../theme/index.js";const e=a.div`
    border-radius: ${i.md};
    border: ${r["width-010"]} ${r.solid} ${d.border};
    background: ${d.bg};
    box-shadow: ${o["md-subtle"]};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${t.MaxWidth.sm} {
        --x-spacing: ${n["sm-margin"]}px;
    }

    ${t.MaxWidth.xs} {
        --x-spacing: ${n["xs-margin"]}px;
    }

    ${t.MaxWidth.xxs} {
        --x-spacing: ${n["xxs-margin"]}px;
    }

    min-width: min(15rem, var(--available-width));
    max-width: min(
        ${({$maxWidth:a})=>a?`${a}px`:"24rem"},
        var(--available-width)
    );

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
        background: ${d["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${i.full};
        background-clip: padding-box;
    }
`;export{e as MenuPanel};
//# sourceMappingURL=menu-content.styles.js.map
