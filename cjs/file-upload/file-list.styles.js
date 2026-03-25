"use strict";var t=require("styled-components"),e=require("../v3_theme/index.js");function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=r(t);const i=o.default.ul`
    list-style-type: none;
    margin-bottom: ${t=>t.$readOnly?"0":e.V3_Spacing["spacing-32"]};
`,n=o.default.li`
    border-top: ${e.V3_Border["width-010"]} ${e.V3_Border.solid} ${e.V3_Colour.border};
    border-bottom: ${e.V3_Border["width-010"]} ${e.V3_Border.solid}
        ${e.V3_Colour.border};

    &:not(:last-child) {
        margin-bottom: ${e.V3_Spacing["spacing-32"]};
    }

    &:not(:first-child) {
        margin-top: ${e.V3_Spacing["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`;exports.EditableItemsContainer=n,exports.ListWrapper=i;
//# sourceMappingURL=file-list.styles.js.map
