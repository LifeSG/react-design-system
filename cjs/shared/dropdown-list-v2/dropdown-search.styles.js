"use strict";var e=require("@lifesg/react-icons/magnifier"),i=require("styled-components"),n=require("../../v3_theme/index.js"),r=require("../clickable-icon/clickable-icon.js"),a=require("../input-wrapper/input-wrapper.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=t(i);const c=s.default.div`
    background: ${n.V3_Colour["bg-strong"]};
    border-radius: ${n.V3_Radius.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?n.V3_Font["body-md-regular"]:n.V3_Font["body-baseline-regular"]}
`,o=s.default.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${n.V3_Spacing["spacing-8"]};
    padding: ${e=>"small"===e.$variant?i.css`
                  ${n.V3_Spacing["spacing-8"]} ${n.V3_Spacing["spacing-16"]}
              `:i.css`10px ${n.V3_Spacing["spacing-8"]}`};
`,l=s.default(a.BasicInput)`
    flex: 1;
`,p=s.default(e.MagnifierIcon)`
    color: ${n.V3_Colour.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,g=s.default(r.ClickableIcon)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${n.V3_Spacing["spacing-8"]};
    margin-left: -${n.V3_Spacing["spacing-8"]};
    color: ${n.V3_Colour.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;exports.ClearButton=g,exports.Container=c,exports.SearchBox=o,exports.SearchIcon=p,exports.SearchInput=l;
//# sourceMappingURL=dropdown-search.styles.js.map
