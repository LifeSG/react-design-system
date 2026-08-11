import{css as e}from"styled-components";import{FontFamily as t}from"../v2_spec/text-spec/font-spec.js";import{V2_TextStyle as l}from"./text-style.js";const a=[t.OpenSans,t.PlusJakartaSans],i=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},n=(t,n)=>o=>{var s,c,d,m,u;const p=null===(c=(s=l[t]).fontFamily)||void 0===c?void 0:c.call(s,o),f=null===(m=(d=l[t]).fontWeight)||void 0===m?void 0:m.call(d,o),v=a.find((e=>Object.values(e).includes(p)));return v?e`
                font-family: ${i(v,n)||i(v,f)||p};
                font-weight: normal !important;
            `:e`
            font-family: ${p};
            font-weight: ${null!==(u=r(n)||f)&&void 0!==u?u:"normal"};
        `},r=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},o=t=>{if(t)return e`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},s={getFontFamily:n,getTextStyle:(t,a,i=!1)=>r=>{var o,s,c;const d=l[t],m=(null===(o=d.fontSize)||void 0===o?void 0:o.call(d,r))||1;return e`
            ${n(t,a)}
            font-size: ${m}rem !important;
            line-height: ${d.lineHeight}rem !important;
            letter-spacing: ${(null===(s=d.letterSpacing)||void 0===s?void 0:s.call(d,r))||0}rem !important;
            font-variant: ${(null===(c=d.fontVariant)||void 0===c?void 0:c.call(d,r))||"normal"};
            ${e`
                margin-bottom: ${m*(i?1.05:0)}rem;
            `}
        `},getDisplayStyle:(t=!1,l=!1,a=void 0)=>l?e`
            display: block;
            ${o(a)}
        `:t?e`
            display: inline;
        `:e`
            display: block;
            ${o(a)}
        `};export{s as V2_TextStyleHelper};
//# sourceMappingURL=helper.js.map
