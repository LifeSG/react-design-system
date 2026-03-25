import{DragHandleIcon as i}from"@lifesg/react-icons/drag-handle";import{ExclamationCircleFillIcon as e}from"@lifesg/react-icons/exclamation-circle-fill";import o,{css as t}from"styled-components";import{IconButton as r}from"../../icon-button/icon-button.js";import{ClickableIcon as n}from"../../shared/clickable-icon/clickable-icon.js";import{Typography as d}from"../../typography/index.js";import{V3_Spacing as a,V3_Colour as l,V3_Border as s,V3_Radius as c,V3_MediaQuery as m,V3_Shadow as g}from"../../v3_theme/index.js";const $=o.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${a["spacing-16"]};
    }

    ${i=>i.$disabled&&"none"===i.$focusType?t`
                cursor: not-allowed;
            `:i.$sortable&&"self"===i.$focusType?t`
                cursor: grabbing;
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:i.$sortable?t`
                &:hover {
                    cursor: grab;
                }
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:void 0}
`,h=o(i)`
    margin-right: ${a["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${l.icon};

    ${i=>i.$active?t`
                color: ${l["icon-primary"]};
            `:i.$disabled?t`
                color: ${l["icon-disabled"]};
            `:void 0};
`,p=o.div`
    background: ${l["bg-primary-subtlest"]};
    border: ${s["width-010"]} ${s.solid}
        ${l.border};
    border-radius: ${c.sm};
    padding: ${a["spacing-16"]} ${a["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${m.MaxWidth.md} {
        padding: ${a["spacing-16"]};
    }

    ${i=>i.$focused?t`
                border-color: ${l["border-focus"]};
                box-shadow: ${g["xs-focus-strong"]};
            `:i.$disabled?t`
                border-color: ${l["border-disabled"]};
            `:i.$error?t`
                background: ${l["bg-error"]};
                border-color: ${l["border-error"]};
            `:void 0}

    ${i=>{if(!i.$error&&(i.$loading||i.$editable))return t`
                ${m.MaxWidth.md} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,f=o.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${m.MaxWidth.md} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${i=>{if(i.$hasThumbnail)return t`
                ${m.MaxWidth.md} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,b=o.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,x=o.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${m.MaxWidth.md} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,u=o.div`
    display: flex;
    width: 5rem;
    margin-left: ${a["spacing-8"]};
    justify-content: flex-end;

    ${m.MaxWidth.md} {
        ${i=>i.$hideInMobile?t`
                    display: none;
                    visibility: hidden;
                `:t`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${a["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,y=o(d.BodyMD)``,v=o(y)`
    margin-top: ${a["spacing-4"]};
`,w=o(e)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${l["icon-error-strong"]};
`,M=o(d.BodySM)`
    color: ${l["text-error"]};
`,W=o(M)`
    margin-top: ${a["spacing-4"]};
    display: flex;
    gap: ${a["spacing-4"]};

    ${m.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,j=o(M)`
    display: none;
    visibility: hidden;

    ${m.MaxWidth.md} {
        display: flex;
        gap: ${a["spacing-4"]};
        visibility: visible;
        margin-top: ${a["spacing-8"]};
    }
`,k=o.div`
    width: 6rem;
    margin-left: ${a["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${m.MaxWidth.md} {
        width: fit-content;

        ${i=>i.$loading&&!i.$error?t`
                    margin-left: 0;
                    margin-top: ${a["spacing-16"]};
                    width: 100%;
                `:i.$editable&&!i.$error?t`
                    margin-left: 0;
                    margin-top: ${a["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,B=o(r)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${a["spacing-16"]};
    }
`,I=o(n)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${l.icon};
    }
`;export{k as ActionContainer,M as BaseErrorMessage,p as Box,f as ContentSection,W as DesktopErrorMessage,h as DragHandleIcon,w as ErrorIcon,I as ErrorIconButton,x as ExtendedNameSection,u as FileSizeSection,B as IconButton,$ as Item,v as ItemDescriptionText,y as ItemText,j as MobileErrorMessage,b as NameSection};
//# sourceMappingURL=file-list-item.styles.js.map
