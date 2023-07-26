import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useRef as i,useImperativeHandle as o,useState as a,useEffect as l}from"react";import s,{css as c}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as d}from"@lifesg/react-icons/cross";var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},f=Array.isArray,g="object"==typeof h&&h&&h.Object===Object&&h,p="object"==typeof self&&self&&self.Object===Object&&self,m=g||p||Function("return this")(),y=m.Symbol,v=y,$=Object.prototype,F=$.hasOwnProperty,S=$.toString,D=v?v.toStringTag:void 0;var b=function(e){var t=F.call(e,D),n=e[D];try{e[D]=void 0;var r=!0}catch(e){}var i=S.call(e);return r&&(t?e[D]=n:delete e[D]),i},B=Object.prototype.toString;var w=b,x=function(e){return B.call(e)},H=y?y.toStringTag:void 0;var M=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":H&&H in Object(e)?w(e):x(e)};var O=M,E=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||E(e)&&"[object Symbol]"==O(e)},k=f,A=_,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var T=function(e,t){if(k(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!A(e))||(C.test(e)||!z.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Y=M,N=W;var L,I=function(e){if(!N(e))return!1;var t=Y(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},R=m["__core-js_shared__"],V=(L=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var P=function(e){return!!V&&V in e},j=Function.prototype.toString;var Z=I,U=P,X=W,G=function(e){if(null!=e){try{return j.call(e)}catch(e){}try{return e+""}catch(e){}}return""},J=/^\[object .+?Constructor\]$/,q=Function.prototype,K=Object.prototype,Q=q.toString,ee=K.hasOwnProperty,te=RegExp("^"+Q.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ne=function(e){return!(!X(e)||U(e))&&(Z(e)?te:J).test(G(e))},re=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var n=re(e,t);return ne(n)?n:void 0},oe=ie(Object,"create"),ae=oe;var le=function(){this.__data__=ae?ae(null):{},this.size=0};var se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=oe,ue=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;if(ce){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ue.call(t,e)?t[e]:void 0},he=oe,fe=Object.prototype.hasOwnProperty;var ge=oe;var pe=le,me=se,ye=de,ve=function(e){var t=this.__data__;return he?void 0!==t[e]:fe.call(t,e)},$e=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};function Fe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Fe.prototype.clear=pe,Fe.prototype.delete=me,Fe.prototype.get=ye,Fe.prototype.has=ve,Fe.prototype.set=$e;var Se=Fe;var De=function(){this.__data__=[],this.size=0};var be=function(e,t){return e===t||e!=e&&t!=t};var Be=function(e,t){for(var n=e.length;n--;)if(be(e[n][0],t))return n;return-1},we=Be,xe=Array.prototype.splice;var He=Be;var Me=Be;var Oe=Be;var Ee=De,_e=function(e){var t=this.__data__,n=we(t,e);return!(n<0)&&(n==t.length-1?t.pop():xe.call(t,n,1),--this.size,!0)},ke=function(e){var t=this.__data__,n=He(t,e);return n<0?void 0:t[n][1]},Ae=function(e){return Me(this.__data__,e)>-1},ze=function(e,t){var n=this.__data__,r=Oe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ce(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ce.prototype.clear=Ee,Ce.prototype.delete=_e,Ce.prototype.get=ke,Ce.prototype.has=Ae,Ce.prototype.set=ze;var Te=Ce,We=ie(m,"Map"),Ye=Se,Ne=Te,Le=We;var Ie=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Re=function(e,t){var n=e.__data__;return Ie(t)?n["string"==typeof t?"string":"hash"]:n.map},Ve=Re;var Pe=Re;var je=Re;var Ze=Re;var Ue=function(){this.size=0,this.__data__={hash:new Ye,map:new(Le||Ne),string:new Ye}},Xe=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t},Ge=function(e){return Pe(this,e).get(e)},Je=function(e){return je(this,e).has(e)},qe=function(e,t){var n=Ze(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ke.prototype.clear=Ue,Ke.prototype.delete=Xe,Ke.prototype.get=Ge,Ke.prototype.has=Je,Ke.prototype.set=qe;var Qe=Ke;function et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(et.Cache||Qe),n}et.Cache=Qe;var tt=et;var nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rt=/\\(\\)?/g,it=function(e){var t=tt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nt,(function(e,n,r,i){t.push(r?i.replace(rt,"$1"):n||e)})),t}));var ot=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},at=f,lt=_,st=y?y.prototype:void 0,ct=st?st.toString:void 0;var ut=function e(t){if("string"==typeof t)return t;if(at(t))return ot(t,e)+"";if(lt(t))return ct?ct.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},dt=ut;var ht=f,ft=T,gt=it,pt=function(e){return null==e?"":dt(e)};var mt=_;var yt=function(e,t){return ht(e)?e:ft(e,t)?[e]:gt(pt(e))},vt=function(e){if("string"==typeof e||mt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var $t=function(e,t){for(var n=0,r=(t=yt(t,e)).length;null!=e&&n<r;)e=e[vt(t[n++])];return n&&n==r?e:void 0};var Ft=function(e,t,n){var r=null==e?void 0:$t(e,t);return void 0===r?n:r};const St=(e,t,n)=>t?Ft(n,t)||Ft(e,t):n||e,Dt=(e,t)=>{const n=t||e.defaultValue;return Ft(e.collections,n)};var bt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(bt||(bt={}));const Bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},wt=e=>t=>{const n=t.theme,r=Dt(Bt,n[bt.colorScheme]);return n.options&&n.options.color?St(r,e,n.options.color):St(r,e)},xt={Brand:{1:wt("Brand.1"),2:wt("Brand.2"),3:wt("Brand.3"),4:wt("Brand.4"),5:wt("Brand.5"),6:wt("Brand.6")},Primary:wt("Primary"),PrimaryDark:wt("PrimaryDark"),Secondary:wt("Secondary"),Accent:{Light:{1:wt("Accent.Light.1"),2:wt("Accent.Light.2"),3:wt("Accent.Light.3"),4:wt("Accent.Light.4"),5:wt("Accent.Light.5"),6:wt("Accent.Light.6")},Dark:{1:wt("Accent.Dark.1"),2:wt("Accent.Dark.2"),3:wt("Accent.Dark.3")}},Neutral:{1:wt("Neutral.1"),2:wt("Neutral.2"),3:wt("Neutral.3"),4:wt("Neutral.4"),5:wt("Neutral.5"),6:wt("Neutral.6"),7:wt("Neutral.7"),8:wt("Neutral.8")},Validation:{Green:{Text:wt("Validation.Green.Text"),Icon:wt("Validation.Green.Icon"),Border:wt("Validation.Green.Border"),Background:wt("Validation.Green.Background")},Orange:{Text:wt("Validation.Orange.Text"),Icon:wt("Validation.Orange.Icon"),Border:wt("Validation.Orange.Border"),Background:wt("Validation.Orange.Background"),Badge:wt("Validation.Orange.Badge")},Red:{Text:wt("Validation.Red.Text"),Icon:wt("Validation.Red.Icon"),Border:wt("Validation.Red.Border"),Background:wt("Validation.Red.Background")},Blue:{Text:wt("Validation.Blue.Text"),Icon:wt("Validation.Blue.Icon"),Border:wt("Validation.Blue.Border"),Background:wt("Validation.Blue.Background")}},Shadow:{Accent:wt("Shadow.Accent"),Red:wt("Shadow.Red"),Elevation:wt("Shadow.Elevation")}},Ht={collections:{base:{InputBoxShadow:c`
        inset 0 0 6px 1px ${xt.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 6px 1px ${xt.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${xt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:c`
        inset 0 0 6px 1px ${xt.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 6px 1px ${xt.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${xt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Mt=e=>t=>{const n=t.theme,r=Dt(Ht,n[bt.designTokenScheme]);return n.options?.designToken?St(r,e,n.options.designToken):St(r,e)},Ot=Mt("InputBoxShadow"),Et=Mt("InputErrorBoxShadow"),_t=(Mt("ElevationBoxShadow"),Mt("Table.Header"),Mt("Table.Cell.Primary"),Mt("Table.Cell.Secondary"),Mt("Table.Cell.Selected"),Mt("Table.Cell.Hover"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),kt={collections:{base:{D1:{fontFamily:_t.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:_t.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_t.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:_t.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:_t.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:_t.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:_t.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:_t.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:_t.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:_t.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},At=e=>t=>{const n=t.theme,r=Dt(kt,n[bt.textStyleScheme]);return n.options&&n.options.textStyle?St(r,e,n.options.textStyle):St(r,e)},zt={D1:{fontFamily:At("D1.fontFamily"),fontSize:At("D1.fontSize"),fontWeight:At("D1.fontWeight"),lineHeight:At("D1.lineHeight"),letterSpacing:At("D1.letterSpacing")},D2:{fontFamily:At("D2.fontFamily"),fontSize:At("D2.fontSize"),fontWeight:At("D2.fontWeight"),lineHeight:At("D2.lineHeight"),letterSpacing:At("D2.letterSpacing")},D3:{fontFamily:At("D3.fontFamily"),fontSize:At("D3.fontSize"),fontWeight:At("D3.fontWeight"),lineHeight:At("D3.lineHeight"),letterSpacing:At("D3.letterSpacing")},D4:{fontFamily:At("D4.fontFamily"),fontSize:At("D4.fontSize"),fontWeight:At("D4.fontWeight"),lineHeight:At("D4.lineHeight"),letterSpacing:At("D4.letterSpacing")},DBody:{fontFamily:At("DBody.fontFamily"),fontSize:At("DBody.fontSize"),fontWeight:At("DBody.fontWeight"),lineHeight:At("DBody.lineHeight"),letterSpacing:At("DBody.letterSpacing")},H1:{fontFamily:At("H1.fontFamily"),fontSize:At("H1.fontSize"),fontWeight:At("H1.fontWeight"),lineHeight:At("H1.lineHeight"),letterSpacing:At("H1.letterSpacing")},H2:{fontFamily:At("H2.fontFamily"),fontSize:At("H2.fontSize"),fontWeight:At("H2.fontWeight"),lineHeight:At("H2.lineHeight"),letterSpacing:At("H2.letterSpacing")},H3:{fontFamily:At("H3.fontFamily"),fontSize:At("H3.fontSize"),fontWeight:At("H3.fontWeight"),lineHeight:At("H3.lineHeight"),letterSpacing:At("H3.letterSpacing")},H4:{fontFamily:At("H4.fontFamily"),fontSize:At("H4.fontSize"),fontWeight:At("H4.fontWeight"),lineHeight:At("H4.lineHeight"),letterSpacing:At("H4.letterSpacing")},H5:{fontFamily:At("H5.fontFamily"),fontSize:At("H5.fontSize"),fontWeight:At("H5.fontWeight"),lineHeight:At("H5.lineHeight"),letterSpacing:At("H5.letterSpacing")},H6:{fontFamily:At("H6.fontFamily"),fontSize:At("H6.fontSize"),fontWeight:At("H6.fontWeight"),lineHeight:At("H6.lineHeight"),letterSpacing:At("H6.letterSpacing")},Body:{fontFamily:At("Body.fontFamily"),fontSize:At("Body.fontSize"),fontWeight:At("Body.fontWeight"),lineHeight:At("Body.lineHeight"),letterSpacing:At("Body.letterSpacing")},BodySmall:{fontFamily:At("BodySmall.fontFamily"),fontSize:At("BodySmall.fontSize"),fontWeight:At("BodySmall.fontWeight"),lineHeight:At("BodySmall.lineHeight"),letterSpacing:At("BodySmall.letterSpacing")},XSmall:{fontFamily:At("XSmall.fontFamily"),fontSize:At("XSmall.fontSize"),fontWeight:At("XSmall.fontWeight"),lineHeight:At("XSmall.lineHeight"),letterSpacing:At("XSmall.letterSpacing")}},Ct=e=>{switch(e){case 700:case"bold":return _t.Bold;case 600:case"semibold":return _t.Semibold;case 300:case"light":return _t.Light;case 400:case"regular":return _t.Regular;default:return""}},Tt=(e,t)=>n=>{const r=zt[e].fontFamily(n),i=zt[e].fontWeight(n);return Object.values(_t).includes(r)?c`
                font-family: ${Ct(t)||Ct(i)||r};
                font-weight: normal !important;
            `:c`
            font-family: ${r};
            font-weight: ${(Wt(t)||i)??"normal"};
        `},Wt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Yt=(e,t,n=!1)=>r=>{const i=zt[e],o=i.fontSize(r);return c`
            ${Tt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Nt=(e=!1,t=!1)=>t?c`
            display: block;
        `:e?c`
            display: inline;
        `:c`
            display: block;
        `;var Lt;!function(e){e.D1=s.h1`
        ${e=>c`
                ${Yt("D1",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Nt(e.inline,e.paragraph)}
            `}
    `,e.D2=s.h1`
        ${e=>c`
                ${Yt("D2",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Nt(e.inline,e.paragraph)}
            `}
    `,e.D3=s.h1`
        ${e=>c`
                ${Yt("D3",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Nt(e.inline,e.paragraph)}
            `}
    `,e.D4=s.h1`
        ${e=>c`
                ${Yt("D4",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Nt(e.inline,e.paragraph)}
            `}
    `,e.DBody=s.h1`
        ${e=>c`
                ${Yt("DBody",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Nt(e.inline,e.paragraph)}
            `}
    `,e.H1=s.h1`
        ${e=>c`
                ${Yt("H1",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Nt(e.inline,e.paragraph)}
            `}
    `,e.H2=s.h2`
        ${e=>c`
                ${Yt("H2",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Nt(e.inline,e.paragraph)}
            `}
    `,e.H3=s.h3`
        ${e=>c`
                ${Yt("H3",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Nt(e.inline,e.paragraph)}
            `}
    `,e.H4=s.h4`
        ${e=>c`
                ${Yt("H4",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Nt(e.inline,e.paragraph)}
            `}
    `,e.H5=s.h5`
        ${e=>c`
                ${Yt("H5",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Nt(e.inline,e.paragraph)}
            `}
    `,e.H6=s.h6`
        ${e=>c`
                ${Yt("H6",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Nt(e.inline,e.paragraph)}
            `}
    `,e.Body=s.p`
        ${e=>c`
                ${Yt("Body",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Nt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=s.p`
        ${e=>c`
                ${Yt("BodySmall",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Nt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=s.span`
        ${e=>c`
                ${Yt("XSmall",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${Nt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Vt({...e,textStyle:"Body"}),Small:e=>Vt({...e,textStyle:"BodySmall"})}}(Lt||(Lt={}));const It=s.a`
    ${e=>c`
            ${Yt(e.textStyle,e.weight)}
            color: ${xt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${xt.Secondary};

                svg {
                    color: ${xt.Secondary};
                }
            }
        `}
`,Rt=s(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Vt=({external:n=!1,children:r,...i})=>e(It,{...i,children:[r,n&&t(Rt,{})]});var Pt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Pt||(Pt={}));const jt=s.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${xt.Neutral[5]};
    border-radius: 4px;
    background: ${xt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${xt.Accent.Light[1]};
        box-shadow: ${Ot};
    }

    ${e=>e.$readOnly?c`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?c`
                background: ${xt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${xt.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?c`
                border: 1px solid ${xt.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${xt.Validation.Red.Border};
                    box-shadow: ${Et};
                }
            `:void 0}
`;s.input`
    ${Yt("Body","regular")}
    color: ${xt.Neutral[1]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${xt.Neutral[3]};
    }

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`;var Zt={exports:{}};Zt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var c=a[s],u=d[c],h=u&&u[0],f=u&&u[1];a[s]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,s=i.parser,c=e.slice(r),u=o.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],u=s||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!s&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,l=r.hours,s=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,g=a||(i||o?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=l||0,v=s||0,$=c||0,F=u||0;return d?new Date(Date.UTC(p,m,g,y,v,$,F+60*d.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,v,$,F)):new Date(p,m,g,y,v,$,F)}catch(e){return new Date("")}}(t,l,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),o={}}else if(l instanceof Array)for(var f=l.length,g=1;g<=f;g+=1){a[1]=l[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Ut,Xt,Gt=Zt.exports,Jt={exports:{}},qt=Jt.exports=(Ut={year:0,month:1,day:2,hour:3,minute:4,second:5},Xt={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Xt[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Xt[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,u=Ut[s];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),l=Math.round((o-new Date(a))/1e3/60),s=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,l=i||t||r,s=o(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),s,l),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=l,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),Kt={exports:{}};Kt.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",l="day",s="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},$="en",F={};F[$]=m;var S=function(e){return e instanceof w},D=function e(t,n,r){var i;if(!t)return $;if("string"==typeof t){var o=t.toLowerCase();F[o]&&(i=o),n&&(F[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var l=t.name;F[l]=t,i=l}return!r&&i&&($=i),i||!r&&$},b=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},B=v;B.l=D,B.i=S,B.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=D(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=b(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return b(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<b(e)},y.$g=function(e,t,n){return B.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!B.u(t)||t,u=B.p(e),f=function(e,t){var i=B.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(l)},g=function(e,t){return B.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case s:var $=this.$locale().weekStart||0,F=(p<$?p+7:p)-$;return f(r?y-F:y+(6-F),m);case l:case h:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case o:return g(v+"Seconds",2);case i:return g(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,s=B.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[l]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[B.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var g=B.p(u),p=function(e){var t=b(f);return B.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===l)return p(1);if(g===s)return p(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[g]||1,y=this.$d.getTime()+r*m;return B.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),o=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return B.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:B.s(l+1,2,"0"),MMM:u(n.monthsShort,l,c,3),MMMM:u(c,l),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,s,2),ddd:u(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:B.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:B.s(a,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(e,t){return t||g[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=B.p(h),m=b(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,$=B.m(this,m);return $=(g={},g[d]=$/12,g[c]=$,g[u]=$/3,g[s]=(v-y)/6048e5,g[l]=(v-y)/864e5,g[a]=v/n,g[o]=v/t,g[i]=v/e,g)[p]||v,f?$:B.a($)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return F[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=D(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),x=w.prototype;return b.prototype=x,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",l],["$M",c],["$y",d],["$D",h]].forEach((function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,w,b),e.$i=!0),b},b.locale=D,b.isDayjs=S,b.unix=function(e){return b(1e3*e)},b.en=F[$],b.Ls=F,b.p={},b}();var Qt=Kt.exports,en={exports:{}};en.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(o,r):!this.isBefore(o,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(o,r):!this.isAfter(o,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var tn=en.exports,nn={exports:{}};nn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var rn=nn.exports,on={exports:{}};on.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var an,ln=on.exports;Qt.extend(tn),Qt.extend(rn),Qt.extend(ln),Qt.extend(Gt),Qt.extend(qt),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Qt(t).startOf("week");return sn(n).map((e=>cn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return cn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Qt(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Qt(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Qt(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(an||(an={}));const sn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},cn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},un=[1,3,5,7,8,10,12],dn=[4,6,9,11];var hn,fn,gn;function pn({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),o=r.substring(0,n.selectionEnd),a=t(o),l=o.length-a.length,s=Math.max(0,n.selectionEnd-l);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(s,s)}}}}!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":un.includes(o)?Math.min(i,31).toString():dn.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Qt(e,n);return Qt(t,n).diff(r,"minute")}}(hn||(hn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(fn||(fn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(gn||(gn={}));const mn=s.input`
    ${Yt("Body","regular")}
    color: ${xt.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    padding: 0;

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${xt.Neutral[3]};
    }

    ${e=>"number"===e.type?c`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?c`
                cursor: not-allowed;
            `:void 0}
`,yn=s.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${xt.Neutral[3]};
    background-color: transparent;
    border: none;
`,vn=s(d)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,$n=s.div`
    display: flex;
    width: 100%;
`,Fn=r.forwardRef((({value:r,spacing:a,type:l,error:s,disabled:c,readOnly:u,onChange:d,onClear:h,allowClear:f=!1,className:g,styleType:p="bordered",...m},y)=>{const v=i();o(y,(()=>v.current),[]);const $=pn({ref:v,formatter:e=>gn.transformWithSpaces(e,a)}),F=e=>{d&&(D()?b(e):d(e))},S=()=>{h&&h(),v&&v.current&&v.current.focus()},D=()=>"tel"===l&&a,b=e=>{const{nextValue:t,updateCaretPosition:n}=$(),r=t.replace(/\s/g,"");e.target.value=r,d(e),n()},B=r?(e=>e?D()?gn.transformWithSpaces(e,a):e:"")(r):r,w=()=>e(n,{children:[t(mn,{"data-testid":"input",ref:v,disabled:c,value:B,onChange:F,type:l,readOnly:u,...m}),f&&!c&&!u&&!!r&&t(yn,{onClick:S,type:"button",children:t(vn,{"aria-hidden":!0})})]});return t(n,{children:"no-border"===p?t($n,{className:g,children:w()}):t(jt,{$disabled:c,$error:s,$readOnly:u,className:g,children:w()})})}));s.div`
    display: flex;
    position: relative;
    border: 1px solid ${xt.Neutral[5]};
    border-radius: 4px;
    background: ${xt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${xt.Accent.Light[1]};
        box-shadow: ${Ot};
    }

    ${e=>e.$readOnly?c`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?c`
                background: ${xt.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${xt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?c`
                border: 1px solid ${xt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${xt.Validation.Red.Border(e)};
                    box-shadow: ${Et};
                }
            `:void 0}
`,s(Fn)`
    // overwrite default styles
    &&& {
        background: transparent;
        border: none;
        padding: 0;

        :focus-within {
            outline: none;
            border: none;
            box-shadow: none;
        }
    }
`;const Sn=s.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Yt("Body","regular")}
    color: ${xt.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${xt.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return c`
                color: ${xt.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${xt.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?c`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:c`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`,Dn=s(Sn)`
    margin-right: 0.25rem;
`,bn=s(Fn)`
    // overwrite default styles
    background: transparent;
    border: none;
    /* border: 1px dotted red; */
    padding: 0;
    width: 2.5rem;

    :focus-within {
        outline: none;
        border: none;
        box-shadow: none;
    }

    input {
        text-align: center;
        // Chrome, Safari, Edge, Opera
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        // Firefox
        -moz-appearance: textfield;
    }
`,Bn=s(bn)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,wn=s(Lt.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return c`
                color: ${xt.Neutral[3]};
            `}}
`,xn=s.div`
    display: flex;
`,Hn=s(Lt.Body)`
    ${e=>{if(e.$inactive)return c`
                color: ${xt.Neutral[3]};
            `}}
`,Mn=({disabled:r,error:o,value:s,onChange:c,onBlur:u,onChangeRaw:d,onBlurRaw:h,readOnly:f,placeholder:g="00-8888",...p})=>{const[m,y]=a(""),[v,$]=a(""),[F,S]=a("none"),D=i(null),b=i(null),B=i(null),w=i(m),x=i(v),H=i(F),M=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),O=pn({ref:b,formatter:M}),E=pn({ref:B,formatter:M}),_=e=>{w.current=e,y(e)},k=e=>{x.current=e,$(e)},A=e=>{H.current=e,S(e)};l((()=>{"floor"===F&&3===m.length&&B.current&&B.current.focus()}),[m]),l((()=>{N(s)}),[s]);const z=e=>{A(e.target.name),e.target.select()},C=e=>{const t=e.target.name,n=e.target.value,r=Y(n);"floor"===t?(_(r),r!==m&&L(r,t)):(k(r),r!==v&&L(r,t))},T=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:n}=O();n(),_(e),L(e,t)}else{const{nextValue:e,updateCaretPosition:n}=E();n(),k(e),L(e,t)}},W=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===F&&0===v.length&&b.current.focus()},Y=e=>/^[0-9]$/.test(e)?gn.padValue(e,!0):e.toLocaleUpperCase(),N=e=>{if(e!==On)if(void 0===e||0===e.length)_(""),k("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];_("floor"===F?e:Y(e)),k("unit"===F?n:Y(n))}}},L=(e,t)=>{if(!c&&!d)return;const n={floor:w.current,unit:x.current};if(n[t]=e,c){const e=R(n);c(e)}d&&d([n.floor,n.unit])},I=()=>{if(!u&&!h)return;const e={floor:Y(w.current),unit:Y(x.current)};if(u){const t=R(e);u(t)}h&&h([e.floor,e.unit])},R=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":On},V=e=>e.split("-");return e(jt,{ref:D,onClick:()=>{"none"===F&&b.current&&b.current.focus()},$disabled:r,$error:o,$readOnly:f,"data-testid":p["data-testid"],tabIndex:-1,onBlur:e=>{D.current&&D.current.contains(e.relatedTarget)||"none"!==H.current&&(A("none"),I())},children:[t(Dn,{"data-testid":"addon",disabled:r,$readOnly:f,children:"#"}),f&&s?(()=>{const n=s.split("-");return e(xn,{children:[t(Hn,{children:n[0]}),t(wn,{children:"-"}),t(Hn,{children:n[1]})]})})():e(n,{children:[t(bn,{name:"floor",maxLength:3,value:m,ref:b,onFocus:z,onBlur:C,onChange:T,disabled:r,readOnly:f,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==F||f?V(g)[0]:""}),t(wn,{$inactive:0===m.length,children:"-"}),t(Bn,{name:"unit",maxLength:5,value:v,ref:B,onFocus:z,onBlur:C,onChange:T,onKeyDown:W,disabled:r,readOnly:f,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==F||f?V(g)[1]:""})]})]})},On="Invalid unit number";export{Mn as UnitNumberInput};
//# sourceMappingURL=index.js.map
