"use strict";var e=require("styled-components"),r=require("../card/card.js"),t=require("../modal/modal-box.js"),o=require("../shared/html-content/html-content.js"),a=require("../theme/index.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=l(e);const n=d.default.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,i=d.default(r.Card)`
    color: ${a.Colour.text};
    ${o.applyHtmlContentStyle({textSize:"body-md"})}

    ${a.MediaQuery.MaxWidth.sm} {
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
        background: ${a.Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${a.Radius.full};
        background-clip: padding-box;
    }
`;d.default(t.ModalBox)`
    padding: 3.5rem 1.25rem 2.5rem;
`,d.default.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${a.Colour.text};
    ${o.applyHtmlContentStyle({textSize:"body-md"})}
`,exports.PopoverCard=i,exports.PopoverContainer=n;
//# sourceMappingURL=popover.styles.js.map
