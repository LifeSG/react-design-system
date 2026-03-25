import e,{css as o}from"styled-components";import{Alert as r}from"../alert/alert.js";import{applyHtmlContentStyle as d}from"../shared/html-content/html-content.js";import{ToggleIcon as t}from"../shared/toggle-icon/toggle-icon.js";import{TextList as i}from"../text-list/index.js";import{Typography as l}from"../typography/index.js";import{V3_Radius as n,V3_Colour as a,V3_Font as s,V3_MediaQuery as b}from"../v3_theme/index.js";const c=e.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${n.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${a.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${a["focus-ring"]};
        outline-offset: 0;
    }

    ${e=>{if(!e.$indicator)return o`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return o`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?o`
                            border-color: ${a["border-error"]};
                        `:o`
                            border-color: ${a["border-error"]};

                            &:has(${h}:hover) {
                                @media (pointer: fine) {
                                    background: ${a["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?o`
                            border: none;
                            background: ${a["bg-selected-disabled"]};
                        `:o`
                            border: none;
                        `:e.$selected?o`
                        border: none;
                        background: ${a["bg-selected"]};

                        &:has(${h}:hover) {
                            @media (pointer: fine) {
                                background: ${a["bg-selected-hover"]};

                                & ${p} {
                                    color: ${a["text-selected-hover"]};
                                }

                                & ${M} {
                                    color: ${a["icon-selected-hover"]};
                                }
                            }
                        }
                    `:o`
                    border: none;

                    &:has(${h}:hover) {
                        @media (pointer: fine) {
                            background: ${a["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?o`
                            border-color: ${a["border-error"]};
                        `:o`
                            border-color: ${a["border-error"]};

                            &:has(${h}:hover) {
                                @media (pointer: fine) {
                                    background: ${a["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?o`
                            border-color: ${a["border-selected-disabled"]};
                            background: ${a["bg-selected-disabled"]};
                        `:o`
                            border-color: ${a["border-disabled"]};
                            background: ${a["bg-disabled"]};
                        `:e.$selected?o`
                        border-color: ${a["border-selected"]};
                        background: ${a["bg-selected"]};

                        &:has(${h}:hover) {
                            @media (pointer: fine) {
                                background: ${a["bg-selected-hover"]};

                                & ${p} {
                                    color: ${a["text-selected-hover"]};
                                }

                                & ${M} {
                                    color: ${a["icon-selected-hover"]};
                                }
                            }
                        }
                    `:o`
                    border-color: ${a.border};

                    &:has(${h}:hover) {
                        @media (pointer: fine) {
                            background: ${a["bg-hover-subtle"]};
                        }
                    }
                `}
`,$=e.input`
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
`,m=e.div`
    display: flex;
`,p=e.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?o`
                    color: ${a["text-selected-disabled"]};
                `:o`
                    color: ${a["text-disabled"]};
                `:e.$selected?o`
                color: ${a["text-selected"]};
            `:o`
            color: ${a.text};
        `}
`,u=e.label`
    ${e=>e.$selected?s["body-baseline-semibold"]:s["body-baseline-regular"]};
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var o,r;return null!==(r=null===(o=e.$maxLines)||void 0===o?void 0:o.desktop)&&void 0!==r?r:"none"}};
    ${b.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var o,r;return null!==(r=null===(o=e.$maxLines)||void 0===o?void 0:o.tablet)&&void 0!==r?r:"none"}};
    }
    ${b.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var o,r;return null!==(r=null===(o=e.$maxLines)||void 0===o?void 0:o.mobile)&&void 0!==r?r:"none"}};
    }
`,g=e.div`
    ${s["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${s["body-md-semibold"]}
    }
`,h=e.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,v=e.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,x=e.button`
    color: ${e=>e.$disabled?a["text-disabled"]:a["text-error"]};
    white-space: nowrap;
    ${s["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,f=e.button`
    color: ${e=>e.disabled?a["text-disabled"]:a["text-primary"]};
    ${s["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${a.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,w=e.div`
    width: 100%;
    color: ${e=>e.$disabled?a["text-disabled"]:a["text-error"]};
    border: none;
    background: ${a.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,y=e(r)`
    width: 100%;
    user-select: none;
`,k=e.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${a.bg};
    ${d({textSize:"body-md"})}

    ${e=>e.$disabled?o`
                color: ${a["text-disabled"]};
            `:e.$selected?o`
                color: ${a["text-selected"]};
            `:o`
                color: ${a.text};
            `}
`,j=e(l.BodyMD)`
    color: ${e=>e.$disabled?a["text-disabled"]:a["text-error"]};
`,L=e(i.Ul)`
    color: ${e=>e.$disabled?a["text-disabled"]:a["text-error"]};
`,M=e(t)`
    ${e=>e.$disabled?e.$selected?o`
                    color: ${a["icon-selected-disabled"]};
                `:o`
                    color: ${a["icon-disabled-subtle"]};
                `:e.$selected?o`
                color: ${a["icon-selected"]};
            `:o`
            color: ${a["icon-subtle"]};
        `};
`;export{y as AlertContainer,k as Children,c as Container,w as ErrorContainer,L as ErrorList,j as ErrorText,f as ExpandButton,h as HeaderContainer,v as IndicatorLabelContainer,$ as Input,m as InputContainer,u as Label,x as RemoveButton,M as StyledToggleIcon,g as SubLabel,p as TextContainer};
//# sourceMappingURL=toggle.styles.js.map
