import{ExclamationCircleFillIcon as i}from"@lifesg/react-icons/exclamation-circle-fill";import r,{css as e}from"styled-components";import{Button as t}from"../../button/button.js";import{ComponentLoadingSpinner as n}from"../../shared/component-loading-spinner/component-loading-spinner.js";import{ImageWithFallback as o}from"../../shared/image-with-fallback/image-with-fallback.js";import{lineClampCss as a}from"../../shared/styles/index.js";import{V3_Spacing as l,V3_Colour as d,V3_Border as s,V3_Radius as g,V3_MediaQuery as c,V3_Font as m}from"../../v3_theme/index.js";const p=r.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${l["spacing-16"]};
    }
`,$=r.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${l["spacing-16"]} ${l["spacing-32"]};
    cursor: pointer;

    background: ${d["bg-primary-subtlest"]};
    border: ${s["width-010"]} ${s.solid}
        ${d.border};
    border-radius: ${g.sm};

    ${c.MaxWidth.lg} {
        padding: ${l["spacing-16"]};
    }

    &:hover {
        background: ${d["bg-hover"]};
    }

    ${i=>{if(i.$error)return e`
                background: ${d["bg-error"]};
                border-color: ${d["border-error"]};

                &:hover {
                    background: ${d["bg-error"]};
                }
            `}}
`,h=r.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${c.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${i=>{if(i.$hasThumbnail)return e`
                ${c.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,f=r.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,x=r.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${c.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,b=r.div`
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
`,y=r.div`
    ${m["body-md-regular"]}
    color: ${d.text};

    ${c.MaxWidth.lg} {
        ${a(2)}
    }
`;r(y)`
    ${m["body-md-regular"]}
    margin-top: ${l["spacing-4"]};
`;const u=r(i)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${d["icon-error-strong"]};
`,w=r.div`
    ${m["body-sm-semibold"]}
    color: ${d["text-error"]};
`,v=r(w)`
    margin-top: ${l["spacing-4"]};
    display: flex;
    gap: ${l["spacing-4"]};

    ${c.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,k=r(w)`
    display: none;
    visibility: hidden;

    ${c.MaxWidth.lg} {
        display: flex;
        gap: ${l["spacing-4"]};
        visibility: visible;
        margin-top: ${l["spacing-8"]};
    }
`;r(n)`
    color: ${d["icon-primary"]};
`;const M=r.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${l["spacing-32"]};

    ${c.MaxWidth.lg} {
        margin-left: ${l["spacing-16"]};
    }
`,W=r(t)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${l["spacing-16"]};
    }
`,j=r.div`
    width: auto;
    margin-right: ${l["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${c.MaxWidth.lg} {
        margin-right: ${l["spacing-16"]};
    }
`,T=r(o)`
    border-radius: ${g.sm};
    border: ${s["width-010"]} ${s.solid}
        ${d.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${c.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`;export{M as ActionContainer,$ as Box,h as ContentSection,v as DesktopErrorMessage,u as ErrorIcon,x as ExtendedNameSection,b as FileSizeSection,W as IconButton,p as Item,y as ItemNameText,k as MobileErrorMessage,f as NameSection,T as Thumbnail,j as ThumbnailContainer};
//# sourceMappingURL=file-list-card.styles.js.map
