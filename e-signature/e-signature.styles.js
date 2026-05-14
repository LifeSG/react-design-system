import i,{css as e}from"styled-components";import{Button as t}from"../button/button.js";import{DashedBorder as o}from"../dashed-border/dashed-border.js";import{Modal as r}from"../modal/index.js";import"../theme/theme-provider/index.js";import"react";import"../theme/theme-provider/context.js";import{Border as a}from"../theme/tokens/border.js";import{Colour as n}from"../theme/tokens/colour.js";import"../theme/tokens/font.js";import"../theme/tokens/media-query.js";import{Radius as s}from"../theme/tokens/radius.js";import"../util/calendar-helper.js";import"../external/dayjs/dayjs.min.js";import"../util/simple-id-generator.js";import"../util/string-helper.js";import"@react-aria/live-announcer";import{Typography as d}from"../typography/index.js";import{V3_MediaQuery as m,V3_Breakpoint as p,V3_Spacing as g,V3_Colour as h,V3_Border as c,V3_Radius as l,V3_Font as $}from"../v3_theme/index.js";const b=e`
    ${i=>`\n        ${m.MaxWidth.sm(i)},\n        (orientation: landscape) and (max-height: ${p["sm-max"](i)}px)\n    `}
`,u=e`
    ${i=>`\n        @media (orientation: landscape) and (max-height: ${p["sm-max"](i)}px)\n    `}
`,x=i(o).attrs((i=>({thickness:a["width-040"],radius:s.sm,colour:i.$disabled?n["border-disabled"]:n.border,backgroundColor:i.$disabled?n["bg-disabled"]:n.bg})))`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14.125rem;
`,f=i(t.Default)`
    width: fit-content;
    margin: 0 ${g["spacing-20"]};

    &:disabled {
        border-color: ${h["border-strong"]};
    }
`,w=i(t)`
    position: absolute;
    top: ${g["spacing-16"]};
    right: ${g["spacing-16"]};

    &:disabled {
        border-color: ${h["border-strong"]};
    }
`,j=i.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${g["spacing-16"]}) * 2);
    height: 100%;
`,y=i.div`
    background: ${h["bg-primary-subtlest"]};
    border: ${c["width-010"]} ${c.solid}
        ${h.border};
    border-radius: ${l.sm};
    margin: 0 ${g["spacing-20"]};
    padding: ${g["spacing-16"]};
    display: flex;
    gap: ${g["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,v=i(d.BodySM)`
    margin-top: ${g["spacing-16"]};
`,k=i(r)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,M=i.div`
    width: 100%;
    margin: auto;
    padding: ${g["layout-xxl"]} ${g["layout-sm"]};

    ${b} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,W=i(r.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${g["spacing-16"]};

    ${b} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${g["spacing-8"]};
        --close-button-right-inset: ${g["spacing-20"]};
    }
`,B=i.h2`
    ${$["body-baseline-semibold"]}
    color: ${h.text};
    margin-bottom: ${g["spacing-16"]};
    text-align: center;

    ${b} {
        ${$["body-md-semibold"]}
        margin: ${g["spacing-12"]} 0;
    }
`,D=i.div`
    width: 100%;
    height: 20rem;
    border-radius: ${l.lg};
    overflow: hidden;

    ${b} {
        border-radius: 0;
        flex: 1;
    }

    ${u} {
        background: ${h["bg-strong"]};
    }
`,q=i.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${h["bg-stronger"]};
    margin: auto;

    ${b} {
        aspect-ratio: 4/3;
    }
    ${m.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${u} {
        width: auto;
        height: 100%;
    }
`,C=i.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${h["border-strong"]};
    pointer-events: none;

    ${b} {
        width: calc(100% - ${g["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,S=i.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${g["spacing-16"]};

    ${m.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${g["spacing-16"]} ${g["spacing-24"]}
            ${g["spacing-48"]};
        gap: ${g["spacing-16"]};
    }

    ${u} {
        flex-direction: row;
        margin: ${g["spacing-16"]} ${g["spacing-20"]};
    }
`,X=i(t.Default)`
    width: 8.5rem;
    ${m.MaxWidth.sm} {
        width: 100%;
    }
    ${u} {
        height: 2.5rem;
    }
`,_=i.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,z=i.canvas`
    cursor: crosshair;
`;export{f as AddSignatureButton,D as ESignatureContainer,q as ESignatureDrawable,w as EditSignatureButton,M as GrowContainer,v as Instructions,X as ModalActionButton,W as ModalBox,S as ModalButtons,B as ModalTitle,y as ProgressBox,k as ScrollableModal,x as SignatureArea,z as SignatureCanvas,_ as SignatureCanvasContainer,C as SignatureLine,j as SignaturePreviewImage};
//# sourceMappingURL=e-signature.styles.js.map
