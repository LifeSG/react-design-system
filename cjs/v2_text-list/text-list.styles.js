"use strict";var e=require("styled-components"),t=require("../v2_color/color.js"),r=require("../v2_media/media.js"),o=require("../v2_text/helper.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=l(e);const s=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,n=i.default.ol`
    ${e=>s(e.bottomMargin)}
    margin-left: ${3}rem;

    ${r.V2_MediaQuery.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>o.V2_TextStyleHelper.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${t.V2_Color.Neutral[1]};
    }

    ${t=>{const{reversed:r}=t,o=t.counterType||"decimal",l=t.counterSeparator||")";return e.css`
            li:before {
                content: counter(list, ${o}) "${l}";
                counter-increment: ${r?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${t=>{const{reversed:r,start:o}=t;if(o){const t=r?o+1:o-1;return e.css`
                counter-reset: list ${t};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    ul > li:before {
        content: "";
    }
`,u=i.default.ul`
    ${e=>s(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>o.V2_TextStyleHelper.getTextStyle(e.size,"regular")}
        color: ${t.V2_Color.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`;exports.V2_StyledOrderedList=n,exports.V2_StyledUnorderedList=u;
//# sourceMappingURL=text-list.styles.js.map
