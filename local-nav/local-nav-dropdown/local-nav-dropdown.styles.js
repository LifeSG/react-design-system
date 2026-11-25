import{ChevronDownIcon as i}from"@lifesg/react-icons/chevron-down";import{TickIcon as e}from"@lifesg/react-icons/tick";import t,{css as o}from"styled-components";import{Colour as r,Motion as n,Spacing as s,Border as a,Radius as d,Font as l}from"../../theme/index.js";const $=t(i)`
    color: ${r.icon};
    transition: transform ${n["duration-250"]} ${n["ease-default"]};
    transform: rotate(${i=>i.$isDropdownExpanded?180:0}deg);
`,p=t.div`
    cursor: pointer;
    background: ${r.bg};
    padding: ${s["spacing-12"]} ${s["spacing-16"]};
    overflow: hidden;
    box-shadow: 0 0 ${a["width-010"]} ${a["width-010"]}
        ${r.border};
    border-radius: ${d.sm};
    ${i=>i.$isDropdownExpanded&&o`
            border-bottom-left-radius: ${d.none};
            border-bottom-right-radius: ${d.none};
        `}
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all ${n["duration-250"]} ${n["ease-default"]};
    transition-property: background, border-radius, box-shadow, transform;

    &:focus-visible {
        outline: 2px solid ${r["focus-ring"]};
        outline-offset: 2px;
        border-radius: ${d.sm};
    }
`,c=t.li`
    padding: ${i=>i.$isSelected?o`
                  ${s["spacing-12"]} ${s["spacing-8"]} 
                  ${s["spacing-12"]} 0
              `:o`
                  ${s["spacing-12"]} ${s["spacing-8"]}
                  ${s["spacing-12"]} ${s["spacing-32"]}
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
    transition: all ${n["duration-250"]} ${n["ease-default"]};
    transform-origin: top;
    list-style-type: none;
    padding: 0 ${s["spacing-8"]};
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
`,m=t.div`
    ${l["body-baseline-regular"]}
    color: ${i=>i.$isSelected?r["text-selected"]:r.text};
`,b=t.span`
    display: flex;
    align-items: center;
    gap: ${s["spacing-8"]};
    flex: 1;
`,f=t.span`
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    min-height: ${l.Spec["body-lh-baseline"]};
`,u=t.span`
    display: inline-flex;
    align-items: center;
    margin-left: auto;
`,x=t(e)`
    color: ${r["icon-selected"]};
    margin: 0 ${s["spacing-8"]};
`,h=t.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${r["overlay-strong"]};
    z-index: -1;
`,y=t.nav`
    display: block;
    position: sticky;
    top: ${i=>i.$stickyOffset}px;
    width: 100%;
    z-index: 10;

    ${({$isStickied:i,$sideMargin:e})=>i&&o`
            ${p} {
                ${e&&`margin: 0 -${e}px;`}
                padding: ${s["spacing-12"]} ${s["spacing-16"]};
                border-radius: ${d.none};
            }

            ${g} {
                ${e&&`margin-left: -${e}px;`}
                ${e&&`margin-right: -${e}px;`}
                border-radius-bottom-left: ${d.sm};
                border-radius-bottom-right: ${d.sm};
            }
        `}
`;export{h as Backdrop,f as LeftAddon,c as NavItem,m as NavItemLabel,g as NavItemList,p as NavSelect,$ as NavSelectIcon,y as NavWrapper,u as RightAddon,x as StyledTickIcon,b as TitleContainer};
//# sourceMappingURL=local-nav-dropdown.styles.js.map
