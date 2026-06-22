"use strict";var e=require("styled-components"),t=require("../button/button.js"),i=require("../icon-button/icon-button.js"),a=require("../modal/index.js"),o=require("../theme/index.js"),r=require("../typography/typography.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=n(e);const s=e.css`
    ${e=>`\n        ${o.MediaQuery.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${o.Breakpoint["sm-max"](e)}px)\n    `}
`,g=e.css`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${o.Breakpoint["sm-max"](e)}px)\n    `}
`,l=d.default.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${t=>e.css`
            ${o.Border.Util["dashed-default"]({radius:o.Radius.sm,thickness:o.Border["width-040"],colour:t.$disabled?o.Colour["border-disabled"]:o.Colour.border})}

            background-color: ${t.$disabled?o.Colour["bg-disabled"]:o.Colour.bg};
        `}
    height: 14.125rem;
`,c=d.default(t.Button.Default)`
    width: fit-content;
    margin: 0 ${o.Spacing["spacing-20"]};

    &:disabled {
        border-color: ${o.Colour["border-strong"]};
    }
`,p=d.default(i.IconButton)`
    position: absolute;
    top: ${o.Spacing["spacing-16"]};
    right: ${o.Spacing["spacing-16"]};

    &:disabled {
        border-color: ${o.Colour["border-strong"]};
    }
`,u=d.default.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${o.Spacing["spacing-16"]}) * 2);
    height: 100%;
`,h=d.default.div`
    background: ${o.Colour["bg-primary-subtlest"]};
    border: ${o.Border["width-010"]} ${o.Border.solid} ${o.Colour.border};
    border-radius: ${o.Radius.sm};
    margin: 0 ${o.Spacing["spacing-20"]};
    padding: ${o.Spacing["spacing-16"]};
    display: flex;
    gap: ${o.Spacing["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,$=d.default(r.Typography.BodySM)`
    margin-top: ${o.Spacing["spacing-16"]};
`,x=d.default(a.Modal)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,b=d.default.div`
    width: 100%;
    margin: auto;
    padding: ${o.Spacing["layout-xxl"]} ${o.Spacing["layout-sm"]};

    ${s} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,m=d.default(a.Modal.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${o.Spacing["spacing-16"]};

    ${s} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${o.Spacing["spacing-8"]};
        --close-button-right-inset: ${o.Spacing["spacing-20"]};
    }
`,f=d.default.h2`
    ${o.Font["body-baseline-semibold"]}
    color: ${o.Colour.text};
    margin-bottom: ${o.Spacing["spacing-16"]};
    text-align: center;

    ${s} {
        ${o.Font["body-md-semibold"]}
        margin: ${o.Spacing["spacing-12"]} 0;
    }
`,S=d.default.div`
    width: 100%;
    height: 20rem;
    border-radius: ${o.Radius.lg};
    overflow: hidden;

    ${s} {
        border-radius: 0;
        flex: 1;
    }

    ${g} {
        background: ${o.Colour["bg-strong"]};
    }
`,w=d.default.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${o.Colour["bg-stronger"]};
    margin: auto;

    ${s} {
        aspect-ratio: 4/3;
    }
    ${o.MediaQuery.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${g} {
        width: auto;
        height: 100%;
    }
`,y=d.default.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${o.Colour["border-strong"]};
    pointer-events: none;

    ${s} {
        width: calc(100% - ${o.Spacing["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,v=d.default.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${o.Spacing["spacing-16"]};

    ${o.MediaQuery.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${o.Spacing["spacing-16"]} ${o.Spacing["spacing-24"]}
            ${o.Spacing["spacing-48"]};
        gap: ${o.Spacing["spacing-16"]};
    }

    ${g} {
        flex-direction: row;
        margin: ${o.Spacing["spacing-16"]} ${o.Spacing["spacing-20"]};
    }
`,B=d.default(t.Button.Default)`
    width: 8.5rem;
    ${o.MediaQuery.MaxWidth.sm} {
        width: 100%;
    }
    ${g} {
        height: 2.5rem;
    }
`,C=d.default.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,M=d.default.canvas`
    cursor: crosshair;
`;exports.AddSignatureButton=c,exports.ESignatureContainer=S,exports.ESignatureDrawable=w,exports.EditSignatureButton=p,exports.GrowContainer=b,exports.Instructions=$,exports.ModalActionButton=B,exports.ModalBox=m,exports.ModalButtons=v,exports.ModalTitle=f,exports.ProgressBox=h,exports.ScrollableModal=x,exports.SignatureArea=l,exports.SignatureCanvas=M,exports.SignatureCanvasContainer=C,exports.SignatureLine=y,exports.SignaturePreviewImage=u;
//# sourceMappingURL=e-signature.styles.js.map
