import{jsxs as t,jsx as e}from"react/jsx-runtime";import{ArrowRightIcon as n}from"@lifesg/react-icons/arrow-right";import r,{css as a}from"styled-components";import{ExternalIcon as i}from"@lifesg/react-icons/external";var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l=Array.isArray,c="object"==typeof o&&o&&o.Object===Object&&o,g="object"==typeof self&&self&&self.Object===Object&&self,h=c||g||Function("return this")(),d=h.Symbol,f=d,u=Object.prototype,p=u.hasOwnProperty,s=u.toString,F=f?f.toStringTag:void 0;var y=function(t){var e=p.call(t,F),n=t[F];try{t[F]=void 0;var r=!0}catch(t){}var a=s.call(t);return r&&(e?t[F]=n:delete t[F]),a},m=Object.prototype.toString;var B=y,S=function(t){return m.call(t)},v=d?d.toStringTag:void 0;var D=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?B(t):S(t)};var H=D,$=function(t){return null!=t&&"object"==typeof t};var b=function(t){return"symbol"==typeof t||$(t)&&"[object Symbol]"==H(t)},_=l,E=b,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/;var k=function(t,e){if(_(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!E(t))||(A.test(t)||!z.test(t)||null!=e&&t in Object(e))};var w=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},x=D,W=w;var C,O=function(t){if(!W(t))return!1;var e=x(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},V=h["__core-js_shared__"],N=(C=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"";var T=function(t){return!!N&&N in t},j=Function.prototype.toString;var I=O,R=T,P=w,L=function(t){if(null!=t){try{return j.call(t)}catch(t){}try{return t+""}catch(t){}}return""},G=/^\[object .+?Constructor\]$/,X=Function.prototype,M=Object.prototype,U=X.toString,q=M.hasOwnProperty,J=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(t){return!(!P(t)||R(t))&&(I(t)?J:G).test(L(t))},Q=function(t,e){return null==t?void 0:t[e]};var Y=function(t,e){var n=Q(t,e);return K(n)?n:void 0},Z=Y(Object,"create"),tt=Z;var et=function(){this.__data__=tt?tt(null):{},this.size=0};var nt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},rt=Z,at=Object.prototype.hasOwnProperty;var it=function(t){var e=this.__data__;if(rt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return at.call(e,t)?e[t]:void 0},ot=Z,lt=Object.prototype.hasOwnProperty;var ct=Z;var gt=et,ht=nt,dt=it,ft=function(t){var e=this.__data__;return ot?void 0!==e[t]:lt.call(e,t)},ut=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ct&&void 0===e?"__lodash_hash_undefined__":e,this};function pt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}pt.prototype.clear=gt,pt.prototype.delete=ht,pt.prototype.get=dt,pt.prototype.has=ft,pt.prototype.set=ut;var st=pt;var Ft=function(){this.__data__=[],this.size=0};var yt=function(t,e){return t===e||t!=t&&e!=e};var mt=function(t,e){for(var n=t.length;n--;)if(yt(t[n][0],e))return n;return-1},Bt=mt,St=Array.prototype.splice;var vt=mt;var Dt=mt;var Ht=mt;var $t=Ft,bt=function(t){var e=this.__data__,n=Bt(e,t);return!(n<0)&&(n==e.length-1?e.pop():St.call(e,n,1),--this.size,!0)},_t=function(t){var e=this.__data__,n=vt(e,t);return n<0?void 0:e[n][1]},Et=function(t){return Dt(this.__data__,t)>-1},zt=function(t,e){var n=this.__data__,r=Ht(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function At(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}At.prototype.clear=$t,At.prototype.delete=bt,At.prototype.get=_t,At.prototype.has=Et,At.prototype.set=zt;var kt=At,wt=Y(h,"Map"),xt=st,Wt=kt,Ct=wt;var Ot=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Vt=function(t,e){var n=t.__data__;return Ot(e)?n["string"==typeof e?"string":"hash"]:n.map},Nt=Vt;var Tt=Vt;var jt=Vt;var It=Vt;var Rt=function(){this.size=0,this.__data__={hash:new xt,map:new(Ct||Wt),string:new xt}},Pt=function(t){var e=Nt(this,t).delete(t);return this.size-=e?1:0,e},Lt=function(t){return Tt(this,t).get(t)},Gt=function(t){return jt(this,t).has(t)},Xt=function(t,e){var n=It(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Mt.prototype.clear=Rt,Mt.prototype.delete=Pt,Mt.prototype.get=Lt,Mt.prototype.has=Gt,Mt.prototype.set=Xt;var Ut=Mt;function qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=t.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(qt.Cache||Ut),n}qt.Cache=Ut;var Jt=qt;var Kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qt=/\\(\\)?/g,Yt=function(t){var e=Jt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Kt,(function(t,n,r,a){e.push(r?a.replace(Qt,"$1"):n||t)})),e}));var Zt=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a},te=l,ee=b,ne=d?d.prototype:void 0,re=ne?ne.toString:void 0;var ae=function t(e){if("string"==typeof e)return e;if(te(e))return Zt(e,t)+"";if(ee(e))return re?re.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ie=ae;var oe=l,le=k,ce=Yt,ge=function(t){return null==t?"":ie(t)};var he=b;var de=function(t,e){return oe(t)?t:le(t,e)?[t]:ce(ge(t))},fe=function(t){if("string"==typeof t||he(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ue=function(t,e){for(var n=0,r=(e=de(e,t)).length;null!=t&&n<r;)t=t[fe(e[n++])];return n&&n==r?t:void 0};var pe=function(t,e,n){var r=null==t?void 0:ue(t,e);return void 0===r?n:r};const se=(t,e,n)=>e?pe(n,e)||pe(t,e):n||t,Fe=(t,e)=>{const n=e||t.defaultValue;return pe(t.collections,n)};var ye;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(ye||(ye={}));const me={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Be=t=>e=>{const n=e.theme,r=Fe(me,n[ye.colorScheme]);return n.options&&n.options.color?se(r,t,n.options.color):se(r,t)},Se={Brand:{1:Be("Brand.1"),2:Be("Brand.2"),3:Be("Brand.3"),4:Be("Brand.4"),5:Be("Brand.5"),6:Be("Brand.6")},Primary:Be("Primary"),PrimaryDark:Be("PrimaryDark"),Secondary:Be("Secondary"),Accent:{Light:{1:Be("Accent.Light.1"),2:Be("Accent.Light.2"),3:Be("Accent.Light.3"),4:Be("Accent.Light.4"),5:Be("Accent.Light.5"),6:Be("Accent.Light.6")},Dark:{1:Be("Accent.Dark.1"),2:Be("Accent.Dark.2"),3:Be("Accent.Dark.3")}},Neutral:{1:Be("Neutral.1"),2:Be("Neutral.2"),3:Be("Neutral.3"),4:Be("Neutral.4"),5:Be("Neutral.5"),6:Be("Neutral.6"),7:Be("Neutral.7"),8:Be("Neutral.8")},Validation:{Green:{Text:Be("Validation.Green.Text"),Icon:Be("Validation.Green.Icon"),Border:Be("Validation.Green.Border"),Background:Be("Validation.Green.Background")},Orange:{Text:Be("Validation.Orange.Text"),Icon:Be("Validation.Orange.Icon"),Border:Be("Validation.Orange.Border"),Background:Be("Validation.Orange.Background"),Badge:Be("Validation.Orange.Badge")},Red:{Text:Be("Validation.Red.Text"),Icon:Be("Validation.Red.Icon"),Border:Be("Validation.Red.Border"),Background:Be("Validation.Red.Background")},Blue:{Text:Be("Validation.Blue.Text"),Icon:Be("Validation.Blue.Icon"),Border:Be("Validation.Blue.Border"),Background:Be("Validation.Blue.Background")}},Shadow:{Accent:Be("Shadow.Accent"),Red:Be("Shadow.Red"),Elevation:Be("Shadow.Elevation")}},ve={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},De={collections:{base:{D1:{fontFamily:ve.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ve.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ve.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ve.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ve.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ve.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ve.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ve.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ve.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ve.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ve.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ve.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ve.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ve.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},He=t=>e=>{const n=e.theme,r=Fe(De,n[ye.textStyleScheme]);return n.options&&n.options.textStyle?se(r,t,n.options.textStyle):se(r,t)},$e={D1:{fontFamily:He("D1.fontFamily"),fontSize:He("D1.fontSize"),fontWeight:He("D1.fontWeight"),lineHeight:He("D1.lineHeight"),letterSpacing:He("D1.letterSpacing")},D2:{fontFamily:He("D2.fontFamily"),fontSize:He("D2.fontSize"),fontWeight:He("D2.fontWeight"),lineHeight:He("D2.lineHeight"),letterSpacing:He("D2.letterSpacing")},D3:{fontFamily:He("D3.fontFamily"),fontSize:He("D3.fontSize"),fontWeight:He("D3.fontWeight"),lineHeight:He("D3.lineHeight"),letterSpacing:He("D3.letterSpacing")},D4:{fontFamily:He("D4.fontFamily"),fontSize:He("D4.fontSize"),fontWeight:He("D4.fontWeight"),lineHeight:He("D4.lineHeight"),letterSpacing:He("D4.letterSpacing")},DBody:{fontFamily:He("DBody.fontFamily"),fontSize:He("DBody.fontSize"),fontWeight:He("DBody.fontWeight"),lineHeight:He("DBody.lineHeight"),letterSpacing:He("DBody.letterSpacing")},H1:{fontFamily:He("H1.fontFamily"),fontSize:He("H1.fontSize"),fontWeight:He("H1.fontWeight"),lineHeight:He("H1.lineHeight"),letterSpacing:He("H1.letterSpacing")},H2:{fontFamily:He("H2.fontFamily"),fontSize:He("H2.fontSize"),fontWeight:He("H2.fontWeight"),lineHeight:He("H2.lineHeight"),letterSpacing:He("H2.letterSpacing")},H3:{fontFamily:He("H3.fontFamily"),fontSize:He("H3.fontSize"),fontWeight:He("H3.fontWeight"),lineHeight:He("H3.lineHeight"),letterSpacing:He("H3.letterSpacing")},H4:{fontFamily:He("H4.fontFamily"),fontSize:He("H4.fontSize"),fontWeight:He("H4.fontWeight"),lineHeight:He("H4.lineHeight"),letterSpacing:He("H4.letterSpacing")},H5:{fontFamily:He("H5.fontFamily"),fontSize:He("H5.fontSize"),fontWeight:He("H5.fontWeight"),lineHeight:He("H5.lineHeight"),letterSpacing:He("H5.letterSpacing")},H6:{fontFamily:He("H6.fontFamily"),fontSize:He("H6.fontSize"),fontWeight:He("H6.fontWeight"),lineHeight:He("H6.lineHeight"),letterSpacing:He("H6.letterSpacing")},Body:{fontFamily:He("Body.fontFamily"),fontSize:He("Body.fontSize"),fontWeight:He("Body.fontWeight"),lineHeight:He("Body.lineHeight"),letterSpacing:He("Body.letterSpacing")},BodySmall:{fontFamily:He("BodySmall.fontFamily"),fontSize:He("BodySmall.fontSize"),fontWeight:He("BodySmall.fontWeight"),lineHeight:He("BodySmall.lineHeight"),letterSpacing:He("BodySmall.letterSpacing")},XSmall:{fontFamily:He("XSmall.fontFamily"),fontSize:He("XSmall.fontSize"),fontWeight:He("XSmall.fontWeight"),lineHeight:He("XSmall.lineHeight"),letterSpacing:He("XSmall.letterSpacing")}},be=t=>{switch(t){case 700:case"bold":return ve.Bold;case 600:case"semibold":return ve.Semibold;case 300:case"light":return ve.Light;case 400:case"regular":return ve.Regular;default:return""}},_e=(t,e)=>n=>{const r=$e[t].fontFamily(n),i=$e[t].fontWeight(n);return Object.values(ve).includes(r)?a`
                font-family: ${be(e)||be(i)||r};
                font-weight: normal !important;
            `:a`
            font-family: ${r};
            font-weight: ${(Ee(e)||i)??"normal"};
        `},Ee=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ze=_e,Ae=(t,e,n=!1)=>r=>{const i=$e[t],o=i.fontSize(r);return a`
            ${_e(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},ke=(t=!1,e=!1)=>e?a`
            display: block;
        `:t?a`
            display: inline;
        `:a`
            display: block;
        `;var we;!function(t){t.D1=r.h1`
        ${t=>a`
                ${Ae("D1",t.weight,t.paragraph)}
                color: ${Se.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.D2=r.h1`
        ${t=>a`
                ${Ae("D2",t.weight,t.paragraph)}
                color: ${Se.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.D3=r.h1`
        ${t=>a`
                ${Ae("D3",t.weight,t.paragraph)}
                color: ${Se.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.D4=r.h1`
        ${t=>a`
                ${Ae("D4",t.weight,t.paragraph)}
                color: ${Se.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.DBody=r.h1`
        ${t=>a`
                ${Ae("DBody",t.weight,t.paragraph)}
                color: ${Se.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H1=r.h1`
        ${t=>a`
                ${Ae("H1",t.weight,t.paragraph)}
                color: ${Se.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H2=r.h2`
        ${t=>a`
                ${Ae("H2",t.weight,t.paragraph)}
                color: ${Se.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H3=r.h3`
        ${t=>a`
                ${Ae("H3",t.weight,t.paragraph)}
                color: ${Se.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H4=r.h4`
        ${t=>a`
                ${Ae("H4",t.weight,t.paragraph)}
                color: ${Se.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H5=r.h5`
        ${t=>a`
                ${Ae("H5",t.weight,t.paragraph)}
                color: ${Se.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H6=r.h6`
        ${t=>a`
                ${Ae("H6",t.weight,t.paragraph)}
                color: ${Se.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.Body=r.p`
        ${t=>a`
                ${Ae("Body",t.weight,t.paragraph)}
                color: ${Se.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=r.p`
        ${t=>a`
                ${Ae("BodySmall",t.weight,t.paragraph)}
                color: ${Se.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.XSmall=r.span`
        ${t=>a`
                ${Ae("XSmall",t.weight,t.paragraph)}
                color: ${Se.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ce({...t,textStyle:"Body"}),Small:t=>Ce({...t,textStyle:"BodySmall"})}}(we||(we={}));const xe=r.a`
    ${t=>a`
            ${Ae(t.textStyle,t.weight)}
            color: ${Se.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Se.Secondary};

                svg {
                    color: ${Se.Secondary};
                }
            }
        `}
`,We=r(i)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ce=({external:n=!1,children:r,...a})=>t(xe,{...a,children:[r,n&&e(We,{})]});var Oe;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Oe||(Oe={}));const Ve=r.div`
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    ${Ae("BodySmall","regular")}

    ${t=>{let e,n;switch(t.$type){case"error":e=Se.Validation.Red.Background(t),n=Se.Validation.Red.Border(t);break;case"success":default:e=Se.Validation.Green.Background(t),n=Se.Validation.Green.Border(t);break;case"warning":e=Se.Validation.Orange.Background(t),n=Se.Validation.Orange.Border(t)}return`\n\t\t\tbackground: ${e};\n\t\t\tborder-left: 2pt solid ${n};\n\t\t`}}

	p {
        ${Ae("BodySmall","regular")}
        margin: 0;

        strong {
            ${ze("BodySmall","semibold")}
        }

        a {
            color: ${Se.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Se.Secondary};
            }
        }
    }
`,Ne=r(we.Hyperlink.Small)`
    margin-bottom: 0;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
`,Te=r(n)`
    height: 1.375rem;
    width: 1.375rem;
    margin-left: 0.25rem;
`,je=({type:n,className:r,children:a,actionLink:i,...o})=>t(Ve,{className:r,$type:n,"data-testid":o["data-testid"],children:[a,i&&t(Ne,{weight:"semibold",...i,"data-testid":"action-link",children:[i.children,e(Te,{})]})]});export{je as Alert};
//# sourceMappingURL=index.js.map
