"use strict";var t=require("styled-components"),e=require("../theme/index.js");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=n(t);const a=i.default.ul`
    list-style-type: none;
    margin-bottom: ${t=>t.$readOnly?"0":e.Spacing["spacing-32"]};
`,r=i.default.li`
    &:not(:last-child) {
        margin-bottom: ${e.Spacing["spacing-16"]};
    }

    ul {
        list-style-type: none;
    }
`;exports.EditableItemsContainer=r,exports.ListWrapper=a;
//# sourceMappingURL=file-list.styles.js.map
