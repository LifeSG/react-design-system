import{ExclamationCircleFillIcon as i}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as r}from"@lifesg/react-icons/square";import{SquareFillIcon as e}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as t}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as a}from"@lifesg/react-icons/tick";import o,{css as n}from"styled-components";import{Border as l,Colour as s,Radius as d,MediaQuery as c,Breakpoint as h,Font as p,Spacing as g}from"../../theme/index.js";import{ComponentLoadingSpinner as m}from"../component-loading-spinner/component-loading-spinner.js";import{applyHtmlContentStyle as $}from"../html-content/html-content.js";import{BasicButton as b}from"../input-wrapper/input-wrapper.js";const x=o.div`
    border: ${l["width-010"]} ${l.solid} ${s.border};
    border-radius: ${d.sm};
    background: ${s.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${c.MaxWidth.sm} {
        --x-spacing: ${h["sm-margin"]}px;
        max-height: 15rem;
    }

    ${c.MaxWidth.xs} {
        --x-spacing: ${h["xs-margin"]}px;
    }

    ${c.MaxWidth.xxs} {
        --x-spacing: ${h["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${i=>i.$customWidth?`width: ${i.$customWidth};`:i.$width?`width: ${i.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${i=>"small"===i.$variant?p["body-md-regular"]:p["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${s["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${d.full};
        background-clip: padding-box;
    }
`,f=o.div`
    background: transparent;
    padding: ${g["spacing-8"]};
`,u=o.li`
    display: flex;
    align-items: flex-start;
    gap: ${g["spacing-8"]};
    padding: ${g["spacing-12"]} ${g["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${d.none};
    outline: none;

    ${i=>i.$disabled?n`
                cursor: not-allowed;
            `:i.$active&&i.$selected?n`
                background: ${s["bg-hover"]};
            `:i.$active?n`
                background: ${s["bg-hover-subtle"]};
            `:void 0}
`,w=o(a)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${s["icon-selected"]};
`,v=o.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,k=o(t)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${s["icon-selected"]};
`,y=o(r)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${s["icon-primary-subtlest"]};
`,j=o(e)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${s["icon-disabled-subtle"]};
`,W=o.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,q=o(b)`
    cursor: pointer;
    overflow: hidden;
    color: ${s["text-primary"]};
    font-size: inherit;
`,M=o(q)`
    ${p["body-baseline-semibold"]}
`,z=o(q)`
    ${p["body-md-semibold"]}
    padding: ${g["spacing-8"]} ${g["spacing-8"]};
`,A=o.div`
    width: 100%;
    display: flex;
    padding: ${g["spacing-12"]} ${g["spacing-16"]};
    align-items: center;
`,B=o(i)`
    margin-right: ${g["spacing-4"]};
    color: ${s["icon-error"]};
    height: 1em;
    width: 1em;
`,C=o(m)`
    margin-right: ${g["spacing-8"]};
    color: ${s.icon};
`,D=o.div`
    ${$()}
    color: ${s["text-subtle"]};
    padding: 0 ${g["spacing-16"]} ${g["spacing-12"]}
        ${g["spacing-16"]};
`;export{j as CheckboxDisabledIndicator,k as CheckboxSelectedIndicator,y as CheckboxUnselectedIndicator,x as Container,q as DropdownCommonButton,B as LabelIcon,f as List,u as ListItem,D as NoResultDescContainer,A as ResultStateContainer,z as SelectAllButton,W as SelectAllContainer,w as SelectedIndicator,C as Spinner,M as TryAgainButton,v as UnselectedIndicator};
//# sourceMappingURL=dropdown-list.styles.js.map
