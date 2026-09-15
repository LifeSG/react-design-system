import e,{css as r}from"styled-components";import{Alert as o}from"../alert/alert.js";import{applyHtmlContentStyle as d}from"../shared/html-content/html-content.js";import{ToggleIcon as t}from"../shared/toggle-icon/toggle-icon.js";import{TextList as i}from"../text-list/index.js";import{Radius as l,Colour as n,Font as a,MediaQuery as s}from"../theme/index.js";import{Typography as b}from"../typography/typography.js";const c=e.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${l.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${n.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${n["focus-ring"]};
        outline-offset: 0;
    }

    ${e=>{if(!e.$indicator)return r`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return r`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?r`
                            border-color: ${n["border-error"]};
                        `:e.$selected?r`
                            border-color: transparent;
                            background: ${n["bg-error"]};

                            &:has(${h}:hover) {
                                @media (pointer: fine) {
                                    background: ${n["bg-error-hover"]};
                                }
                            }
                        `:r`
                        border-color: ${n["border-error"]};

                        &:has(${h}:hover) {
                            @media (pointer: fine) {
                                background: ${n["bg-hover-subtle"]};
                            }
                        }
                    `:e.$disabled?e.$selected?r`
                            border: none;
                            background: ${n["bg-selected-disabled"]};
                        `:r`
                            border: none;
                        `:e.$selected?r`
                        border: none;
                        background: ${n["bg-selected"]};

                        &:has(${h}:hover) {
                            @media (pointer: fine) {
                                background: ${n["bg-selected-hover"]};

                                & ${p} {
                                    color: ${n["text-selected-hover"]};
                                }

                                & ${M} {
                                    color: ${n["icon-selected-hover"]};
                                }
                            }
                        }
                    `:r`
                    border: none;

                    &:has(${h}:hover) {
                        @media (pointer: fine) {
                            background: ${n["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?r`
                            border-color: ${n["border-error"]};
                        `:e.$selected?r`
                            border-color: ${n["border-error"]};
                            background: ${n["bg-error"]};

                            &:has(${h}:hover) {
                                @media (pointer: fine) {
                                    background: ${n["bg-error-hover"]};
                                }
                            }
                        `:r`
                        border-color: ${n["border-error"]};

                        &:has(${h}:hover) {
                            @media (pointer: fine) {
                                background: ${n["bg-hover-subtle"]};
                            }
                        }
                    `:e.$disabled?e.$selected?r`
                            border-color: ${n["border-selected-disabled"]};
                            background: ${n["bg-selected-disabled"]};
                        `:r`
                            border-color: ${n["border-disabled"]};
                            background: ${n["bg-disabled"]};
                        `:e.$selected?r`
                        border-color: ${n["border-selected"]};
                        background: ${n["bg-selected"]};

                        &:has(${h}:hover) {
                            @media (pointer: fine) {
                                background: ${n["bg-selected-hover"]};

                                & ${p} {
                                    color: ${n["text-selected-hover"]};
                                }

                                & ${M} {
                                    color: ${n["icon-selected-hover"]};
                                }
                            }
                        }
                    `:r`
                    border-color: ${n.border};

                    &:has(${h}:hover) {
                        @media (pointer: fine) {
                            background: ${n["bg-hover-subtle"]};
                        }
                    }
                `}
`,$=e.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.$disabledVisual?"not-allowed":"pointer"};
    top: 0;
    left: 0;
    opacity: 0;

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
    ${e=>e.$selected?e.$disabled?r`
                    color: ${n["text-selected-disabled"]};
                `:e.$error?r`
                    color: ${n["text-error"]};
                `:r`
                color: ${n["text-selected"]};
            `:e.$disabled?r`
                color: ${n["text-disabled"]};
            `:r`
            color: ${n.text};
        `}
`,g=e.label`
    ${e=>e.$selected?a["body-baseline-semibold"]:a["body-baseline-regular"]};
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,o;return null!==(o=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==o?o:"none"}};
    ${s.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,o;return null!==(o=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==o?o:"none"}};
    }
    ${s.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,o;return null!==(o=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==o?o:"none"}};
    }
`,u=e.div`
    ${a["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${a["body-md-semibold"]}
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
`,f=e.button`
    color: ${e=>e.$disabled?n["text-disabled"]:n["text-error"]};
    white-space: nowrap;
    ${a["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,x=e.button`
    color: ${e=>e.disabled?n["text-disabled"]:n["text-primary"]};
    ${a["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${n.bg};
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
    color: ${e=>e.$disabled?n["text-disabled"]:n["text-error"]};
    border: none;
    background: ${n.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,k=e(o)`
    width: 100%;
    user-select: none;
`,y=e.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${n.bg};
    ${d({textSize:"body-md"})}

    ${e=>e.$disabled?r`
                color: ${n["text-disabled"]};
            `:e.$selected?r`
                color: ${n["text-selected"]};
            `:r`
            color: ${n.text};
        `}
`,j=e(b.BodyMD)`
    color: ${e=>e.$disabled?n["text-disabled"]:n["text-error"]};
`,L=e(i.Ul)`
    color: ${e=>e.$disabled?n["text-disabled"]:n["text-error"]};
`,M=e(t)`
    ${e=>e.$selected?e.$disabled?r`
                    color: ${n["icon-selected-disabled"]};
                `:e.$error?r`
                    color: ${n["icon-error-strong"]};
                `:r`
                color: ${n["icon-selected"]};
            `:e.$disabled?r`
                color: ${n["icon-disabled-subtle"]};
            `:r`
            color: ${n["icon-subtle"]};
        `};
`;export{k as AlertContainer,y as Children,c as Container,w as ErrorContainer,L as ErrorList,j as ErrorText,x as ExpandButton,h as HeaderContainer,v as IndicatorLabelContainer,$ as Input,m as InputContainer,g as Label,f as RemoveButton,M as StyledToggleIcon,u as SubLabel,p as TextContainer};
//# sourceMappingURL=toggle.styles.js.map
