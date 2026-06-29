"use strict";var e=require("@lifesg/react-icons/cloud-arrow-up-fill"),r=require("styled-components"),i=require("../theme/index.js"),t=require("../typography/typography.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=o(r);const a=d.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return r.css`
                ${i.Border.Util["dashed-default"]({radius:i.Radius.sm,thickness:i.Border["width-040"],colour:i.Colour.border})}
                padding: ${i.Spacing["spacing-32"]};

                ${i.MediaQuery.MaxWidth.md} {
                    padding: ${i.Spacing["spacing-32"]} ${i.Spacing["spacing-20"]};
                }
            `}}
`,l=d.default.input`
    display: none;
`,n=d.default.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${i.Colour["bg-primary-subtler"]};
    ${i.Border.Util["dashed-default"]({radius:i.Radius.sm,thickness:i.Border["width-040"],colour:i.Colour["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,s=d.default(t.Typography.BodyMD)`
    color: ${i.Colour["text-primary"]};
    text-align: center;
`,u=d.default(e.CloudArrowUpFillIcon)`
    color: ${i.Colour["icon-primary"]};
    height: 4rem;
    width: 4rem;
`;exports.Container=a,exports.DragOverlay=n,exports.HiddenInput=l,exports.OverlayIcon=u,exports.OverlayText=s;
//# sourceMappingURL=dropzone.styles.js.map
