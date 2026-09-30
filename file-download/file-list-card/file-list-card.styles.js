import i,{css as e}from"styled-components";import{ExclamationCircleFillIcon as r}from"@lifesg/react-icons/exclamation-circle-fill";import{IconButton as t}from"../../icon-button/icon-button.js";import{ComponentLoadingSpinner as o}from"../../shared/component-loading-spinner/component-loading-spinner.js";import{ImageWithFallback as n}from"../../shared/image-with-fallback/image-with-fallback.js";import{lineClampCss as a}from"../../shared/styles/index.js";import{Spacing as l,Colour as d,Border as s,Radius as c,MediaQuery as g,Font as p}from"../../theme/index.js";const m=i.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${l["spacing-16"]};
    }
`,$=i.button`
    appearance: none;
    padding: 0;
    background: none;
    border: none;
`,h=i.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${l["spacing-16"]} ${l["spacing-32"]};
    cursor: pointer;

    background: ${d["bg-primary-subtlest"]};
    border: ${s["width-010"]} ${s.solid} ${d.border};
    border-radius: ${c.sm};

    ${g.MaxWidth.lg} {
        padding: ${l["spacing-16"]};
    }

    &:hover {
        background: ${d["bg-hover"]};
    }

    &:has(${$}:focus-visible) {
        outline: 2px solid ${d["focus-ring"]};
        outline-offset: -2px;
    }

    ${i=>{if(i.$error)return e`
                background: ${d["bg-error"]};
                border-color: ${d["border-error"]};

                &:hover {
                    background: ${d["bg-error"]};
                }

                &:has(${$}:focus-visible) {
                    outline-color: ${d["border-error-focus"]};
                }
            `}}
`,f=i.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${g.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${i=>{if(i.$hasThumbnail)return e`
                ${g.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,x=i.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,b=i.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${g.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,u=i.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${l["spacing-8"]};

    ${p["body-md-regular"]}
    color: ${d.text};

    ${g.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${l["spacing-8"]};

        ${a(2)}
    }
`,y=i.div`
    ${p["body-md-regular"]}
    color: ${d.text};

    ${g.MaxWidth.lg} {
        ${a(2)}
    }
`;i(y)`
    ${p["body-md-regular"]}
    margin-top: ${l["spacing-4"]};
`;const w=i(r)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${d["icon-error-strong"]};
`,v=i.div`
    ${p["body-sm-semibold"]}
    color: ${d["text-error"]};
`,k=i(v)`
    margin-top: ${l["spacing-8"]};
    display: flex;
    gap: ${l["spacing-4"]};

    ${g.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,M=i(v)`
    display: none;
    visibility: hidden;

    ${g.MaxWidth.lg} {
        display: flex;
        gap: ${l["spacing-4"]};
        visibility: visible;
        margin-top: ${l["spacing-8"]};
    }
`,W=i(o)`
    color: ${d["icon-primary"]};
`,j=i.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${l["spacing-32"]};

    ${g.MaxWidth.lg} {
        margin-left: ${l["spacing-16"]};
    }
`,B=i(t)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${l["spacing-16"]};
    }
`,I=i.div`
    width: auto;
    margin-right: ${l["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${g.MaxWidth.lg} {
        margin-right: ${l["spacing-16"]};
    }
`,T=i(n)`
    border-radius: ${c.sm};
    border: ${s["width-010"]} ${s.solid} ${d.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${g.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`,q=i(T)`
    border: none;
`;export{j as ActionContainer,h as Box,$ as CardButton,f as ContentSection,k as DesktopErrorMessage,w as ErrorIcon,b as ExtendedNameSection,u as FileSizeSection,B as IconButton,m as Item,y as ItemNameText,M as MobileErrorMessage,x as NameSection,q as PdfThumbnail,W as Spinner,T as Thumbnail,I as ThumbnailContainer};
//# sourceMappingURL=file-list-card.styles.js.map
