import{jsxs as t,jsx as e}from"react/jsx-runtime";import r from"react";import n,{keyframes as i,css as a}from"styled-components";var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l=Array.isArray,c="object"==typeof o&&o&&o.Object===Object&&o,h="object"==typeof self&&self&&self.Object===Object&&self,d=c||h||Function("return this")(),s=d.Symbol,g=s,u=Object.prototype,f=u.hasOwnProperty,p=u.toString,y=g?g.toStringTag:void 0;var m=function(t){var e=f.call(t,y),r=t[y];try{t[y]=void 0;var n=!0}catch(t){}var i=p.call(t);return n&&(e?t[y]=r:delete t[y]),i},S=Object.prototype.toString;var F=m,$=function(t){return S.call(t)},v=s?s.toStringTag:void 0;var b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?F(t):$(t)};var B=b,H=function(t){return null!=t&&"object"==typeof t};var D=function(t){return"symbol"==typeof t||H(t)&&"[object Symbol]"==B(t)},w=l,z=D,_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/;var C=function(t,e){if(w(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!z(t))||(x.test(t)||!_.test(t)||null!=e&&t in Object(e))};var k=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},E=b,W=k;var N,A=function(t){if(!W(t))return!1;var e=E(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},O=d["__core-js_shared__"],L=(N=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"";var j=function(t){return!!L&&L in t},T=Function.prototype.toString;var P=A,R=j,V=k,I=function(t){if(null!=t){try{return T.call(t)}catch(t){}try{return t+""}catch(t){}}return""},X=/^\[object .+?Constructor\]$/,M=Function.prototype,G=Object.prototype,Z=M.toString,U=G.hasOwnProperty,Y=RegExp("^"+Z.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var q=function(t){return!(!V(t)||R(t))&&(P(t)?Y:X).test(I(t))},J=function(t,e){return null==t?void 0:t[e]};var K=function(t,e){var r=J(t,e);return q(r)?r:void 0},Q=K(Object,"create"),tt=Q;var et=function(){this.__data__=tt?tt(null):{},this.size=0};var rt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},nt=Q,it=Object.prototype.hasOwnProperty;var at=function(t){var e=this.__data__;if(nt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return it.call(e,t)?e[t]:void 0},ot=Q,lt=Object.prototype.hasOwnProperty;var ct=Q;var ht=et,dt=rt,st=at,gt=function(t){var e=this.__data__;return ot?void 0!==e[t]:lt.call(e,t)},ut=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=ct&&void 0===e?"__lodash_hash_undefined__":e,this};function ft(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}ft.prototype.clear=ht,ft.prototype.delete=dt,ft.prototype.get=st,ft.prototype.has=gt,ft.prototype.set=ut;var pt=ft;var yt=function(){this.__data__=[],this.size=0};var mt=function(t,e){return t===e||t!=t&&e!=e};var St=function(t,e){for(var r=t.length;r--;)if(mt(t[r][0],e))return r;return-1},Ft=St,$t=Array.prototype.splice;var vt=St;var bt=St;var Bt=St;var Ht=yt,Dt=function(t){var e=this.__data__,r=Ft(e,t);return!(r<0)&&(r==e.length-1?e.pop():$t.call(e,r,1),--this.size,!0)},wt=function(t){var e=this.__data__,r=vt(e,t);return r<0?void 0:e[r][1]},zt=function(t){return bt(this.__data__,t)>-1},_t=function(t,e){var r=this.__data__,n=Bt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function xt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}xt.prototype.clear=Ht,xt.prototype.delete=Dt,xt.prototype.get=wt,xt.prototype.has=zt,xt.prototype.set=_t;var Ct=xt,kt=K(d,"Map"),Et=pt,Wt=Ct,Nt=kt;var At=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Ot=function(t,e){var r=t.__data__;return At(e)?r["string"==typeof e?"string":"hash"]:r.map},Lt=Ot;var jt=Ot;var Tt=Ot;var Pt=Ot;var Rt=function(){this.size=0,this.__data__={hash:new Et,map:new(Nt||Wt),string:new Et}},Vt=function(t){var e=Lt(this,t).delete(t);return this.size-=e?1:0,e},It=function(t){return jt(this,t).get(t)},Xt=function(t){return Tt(this,t).has(t)},Mt=function(t,e){var r=Pt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function Gt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Gt.prototype.clear=Rt,Gt.prototype.delete=Vt,Gt.prototype.get=It,Gt.prototype.has=Xt,Gt.prototype.set=Mt;var Zt=Gt;function Ut(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=t.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(Ut.Cache||Zt),r}Ut.Cache=Zt;var Yt=Ut;var qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jt=/\\(\\)?/g,Kt=function(t){var e=Yt(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(qt,(function(t,r,n,i){e.push(n?i.replace(Jt,"$1"):r||t)})),e}));var Qt=function(t,e){for(var r=-1,n=null==t?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i},te=l,ee=D,re=s?s.prototype:void 0,ne=re?re.toString:void 0;var ie=function t(e){if("string"==typeof e)return e;if(te(e))return Qt(e,t)+"";if(ee(e))return ne?ne.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r},ae=ie;var oe=l,le=C,ce=Kt,he=function(t){return null==t?"":ae(t)};var de=D;var se=function(t,e){return oe(t)?t:le(t,e)?[t]:ce(he(t))},ge=function(t){if("string"==typeof t||de(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ue=function(t,e){for(var r=0,n=(e=se(e,t)).length;null!=t&&r<n;)t=t[ge(e[r++])];return r&&r==n?t:void 0};var fe=function(t,e,r){var n=null==t?void 0:ue(t,e);return void 0===n?r:n};const pe=(t,e,r)=>e?fe(r,e)||fe(t,e):r||t,ye=(t,e)=>{const r=e||t.defaultValue;return fe(t.collections,r)};var me;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(me||(me={}));const Se={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Fe=t=>e=>{const r=e.theme,n=ye(Se,r[me.colorScheme]);return r.options&&r.options.color?pe(n,t,r.options.color):pe(n,t)},$e={Brand:{1:Fe("Brand.1"),2:Fe("Brand.2"),3:Fe("Brand.3"),4:Fe("Brand.4"),5:Fe("Brand.5"),6:Fe("Brand.6")},Primary:Fe("Primary"),PrimaryDark:Fe("PrimaryDark"),Secondary:Fe("Secondary"),Accent:{Light:{1:Fe("Accent.Light.1"),2:Fe("Accent.Light.2"),3:Fe("Accent.Light.3"),4:Fe("Accent.Light.4"),5:Fe("Accent.Light.5"),6:Fe("Accent.Light.6")},Dark:{1:Fe("Accent.Dark.1"),2:Fe("Accent.Dark.2"),3:Fe("Accent.Dark.3")}},Neutral:{1:Fe("Neutral.1"),2:Fe("Neutral.2"),3:Fe("Neutral.3"),4:Fe("Neutral.4"),5:Fe("Neutral.5"),6:Fe("Neutral.6"),7:Fe("Neutral.7"),8:Fe("Neutral.8")},Validation:{Green:{Text:Fe("Validation.Green.Text"),Icon:Fe("Validation.Green.Icon"),Border:Fe("Validation.Green.Border"),Background:Fe("Validation.Green.Background")},Orange:{Text:Fe("Validation.Orange.Text"),Icon:Fe("Validation.Orange.Icon"),Border:Fe("Validation.Orange.Border"),Background:Fe("Validation.Orange.Background"),Badge:Fe("Validation.Orange.Badge")},Red:{Text:Fe("Validation.Red.Text"),Icon:Fe("Validation.Red.Icon"),Border:Fe("Validation.Red.Border"),Background:Fe("Validation.Red.Background")}}},ve={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},be=t=>Object.keys(ve).reduce(((e,r)=>{const n=ve[r];return e[r]=`@media screen and (${t}: ${n}px)`,e}),{}),Be=be("max-width"),He=(be("min-width"),n.div`
    display: inline-block;
    position: relative;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
`),De=i`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,we=n.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
    margin: ${t=>t.$borderWidth}px;
    border-width: ${t=>t.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${t=>t.$color||$e.Neutral[8](t)}
        transparent transparent transparent;
    animation: ${De} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ze=n(we)`
    animation-delay: -0.45s;
`,_e=n(we)`
    animation-delay: -0.3s;
`,xe=n(we)`
    animation-delay: -0.15s;
`,Ce={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ke={collections:{base:{D1:{fontFamily:Ce.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ce.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ce.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ce.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ce.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ce.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ce.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ce.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ce.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ce.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ce.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ce.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ce.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ce.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ee=t=>e=>{const r=e.theme,n=ye(ke,r[me.textStyleScheme]);return r.options&&r.options.textStyle?pe(n,t,r.options.textStyle):pe(n,t)},We={D1:{fontFamily:Ee("D1.fontFamily"),fontSize:Ee("D1.fontSize"),fontWeight:Ee("D1.fontWeight"),lineHeight:Ee("D1.lineHeight"),letterSpacing:Ee("D1.letterSpacing")},D2:{fontFamily:Ee("D2.fontFamily"),fontSize:Ee("D2.fontSize"),fontWeight:Ee("D2.fontWeight"),lineHeight:Ee("D2.lineHeight"),letterSpacing:Ee("D2.letterSpacing")},D3:{fontFamily:Ee("D3.fontFamily"),fontSize:Ee("D3.fontSize"),fontWeight:Ee("D3.fontWeight"),lineHeight:Ee("D3.lineHeight"),letterSpacing:Ee("D3.letterSpacing")},D4:{fontFamily:Ee("D4.fontFamily"),fontSize:Ee("D4.fontSize"),fontWeight:Ee("D4.fontWeight"),lineHeight:Ee("D4.lineHeight"),letterSpacing:Ee("D4.letterSpacing")},DBody:{fontFamily:Ee("DBody.fontFamily"),fontSize:Ee("DBody.fontSize"),fontWeight:Ee("DBody.fontWeight"),lineHeight:Ee("DBody.lineHeight"),letterSpacing:Ee("DBody.letterSpacing")},H1:{fontFamily:Ee("H1.fontFamily"),fontSize:Ee("H1.fontSize"),fontWeight:Ee("H1.fontWeight"),lineHeight:Ee("H1.lineHeight"),letterSpacing:Ee("H1.letterSpacing")},H2:{fontFamily:Ee("H2.fontFamily"),fontSize:Ee("H2.fontSize"),fontWeight:Ee("H2.fontWeight"),lineHeight:Ee("H2.lineHeight"),letterSpacing:Ee("H2.letterSpacing")},H3:{fontFamily:Ee("H3.fontFamily"),fontSize:Ee("H3.fontSize"),fontWeight:Ee("H3.fontWeight"),lineHeight:Ee("H3.lineHeight"),letterSpacing:Ee("H3.letterSpacing")},H4:{fontFamily:Ee("H4.fontFamily"),fontSize:Ee("H4.fontSize"),fontWeight:Ee("H4.fontWeight"),lineHeight:Ee("H4.lineHeight"),letterSpacing:Ee("H4.letterSpacing")},H5:{fontFamily:Ee("H5.fontFamily"),fontSize:Ee("H5.fontSize"),fontWeight:Ee("H5.fontWeight"),lineHeight:Ee("H5.lineHeight"),letterSpacing:Ee("H5.letterSpacing")},H6:{fontFamily:Ee("H6.fontFamily"),fontSize:Ee("H6.fontSize"),fontWeight:Ee("H6.fontWeight"),lineHeight:Ee("H6.lineHeight"),letterSpacing:Ee("H6.letterSpacing")},Body:{fontFamily:Ee("Body.fontFamily"),fontSize:Ee("Body.fontSize"),fontWeight:Ee("Body.fontWeight"),lineHeight:Ee("Body.lineHeight"),letterSpacing:Ee("Body.letterSpacing")},BodySmall:{fontFamily:Ee("BodySmall.fontFamily"),fontSize:Ee("BodySmall.fontSize"),fontWeight:Ee("BodySmall.fontWeight"),lineHeight:Ee("BodySmall.lineHeight"),letterSpacing:Ee("BodySmall.letterSpacing")},XSmall:{fontFamily:Ee("XSmall.fontFamily"),fontSize:Ee("XSmall.fontSize"),fontWeight:Ee("XSmall.fontWeight"),lineHeight:Ee("XSmall.lineHeight"),letterSpacing:Ee("XSmall.letterSpacing")}},Ne=t=>{switch(t){case 700:case"bold":return Ce.Bold;case 600:case"semibold":return Ce.Semibold;case 300:case"light":return Ce.Light;case 400:case"regular":return Ce.Regular;default:return""}},Ae=(t,e)=>r=>{const n=We[t].fontFamily(r),i=We[t].fontWeight(r);return Object.values(Ce).includes(n)?a`
                font-family: ${Ne(e)||Ne(i)||n};
                font-weight: normal !important;
            `:a`
            font-family: ${n};
            font-weight: ${(Oe(e)||i)??"normal"};
        `},Oe=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Le=(t,e,r=!1)=>n=>{const i=We[t],o=i.fontSize(n);return a`
            ${Ae(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${a`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},je=(t=!1,e=!1)=>e?a`
            display: block;
        `:t?a`
            display: inline;
        `:a`
            display: block;
        `,Te=n.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${$e.Primary};
`,Pe=t=>e(Te,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...t,children:e("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),Re=t=>e(Te,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),Ve=t=>e(Te,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Ie=t=>e(Te,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...t,children:e("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),Xe=t=>e(Te,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...t,children:e("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),Me=n.span`
    font-size: 1rem;
`;var Ge;!function(t){t.D1=n.h1`
        ${t=>a`
                ${Le("D1",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.D2=n.h1`
        ${t=>a`
                ${Le("D2",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.D3=n.h1`
        ${t=>a`
                ${Le("D3",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.D4=n.h1`
        ${t=>a`
                ${Le("D4",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.DBody=n.h1`
        ${t=>a`
                ${Le("DBody",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.H1=n.h1`
        ${t=>a`
                ${Le("H1",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.H2=n.h2`
        ${t=>a`
                ${Le("H2",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.H3=n.h3`
        ${t=>a`
                ${Le("H3",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.H4=n.h4`
        ${t=>a`
                ${Le("H4",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.H5=n.h5`
        ${t=>a`
                ${Le("H5",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.H6=n.h6`
        ${t=>a`
                ${Le("H6",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.Body=n.p`
        ${t=>a`
                ${Le("Body",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=n.p`
        ${t=>a`
                ${Le("BodySmall",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.XSmall=n.span`
        ${t=>a`
                ${Le("XSmall",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ye({...t,textStyle:"Body"}),Small:t=>Ye({...t,textStyle:"BodySmall"})}}(Ge||(Ge={}));const Ze=n.a`
    ${t=>a`
            ${Le(t.textStyle,t.weight)}
            color: ${$e.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$e.Secondary};
            }
        `}
`,Ue=n((({type:t,...r})=>{switch(t){case"arrow-right":return e(Pe,{...r});case"info":return e(Ve,{...r});case"cross":return e(Re,{...r});case"play":return e(Ie,{...r});case"search":return e(Xe,{...r});default:{const n=`sgds-icon sgds-icon-${t}`,i=r.className?`${n} ${r.className}`:n;return e(Me,{...r,className:i})}}}))`
    margin-left: 0.4rem;
`,Ye=({external:r=!1,children:n,...i})=>t(Ze,{...i,children:[n,r&&e(Ue,{type:"external"})]});var qe;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(qe||(qe={}));const Je=n.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    }

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${t=>{switch(t.$buttonStyle){case"secondary":return a`
                    background-color: ${$e.Neutral[8](t)};
                    border: 1px solid ${$e.Primary(t)};

                    span {
                        color: ${$e.Primary(t)};
                    }
                `;case"light":return a`
                    background-color: ${$e.Neutral[8](t)};
                    border: 1px solid ${$e.Neutral[5](t)};

                    span {
                        color: ${$e.Primary(t)};
                    }
                `;case"disabled":return a`
                    background-color: ${$e.Neutral[6](t)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${$e.Neutral[3](t)};
                    }
                `;case"link":return a`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${$e.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${$e.Secondary};
                        }
                    }
                `;default:return a`
                    background-color: ${$e.Primary(t)};
                    border: 1px solid transparent;

                    ${Be.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${$e.Neutral[8](t)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${t=>"small"===t.$buttonSizeStyle?a`
                    height: 2.5rem;
                    span {
                        ${Le("H5","semibold")}
                    }

                    ${Be.mobileS} {
                        height: auto;
                    }
                `:a`
                    height: 3rem;
                    span {
                        ${Le("H4","semibold")}
                    }

                    ${Be.mobileS} {
                        height: auto;
                    }
                `}
`,Ke=n((({color:r,className:n,size:i=18})=>t(He,{className:n,$size:i,$color:r,children:[e(we,{id:"inner1",$size:i-2,$borderWidth:2}),e(ze,{id:"inner2",$size:i-2,$borderWidth:2}),e(_e,{id:"inner3",$size:i-2,$borderWidth:2}),e(xe,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${t=>{let e;switch(t.$buttonStyle){case"secondary":case"light":case"link":e=$e.Primary(t);break;case"disabled":e=$e.Neutral[3](t);break;default:e=$e.Neutral[8](t)}return a`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${e} transparent transparent transparent;
            }
        `}}
`,Qe={Default:r.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...c}=r,h={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default"};return t(Je,{ref:n,"data-testid":c["data-testid"]||"button",disabled:a,...h,...c,children:[o&&e(Ke,{...h}),e("span",{children:i})]})})),Small:r.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...c}=r,h={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small"};return t(Je,{ref:n,"data-testid":c["data-testid"]||"button",disabled:a,...h,...c,children:[o&&e(Ke,{...h,size:16}),e("span",{children:i})]})}))};export{Qe as Button};
//# sourceMappingURL=index.js.map
