"use strict";var o=require("@lifesg/react-icons/chevron-down"),e=require("styled-components"),r=require("../../v3_theme/index.js"),t=require("../styles/index.js");function i(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var n=i(e);const d=o=>"small"===o?2.5:3,s=n.default.div`
    position: relative;
    width: 100%;
    ${o=>{const r=d(o.$variant);return e.css`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,a=e.css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${r.V3_Spacing["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${o=>d(o.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${r.V3_Radius.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${r.V3_Colour["border-focus"]};
    }
`,l=n.default.button`
    ${a}
    cursor: pointer;
`;n.default.div`
    ${a}
`;const u=e.keyframes`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
        width: 100%;
	}
`;n.default.div`
    position: relative;
    border: ${r.V3_Border["width-010"]} ${r.V3_Border.solid}
        ${r.V3_Colour.border};
    border-radius: ${r.V3_Radius.sm};
    background: ${r.V3_Colour.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${r.V3_Colour["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${r.V3_Colour["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${o=>o.$expanded?e.css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:e.css`
                animation: ${u} 0.5s ease-in-out;
            `}

    ${o=>o.$disabled?e.css`
                background: ${r.V3_Colour["bg-disabled"]};

                ${l} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${r.V3_Colour.border};
                    box-shadow: none;
                }
            `:o.$readOnly?e.css`
                border: none;
                background: transparent !important;

                ${l} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:o.$error?e.css`
                border-color: ${r.V3_Colour["border-error"]};

                &:focus-within {
                    border-color: ${r.V3_Colour["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${r.V3_Colour["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,n.default.div`
    transform: rotate(${o=>o.$expanded?180:0}deg);
    transition: transform ${r.V3_Motion["duration-250"]}
        ${r.V3_Motion["ease-default"]};
    margin-left: ${r.V3_Spacing["spacing-16"]};
`,n.default(o.ChevronDownIcon)`
    color: ${r.V3_Colour.icon};
`,n.default.div`
    height: 1px;
    background: ${r.V3_Colour.border};
    margin: 0 ${r.V3_Spacing["spacing-8"]};
`;const c=n.default.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${o=>{if(o.$disabled)return e.css`
                color: ${r.V3_Colour["text-disabled"]};
            `}}
`,b=n.default.div`
    ${o=>"small"===o.$variant?r.V3_Font["body-md-regular"]:r.V3_Font["body-baseline-regular"]}
    text-align: left;
    ${o=>{if("middle"!==o.$truncateType)return e.css`
                    ${t.lineClampCss(1)}
                `}}
    overflow: hidden;
`,p=n.default(b)`
    color: ${r.V3_Colour["text-subtler"]};
`;exports.LabelContainer=c,exports.PlaceholderLabel=p,exports.Selector=l,exports.ValueLabel=b,exports.Wrapper=s,exports.baseSelectorCSS=a;
//# sourceMappingURL=dropdown-wrapper.styles.js.map
