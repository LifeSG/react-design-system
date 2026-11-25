import{StarIcon as i}from"@lifesg/react-icons/star";import{StarFillIcon as e}from"@lifesg/react-icons/star-fill";import r,{css as o}from"styled-components";import{Colour as t,Spacing as n,MediaQuery as s,Radius as m,Border as a}from"../theme/index.js";const c=o`
    width: 2.75rem;
    height: 2.75rem;
    color: ${t["icon-primary"]};
`,l=r(i)`
    ${c}
`,p=r(e)`
    ${c}
`,d=r.div`
    margin: 0 ${n["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    ${s.MaxWidth.md} {
        margin: 0 ${n["spacing-8"]};
    }
`,$=r.div`
    display: flex;
    justify-content: center;
    margin: ${n["spacing-8"]} ${n["spacing-16"]};
    border-radius: ${m.sm};
    outline: none;

    ${({$isFocused:i})=>i&&o`
            outline: ${a["width-020"]} ${a.solid}
                ${t["icon-primary"]};
            outline-offset: 2px;
        `}
`;export{$ as Container,d as Label,p as StarFilled,l as StarUnfilled};
//# sourceMappingURL=feedback-rating-stars-container.styles.js.map
