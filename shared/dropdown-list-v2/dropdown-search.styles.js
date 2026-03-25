import{MagnifierIcon as i}from"@lifesg/react-icons/magnifier";import e,{css as r}from"styled-components";import{V3_Colour as n,V3_Radius as o,V3_Font as a,V3_Spacing as s}from"../../v3_theme/index.js";import{ClickableIcon as t}from"../clickable-icon/clickable-icon.js";import{BasicInput as l}from"../input-wrapper/input-wrapper.js";const c=e.div`
    background: ${n["bg-strong"]};
    border-radius: ${o.sm};
    display: flex;
    align-items: center;

    ${i=>"small"===i.$variant?a["body-md-regular"]:a["body-baseline-regular"]}
`,p=e.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${s["spacing-8"]};
    padding: ${i=>"small"===i.$variant?r`
                  ${s["spacing-8"]} ${s["spacing-16"]}
              `:r`10px ${s["spacing-8"]}`};
`,g=e(l)`
    flex: 1;
`,m=e(i)`
    color: ${n.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,d=e(t)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${s["spacing-8"]};
    margin-left: -${s["spacing-8"]};
    color: ${n.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;export{d as ClearButton,c as Container,p as SearchBox,m as SearchIcon,g as SearchInput};
//# sourceMappingURL=dropdown-search.styles.js.map
