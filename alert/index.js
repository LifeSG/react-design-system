import{jsxs as t,jsx as e}from"react/jsx-runtime";import{ArrowRightIcon as n}from"@lifesg/react-icons/arrow-right";import r,{css as a}from"styled-components";import{ExternalIcon as i}from"@lifesg/react-icons/external";function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=Array.isArray,g="object"==typeof l&&l&&l.Object===Object&&l,h="object"==typeof self&&self&&self.Object===Object&&self,d=g||h||Function("return this")(),f=d.Symbol,u=f,p=Object.prototype,s=p.hasOwnProperty,F=p.toString,y=u?u.toStringTag:void 0;var m=function(t){var e=s.call(t,y),n=t[y];try{t[y]=void 0;var r=!0}catch(t){}var a=F.call(t);return r&&(e?t[y]=n:delete t[y]),a},S=Object.prototype.toString;var B=m,v=function(t){return S.call(t)},D=f?f.toStringTag:void 0;var H=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":D&&D in Object(t)?B(t):v(t)};var b=H,$=function(t){return null!=t&&"object"==typeof t};var _=function(t){return"symbol"==typeof t||$(t)&&"[object Symbol]"==b(t)},E=c,z=_,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var w=function(t,e){if(E(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!z(t))||(k.test(t)||!A.test(t)||null!=e&&t in Object(e))};var O=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},x=H,W=O;var j,C=function(t){if(!W(t))return!1;var e=x(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},N=d["__core-js_shared__"],V=(j=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var T=function(t){return!!V&&V in t},I=Function.prototype.toString;var R=C,P=T,L=O,G=function(t){if(null!=t){try{return I.call(t)}catch(t){}try{return t+""}catch(t){}}return""},X=/^\[object .+?Constructor\]$/,M=Function.prototype,U=Object.prototype,q=M.toString,J=U.hasOwnProperty,K=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!L(t)||P(t))&&(R(t)?K:X).test(G(t))},Y=function(t,e){return null==t?void 0:t[e]};var Z=function(t,e){var n=Y(t,e);return Q(n)?n:void 0},tt=Z(Object,"create"),et=tt;var nt=function(){this.__data__=et?et(null):{},this.size=0};var rt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},at=tt,it=Object.prototype.hasOwnProperty;var ot=function(t){var e=this.__data__;if(at){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return it.call(e,t)?e[t]:void 0},lt=tt,ct=Object.prototype.hasOwnProperty;var gt=tt;var ht=nt,dt=rt,ft=ot,ut=function(t){var e=this.__data__;return lt?void 0!==e[t]:ct.call(e,t)},pt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=gt&&void 0===e?"__lodash_hash_undefined__":e,this};function st(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}st.prototype.clear=ht,st.prototype.delete=dt,st.prototype.get=ft,st.prototype.has=ut,st.prototype.set=pt;var Ft=st;var yt=function(){this.__data__=[],this.size=0};var mt=function(t,e){return t===e||t!=t&&e!=e};var St=function(t,e){for(var n=t.length;n--;)if(mt(t[n][0],e))return n;return-1},Bt=St,vt=Array.prototype.splice;var Dt=St;var Ht=St;var bt=St;var $t=yt,_t=function(t){var e=this.__data__,n=Bt(e,t);return!(n<0)&&(n==e.length-1?e.pop():vt.call(e,n,1),--this.size,!0)},Et=function(t){var e=this.__data__,n=Dt(e,t);return n<0?void 0:e[n][1]},zt=function(t){return Ht(this.__data__,t)>-1},At=function(t,e){var n=this.__data__,r=bt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function kt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}kt.prototype.clear=$t,kt.prototype.delete=_t,kt.prototype.get=Et,kt.prototype.has=zt,kt.prototype.set=At;var wt=kt,Ot=Z(d,"Map"),xt=Ft,Wt=wt,jt=Ot;var Ct=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Nt=function(t,e){var n=t.__data__;return Ct(e)?n["string"==typeof e?"string":"hash"]:n.map},Vt=Nt;var Tt=Nt;var It=Nt;var Rt=Nt;var Pt=function(){this.size=0,this.__data__={hash:new xt,map:new(jt||Wt),string:new xt}},Lt=function(t){var e=Vt(this,t).delete(t);return this.size-=e?1:0,e},Gt=function(t){return Tt(this,t).get(t)},Xt=function(t){return It(this,t).has(t)},Mt=function(t,e){var n=Rt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ut.prototype.clear=Pt,Ut.prototype.delete=Lt,Ut.prototype.get=Gt,Ut.prototype.has=Xt,Ut.prototype.set=Mt;var qt=Ut;function Jt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=t.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(Jt.Cache||qt),n}Jt.Cache=qt;var Kt=Jt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yt=/\\(\\)?/g,Zt=function(t){var e=Kt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Qt,(function(t,n,r,a){e.push(r?a.replace(Yt,"$1"):n||t)})),e}));var te=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a},ee=c,ne=_,re=f?f.prototype:void 0,ae=re?re.toString:void 0;var ie=function t(e){if("string"==typeof e)return e;if(ee(e))return te(e,t)+"";if(ne(e))return ae?ae.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},oe=ie;var le=c,ce=w,ge=Zt,he=function(t){return null==t?"":oe(t)};var de=_;var fe=function(t,e){return le(t)?t:ce(t,e)?[t]:ge(he(t))},ue=function(t){if("string"==typeof t||de(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var pe=function(t,e){for(var n=0,r=(e=fe(e,t)).length;null!=t&&n<r;)t=t[ue(e[n++])];return n&&n==r?t:void 0};var se=function(t,e,n){var r=null==t?void 0:pe(t,e);return void 0===r?n:r};const Fe=(t,e,n)=>e?se(n,e)||se(t,e):n||t,ye=(t,e)=>{const n=e||t.defaultValue;return se(t.collections,n)};var me;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(me||(me={}));const Se={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Be=t=>e=>{const n=e.theme,r=ye(Se,n[me.colorScheme]);return n.options&&n.options.color?Fe(r,t,n.options.color):Fe(r,t)},ve={Brand:{1:Be("Brand.1"),2:Be("Brand.2"),3:Be("Brand.3"),4:Be("Brand.4"),5:Be("Brand.5"),6:Be("Brand.6")},Primary:Be("Primary"),PrimaryDark:Be("PrimaryDark"),Secondary:Be("Secondary"),Accent:{Light:{1:Be("Accent.Light.1"),2:Be("Accent.Light.2"),3:Be("Accent.Light.3"),4:Be("Accent.Light.4"),5:Be("Accent.Light.5"),6:Be("Accent.Light.6")},Dark:{1:Be("Accent.Dark.1"),2:Be("Accent.Dark.2"),3:Be("Accent.Dark.3")}},Neutral:{1:Be("Neutral.1"),2:Be("Neutral.2"),3:Be("Neutral.3"),4:Be("Neutral.4"),5:Be("Neutral.5"),6:Be("Neutral.6"),7:Be("Neutral.7"),8:Be("Neutral.8")},Validation:{Green:{Text:Be("Validation.Green.Text"),Icon:Be("Validation.Green.Icon"),Border:Be("Validation.Green.Border"),Background:Be("Validation.Green.Background")},Orange:{Text:Be("Validation.Orange.Text"),Icon:Be("Validation.Orange.Icon"),Border:Be("Validation.Orange.Border"),Background:Be("Validation.Orange.Background"),Badge:Be("Validation.Orange.Badge")},Red:{Text:Be("Validation.Red.Text"),Icon:Be("Validation.Red.Icon"),Border:Be("Validation.Red.Border"),Background:Be("Validation.Red.Background")},Blue:{Text:Be("Validation.Blue.Text"),Icon:Be("Validation.Blue.Icon"),Border:Be("Validation.Blue.Border"),Background:Be("Validation.Blue.Background")}},Shadow:{Accent:Be("Shadow.Accent"),Red:Be("Shadow.Red"),Elevation:Be("Shadow.Elevation")}},De={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},He={collections:{base:{D1:{fontFamily:De.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:De.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:De.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:De.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:De.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:De.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:De.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:De.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:De.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:De.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:De.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:De.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:De.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:De.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},be=t=>e=>{const n=e.theme,r=ye(He,n[me.textStyleScheme]);return n.options&&n.options.textStyle?Fe(r,t,n.options.textStyle):Fe(r,t)},$e={D1:{fontFamily:be("D1.fontFamily"),fontSize:be("D1.fontSize"),fontWeight:be("D1.fontWeight"),lineHeight:be("D1.lineHeight"),letterSpacing:be("D1.letterSpacing")},D2:{fontFamily:be("D2.fontFamily"),fontSize:be("D2.fontSize"),fontWeight:be("D2.fontWeight"),lineHeight:be("D2.lineHeight"),letterSpacing:be("D2.letterSpacing")},D3:{fontFamily:be("D3.fontFamily"),fontSize:be("D3.fontSize"),fontWeight:be("D3.fontWeight"),lineHeight:be("D3.lineHeight"),letterSpacing:be("D3.letterSpacing")},D4:{fontFamily:be("D4.fontFamily"),fontSize:be("D4.fontSize"),fontWeight:be("D4.fontWeight"),lineHeight:be("D4.lineHeight"),letterSpacing:be("D4.letterSpacing")},DBody:{fontFamily:be("DBody.fontFamily"),fontSize:be("DBody.fontSize"),fontWeight:be("DBody.fontWeight"),lineHeight:be("DBody.lineHeight"),letterSpacing:be("DBody.letterSpacing")},H1:{fontFamily:be("H1.fontFamily"),fontSize:be("H1.fontSize"),fontWeight:be("H1.fontWeight"),lineHeight:be("H1.lineHeight"),letterSpacing:be("H1.letterSpacing")},H2:{fontFamily:be("H2.fontFamily"),fontSize:be("H2.fontSize"),fontWeight:be("H2.fontWeight"),lineHeight:be("H2.lineHeight"),letterSpacing:be("H2.letterSpacing")},H3:{fontFamily:be("H3.fontFamily"),fontSize:be("H3.fontSize"),fontWeight:be("H3.fontWeight"),lineHeight:be("H3.lineHeight"),letterSpacing:be("H3.letterSpacing")},H4:{fontFamily:be("H4.fontFamily"),fontSize:be("H4.fontSize"),fontWeight:be("H4.fontWeight"),lineHeight:be("H4.lineHeight"),letterSpacing:be("H4.letterSpacing")},H5:{fontFamily:be("H5.fontFamily"),fontSize:be("H5.fontSize"),fontWeight:be("H5.fontWeight"),lineHeight:be("H5.lineHeight"),letterSpacing:be("H5.letterSpacing")},H6:{fontFamily:be("H6.fontFamily"),fontSize:be("H6.fontSize"),fontWeight:be("H6.fontWeight"),lineHeight:be("H6.lineHeight"),letterSpacing:be("H6.letterSpacing")},Body:{fontFamily:be("Body.fontFamily"),fontSize:be("Body.fontSize"),fontWeight:be("Body.fontWeight"),lineHeight:be("Body.lineHeight"),letterSpacing:be("Body.letterSpacing")},BodySmall:{fontFamily:be("BodySmall.fontFamily"),fontSize:be("BodySmall.fontSize"),fontWeight:be("BodySmall.fontWeight"),lineHeight:be("BodySmall.lineHeight"),letterSpacing:be("BodySmall.letterSpacing")},XSmall:{fontFamily:be("XSmall.fontFamily"),fontSize:be("XSmall.fontSize"),fontWeight:be("XSmall.fontWeight"),lineHeight:be("XSmall.lineHeight"),letterSpacing:be("XSmall.letterSpacing")}},_e=t=>{switch(t){case 700:case"bold":return De.Bold;case 600:case"semibold":return De.Semibold;case 300:case"light":return De.Light;case 400:case"regular":return De.Regular;default:return""}},Ee=(t,e)=>n=>{var r;const i=$e[t].fontFamily(n),o=$e[t].fontWeight(n);return Object.values(De).includes(i)?a`
                font-family: ${_e(e)||_e(o)||i};
                font-weight: normal !important;
            `:a`
            font-family: ${i};
            font-weight: ${null!==(r=ze(e)||o)&&void 0!==r?r:"normal"};
        `},ze=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ae=Ee,ke=(t,e,n=!1)=>r=>{const i=$e[t],o=i.fontSize(r);return a`
            ${Ee(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},we=(t=!1,e=!1)=>e?a`
            display: block;
        `:t?a`
            display: inline;
        `:a`
            display: block;
        `;var Oe;!function(t){t.D1=r.h1`
        ${t=>a`
                ${ke("D1",t.weight,t.paragraph)}
                color: ${ve.Neutral[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.D2=r.h1`
        ${t=>a`
                ${ke("D2",t.weight,t.paragraph)}
                color: ${ve.Neutral[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.D3=r.h1`
        ${t=>a`
                ${ke("D3",t.weight,t.paragraph)}
                color: ${ve.Neutral[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.D4=r.h1`
        ${t=>a`
                ${ke("D4",t.weight,t.paragraph)}
                color: ${ve.Neutral[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.DBody=r.h1`
        ${t=>a`
                ${ke("DBody",t.weight,t.paragraph)}
                color: ${ve.Neutral[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H1=r.h1`
        ${t=>a`
                ${ke("H1",t.weight,t.paragraph)}
                color: ${ve.Neutral[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H2=r.h2`
        ${t=>a`
                ${ke("H2",t.weight,t.paragraph)}
                color: ${ve.Neutral[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H3=r.h3`
        ${t=>a`
                ${ke("H3",t.weight,t.paragraph)}
                color: ${ve.Neutral[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H4=r.h4`
        ${t=>a`
                ${ke("H4",t.weight,t.paragraph)}
                color: ${ve.Neutral[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H5=r.h5`
        ${t=>a`
                ${ke("H5",t.weight,t.paragraph)}
                color: ${ve.Neutral[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H6=r.h6`
        ${t=>a`
                ${ke("H6",t.weight,t.paragraph)}
                color: ${ve.Neutral[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.Body=r.p`
        ${t=>a`
                ${ke("Body",t.weight,t.paragraph)}
                color: ${ve.Neutral[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=r.p`
        ${t=>a`
                ${ke("BodySmall",t.weight,t.paragraph)}
                color: ${ve.Neutral[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.XSmall=r.span`
        ${t=>a`
                ${ke("XSmall",t.weight,t.paragraph)}
                color: ${ve.Neutral[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>je(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>je(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Oe||(Oe={}));const xe=r.a`
    ${t=>a`
            ${ke(t.textStyle,t.weight)}
            color: ${ve.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ve.Secondary};

                svg {
                    color: ${ve.Secondary};
                }
            }
        `}
`,We=r(i)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,je=n=>{var{external:r=!1,children:a}=n,i=o(n,["external","children"]);return t(xe,Object.assign({},i,{children:[a,r&&e(We,{})]}))};var Ce;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ce||(Ce={}));const Ne=r.div`
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    ${ke("BodySmall","regular")}

    ${t=>{let e,n;switch(t.$type){case"error":e=ve.Validation.Red.Background(t),n=ve.Validation.Red.Border(t);break;case"success":default:e=ve.Validation.Green.Background(t),n=ve.Validation.Green.Border(t);break;case"warning":e=ve.Validation.Orange.Background(t),n=ve.Validation.Orange.Border(t)}return`\n\t\t\tbackground: ${e};\n\t\t\tborder-left: 2pt solid ${n};\n\t\t`}}

	p {
        ${ke("BodySmall","regular")}
        margin: 0;

        strong {
            ${Ae("BodySmall","semibold")}
        }

        a {
            color: ${ve.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ve.Secondary};
            }
        }
    }
`,Ve=r(Oe.Hyperlink.Small)`
    margin-bottom: 0;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
`,Te=r(n)`
    height: 1.375rem;
    width: 1.375rem;
    margin-left: 0.25rem;
`,Ie=n=>{var{type:r,className:a,children:i,actionLink:l}=n,c=o(n,["type","className","children","actionLink"]);return t(Ne,Object.assign({className:a,$type:r,"data-testid":c["data-testid"]},{children:[i,l&&t(Ve,Object.assign({weight:"semibold"},l,{"data-testid":"action-link"},{children:[l.children,e(Te,{})]}))]}))};export{Ie as Alert};
//# sourceMappingURL=index.js.map
