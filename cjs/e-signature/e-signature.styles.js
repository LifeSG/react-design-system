"use strict";var e=require("styled-components"),t=require("../button/button.js"),i=require("../dashed-border/dashed-border.js"),r=require("../icon-button/icon-button.js"),a=require("../modal/index.js");require("../theme/theme-provider/index.js"),require("react"),require("../theme/theme-provider/context.js");var o=require("../theme/tokens/border.js"),n=require("../theme/tokens/colour.js");require("../theme/tokens/font.js"),require("../theme/tokens/media-query.js");var d=require("../theme/tokens/radius.js");require("../util/calendar-helper.js"),require("../external/dayjs/dayjs.min.js"),require("../util/string-helper.js");var s=require("../typography/index.js"),u=require("../v3_theme/index.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var g=l(e);const c=e.css`
    ${e=>`\n        ${u.V3_MediaQuery.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${u.V3_Breakpoint["sm-max"](e)}px)\n    `}
`,p=e.css`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${u.V3_Breakpoint["sm-max"](e)}px)\n    `}
`,h=g.default(i.DashedBorder).attrs((e=>({thickness:o.Border["width-040"],radius:d.Radius.sm,colour:e.$disabled?n.Colour["border-disabled"]:n.Colour.border,backgroundColor:e.$disabled?n.Colour["bg-disabled"]:n.Colour.bg})))`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14.125rem;
`,m=g.default(t.Button.Default)`
    width: fit-content;
    margin: 0 ${u.V3_Spacing["spacing-20"]};

    &:disabled {
        border-color: ${u.V3_Colour["border-strong"]};
    }
`,x=g.default(r.IconButton)`
    position: absolute;
    top: ${u.V3_Spacing["spacing-16"]};
    right: ${u.V3_Spacing["spacing-16"]};

    &:disabled {
        border-color: ${u.V3_Colour["border-strong"]};
    }
`,$=g.default.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${u.V3_Spacing["spacing-16"]}) * 2);
    height: 100%;
`,b=g.default.div`
    background: ${u.V3_Colour["bg-primary-subtlest"]};
    border: ${u.V3_Border["width-010"]} ${u.V3_Border.solid}
        ${u.V3_Colour.border};
    border-radius: ${u.V3_Radius.sm};
    margin: 0 ${u.V3_Spacing["spacing-20"]};
    padding: ${u.V3_Spacing["spacing-16"]};
    display: flex;
    gap: ${u.V3_Spacing["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,f=g.default(s.Typography.BodySM)`
    margin-top: ${u.V3_Spacing["spacing-16"]};
`,_=g.default(a.Modal)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,V=g.default.div`
    width: 100%;
    margin: auto;
    padding: ${u.V3_Spacing["layout-xxl"]} ${u.V3_Spacing["layout-sm"]};

    ${c} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,S=g.default(a.Modal.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${u.V3_Spacing["spacing-16"]};

    ${c} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${u.V3_Spacing["spacing-8"]};
        --close-button-right-inset: ${u.V3_Spacing["spacing-20"]};
    }
`,y=g.default.h2`
    ${u.V3_Font["body-baseline-semibold"]}
    color: ${u.V3_Colour.text};
    margin-bottom: ${u.V3_Spacing["spacing-16"]};
    text-align: center;

    ${c} {
        ${u.V3_Font["body-md-semibold"]}
        margin: ${u.V3_Spacing["spacing-12"]} 0;
    }
`,w=g.default.div`
    width: 100%;
    height: 20rem;
    border-radius: ${u.V3_Radius.lg};
    overflow: hidden;

    ${c} {
        border-radius: 0;
        flex: 1;
    }

    ${p} {
        background: ${u.V3_Colour["bg-strong"]};
    }
`,v=g.default.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${u.V3_Colour["bg-stronger"]};
    margin: auto;

    ${c} {
        aspect-ratio: 4/3;
    }
    ${u.V3_MediaQuery.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${p} {
        width: auto;
        height: 100%;
    }
`,j=g.default.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${u.V3_Colour["border-strong"]};
    pointer-events: none;

    ${c} {
        width: calc(100% - ${u.V3_Spacing["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,q=g.default.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${u.V3_Spacing["spacing-16"]};

    ${u.V3_MediaQuery.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${u.V3_Spacing["spacing-16"]} ${u.V3_Spacing["spacing-24"]}
            ${u.V3_Spacing["spacing-48"]};
        gap: ${u.V3_Spacing["spacing-16"]};
    }

    ${p} {
        flex-direction: row;
        margin: ${u.V3_Spacing["spacing-16"]} ${u.V3_Spacing["spacing-20"]};
    }
`,C=g.default(t.Button.Default)`
    width: 8.5rem;
    ${u.V3_MediaQuery.MaxWidth.sm} {
        width: 100%;
    }
    ${p} {
        height: 2.5rem;
    }
`,B=g.default.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,M=g.default.canvas`
    cursor: crosshair;
`;exports.AddSignatureButton=m,exports.ESignatureContainer=w,exports.ESignatureDrawable=v,exports.EditSignatureButton=x,exports.GrowContainer=V,exports.Instructions=f,exports.ModalActionButton=C,exports.ModalBox=S,exports.ModalButtons=q,exports.ModalTitle=y,exports.ProgressBox=b,exports.ScrollableModal=_,exports.SignatureArea=h,exports.SignatureCanvas=M,exports.SignatureCanvasContainer=B,exports.SignatureLine=j,exports.SignaturePreviewImage=$;
//# sourceMappingURL=e-signature.styles.js.map
