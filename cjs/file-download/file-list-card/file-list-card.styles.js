"use strict";var e=require("styled-components"),i=require("@lifesg/react-icons/exclamation-circle-fill"),r=require("../../icon-button/icon-button.js"),o=require("../../shared/component-loading-spinner/component-loading-spinner.js"),t=require("../../shared/image-with-fallback/image-with-fallback.js"),n=require("../../shared/styles/index.js"),a=require("../../theme/index.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=l(e);const s=d.default.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${a.Spacing["spacing-16"]};
    }
`,c=d.default.button`
    appearance: none;
    padding: 0;
    background: none;
    border: none;
`,u=d.default.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${a.Spacing["spacing-16"]} ${a.Spacing["spacing-32"]};
    cursor: pointer;

    background: ${a.Colour["bg-primary-subtlest"]};
    border: ${a.Border["width-010"]} ${a.Border.solid} ${a.Colour.border};
    border-radius: ${a.Radius.sm};

    ${a.MediaQuery.MaxWidth.lg} {
        padding: ${a.Spacing["spacing-16"]};
    }

    &:hover {
        background: ${a.Colour["bg-hover"]};
    }

    &:has(${c}:focus-visible) {
        outline: 2px solid ${a.Colour["focus-ring"]};
        outline-offset: -2px;
    }

    ${i=>{if(i.$error)return e.css`
                background: ${a.Colour["bg-error"]};
                border-color: ${a.Colour["border-error"]};

                &:hover {
                    background: ${a.Colour["bg-error"]};
                }

                &:has(${c}:focus-visible) {
                    outline-color: ${a.Colour["border-error-focus"]};
                }
            `}}
`,g=d.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${a.MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${i=>{if(i.$hasThumbnail)return e.css`
                ${a.MediaQuery.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,p=d.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,f=d.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${a.MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,x=d.default.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${a.Spacing["spacing-8"]};

    ${a.Font["body-md-regular"]}
    color: ${a.Colour.text};

    ${a.MediaQuery.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${a.Spacing["spacing-8"]};

        ${n.lineClampCss(2)}
    }
`,h=d.default.div`
    ${a.Font["body-md-regular"]}
    color: ${a.Colour.text};

    ${a.MediaQuery.MaxWidth.lg} {
        ${n.lineClampCss(2)}
    }
`;d.default(h)`
    ${a.Font["body-md-regular"]}
    margin-top: ${a.Spacing["spacing-4"]};
`;const m=d.default(i.ExclamationCircleFillIcon)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${a.Colour["icon-error-strong"]};
`,$=d.default.div`
    ${a.Font["body-sm-semibold"]}
    color: ${a.Colour["text-error"]};
`,b=d.default($)`
    margin-top: ${a.Spacing["spacing-8"]};
    display: flex;
    gap: ${a.Spacing["spacing-4"]};

    ${a.MediaQuery.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,y=d.default($)`
    display: none;
    visibility: hidden;

    ${a.MediaQuery.MaxWidth.lg} {
        display: flex;
        gap: ${a.Spacing["spacing-4"]};
        visibility: visible;
        margin-top: ${a.Spacing["spacing-8"]};
    }
`,M=d.default(o.ComponentLoadingSpinner)`
    color: ${a.Colour["icon-primary"]};
`,C=d.default.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${a.Spacing["spacing-32"]};

    ${a.MediaQuery.MaxWidth.lg} {
        margin-left: ${a.Spacing["spacing-16"]};
    }
`,S=d.default(r.IconButton)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${a.Spacing["spacing-16"]};
    }
`,v=d.default.div`
    width: auto;
    margin-right: ${a.Spacing["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${a.MediaQuery.MaxWidth.lg} {
        margin-right: ${a.Spacing["spacing-16"]};
    }
`,w=d.default(t.ImageWithFallback)`
    border-radius: ${a.Radius.sm};
    border: ${a.Border["width-010"]} ${a.Border.solid} ${a.Colour.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${a.MediaQuery.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`,k=d.default(w)`
    border: none;
`;exports.ActionContainer=C,exports.Box=u,exports.CardButton=c,exports.ContentSection=g,exports.DesktopErrorMessage=b,exports.ErrorIcon=m,exports.ExtendedNameSection=f,exports.FileSizeSection=x,exports.IconButton=S,exports.Item=s,exports.ItemNameText=h,exports.MobileErrorMessage=y,exports.NameSection=p,exports.PdfThumbnail=k,exports.Spinner=M,exports.Thumbnail=w,exports.ThumbnailContainer=v;
//# sourceMappingURL=file-list-card.styles.js.map
