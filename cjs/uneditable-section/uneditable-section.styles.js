"use strict";var r=require("styled-components"),e=require("../layout/index.js"),t=require("../typography/index.js"),a=require("../v3_theme/index.js");function o(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var n=o(r);const d=r.css`
    grid-column: ${r=>r.$stretch?"1 / -1":"span 8"};

    ${a.V3_MediaQuery.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,i=n.default(e.Layout.Content)`
    background: ${({$background:r})=>r?a.V3_Colour["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,u=n.default.div`
    background: ${({$background:r})=>r?a.V3_Colour["bg-strong"]:"transparent"};
`,p=n.default(t.Typography.HeadingSM)`
    margin-bottom: 1rem;
    ${d}
`,m=n.default(t.Typography.BodyBL)`
    margin-bottom: 2rem;
    ${d}
`,l=n.default.div`
    ${d}
`,s=n.default.ul`
    ${d}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: ${({$fullWidth:r})=>r?"repeat(2, minmax(0, 1fr))":"repeat(8, minmax(0, 1fr))"};

    ${a.V3_MediaQuery.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${a.V3_MediaQuery.MaxWidth.sm} {
        column-gap: 1rem;
    }

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`;exports.CustomSection=l,exports.Description=m,exports.FullWidthWrapper=u,exports.GridUl=s,exports.Title=p,exports.Wrapper=i;
//# sourceMappingURL=uneditable-section.styles.js.map
