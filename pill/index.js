import{jsxs as e,jsx as t}from"react/jsx-runtime";import n,{css as r}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=Array.isArray,l="object"==typeof i&&i&&i.Object===Object&&i,c="object"==typeof self&&self&&self.Object===Object&&self,g=l||c||Function("return this")(),d=g.Symbol,h=d,u=Object.prototype,f=u.hasOwnProperty,p=u.toString,s=h?h.toStringTag:void 0;var F=function(e){var t=f.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var a=p.call(e);return r&&(t?e[s]=n:delete e[s]),a},y=Object.prototype.toString;var B=F,S=function(e){return y.call(e)},m=d?d.toStringTag:void 0;var v=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":m&&m in Object(e)?B(e):S(e)};var D=v,H=function(e){return null!=e&&"object"==typeof e};var b=function(e){return"symbol"==typeof e||H(e)&&"[object Symbol]"==D(e)},$=o,_=b,E=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var x=function(e,t){if($(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(k.test(e)||!E.test(e)||null!=t&&e in Object(t))};var z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},A=v,w=z;var V,T=function(e){if(!w(e))return!1;var t=A(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},W=g["__core-js_shared__"],C=(V=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var N=function(e){return!!C&&C in e},O=Function.prototype.toString;var j=T,R=N,I=z,P=function(e){if(null!=e){try{return O.call(e)}catch(e){}try{return e+""}catch(e){}}return""},G=/^\[object .+?Constructor\]$/,L=Function.prototype,X=Object.prototype,M=L.toString,U=X.hasOwnProperty,q=RegExp("^"+M.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var J=function(e){return!(!I(e)||R(e))&&(j(e)?q:G).test(P(e))},K=function(e,t){return null==e?void 0:e[t]};var Q=function(e,t){var n=K(e,t);return J(n)?n:void 0},Y=Q(Object,"create"),Z=Y;var ee=function(){this.__data__=Z?Z(null):{},this.size=0};var te=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ne=Y,re=Object.prototype.hasOwnProperty;var ae=function(e){var t=this.__data__;if(ne){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return re.call(t,e)?t[e]:void 0},ie=Y,oe=Object.prototype.hasOwnProperty;var le=Y;var ce=ee,ge=te,de=ae,he=function(e){var t=this.__data__;return ie?void 0!==t[e]:oe.call(t,e)},ue=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=le&&void 0===t?"__lodash_hash_undefined__":t,this};function fe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}fe.prototype.clear=ce,fe.prototype.delete=ge,fe.prototype.get=de,fe.prototype.has=he,fe.prototype.set=ue;var pe=fe;var se=function(){this.__data__=[],this.size=0};var Fe=function(e,t){return e===t||e!=e&&t!=t};var ye=function(e,t){for(var n=e.length;n--;)if(Fe(e[n][0],t))return n;return-1},Be=ye,Se=Array.prototype.splice;var me=ye;var ve=ye;var De=ye;var He=se,be=function(e){var t=this.__data__,n=Be(t,e);return!(n<0)&&(n==t.length-1?t.pop():Se.call(t,n,1),--this.size,!0)},$e=function(e){var t=this.__data__,n=me(t,e);return n<0?void 0:t[n][1]},_e=function(e){return ve(this.__data__,e)>-1},Ee=function(e,t){var n=this.__data__,r=De(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ke.prototype.clear=He,ke.prototype.delete=be,ke.prototype.get=$e,ke.prototype.has=_e,ke.prototype.set=Ee;var xe=ke,ze=Q(g,"Map"),Ae=pe,we=xe,Ve=ze;var Te=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var We=function(e,t){var n=e.__data__;return Te(t)?n["string"==typeof t?"string":"hash"]:n.map},Ce=We;var Ne=We;var Oe=We;var je=We;var Re=function(){this.size=0,this.__data__={hash:new Ae,map:new(Ve||we),string:new Ae}},Ie=function(e){var t=Ce(this,e).delete(e);return this.size-=t?1:0,t},Pe=function(e){return Ne(this,e).get(e)},Ge=function(e){return Oe(this,e).has(e)},Le=function(e,t){var n=je(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Xe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Xe.prototype.clear=Re,Xe.prototype.delete=Ie,Xe.prototype.get=Pe,Xe.prototype.has=Ge,Xe.prototype.set=Le;var Me=Xe;function Ue(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(Ue.Cache||Me),n}Ue.Cache=Me;var qe=Ue;var Je=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ke=/\\(\\)?/g,Qe=function(e){var t=qe(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Je,(function(e,n,r,a){t.push(r?a.replace(Ke,"$1"):n||e)})),t}));var Ye=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},Ze=o,et=b,tt=d?d.prototype:void 0,nt=tt?tt.toString:void 0;var rt=function e(t){if("string"==typeof t)return t;if(Ze(t))return Ye(t,e)+"";if(et(t))return nt?nt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},at=rt;var it=o,ot=x,lt=Qe,ct=function(e){return null==e?"":at(e)};var gt=b;var dt=function(e,t){return it(e)?e:ot(e,t)?[e]:lt(ct(e))},ht=function(e){if("string"==typeof e||gt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var ut=function(e,t){for(var n=0,r=(t=dt(t,e)).length;null!=e&&n<r;)e=e[ht(t[n++])];return n&&n==r?e:void 0};var ft=function(e,t,n){var r=null==e?void 0:ut(e,t);return void 0===r?n:r};const pt=(e,t,n)=>t?ft(n,t)||ft(e,t):n||e,st=(e,t)=>{const n=t||e.defaultValue;return ft(e.collections,n)};var Ft;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ft||(Ft={}));const yt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Bt=e=>t=>{const n=t.theme,r=st(yt,n[Ft.colorScheme]);return n.options&&n.options.color?pt(r,e,n.options.color):pt(r,e)},St={Brand:{1:Bt("Brand.1"),2:Bt("Brand.2"),3:Bt("Brand.3"),4:Bt("Brand.4"),5:Bt("Brand.5"),6:Bt("Brand.6")},Primary:Bt("Primary"),PrimaryDark:Bt("PrimaryDark"),Secondary:Bt("Secondary"),Accent:{Light:{1:Bt("Accent.Light.1"),2:Bt("Accent.Light.2"),3:Bt("Accent.Light.3"),4:Bt("Accent.Light.4"),5:Bt("Accent.Light.5"),6:Bt("Accent.Light.6")},Dark:{1:Bt("Accent.Dark.1"),2:Bt("Accent.Dark.2"),3:Bt("Accent.Dark.3")}},Neutral:{1:Bt("Neutral.1"),2:Bt("Neutral.2"),3:Bt("Neutral.3"),4:Bt("Neutral.4"),5:Bt("Neutral.5"),6:Bt("Neutral.6"),7:Bt("Neutral.7"),8:Bt("Neutral.8")},Validation:{Green:{Text:Bt("Validation.Green.Text"),Icon:Bt("Validation.Green.Icon"),Border:Bt("Validation.Green.Border"),Background:Bt("Validation.Green.Background")},Orange:{Text:Bt("Validation.Orange.Text"),Icon:Bt("Validation.Orange.Icon"),Border:Bt("Validation.Orange.Border"),Background:Bt("Validation.Orange.Background"),Badge:Bt("Validation.Orange.Badge")},Red:{Text:Bt("Validation.Red.Text"),Icon:Bt("Validation.Red.Icon"),Border:Bt("Validation.Red.Border"),Background:Bt("Validation.Red.Background")},Blue:{Text:Bt("Validation.Blue.Text"),Icon:Bt("Validation.Blue.Icon"),Border:Bt("Validation.Blue.Border"),Background:Bt("Validation.Blue.Background")}},Shadow:{Accent:Bt("Shadow.Accent"),Red:Bt("Shadow.Red"),Elevation:Bt("Shadow.Elevation")}},mt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},vt={collections:{base:{D1:{fontFamily:mt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:mt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:mt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:mt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:mt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:mt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:mt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:mt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:mt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:mt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:mt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:mt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:mt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:mt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=st(vt,n[Ft.textStyleScheme]);return n.options&&n.options.textStyle?pt(r,e,n.options.textStyle):pt(r,e)},Ht={D1:{fontFamily:Dt("D1.fontFamily"),fontSize:Dt("D1.fontSize"),fontWeight:Dt("D1.fontWeight"),lineHeight:Dt("D1.lineHeight"),letterSpacing:Dt("D1.letterSpacing")},D2:{fontFamily:Dt("D2.fontFamily"),fontSize:Dt("D2.fontSize"),fontWeight:Dt("D2.fontWeight"),lineHeight:Dt("D2.lineHeight"),letterSpacing:Dt("D2.letterSpacing")},D3:{fontFamily:Dt("D3.fontFamily"),fontSize:Dt("D3.fontSize"),fontWeight:Dt("D3.fontWeight"),lineHeight:Dt("D3.lineHeight"),letterSpacing:Dt("D3.letterSpacing")},D4:{fontFamily:Dt("D4.fontFamily"),fontSize:Dt("D4.fontSize"),fontWeight:Dt("D4.fontWeight"),lineHeight:Dt("D4.lineHeight"),letterSpacing:Dt("D4.letterSpacing")},DBody:{fontFamily:Dt("DBody.fontFamily"),fontSize:Dt("DBody.fontSize"),fontWeight:Dt("DBody.fontWeight"),lineHeight:Dt("DBody.lineHeight"),letterSpacing:Dt("DBody.letterSpacing")},H1:{fontFamily:Dt("H1.fontFamily"),fontSize:Dt("H1.fontSize"),fontWeight:Dt("H1.fontWeight"),lineHeight:Dt("H1.lineHeight"),letterSpacing:Dt("H1.letterSpacing")},H2:{fontFamily:Dt("H2.fontFamily"),fontSize:Dt("H2.fontSize"),fontWeight:Dt("H2.fontWeight"),lineHeight:Dt("H2.lineHeight"),letterSpacing:Dt("H2.letterSpacing")},H3:{fontFamily:Dt("H3.fontFamily"),fontSize:Dt("H3.fontSize"),fontWeight:Dt("H3.fontWeight"),lineHeight:Dt("H3.lineHeight"),letterSpacing:Dt("H3.letterSpacing")},H4:{fontFamily:Dt("H4.fontFamily"),fontSize:Dt("H4.fontSize"),fontWeight:Dt("H4.fontWeight"),lineHeight:Dt("H4.lineHeight"),letterSpacing:Dt("H4.letterSpacing")},H5:{fontFamily:Dt("H5.fontFamily"),fontSize:Dt("H5.fontSize"),fontWeight:Dt("H5.fontWeight"),lineHeight:Dt("H5.lineHeight"),letterSpacing:Dt("H5.letterSpacing")},H6:{fontFamily:Dt("H6.fontFamily"),fontSize:Dt("H6.fontSize"),fontWeight:Dt("H6.fontWeight"),lineHeight:Dt("H6.lineHeight"),letterSpacing:Dt("H6.letterSpacing")},Body:{fontFamily:Dt("Body.fontFamily"),fontSize:Dt("Body.fontSize"),fontWeight:Dt("Body.fontWeight"),lineHeight:Dt("Body.lineHeight"),letterSpacing:Dt("Body.letterSpacing")},BodySmall:{fontFamily:Dt("BodySmall.fontFamily"),fontSize:Dt("BodySmall.fontSize"),fontWeight:Dt("BodySmall.fontWeight"),lineHeight:Dt("BodySmall.lineHeight"),letterSpacing:Dt("BodySmall.letterSpacing")},XSmall:{fontFamily:Dt("XSmall.fontFamily"),fontSize:Dt("XSmall.fontSize"),fontWeight:Dt("XSmall.fontWeight"),lineHeight:Dt("XSmall.lineHeight"),letterSpacing:Dt("XSmall.letterSpacing")}},bt=e=>{switch(e){case 700:case"bold":return mt.Bold;case 600:case"semibold":return mt.Semibold;case 300:case"light":return mt.Light;case 400:case"regular":return mt.Regular;default:return""}},$t=(e,t)=>n=>{const a=Ht[e].fontFamily(n),i=Ht[e].fontWeight(n);return Object.values(mt).includes(a)?r`
                font-family: ${bt(t)||bt(i)||a};
                font-weight: normal !important;
            `:r`
            font-family: ${a};
            font-weight: ${(_t(t)||i)??"normal"};
        `},_t=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Et=(e,t,n=!1)=>a=>{const i=Ht[e],o=i.fontSize(a);return r`
            ${$t(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(a)||0}rem !important;
            ${r`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},kt=(e=!1,t=!1)=>t?r`
            display: block;
        `:e?r`
            display: inline;
        `:r`
            display: block;
        `;var xt;!function(e){e.D1=n.h1`
        ${e=>r`
                ${Et("D1",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.D2=n.h1`
        ${e=>r`
                ${Et("D2",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.D3=n.h1`
        ${e=>r`
                ${Et("D3",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.D4=n.h1`
        ${e=>r`
                ${Et("D4",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.DBody=n.h1`
        ${e=>r`
                ${Et("DBody",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H1=n.h1`
        ${e=>r`
                ${Et("H1",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H2=n.h2`
        ${e=>r`
                ${Et("H2",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H3=n.h3`
        ${e=>r`
                ${Et("H3",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H4=n.h4`
        ${e=>r`
                ${Et("H4",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H5=n.h5`
        ${e=>r`
                ${Et("H5",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H6=n.h6`
        ${e=>r`
                ${Et("H6",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.Body=n.p`
        ${e=>r`
                ${Et("Body",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=n.p`
        ${e=>r`
                ${Et("BodySmall",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=n.span`
        ${e=>r`
                ${Et("XSmall",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>wt({...e,textStyle:"Body"}),Small:e=>wt({...e,textStyle:"BodySmall"})}}(xt||(xt={}));const zt=n.a`
    ${e=>r`
            ${Et(e.textStyle,e.weight)}
            color: ${St.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${St.Secondary};

                svg {
                    color: ${St.Secondary};
                }
            }
        `}
`,At=n(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,wt=({external:n=!1,children:r,...a})=>e(zt,{...a,children:[r,n&&t(At,{})]});var Vt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Vt||(Vt={}));const Tt=n.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${Et("XSmall","semibold")}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,a;if("solid"===e.$type)switch(a=St.Neutral[8],e.$color){case"grey":t=St.Neutral[3],n=St.Neutral[3];break;case"green":t=St.Validation.Green.Text,n=St.Validation.Green.Text;break;case"yellow":t=St.Validation.Orange.Text,n=St.Validation.Orange.Text;break;case"red":t=St.Validation.Red.Text,n=St.Validation.Red.Text;break;case"blue":t=St.Validation.Blue.Text,n=St.Validation.Blue.Text;break;default:t=St.Neutral[1],n=St.Neutral[1]}else switch(e.$color){case"grey":t=St.Neutral[6],n=St.Neutral[4],a=St.Neutral[3];break;case"green":t=St.Validation.Green.Background,n=St.Validation.Green.Border,a=St.Validation.Green.Text;break;case"yellow":t=St.Validation.Orange.Background,n=St.Validation.Orange.Border,a=St.Validation.Orange.Text;break;case"red":t=St.Validation.Red.Background,n=St.Validation.Red.Border,a=St.Validation.Red.Text;break;case"blue":t=St.Validation.Blue.Background,n=St.Validation.Blue.Border,a=St.Validation.Blue.Text;break;default:t=St.Neutral[8],n=St.Neutral[5],a=St.Neutral[1]}return r`
            background: ${t};
            border: 1px solid ${n};
            color: ${a};
        `}}
`,Wt=n.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,Ct=({type:n,colorType:r="black",children:a,icon:i,...o})=>e(Tt,{$type:n,$color:r,...o,children:[i,t(Wt,{children:a})]});export{Ct as Pill};
//# sourceMappingURL=index.js.map
