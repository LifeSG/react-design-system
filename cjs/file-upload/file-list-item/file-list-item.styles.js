"use strict";var e=require("@lifesg/react-icons/drag-handle"),i=require("@lifesg/react-icons/exclamation-circle-fill"),o=require("styled-components"),r=require("../../button/button.js"),t=require("../../typography/index.js"),a=require("../../v3_theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=n(o);const s=d.default.li`
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
`,l=d.default(e.DragHandleIcon)`
    margin-right: ${a.V3_Spacing["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${a.V3_Colour.icon};

    ${e=>e.$active?o.css`
                color: ${a.V3_Colour["icon-primary"]};
            `:e.$disabled?o.css`
                color: ${a.V3_Colour["icon-disabled"]};
            `:void 0};
`,c=d.default.div`
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
`,p=d.default.div`
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
`,g=d.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,u=d.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${a.V3_MediaQuery.MaxWidth.md} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,m=d.default.div`
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
`,$=d.default(t.Typography.BodyMD)`
    color: ${a.V3_Colour["text-subtler"]};
`,f=d.default(t.Typography.BodyMD)``,x=d.default(t.Typography.BodyMD)`
    margin-top: ${a.V3_Spacing["spacing-4"]};
`,h=d.default(i.ExclamationCircleFillIcon)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${a.V3_Colour["icon-error-strong"]};
`;d.default(t.Typography.BodySM)`
    color: ${a.V3_Colour["text-error"]};
`;const y=d.default(t.Typography.BodySM)`
    color: ${a.V3_Colour["text-error"]};
    margin-top: ${a.V3_Spacing["spacing-4"]};
    display: flex;
    gap: ${a.V3_Spacing["spacing-4"]};

    ${a.V3_MediaQuery.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,b=d.default(t.Typography.BodySM)`
    color: ${a.V3_Colour["text-error"]};
    display: none;
    visibility: hidden;

    ${a.V3_MediaQuery.MaxWidth.md} {
        display: flex;
        gap: ${a.V3_Spacing["spacing-4"]};
        visibility: visible;
        margin-top: ${a.V3_Spacing["spacing-8"]};
    }
`,_=d.default.div`
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
`,V=d.default(r.Button)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${a.V3_Spacing["spacing-16"]};
    }
`;exports.ActionContainer=_,exports.Box=c,exports.ContentSection=p,exports.DesktopErrorMessage=y,exports.DragHandleIcon=l,exports.ErrorIcon=h,exports.ExtendedNameSection=u,exports.FileSizeSection=m,exports.FileSizeText=$,exports.IconButton=V,exports.Item=s,exports.ItemDescriptionText=x,exports.ItemText=f,exports.MobileErrorMessage=b,exports.NameSection=g;
//# sourceMappingURL=file-list-item.styles.js.map
