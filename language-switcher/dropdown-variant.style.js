import r,{css as o}from"styled-components";import"react/jsx-runtime";import"react";import{Font as e,Colour as t,Spacing as i,Radius as s,Border as d}from"../theme/index.js";import"../util/string-helper.js";import"../shared/dropdown-list/dropdown-label.styles.js";import"../shared/dropdown-list/dropdown-list.js";import"../shared/dropdown-list/dropdown-list-state.js";import{ExpandableElement as l}from"../shared/dropdown-list/expandable-element.js";import"@lifesg/react-icons/caret-right";import"react-virtuoso";import"../button/button.style.js";import"../util/calendar-helper.js";import"../util/date-helper.js";import"../util/date-input-helper.js";import"../util/file-helper.js";import"../util/simple-id-generator.js";import"@react-aria/live-announcer";import"../shared/dropdown-wrapper/element-with-dropdown.js";import{ListItem as p}from"../shared/dropdown-list/dropdown-list.styles.js";export{SelectedIndicator,UnselectedIndicator}from"../shared/dropdown-list/dropdown-list.styles.js";import"../shared/dropdown-list/dropdown-search.js";import"immer";import"../_virtual/isEmpty.js";import"../_virtual/isEqual.js";import"../shared/dropdown-list/nested-dropdown-list.styles.js";import"../shared/dropdown-list/virtuoso-components.js";import{IconContainer as n}from"../shared/dropdown-list/expandable-element.styles.js";const a=r(l)`
    min-width: 9rem;
    width: auto;
    ${e["body-md-semibold"]}
    color: ${t["text-primary"]};
    height: 2.5rem;
    padding: 0 ${i["spacing-16"]};
    border-radius: ${s.sm};
    border: ${d["width-010"]} ${d.solid} ${t.border};
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
`,m=o`
    display: flex;
    align-items: center;

    svg {
        height: 1rem;
        width: 1rem;
    }
`,c=r.span`
    ${m}
    color: ${t["icon-primary"]};
`,h=r.div`
    border-radius: ${s.sm};
    border: ${d["width-010"]} ${d.solid} ${t.border};
    background: ${t.bg};
    overflow: hidden;
`,u=r.ul`
    list-style: none;
    margin: 0;
    padding: ${i["spacing-8"]};
`,g=r(p)`
    align-items: center;
    ${e["body-md-regular"]}
    color: ${t.text};

    &:hover {
        background: ${t["bg-hover-subtle"]};
    }

    ${r=>r.$selected&&o`
            background: transparent;
            color: ${t["text-selected"]};

            &:hover {
                background: ${t["bg-hover"]};
            }
        `}
`;export{g as DropdownItem,u as DropdownList,h as DropdownPanel,c as LanguageIconWrapper,a as StyledExpandableElement};
//# sourceMappingURL=dropdown-variant.style.js.map
