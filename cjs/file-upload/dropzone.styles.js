"use strict";var e=require("@lifesg/react-icons/cloud-arrow-up-fill"),r=require("styled-components"),t=require("../dashed-border/dashed-border.js"),i=require("../typography/index.js"),o=require("../v3_theme/index.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=a(r);const d=n.default(t.DashedBorder)`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$showDashedBorder)return r.css`
                padding: ${o.V3_Spacing["spacing-32"]};

                ${o.V3_MediaQuery.MaxWidth.md} {
                    padding: ${o.V3_Spacing["spacing-32"]}
                        ${o.V3_Spacing["spacing-20"]};
                }
            `}}
`,l=n.default.input`
    display: none;
`,s=n.default(t.DashedBorder)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,p=n.default(i.Typography.BodyMD)`
    color: ${o.V3_Colour["text-primary"]};
    text-align: center;
`,c=n.default(e.CloudArrowUpFillIcon)`
    color: ${o.V3_Colour["icon-primary"]};
    height: 4rem;
    width: 4rem;
`;exports.Container=d,exports.DragOverlay=s,exports.HiddenInput=l,exports.OverlayIcon=c,exports.OverlayText=p;
//# sourceMappingURL=dropzone.styles.js.map
