import e,{css as r}from"styled-components";import{Spacing as t,Radius as i,Border as o,Colour as n,Font as d,Motion as l}from"../theme/index.js";const s=e.div`
    display: inline-flex;
    padding: ${t["spacing-8"]} ${t["spacing-16"]};
    align-items: center;
    border-radius: ${i.sm};
    border: ${o["width-010"]} ${o.solid} ${n.border};
    background: ${n.bg};
`,a=e.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    gap: 0 ${t["spacing-8"]};
    flex-wrap: wrap;
`,c=e.li`
    display: flex;
    align-items: center;
`,p=e.button`
    display: flex;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border: none;
    border-radius: ${i.md};
    ${d["body-md-semibold"]}
    color: ${n["text-subtler"]};
    text-align: center;
    transition: color ${l["duration-150"]} ${l["ease-default"]};

    ${({$active:e})=>e?r`
                  background: ${n["bg-primary-subtler"]};
                  color: ${n["text-selected"]};
                  cursor: default;
              `:r`
                  background: none;
                  cursor: pointer;

                  &:hover {
                      color: ${n["text-hover"]};
                      text-decoration: underline;
                  }
              `}

    &:focus-visible {
        outline: 2px solid ${n["focus-ring"]};
        outline-offset: -2px;
    }
`;export{s as LinkContainerWrapper,p as LinkItem,a as LinkList,c as LinkListItem};
//# sourceMappingURL=link-container-variant.style.js.map
