"use strict";var e=require("styled-components"),i=require("@lifesg/react-icons/drag-handle"),o=require("@lifesg/react-icons/exclamation-circle-fill"),t=require("../../icon-button/icon-button.js"),r=require("../../theme/index.js"),n=require("../../typography/typography.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=a(e);const l=s.default.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${r.Spacing["spacing-16"]};
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
`,d=s.default(i.DragHandleIcon)`
    margin-right: ${r.Spacing["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${r.Colour.icon};

    ${i=>i.$active?e.css`
                color: ${r.Colour["icon-primary"]};
            `:i.$disabled?e.css`
                color: ${r.Colour["icon-disabled"]};
            `:void 0};
`,c=s.default.div`
    background: ${r.Colour["bg-primary-subtlest"]};
    border: ${r.Border["width-010"]} ${r.Border.solid} ${r.Colour.border};
    border-radius: ${r.Radius.sm};
    padding: ${r.Spacing["spacing-16"]} ${r.Spacing["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${r.MediaQuery.MaxWidth.md} {
        padding: ${r.Spacing["spacing-16"]};
    }

    ${i=>i.$focused?e.css`
                border-color: ${r.Colour["border-focus"]};
                box-shadow: ${r.Shadow["xs-focus-strong"]};
            `:i.$disabled?e.css`
                border-color: ${r.Colour["border-disabled"]};
            `:i.$error?e.css`
                background: ${r.Colour["bg-error"]};
                border-color: ${r.Colour["border-error"]};
            `:void 0}

    ${i=>{if(!i.$error&&(i.$loading||i.$editable))return e.css`
                ${r.MediaQuery.MaxWidth.md} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,p=s.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${r.MediaQuery.MaxWidth.md} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${i=>{if(i.$hasThumbnail)return e.css`
                ${r.MediaQuery.MaxWidth.md} {
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
    flex-direction: column;
    align-items: flex-start;

    ${r.MediaQuery.MaxWidth.md} {
        width: 100%;
    }
`,$=s.default.div`
    display: flex;
    width: 5rem;
    margin-left: ${r.Spacing["spacing-8"]};
    justify-content: flex-end;

    ${u} > & {
        width: auto;
        margin-left: 0;
        margin-top: ${r.Spacing["spacing-16"]};
        justify-content: flex-start;
    }

    ${r.MediaQuery.MaxWidth.md} {
        ${i=>i.$hideInMobile?e.css`
                    display: none;
                    visibility: hidden;
                `:e.css`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${r.Spacing["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,f=s.default(n.Typography.BodyMD)`
    color: ${r.Colour["text-subtler"]};
`,m=s.default(n.Typography.BodyMD)`
    color: ${r.Colour["text-subtler"]};
    margin-top: ${r.Spacing["spacing-16"]};
`,x=s.default(n.Typography.BodyMD)``,h=s.default.span`
    ${r.Font["form-label"]}
    font-weight: ${r.Font.Spec["weight-semibold"]};
    color: ${r.Colour["text-subtle"]};
    display: block;
    margin-top: ${r.Spacing["spacing-16"]};
`,y=s.default(x)`
    margin-top: ${r.Spacing["spacing-4"]};
`,b=s.default(o.ExclamationCircleFillIcon)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${r.Colour["icon-error-strong"]};
`,S=s.default(n.Typography.BodySM)`
    color: ${r.Colour["text-error"]};
`,M=s.default(S)`
    margin-top: ${r.Spacing["spacing-4"]};
    display: flex;
    gap: ${r.Spacing["spacing-4"]};

    ${r.MediaQuery.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,w=s.default(S)`
    display: none;
    visibility: hidden;

    ${r.MediaQuery.MaxWidth.md} {
        display: flex;
        gap: ${r.Spacing["spacing-4"]};
        visibility: visible;
        margin-top: ${r.Spacing["spacing-8"]};
    }
`,v=s.default.div`
    width: 6rem;
    margin-left: ${r.Spacing["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${i=>{if(i.$hasDescription&&i.$editable&&!i.$error&&!i.$loading)return e.css`
                width: 100%;
                margin-left: 0;
                margin-top: ${r.Spacing["spacing-16"]};
                justify-content: flex-end;
            `}}

    ${r.MediaQuery.MaxWidth.md} {
        width: fit-content;

        ${i=>i.$loading&&!i.$error?e.css`
                    margin-left: 0;
                    margin-top: ${r.Spacing["spacing-16"]};
                    width: 100%;
                `:i.$editable&&!i.$error?e.css`
                    margin-left: 0;
                    margin-top: ${r.Spacing["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,C=s.default(t.IconButton)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${r.Spacing["spacing-8"]};
    }
`;exports.ActionContainer=v,exports.BaseErrorMessage=S,exports.Box=c,exports.ContentSection=p,exports.DescriptionFileSizeText=m,exports.DesktopErrorMessage=M,exports.DragHandleIcon=d,exports.ErrorIcon=b,exports.ExtendedNameSection=u,exports.FileSizeSection=$,exports.FileSizeText=f,exports.IconButton=C,exports.Item=l,exports.ItemDescriptionLabel=h,exports.ItemDescriptionText=y,exports.ItemText=x,exports.MobileErrorMessage=w,exports.NameSection=g;
//# sourceMappingURL=file-list-item.styles.js.map
