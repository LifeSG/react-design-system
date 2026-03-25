"use strict";var e=require("styled-components"),t=require("../v3_theme/index.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=s(e);const o=e.css`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    ${e=>e.$size&&t.V3_Font[`${e.$size}-regular`]}
    font-weight: ${t.V3_Font.Spec["weight-regular"]};
    color: ${t.V3_Colour.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,i=r.default.ol`
    ${o}

    margin-left: 3em;

    ${t.V3_MediaQuery.MaxWidth.lg} {
        margin-left: 2.5em;
    }

    li {
        position: relative;
    }

    ${t=>{const{reversed:s}=t,r=t.$counterType||"decimal",o=t.$counterSeparator||")";return e.css`
            li:before {
                content: counter(list, ${r}) "${o}";
                counter-increment: ${s?"list -1":"list"};
                position: absolute;
                left: -2em;
            }
        `}}

    ${t=>{const{reversed:s,start:r}=t;if(r){const t=s?r+1:r-1;return e.css`
                counter-reset: list ${t};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,n=r.default.ul`
    ${o}

    margin-left: ${e=>e.$hasCustomIcon?0:"2.5em"};
    list-style-type: ${e=>e.$hasCustomIcon?"none":e.$bulletType||"disc"};

    ${t=>t.$hasCustomIcon&&e.css`
            & > li {
                display: flex;
                align-items: flex-start;
                gap: 0.5em;
            }
        `}
`;exports.StyledOrderedList=i,exports.StyledUnorderedList=n;
//# sourceMappingURL=text-list.styles.js.map
