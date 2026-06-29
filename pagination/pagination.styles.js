import e,{css as i}from"styled-components";import{Input as r}from"../input/input.js";import{ClickableIcon as o}from"../shared/clickable-icon/clickable-icon.js";import{MediaQuery as t,Radius as n,Spacing as s,Colour as a,Border as d,Font as l}from"../theme/index.js";import{Typography as c}from"../typography/typography.js";const g=e.nav`
    display: flex;
`,p=e.div`
    align-self: flex-start;

    display: flex;
    align-items: center;

    ${t.MaxWidth.lg} {
        align-self: center;
    }
`,m=e.div`
    display: inline-flex;
    align-items: center;
`,b=e(o)`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    border-radius: ${n.sm};
    height: 2.5rem;
    width: 2.5rem;
    padding: 0 ${s["spacing-8"]};

    color: ${a["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${a["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${a["bg-hover"]};
    }
`,$=e(o)`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    margin: ${s["spacing-4"]};
    border-radius: ${n.sm};
    height: 2.5rem;
    width: 2.5rem;
    padding: 0 ${s["spacing-8"]};

    color: ${a["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${a["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${a["bg-hover"]};
    }
`,h=e.button`
    outline: none;
    margin: ${s["spacing-4"]};
    box-shadow: none;
    border: ${d["width-010"]} ${d.solid}
        ${e=>i`
                ${e.$selected?a["bg-primary"]:a.border}
            `};
    border-radius: ${n.sm};
    min-width: 2.5rem;
    height: 2.5rem;
    padding: 0 ${s["spacing-8"]};

    background: ${e=>e.$selected?a["bg-primary"]:a.bg};
    cursor: pointer;

    ${l["body-baseline-regular"]};
    text-align: center;
    color: ${e=>e.$selected?a["text-inverse"]:a.text};

    ${e=>e.$selected?i`
                  font-weight: ${l.Spec["weight-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${a["bg-selected-strongest-hover"]};
                      background: ${a["bg-selected-strongest-hover"]};
                      color: ${a["text-inverse"]};
                  }
              `:i`
                  &:hover,
                  &:focus-visible {
                      border-color: ${a["bg-hover"]};
                      background: ${a["bg-hover"]};
                      color: ${a["text-hover"]};
                      font-weight: ${l.Spec["weight-semibold"]};
                  }
              `}
`,u=e.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${s["spacing-4"]};
    border-radius: ${n.sm};
    width: 2.5rem;
    height: 2.5rem;

    cursor: pointer;
`,f=e.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${s["spacing-4"]};

    color: ${a.text};
`,v=e(c.BodyBL)`
    white-space: nowrap;
`,y=e(c.BodyBL)`
    margin: 0 ${s["spacing-16"]};
    white-space: nowrap;
`,x=e(r)`
    width: 3.5rem;
    height: 2.5rem;
    ${l["body-baseline-regular"]};

    input {
        padding: 0 ${s["spacing-8"]};
        text-align: center;
    }
`,w=e.div`
    position: absolute;
    top: -${s["spacing-8"]};
    transform: translateY(-100%);

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: ${n.sm};
    width: max-content;
    padding: ${s["spacing-4"]} ${s["spacing-12"]};

    background-color: ${a["bg-hover"]};

    ${l["body-xs-regular"]}
    color: ${a["text-hover"]};
`,j=e.div`
    margin-left: ${s["spacing-4"]};
    width: 10rem;
`;export{b as EllipsisButton,u as EllipsisContainer,w as Hover,j as InputSelectWrapper,x as InputView,v as Label,y as LabelDivider,$ as NavigationButton,h as PageItem,p as PaginationList,m as PaginationMenu,f as PaginationMobileInput,g as PaginationWrapper};
//# sourceMappingURL=pagination.styles.js.map
