import e,{css as i}from"styled-components";import{Input as r}from"../input/input.js";import{ClickableIcon as o}from"../shared/clickable-icon/clickable-icon.js";import{Typography as t}from"../typography/index.js";import{V3_MediaQuery as n,V3_Radius as s,V3_Spacing as a,V3_Colour as d,V3_Border as l,V3_Font as c}from"../v3_theme/index.js";const g=e.nav`
    display: flex;
`,m=e.div`
    align-self: flex-start;

    display: flex;
    align-items: center;

    ${n.MaxWidth.lg} {
        align-self: center;
    }
`,p=e.div`
    display: inline-flex;
    align-items: center;
`,b=e(o)`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    border-radius: ${s.sm};
    height: 2.5rem;
    width: 2.5rem;
    padding: 0 ${a["spacing-8"]};

    color: ${d["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${d["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${d["bg-hover"]};
    }
`,$=e(o)`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    margin: ${a["spacing-4"]};
    border-radius: ${s.sm};
    height: 2.5rem;
    width: 2.5rem;
    padding: 0 ${a["spacing-8"]};

    color: ${d["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${d["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${d["bg-hover"]};
    }
`,h=e.button`
    outline: none;
    margin: ${a["spacing-4"]};
    box-shadow: none;
    border: ${l["width-010"]} ${l.solid}
        ${e=>i`
                ${e.$selected?d["bg-primary"]:d.border}
            `};
    border-radius: ${s.sm};
    min-width: 2.5rem;
    height: 2.5rem;
    padding: 0 ${a["spacing-8"]};

    background: ${e=>e.$selected?d["bg-primary"]:d.bg};
    cursor: pointer;

    ${c["body-baseline-regular"]};
    text-align: center;
    color: ${e=>e.$selected?d["text-inverse"]:d.text};

    ${e=>e.$selected?i`
                  font-weight: ${c.Spec["weight-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${d["bg-selected-strongest-hover"]};
                      background: ${d["bg-selected-strongest-hover"]};
                      color: ${d["text-inverse"]};
                  }
              `:i`
                  &:hover,
                  &:focus-visible {
                      border-color: ${d["bg-hover"]};
                      background: ${d["bg-hover"]};
                      color: ${d["text-hover"]};
                      font-weight: ${c.Spec["weight-semibold"]};
                  }
              `}
`,u=e.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${a["spacing-4"]};
    border-radius: ${s.sm};
    width: 2.5rem;
    height: 2.5rem;

    cursor: pointer;
`,v=e.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${a["spacing-4"]};

    color: ${d.text};
`,f=e(t.BodyBL)`
    white-space: nowrap;
`,y=e(t.BodyBL)`
    margin: 0 ${a["spacing-16"]};
    white-space: nowrap;
`,x=e(r)`
    width: 3.5rem;
    height: 2.5rem;
    ${c["body-baseline-regular"]};

    input {
        padding: 0 ${a["spacing-8"]};
        text-align: center;
    }
`,w=e.div`
    position: absolute;
    top: -${a["spacing-8"]};
    transform: translateY(-100%);

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: ${s.sm};
    width: max-content;
    padding: ${a["spacing-4"]} ${a["spacing-12"]};

    background-color: ${d["bg-hover"]};

    ${c["body-xs-regular"]}
    color: ${d["text-hover"]};
`,j=e.div`
    margin-left: ${a["spacing-4"]};
    width: 10rem;
`;export{b as EllipsisButton,u as EllipsisContainer,w as Hover,j as InputSelectWrapper,x as InputView,f as Label,y as LabelDivider,$ as NavigationButton,h as PageItem,m as PaginationList,p as PaginationMenu,v as PaginationMobileInput,g as PaginationWrapper};
//# sourceMappingURL=pagination.styles.js.map
