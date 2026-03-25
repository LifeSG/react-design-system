"use strict";var e=require("styled-components"),r=require("../card/card.js"),t=require("../modal/modal-box.js"),o=require("../shared/html-content/html-content.js");require("../theme/theme-provider/index.js"),require("react"),require("../theme/theme-provider/context.js"),require("../theme/tokens/border.js");var i=require("../theme/tokens/colour.js");require("../theme/tokens/font.js"),require("../theme/tokens/media-query.js"),require("../util/calendar-helper.js"),require("../external/dayjs/dayjs.min.js"),require("../util/string-helper.js");var a=require("../v3_theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=n(e);const l=d.default.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,s=d.default(r.Card)`
    color: ${i.Colour.text};
    ${o.applyHtmlContentStyle({textSize:"body-md"})}

    ${a.V3_MediaQuery.MaxWidth.sm} {
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
        background: ${a.V3_Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${a.V3_Radius.full};
        background-clip: padding-box;
    }
`;d.default(t.ModalBox)`
    padding: 3.5rem 1.25rem 2.5rem;
`,d.default.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${a.V3_Colour.text};
    ${o.applyHtmlContentStyle({textSize:"body-md"})}
`,exports.PopoverCard=s,exports.PopoverContainer=l;
//# sourceMappingURL=popover.styles.js.map
