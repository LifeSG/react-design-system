import i,{css as o}from"styled-components";import{DragHandleIcon as e}from"@lifesg/react-icons/drag-handle";import{ExclamationCircleFillIcon as t}from"@lifesg/react-icons/exclamation-circle-fill";import{IconButton as r}from"../../icon-button/icon-button.js";import{Spacing as n,Colour as d,Border as a,Radius as l,MediaQuery as s,Shadow as c}from"../../theme/index.js";import{Typography as m}from"../../typography/typography.js";const g=i.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${n["spacing-16"]};
    }

    ${i=>i.$disabled&&"none"===i.$focusType?o`
                cursor: not-allowed;
            `:i.$sortable&&"self"===i.$focusType?o`
                cursor: grabbing;
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:i.$sortable?o`
                &:hover {
                    cursor: grab;
                }
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:void 0}
`,$=i(e)`
    margin-right: ${n["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${d.icon};

    ${i=>i.$active?o`
                color: ${d["icon-primary"]};
            `:i.$disabled?o`
                color: ${d["icon-disabled"]};
            `:void 0};
`,p=i.div`
    background: ${d["bg-primary-subtlest"]};
    border: ${a["width-010"]} ${a.solid} ${d.border};
    border-radius: ${l.sm};
    padding: ${n["spacing-16"]} ${n["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${s.MaxWidth.md} {
        padding: ${n["spacing-16"]};
    }

    ${i=>i.$focused?o`
                border-color: ${d["border-focus"]};
                box-shadow: ${c["xs-focus-strong"]};
            `:i.$disabled?o`
                border-color: ${d["border-disabled"]};
            `:i.$error?o`
                background: ${d["bg-error"]};
                border-color: ${d["border-error"]};
            `:void 0}

    ${i=>{if(!i.$error&&(i.$loading||i.$editable))return o`
                ${s.MaxWidth.md} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,h=i.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${s.MaxWidth.md} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${i=>{if(i.$hasThumbnail)return o`
                ${s.MaxWidth.md} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,f=i.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,b=i.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${s.MaxWidth.md} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,x=i.div`
    display: flex;
    width: 5rem;
    margin-left: ${n["spacing-8"]};
    justify-content: flex-end;

    ${s.MaxWidth.md} {
        ${i=>i.$hideInMobile?o`
                    display: none;
                    visibility: hidden;
                `:o`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${n["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,u=i(m.BodyMD)`
    color: ${d["text-subtler"]};
`,y=i(m.BodyMD)``,v=i(y)`
    margin-top: ${n["spacing-4"]};
`,w=i(t)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${d["icon-error-strong"]};
`,M=i(m.BodySM)`
    color: ${d["text-error"]};
`,W=i(M)`
    margin-top: ${n["spacing-4"]};
    display: flex;
    gap: ${n["spacing-4"]};

    ${s.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,j=i(M)`
    display: none;
    visibility: hidden;

    ${s.MaxWidth.md} {
        display: flex;
        gap: ${n["spacing-4"]};
        visibility: visible;
        margin-top: ${n["spacing-8"]};
    }
`,k=i.div`
    width: 6rem;
    margin-left: ${n["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${s.MaxWidth.md} {
        width: fit-content;

        ${i=>i.$loading&&!i.$error?o`
                    margin-left: 0;
                    margin-top: ${n["spacing-16"]};
                    width: 100%;
                `:i.$editable&&!i.$error?o`
                    margin-left: 0;
                    margin-top: ${n["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,B=i(r)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${n["spacing-16"]};
    }
`;export{k as ActionContainer,M as BaseErrorMessage,p as Box,h as ContentSection,W as DesktopErrorMessage,$ as DragHandleIcon,w as ErrorIcon,b as ExtendedNameSection,x as FileSizeSection,u as FileSizeText,B as IconButton,g as Item,v as ItemDescriptionText,y as ItemText,j as MobileErrorMessage,f as NameSection};
//# sourceMappingURL=file-list-item.styles.js.map
