"use strict";var e=require("styled-components"),i=require("../button/button.js"),t=require("../dashed-border/dashed-border.js"),r=require("../modal/index.js");require("../theme/theme-provider/index.js"),require("react"),require("../theme/theme-provider/context.js");var a=require("../theme/tokens/border.js"),o=require("../theme/tokens/colour.js");require("../theme/tokens/font.js"),require("../theme/tokens/media-query.js");var n=require("../theme/tokens/radius.js");require("../util/calendar-helper.js"),require("../external/dayjs/dayjs.min.js"),require("../util/simple-id-generator.js"),require("../util/string-helper.js"),require("@react-aria/live-announcer"),require("../theme/utils/use-media-query.js");var d=require("../typography/index.js"),s=require("../v3_theme/index.js");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=u(e);const g=e.css`
    ${e=>`\n        ${s.V3_MediaQuery.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${s.V3_Breakpoint["sm-max"](e)}px)\n    `}
`,p=e.css`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${s.V3_Breakpoint["sm-max"](e)}px)\n    `}
`,c=l.default(t.DashedBorder).attrs((e=>({thickness:a.Border["width-040"],radius:n.Radius.sm,colour:e.$disabled?o.Colour["border-disabled"]:o.Colour.border,backgroundColor:e.$disabled?o.Colour["bg-disabled"]:o.Colour.bg})))`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14.125rem;
`,h=l.default(i.Button.Default)`
    width: fit-content;
    margin: 0 ${s.V3_Spacing["spacing-20"]};

    &:disabled {
        border-color: ${s.V3_Colour["border-strong"]};
    }
`,m=l.default(i.Button)`
    position: absolute;
    top: ${s.V3_Spacing["spacing-16"]};
    right: ${s.V3_Spacing["spacing-16"]};

    &:disabled {
        border-color: ${s.V3_Colour["border-strong"]};
    }
`,x=l.default.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${s.V3_Spacing["spacing-16"]}) * 2);
    height: 100%;
`,$=l.default.div`
    background: ${s.V3_Colour["bg-primary-subtlest"]};
    border: ${s.V3_Border["width-010"]} ${s.V3_Border.solid}
        ${s.V3_Colour.border};
    border-radius: ${s.V3_Radius.sm};
    margin: 0 ${s.V3_Spacing["spacing-20"]};
    padding: ${s.V3_Spacing["spacing-16"]};
    display: flex;
    gap: ${s.V3_Spacing["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,b=l.default(d.Typography.BodySM)`
    margin-top: ${s.V3_Spacing["spacing-16"]};
`,f=l.default(r.Modal)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,_=l.default.div`
    width: 100%;
    margin: auto;
    padding: ${s.V3_Spacing["layout-xxl"]} ${s.V3_Spacing["layout-sm"]};

    ${g} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,V=l.default(r.Modal.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${s.V3_Spacing["spacing-16"]};

    ${g} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${s.V3_Spacing["spacing-8"]};
        --close-button-right-inset: ${s.V3_Spacing["spacing-20"]};
    }
`,S=l.default.h2`
    ${s.V3_Font["body-baseline-semibold"]}
    color: ${s.V3_Colour.text};
    margin-bottom: ${s.V3_Spacing["spacing-16"]};
    text-align: center;

    ${g} {
        ${s.V3_Font["body-md-semibold"]}
        margin: ${s.V3_Spacing["spacing-12"]} 0;
    }
`,y=l.default.div`
    width: 100%;
    height: 20rem;
    border-radius: ${s.V3_Radius.lg};
    overflow: hidden;

    ${g} {
        border-radius: 0;
        flex: 1;
    }

    ${p} {
        background: ${s.V3_Colour["bg-strong"]};
    }
`,v=l.default.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${s.V3_Colour["bg-stronger"]};
    margin: auto;

    ${g} {
        aspect-ratio: 4/3;
    }
    ${s.V3_MediaQuery.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${p} {
        width: auto;
        height: 100%;
    }
`,w=l.default.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${s.V3_Colour["border-strong"]};
    pointer-events: none;

    ${g} {
        width: calc(100% - ${s.V3_Spacing["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,j=l.default.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${s.V3_Spacing["spacing-16"]};

    ${s.V3_MediaQuery.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${s.V3_Spacing["spacing-16"]} ${s.V3_Spacing["spacing-24"]}
            ${s.V3_Spacing["spacing-48"]};
        gap: ${s.V3_Spacing["spacing-16"]};
    }

    ${p} {
        flex-direction: row;
        margin: ${s.V3_Spacing["spacing-16"]} ${s.V3_Spacing["spacing-20"]};
    }
`,q=l.default(i.Button.Default)`
    width: 8.5rem;
    ${s.V3_MediaQuery.MaxWidth.sm} {
        width: 100%;
    }
    ${p} {
        height: 2.5rem;
    }
`,C=l.default.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,B=l.default.canvas`
    cursor: crosshair;
`;exports.AddSignatureButton=h,exports.ESignatureContainer=y,exports.ESignatureDrawable=v,exports.EditSignatureButton=m,exports.GrowContainer=_,exports.Instructions=b,exports.ModalActionButton=q,exports.ModalBox=V,exports.ModalButtons=j,exports.ModalTitle=S,exports.ProgressBox=$,exports.ScrollableModal=f,exports.SignatureArea=c,exports.SignatureCanvas=B,exports.SignatureCanvasContainer=C,exports.SignatureLine=w,exports.SignaturePreviewImage=x;
//# sourceMappingURL=e-signature.styles.js.map
