"use strict";var e=require("@lifesg/react-icons/chevron-down"),t=require("@lifesg/react-icons/chevron-left"),o=require("@lifesg/react-icons/chevron-right"),r=require("styled-components"),i=require("../../button/button.js"),n=require("../../v3_theme/index.js"),a=require("../clickable-icon/clickable-icon.js");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=d(r);const s=r.css`
    color: ${n.V3_Colour.icon};
    height: 1rem;
    width: 1rem;
`,p=l.default(t.ChevronLeftIcon)`
    ${s}
`,u=l.default(o.ChevronRightIcon)`
    ${s}
`,c=l.default(e.ChevronDownIcon)`
    ${s}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,f=l.default.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,v=l.default.div`
    display: flex;
    flex: 1;
    position: relative;
`,g=l.default.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,h=l.default.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${n.V3_Colour.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return r.css`
                display: none;
            `}}
`,x=l.default.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,m=l.default.div`
    display: flex;
`,b=l.default.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?r.css`
                display: none;
            `:e.$expanded?r.css`
                ${c} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,w=l.default.span`
    ${n.V3_Font["body-md-regular"]}
    color: ${n.V3_Colour.text};
`,y=l.default.div`
    display: flex;
`,$=l.default(a.ClickableIcon)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,z=l.default.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,C=l.default(i.Button.Small)`
    flex: 1;
`;exports.ActionButton=C,exports.ActionButtonSection=z,exports.ArrowLeft=p,exports.ArrowRight=u,exports.Container=f,exports.DefaultView=g,exports.DropdownButton=b,exports.DropdownText=w,exports.Header=x,exports.HeaderArrowButton=$,exports.HeaderArrows=y,exports.HeaderInputDropdown=m,exports.IconChevronDown=c,exports.OptionsOverlay=h,exports.ToggleZone=v;
//# sourceMappingURL=calendar-manager.style.js.map
