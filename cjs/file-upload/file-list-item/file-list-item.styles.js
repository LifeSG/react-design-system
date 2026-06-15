"use strict";var e=require("styled-components"),i=require("@lifesg/react-icons/drag-handle"),o=require("@lifesg/react-icons/exclamation-circle-fill"),r=require("../../icon-button/icon-button.js"),t=require("../../theme/index.js"),n=require("../../typography/typography.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=a(e);const d=s.default.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${t.Spacing["spacing-16"]};
    }

    ${i=>i.$disabled&&"none"===i.$focusType?e.css`
                cursor: not-allowed;
            `:i.$sortable&&"self"===i.$focusType?e.css`
                cursor: grabbing;
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:i.$sortable?e.css`
                &:hover {
                    cursor: grab;
                }
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:void 0}
`,l=s.default(i.DragHandleIcon)`
    margin-right: ${t.Spacing["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${t.Colour.icon};

    ${i=>i.$active?e.css`
                color: ${t.Colour["icon-primary"]};
            `:i.$disabled?e.css`
                color: ${t.Colour["icon-disabled"]};
            `:void 0};
`,c=s.default.div`
    background: ${t.Colour["bg-primary-subtlest"]};
    border: ${t.Border["width-010"]} ${t.Border.solid} ${t.Colour.border};
    border-radius: ${t.Radius.sm};
    padding: ${t.Spacing["spacing-16"]} ${t.Spacing["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${t.MediaQuery.MaxWidth.md} {
        padding: ${t.Spacing["spacing-16"]};
    }

    ${i=>i.$focused?e.css`
                border-color: ${t.Colour["border-focus"]};
                box-shadow: ${t.Shadow["xs-focus-strong"]};
            `:i.$disabled?e.css`
                border-color: ${t.Colour["border-disabled"]};
            `:i.$error?e.css`
                background: ${t.Colour["bg-error"]};
                border-color: ${t.Colour["border-error"]};
            `:void 0}

    ${i=>{if(!i.$error&&(i.$loading||i.$editable))return e.css`
                ${t.MediaQuery.MaxWidth.md} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,p=s.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${t.MediaQuery.MaxWidth.md} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${i=>{if(i.$hasThumbnail)return e.css`
                ${t.MediaQuery.MaxWidth.md} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,g=s.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,u=s.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${t.MediaQuery.MaxWidth.md} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,m=s.default.div`
    display: flex;
    width: 5rem;
    margin-left: ${t.Spacing["spacing-8"]};
    justify-content: flex-end;

    ${t.MediaQuery.MaxWidth.md} {
        ${i=>i.$hideInMobile?e.css`
                    display: none;
                    visibility: hidden;
                `:e.css`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${t.Spacing["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,f=s.default(n.Typography.BodyMD)`
    color: ${t.Colour["text-subtler"]};
`,$=s.default(n.Typography.BodyMD)``,x=s.default($)`
    margin-top: ${t.Spacing["spacing-4"]};
`,h=s.default(o.ExclamationCircleFillIcon)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${t.Colour["icon-error-strong"]};
`,y=s.default(n.Typography.BodySM)`
    color: ${t.Colour["text-error"]};
`,b=s.default(y)`
    margin-top: ${t.Spacing["spacing-4"]};
    display: flex;
    gap: ${t.Spacing["spacing-4"]};

    ${t.MediaQuery.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,M=s.default(y)`
    display: none;
    visibility: hidden;

    ${t.MediaQuery.MaxWidth.md} {
        display: flex;
        gap: ${t.Spacing["spacing-4"]};
        visibility: visible;
        margin-top: ${t.Spacing["spacing-8"]};
    }
`,S=s.default.div`
    width: 6rem;
    margin-left: ${t.Spacing["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${t.MediaQuery.MaxWidth.md} {
        width: fit-content;

        ${i=>i.$loading&&!i.$error?e.css`
                    margin-left: 0;
                    margin-top: ${t.Spacing["spacing-16"]};
                    width: 100%;
                `:i.$editable&&!i.$error?e.css`
                    margin-left: 0;
                    margin-top: ${t.Spacing["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,v=s.default(r.IconButton)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${t.Spacing["spacing-16"]};
    }
`;exports.ActionContainer=S,exports.BaseErrorMessage=y,exports.Box=c,exports.ContentSection=p,exports.DesktopErrorMessage=b,exports.DragHandleIcon=l,exports.ErrorIcon=h,exports.ExtendedNameSection=u,exports.FileSizeSection=m,exports.FileSizeText=f,exports.IconButton=v,exports.Item=d,exports.ItemDescriptionText=x,exports.ItemText=$,exports.MobileErrorMessage=M,exports.NameSection=g;
//# sourceMappingURL=file-list-item.styles.js.map
