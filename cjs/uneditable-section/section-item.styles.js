"use strict";var e=require("@lifesg/react-icons/exclamation-triangle"),r=require("styled-components"),o=require("../alert/alert.js"),t=require("../shared/component-loading-spinner/component-loading-spinner.js"),n=require("../v3_theme/index.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=l(r);const a=i.default.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return r.css`
                    grid-column: auto / span ${e.$fullWidth?1:4};
                `;case"full":return r.css`
                    grid-column: auto / span ${e.$fullWidth?2:8};
                `}}}

    ${n.V3_MediaQuery.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,s=i.default.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${n.V3_Colour["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${n.V3_Font.Spec["body-size-baseline"]};
        height: ${n.V3_Font.Spec["body-size-baseline"]};
    }
`,d=i.default.button`
    ${n.V3_Font["body-baseline-regular"]}
    color: ${n.V3_Colour.text};
    border: none;
    background: transparent;
    padding: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    overflow-wrap: anywhere;
    text-align: left;

    span {
        overflow-wrap: anywhere;
        text-align: left;
    }
`,c=i.default.span`
    color: ${n.V3_Colour["text-disabled"]};
`,u=i.default(t.ComponentLoadingSpinner)`
    margin-right: 0.5rem;
    color: ${n.V3_Colour["text-disabled"]};
`,p=i.default(e.ExclamationTriangleIcon)`
    color: ${n.V3_Colour["icon-warning"]};
    margin-right: 0.5rem;
    height: ${n.V3_Font.Spec["body-size-baseline"]};
    width: ${n.V3_Font.Spec["body-size-baseline"]};
`,g=i.default.span`
    color: ${n.V3_Colour["text-warning"]};
`,f=i.default.span`
    ${n.V3_Font["body-baseline-semibold"]}
    color: ${n.V3_Colour.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,m=i.default(o.Alert)`
    margin-top: 0.5rem;
`;exports.Clickable=d,exports.Container=a,exports.ErrorIcon=p,exports.ErrorLabel=g,exports.IconContainer=s,exports.LoadingLabel=c,exports.Spinner=u,exports.StyledAlert=m,exports.TryAgainLabel=f;
//# sourceMappingURL=section-item.styles.js.map
