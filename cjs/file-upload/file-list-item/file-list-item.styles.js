"use strict";var e=require("@lifesg/react-icons/drag-handle"),i=require("@lifesg/react-icons/exclamation-circle-fill"),o=require("styled-components"),r=require("../../icon-button/icon-button.js"),t=require("../../shared/clickable-icon/clickable-icon.js"),n=require("../../typography/index.js"),a=require("../../v3_theme/index.js");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=d(o);const l=s.default.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${a.V3_Spacing["spacing-16"]};
    }

    ${e=>e.$disabled&&"none"===e.$focusType?o.css`
                cursor: not-allowed;
            `:e.$sortable&&"self"===e.$focusType?o.css`
                cursor: grabbing;
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:e.$sortable?o.css`
                &:hover {
                    cursor: grab;
                }
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:void 0}
`,c=s.default(e.DragHandleIcon)`
    margin-right: ${a.V3_Spacing["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${a.V3_Colour.icon};

    ${e=>e.$active?o.css`
                color: ${a.V3_Colour["icon-primary"]};
            `:e.$disabled?o.css`
                color: ${a.V3_Colour["icon-disabled"]};
            `:void 0};
`,g=s.default.div`
    background: ${a.V3_Colour["bg-primary-subtlest"]};
    border: ${a.V3_Border["width-010"]} ${a.V3_Border.solid}
        ${a.V3_Colour.border};
    border-radius: ${a.V3_Radius.sm};
    padding: ${a.V3_Spacing["spacing-16"]} ${a.V3_Spacing["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${a.V3_MediaQuery.MaxWidth.md} {
        padding: ${a.V3_Spacing["spacing-16"]};
    }

    ${e=>e.$focused?o.css`
                border-color: ${a.V3_Colour["border-focus"]};
                box-shadow: ${a.V3_Shadow["xs-focus-strong"]};
            `:e.$disabled?o.css`
                border-color: ${a.V3_Colour["border-disabled"]};
            `:e.$error?o.css`
                background: ${a.V3_Colour["bg-error"]};
                border-color: ${a.V3_Colour["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return o.css`
                ${a.V3_MediaQuery.MaxWidth.md} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,p=s.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${a.V3_MediaQuery.MaxWidth.md} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return o.css`
                ${a.V3_MediaQuery.MaxWidth.md} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,u=s.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,m=s.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${a.V3_MediaQuery.MaxWidth.md} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,f=s.default.div`
    display: flex;
    width: 5rem;
    margin-left: ${a.V3_Spacing["spacing-8"]};
    justify-content: flex-end;

    ${a.V3_MediaQuery.MaxWidth.md} {
        ${e=>e.$hideInMobile?o.css`
                    display: none;
                    visibility: hidden;
                `:o.css`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${a.V3_Spacing["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,$=s.default(n.Typography.BodyMD)``,h=s.default($)`
    margin-top: ${a.V3_Spacing["spacing-4"]};
`,x=s.default(i.ExclamationCircleFillIcon)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${a.V3_Colour["icon-error-strong"]};
`,b=s.default(n.Typography.BodySM)`
    color: ${a.V3_Colour["text-error"]};
`,y=s.default(b)`
    margin-top: ${a.V3_Spacing["spacing-4"]};
    display: flex;
    gap: ${a.V3_Spacing["spacing-4"]};

    ${a.V3_MediaQuery.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,_=s.default(b)`
    display: none;
    visibility: hidden;

    ${a.V3_MediaQuery.MaxWidth.md} {
        display: flex;
        gap: ${a.V3_Spacing["spacing-4"]};
        visibility: visible;
        margin-top: ${a.V3_Spacing["spacing-8"]};
    }
`,V=s.default.div`
    width: 6rem;
    margin-left: ${a.V3_Spacing["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${a.V3_MediaQuery.MaxWidth.md} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?o.css`
                    margin-left: 0;
                    margin-top: ${a.V3_Spacing["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?o.css`
                    margin-left: 0;
                    margin-top: ${a.V3_Spacing["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,M=s.default(r.IconButton)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${a.V3_Spacing["spacing-16"]};
    }
`,v=s.default(t.ClickableIcon)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${a.V3_Colour.icon};
    }
`;exports.ActionContainer=V,exports.BaseErrorMessage=b,exports.Box=g,exports.ContentSection=p,exports.DesktopErrorMessage=y,exports.DragHandleIcon=c,exports.ErrorIcon=x,exports.ErrorIconButton=v,exports.ExtendedNameSection=m,exports.FileSizeSection=f,exports.IconButton=M,exports.Item=l,exports.ItemDescriptionText=h,exports.ItemText=$,exports.MobileErrorMessage=_,exports.NameSection=u;
//# sourceMappingURL=file-list-item.styles.js.map
