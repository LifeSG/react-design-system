import i,{css as t}from"styled-components";import{Button as e}from"../button/button.js";import{DashedBorder as o}from"../dashed-border/dashed-border.js";import{IconButton as r}from"../icon-button/icon-button.js";import{Modal as n}from"../modal/index.js";import"../theme/theme-provider/index.js";import"react";import"../theme/theme-provider/context.js";import{Border as a}from"../theme/tokens/border.js";import{Colour as s}from"../theme/tokens/colour.js";import"../theme/tokens/font.js";import"../theme/tokens/media-query.js";import{Radius as d}from"../theme/tokens/radius.js";import"../util/calendar-helper.js";import"../external/dayjs/dayjs.min.js";import"../util/string-helper.js";import{Typography as m}from"../typography/index.js";import{V3_MediaQuery as p,V3_Breakpoint as g,V3_Spacing as h,V3_Colour as c,V3_Border as l,V3_Radius as $,V3_Font as b}from"../v3_theme/index.js";const u=t`
    ${i=>`\n        ${p.MaxWidth.sm(i)},\n        (orientation: landscape) and (max-height: ${g["sm-max"](i)}px)\n    `}
`,x=t`
    ${i=>`\n        @media (orientation: landscape) and (max-height: ${g["sm-max"](i)}px)\n    `}
`,f=i(o).attrs((i=>({thickness:a["width-040"],radius:d.sm,colour:i.$disabled?s["border-disabled"]:s.border,backgroundColor:i.$disabled?s["bg-disabled"]:s.bg})))`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14.125rem;
`,w=i(e.Default)`
    width: fit-content;
    margin: 0 ${h["spacing-20"]};

    &:disabled {
        border-color: ${c["border-strong"]};
    }
`,j=i(r)`
    position: absolute;
    top: ${h["spacing-16"]};
    right: ${h["spacing-16"]};

    &:disabled {
        border-color: ${c["border-strong"]};
    }
`,y=i.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${h["spacing-16"]}) * 2);
    height: 100%;
`,v=i.div`
    background: ${c["bg-primary-subtlest"]};
    border: ${l["width-010"]} ${l.solid}
        ${c.border};
    border-radius: ${$.sm};
    margin: 0 ${h["spacing-20"]};
    padding: ${h["spacing-16"]};
    display: flex;
    gap: ${h["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,k=i(m.BodySM)`
    margin-top: ${h["spacing-16"]};
`,M=i(n)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,W=i.div`
    width: 100%;
    margin: auto;
    padding: ${h["layout-xxl"]} ${h["layout-sm"]};

    ${u} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,B=i(n.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${h["spacing-16"]};

    ${u} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${h["spacing-8"]};
        --close-button-right-inset: ${h["spacing-20"]};
    }
`,D=i.h2`
    ${b["body-baseline-semibold"]}
    color: ${c.text};
    margin-bottom: ${h["spacing-16"]};
    text-align: center;

    ${u} {
        ${b["body-md-semibold"]}
        margin: ${h["spacing-12"]} 0;
    }
`,q=i.div`
    width: 100%;
    height: 20rem;
    border-radius: ${$.lg};
    overflow: hidden;

    ${u} {
        border-radius: 0;
        flex: 1;
    }

    ${x} {
        background: ${c["bg-strong"]};
    }
`,C=i.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${c["bg-stronger"]};
    margin: auto;

    ${u} {
        aspect-ratio: 4/3;
    }
    ${p.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${x} {
        width: auto;
        height: 100%;
    }
`,S=i.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${c["border-strong"]};
    pointer-events: none;

    ${u} {
        width: calc(100% - ${h["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,X=i.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${h["spacing-16"]};

    ${p.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${h["spacing-16"]} ${h["spacing-24"]}
            ${h["spacing-48"]};
        gap: ${h["spacing-16"]};
    }

    ${x} {
        flex-direction: row;
        margin: ${h["spacing-16"]} ${h["spacing-20"]};
    }
`,_=i(e.Default)`
    width: 8.5rem;
    ${p.MaxWidth.sm} {
        width: 100%;
    }
    ${x} {
        height: 2.5rem;
    }
`,z=i.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,A=i.canvas`
    cursor: crosshair;
`;export{w as AddSignatureButton,q as ESignatureContainer,C as ESignatureDrawable,j as EditSignatureButton,W as GrowContainer,k as Instructions,_ as ModalActionButton,B as ModalBox,X as ModalButtons,D as ModalTitle,v as ProgressBox,M as ScrollableModal,f as SignatureArea,A as SignatureCanvas,z as SignatureCanvasContainer,S as SignatureLine,y as SignaturePreviewImage};
//# sourceMappingURL=e-signature.styles.js.map
