"use strict";var e=require("styled-components"),o=require("../../v3_theme/index.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const t=r(e).default.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${r=>r.$disabled?r.$active?e.css`
                    color: ${o.V3_Colour["icon-selected-disabled"]};
                `:e.css`
                    color: ${o.V3_Colour["icon-disabled-subtle"]};
                `:r.$active?e.css`
                color: ${o.V3_Colour["icon-selected"]};
            `:e.css`
            color: ${o.V3_Colour["icon-subtle"]};
        `};
`;exports.Wrapper=t;
//# sourceMappingURL=toggle-icon.styles.js.map
