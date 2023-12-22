import{jsxs as e,jsx as t}from"react/jsx-runtime";import{ExternalIcon as n}from"@lifesg/react-icons/external";import r,{css as i}from"styled-components";function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l=Array.isArray,c="object"==typeof o&&o&&o.Object===Object&&o,g="object"==typeof self&&self&&self.Object===Object&&self,h=c||g||Function("return this")(),f=h.Symbol,d=f,F=Object.prototype,u=F.hasOwnProperty,p=F.toString,s=d?d.toStringTag:void 0;var y=function(e){var t=u.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var i=p.call(e);return r&&(t?e[s]=n:delete e[s]),i},B=Object.prototype.toString;var m=y,S=function(e){return B.call(e)},D=f?f.toStringTag:void 0;var v=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":D&&D in Object(e)?m(e):S(e)};var H=v,b=function(e){return null!=e&&"object"==typeof e};var E=function(e){return"symbol"==typeof e||b(e)&&"[object Symbol]"==H(e)},$=l,_=E,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/;var z=function(e,t){if($(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(x.test(e)||!A.test(e)||null!=t&&e in Object(t))};var w=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},C=v,O=w;var k,W=function(e){if(!O(e))return!1;var t=C(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},j=h["__core-js_shared__"],T=(k=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"";var L=function(e){return!!T&&T in e},I=Function.prototype.toString;var V=W,R=L,P=w,N=function(e){if(null!=e){try{return I.call(e)}catch(e){}try{return e+""}catch(e){}}return""},G=/^\[object .+?Constructor\]$/,X=Function.prototype,M=Object.prototype,U=X.toString,q=M.hasOwnProperty,J=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(e){return!(!P(e)||R(e))&&(V(e)?J:G).test(N(e))},Q=function(e,t){return null==e?void 0:e[t]};var Y=function(e,t){var n=Q(e,t);return K(n)?n:void 0},Z=Y(Object,"create"),ee=Z;var te=function(){this.__data__=ee?ee(null):{},this.size=0};var ne=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},re=Z,ie=Object.prototype.hasOwnProperty;var ae=function(e){var t=this.__data__;if(re){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ie.call(t,e)?t[e]:void 0},oe=Z,le=Object.prototype.hasOwnProperty;var ce=Z;var ge=te,he=ne,fe=ae,de=function(e){var t=this.__data__;return oe?void 0!==t[e]:le.call(t,e)},Fe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ce&&void 0===t?"__lodash_hash_undefined__":t,this};function ue(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ue.prototype.clear=ge,ue.prototype.delete=he,ue.prototype.get=fe,ue.prototype.has=de,ue.prototype.set=Fe;var pe=ue;var se=function(){this.__data__=[],this.size=0};var ye=function(e,t){return e===t||e!=e&&t!=t};var Be=function(e,t){for(var n=e.length;n--;)if(ye(e[n][0],t))return n;return-1},me=Be,Se=Array.prototype.splice;var De=Be;var ve=Be;var He=Be;var be=se,Ee=function(e){var t=this.__data__,n=me(t,e);return!(n<0)&&(n==t.length-1?t.pop():Se.call(t,n,1),--this.size,!0)},$e=function(e){var t=this.__data__,n=De(t,e);return n<0?void 0:t[n][1]},_e=function(e){return ve(this.__data__,e)>-1},Ae=function(e,t){var n=this.__data__,r=He(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function xe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}xe.prototype.clear=be,xe.prototype.delete=Ee,xe.prototype.get=$e,xe.prototype.has=_e,xe.prototype.set=Ae;var ze=xe,we=Y(h,"Map"),Ce=pe,Oe=ze,ke=we;var We=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var je=function(e,t){var n=e.__data__;return We(t)?n["string"==typeof t?"string":"hash"]:n.map},Te=je;var Le=je;var Ie=je;var Ve=je;var Re=function(){this.size=0,this.__data__={hash:new Ce,map:new(ke||Oe),string:new Ce}},Pe=function(e){var t=Te(this,e).delete(e);return this.size-=t?1:0,t},Ne=function(e){return Le(this,e).get(e)},Ge=function(e){return Ie(this,e).has(e)},Xe=function(e,t){var n=Ve(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Me(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Me.prototype.clear=Re,Me.prototype.delete=Pe,Me.prototype.get=Ne,Me.prototype.has=Ge,Me.prototype.set=Xe;var Ue=Me;function qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(qe.Cache||Ue),n}qe.Cache=Ue;var Je=qe;var Ke=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qe=/\\(\\)?/g,Ye=function(e){var t=Je(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ke,(function(e,n,r,i){t.push(r?i.replace(Qe,"$1"):n||e)})),t}));var Ze=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},et=l,tt=E,nt=f?f.prototype:void 0,rt=nt?nt.toString:void 0;var it=function e(t){if("string"==typeof t)return t;if(et(t))return Ze(t,e)+"";if(tt(t))return rt?rt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},at=it;var ot=l,lt=z,ct=Ye,gt=function(e){return null==e?"":at(e)};var ht=E;var ft=function(e,t){return ot(e)?e:lt(e,t)?[e]:ct(gt(e))},dt=function(e){if("string"==typeof e||ht(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ft=function(e,t){for(var n=0,r=(t=ft(t,e)).length;null!=e&&n<r;)e=e[dt(t[n++])];return n&&n==r?e:void 0};var ut=function(e,t,n){var r=null==e?void 0:Ft(e,t);return void 0===r?n:r};const pt=(e,t,n)=>t?ut(n,t)||ut(e,t):n||e,st=(e,t)=>{const n=t||e.defaultValue;return ut(e.collections,n)};var yt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(yt||(yt={}));const Bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},mt=e=>t=>{const n=t.theme,r=st(Bt,n[yt.colorScheme]);return n.options&&n.options.color?pt(r,e,n.options.color):pt(r,e)},St=(mt("Brand.1"),mt("Brand.2"),mt("Brand.3"),mt("Brand.4"),mt("Brand.5"),mt("Brand.6"),mt("Primary")),Dt=(mt("PrimaryDark"),mt("Secondary")),vt=(mt("Accent.Light.1"),mt("Accent.Light.2"),mt("Accent.Light.3"),mt("Accent.Light.4"),mt("Accent.Light.5"),mt("Accent.Light.6"),mt("Accent.Dark.1"),mt("Accent.Dark.2"),mt("Accent.Dark.3"),{1:mt("Neutral.1"),2:mt("Neutral.2"),3:mt("Neutral.3"),4:mt("Neutral.4"),5:mt("Neutral.5"),6:mt("Neutral.6"),7:mt("Neutral.7"),8:mt("Neutral.8")}),Ht=(mt("Validation.Green.Text"),mt("Validation.Green.Icon"),mt("Validation.Green.Border"),mt("Validation.Green.Background"),mt("Validation.Orange.Text"),mt("Validation.Orange.Icon"),mt("Validation.Orange.Border"),mt("Validation.Orange.Background"),mt("Validation.Orange.Badge"),mt("Validation.Red.Text"),mt("Validation.Red.Icon"),mt("Validation.Red.Border"),mt("Validation.Red.Background"),mt("Validation.Blue.Text"),mt("Validation.Blue.Icon"),mt("Validation.Blue.Border"),mt("Validation.Blue.Background"),mt("Shadow.Accent"),mt("Shadow.Red"),mt("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),bt={collections:{base:{D1:{fontFamily:Ht.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ht.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ht.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ht.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ht.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ht.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ht.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ht.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ht.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ht.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Et=e=>t=>{const n=t.theme,r=st(bt,n[yt.textStyleScheme]);return n.options&&n.options.textStyle?pt(r,e,n.options.textStyle):pt(r,e)},$t={D1:{fontFamily:Et("D1.fontFamily"),fontSize:Et("D1.fontSize"),fontWeight:Et("D1.fontWeight"),lineHeight:Et("D1.lineHeight"),letterSpacing:Et("D1.letterSpacing")},D2:{fontFamily:Et("D2.fontFamily"),fontSize:Et("D2.fontSize"),fontWeight:Et("D2.fontWeight"),lineHeight:Et("D2.lineHeight"),letterSpacing:Et("D2.letterSpacing")},D3:{fontFamily:Et("D3.fontFamily"),fontSize:Et("D3.fontSize"),fontWeight:Et("D3.fontWeight"),lineHeight:Et("D3.lineHeight"),letterSpacing:Et("D3.letterSpacing")},D4:{fontFamily:Et("D4.fontFamily"),fontSize:Et("D4.fontSize"),fontWeight:Et("D4.fontWeight"),lineHeight:Et("D4.lineHeight"),letterSpacing:Et("D4.letterSpacing")},DBody:{fontFamily:Et("DBody.fontFamily"),fontSize:Et("DBody.fontSize"),fontWeight:Et("DBody.fontWeight"),lineHeight:Et("DBody.lineHeight"),letterSpacing:Et("DBody.letterSpacing")},H1:{fontFamily:Et("H1.fontFamily"),fontSize:Et("H1.fontSize"),fontWeight:Et("H1.fontWeight"),lineHeight:Et("H1.lineHeight"),letterSpacing:Et("H1.letterSpacing")},H2:{fontFamily:Et("H2.fontFamily"),fontSize:Et("H2.fontSize"),fontWeight:Et("H2.fontWeight"),lineHeight:Et("H2.lineHeight"),letterSpacing:Et("H2.letterSpacing")},H3:{fontFamily:Et("H3.fontFamily"),fontSize:Et("H3.fontSize"),fontWeight:Et("H3.fontWeight"),lineHeight:Et("H3.lineHeight"),letterSpacing:Et("H3.letterSpacing")},H4:{fontFamily:Et("H4.fontFamily"),fontSize:Et("H4.fontSize"),fontWeight:Et("H4.fontWeight"),lineHeight:Et("H4.lineHeight"),letterSpacing:Et("H4.letterSpacing")},H5:{fontFamily:Et("H5.fontFamily"),fontSize:Et("H5.fontSize"),fontWeight:Et("H5.fontWeight"),lineHeight:Et("H5.lineHeight"),letterSpacing:Et("H5.letterSpacing")},H6:{fontFamily:Et("H6.fontFamily"),fontSize:Et("H6.fontSize"),fontWeight:Et("H6.fontWeight"),lineHeight:Et("H6.lineHeight"),letterSpacing:Et("H6.letterSpacing")},Body:{fontFamily:Et("Body.fontFamily"),fontSize:Et("Body.fontSize"),fontWeight:Et("Body.fontWeight"),lineHeight:Et("Body.lineHeight"),letterSpacing:Et("Body.letterSpacing")},BodySmall:{fontFamily:Et("BodySmall.fontFamily"),fontSize:Et("BodySmall.fontSize"),fontWeight:Et("BodySmall.fontWeight"),lineHeight:Et("BodySmall.lineHeight"),letterSpacing:Et("BodySmall.letterSpacing")},XSmall:{fontFamily:Et("XSmall.fontFamily"),fontSize:Et("XSmall.fontSize"),fontWeight:Et("XSmall.fontWeight"),lineHeight:Et("XSmall.lineHeight"),letterSpacing:Et("XSmall.letterSpacing")}},_t=e=>{switch(e){case 700:case"bold":return Ht.Bold;case 600:case"semibold":return Ht.Semibold;case 300:case"light":return Ht.Light;case 400:case"regular":return Ht.Regular;default:return""}},At=(e,t)=>n=>{var r;const a=$t[e].fontFamily(n),o=$t[e].fontWeight(n);return Object.values(Ht).includes(a)?i`
                font-family: ${_t(t)||_t(o)||a};
                font-weight: normal !important;
            `:i`
            font-family: ${a};
            font-weight: ${null!==(r=xt(t)||o)&&void 0!==r?r:"normal"};
        `},xt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},zt=e=>{if(e>0)return i`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},wt=(e,t,n=!1)=>r=>{const a=$t[e],o=a.fontSize(r);return i`
            ${At(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${i`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ct=(e=!1,t=!1,n=void 0)=>t?i`
            display: block;
            ${zt(n)}
        `:e?i`
            display: inline;
        `:i`
            display: block;
            ${zt(n)}
        `;var Ot;!function(e){e.D1=r.h1`
        ${e=>i`
                ${wt("D1",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=r.h1`
        ${e=>i`
                ${wt("D2",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=r.h1`
        ${e=>i`
                ${wt("D3",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=r.h1`
        ${e=>i`
                ${wt("D4",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=r.h1`
        ${e=>i`
                ${wt("DBody",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=r.h1`
        ${e=>i`
                ${wt("H1",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=r.h2`
        ${e=>i`
                ${wt("H2",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=r.h3`
        ${e=>i`
                ${wt("H3",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=r.h4`
        ${e=>i`
                ${wt("H4",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=r.h5`
        ${e=>i`
                ${wt("H5",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=r.h6`
        ${e=>i`
                ${wt("H6",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=r.p`
        ${e=>i`
                ${wt("Body",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=r.p`
        ${e=>i`
                ${wt("BodySmall",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=r.span`
        ${e=>i`
                ${wt("XSmall",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>jt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>jt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ot||(Ot={}));const kt=r.a`
    ${e=>i`
            ${wt(e.textStyle,e.weight)}
            color: ${St};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Dt};

                svg {
                    color: ${Dt};
                }
            }
        `}
`,Wt=r(n)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,jt=n=>{var{external:r=!1,children:i}=n,o=a(n,["external","children"]);return e(kt,Object.assign({},o,{children:[i,r&&t(Wt,{})]}))},Tt=r.div`
    border-radius: 0.5rem;
    background: ${vt[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Lt=e=>{var{children:n}=e,r=a(e,["children"]);const i=r["data-testid"]||"card";return t(Tt,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?t(Ot.Body,{children:n}):n}))};export{Lt as Card};
//# sourceMappingURL=index.js.map
