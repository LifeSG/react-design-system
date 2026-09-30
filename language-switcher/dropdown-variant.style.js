import r,{css as e}from"styled-components";import"react/jsx-runtime";import"react";import{Font as o,Colour as t,Spacing as s,Radius as d,Border as i}from"../theme/index.js";import"../util/string-helper.js";import"../shared/dropdown-list/dropdown-label.styles.js";import"../shared/dropdown-list/dropdown-list.js";import"../shared/dropdown-list/dropdown-list-state.js";import{ExpandableElement as l}from"../shared/dropdown-list/expandable-element.js";import"@lifesg/react-icons/caret-right";import"react-virtuoso";import"../button/button.style.js";import"../util/calendar-helper.js";import"../util/date-helper.js";import"../util/date-input-helper.js";import"../util/simple-id-generator.js";import"@react-aria/live-announcer";import"../shared/dropdown-wrapper/element-with-dropdown.js";import{ListItem as a}from"../shared/dropdown-list/dropdown-list.styles.js";export{SelectedIndicator,UnselectedIndicator}from"../shared/dropdown-list/dropdown-list.styles.js";import"../shared/dropdown-list/dropdown-search.js";import"immer";import"../external/lodash/_getTag.js";import"../external/lodash/isArguments.js";import"../external/lodash/_baseGetTag.js";import"../external/lodash/isBuffer.js";import"../external/lodash/isTypedArray.js";import"../external/lodash/_Stack.js";import"../external/lodash/_SetCache.js";import"../external/lodash/_equalByTag.js";import"../shared/dropdown-list/nested-dropdown-list.styles.js";import"../shared/dropdown-list/virtuoso-components.js";import{IconContainer as n}from"../shared/dropdown-list/expandable-element.styles.js";const p=r(l)`
    min-width: 9rem;
    width: auto;
    ${o["body-md-semibold"]}
    color: ${t["text-primary"]};
    height: 2.5rem;
    padding: 0 ${s["spacing-16"]};
    border-radius: ${d.sm};
    border: ${i["width-010"]} ${i.solid} ${t.border};
    background: ${t.bg};

    ${n} {
        margin-left: auto;

        svg {
            color: ${t["text-selected"]};
        }
    }

    &:focus-visible {
        outline: 2px solid ${t["focus-ring"]};
        outline-offset: -2px;
    }
`,m=e`
    display: flex;
    align-items: center;

    svg {
        height: 1rem;
        width: 1rem;
    }
`,h=r.span`
    ${m}
    color: ${t["icon-primary"]};
`,c=r.div`
    border-radius: ${d.sm};
    border: ${i["width-010"]} ${i.solid} ${t.border};
    background: ${t.bg};
    overflow: hidden;
`,g=r.ul`
    list-style: none;
    margin: 0;
    padding: ${s["spacing-8"]};
`,u=r(a)`
    align-items: center;
    ${o["body-md-regular"]}
    color: ${t.text};

    &:hover {
        background: ${t["bg-hover-subtle"]};
    }

    ${r=>r.$selected&&e`
            background: transparent;
            color: ${t["text-selected"]};

            &:hover {
                background: ${t["bg-hover"]};
            }
        `}
`;export{u as DropdownItem,g as DropdownList,c as DropdownPanel,h as LanguageIconWrapper,p as StyledExpandableElement};
//# sourceMappingURL=dropdown-variant.style.js.map
