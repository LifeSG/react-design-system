"use strict";var e=require("styled-components"),r=require("../input/input.js");require("react/jsx-runtime"),require("react"),require("../util/string-helper.js");var i=require("../v3_theme/index.js");require("../shared/dropdown-list-v2/dropdown-label.styles.js"),require("../shared/dropdown-list-v2/dropdown-list.js"),require("../shared/dropdown-list-v2/dropdown-list-state.js");var s=require("../shared/dropdown-list-v2/expandable-element.js");require("@lifesg/react-icons/caret-right"),require("react-virtuoso"),require("../button/button.style.js"),require("../util/calendar-helper.js"),require("../external/dayjs/dayjs.min.js"),require("../shared/dropdown-wrapper/dropdown-wrapper.styles.js"),require("../shared/dropdown-wrapper/element-with-dropdown.js"),require("../shared/dropdown-list-v2/dropdown-list.styles.js"),require("../shared/dropdown-list-v2/dropdown-search.js"),require("../shared/dropdown-list-v2/nested-dropdown-list.styles.js"),require("immer"),require("../external/lodash/_getTag.js"),require("../external/lodash/isArguments.js"),require("../external/lodash/_baseGetTag.js"),require("../external/lodash/isBuffer.js"),require("../external/lodash/isTypedArray.js"),require("../external/lodash/_Stack.js"),require("../external/lodash/_SetCache.js"),require("../external/lodash/_equalByTag.js");var t=require("../shared/input-wrapper/input-wrapper.js");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=d(e);const n=a.default(t.InputBox)`
    display: flex;
    align-items: center;

    ${r=>"right"===r.$position?e.css`
                    flex-direction: row-reverse;
                `:e.css`
                    flex-direction: row;
                `}
`,o=a.default(s.ExpandableElement)`
    ${r=>{if(r.$noBorder)return"right"===r.$position?e.css`
                        padding-right: 0;
                    `:e.css`
                        padding-left: 0;
                    `}}
`,l=a.default.div`
    flex: 0 0 auto;
`,p=a.default(r.Input)`
    ${r=>r.readOnly?e.css`
                padding: 0;
            `:r.$noBorder?"right"===r.$position?e.css`
                        padding-left: 0;
                    `:e.css`
                        padding-right: 0;
                    `:"right"===r.$position?e.css`
                    padding-left: ${i.V3_Spacing["spacing-16"]};
                `:e.css`
                    padding-right: ${i.V3_Spacing["spacing-16"]};
                `}
`,u=a.default.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${i.V3_Spacing["spacing-12"]};
    color: ${i.V3_Colour.text};
`,c=a.default.div`
    width: 1px;
    background: ${i.V3_Colour.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${r=>{if(r.$readOnly)return e.css`
                display: none;
            `}}

    ${r=>"right"===r.$position?e.css`
                    margin-left: ${i.V3_Spacing["spacing-12"]};
                `:e.css`
                    margin-right: ${i.V3_Spacing["spacing-12"]};
                `}
`;exports.Divider=c,exports.FieldInput=p,exports.FieldSelector=l,exports.FieldWrapper=n,exports.SelectorReadOnly=u,exports.StyledExpandableElement=o;
//# sourceMappingURL=input-group-list-addon.style.js.map
