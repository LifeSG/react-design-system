"use strict";var e=require("styled-components"),t=require("../v2_spec/text-spec/font-spec.js"),l=require("./text-style.js");const r=[t.FontFamily.OpenSans,t.FontFamily.PlusJakartaSans],a=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},i=(t,i)=>s=>{var o,c,u,d,m;const p=null===(c=(o=l.V2_TextStyle[t]).fontFamily)||void 0===c?void 0:c.call(o,s),v=null===(d=(u=l.V2_TextStyle[t]).fontWeight)||void 0===d?void 0:d.call(u,s),y=r.find((e=>Object.values(e).includes(p)));return y?e.css`
                font-family: ${a(y,i)||a(y,v)||p};
                font-weight: normal !important;
            `:e.css`
            font-family: ${p};
            font-weight: ${null!==(m=n(i)||v)&&void 0!==m?m:"normal"};
        `},n=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},s=t=>{if(t)return e.css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},o={getFontFamily:i,getTextStyle:(t,r,a=!1)=>n=>{var s,o,c;const u=l.V2_TextStyle[t],d=(null===(s=u.fontSize)||void 0===s?void 0:s.call(u,n))||1;return e.css`
            ${i(t,r)}
            font-size: ${d}rem !important;
            line-height: ${u.lineHeight}rem !important;
            letter-spacing: ${(null===(o=u.letterSpacing)||void 0===o?void 0:o.call(u,n))||0}rem !important;
            font-variant: ${(null===(c=u.fontVariant)||void 0===c?void 0:c.call(u,n))||"normal"};
            ${(()=>{const t=a?1.05:0;return e.css`
                margin-bottom: ${d*t}rem;
            `})()}
        `},getDisplayStyle:(t=!1,l=!1,r=void 0)=>l?e.css`
            display: block;
            ${s(r)}
        `:t?e.css`
            display: inline;
        `:e.css`
            display: block;
            ${s(r)}
        `};exports.V2_TextStyleHelper=o;
//# sourceMappingURL=helper.js.map
