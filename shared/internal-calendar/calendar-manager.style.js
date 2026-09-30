import{ChevronDownIcon as i}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as t}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as o}from"@lifesg/react-icons/chevron-right";import e,{css as r}from"styled-components";import{Button as n}from"../../button/button.js";import{Colour as a,Font as d}from"../../theme/index.js";import{ClickableIcon as l}from"../clickable-icon/clickable-icon.js";const s=r`
    color: ${a.icon};
    height: 1rem;
    width: 1rem;
`,p=e(t)`
    ${s}
`,m=e(o)`
    ${s}
`,g=e(i)`
    ${s}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,c=e.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,f=e.div`
    display: flex;
    flex: 1;
    position: relative;
    overflow-y: scroll;
`,v=e.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,h=e.div`
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
`,b=e.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,u=e.div`
    display: flex;
`,x=e.button`
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
`,y=e.span`
    ${d["body-md-regular"]}
    color: ${a.text};
`,$=e.div`
    display: flex;
`,z=e(l)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,w=e.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,j=e(n.Small)`
    flex: 1;
`;export{j as ActionButton,w as ActionButtonSection,p as ArrowLeft,m as ArrowRight,c as Container,v as DefaultView,x as DropdownButton,y as DropdownText,b as Header,z as HeaderArrowButton,$ as HeaderArrows,u as HeaderInputDropdown,g as IconChevronDown,h as OptionsOverlay,f as ToggleZone};
//# sourceMappingURL=calendar-manager.style.js.map
