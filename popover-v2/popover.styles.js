import o from"styled-components";import{Card as r}from"../card/card.js";import{ModalBox as t}from"../modal/modal-box.js";import{applyHtmlContentStyle as e}from"../shared/html-content/html-content.js";import{Colour as i,MediaQuery as d,Radius as n}from"../theme/index.js";const a=o.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,m=o(r)`
    color: ${i.text};
    ${e({textSize:"body-md"})}

    ${d.MaxWidth.sm} {
        display: none;
    }

    ${({$maxHeight:o})=>void 0!==o&&`\n        max-height: ${o}px;\n    `}

    ${({$overflow:o})=>o&&`\n        overflow-y: ${o};\n    `}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${i["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${n.full};
        background-clip: padding-box;
    }
`;o(t)`
    padding: 3.5rem 1.25rem 2.5rem;
`,o.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${i.text};
    ${e({textSize:"body-md"})}
`;export{m as PopoverCard,a as PopoverContainer};
//# sourceMappingURL=popover.styles.js.map
