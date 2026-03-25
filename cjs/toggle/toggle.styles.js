"use strict";var e=require("styled-components"),o=require("../alert/alert.js"),r=require("../shared/html-content/html-content.js"),t=require("../shared/toggle-icon/toggle-icon.js"),d=require("../text-list/index.js"),l=require("../typography/index.js"),i=require("../v3_theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=n(e);const a=s.default.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${i.V3_Radius.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${i.V3_Colour.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${i.V3_Colour["focus-ring"]};
        outline-offset: 0;
    }

    ${o=>{if(!o.$indicator)return e.css`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${o=>{if(o.$useContentWidth)return e.css`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${o=>"no-border"===o.$styleType?o.$error?o.$disabled?e.css`
                            border-color: ${i.V3_Colour["border-error"]};
                        `:e.css`
                            border-color: ${i.V3_Colour["border-error"]};

                            &:has(${g}:hover) {
                                @media (pointer: fine) {
                                    background: ${i.V3_Colour["bg-hover-subtle"]};
                                }
                            }
                        `:o.$disabled?o.$selected?e.css`
                            border: none;
                            background: ${i.V3_Colour["bg-selected-disabled"]};
                        `:e.css`
                            border: none;
                        `:o.$selected?e.css`
                        border: none;
                        background: ${i.V3_Colour["bg-selected"]};

                        &:has(${g}:hover) {
                            @media (pointer: fine) {
                                background: ${i.V3_Colour["bg-selected-hover"]};

                                & ${b} {
                                    color: ${i.V3_Colour["text-selected-hover"]};
                                }

                                & ${y} {
                                    color: ${i.V3_Colour["icon-selected-hover"]};
                                }
                            }
                        }
                    `:e.css`
                    border: none;

                    &:has(${g}:hover) {
                        @media (pointer: fine) {
                            background: ${i.V3_Colour["bg-hover-subtle"]};
                        }
                    }
                `:o.$error?o.$disabled?e.css`
                            border-color: ${i.V3_Colour["border-error"]};
                        `:e.css`
                            border-color: ${i.V3_Colour["border-error"]};

                            &:has(${g}:hover) {
                                @media (pointer: fine) {
                                    background: ${i.V3_Colour["bg-hover-subtle"]};
                                }
                            }
                        `:o.$disabled?o.$selected?e.css`
                            border-color: ${i.V3_Colour["border-selected-disabled"]};
                            background: ${i.V3_Colour["bg-selected-disabled"]};
                        `:e.css`
                            border-color: ${i.V3_Colour["border-disabled"]};
                            background: ${i.V3_Colour["bg-disabled"]};
                        `:o.$selected?e.css`
                        border-color: ${i.V3_Colour["border-selected"]};
                        background: ${i.V3_Colour["bg-selected"]};

                        &:has(${g}:hover) {
                            @media (pointer: fine) {
                                background: ${i.V3_Colour["bg-selected-hover"]};

                                & ${b} {
                                    color: ${i.V3_Colour["text-selected-hover"]};
                                }

                                & ${y} {
                                    color: ${i.V3_Colour["icon-selected-hover"]};
                                }
                            }
                        }
                    `:e.css`
                    border-color: ${i.V3_Colour.border};

                    &:has(${g}:hover) {
                        @media (pointer: fine) {
                            background: ${i.V3_Colour["bg-hover-subtle"]};
                        }
                    }
                `}
`,c=s.default.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,u=s.default.div`
    display: flex;
`,b=s.default.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${o=>o.$disabled?o.$selected?e.css`
                    color: ${i.V3_Colour["text-selected-disabled"]};
                `:e.css`
                    color: ${i.V3_Colour["text-disabled"]};
                `:o.$selected?e.css`
                color: ${i.V3_Colour["text-selected"]};
            `:e.css`
            color: ${i.V3_Colour.text};
        `}
`,$=s.default.label`
    ${e=>e.$selected?i.V3_Font["body-baseline-semibold"]:i.V3_Font["body-baseline-regular"]};
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var o,r;return null!==(r=null===(o=e.$maxLines)||void 0===o?void 0:o.desktop)&&void 0!==r?r:"none"}};
    ${i.V3_MediaQuery.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var o,r;return null!==(r=null===(o=e.$maxLines)||void 0===o?void 0:o.tablet)&&void 0!==r?r:"none"}};
    }
    ${i.V3_MediaQuery.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var o,r;return null!==(r=null===(o=e.$maxLines)||void 0===o?void 0:o.mobile)&&void 0!==r?r:"none"}};
    }
`,p=s.default.div`
    ${i.V3_Font["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${i.V3_Font["body-md-semibold"]}
    }
`,g=s.default.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,m=s.default.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,x=s.default.button`
    color: ${e=>e.$disabled?i.V3_Colour["text-disabled"]:i.V3_Colour["text-error"]};
    white-space: nowrap;
    ${i.V3_Font["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,h=s.default.button`
    color: ${e=>e.disabled?i.V3_Colour["text-disabled"]:i.V3_Colour["text-primary"]};
    ${i.V3_Font["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${i.V3_Colour.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,C=s.default.div`
    width: 100%;
    color: ${e=>e.$disabled?i.V3_Colour["text-disabled"]:i.V3_Colour["text-error"]};
    border: none;
    background: ${i.V3_Colour.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,_=s.default(o.Alert)`
    width: 100%;
    user-select: none;
`,f=s.default.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${i.V3_Colour.bg};
    ${r.applyHtmlContentStyle({textSize:"body-md"})}

    ${o=>o.$disabled?e.css`
                color: ${i.V3_Colour["text-disabled"]};
            `:o.$selected?e.css`
                color: ${i.V3_Colour["text-selected"]};
            `:e.css`
                color: ${i.V3_Colour.text};
            `}
`,V=s.default(l.Typography.BodyMD)`
    color: ${e=>e.$disabled?i.V3_Colour["text-disabled"]:i.V3_Colour["text-error"]};
`,v=s.default(d.TextList.Ul)`
    color: ${e=>e.$disabled?i.V3_Colour["text-disabled"]:i.V3_Colour["text-error"]};
`,y=s.default(t.ToggleIcon)`
    ${o=>o.$disabled?o.$selected?e.css`
                    color: ${i.V3_Colour["icon-selected-disabled"]};
                `:e.css`
                    color: ${i.V3_Colour["icon-disabled-subtle"]};
                `:o.$selected?e.css`
                color: ${i.V3_Colour["icon-selected"]};
            `:e.css`
            color: ${i.V3_Colour["icon-subtle"]};
        `};
`;exports.AlertContainer=_,exports.Children=f,exports.Container=a,exports.ErrorContainer=C,exports.ErrorList=v,exports.ErrorText=V,exports.ExpandButton=h,exports.HeaderContainer=g,exports.IndicatorLabelContainer=m,exports.Input=c,exports.InputContainer=u,exports.Label=$,exports.RemoveButton=x,exports.StyledToggleIcon=y,exports.SubLabel=p,exports.TextContainer=b;
//# sourceMappingURL=toggle.styles.js.map
