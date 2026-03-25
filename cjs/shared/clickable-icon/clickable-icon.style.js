"use strict";var e=require("styled-components"),t=require("../../v3_theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const r=n(e).default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${t.V3_Spacing["spacing-24"]};
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

        ${({$highlight:n})=>n&&e.css`
                background-color: ${t.V3_Colour["bg-hover-neutral"]};
            `}
    }
`;exports.Main=r;
//# sourceMappingURL=clickable-icon.style.js.map
