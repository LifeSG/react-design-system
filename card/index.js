import{jsxs as t,jsx as e}from"react/jsx-runtime";import{ExternalIcon as n}from"@lifesg/react-icons/external";import r,{css as i}from"styled-components";function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l=Array.isArray,c="object"==typeof a&&a&&a.Object===Object&&a,g="object"==typeof self&&self&&self.Object===Object&&self,h=c||g||Function("return this")(),f=h.Symbol,d=f,u=Object.prototype,p=u.hasOwnProperty,s=u.toString,F=d?d.toStringTag:void 0;var y=function(t){var e=p.call(t,F),n=t[F];try{t[F]=void 0;var r=!0}catch(t){}var i=s.call(t);return r&&(e?t[F]=n:delete t[F]),i},S=Object.prototype.toString;var B=y,m=function(t){return S.call(t)},v=f?f.toStringTag:void 0;var D=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?B(t):m(t)};var H=D,b=function(t){return null!=t&&"object"==typeof t};var $=function(t){return"symbol"==typeof t||b(t)&&"[object Symbol]"==H(t)},_=l,E=$,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/;var O=function(t,e){if(_(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!E(t))||(A.test(t)||!z.test(t)||null!=e&&t in Object(e))};var w=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},W=D,C=w;var j,x=function(t){if(!C(t))return!1;var e=W(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},k=h["__core-js_shared__"],T=(j=/[^.]+$/.exec(k&&k.keys&&k.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var V=function(t){return!!T&&T in t},I=Function.prototype.toString;var R=x,P=V,L=w,N=function(t){if(null!=t){try{return I.call(t)}catch(t){}try{return t+""}catch(t){}}return""},X=/^\[object .+?Constructor\]$/,G=Function.prototype,M=Object.prototype,U=G.toString,q=M.hasOwnProperty,J=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(t){return!(!L(t)||P(t))&&(R(t)?J:X).test(N(t))},Q=function(t,e){return null==t?void 0:t[e]};var Y=function(t,e){var n=Q(t,e);return K(n)?n:void 0},Z=Y(Object,"create"),tt=Z;var et=function(){this.__data__=tt?tt(null):{},this.size=0};var nt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},rt=Z,it=Object.prototype.hasOwnProperty;var ot=function(t){var e=this.__data__;if(rt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return it.call(e,t)?e[t]:void 0},at=Z,lt=Object.prototype.hasOwnProperty;var ct=Z;var gt=et,ht=nt,ft=ot,dt=function(t){var e=this.__data__;return at?void 0!==e[t]:lt.call(e,t)},ut=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ct&&void 0===e?"__lodash_hash_undefined__":e,this};function pt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}pt.prototype.clear=gt,pt.prototype.delete=ht,pt.prototype.get=ft,pt.prototype.has=dt,pt.prototype.set=ut;var st=pt;var Ft=function(){this.__data__=[],this.size=0};var yt=function(t,e){return t===e||t!=t&&e!=e};var St=function(t,e){for(var n=t.length;n--;)if(yt(t[n][0],e))return n;return-1},Bt=St,mt=Array.prototype.splice;var vt=St;var Dt=St;var Ht=St;var bt=Ft,$t=function(t){var e=this.__data__,n=Bt(e,t);return!(n<0)&&(n==e.length-1?e.pop():mt.call(e,n,1),--this.size,!0)},_t=function(t){var e=this.__data__,n=vt(e,t);return n<0?void 0:e[n][1]},Et=function(t){return Dt(this.__data__,t)>-1},zt=function(t,e){var n=this.__data__,r=Ht(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function At(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}At.prototype.clear=bt,At.prototype.delete=$t,At.prototype.get=_t,At.prototype.has=Et,At.prototype.set=zt;var Ot=At,wt=Y(h,"Map"),Wt=st,Ct=Ot,jt=wt;var xt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var kt=function(t,e){var n=t.__data__;return xt(e)?n["string"==typeof e?"string":"hash"]:n.map},Tt=kt;var Vt=kt;var It=kt;var Rt=kt;var Pt=function(){this.size=0,this.__data__={hash:new Wt,map:new(jt||Ct),string:new Wt}},Lt=function(t){var e=Tt(this,t).delete(t);return this.size-=e?1:0,e},Nt=function(t){return Vt(this,t).get(t)},Xt=function(t){return It(this,t).has(t)},Gt=function(t,e){var n=Rt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Mt.prototype.clear=Pt,Mt.prototype.delete=Lt,Mt.prototype.get=Nt,Mt.prototype.has=Xt,Mt.prototype.set=Gt;var Ut=Mt;function qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(qt.Cache||Ut),n}qt.Cache=Ut;var Jt=qt;var Kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qt=/\\(\\)?/g,Yt=function(t){var e=Jt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Kt,(function(t,n,r,i){e.push(r?i.replace(Qt,"$1"):n||t)})),e}));var Zt=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},te=l,ee=$,ne=f?f.prototype:void 0,re=ne?ne.toString:void 0;var ie=function t(e){if("string"==typeof e)return e;if(te(e))return Zt(e,t)+"";if(ee(e))return re?re.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},oe=ie;var ae=l,le=O,ce=Yt,ge=function(t){return null==t?"":oe(t)};var he=$;var fe=function(t,e){return ae(t)?t:le(t,e)?[t]:ce(ge(t))},de=function(t){if("string"==typeof t||he(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ue=function(t,e){for(var n=0,r=(e=fe(e,t)).length;null!=t&&n<r;)t=t[de(e[n++])];return n&&n==r?t:void 0};var pe=function(t,e,n){var r=null==t?void 0:ue(t,e);return void 0===r?n:r};const se=(t,e,n)=>e?pe(n,e)||pe(t,e):n||t,Fe=(t,e)=>{const n=e||t.defaultValue;return pe(t.collections,n)};var ye;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(ye||(ye={}));const Se={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Be=t=>e=>{const n=e.theme,r=Fe(Se,n[ye.colorScheme]);return n.options&&n.options.color?se(r,t,n.options.color):se(r,t)},me=(Be("Brand.1"),Be("Brand.2"),Be("Brand.3"),Be("Brand.4"),Be("Brand.5"),Be("Brand.6"),Be("Primary")),ve=(Be("PrimaryDark"),Be("Secondary")),De=(Be("Accent.Light.1"),Be("Accent.Light.2"),Be("Accent.Light.3"),Be("Accent.Light.4"),Be("Accent.Light.5"),Be("Accent.Light.6"),Be("Accent.Dark.1"),Be("Accent.Dark.2"),Be("Accent.Dark.3"),{1:Be("Neutral.1"),2:Be("Neutral.2"),3:Be("Neutral.3"),4:Be("Neutral.4"),5:Be("Neutral.5"),6:Be("Neutral.6"),7:Be("Neutral.7"),8:Be("Neutral.8")}),He=(Be("Validation.Green.Text"),Be("Validation.Green.Icon"),Be("Validation.Green.Border"),Be("Validation.Green.Background"),Be("Validation.Orange.Text"),Be("Validation.Orange.Icon"),Be("Validation.Orange.Border"),Be("Validation.Orange.Background"),Be("Validation.Orange.Badge"),Be("Validation.Red.Text"),Be("Validation.Red.Icon"),Be("Validation.Red.Border"),Be("Validation.Red.Background"),Be("Validation.Blue.Text"),Be("Validation.Blue.Icon"),Be("Validation.Blue.Border"),Be("Validation.Blue.Background"),Be("Shadow.Accent"),Be("Shadow.Red"),Be("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),be={collections:{base:{D1:{fontFamily:He.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:He.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:He.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:He.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:He.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:He.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:He.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:He.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:He.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:He.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:He.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:He.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:He.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:He.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},$e=t=>e=>{const n=e.theme,r=Fe(be,n[ye.textStyleScheme]);return n.options&&n.options.textStyle?se(r,t,n.options.textStyle):se(r,t)},_e={D1:{fontFamily:$e("D1.fontFamily"),fontSize:$e("D1.fontSize"),fontWeight:$e("D1.fontWeight"),lineHeight:$e("D1.lineHeight"),letterSpacing:$e("D1.letterSpacing")},D2:{fontFamily:$e("D2.fontFamily"),fontSize:$e("D2.fontSize"),fontWeight:$e("D2.fontWeight"),lineHeight:$e("D2.lineHeight"),letterSpacing:$e("D2.letterSpacing")},D3:{fontFamily:$e("D3.fontFamily"),fontSize:$e("D3.fontSize"),fontWeight:$e("D3.fontWeight"),lineHeight:$e("D3.lineHeight"),letterSpacing:$e("D3.letterSpacing")},D4:{fontFamily:$e("D4.fontFamily"),fontSize:$e("D4.fontSize"),fontWeight:$e("D4.fontWeight"),lineHeight:$e("D4.lineHeight"),letterSpacing:$e("D4.letterSpacing")},DBody:{fontFamily:$e("DBody.fontFamily"),fontSize:$e("DBody.fontSize"),fontWeight:$e("DBody.fontWeight"),lineHeight:$e("DBody.lineHeight"),letterSpacing:$e("DBody.letterSpacing")},H1:{fontFamily:$e("H1.fontFamily"),fontSize:$e("H1.fontSize"),fontWeight:$e("H1.fontWeight"),lineHeight:$e("H1.lineHeight"),letterSpacing:$e("H1.letterSpacing")},H2:{fontFamily:$e("H2.fontFamily"),fontSize:$e("H2.fontSize"),fontWeight:$e("H2.fontWeight"),lineHeight:$e("H2.lineHeight"),letterSpacing:$e("H2.letterSpacing")},H3:{fontFamily:$e("H3.fontFamily"),fontSize:$e("H3.fontSize"),fontWeight:$e("H3.fontWeight"),lineHeight:$e("H3.lineHeight"),letterSpacing:$e("H3.letterSpacing")},H4:{fontFamily:$e("H4.fontFamily"),fontSize:$e("H4.fontSize"),fontWeight:$e("H4.fontWeight"),lineHeight:$e("H4.lineHeight"),letterSpacing:$e("H4.letterSpacing")},H5:{fontFamily:$e("H5.fontFamily"),fontSize:$e("H5.fontSize"),fontWeight:$e("H5.fontWeight"),lineHeight:$e("H5.lineHeight"),letterSpacing:$e("H5.letterSpacing")},H6:{fontFamily:$e("H6.fontFamily"),fontSize:$e("H6.fontSize"),fontWeight:$e("H6.fontWeight"),lineHeight:$e("H6.lineHeight"),letterSpacing:$e("H6.letterSpacing")},Body:{fontFamily:$e("Body.fontFamily"),fontSize:$e("Body.fontSize"),fontWeight:$e("Body.fontWeight"),lineHeight:$e("Body.lineHeight"),letterSpacing:$e("Body.letterSpacing")},BodySmall:{fontFamily:$e("BodySmall.fontFamily"),fontSize:$e("BodySmall.fontSize"),fontWeight:$e("BodySmall.fontWeight"),lineHeight:$e("BodySmall.lineHeight"),letterSpacing:$e("BodySmall.letterSpacing")},XSmall:{fontFamily:$e("XSmall.fontFamily"),fontSize:$e("XSmall.fontSize"),fontWeight:$e("XSmall.fontWeight"),lineHeight:$e("XSmall.lineHeight"),letterSpacing:$e("XSmall.letterSpacing")}},Ee=t=>{switch(t){case 700:case"bold":return He.Bold;case 600:case"semibold":return He.Semibold;case 300:case"light":return He.Light;case 400:case"regular":return He.Regular;default:return""}},ze=(t,e)=>n=>{var r;const o=_e[t].fontFamily(n),a=_e[t].fontWeight(n);return Object.values(He).includes(o)?i`
                font-family: ${Ee(e)||Ee(a)||o};
                font-weight: normal !important;
            `:i`
            font-family: ${o};
            font-weight: ${null!==(r=Ae(e)||a)&&void 0!==r?r:"normal"};
        `},Ae=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Oe=(t,e,n=!1)=>r=>{const o=_e[t],a=o.fontSize(r);return i`
            ${ze(t,e)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${i`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},we=(t=!1,e=!1)=>e?i`
            display: block;
        `:t?i`
            display: inline;
        `:i`
            display: block;
        `;var We;!function(t){t.D1=r.h1`
        ${t=>i`
                ${Oe("D1",t.weight,t.paragraph)}
                color: ${De[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.D2=r.h1`
        ${t=>i`
                ${Oe("D2",t.weight,t.paragraph)}
                color: ${De[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.D3=r.h1`
        ${t=>i`
                ${Oe("D3",t.weight,t.paragraph)}
                color: ${De[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.D4=r.h1`
        ${t=>i`
                ${Oe("D4",t.weight,t.paragraph)}
                color: ${De[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.DBody=r.h1`
        ${t=>i`
                ${Oe("DBody",t.weight,t.paragraph)}
                color: ${De[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H1=r.h1`
        ${t=>i`
                ${Oe("H1",t.weight,t.paragraph)}
                color: ${De[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H2=r.h2`
        ${t=>i`
                ${Oe("H2",t.weight,t.paragraph)}
                color: ${De[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H3=r.h3`
        ${t=>i`
                ${Oe("H3",t.weight,t.paragraph)}
                color: ${De[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H4=r.h4`
        ${t=>i`
                ${Oe("H4",t.weight,t.paragraph)}
                color: ${De[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H5=r.h5`
        ${t=>i`
                ${Oe("H5",t.weight,t.paragraph)}
                color: ${De[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H6=r.h6`
        ${t=>i`
                ${Oe("H6",t.weight,t.paragraph)}
                color: ${De[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.Body=r.p`
        ${t=>i`
                ${Oe("Body",t.weight,t.paragraph)}
                color: ${De[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=r.p`
        ${t=>i`
                ${Oe("BodySmall",t.weight,t.paragraph)}
                color: ${De[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.XSmall=r.span`
        ${t=>i`
                ${Oe("XSmall",t.weight,t.paragraph)}
                color: ${De[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>xe(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>xe(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(We||(We={}));const Ce=r.a`
    ${t=>i`
            ${Oe(t.textStyle,t.weight)}
            color: ${me};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ve};

                svg {
                    color: ${ve};
                }
            }
        `}
`,je=r(n)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,xe=n=>{var{external:r=!1,children:i}=n,a=o(n,["external","children"]);return t(Ce,Object.assign({},a,{children:[i,r&&e(je,{})]}))},ke=r.div`
    border-radius: 0.5rem;
    background: ${De[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Te=t=>{var{children:n}=t,r=o(t,["children"]);const i=r["data-testid"]||"card";return e(ke,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?e(We.Body,{children:n}):n}))};export{Te as Card};
//# sourceMappingURL=index.js.map
