"use strict";var e=require("@lifesg/react-icons/chevron-down"),t=require("@lifesg/react-icons/chevron-left"),o=require("@lifesg/react-icons/chevron-right"),r=require("styled-components"),i=require("../../button/button.js"),n=require("../../theme/index.js"),a=require("../clickable-icon/clickable-icon.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=l(r);const s=r.css`
    color: ${n.Colour.icon};
    height: 1rem;
    width: 1rem;
`,p=d.default(t.ChevronLeftIcon)`
    ${s}
`,u=d.default(o.ChevronRightIcon)`
    ${s}
`,c=d.default(e.ChevronDownIcon)`
    ${s}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,f=d.default.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,v=d.default.div`
    display: flex;
    flex: 1;
    position: relative;
    overflow-y: scroll;
`,g=d.default.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,h=d.default.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${n.Colour.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return r.css`
                display: none;
            `}}
`,x=d.default.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,m=d.default.div`
    display: flex;
`,b=d.default.button`
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
`,w=d.default.span`
    ${n.Font["body-md-regular"]}
    color: ${n.Colour.text};
`,y=d.default.div`
    display: flex;
`,$=d.default(a.ClickableIcon)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,z=d.default.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,C=d.default(i.Button.Small)`
    flex: 1;
`;exports.ActionButton=C,exports.ActionButtonSection=z,exports.ArrowLeft=p,exports.ArrowRight=u,exports.Container=f,exports.DefaultView=g,exports.DropdownButton=b,exports.DropdownText=w,exports.Header=x,exports.HeaderArrowButton=$,exports.HeaderArrows=y,exports.HeaderInputDropdown=m,exports.IconChevronDown=c,exports.OptionsOverlay=h,exports.ToggleZone=v;
//# sourceMappingURL=calendar-manager.style.js.map
