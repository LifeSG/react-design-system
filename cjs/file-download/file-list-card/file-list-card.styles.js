"use strict";var e=require("styled-components"),i=require("@lifesg/react-icons/exclamation-circle-fill"),r=require("../../icon-button/icon-button.js"),t=require("../../shared/component-loading-spinner/component-loading-spinner.js"),a=require("../../shared/image-with-fallback/image-with-fallback.js"),o=require("../../shared/styles/index.js"),n=require("../../theme/index.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=l(e);const s=d.default.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${n.Spacing["spacing-16"]};
    }
`,c=d.default.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${n.Spacing["spacing-16"]} ${n.Spacing["spacing-32"]};
    cursor: pointer;

    background: ${n.Colour["bg-primary-subtlest"]};
    border: ${n.Border["width-010"]} ${n.Border.solid} ${n.Colour.border};
    border-radius: ${n.Radius.sm};

    ${n.MediaQuery.MaxWidth.lg} {
        padding: ${n.Spacing["spacing-16"]};
    }

    &:hover {
        background: ${n.Colour["bg-hover"]};
    }

    ${i=>{if(i.$error)return e.css`
                background: ${n.Colour["bg-error"]};
                border-color: ${n.Colour["border-error"]};

                &:hover {
                    background: ${n.Colour["bg-error"]};
                }
            `}}
`,g=d.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${n.MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${i=>{if(i.$hasThumbnail)return e.css`
                ${n.MediaQuery.MaxWidth.lg} {
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
`,u=d.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${n.MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,x=d.default.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${n.Spacing["spacing-8"]};

    ${n.Font["body-md-regular"]}
    color: ${n.Colour.text};

    ${n.MediaQuery.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${n.Spacing["spacing-8"]};

        ${o.lineClampCss(2)}
    }
`,f=d.default.div`
    ${n.Font["body-md-regular"]}
    color: ${n.Colour.text};

    ${n.MediaQuery.MaxWidth.lg} {
        ${o.lineClampCss(2)}
    }
`;d.default(f)`
    ${n.Font["body-md-regular"]}
    margin-top: ${n.Spacing["spacing-4"]};
`;const m=d.default(i.ExclamationCircleFillIcon)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${n.Colour["icon-error-strong"]};
`,h=d.default.div`
    ${n.Font["body-sm-semibold"]}
    color: ${n.Colour["text-error"]};
`,$=d.default(h)`
    margin-top: ${n.Spacing["spacing-4"]};
    display: flex;
    gap: ${n.Spacing["spacing-4"]};

    ${n.MediaQuery.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,b=d.default(h)`
    display: none;
    visibility: hidden;

    ${n.MediaQuery.MaxWidth.lg} {
        display: flex;
        gap: ${n.Spacing["spacing-4"]};
        visibility: visible;
        margin-top: ${n.Spacing["spacing-8"]};
    }
`,y=d.default(t.ComponentLoadingSpinner)`
    color: ${n.Colour["icon-primary"]};
`,M=d.default.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${n.Spacing["spacing-32"]};

    ${n.MediaQuery.MaxWidth.lg} {
        margin-left: ${n.Spacing["spacing-16"]};
    }
`,S=d.default(r.IconButton)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${n.Spacing["spacing-16"]};
    }
`,w=d.default.div`
    width: auto;
    margin-right: ${n.Spacing["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${n.MediaQuery.MaxWidth.lg} {
        margin-right: ${n.Spacing["spacing-16"]};
    }
`,C=d.default(a.ImageWithFallback)`
    border-radius: ${n.Radius.sm};
    border: ${n.Border["width-010"]} ${n.Border.solid} ${n.Colour.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${n.MediaQuery.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`;exports.ActionContainer=M,exports.Box=c,exports.ContentSection=g,exports.DesktopErrorMessage=$,exports.ErrorIcon=m,exports.ExtendedNameSection=u,exports.FileSizeSection=x,exports.IconButton=S,exports.Item=s,exports.ItemNameText=f,exports.MobileErrorMessage=b,exports.NameSection=p,exports.Spinner=y,exports.Thumbnail=C,exports.ThumbnailContainer=w;
//# sourceMappingURL=file-list-card.styles.js.map
