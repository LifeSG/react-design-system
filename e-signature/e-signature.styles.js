import i,{css as t}from"styled-components";import{Button as e}from"../button/button.js";import{IconButton as o}from"../icon-button/icon-button.js";import{Modal as r}from"../modal/index.js";import{MediaQuery as n,Breakpoint as a,Colour as d,Border as s,Radius as g,Spacing as c,Font as l}from"../theme/index.js";import{Typography as h}from"../typography/typography.js";const p=t`
    ${i=>`\n        ${n.MaxWidth.sm(i)},\n        (orientation: landscape) and (max-height: ${a["sm-max"](i)}px)\n    `}
`,m=t`
    ${i=>`\n        @media (orientation: landscape) and (max-height: ${a["sm-max"](i)}px)\n    `}
`,$=i.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${i=>t`
            ${s.Util["dashed-default"]({radius:g.sm,thickness:s["width-040"],colour:i.$disabled?d["border-disabled"]:d.border})}

            background-color: ${i.$disabled?d["bg-disabled"]:d.bg};
        `}
    height: 14.125rem;
`,b=i(e.Default)`
    width: fit-content;
    margin: 0 ${c["spacing-20"]};

    &:disabled {
        border-color: ${d["border-strong"]};
    }
`,u=i(o)`
    position: absolute;
    top: ${c["spacing-16"]};
    right: ${c["spacing-16"]};

    &:disabled {
        border-color: ${d["border-strong"]};
    }
`,x=i.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${c["spacing-16"]}) * 2);
    height: 100%;

    ${i=>{var t;return"dark"===(null===(t=i.theme)||void 0===t?void 0:t.colourMode)&&"filter: invert(1);"}}
`,f=i.div`
    background: ${d["bg-primary-subtlest"]};
    border: ${s["width-010"]} ${s.solid} ${d.border};
    border-radius: ${g.sm};
    margin: 0 ${c["spacing-20"]};
    padding: ${c["spacing-16"]};
    display: flex;
    gap: ${c["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,v=i(h.BodySM)`
    margin-top: ${c["spacing-16"]};
`,w=i(r)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,y=i.div`
    width: 100%;
    margin: auto;
    padding: ${c["layout-xxl"]} ${c["layout-sm"]};

    ${p} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,j=i(r.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${c["spacing-16"]};

    ${p} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${c["spacing-8"]};
        --close-button-right-inset: ${c["spacing-20"]};
    }
`,k=i.h2`
    ${l["body-baseline-semibold"]}
    color: ${d.text};
    margin-bottom: ${c["spacing-16"]};
    text-align: center;

    ${p} {
        ${l["body-md-semibold"]}
        margin: ${c["spacing-12"]} 0;
    }
`,M=i.div`
    width: 100%;
    height: 20rem;
    border-radius: ${g.lg};
    overflow: hidden;

    ${p} {
        border-radius: 0;
        flex: 1;
    }

    ${m} {
        background: ${d["bg-strong"]};
    }
`,W=i.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${d["bg-stronger"]};
    margin: auto;

    ${p} {
        aspect-ratio: 4/3;
    }
    ${n.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${m} {
        width: auto;
        height: 100%;
    }
`,B=i.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${d["border-strong"]};
    pointer-events: none;

    ${p} {
        width: calc(100% - ${c["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,D=i.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${c["spacing-16"]};

    ${n.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${c["spacing-16"]} ${c["spacing-24"]}
            ${c["spacing-48"]};
        gap: ${c["spacing-16"]};
    }

    ${m} {
        flex-direction: row;
        margin: ${c["spacing-16"]} ${c["spacing-20"]};
    }
`,S=i(e.Default)`
    width: 8.5rem;
    ${n.MaxWidth.sm} {
        width: 100%;
    }
    ${m} {
        height: 2.5rem;
    }
`,U=i.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,X=i.canvas`
    cursor: crosshair;

    ${i=>{var t;return"dark"===(null===(t=i.theme)||void 0===t?void 0:t.colourMode)&&"filter: invert(1);"}}
`;export{b as AddSignatureButton,M as ESignatureContainer,W as ESignatureDrawable,u as EditSignatureButton,y as GrowContainer,v as Instructions,S as ModalActionButton,j as ModalBox,D as ModalButtons,k as ModalTitle,f as ProgressBox,w as ScrollableModal,$ as SignatureArea,X as SignatureCanvas,U as SignatureCanvasContainer,B as SignatureLine,x as SignaturePreviewImage};
//# sourceMappingURL=e-signature.styles.js.map
