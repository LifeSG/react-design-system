import i,{css as t}from"styled-components";import{DragHandleIcon as o}from"@lifesg/react-icons/drag-handle";import{ExclamationCircleFillIcon as e}from"@lifesg/react-icons/exclamation-circle-fill";import{IconButton as r}from"../../icon-button/icon-button.js";import{Spacing as n,Colour as a,Border as d,Radius as l,MediaQuery as s,Shadow as c,Font as m}from"../../theme/index.js";import{Typography as $}from"../../typography/typography.js";const g=i.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${n["spacing-16"]};
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
`,p=i(o)`
    margin-right: ${n["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${a.icon};

    ${i=>i.$active?t`
                color: ${a["icon-primary"]};
            `:i.$disabled?t`
                color: ${a["icon-disabled"]};
            `:void 0};
`,f=i.div`
    background: ${a["bg-primary-subtlest"]};
    border: ${d["width-010"]} ${d.solid} ${a.border};
    border-radius: ${l.sm};
    padding: ${n["spacing-16"]} ${n["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${s.MaxWidth.md} {
        padding: ${n["spacing-16"]};
    }

    ${i=>i.$focused?t`
                border-color: ${a["border-focus"]};
                box-shadow: ${c["xs-focus-strong"]};
            `:i.$disabled?t`
                border-color: ${a["border-disabled"]};
            `:i.$error?t`
                background: ${a["bg-error"]};
                border-color: ${a["border-error"]};
            `:void 0}

    ${i=>{if(!i.$error&&(i.$loading||i.$editable))return t`
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

    ${i=>{if(i.$hasThumbnail)return t`
                ${s.MaxWidth.md} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,b=i.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,x=i.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;

    ${s.MaxWidth.md} {
        width: 100%;
    }
`,u=i.div`
    display: flex;
    width: 5rem;
    margin-left: ${n["spacing-8"]};
    justify-content: flex-end;

    ${x} > & {
        width: auto;
        margin-left: 0;
        margin-top: ${n["spacing-16"]};
        justify-content: flex-start;
    }

    ${s.MaxWidth.md} {
        ${i=>i.$hideInMobile?t`
                    display: none;
                    visibility: hidden;
                `:t`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${n["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,y=i($.BodyMD)`
    color: ${a["text-subtler"]};
`,w=i($.BodyMD)`
    color: ${a["text-subtler"]};
    margin-top: ${n["spacing-16"]};
`,v=i($.BodyMD)``,M=i.span`
    ${m["form-label"]}
    font-weight: ${m.Spec["weight-semibold"]};
    color: ${a["text-subtle"]};
    display: block;
    margin-top: ${n["spacing-16"]};
`,W=i(v)`
    margin-top: ${n["spacing-4"]};
`,j=i(e)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${a["icon-error-strong"]};
`,k=i($.BodySM)`
    color: ${a["text-error"]};
`,B=i(k)`
    margin-top: ${n["spacing-4"]};
    display: flex;
    gap: ${n["spacing-4"]};

    ${s.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,D=i(k)`
    display: none;
    visibility: hidden;

    ${s.MaxWidth.md} {
        display: flex;
        gap: ${n["spacing-4"]};
        visibility: visible;
        margin-top: ${n["spacing-8"]};
    }
`,I=i.div`
    width: 6rem;
    margin-left: ${n["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${i=>{if(i.$hasDescription&&i.$editable&&!i.$error&&!i.$loading)return t`
                width: 100%;
                margin-left: 0;
                margin-top: ${n["spacing-16"]};
                justify-content: flex-end;
            `}}

    ${s.MaxWidth.md} {
        width: fit-content;

        ${i=>i.$loading&&!i.$error?t`
                    margin-left: 0;
                    margin-top: ${n["spacing-16"]};
                    width: 100%;
                `:i.$editable&&!i.$error?t`
                    margin-left: 0;
                    margin-top: ${n["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,T=i(r)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${n["spacing-8"]};
    }
`;export{I as ActionContainer,k as BaseErrorMessage,f as Box,h as ContentSection,w as DescriptionFileSizeText,B as DesktopErrorMessage,p as DragHandleIcon,j as ErrorIcon,x as ExtendedNameSection,u as FileSizeSection,y as FileSizeText,T as IconButton,g as Item,M as ItemDescriptionLabel,W as ItemDescriptionText,v as ItemText,D as MobileErrorMessage,b as NameSection};
//# sourceMappingURL=file-list-item.styles.js.map
