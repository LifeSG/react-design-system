import r,{css as e}from"styled-components";import"react/jsx-runtime";import"clsx";import"react";import"../theme/theme-provider/index.js";import"../theme/theme-provider/context.js";import{Border as o}from"../theme/tokens/border.js";import{Colour as t}from"../theme/tokens/colour.js";import{Font as s}from"../theme/tokens/font.js";import"../theme/tokens/media-query.js";import{Radius as i}from"../theme/tokens/radius.js";import{Spacing as d}from"../theme/tokens/spacing.js";import"../util/calendar-helper.js";import"../external/dayjs/dayjs.min.js";import"../util/simple-id-generator.js";import"../util/string-helper.js";import"@react-aria/live-announcer";import"../shared/dropdown-list/dropdown-label.styles_1dwmd8f.css";import"../shared/dropdown-list/dropdown-list.js";import"../shared/dropdown-list/dropdown-list-state.js";import{ExpandableElement as a}from"../shared/dropdown-list/expandable-element.js";import"@lifesg/react-icons/caret-right";import"@lifesg/react-icons/exclamation-circle-fill";import"@lifesg/react-icons/minus-square-fill";import"@lifesg/react-icons/square";import"@lifesg/react-icons/square-tick-fill";import"@lifesg/react-icons/tick";import"react-virtuoso";import"../markup/markup.js";import"../_virtual/_tslib.js";import"../shared/component-loading-spinner/component-loading-spinner.styles_15eq02i.css";import"../shared/dropdown-wrapper/element-with-dropdown.js";import"../shared/input-wrapper/input-wrapper.js";import"../shared/dropdown-list/dropdown-list.styles_1qveyb9.css";import"../shared/dropdown-list/dropdown-search.js";import"../shared/dropdown-list/nested-dropdown-list.styles_wdhxoe.css";import"immer";import"../external/lodash/_getTag.js";import"../external/lodash/isArguments.js";import"../external/lodash/_baseGetTag.js";import"../external/lodash/isBuffer.js";import"../external/lodash/isTypedArray.js";import"../external/lodash/_Stack.js";import"../external/lodash/_SetCache.js";import"../external/lodash/_equalByTag.js";import"../shared/dropdown-list/virtuoso-components.js";import{iconContainer as n}from"../shared/dropdown-list/expandable-element.styles.js";const p=r(a)`
    min-width: 9rem;
    width: auto;
    ${s["body-md-semibold"]}
    color: ${t["text-primary"]};
    height: 2.5rem;
    padding: 0 ${d["spacing-16"]};
    border-radius: ${i.sm};
    border: ${o["width-010"]} ${o.solid} ${t.border};
    background: ${t.bg};

    .${n} {
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
`,l=r.span`
    ${m}
    color: ${t["icon-primary"]};
`,c=r.div`
    border-radius: ${i.sm};
    border: ${o["width-010"]} ${o.solid} ${t.border};
    background: ${t.bg};
    overflow: hidden;
`,h=r.ul`
    list-style: none;
    margin: 0;
    padding: ${d["spacing-8"]};
`,g=r.li`
    align-items: center;
    ${s["body-md-regular"]}
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
`;export{g as DropdownItem,h as DropdownList,c as DropdownPanel,l as LanguageIconWrapper,p as StyledExpandableElement};
//# sourceMappingURL=dropdown-variant.style.js.map
