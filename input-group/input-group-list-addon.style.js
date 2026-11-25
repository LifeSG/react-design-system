import r,{css as i}from"styled-components";import{Input as t}from"../input/input.js";import"react/jsx-runtime";import"react";import{Spacing as o,Colour as e}from"../theme/index.js";import"../util/string-helper.js";import"../shared/dropdown-list/dropdown-label.styles.js";import"../shared/dropdown-list/dropdown-list.js";import"../shared/dropdown-list/dropdown-list-state.js";import{ExpandableElement as p}from"../shared/dropdown-list/expandable-element.js";import"@lifesg/react-icons/caret-right";import"react-virtuoso";import"../button/button.style.js";import"../util/calendar-helper.js";import"../util/date-helper.js";import"../util/date-input-helper.js";import"../util/file-helper.js";import"../util/simple-id-generator.js";import"@react-aria/live-announcer";import"../shared/dropdown-wrapper/element-with-dropdown.js";import"../shared/dropdown-list/dropdown-list.styles.js";import"../shared/dropdown-list/dropdown-search.js";import"immer";import"../_virtual/isEmpty.js";import"../_virtual/isEqual.js";import"../shared/dropdown-list/nested-dropdown-list.styles.js";import"../shared/dropdown-list/virtuoso-components.js";import{InputBox as s}from"../shared/input-wrapper/input-wrapper.js";const d=r(s)`
    display: flex;
    align-items: center;

    ${r=>"right"===r.$position?i`
                    flex-direction: row-reverse;
                `:i`
                    flex-direction: row;
                `}
`,n=r(p)`
    ${r=>{if(r.$noBorder)return"right"===r.$position?i`
                        padding-right: 0;
                    `:i`
                        padding-left: 0;
                    `}}
`,a=r.div`
    flex: 0 0 auto;
`,l=r(t)`
    ${r=>r.readOnly?i`
                padding: 0;
            `:r.$noBorder?"right"===r.$position?i`
                        padding-left: 0;
                    `:i`
                        padding-right: 0;
                    `:"right"===r.$position?i`
                    padding-left: ${o["spacing-16"]};
                `:i`
                    padding-right: ${o["spacing-16"]};
                `}
`,m=r.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${o["spacing-12"]};
    color: ${e.text};
`,g=r.div`
    width: 1px;
    background: ${e.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${r=>{if(r.$readOnly)return i`
                display: none;
            `}}

    ${r=>"right"===r.$position?i`
                    margin-left: ${o["spacing-12"]};
                `:i`
                    margin-right: ${o["spacing-12"]};
                `}
`;export{g as Divider,l as FieldInput,a as FieldSelector,d as FieldWrapper,m as SelectorReadOnly,n as StyledExpandableElement};
//# sourceMappingURL=input-group-list-addon.style.js.map
