import e from"styled-components";import{Card as t}from"../card/card.js";import{ModalBox as r}from"../modal/modal-box.js";import{applyHtmlContentStyle as o}from"../shared/html-content/html-content.js";import"../theme/theme-provider/index.js";import"react";import"../theme/theme-provider/context.js";import"../theme/tokens/border.js";import{Colour as i}from"../theme/tokens/colour.js";import"../theme/tokens/font.js";import"../theme/tokens/media-query.js";import"../util/calendar-helper.js";import"../external/dayjs/dayjs.min.js";import"../util/string-helper.js";import{V3_MediaQuery as m,V3_Colour as n,V3_Radius as d}from"../v3_theme/index.js";const s=e.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,a=e(t)`
    color: ${i.text};
    ${o({textSize:"body-md"})}

    ${m.MaxWidth.sm} {
        display: none;
    }

    ${({$maxHeight:e})=>void 0!==e&&`\n        max-height: ${e}px;\n    `}

    ${({$overflow:e})=>e&&`\n        overflow-y: ${e};\n    `}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${n["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${d.full};
        background-clip: padding-box;
    }
`;e(r)`
    padding: 3.5rem 1.25rem 2.5rem;
`,e.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${n.text};
    ${o({textSize:"body-md"})}
`;export{a as PopoverCard,s as PopoverContainer};
//# sourceMappingURL=popover.styles.js.map
