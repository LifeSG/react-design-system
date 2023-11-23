import t,{css as e}from"styled-components";import{jsxs as n,jsx as r}from"react/jsx-runtime";import{ExternalIcon as i}from"@lifesg/react-icons/external";const a={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},o={D1:{fontFamily:a.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:a.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:a.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:a.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:a.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:a.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:a.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:a.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:a.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:a.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:a.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:a.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:a.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:a.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=Array.isArray,g="object"==typeof l&&l&&l.Object===Object&&l,h="object"==typeof self&&self&&self.Object===Object&&self,f=g||h||Function("return this")(),F=f.Symbol,p=F,u=Object.prototype,d=u.hasOwnProperty,y=u.toString,s=p?p.toStringTag:void 0;var S=function(t){var e=d.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var i=y.call(t);return r&&(e?t[s]=n:delete t[s]),i},B=Object.prototype.toString;var m=S,D=function(t){return B.call(t)},v=F?F.toStringTag:void 0;var H=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?m(t):D(t)};var b=H,E=function(t){return null!=t&&"object"==typeof t};var $=function(t){return"symbol"==typeof t||E(t)&&"[object Symbol]"==b(t)},x=c,_=$,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z=/^\w*$/;var w=function(t,e){if(x(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!_(t))||(z.test(t)||!A.test(t)||null!=e&&t in Object(e))};var C=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},O=H,k=C;var T,W=function(t){if(!k(t))return!1;var e=O(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},j=f["__core-js_shared__"],L=(T=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var I=function(t){return!!L&&L in t},V=Function.prototype.toString;var R=W,P=I,N=C,G=function(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""},X=/^\[object .+?Constructor\]$/,M=Function.prototype,U=Object.prototype,q=M.toString,J=U.hasOwnProperty,K=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!N(t)||P(t))&&(R(t)?K:X).test(G(t))},Y=function(t,e){return null==t?void 0:t[e]};var Z=function(t,e){var n=Y(t,e);return Q(n)?n:void 0},tt=Z(Object,"create"),et=tt;var nt=function(){this.__data__=et?et(null):{},this.size=0};var rt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},it=tt,at=Object.prototype.hasOwnProperty;var ot=function(t){var e=this.__data__;if(it){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return at.call(e,t)?e[t]:void 0},lt=tt,ct=Object.prototype.hasOwnProperty;var gt=tt;var ht=nt,ft=rt,Ft=ot,pt=function(t){var e=this.__data__;return lt?void 0!==e[t]:ct.call(e,t)},ut=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=gt&&void 0===e?"__lodash_hash_undefined__":e,this};function dt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}dt.prototype.clear=ht,dt.prototype.delete=ft,dt.prototype.get=Ft,dt.prototype.has=pt,dt.prototype.set=ut;var yt=dt;var st=function(){this.__data__=[],this.size=0};var St=function(t,e){return t===e||t!=t&&e!=e};var Bt=function(t,e){for(var n=t.length;n--;)if(St(t[n][0],e))return n;return-1},mt=Bt,Dt=Array.prototype.splice;var vt=Bt;var Ht=Bt;var bt=Bt;var Et=st,$t=function(t){var e=this.__data__,n=mt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Dt.call(e,n,1),--this.size,!0)},xt=function(t){var e=this.__data__,n=vt(e,t);return n<0?void 0:e[n][1]},_t=function(t){return Ht(this.__data__,t)>-1},At=function(t,e){var n=this.__data__,r=bt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function zt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}zt.prototype.clear=Et,zt.prototype.delete=$t,zt.prototype.get=xt,zt.prototype.has=_t,zt.prototype.set=At;var wt=zt,Ct=Z(f,"Map"),Ot=yt,kt=wt,Tt=Ct;var Wt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var jt=function(t,e){var n=t.__data__;return Wt(e)?n["string"==typeof e?"string":"hash"]:n.map},Lt=jt;var It=jt;var Vt=jt;var Rt=jt;var Pt=function(){this.size=0,this.__data__={hash:new Ot,map:new(Tt||kt),string:new Ot}},Nt=function(t){var e=Lt(this,t).delete(t);return this.size-=e?1:0,e},Gt=function(t){return It(this,t).get(t)},Xt=function(t){return Vt(this,t).has(t)},Mt=function(t,e){var n=Rt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ut.prototype.clear=Pt,Ut.prototype.delete=Nt,Ut.prototype.get=Gt,Ut.prototype.has=Xt,Ut.prototype.set=Mt;var qt=Ut;function Jt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Jt.Cache||qt),n}Jt.Cache=qt;var Kt=Jt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yt=/\\(\\)?/g,Zt=function(t){var e=Kt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Qt,(function(t,n,r,i){e.push(r?i.replace(Yt,"$1"):n||t)})),e}));var te=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},ee=c,ne=$,re=F?F.prototype:void 0,ie=re?re.toString:void 0;var ae=function t(e){if("string"==typeof e)return e;if(ee(e))return te(e,t)+"";if(ne(e))return ie?ie.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},oe=ae;var le=c,ce=w,ge=Zt,he=function(t){return null==t?"":oe(t)};var fe=$;var Fe=function(t,e){return le(t)?t:ce(t,e)?[t]:ge(he(t))},pe=function(t){if("string"==typeof t||fe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ue=function(t,e){for(var n=0,r=(e=Fe(e,t)).length;null!=t&&n<r;)t=t[pe(e[n++])];return n&&n==r?t:void 0};var de=function(t,e,n){var r=null==t?void 0:ue(t,e);return void 0===r?n:r};const ye=(t,e,n)=>e?de(n,e)||de(t,e):n||t,se=(t,e)=>{const n=e||t.defaultValue;return de(t.collections,n)};var Se;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Se||(Se={}));const Be={collections:{base:o},defaultValue:"base"},me=t=>e=>{const n=e.theme,r=se(Be,n[Se.textStyleScheme]);return n.options&&n.options.textStyle?ye(r,t,n.options.textStyle):ye(r,t)},De={D1:{fontFamily:me("D1.fontFamily"),fontSize:me("D1.fontSize"),fontWeight:me("D1.fontWeight"),lineHeight:me("D1.lineHeight"),letterSpacing:me("D1.letterSpacing")},D2:{fontFamily:me("D2.fontFamily"),fontSize:me("D2.fontSize"),fontWeight:me("D2.fontWeight"),lineHeight:me("D2.lineHeight"),letterSpacing:me("D2.letterSpacing")},D3:{fontFamily:me("D3.fontFamily"),fontSize:me("D3.fontSize"),fontWeight:me("D3.fontWeight"),lineHeight:me("D3.lineHeight"),letterSpacing:me("D3.letterSpacing")},D4:{fontFamily:me("D4.fontFamily"),fontSize:me("D4.fontSize"),fontWeight:me("D4.fontWeight"),lineHeight:me("D4.lineHeight"),letterSpacing:me("D4.letterSpacing")},DBody:{fontFamily:me("DBody.fontFamily"),fontSize:me("DBody.fontSize"),fontWeight:me("DBody.fontWeight"),lineHeight:me("DBody.lineHeight"),letterSpacing:me("DBody.letterSpacing")},H1:{fontFamily:me("H1.fontFamily"),fontSize:me("H1.fontSize"),fontWeight:me("H1.fontWeight"),lineHeight:me("H1.lineHeight"),letterSpacing:me("H1.letterSpacing")},H2:{fontFamily:me("H2.fontFamily"),fontSize:me("H2.fontSize"),fontWeight:me("H2.fontWeight"),lineHeight:me("H2.lineHeight"),letterSpacing:me("H2.letterSpacing")},H3:{fontFamily:me("H3.fontFamily"),fontSize:me("H3.fontSize"),fontWeight:me("H3.fontWeight"),lineHeight:me("H3.lineHeight"),letterSpacing:me("H3.letterSpacing")},H4:{fontFamily:me("H4.fontFamily"),fontSize:me("H4.fontSize"),fontWeight:me("H4.fontWeight"),lineHeight:me("H4.lineHeight"),letterSpacing:me("H4.letterSpacing")},H5:{fontFamily:me("H5.fontFamily"),fontSize:me("H5.fontSize"),fontWeight:me("H5.fontWeight"),lineHeight:me("H5.lineHeight"),letterSpacing:me("H5.letterSpacing")},H6:{fontFamily:me("H6.fontFamily"),fontSize:me("H6.fontSize"),fontWeight:me("H6.fontWeight"),lineHeight:me("H6.lineHeight"),letterSpacing:me("H6.letterSpacing")},Body:{fontFamily:me("Body.fontFamily"),fontSize:me("Body.fontSize"),fontWeight:me("Body.fontWeight"),lineHeight:me("Body.lineHeight"),letterSpacing:me("Body.letterSpacing")},BodySmall:{fontFamily:me("BodySmall.fontFamily"),fontSize:me("BodySmall.fontSize"),fontWeight:me("BodySmall.fontWeight"),lineHeight:me("BodySmall.lineHeight"),letterSpacing:me("BodySmall.letterSpacing")},XSmall:{fontFamily:me("XSmall.fontFamily"),fontSize:me("XSmall.fontSize"),fontWeight:me("XSmall.fontWeight"),lineHeight:me("XSmall.lineHeight"),letterSpacing:me("XSmall.letterSpacing")}},ve=t=>{switch(t){case 700:case"bold":return a.Bold;case 600:case"semibold":return a.Semibold;case 300:case"light":return a.Light;case 400:case"regular":return a.Regular;default:return""}},He=(t,n)=>r=>{var i;const o=De[t].fontFamily(r),l=De[t].fontWeight(r);return Object.values(a).includes(o)?e`
                font-family: ${ve(n)||ve(l)||o};
                font-weight: normal !important;
            `:e`
            font-family: ${o};
            font-weight: ${null!==(i=be(n)||l)&&void 0!==i?i:"normal"};
        `},be=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ee=t=>{if(t>0)return e`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},$e={getFontFamily:He,getTextStyle:(t,n,r=!1)=>i=>{const a=De[t],o=a.fontSize(i);return e`
            ${He(t,n)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${e`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},getDisplayStyle:(t=!1,n=!1,r=void 0)=>n?e`
            display: block;
            ${Ee(r)}
        `:t?e`
            display: inline;
        `:e`
            display: block;
            ${Ee(r)}
        `};const xe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},_e=t=>e=>{const n=e.theme,r=se(xe,n[Se.colorScheme]);return n.options&&n.options.color?ye(r,t,n.options.color):ye(r,t)},Ae=(_e("Brand.1"),_e("Brand.2"),_e("Brand.3"),_e("Brand.4"),_e("Brand.5"),_e("Brand.6"),_e("Primary")),ze=(_e("PrimaryDark"),_e("Secondary")),we=(_e("Accent.Light.1"),_e("Accent.Light.2"),_e("Accent.Light.3"),_e("Accent.Light.4"),_e("Accent.Light.5"),_e("Accent.Light.6"),_e("Accent.Dark.1"),_e("Accent.Dark.2"),_e("Accent.Dark.3"),{1:_e("Neutral.1"),2:_e("Neutral.2"),3:_e("Neutral.3"),4:_e("Neutral.4"),5:_e("Neutral.5"),6:_e("Neutral.6"),7:_e("Neutral.7"),8:_e("Neutral.8")});_e("Validation.Green.Text"),_e("Validation.Green.Icon"),_e("Validation.Green.Border"),_e("Validation.Green.Background"),_e("Validation.Orange.Text"),_e("Validation.Orange.Icon"),_e("Validation.Orange.Border"),_e("Validation.Orange.Background"),_e("Validation.Orange.Badge"),_e("Validation.Red.Text"),_e("Validation.Red.Icon"),_e("Validation.Red.Border"),_e("Validation.Red.Background"),_e("Validation.Blue.Text"),_e("Validation.Blue.Icon"),_e("Validation.Blue.Border"),_e("Validation.Blue.Background"),_e("Shadow.Accent"),_e("Shadow.Red"),_e("Shadow.Elevation");var Ce;!function(n){n.D1=t.h1`
        ${t=>e`
                ${$e.getTextStyle("D1",t.weight,t.paragraph)}
                color: ${we[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.D2=t.h1`
        ${t=>e`
                ${$e.getTextStyle("D2",t.weight,t.paragraph)}
                color: ${we[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.D3=t.h1`
        ${t=>e`
                ${$e.getTextStyle("D3",t.weight,t.paragraph)}
                color: ${we[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.D4=t.h1`
        ${t=>e`
                ${$e.getTextStyle("D4",t.weight,t.paragraph)}
                color: ${we[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.DBody=t.h1`
        ${t=>e`
                ${$e.getTextStyle("DBody",t.weight,t.paragraph)}
                color: ${we[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H1=t.h1`
        ${t=>e`
                ${$e.getTextStyle("H1",t.weight,t.paragraph)}
                color: ${we[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H2=t.h2`
        ${t=>e`
                ${$e.getTextStyle("H2",t.weight,t.paragraph)}
                color: ${we[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H3=t.h3`
        ${t=>e`
                ${$e.getTextStyle("H3",t.weight,t.paragraph)}
                color: ${we[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H4=t.h4`
        ${t=>e`
                ${$e.getTextStyle("H4",t.weight,t.paragraph)}
                color: ${we[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H5=t.h5`
        ${t=>e`
                ${$e.getTextStyle("H5",t.weight,t.paragraph)}
                color: ${we[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H6=t.h6`
        ${t=>e`
                ${$e.getTextStyle("H6",t.weight,t.paragraph)}
                color: ${we[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.Body=t.p`
        ${t=>e`
                ${$e.getTextStyle("Body",t.weight,t.paragraph)}
                color: ${we[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.BodySmall=t.p`
        ${t=>e`
                ${$e.getTextStyle("BodySmall",t.weight,t.paragraph)}
                color: ${we[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.XSmall=t.span`
        ${t=>e`
                ${$e.getTextStyle("XSmall",t.weight,t.paragraph)}
                color: ${we[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.Hyperlink={Default:t=>Te(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Te(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Ce||(Ce={}));const Oe=t.a`
    ${t=>e`
            ${$e.getTextStyle(t.textStyle,t.weight)}
            color: ${Ae};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ze};

                svg {
                    color: ${ze};
                }
            }
        `}
`,ke=t(i)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Te=t=>{var{external:e=!1,children:i}=t,a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(t,["external","children"]);return n(Oe,Object.assign({},a,{children:[i,e&&r(ke,{})]}))};var We;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(We||(We={}));export{We as RedirectScope,Ce as Text,De as TextStyle,$e as TextStyleHelper};
//# sourceMappingURL=index.js.map
