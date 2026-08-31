import{MinusSquareFillIcon as i}from"@lifesg/react-icons/minus-square-fill";import e,{css as t}from"styled-components";import{Spacing as r,Radius as l,Colour as n,Motion as o}from"../../theme/index.js";const h=e.li`
    display: ${i=>i.$visible?"flex":"none"};
`,s=e.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${r["spacing-8"]};
    padding: ${r["spacing-12"]} ${r["spacing-8"]};
    cursor: ${i=>i.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${l.none};
    outline: none;

    ${i=>i.$active&&t`
            background: ${n["bg-hover"]};
        `}
`,a=e.div`
    height: 1px;
    width: calc((1lh + ${r["spacing-8"]}) * ${i=>i.$level});
`,d=e.div`
    width: 1lh;
    height: 1lh;
    color: ${n["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${o["duration-350"]}
            ${o["ease-standard"]};

        ${i=>{if(i.$expanded)return t`
                    transform: rotate(90deg);
                `}}
    }
`,g=e.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${r["spacing-8"]};
`,c=e.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${i=>i.$hasNestedSiblings?"1lh":r["spacing-16"]};

    display: flex;
    justify-content: center;
`,p=e(i)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${n["icon-selected"]};
`;export{p as CheckboxMixedIndicator,d as ExpandButton,a as Indent,s as ListItem,h as ListItemContainer,c as SelectionIndicator,g as UnexpandableIndicator};
//# sourceMappingURL=nested-dropdown-list.styles.js.map
