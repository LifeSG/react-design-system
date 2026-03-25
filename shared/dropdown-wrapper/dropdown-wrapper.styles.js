import{ChevronDownIcon as o}from"@lifesg/react-icons/chevron-down";import r,{css as e,keyframes as i}from"styled-components";import{V3_Spacing as t,V3_Radius as n,V3_Colour as d,V3_Border as s,V3_Motion as a,V3_Font as l}from"../../v3_theme/index.js";import{lineClampCss as b}from"../styles/index.js";const $=o=>"small"===o?2.5:3,c=r.div`
    position: relative;
    width: 100%;
    ${o=>{const r=$(o.$variant);return e`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,p=e`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${t["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${o=>$(o.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${n.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${d["border-focus"]};
    }
`,u=r.button`
    ${p}
    cursor: pointer;
`;r.div`
    ${p}
`;const f=i`
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
`;r.div`
    position: relative;
    border: ${s["width-010"]} ${s.solid}
        ${d.border};
    border-radius: ${n.sm};
    background: ${d.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${d["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${d["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${o=>o.$expanded?e`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:e`
                animation: ${f} 0.5s ease-in-out;
            `}

    ${o=>o.$disabled?e`
                background: ${d["bg-disabled"]};

                ${u} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${d.border};
                    box-shadow: none;
                }
            `:o.$readOnly?e`
                border: none;
                background: transparent !important;

                ${u} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:o.$error?e`
                border-color: ${d["border-error"]};

                &:focus-within {
                    border-color: ${d["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${d["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,r.div`
    transform: rotate(${o=>o.$expanded?180:0}deg);
    transition: transform ${a["duration-250"]}
        ${a["ease-default"]};
    margin-left: ${t["spacing-16"]};
`,r(o)`
    color: ${d.icon};
`,r.div`
    height: 1px;
    background: ${d.border};
    margin: 0 ${t["spacing-8"]};
`;const h=r.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${o=>{if(o.$disabled)return e`
                color: ${d["text-disabled"]};
            `}}
`,m=r.div`
    ${o=>"small"===o.$variant?l["body-md-regular"]:l["body-baseline-regular"]}
    text-align: left;
    ${o=>{if("middle"!==o.$truncateType)return e`
                    ${b(1)}
                `}}
    overflow: hidden;
`,g=r(m)`
    color: ${d["text-subtler"]};
`;export{h as LabelContainer,g as PlaceholderLabel,u as Selector,m as ValueLabel,c as Wrapper,p as baseSelectorCSS};
//# sourceMappingURL=dropdown-wrapper.styles.js.map
