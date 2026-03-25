import{ExclamationCircleFillIcon as i}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as r}from"@lifesg/react-icons/square";import{SquareFillIcon as e}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as t}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as o}from"@lifesg/react-icons/tick";import a,{css as n}from"styled-components";import{V3_Border as l,V3_Colour as s,V3_Radius as d,V3_MediaQuery as c,V3_Breakpoint as h,V3_Font as p,V3_Spacing as g}from"../../v3_theme/index.js";import{ComponentLoadingSpinner as m}from"../component-loading-spinner/component-loading-spinner.js";import{applyHtmlContentStyle as $}from"../html-content/html-content.js";import{BasicButton as b}from"../input-wrapper/input-wrapper.js";const x=a.div`
    border: ${l["width-010"]} ${l.solid}
        ${s.border};
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
`,f=a.div`
    background: transparent;
    padding: ${g["spacing-8"]};
`,u=a.ul`
    list-style-type: none;
`,w=a.li`
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
`,v=a(o)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${s["icon-selected"]};
`,k=a.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,y=a(t)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${s["icon-selected"]};
`,j=a(r)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${s["icon-primary-subtlest"]};
`,W=a(e)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${s["icon-disabled-subtle"]};
`,q=a.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,M=a(b)`
    cursor: pointer;
    overflow: hidden;
    color: ${s["text-primary"]};
    font-size: inherit;
`,z=a(M)`
    ${p["body-baseline-semibold"]}
`,_=a(M)`
    ${p["body-md-semibold"]}
    padding: ${g["spacing-8"]} ${g["spacing-8"]};
`,A=a.div`
    width: 100%;
    display: flex;
    padding: ${g["spacing-12"]} ${g["spacing-16"]};
    align-items: center;
`,B=a(i)`
    margin-right: ${g["spacing-4"]};
    color: ${s["icon-error"]};
    height: 1em;
    width: 1em;
`,C=a(m)`
    margin-right: ${g["spacing-8"]};
    color: ${s.icon};
`,D=a.div`
    ${$()}
    color: ${s["text-subtle"]};
    padding: 0 ${g["spacing-16"]} ${g["spacing-12"]}
        ${g["spacing-16"]};
`;export{W as CheckboxDisabledIndicator,y as CheckboxSelectedIndicator,j as CheckboxUnselectedIndicator,x as Container,M as DropdownCommonButton,B as LabelIcon,f as List,w as ListItem,u as Listbox,D as NoResultDescContainer,A as ResultStateContainer,_ as SelectAllButton,q as SelectAllContainer,v as SelectedIndicator,C as Spinner,z as TryAgainButton,k as UnselectedIndicator};
//# sourceMappingURL=dropdown-list.styles.js.map
