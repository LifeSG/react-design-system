"use strict";var e=require("styled-components"),r=require("../input/input.js");require("react/jsx-runtime"),require("react");var i=require("../theme/index.js");require("../util/string-helper.js"),require("../shared/dropdown-list/dropdown-label.styles.js"),require("../shared/dropdown-list/dropdown-list.js"),require("../shared/dropdown-list/dropdown-list-state.js");var t=require("../shared/dropdown-list/expandable-element.js");require("@lifesg/react-icons/caret-right"),require("react-virtuoso"),require("../button/button.style.js"),require("../util/calendar-helper.js"),require("../util/date-helper.js"),require("../util/date-input-helper.js"),require("../util/file-helper.js"),require("../util/simple-id-generator.js"),require("@react-aria/live-announcer"),require("../shared/dropdown-wrapper/element-with-dropdown.js"),require("../shared/dropdown-list/dropdown-list.styles.js"),require("../shared/dropdown-list/dropdown-search.js"),require("immer"),require("../_virtual/isEmpty.js"),require("../_virtual/isEqual.js"),require("../shared/dropdown-list/nested-dropdown-list.styles.js"),require("../shared/dropdown-list/virtuoso-components.js");var s=require("../shared/input-wrapper/input-wrapper.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=n(e);const a=d.default(s.InputBox)`
    display: flex;
    align-items: center;

    ${r=>"right"===r.$position?e.css`
                    flex-direction: row-reverse;
                `:e.css`
                    flex-direction: row;
                `}
`,o=d.default(t.ExpandableElement)`
    ${r=>{if(r.$noBorder)return"right"===r.$position?e.css`
                        padding-right: 0;
                    `:e.css`
                        padding-left: 0;
                    `}}
`,p=d.default.div`
    flex: 0 0 auto;
`,l=d.default(r.Input)`
    ${r=>r.readOnly?e.css`
                padding: 0;
            `:r.$noBorder?"right"===r.$position?e.css`
                        padding-left: 0;
                    `:e.css`
                        padding-right: 0;
                    `:"right"===r.$position?e.css`
                    padding-left: ${i.Spacing["spacing-16"]};
                `:e.css`
                    padding-right: ${i.Spacing["spacing-16"]};
                `}
`,u=d.default.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${i.Spacing["spacing-12"]};
    color: ${i.Colour.text};
`,c=d.default.div`
    width: 1px;
    background: ${i.Colour.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${r=>{if(r.$readOnly)return e.css`
                display: none;
            `}}

    ${r=>"right"===r.$position?e.css`
                    margin-left: ${i.Spacing["spacing-12"]};
                `:e.css`
                    margin-right: ${i.Spacing["spacing-12"]};
                `}
`;exports.Divider=c,exports.FieldInput=l,exports.FieldSelector=p,exports.FieldWrapper=a,exports.SelectorReadOnly=u,exports.StyledExpandableElement=o;
//# sourceMappingURL=input-group-list-addon.style.js.map
