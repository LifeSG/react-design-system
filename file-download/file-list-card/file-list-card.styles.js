import i,{css as e}from"styled-components";import{ExclamationCircleFillIcon as r}from"@lifesg/react-icons/exclamation-circle-fill";import{IconButton as o}from"../../icon-button/icon-button.js";import{ComponentLoadingSpinner as t}from"../../shared/component-loading-spinner/component-loading-spinner.js";import{ImageWithFallback as n}from"../../shared/image-with-fallback/image-with-fallback.js";import{lineClampCss as a}from"../../shared/styles/index.js";import{Spacing as l,Colour as d,Border as s,Radius as g,MediaQuery as c,Font as p}from"../../theme/index.js";const m=i.li`
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
    border-radius: ${g.sm};

    ${c.MaxWidth.lg} {
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

    ${c.MaxWidth.lg} {
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
    color: ${d["text-subtler"]};

    ${c.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${l["spacing-16"]};

        ${a(2)}
    }
`,w=i.div`
    ${p["body-md-regular"]}
    color: ${d.text};

    ${c.MaxWidth.lg} {
        ${a(2)}
    }
`,y=i.div`
    ${p["form-label"]}
    font-weight: ${p.Spec["weight-semibold"]};
    color: ${d["text-subtle"]};
    margin-top: ${l["spacing-16"]};
    word-break: normal;
    overflow-wrap: anywhere;
`,v=i.div`
    ${p["body-md-regular"]}
    color: ${d.text};
    margin-top: ${l["spacing-8"]};
    word-break: normal;
    overflow-wrap: anywhere;
`,k=i(r)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${d["icon-error-strong"]};
`,M=i.div`
    ${p["body-sm-semibold"]}
    color: ${d["text-error"]};
`,W=i(M)`
    margin-top: ${l["spacing-8"]};
    display: flex;
    gap: ${l["spacing-4"]};

    ${c.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,j=i(M)`
    display: none;
    visibility: hidden;

    ${c.MaxWidth.lg} {
        display: flex;
        gap: ${l["spacing-4"]};
        visibility: visible;
        margin-top: ${l["spacing-8"]};
    }
`,B=i(t)`
    color: ${d["icon-primary"]};
`,I=i.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${l["spacing-32"]};

    ${c.MaxWidth.lg} {
        margin-left: ${l["spacing-16"]};
    }
`,S=i(o)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${l["spacing-16"]};
    }
`,T=i.div`
    width: auto;
    margin-right: ${l["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${c.MaxWidth.lg} {
        margin-right: ${l["spacing-16"]};
    }
`,q=i(n)`
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
`,z=i(q)`
    border: none;
`;export{I as ActionContainer,h as Box,$ as CardButton,f as ContentSection,y as DescriptionLabel,v as DescriptionText,W as DesktopErrorMessage,k as ErrorIcon,b as ExtendedNameSection,u as FileSizeSection,S as IconButton,m as Item,w as ItemNameText,j as MobileErrorMessage,x as NameSection,z as PdfThumbnail,B as Spinner,q as Thumbnail,T as ThumbnailContainer};
//# sourceMappingURL=file-list-card.styles.js.map
