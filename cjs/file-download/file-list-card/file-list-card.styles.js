"use strict";var e=require("@lifesg/react-icons/exclamation-circle-fill"),i=require("styled-components"),r=require("../../icon-button/icon-button.js"),t=require("../../shared/component-loading-spinner/component-loading-spinner.js"),a=require("../../shared/image-with-fallback/image-with-fallback.js"),o=require("../../shared/styles/index.js"),n=require("../../v3_theme/index.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=l(i);const s=d.default.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${n.V3_Spacing["spacing-16"]};
    }
`,c=d.default.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${n.V3_Spacing["spacing-16"]} ${n.V3_Spacing["spacing-32"]};
    cursor: pointer;

    background: ${n.V3_Colour["bg-primary-subtlest"]};
    border: ${n.V3_Border["width-010"]} ${n.V3_Border.solid}
        ${n.V3_Colour.border};
    border-radius: ${n.V3_Radius.sm};

    ${n.V3_MediaQuery.MaxWidth.lg} {
        padding: ${n.V3_Spacing["spacing-16"]};
    }

    &:hover {
        background: ${n.V3_Colour["bg-hover"]};
    }

    ${e=>{if(e.$error)return i.css`
                background: ${n.V3_Colour["bg-error"]};
                border-color: ${n.V3_Colour["border-error"]};

                &:hover {
                    background: ${n.V3_Colour["bg-error"]};
                }
            `}}
`,g=d.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${n.V3_MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${e=>{if(e.$hasThumbnail)return i.css`
                ${n.V3_MediaQuery.MaxWidth.lg} {
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

    ${n.V3_MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,x=d.default.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${n.V3_Spacing["spacing-8"]};

    ${n.V3_Font["body-md-regular"]}
    color: ${n.V3_Colour.text};

    ${n.V3_MediaQuery.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${n.V3_Spacing["spacing-8"]};

        ${o.lineClampCss(2)}
    }
`,f=d.default.div`
    ${n.V3_Font["body-md-regular"]}
    color: ${n.V3_Colour.text};

    ${n.V3_MediaQuery.MaxWidth.lg} {
        ${o.lineClampCss(2)}
    }
`;d.default(f)`
    ${n.V3_Font["body-md-regular"]}
    margin-top: ${n.V3_Spacing["spacing-4"]};
`;const m=d.default(e.ExclamationCircleFillIcon)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${n.V3_Colour["icon-error-strong"]};
`,h=d.default.div`
    ${n.V3_Font["body-sm-semibold"]}
    color: ${n.V3_Colour["text-error"]};
`,$=d.default(h)`
    margin-top: ${n.V3_Spacing["spacing-4"]};
    display: flex;
    gap: ${n.V3_Spacing["spacing-4"]};

    ${n.V3_MediaQuery.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,_=d.default(h)`
    display: none;
    visibility: hidden;

    ${n.V3_MediaQuery.MaxWidth.lg} {
        display: flex;
        gap: ${n.V3_Spacing["spacing-4"]};
        visibility: visible;
        margin-top: ${n.V3_Spacing["spacing-8"]};
    }
`,V=d.default(t.ComponentLoadingSpinner)`
    color: ${n.V3_Colour["icon-primary"]};
`,b=d.default.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${n.V3_Spacing["spacing-32"]};

    ${n.V3_MediaQuery.MaxWidth.lg} {
        margin-left: ${n.V3_Spacing["spacing-16"]};
    }
`,y=d.default(r.IconButton)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${n.V3_Spacing["spacing-16"]};
    }
`,M=d.default.div`
    width: auto;
    margin-right: ${n.V3_Spacing["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${n.V3_MediaQuery.MaxWidth.lg} {
        margin-right: ${n.V3_Spacing["spacing-16"]};
    }
`,S=d.default(a.ImageWithFallback)`
    border-radius: ${n.V3_Radius.sm};
    border: ${n.V3_Border["width-010"]} ${n.V3_Border.solid}
        ${n.V3_Colour.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${n.V3_MediaQuery.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`;exports.ActionContainer=b,exports.Box=c,exports.ContentSection=g,exports.DesktopErrorMessage=$,exports.ErrorIcon=m,exports.ExtendedNameSection=u,exports.FileSizeSection=x,exports.IconButton=y,exports.Item=s,exports.ItemNameText=f,exports.MobileErrorMessage=_,exports.NameSection=p,exports.Spinner=V,exports.Thumbnail=S,exports.ThumbnailContainer=M;
//# sourceMappingURL=file-list-card.styles.js.map
