"use strict";var e=require("styled-components"),t=require("../shared/html-content/html-content.js"),o=require("../v3_theme/index.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(e);const n=i.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${t=>{if(t.$border)return e.css`
                ${o.V3_Border.Util["dashed-default"]({radius:o.V3_Radius.sm,thickness:o.V3_Border["width-040"],colour:o.V3_Colour.border})}
                padding: ${o.V3_Spacing["spacing-32"]};

                ${o.V3_MediaQuery.MaxWidth.sm} {
                    padding: ${o.V3_Spacing["spacing-32"]}
                        ${o.V3_Spacing["spacing-20"]};
                }
            `}}
`,l=i.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${o.V3_Spacing["spacing-32"]};
`,a=i.default.p`
    ${o.V3_Font["heading-xs-regular"]}
    color: ${o.V3_Colour.text};
    margin-bottom: ${o.V3_Spacing["spacing-8"]};
`,d=i.default.div`
    ${t.applyHtmlContentStyle({textSize:"heading-xs"})}
    color: ${o.V3_Colour.text};
`,s=i.default.p`
    ${o.V3_Font["body-md-regular"]}
    color: ${o.V3_Colour["text-subtler"]};
`,p=i.default.div`
    ${t.applyHtmlContentStyle({textSize:"body-md"})}
    color: ${o.V3_Colour["text-subtler"]};
`,u=i.default.ul`
    list-style-type: none;
`;exports.Container=n,exports.Description=s,exports.DescriptionContainer=p,exports.ListWrapper=u,exports.TextContainer=l,exports.Title=a,exports.TitleContainer=d;
//# sourceMappingURL=file-download.styles.js.map
