"use strict";var e=require("styled-components"),t=require("../shared/html-content/html-content.js"),o=require("../theme/index.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(e);const n=i.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${t=>{if(t.$border)return e.css`
                ${o.Border.Util["dashed-default"]({radius:o.Radius.sm,thickness:o.Border["width-040"],colour:o.Colour.border})}
                padding: ${o.Spacing["spacing-32"]};

                ${o.MediaQuery.MaxWidth.sm} {
                    padding: ${o.Spacing["spacing-32"]} ${o.Spacing["spacing-20"]};
                }
            `}}
`,l=i.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${o.Spacing["spacing-32"]};
`,a=i.default.p`
    ${o.Font["heading-xs-regular"]}
    color: ${o.Colour.text};
    margin-bottom: ${o.Spacing["spacing-8"]};
`,d=i.default.div`
    ${t.applyHtmlContentStyle({textSize:"heading-xs"})}
    color: ${o.Colour.text};
`,s=i.default.p`
    ${o.Font["body-md-regular"]}
    color: ${o.Colour["text-subtler"]};
`,p=i.default.div`
    ${t.applyHtmlContentStyle({textSize:"body-md"})}
    color: ${o.Colour["text-subtler"]};
`,u=i.default.ul`
    list-style-type: none;
`;exports.Container=n,exports.Description=s,exports.DescriptionContainer=p,exports.ListWrapper=u,exports.TextContainer=l,exports.Title=a,exports.TitleContainer=d;
//# sourceMappingURL=file-download.styles.js.map
