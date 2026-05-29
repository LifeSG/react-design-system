"use strict";var e=require("@lifesg/react-icons/magnifier"),i=require("styled-components"),n=require("../../theme/index.js"),r=require("../clickable-icon/clickable-icon.js"),a=require("../input-wrapper/input-wrapper.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=t(i);const c=s.default.div`
    background: ${n.Colour["bg-strong"]};
    border-radius: ${n.Radius.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?n.Font["body-md-regular"]:n.Font["body-baseline-regular"]}
`,o=s.default.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${n.Spacing["spacing-8"]};
    padding: ${e=>"small"===e.$variant?i.css`
                  ${n.Spacing["spacing-8"]} ${n.Spacing["spacing-16"]}
              `:i.css`10px ${n.Spacing["spacing-8"]}`};
`,l=s.default(a.BasicInput)`
    flex: 1;
`,p=s.default(e.MagnifierIcon)`
    color: ${n.Colour.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,g=s.default(r.ClickableIcon)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${n.Spacing["spacing-8"]};
    margin-left: -${n.Spacing["spacing-8"]};
    color: ${n.Colour.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;exports.ClearButton=g,exports.Container=c,exports.SearchBox=o,exports.SearchIcon=p,exports.SearchInput=l;
//# sourceMappingURL=dropdown-search.styles.js.map
