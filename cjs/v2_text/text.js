"use strict";var e=require("../_virtual/_tslib.js"),t=require("react/jsx-runtime"),l=require("@lifesg/react-icons/external"),r=require("styled-components"),a=require("../v2_color/color.js"),p=require("./helper.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o,s=i(r);exports.V2_Text=void 0,(o=exports.V2_Text||(exports.V2_Text={})).D1=s.default.h1`
        ${e=>r.css`
                ${p.V2_TextStyleHelper.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${a.V2_Color.Neutral[1]};
                ${p.V2_TextStyleHelper.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,o.D2=s.default.h1`
        ${e=>r.css`
                ${p.V2_TextStyleHelper.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${a.V2_Color.Neutral[1]};
                ${p.V2_TextStyleHelper.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,o.D3=s.default.h1`
        ${e=>r.css`
                ${p.V2_TextStyleHelper.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${a.V2_Color.Neutral[1]};
                ${p.V2_TextStyleHelper.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,o.D4=s.default.h1`
        ${e=>r.css`
                ${p.V2_TextStyleHelper.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${a.V2_Color.Neutral[1]};
                ${p.V2_TextStyleHelper.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,o.DBody=s.default.h1`
        ${e=>r.css`
                ${p.V2_TextStyleHelper.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${a.V2_Color.Neutral[1]};
                ${p.V2_TextStyleHelper.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,o.H1=s.default.h1`
        ${e=>r.css`
                ${p.V2_TextStyleHelper.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${a.V2_Color.Neutral[1]};
                ${p.V2_TextStyleHelper.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,o.H2=s.default.h2`
        ${e=>r.css`
                ${p.V2_TextStyleHelper.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${a.V2_Color.Neutral[1]};
                ${p.V2_TextStyleHelper.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,o.H3=s.default.h3`
        ${e=>r.css`
                ${p.V2_TextStyleHelper.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${a.V2_Color.Neutral[1]};
                ${p.V2_TextStyleHelper.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,o.H4=s.default.h4`
        ${e=>r.css`
                ${p.V2_TextStyleHelper.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${a.V2_Color.Neutral[1]};
                ${p.V2_TextStyleHelper.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,o.H5=s.default.h5`
        ${e=>r.css`
                ${p.V2_TextStyleHelper.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${a.V2_Color.Neutral[1]};
                ${p.V2_TextStyleHelper.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,o.H6=s.default.h6`
        ${e=>r.css`
                ${p.V2_TextStyleHelper.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${a.V2_Color.Neutral[1]};
                ${p.V2_TextStyleHelper.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,o.Body=s.default.p`
        ${e=>r.css`
                ${p.V2_TextStyleHelper.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${a.V2_Color.Neutral[1]};
                ${p.V2_TextStyleHelper.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,o.BodySmall=s.default.p`
        ${e=>r.css`
                ${p.V2_TextStyleHelper.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${a.V2_Color.Neutral[1]};
                ${p.V2_TextStyleHelper.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,o.XSmall=s.default.span`
        ${e=>r.css`
                ${p.V2_TextStyleHelper.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${a.V2_Color.Neutral[1]};
                ${p.V2_TextStyleHelper.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,o.Hyperlink={Default:e=>x(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>x(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))};const y=s.default.a`
    ${e=>r.css`
            ${p.V2_TextStyleHelper.getTextStyle(e.textStyle,e.weight)}
            color: ${a.V2_Color.Primary};
            text-decoration: none;

            &:hover,
            &:active,
            &:focus {
                color: ${a.V2_Color.Secondary};

                svg {
                    color: ${a.V2_Color.Secondary};
                }
            }
        `}
`,g=s.default(l.ExternalIcon)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,x=l=>{var{external:r=!1,children:a}=l,p=e.__rest(l,["external","children"]);return t.jsxs(y,Object.assign({},p,{children:[a,r&&t.jsx(g,{})]}))};
//# sourceMappingURL=text.js.map
