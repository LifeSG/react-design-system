import t,{css as e}from"styled-components";import{V2_Color as r}from"../v2_color/color.js";import{V2_MediaQuery as o}from"../v2_media/media.js";import{V2_TextStyleHelper as l}from"../v2_text/helper.js";const i=t=>`\n\tmargin-bottom: ${t||0}rem;\n`,n=t.ol`
    ${t=>i(t.bottomMargin)}
    margin-left: ${3}rem;

    ${o.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${t=>l.getTextStyle(t.size,"regular")}
        position: relative;
        color: ${r.Neutral[1]};
    }

    ${t=>{const{reversed:r}=t,o=t.counterType||"decimal",l=t.counterSeparator||")";return e`
            li:before {
                content: counter(list, ${o}) "${l}";
                counter-increment: ${r?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${t=>{const{reversed:r,start:o}=t;if(o){return e`
                counter-reset: list ${r?o+1:o-1};
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
`,s=t.ul`
    ${t=>i(t.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${t=>t.bulletType||"disc"};

    li {
        ${t=>l.getTextStyle(t.size,"regular")}
        color: ${r.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`;export{n as V2_StyledOrderedList,s as V2_StyledUnorderedList};
//# sourceMappingURL=text-list.styles.js.map
