import{ChevronDownIcon as i}from"@lifesg/react-icons/chevron-down";import{TickIcon as o}from"@lifesg/react-icons/tick";import t,{css as e}from"styled-components";import{V3_Colour as r,V3_Motion as s,V3_Spacing as n,V3_Border as a,V3_Radius as d,V3_Font as $}from"../../v3_theme/index.js";const l=t(i)`
    color: ${r.icon};
    transition: transform ${s["duration-250"]}
        ${s["ease-default"]};
    transform: rotate(${i=>i.$isDropdownExpanded?180:0}deg);
`,c=t.div`
    cursor: pointer;
    background: ${r.bg};
    padding: ${n["spacing-12"]} ${n["spacing-16"]};
    overflow: hidden;
    box-shadow: 0 0 ${a["width-010"]} ${a["width-010"]}
        ${r.border};
    border-radius: ${d.sm};
    ${i=>i.$isDropdownExpanded&&e`
            border-bottom-left-radius: ${d.none};
            border-bottom-right-radius: ${d.none};
        `}
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all ${s["duration-250"]} ${s["ease-default"]};
    transition-property: background, border-radius, box-shadow, transform;

    &:focus-visible {
        outline: 2px solid ${r["focus-ring"]};
        outline-offset: 2px;
        border-radius: ${d.sm};
    }
`,p=t.li`
    padding: ${i=>i.$isSelected?e`
                  ${n["spacing-12"]} ${n["spacing-8"]} 
                  ${n["spacing-12"]} 0
              `:e`
                  ${n["spacing-12"]} ${n["spacing-8"]}
                  ${n["spacing-12"]} ${n["spacing-32"]}
              `};
    background: ${i=>i.$isSelected?r["bg-primary-subtlest"]:r.bg};
    /* Ensures that the tick mark is positioned relative to the selected item */
    position: relative;
    display: flex;
    /* Vertically align text and tick */
    align-items: center;

    &:focus-visible {
        outline: 2px solid ${r["focus-ring"]};
        outline-offset: 0px;
        border-radius: ${d.sm};
    }
`,g=t.ul`
    transition: all ${s["duration-250"]} ${s["ease-default"]};
    transform-origin: top;
    list-style-type: none;
    padding: 0 ${n["spacing-8"]};
    margin: 0;
    background: ${r.bg};
    cursor: pointer;
    box-shadow: 0 0 ${a["width-010"]} ${a["width-010"]}
        ${r.border};
    border-bottom-right-radius: ${d.sm};
    border-bottom-left-radius: ${d.sm};
    /* Enables vertical scrolling */
    overflow-y: auto;
    /* Set a max height for the dropdown list */
    max-height: ${i=>i.$viewportHeight}px;
`,b=t.div`
    ${$["body-baseline-regular"]}
    color: ${i=>i.$isSelected?r["text-selected"]:r.text};
`,m=t(o)`
    color: ${r["icon-selected"]};
    margin: 0 ${n["spacing-8"]};
`,u=t.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${r["overlay-strong"]};
    z-index: -1;
`,f=t.nav`
    display: block;
    position: sticky;
    top: ${i=>i.$stickyOffset}px;
    width: 100%;
    z-index: 10;

    ${({$isStickied:i,$sideMargin:o})=>i&&e`
            ${c} {
                ${o&&`margin: 0 -${o}px;`}
                padding: ${n["spacing-12"]} ${n["spacing-16"]};
                border-radius: ${d.none};
            }

            ${g} {
                ${o&&`margin-left: -${o}px;`}
                ${o&&`margin-right: -${o}px;`}
                border-radius-bottom-left: ${d.sm};
                border-radius-bottom-right: ${d.sm};
            }
        `}
`;export{u as Backdrop,p as NavItem,b as NavItemLabel,g as NavItemList,c as NavSelect,l as NavSelectIcon,f as NavWrapper,m as StyledTickIcon};
//# sourceMappingURL=local-nav-dropdown.styles.js.map
