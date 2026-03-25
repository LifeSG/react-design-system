import{ChevronDownIcon as i}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as t}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as e}from"@lifesg/react-icons/chevron-right";import o,{css as r}from"styled-components";import{Button as n}from"../../button/button.js";import{V3_Colour as a,V3_Font as d}from"../../v3_theme/index.js";import{ClickableIcon as l}from"../clickable-icon/clickable-icon.js";const s=r`
    color: ${a.icon};
    height: 1rem;
    width: 1rem;
`,p=o(t)`
    ${s}
`,m=o(e)`
    ${s}
`,g=o(i)`
    ${s}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,c=o.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,v=o.div`
    display: flex;
    flex: 1;
    position: relative;
`,f=o.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,h=o.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${a.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${i=>{if(!i.$visible)return r`
                display: none;
            `}}
`,b=o.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,u=o.div`
    display: flex;
`,x=o.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${i=>!1===i.$visible?r`
                display: none;
            `:i.$expanded?r`
                ${g} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,$=o.span`
    ${d["body-md-regular"]}
    color: ${a.text};
`,y=o.div`
    display: flex;
`,z=o(l)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,w=o.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,j=o(n.Small)`
    flex: 1;
`;export{j as ActionButton,w as ActionButtonSection,p as ArrowLeft,m as ArrowRight,c as Container,f as DefaultView,x as DropdownButton,$ as DropdownText,b as Header,z as HeaderArrowButton,y as HeaderArrows,u as HeaderInputDropdown,g as IconChevronDown,h as OptionsOverlay,v as ToggleZone};
//# sourceMappingURL=calendar-manager.style.js.map
