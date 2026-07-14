"use strict";var o=require("@lifesg/react-icons/chevron-down"),i=require("@lifesg/react-icons/tick"),e=require("styled-components"),t=require("../../theme/index.js");function r(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var a=r(e);const s=a.default(o.ChevronDownIcon)`
    color: ${t.Colour.icon};
    transition: transform ${t.Motion["duration-250"]} ${t.Motion["ease-default"]};
    transform: rotate(${o=>o.$isDropdownExpanded?180:0}deg);
`,n=a.default.div`
    cursor: pointer;
    background: ${t.Colour.bg};
    padding: ${t.Spacing["spacing-12"]} ${t.Spacing["spacing-16"]};
    overflow: hidden;
    box-shadow: 0 0 ${t.Border["width-010"]} ${t.Border["width-010"]}
        ${t.Colour.border};
    border-radius: ${t.Radius.sm};
    ${o=>o.$isDropdownExpanded&&e.css`
            border-bottom-left-radius: ${t.Radius.none};
            border-bottom-right-radius: ${t.Radius.none};
        `}
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all ${t.Motion["duration-250"]} ${t.Motion["ease-default"]};
    transition-property: background, border-radius, box-shadow, transform;

    &:focus-visible {
        outline: 2px solid ${t.Colour["focus-ring"]};
        outline-offset: 2px;
        border-radius: ${t.Radius.sm};
    }
`,d=a.default.li`
    padding: ${o=>o.$isSelected?e.css`
                  ${t.Spacing["spacing-12"]} ${t.Spacing["spacing-8"]} 
                  ${t.Spacing["spacing-12"]} 0
              `:e.css`
                  ${t.Spacing["spacing-12"]} ${t.Spacing["spacing-8"]}
                  ${t.Spacing["spacing-12"]} ${t.Spacing["spacing-32"]}
              `};
    background: ${o=>o.$isSelected?t.Colour["bg-primary-subtlest"]:t.Colour.bg};
    /* Ensures that the tick mark is positioned relative to the selected item */
    position: relative;
    display: flex;
    /* Vertically align text and tick */
    align-items: center;

    &:focus-visible {
        outline: 2px solid ${t.Colour["focus-ring"]};
        outline-offset: 0px;
        border-radius: ${t.Radius.sm};
    }
`,l=a.default.ul`
    transition: all ${t.Motion["duration-250"]} ${t.Motion["ease-default"]};
    transform-origin: top;
    list-style-type: none;
    padding: 0 ${t.Spacing["spacing-8"]};
    margin: 0;
    background: ${t.Colour.bg};
    cursor: pointer;
    box-shadow: 0 0 ${t.Border["width-010"]} ${t.Border["width-010"]}
        ${t.Colour.border};
    border-bottom-right-radius: ${t.Radius.sm};
    border-bottom-left-radius: ${t.Radius.sm};
    /* Enables vertical scrolling */
    overflow-y: auto;
    /* Set a max height for the dropdown list */
    max-height: ${o=>o.$viewportHeight}px;
`,c=a.default.div`
    ${t.Font["body-baseline-regular"]}
    color: ${o=>o.$isSelected?t.Colour["text-selected"]:t.Colour.text};
`,u=a.default(i.TickIcon)`
    color: ${t.Colour["icon-selected"]};
    margin: 0 ${t.Spacing["spacing-8"]};
`,p=a.default.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${t.Colour["overlay-strong"]};
    z-index: -1;
`,$=a.default.nav`
    display: block;
    position: sticky;
    top: ${o=>o.$stickyOffset}px;
    width: 100%;
    z-index: 10;

    ${({$isStickied:o,$sideMargin:i})=>o&&e.css`
            ${n} {
                ${i&&`margin: 0 -${i}px;`}
                padding: ${t.Spacing["spacing-12"]} ${t.Spacing["spacing-16"]};
                border-radius: ${t.Radius.none};
            }

            ${l} {
                ${i&&`margin-left: -${i}px;`}
                ${i&&`margin-right: -${i}px;`}
                border-radius-bottom-left: ${t.Radius.sm};
                border-radius-bottom-right: ${t.Radius.sm};
            }
        `}
`;exports.Backdrop=p,exports.NavItem=d,exports.NavItemLabel=c,exports.NavItemList=l,exports.NavSelect=n,exports.NavSelectIcon=s,exports.NavWrapper=$,exports.StyledTickIcon=u;
//# sourceMappingURL=local-nav-dropdown.styles.js.map
