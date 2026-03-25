"use strict";var e=require("styled-components"),t=require("../button/button.js"),i=require("../v3_theme/index.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=r(e);const l=d.default.div`
    width: 100%;
    border-bottom: ${i.V3_Border["width-010"]} ${i.V3_Border.solid}
        ${i.V3_Colour.border};
`,o=d.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${i.V3_MediaQuery.MaxWidth.sm} {
        justify-content: flex-end;
    }

    ${t=>{if(!t.$showTitleInMobile&&!t.$hasExpandAll)return e.css`
                ${i.V3_MediaQuery.MaxWidth.sm} {
                    display: none;
                }
            `}}
`,n=d.default.h2`
    display: flex;
    align-self: flex-start;
    flex: 1;

    ${i.V3_Font["heading-md-bold"]}
    color: ${i.V3_Colour.text};

    ${i.V3_MediaQuery.MaxWidth.sm} {
        text-align: left;
    }

    ${t=>{if(!t.$showInMobile)return e.css`
                ${i.V3_MediaQuery.MaxWidth.sm} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,a=d.default(t.Button.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`;exports.Content=l,exports.ExpandCollapseLink=a,exports.Title=n,exports.TitleWrapper=o;
//# sourceMappingURL=accordion.style.js.map
