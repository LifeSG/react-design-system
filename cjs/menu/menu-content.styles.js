"use strict";var r=require("styled-components"),a=require("../theme/index.js");function e(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}const i=e(r).default.div`
    border-radius: ${a.Radius.md};
    border: ${a.Border["width-010"]} ${a.Border.solid} ${a.Colour.border};
    background: ${a.Colour.bg};
    box-shadow: ${a.Shadow["md-subtle"]};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${a.MediaQuery.MaxWidth.sm} {
        --x-spacing: ${a.Breakpoint["sm-margin"]}px;
    }

    ${a.MediaQuery.MaxWidth.xs} {
        --x-spacing: ${a.Breakpoint["xs-margin"]}px;
    }

    ${a.MediaQuery.MaxWidth.xxs} {
        --x-spacing: ${a.Breakpoint["xxs-margin"]}px;
    }

    min-width: min(15rem, var(--available-width));
    max-width: min(24rem, var(--available-width));

    ${({$maxHeight:r})=>void 0!==r&&`\n        max-height: ${r}px;\n    `}

    ${({$overflow:r})=>r&&`\n        overflow-y: ${r};\n    `}

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
        background: ${a.Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${a.Radius.full};
        background-clip: padding-box;
    }
`;exports.MenuPanel=i;
//# sourceMappingURL=menu-content.styles.js.map
