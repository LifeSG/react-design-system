import{StarIcon as i}from"@lifesg/react-icons/star";import{StarFillIcon as t}from"@lifesg/react-icons/star-fill";import e,{css as o}from"styled-components";import{V3_Colour as r,V3_Spacing as n,V3_MediaQuery as s,V3_Radius as a,V3_Border as m}from"../v3_theme/index.js";e.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`;const c=o`
    width: 2.75rem;
    height: 2.75rem;
    color: ${r["icon-primary"]};
`,p=e(i)`
    ${c}
`,l=e(t)`
    ${c}
`,d=e.div`
    margin: 0 ${n["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    ${s.MaxWidth.md} {
        margin: 0 ${n["spacing-8"]};
    }
`,$=e.div`
    display: flex;
    justify-content: center;
    margin: ${n["spacing-8"]} ${n["spacing-16"]};
    border-radius: ${a.sm};
    outline: none;

    ${({$isFocused:i})=>i&&o`
            outline: ${m["width-020"]} ${m.solid}
                ${r["icon-primary"]};
            outline-offset: 2px;
        `}
`;export{$ as Container,d as Label,l as StarFilled,p as StarUnfilled};
//# sourceMappingURL=feedback-rating-stars-container.styles.js.map
