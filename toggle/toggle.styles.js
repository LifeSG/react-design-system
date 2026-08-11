import e,{css as o}from"styled-components";import{Alert as r}from"../alert/alert.js";import{applyHtmlContentStyle as d}from"../shared/html-content/html-content.js";import{ToggleIcon as t}from"../shared/toggle-icon/toggle-icon.js";import{TextList as i}from"../text-list/index.js";import{Radius as l,Colour as n,Font as a,MediaQuery as s}from"../theme/index.js";import{Typography as b}from"../typography/typography.js";const c=e.div`
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

    ${e=>{if(!e.$indicator)return o`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return o`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?o`
                            border-color: ${n["border-error"]};
                        `:o`
                            border-color: ${n["border-error"]};

                            &:has(${h}:hover) {
                                @media (pointer: fine) {
                                    background: ${n["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?o`
                            border: none;
                            background: ${n["bg-selected-disabled"]};
                        `:o`
                            border: none;
                        `:e.$selected?o`
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
                    `:o`
                    border: none;

                    &:has(${h}:hover) {
                        @media (pointer: fine) {
                            background: ${n["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?o`
                            border-color: ${n["border-error"]};
                        `:o`
                            border-color: ${n["border-error"]};

                            &:has(${h}:hover) {
                                @media (pointer: fine) {
                                    background: ${n["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?o`
                            border-color: ${n["border-selected-disabled"]};
                            background: ${n["bg-selected-disabled"]};
                        `:o`
                            border-color: ${n["border-disabled"]};
                            background: ${n["bg-disabled"]};
                        `:e.$selected?o`
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
                    `:o`
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
    ${e=>e.$disabled?e.$selected?o`
                    color: ${n["text-selected-disabled"]};
                `:o`
                    color: ${n["text-disabled"]};
                `:e.$selected?o`
                color: ${n["text-selected"]};
            `:o`
            color: ${n.text};
        `}
`,u=e.label`
    ${e=>e.$selected?a["body-baseline-semibold"]:a["body-baseline-regular"]};
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var o,r;return null!==(r=null===(o=e.$maxLines)||void 0===o?void 0:o.desktop)&&void 0!==r?r:"none"}};
    ${s.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var o,r;return null!==(r=null===(o=e.$maxLines)||void 0===o?void 0:o.tablet)&&void 0!==r?r:"none"}};
    }
    ${s.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var o,r;return null!==(r=null===(o=e.$maxLines)||void 0===o?void 0:o.mobile)&&void 0!==r?r:"none"}};
    }
`,g=e.div`
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
`,x=e.button`
    color: ${e=>e.$disabled?n["text-disabled"]:n["text-error"]};
    white-space: nowrap;
    ${a["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,f=e.button`
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
`,y=e(r)`
    width: 100%;
    user-select: none;
`,k=e.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${n.bg};
    ${d({textSize:"body-md"})}

    ${e=>e.$disabled?o`
                color: ${n["text-disabled"]};
            `:e.$selected?o`
                color: ${n["text-selected"]};
            `:o`
                color: ${n.text};
            `}
`,j=e(b.BodyMD)`
    color: ${e=>e.$disabled?n["text-disabled"]:n["text-error"]};
`,L=e(i.Ul)`
    color: ${e=>e.$disabled?n["text-disabled"]:n["text-error"]};
`,M=e(t)`
    ${e=>e.$disabled?e.$selected?o`
                    color: ${n["icon-selected-disabled"]};
                `:o`
                    color: ${n["icon-disabled-subtle"]};
                `:e.$selected?o`
                color: ${n["icon-selected"]};
            `:o`
            color: ${n["icon-subtle"]};
        `};
`;export{y as AlertContainer,k as Children,c as Container,w as ErrorContainer,L as ErrorList,j as ErrorText,f as ExpandButton,h as HeaderContainer,v as IndicatorLabelContainer,$ as Input,m as InputContainer,u as Label,x as RemoveButton,M as StyledToggleIcon,g as SubLabel,p as TextContainer};
//# sourceMappingURL=toggle.styles.js.map
