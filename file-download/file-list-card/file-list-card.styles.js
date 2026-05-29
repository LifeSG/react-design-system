import i,{css as r}from"styled-components";import{ExclamationCircleFillIcon as e}from"@lifesg/react-icons/exclamation-circle-fill";import{IconButton as t}from"../../icon-button/icon-button.js";import{ComponentLoadingSpinner as n}from"../../shared/component-loading-spinner/component-loading-spinner.js";import{ImageWithFallback as o}from"../../shared/image-with-fallback/image-with-fallback.js";import{lineClampCss as a}from"../../shared/styles/index.js";import{Spacing as l,Colour as d,Border as s,Radius as g,MediaQuery as c,Font as m}from"../../theme/index.js";const p=i.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${l["spacing-16"]};
    }
`,$=i.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${l["spacing-16"]} ${l["spacing-32"]};
    cursor: pointer;

    background: ${d["bg-primary-subtlest"]};
    border: ${s["width-010"]} ${s.solid} ${d.border};
    border-radius: ${g.sm};

    ${c.MaxWidth.lg} {
        padding: ${l["spacing-16"]};
    }

    &:hover {
        background: ${d["bg-hover"]};
    }

    ${i=>{if(i.$error)return r`
                background: ${d["bg-error"]};
                border-color: ${d["border-error"]};

                &:hover {
                    background: ${d["bg-error"]};
                }
            `}}
`,h=i.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${c.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${i=>{if(i.$hasThumbnail)return r`
                ${c.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,f=i.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,x=i.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${c.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,b=i.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${l["spacing-8"]};

    ${m["body-md-regular"]}
    color: ${d.text};

    ${c.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${l["spacing-8"]};

        ${a(2)}
    }
`,u=i.div`
    ${m["body-md-regular"]}
    color: ${d.text};

    ${c.MaxWidth.lg} {
        ${a(2)}
    }
`;i(u)`
    ${m["body-md-regular"]}
    margin-top: ${l["spacing-4"]};
`;const y=i(e)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${d["icon-error-strong"]};
`,w=i.div`
    ${m["body-sm-semibold"]}
    color: ${d["text-error"]};
`,v=i(w)`
    margin-top: ${l["spacing-4"]};
    display: flex;
    gap: ${l["spacing-4"]};

    ${c.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,k=i(w)`
    display: none;
    visibility: hidden;

    ${c.MaxWidth.lg} {
        display: flex;
        gap: ${l["spacing-4"]};
        visibility: visible;
        margin-top: ${l["spacing-8"]};
    }
`,M=i(n)`
    color: ${d["icon-primary"]};
`,W=i.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${l["spacing-32"]};

    ${c.MaxWidth.lg} {
        margin-left: ${l["spacing-16"]};
    }
`,j=i(t)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${l["spacing-16"]};
    }
`,B=i.div`
    width: auto;
    margin-right: ${l["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${c.MaxWidth.lg} {
        margin-right: ${l["spacing-16"]};
    }
`,I=i(o)`
    border-radius: ${g.sm};
    border: ${s["width-010"]} ${s.solid} ${d.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${c.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`;export{W as ActionContainer,$ as Box,h as ContentSection,v as DesktopErrorMessage,y as ErrorIcon,x as ExtendedNameSection,b as FileSizeSection,j as IconButton,p as Item,u as ItemNameText,k as MobileErrorMessage,f as NameSection,M as Spinner,I as Thumbnail,B as ThumbnailContainer};
//# sourceMappingURL=file-list-card.styles.js.map
