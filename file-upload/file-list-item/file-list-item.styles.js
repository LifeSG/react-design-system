import{DragHandleIcon as i}from"@lifesg/react-icons/drag-handle";import{ExclamationCircleFillIcon as o}from"@lifesg/react-icons/exclamation-circle-fill";import e,{css as t}from"styled-components";import{Button as r}from"../../button/button.js";import{Typography as n}from"../../typography/index.js";import{V3_Spacing as d,V3_Colour as a,V3_Border as l,V3_Radius as s,V3_MediaQuery as c,V3_Shadow as m}from"../../v3_theme/index.js";const $=e.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${d["spacing-16"]};
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
`,g=e(i)`
    margin-right: ${d["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${a.icon};

    ${i=>i.$active?t`
                color: ${a["icon-primary"]};
            `:i.$disabled?t`
                color: ${a["icon-disabled"]};
            `:void 0};
`,p=e.div`
    background: ${a["bg-primary-subtlest"]};
    border: ${l["width-010"]} ${l.solid}
        ${a.border};
    border-radius: ${s.sm};
    padding: ${d["spacing-16"]} ${d["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${c.MaxWidth.md} {
        padding: ${d["spacing-16"]};
    }

    ${i=>i.$focused?t`
                border-color: ${a["border-focus"]};
                box-shadow: ${m["xs-focus-strong"]};
            `:i.$disabled?t`
                border-color: ${a["border-disabled"]};
            `:i.$error?t`
                background: ${a["bg-error"]};
                border-color: ${a["border-error"]};
            `:void 0}

    ${i=>{if(!i.$error&&(i.$loading||i.$editable))return t`
                ${c.MaxWidth.md} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,f=e.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${c.MaxWidth.md} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${i=>{if(i.$hasThumbnail)return t`
                ${c.MaxWidth.md} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,h=e.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,x=e.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${c.MaxWidth.md} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,b=e.div`
    display: flex;
    width: 5rem;
    margin-left: ${d["spacing-8"]};
    justify-content: flex-end;

    ${c.MaxWidth.md} {
        ${i=>i.$hideInMobile?t`
                    display: none;
                    visibility: hidden;
                `:t`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${d["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,u=e(n.BodyMD)`
    color: ${a["text-subtler"]};
`,y=e(n.BodyMD)``,v=e(n.BodyMD)`
    margin-top: ${d["spacing-4"]};
`,w=e(o)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${a["icon-error-strong"]};
`;e(n.BodySM)`
    color: ${a["text-error"]};
`;const M=e(n.BodySM)`
    color: ${a["text-error"]};
    margin-top: ${d["spacing-4"]};
    display: flex;
    gap: ${d["spacing-4"]};

    ${c.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,W=e(n.BodySM)`
    color: ${a["text-error"]};
    display: none;
    visibility: hidden;

    ${c.MaxWidth.md} {
        display: flex;
        gap: ${d["spacing-4"]};
        visibility: visible;
        margin-top: ${d["spacing-8"]};
    }
`,j=e.div`
    width: 6rem;
    margin-left: ${d["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${c.MaxWidth.md} {
        width: fit-content;

        ${i=>i.$loading&&!i.$error?t`
                    margin-left: 0;
                    margin-top: ${d["spacing-16"]};
                    width: 100%;
                `:i.$editable&&!i.$error?t`
                    margin-left: 0;
                    margin-top: ${d["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,B=e(r)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${d["spacing-16"]};
    }
`;export{j as ActionContainer,p as Box,f as ContentSection,M as DesktopErrorMessage,g as DragHandleIcon,w as ErrorIcon,x as ExtendedNameSection,b as FileSizeSection,u as FileSizeText,B as IconButton,$ as Item,v as ItemDescriptionText,y as ItemText,W as MobileErrorMessage,h as NameSection};
//# sourceMappingURL=file-list-item.styles.js.map
