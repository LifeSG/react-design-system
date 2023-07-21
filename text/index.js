import t,{css as e}from"styled-components";import{jsxs as n,jsx as i}from"react/jsx-runtime";import{ExternalIcon as r}from"@lifesg/react-icons/external";const a={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},o={D1:{fontFamily:a.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:a.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:a.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:a.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:a.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:a.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:a.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:a.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:a.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:a.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:a.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:a.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:a.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:a.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=Array.isArray,g="object"==typeof l&&l&&l.Object===Object&&l,h="object"==typeof self&&self&&self.Object===Object&&self,f=g||h||Function("return this")(),p=f.Symbol,u=p,y=Object.prototype,d=y.hasOwnProperty,F=y.toString,s=u?u.toStringTag:void 0;var S=function(t){var e=d.call(t,s),n=t[s];try{t[s]=void 0;var i=!0}catch(t){}var r=F.call(t);return i&&(e?t[s]=n:delete t[s]),r},B=Object.prototype.toString;var m=S,D=function(t){return B.call(t)},v=p?p.toStringTag:void 0;var H=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?m(t):D(t)};var $=H,_=function(t){return null!=t&&"object"==typeof t};var b=function(t){return"symbol"==typeof t||_(t)&&"[object Symbol]"==$(t)},E=c,z=b,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/;var w=function(t,e){if(E(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!z(t))||(x.test(t)||!A.test(t)||null!=e&&t in Object(e))};var T=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},W=H,C=T;var k,O=function(t){if(!C(t))return!1;var e=W(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},j=f["__core-js_shared__"],V=(k=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"";var I=function(t){return!!V&&V in t},R=Function.prototype.toString;var P=O,L=I,N=T,X=function(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""},G=/^\[object .+?Constructor\]$/,M=Function.prototype,U=Object.prototype,q=M.toString,J=U.hasOwnProperty,K=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!N(t)||L(t))&&(P(t)?K:G).test(X(t))},Y=function(t,e){return null==t?void 0:t[e]};var Z=function(t,e){var n=Y(t,e);return Q(n)?n:void 0},tt=Z(Object,"create"),et=tt;var nt=function(){this.__data__=et?et(null):{},this.size=0};var it=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},rt=tt,at=Object.prototype.hasOwnProperty;var ot=function(t){var e=this.__data__;if(rt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return at.call(e,t)?e[t]:void 0},lt=tt,ct=Object.prototype.hasOwnProperty;var gt=tt;var ht=nt,ft=it,pt=ot,ut=function(t){var e=this.__data__;return lt?void 0!==e[t]:ct.call(e,t)},yt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=gt&&void 0===e?"__lodash_hash_undefined__":e,this};function dt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}dt.prototype.clear=ht,dt.prototype.delete=ft,dt.prototype.get=pt,dt.prototype.has=ut,dt.prototype.set=yt;var Ft=dt;var st=function(){this.__data__=[],this.size=0};var St=function(t,e){return t===e||t!=t&&e!=e};var Bt=function(t,e){for(var n=t.length;n--;)if(St(t[n][0],e))return n;return-1},mt=Bt,Dt=Array.prototype.splice;var vt=Bt;var Ht=Bt;var $t=Bt;var _t=st,bt=function(t){var e=this.__data__,n=mt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Dt.call(e,n,1),--this.size,!0)},Et=function(t){var e=this.__data__,n=vt(e,t);return n<0?void 0:e[n][1]},zt=function(t){return Ht(this.__data__,t)>-1},At=function(t,e){var n=this.__data__,i=$t(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function xt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}xt.prototype.clear=_t,xt.prototype.delete=bt,xt.prototype.get=Et,xt.prototype.has=zt,xt.prototype.set=At;var wt=xt,Tt=Z(f,"Map"),Wt=Ft,Ct=wt,kt=Tt;var Ot=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var jt=function(t,e){var n=t.__data__;return Ot(e)?n["string"==typeof e?"string":"hash"]:n.map},Vt=jt;var It=jt;var Rt=jt;var Pt=jt;var Lt=function(){this.size=0,this.__data__={hash:new Wt,map:new(kt||Ct),string:new Wt}},Nt=function(t){var e=Vt(this,t).delete(t);return this.size-=e?1:0,e},Xt=function(t){return It(this,t).get(t)},Gt=function(t){return Rt(this,t).has(t)},Mt=function(t,e){var n=Pt(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function Ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Ut.prototype.clear=Lt,Ut.prototype.delete=Nt,Ut.prototype.get=Xt,Ut.prototype.has=Gt,Ut.prototype.set=Mt;var qt=Ut;function Jt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],a=n.cache;if(a.has(r))return a.get(r);var o=t.apply(this,i);return n.cache=a.set(r,o)||a,o};return n.cache=new(Jt.Cache||qt),n}Jt.Cache=qt;var Kt=Jt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yt=/\\(\\)?/g,Zt=function(t){var e=Kt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Qt,(function(t,n,i,r){e.push(i?r.replace(Yt,"$1"):n||t)})),e}));var te=function(t,e){for(var n=-1,i=null==t?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r},ee=c,ne=b,ie=p?p.prototype:void 0,re=ie?ie.toString:void 0;var ae=function t(e){if("string"==typeof e)return e;if(ee(e))return te(e,t)+"";if(ne(e))return re?re.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},oe=ae;var le=c,ce=w,ge=Zt,he=function(t){return null==t?"":oe(t)};var fe=b;var pe=function(t,e){return le(t)?t:ce(t,e)?[t]:ge(he(t))},ue=function(t){if("string"==typeof t||fe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ye=function(t,e){for(var n=0,i=(e=pe(e,t)).length;null!=t&&n<i;)t=t[ue(e[n++])];return n&&n==i?t:void 0};var de=function(t,e,n){var i=null==t?void 0:ye(t,e);return void 0===i?n:i};const Fe=(t,e,n)=>e?de(n,e)||de(t,e):n||t,se=(t,e)=>{const n=e||t.defaultValue;return de(t.collections,n)};var Se;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Se||(Se={}));const Be={collections:{base:o},defaultValue:"base"},me=t=>e=>{const n=e.theme,i=se(Be,n[Se.textStyleScheme]);return n.options&&n.options.textStyle?Fe(i,t,n.options.textStyle):Fe(i,t)},De={D1:{fontFamily:me("D1.fontFamily"),fontSize:me("D1.fontSize"),fontWeight:me("D1.fontWeight"),lineHeight:me("D1.lineHeight"),letterSpacing:me("D1.letterSpacing")},D2:{fontFamily:me("D2.fontFamily"),fontSize:me("D2.fontSize"),fontWeight:me("D2.fontWeight"),lineHeight:me("D2.lineHeight"),letterSpacing:me("D2.letterSpacing")},D3:{fontFamily:me("D3.fontFamily"),fontSize:me("D3.fontSize"),fontWeight:me("D3.fontWeight"),lineHeight:me("D3.lineHeight"),letterSpacing:me("D3.letterSpacing")},D4:{fontFamily:me("D4.fontFamily"),fontSize:me("D4.fontSize"),fontWeight:me("D4.fontWeight"),lineHeight:me("D4.lineHeight"),letterSpacing:me("D4.letterSpacing")},DBody:{fontFamily:me("DBody.fontFamily"),fontSize:me("DBody.fontSize"),fontWeight:me("DBody.fontWeight"),lineHeight:me("DBody.lineHeight"),letterSpacing:me("DBody.letterSpacing")},H1:{fontFamily:me("H1.fontFamily"),fontSize:me("H1.fontSize"),fontWeight:me("H1.fontWeight"),lineHeight:me("H1.lineHeight"),letterSpacing:me("H1.letterSpacing")},H2:{fontFamily:me("H2.fontFamily"),fontSize:me("H2.fontSize"),fontWeight:me("H2.fontWeight"),lineHeight:me("H2.lineHeight"),letterSpacing:me("H2.letterSpacing")},H3:{fontFamily:me("H3.fontFamily"),fontSize:me("H3.fontSize"),fontWeight:me("H3.fontWeight"),lineHeight:me("H3.lineHeight"),letterSpacing:me("H3.letterSpacing")},H4:{fontFamily:me("H4.fontFamily"),fontSize:me("H4.fontSize"),fontWeight:me("H4.fontWeight"),lineHeight:me("H4.lineHeight"),letterSpacing:me("H4.letterSpacing")},H5:{fontFamily:me("H5.fontFamily"),fontSize:me("H5.fontSize"),fontWeight:me("H5.fontWeight"),lineHeight:me("H5.lineHeight"),letterSpacing:me("H5.letterSpacing")},H6:{fontFamily:me("H6.fontFamily"),fontSize:me("H6.fontSize"),fontWeight:me("H6.fontWeight"),lineHeight:me("H6.lineHeight"),letterSpacing:me("H6.letterSpacing")},Body:{fontFamily:me("Body.fontFamily"),fontSize:me("Body.fontSize"),fontWeight:me("Body.fontWeight"),lineHeight:me("Body.lineHeight"),letterSpacing:me("Body.letterSpacing")},BodySmall:{fontFamily:me("BodySmall.fontFamily"),fontSize:me("BodySmall.fontSize"),fontWeight:me("BodySmall.fontWeight"),lineHeight:me("BodySmall.lineHeight"),letterSpacing:me("BodySmall.letterSpacing")},XSmall:{fontFamily:me("XSmall.fontFamily"),fontSize:me("XSmall.fontSize"),fontWeight:me("XSmall.fontWeight"),lineHeight:me("XSmall.lineHeight"),letterSpacing:me("XSmall.letterSpacing")}},ve=t=>{switch(t){case 700:case"bold":return a.Bold;case 600:case"semibold":return a.Semibold;case 300:case"light":return a.Light;case 400:case"regular":return a.Regular;default:return""}},He=(t,n)=>i=>{const r=De[t].fontFamily(i),o=De[t].fontWeight(i);return Object.values(a).includes(r)?e`
                font-family: ${ve(n)||ve(o)||r};
                font-weight: normal !important;
            `:e`
            font-family: ${r};
            font-weight: ${($e(n)||o)??"normal"};
        `},$e=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},_e={getFontFamily:He,getTextStyle:(t,n,i=!1)=>r=>{const a=De[t],o=a.fontSize(r);return e`
            ${He(t,n)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${e`
                margin-bottom: ${o*(i?1.05:0)}rem;
            `}
        `},getDisplayStyle:(t=!1,n=!1)=>n?e`
            display: block;
        `:t?e`
            display: inline;
        `:e`
            display: block;
        `},be={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ee=t=>e=>{const n=e.theme,i=se(be,n[Se.colorScheme]);return n.options&&n.options.color?Fe(i,t,n.options.color):Fe(i,t)},ze=(Ee("Brand.1"),Ee("Brand.2"),Ee("Brand.3"),Ee("Brand.4"),Ee("Brand.5"),Ee("Brand.6"),Ee("Primary")),Ae=(Ee("PrimaryDark"),Ee("Secondary")),xe=(Ee("Accent.Light.1"),Ee("Accent.Light.2"),Ee("Accent.Light.3"),Ee("Accent.Light.4"),Ee("Accent.Light.5"),Ee("Accent.Light.6"),Ee("Accent.Dark.1"),Ee("Accent.Dark.2"),Ee("Accent.Dark.3"),{1:Ee("Neutral.1"),2:Ee("Neutral.2"),3:Ee("Neutral.3"),4:Ee("Neutral.4"),5:Ee("Neutral.5"),6:Ee("Neutral.6"),7:Ee("Neutral.7"),8:Ee("Neutral.8")});Ee("Validation.Green.Text"),Ee("Validation.Green.Icon"),Ee("Validation.Green.Border"),Ee("Validation.Green.Background"),Ee("Validation.Orange.Text"),Ee("Validation.Orange.Icon"),Ee("Validation.Orange.Border"),Ee("Validation.Orange.Background"),Ee("Validation.Orange.Badge"),Ee("Validation.Red.Text"),Ee("Validation.Red.Icon"),Ee("Validation.Red.Border"),Ee("Validation.Red.Background"),Ee("Validation.Blue.Text"),Ee("Validation.Blue.Icon"),Ee("Validation.Blue.Border"),Ee("Validation.Blue.Background"),Ee("Shadow.Accent"),Ee("Shadow.Red"),Ee("Shadow.Elevation");var we;!function(n){n.D1=t.h1`
        ${t=>e`
                ${_e.getTextStyle("D1",t.weight,t.paragraph)}
                color: ${xe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.D2=t.h1`
        ${t=>e`
                ${_e.getTextStyle("D2",t.weight,t.paragraph)}
                color: ${xe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.D3=t.h1`
        ${t=>e`
                ${_e.getTextStyle("D3",t.weight,t.paragraph)}
                color: ${xe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.D4=t.h1`
        ${t=>e`
                ${_e.getTextStyle("D4",t.weight,t.paragraph)}
                color: ${xe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.DBody=t.h1`
        ${t=>e`
                ${_e.getTextStyle("DBody",t.weight,t.paragraph)}
                color: ${xe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H1=t.h1`
        ${t=>e`
                ${_e.getTextStyle("H1",t.weight,t.paragraph)}
                color: ${xe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H2=t.h2`
        ${t=>e`
                ${_e.getTextStyle("H2",t.weight,t.paragraph)}
                color: ${xe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H3=t.h3`
        ${t=>e`
                ${_e.getTextStyle("H3",t.weight,t.paragraph)}
                color: ${xe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H4=t.h4`
        ${t=>e`
                ${_e.getTextStyle("H4",t.weight,t.paragraph)}
                color: ${xe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H5=t.h5`
        ${t=>e`
                ${_e.getTextStyle("H5",t.weight,t.paragraph)}
                color: ${xe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H6=t.h6`
        ${t=>e`
                ${_e.getTextStyle("H6",t.weight,t.paragraph)}
                color: ${xe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.Body=t.p`
        ${t=>e`
                ${_e.getTextStyle("Body",t.weight,t.paragraph)}
                color: ${xe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.BodySmall=t.p`
        ${t=>e`
                ${_e.getTextStyle("BodySmall",t.weight,t.paragraph)}
                color: ${xe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.XSmall=t.span`
        ${t=>e`
                ${_e.getTextStyle("XSmall",t.weight,t.paragraph)}
                color: ${xe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.Hyperlink={Default:t=>Ce({...t,textStyle:"Body"}),Small:t=>Ce({...t,textStyle:"BodySmall"})}}(we||(we={}));const Te=t.a`
    ${t=>e`
            ${_e.getTextStyle(t.textStyle,t.weight)}
            color: ${ze};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ae};

                svg {
                    color: ${Ae};
                }
            }
        `}
`,We=t(r)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ce=({external:t=!1,children:e,...r})=>n(Te,{...r,children:[e,t&&i(We,{})]});var ke;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(ke||(ke={}));export{ke as RedirectScope,we as Text,De as TextStyle,_e as TextStyleHelper};
//# sourceMappingURL=index.js.map
