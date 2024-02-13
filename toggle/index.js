import{jsxs as t,jsx as e}from"react/jsx-runtime";import{useState as n,useRef as r,useEffect as i}from"react";import o,{css as a}from"styled-components";import{ExternalIcon as s}from"@lifesg/react-icons/external";import{CircleIcon as c}from"@lifesg/react-icons/circle";import{CircleDotIcon as l}from"@lifesg/react-icons/circle-dot";import{CrossIcon as u}from"@lifesg/react-icons/cross";import{SquareIcon as d}from"@lifesg/react-icons/square";import{SquareTickFillIcon as h}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as f}from"@lifesg/react-icons/tick";var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var m=Array.isArray,y="object"==typeof g&&g&&g.Object===Object&&g,$="object"==typeof self&&self&&self.Object===Object&&self,v=y||$||Function("return this")(),F=v.Symbol,D=F,S=Object.prototype,B=S.hasOwnProperty,b=S.toString,x=D?D.toStringTag:void 0;var H=function(t){var e=B.call(t,x),n=t[x];try{t[x]=void 0;var r=!0}catch(t){}var i=b.call(t);return r&&(e?t[x]=n:delete t[x]),i},w=Object.prototype.toString;var M=H,O=function(t){return w.call(t)},E=F?F.toStringTag:void 0;var A=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":E&&E in Object(t)?M(t):O(t)};var k=A,_=function(t){return null!=t&&"object"==typeof t};var Y=function(t){return"symbol"==typeof t||_(t)&&"[object Symbol]"==k(t)},z=m,T=Y,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,L=/^\w*$/;var C=function(t,e){if(z(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!T(t))||(L.test(t)||!W.test(t)||null!=e&&t in Object(e))};var j=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},I=A,R=j;var V,N=function(t){if(!R(t))return!1;var e=I(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},P=v["__core-js_shared__"],Z=(V=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var U=function(t){return!!Z&&Z in t},X=Function.prototype.toString;var G=N,J=U,q=j,Q=function(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""},K=/^\[object .+?Constructor\]$/,tt=Function.prototype,et=Object.prototype,nt=tt.toString,rt=et.hasOwnProperty,it=RegExp("^"+nt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ot=function(t){return!(!q(t)||J(t))&&(G(t)?it:K).test(Q(t))},at=function(t,e){return null==t?void 0:t[e]};var st=function(t,e){var n=at(t,e);return ot(n)?n:void 0},ct=st(Object,"create"),lt=ct;var ut=function(){this.__data__=lt?lt(null):{},this.size=0};var dt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ht=ct,ft=Object.prototype.hasOwnProperty;var gt=function(t){var e=this.__data__;if(ht){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ft.call(e,t)?e[t]:void 0},pt=ct,mt=Object.prototype.hasOwnProperty;var yt=ct;var $t=ut,vt=dt,Ft=gt,Dt=function(t){var e=this.__data__;return pt?void 0!==e[t]:mt.call(e,t)},St=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=yt&&void 0===e?"__lodash_hash_undefined__":e,this};function Bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Bt.prototype.clear=$t,Bt.prototype.delete=vt,Bt.prototype.get=Ft,Bt.prototype.has=Dt,Bt.prototype.set=St;var bt=Bt;var xt=function(){this.__data__=[],this.size=0};var Ht=function(t,e){return t===e||t!=t&&e!=e};var wt=function(t,e){for(var n=t.length;n--;)if(Ht(t[n][0],e))return n;return-1},Mt=wt,Ot=Array.prototype.splice;var Et=wt;var At=wt;var kt=wt;var _t=xt,Yt=function(t){var e=this.__data__,n=Mt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ot.call(e,n,1),--this.size,!0)},zt=function(t){var e=this.__data__,n=Et(e,t);return n<0?void 0:e[n][1]},Tt=function(t){return At(this.__data__,t)>-1},Wt=function(t,e){var n=this.__data__,r=kt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Lt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Lt.prototype.clear=_t,Lt.prototype.delete=Yt,Lt.prototype.get=zt,Lt.prototype.has=Tt,Lt.prototype.set=Wt;var Ct=Lt,jt=st(v,"Map"),It=bt,Rt=Ct,Vt=jt;var Nt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Pt=function(t,e){var n=t.__data__;return Nt(e)?n["string"==typeof e?"string":"hash"]:n.map},Zt=Pt;var Ut=Pt;var Xt=Pt;var Gt=Pt;var Jt=function(){this.size=0,this.__data__={hash:new It,map:new(Vt||Rt),string:new It}},qt=function(t){var e=Zt(this,t).delete(t);return this.size-=e?1:0,e},Qt=function(t){return Ut(this,t).get(t)},Kt=function(t){return Xt(this,t).has(t)},te=function(t,e){var n=Gt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ee(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ee.prototype.clear=Jt,ee.prototype.delete=qt,ee.prototype.get=Qt,ee.prototype.has=Kt,ee.prototype.set=te;var ne=ee;function re(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(re.Cache||ne),n}re.Cache=ne;var ie=re;var oe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ae=/\\(\\)?/g,se=function(t){var e=ie(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(oe,(function(t,n,r,i){e.push(r?i.replace(ae,"$1"):n||t)})),e}));var ce=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},le=m,ue=Y,de=F?F.prototype:void 0,he=de?de.toString:void 0;var fe=function t(e){if("string"==typeof e)return e;if(le(e))return ce(e,t)+"";if(ue(e))return he?he.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ge=fe;var pe=m,me=C,ye=se,$e=function(t){return null==t?"":ge(t)};var ve=Y;var Fe=function(t,e){return pe(t)?t:me(t,e)?[t]:ye($e(t))},De=function(t){if("string"==typeof t||ve(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Se=function(t,e){for(var n=0,r=(e=Fe(e,t)).length;null!=t&&n<r;)t=t[De(e[n++])];return n&&n==r?t:void 0};var Be=p((function(t,e,n){var r=null==t?void 0:Se(t,e);return void 0===r?n:r}));const be=(t,e,n)=>e?Be(n,e)||Be(t,e):n||t,xe=(t,e)=>{const n=e||t.defaultValue;return Be(t.collections,n)};var He;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(He||(He={}));const we={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Me=t=>e=>{const n=e.theme,r=xe(we,n[He.colorScheme]);return n.options&&n.options.color?be(r,t,n.options.color):be(r,t)},Oe=(Me("Brand.1"),Me("Brand.2"),Me("Brand.3"),Me("Brand.4"),Me("Brand.5"),Me("Brand.6"),Me("Primary")),Ee=(Me("PrimaryDark"),Me("Secondary")),Ae={Light:{1:Me("Accent.Light.1"),2:Me("Accent.Light.2"),3:Me("Accent.Light.3"),4:Me("Accent.Light.4"),5:Me("Accent.Light.5"),6:Me("Accent.Light.6")},Dark:{1:Me("Accent.Dark.1"),2:Me("Accent.Dark.2"),3:Me("Accent.Dark.3")}},ke={1:Me("Neutral.1"),2:Me("Neutral.2"),3:Me("Neutral.3"),4:Me("Neutral.4"),5:Me("Neutral.5"),6:Me("Neutral.6"),7:Me("Neutral.7"),8:Me("Neutral.8")},_e={Green:{Text:Me("Validation.Green.Text"),Icon:Me("Validation.Green.Icon"),Border:Me("Validation.Green.Border"),Background:Me("Validation.Green.Background")},Orange:{Text:Me("Validation.Orange.Text"),Icon:Me("Validation.Orange.Icon"),Border:Me("Validation.Orange.Border"),Background:Me("Validation.Orange.Background"),Badge:Me("Validation.Orange.Badge")},Red:{Text:Me("Validation.Red.Text"),Icon:Me("Validation.Red.Icon"),Border:Me("Validation.Red.Border"),Background:Me("Validation.Red.Background")},Blue:{Text:Me("Validation.Blue.Text"),Icon:Me("Validation.Blue.Icon"),Border:Me("Validation.Blue.Border"),Background:Me("Validation.Blue.Background")}},Ye={Accent:Me("Shadow.Accent"),Red:Me("Shadow.Red"),Elevation:Me("Shadow.Elevation")},ze={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Te={collections:{base:{D1:{fontFamily:ze.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ze.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ze.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ze.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ze.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ze.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ze.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ze.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ze.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ze.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ze.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ze.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ze.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ze.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},We=t=>e=>{const n=e.theme,r=xe(Te,n[He.textStyleScheme]);return n.options&&n.options.textStyle?be(r,t,n.options.textStyle):be(r,t)},Le={D1:{fontFamily:We("D1.fontFamily"),fontSize:We("D1.fontSize"),fontWeight:We("D1.fontWeight"),lineHeight:We("D1.lineHeight"),letterSpacing:We("D1.letterSpacing")},D2:{fontFamily:We("D2.fontFamily"),fontSize:We("D2.fontSize"),fontWeight:We("D2.fontWeight"),lineHeight:We("D2.lineHeight"),letterSpacing:We("D2.letterSpacing")},D3:{fontFamily:We("D3.fontFamily"),fontSize:We("D3.fontSize"),fontWeight:We("D3.fontWeight"),lineHeight:We("D3.lineHeight"),letterSpacing:We("D3.letterSpacing")},D4:{fontFamily:We("D4.fontFamily"),fontSize:We("D4.fontSize"),fontWeight:We("D4.fontWeight"),lineHeight:We("D4.lineHeight"),letterSpacing:We("D4.letterSpacing")},DBody:{fontFamily:We("DBody.fontFamily"),fontSize:We("DBody.fontSize"),fontWeight:We("DBody.fontWeight"),lineHeight:We("DBody.lineHeight"),letterSpacing:We("DBody.letterSpacing")},H1:{fontFamily:We("H1.fontFamily"),fontSize:We("H1.fontSize"),fontWeight:We("H1.fontWeight"),lineHeight:We("H1.lineHeight"),letterSpacing:We("H1.letterSpacing")},H2:{fontFamily:We("H2.fontFamily"),fontSize:We("H2.fontSize"),fontWeight:We("H2.fontWeight"),lineHeight:We("H2.lineHeight"),letterSpacing:We("H2.letterSpacing")},H3:{fontFamily:We("H3.fontFamily"),fontSize:We("H3.fontSize"),fontWeight:We("H3.fontWeight"),lineHeight:We("H3.lineHeight"),letterSpacing:We("H3.letterSpacing")},H4:{fontFamily:We("H4.fontFamily"),fontSize:We("H4.fontSize"),fontWeight:We("H4.fontWeight"),lineHeight:We("H4.lineHeight"),letterSpacing:We("H4.letterSpacing")},H5:{fontFamily:We("H5.fontFamily"),fontSize:We("H5.fontSize"),fontWeight:We("H5.fontWeight"),lineHeight:We("H5.lineHeight"),letterSpacing:We("H5.letterSpacing")},H6:{fontFamily:We("H6.fontFamily"),fontSize:We("H6.fontSize"),fontWeight:We("H6.fontWeight"),lineHeight:We("H6.lineHeight"),letterSpacing:We("H6.letterSpacing")},Body:{fontFamily:We("Body.fontFamily"),fontSize:We("Body.fontSize"),fontWeight:We("Body.fontWeight"),lineHeight:We("Body.lineHeight"),letterSpacing:We("Body.letterSpacing")},BodySmall:{fontFamily:We("BodySmall.fontFamily"),fontSize:We("BodySmall.fontSize"),fontWeight:We("BodySmall.fontWeight"),lineHeight:We("BodySmall.lineHeight"),letterSpacing:We("BodySmall.letterSpacing")},XSmall:{fontFamily:We("XSmall.fontFamily"),fontSize:We("XSmall.fontSize"),fontWeight:We("XSmall.fontWeight"),lineHeight:We("XSmall.lineHeight"),letterSpacing:We("XSmall.letterSpacing")}},Ce=t=>{switch(t){case 700:case"bold":return ze.Bold;case 600:case"semibold":return ze.Semibold;case 300:case"light":return ze.Light;case 400:case"regular":return ze.Regular;default:return""}},je=(t,e)=>n=>{var r;const i=Le[t].fontFamily(n),o=Le[t].fontWeight(n);return Object.values(ze).includes(i)?a`
                font-family: ${Ce(e)||Ce(o)||i};
                font-weight: normal !important;
            `:a`
            font-family: ${i};
            font-weight: ${null!==(r=Ie(e)||o)&&void 0!==r?r:"normal"};
        `},Ie=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Re=t=>{if(t>0)return a`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},Ve=je,Ne=(t,e,n=!1)=>r=>{const i=Le[t],o=i.fontSize(r);return a`
            ${je(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Pe=(t=!1,e=!1,n=void 0)=>e?a`
            display: block;
            ${Re(n)}
        `:t?a`
            display: inline;
        `:a`
            display: block;
            ${Re(n)}
        `;var Ze;"function"==typeof SuppressedError&&SuppressedError,function(t){t.D1=o.h1`
        ${t=>a`
                ${Ne("D1",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=o.h1`
        ${t=>a`
                ${Ne("D2",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=o.h1`
        ${t=>a`
                ${Ne("D3",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=o.h1`
        ${t=>a`
                ${Ne("D4",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=o.h1`
        ${t=>a`
                ${Ne("DBody",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=o.h1`
        ${t=>a`
                ${Ne("H1",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=o.h2`
        ${t=>a`
                ${Ne("H2",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=o.h3`
        ${t=>a`
                ${Ne("H3",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=o.h4`
        ${t=>a`
                ${Ne("H4",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=o.h5`
        ${t=>a`
                ${Ne("H5",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=o.h6`
        ${t=>a`
                ${Ne("H6",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=o.p`
        ${t=>a`
                ${Ne("Body",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=o.p`
        ${t=>a`
                ${Ne("BodySmall",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=o.span`
        ${t=>a`
                ${Ne("XSmall",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${Pe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Ge(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Ge(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Ze||(Ze={}));const Ue=o.a`
    ${t=>a`
            ${Ne(t.textStyle,t.weight)}
            color: ${Oe};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ee};

                svg {
                    color: ${Ee};
                }
            }
        `}
`,Xe=o(s)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ge=n=>{var{external:r=!1,children:i}=n,o=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(n,["external","children"]);return t(Ue,Object.assign({},o,{children:[i,r&&e(Xe,{})]}))};var Je;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Je||(Je={}));const qe=o.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${t=>t.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${t=>{if(!t.$indicator)return a`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${t=>"no-border"===t.$styleType?t.$error?a`
                        border-color: ${_e.Red.Icon};
                        background: ${ke[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Ye.Red};
                        }
                    `:t.$disabled?a`
                        border-color: transparent;
                    `:a`
                        border-color: transparent;

                        :hover {
                            background: ${Ae.Light[6]};
                        }
                    `:t.$disabled&&!t.$selected?a`
                        background: ${ke[6]};
                        border-color: ${ke[5]};
                    `:t.$disabled&&t.$selected?a`
                        background: ${ke[6]};
                        border-color: ${ke[4]};
                    `:t.$error?a`
                        background: ${ke[8]};
                        border-color: ${_e.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Ye.Red};
                        }
                    `:t.$selected?a`
                        background: ${Ae.Light[5]};
                        border-color: ${Oe};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Ye.Accent};
                        }
                    `:a`
                        background: ${ke[8]};
                        border-color: ${ke[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Ye.Accent};
                            border-color: ${Ae.Light[1]};
                        }
                    `}
`,Qe=o.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${t=>t.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,Ke=o.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
`,tn=o.label`
    ${t=>t.$selected&&!t.$indicator?a`
                ${Ne("H4","semibold")}
            `:a`
                ${Ne("H4","regular")}
            `}

    color: ${ke[1]};

    ${t=>t.$disabled?a`
                color: ${ke[3]};
            `:t.$selected?a`
                color: ${Oe};
            `:void 0}
`,en=o.div`
    ${Ne("BodySmall","regular")}
    margin-top: 0.5rem;

    strong,
    b {
        ${Ve("BodySmall","semibold")}
        color: inherit;
    }

    ${t=>t.$disabled?a`
                color: ${ke[3]};
            `:t.$selected?a`
                color: ${Oe};
            `:a`
                color: ${ke[1]};
            `}
`,nn=o.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${t=>t.$active&&!t.disabled?a`
                    color: ${Oe};
                `:a`
                    color: ${ke[4]};
                `};
    }
`,rn=({type:t,active:n=!1,disabled:r,className:i})=>{let o;switch(t){case"checkbox":o=e(n?h:d,{});break;case"radio":o=e(n?l:c,{});break;case"tick":o=e(f,{});break;case"cross":o=e(u,{});break;default:o=null}return e(nn,Object.assign({className:i,$active:n,disabled:r},{children:o}))};var on={exports:{}};on.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(t){return(t=+t)+(t>68?1900:2e3)},s=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],l=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},d={A:[i,function(t){this.afternoon=u(t,!1)}],a:[i,function(t){this.afternoon=u(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(t){var e=l("months"),n=(l("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=l("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(t){this.year=a(t)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),s=a.length,c=0;c<s;c+=1){var l=a[c],u=d[l],h=u&&u[0],f=u&&u[1];a[c]=f?{regex:h,parser:f}:l.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,c=i.parser,l=t.slice(r),u=o.exec(l)[0];c.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,a=t.args;this.$u=r;var s=a[1];if("string"==typeof s){var c=!0===a[2],l=!0===a[3],u=c||l,d=a[2];l&&(d=a[2]),o=this.$locale(),!c&&d&&(o=n.Ls[d]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=h(e)(t),i=r.year,o=r.month,a=r.day,s=r.hours,c=r.minutes,l=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,g=a||(i||o?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,$=c||0,v=l||0,F=u||0;return d?new Date(Date.UTC(p,m,g,y,$,v,F+60*d.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,$,v,F)):new Date(p,m,g,y,$,v,F)}catch(t){return new Date("")}}(e,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&e!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){a[1]=s[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,t)}}}();var an,sn,cn=p(on.exports),ln={exports:{}},un=p(ln.exports=(an={year:0,month:1,day:2,hour:3,minute:4,second:5},sn={},function(t,e,n){var r,i=function(t,e,n){void 0===n&&(n={});var r=new Date(t),i=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=sn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),sn[r]=i),i}(e,n);return i.formatToParts(r)},o=function(t,e){for(var r=i(t,e),o=[],a=0;a<r.length;a+=1){var s=r[a],c=s.type,l=s.value,u=an[c];u>=0&&(o[u]=parseInt(l,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+t;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},a=e.prototype;a.tz=function(t,e){void 0===t&&(t=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:t}),s=Math.round((o-new Date(a))/1e3/60),c=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(e){var l=c.utcOffset();c=c.add(i-l,"minute")}return c.$x.$timezone=t,c},a.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var a=i&&e,s=i||e||r,c=o(+n(),s);if("string"!=typeof t)return n(t).tz(s);var l=function(t,e,n){var r=t-60*e*1e3,i=o(r,n);if(e===i)return[r,e];var a=o(r-=60*(i-e)*1e3,n);return i===a?[r,i]:[t-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(t,a).valueOf(),c,s),u=l[0],d=l[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}})),dn={exports:{}};dn.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",c="week",l="month",u="quarter",d="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,l),o=n-i<0,a=e.clone().add(r+(o?-1:1),l);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:c,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",F={};F[v]=m;var D=function(t){return t instanceof x},S=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var o=e.toLowerCase();F[o]&&(i=o),n&&(F[o]=n,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var s=e.name;F[s]=e,i=s}return!r&&i&&(v=i),i||!r&&v},B=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},b=$;b.l=S,b.i=D,b.w=function(t,e){return B(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function m(t){this.$L=S(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return b},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=B(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return B(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<B(t)},y.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!b.u(e)||e,u=b.p(t),f=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},g=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case l:return r?f(1,m):f(0,m+1);case c:var v=this.$locale().weekStart||0,F=(p<v?p+7:p)-v;return f(r?y-F:y+(6-F),m);case s:case h:return g($+"Hours",0);case a:return g($+"Minutes",1);case o:return g($+"Seconds",2);case i:return g($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,c=b.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],g=c===s?this.$D+(e-this.$W):e;if(c===l||c===d){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[b.p(t)]()},y.add=function(r,u){var h,f=this;r=Number(r);var g=b.p(u),p=function(t){var e=B(f);return b.w(e.date(e.date()+Math.round(t*r)),f)};if(g===l)return this.set(l,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===s)return p(1);if(g===c)return p(7);var m=(h={},h[o]=e,h[a]=n,h[i]=t,h)[g]||1,y=this.$d.getTime()+r*m;return b.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),o=this.$H,a=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},d=function(t){return b.s(o%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:b.s(s+1,2,"0"),MMM:u(n.monthsShort,s,l,3),MMMM:u(l,s),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:b.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=b.p(h),m=B(r),y=(m.utcOffset()-this.utcOffset())*e,$=this-m,v=b.m(this,m);return v=(g={},g[d]=v/12,g[l]=v,g[u]=v/3,g[c]=($-y)/6048e5,g[s]=($-y)/864e5,g[a]=$/n,g[o]=$/e,g[i]=$/t,g)[p]||$,f?v:b.a(v)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return F[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return b.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),H=x.prototype;return B.prototype=H,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",l],["$y",d],["$D",h]].forEach((function(t){H[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),B.extend=function(t,e){return t.$i||(t(e,x,B),t.$i=!0),B},B.locale=S,B.isDayjs=D,B.unix=function(t){return B(1e3*t)},B.en=F[v],B.Ls=F,B.p={},B}();var hn=p(dn.exports),fn={exports:{}};fn.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var o=n(t),a=n(e),s="("===(i=i||"()")[0],c=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(c?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(c?this.isAfter(a,r):!this.isBefore(a,r))}};var gn=p(fn.exports),pn={exports:{}};pn.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var mn=p(pn.exports),yn={exports:{}};yn.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var $n,vn=p(yn.exports);hn.extend(gn),hn.extend(mn),hn.extend(vn),hn.extend(cn),hn.extend(un),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=hn(e).startOf("week");return Fn(n).map((t=>Dn(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return Dn(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(hn(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+hn(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=hn(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")},t.getWeekStartEnd=t=>({start:t.startOf("week").format("YYYY-MM-DD"),end:t.endOf("week").format("YYYY-MM-DD")}),t.getFixedRangeStartEnd=(t,e)=>({start:t.format("YYYY-MM-DD"),end:t.add(e-1,"day").format("YYYY-MM-DD")}),t.isDisabledDay=(e,n,r,i)=>{const o=t.isWithinRange(e,r?hn(r):void 0,i?hn(i):void 0),a=n&&n.includes(e.format("YYYY-MM-DD"));return!o||!!a}}($n||($n={}));const Fn=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},Dn=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},Sn=[1,3,5,7,8,10,12],Bn=[4,6,9,11];var bn,xn,Hn,wn;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),o=parseInt(n),a=parseInt(r);return 0==i?"1":Sn.includes(o)?Math.min(i,31).toString():Bn.includes(o)?Math.min(i,30).toString():2===o?t.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=hn(t,n);return hn(e,n).diff(r,"minute")},t.toDayjs=t=>t?hn(t):hn(),t.addMinutesToTime=(t,e,n="HH:mm")=>hn(t,n).add(e,"minutes").format(n)}(bn||(bn={})),function(t){t.isDateDisabled=(t,e)=>{const{disabledDates:n,minDate:r,maxDate:i}=e;return!!(n&&n.length&&n.includes(t))||(!(!r||!hn(t).isBefore(r,"day"))||!(!i||!hn(t).isAfter(i,"day")))},t.sanitizeInput=t=>{if(t){if(hn(t).isValid())return t}return""}}(xn||(xn={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(Hn||(Hn={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,i=8)=>{let o=0;e>n&&(o=Math.floor((e-n)/i));const a=r+o;if(a<t.length){const e=Math.floor(a/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const r=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(e).width}}(wn||(wn={}));const Mn=({type:o="checkbox",indicator:a,checked:s,styleType:c="default",children:l,subLabel:u,disabled:d,error:h,name:f,id:g,className:p,"data-testid":m,onChange:y})=>{const[$,v]=n(s),[F]=n(Hn.generate()),D=g?`${g}-input`:`tg-${F}-input`,S=r();i((()=>{v(s)}),[s]);return t(qe,Object.assign({$selected:$,$disabled:d,className:p,$styleType:c,$error:h,$indicator:a,id:g,"data-testid":m},{children:[a&&(()=>{let t;switch(o){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=o}return e(rn,{type:t,active:$,disabled:d})})(),e(Qe,{ref:S,name:f,id:D,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:t=>{if(!d){if(y)return void y(t);switch(o){case"checkbox":v((t=>!t));break;case"radio":case"yes":case"no":$||v(!0)}}},checked:$}),t(Ke,{children:[e(tn,Object.assign({htmlFor:D,$selected:$,$indicator:a,$disabled:d,"data-testid":"toggle-label"},{children:l})),u&&(()=>{if(!u)return null;let t;return"string"==typeof u?t=u:"function"==typeof u&&(t=u()),e(en,Object.assign({$disabled:d,$selected:$},{children:t}))})()]})]}))};export{Mn as Toggle};
//# sourceMappingURL=index.js.map
