"use strict";var e=require("styled-components"),t=require("../markup/markup.js"),r=require("../v3_theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(e);const a=i.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${t=>{if(t.$border)return e.css`
                ${r.V3_Border.Util["dashed-default"]({radius:r.V3_Radius.sm,thickness:r.V3_Border["width-040"],colour:r.V3_Colour.border})}
                padding: ${r.V3_Spacing["spacing-32"]};

                ${r.V3_MediaQuery.MaxWidth.sm} {
                    padding: ${r.V3_Spacing["spacing-32"]}
                        ${r.V3_Spacing["spacing-20"]};
                }
            `}}
`,n=i.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${r.V3_Spacing["spacing-32"]};
`,l=i.default.p`
    ${r.V3_Font["heading-xs-regular"]}
    color: ${r.V3_Colour.text};
    margin-bottom: ${r.V3_Spacing["spacing-8"]};
`,s=i.default(t.Markup)`
    color: ${r.V3_Colour.text};
`,u=i.default.p`
    ${r.V3_Font["body-md-regular"]}
    color: ${r.V3_Colour["text-subtler"]};
`,d=i.default(t.Markup)`
    color: ${r.V3_Colour["text-subtler"]};
`,p=i.default.ul`
    list-style-type: none;
`;exports.Container=a,exports.Description=u,exports.DescriptionContainer=d,exports.ListWrapper=p,exports.TextContainer=n,exports.Title=l,exports.TitleContainer=s;
//# sourceMappingURL=file-download.styles.js.map
