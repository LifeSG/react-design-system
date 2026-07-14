import r,{css as t}from"styled-components";import{Input as i}from"../input/input.js";import"react/jsx-runtime";import"react";import{Spacing as e,Colour as o}from"../theme/index.js";import"../util/string-helper.js";import"../shared/dropdown-list/dropdown-label.styles.js";import"../shared/dropdown-list/dropdown-list.js";import"../shared/dropdown-list/dropdown-list-state.js";import{ExpandableElement as s}from"../shared/dropdown-list/expandable-element.js";import"@lifesg/react-icons/caret-right";import"react-virtuoso";import"../button/button.style.js";import"../util/calendar-helper.js";import"../util/date-helper.js";import"../util/date-input-helper.js";import"../util/simple-id-generator.js";import"@react-aria/live-announcer";import"../shared/dropdown-wrapper/element-with-dropdown.js";import"../shared/dropdown-list/dropdown-list.styles.js";import"../shared/dropdown-list/dropdown-search.js";import"immer";import"../external/lodash/_getTag.js";import"../external/lodash/isArguments.js";import"../external/lodash/_baseGetTag.js";import"../external/lodash/isBuffer.js";import"../external/lodash/isTypedArray.js";import"../external/lodash/_Stack.js";import"../external/lodash/_SetCache.js";import"../external/lodash/_equalByTag.js";import"../shared/dropdown-list/nested-dropdown-list.styles.js";import"../shared/dropdown-list/virtuoso-components.js";import{InputBox as p}from"../shared/input-wrapper/input-wrapper.js";const d=r(p)`
    display: flex;
    align-items: center;

    ${r=>"right"===r.$position?t`
                    flex-direction: row-reverse;
                `:t`
                    flex-direction: row;
                `}
`,n=r(s)`
    ${r=>{if(r.$noBorder)return"right"===r.$position?t`
                        padding-right: 0;
                    `:t`
                        padding-left: 0;
                    `}}
`,a=r.div`
    flex: 0 0 auto;
`,l=r(i)`
    ${r=>r.readOnly?t`
                padding: 0;
            `:r.$noBorder?"right"===r.$position?t`
                        padding-left: 0;
                    `:t`
                        padding-right: 0;
                    `:"right"===r.$position?t`
                    padding-left: ${e["spacing-16"]};
                `:t`
                    padding-right: ${e["spacing-16"]};
                `}
`,m=r.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${e["spacing-12"]};
    color: ${o.text};
`,g=r.div`
    width: 1px;
    background: ${o.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${r=>{if(r.$readOnly)return t`
                display: none;
            `}}

    ${r=>"right"===r.$position?t`
                    margin-left: ${e["spacing-12"]};
                `:t`
                    margin-right: ${e["spacing-12"]};
                `}
`;export{g as Divider,l as FieldInput,a as FieldSelector,d as FieldWrapper,m as SelectorReadOnly,n as StyledExpandableElement};
//# sourceMappingURL=input-group-list-addon.style.js.map
