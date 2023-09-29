import{jsxs as t,jsx as e}from"react/jsx-runtime";import{useState as n,useRef as r,useEffect as i}from"react";import{ExternalIcon as o}from"@lifesg/react-icons/external";import a,{css as l}from"styled-components";function c(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var s=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},p="object"==typeof h&&h&&h.Object===Object&&h,f="object"==typeof self&&self&&self.Object===Object&&self,d=p||f||Function("return this")(),g=d,u=function(){return g.Date.now()},F=/\s/;var y=function(t){for(var e=t.length;e--&&F.test(t.charAt(e)););return e},m=/^\s+/;var b=function(t){return t?t.slice(0,y(t)+1).replace(m,""):t},v=d.Symbol,S=v,B=Object.prototype,x=B.hasOwnProperty,D=B.toString,w=S?S.toStringTag:void 0;var H=function(t){var e=x.call(t,w),n=t[w];try{t[w]=void 0;var r=!0}catch(t){}var i=D.call(t);return r&&(e?t[w]=n:delete t[w]),i},$=Object.prototype.toString;var E=H,_=function(t){return $.call(t)},z=v?v.toStringTag:void 0;var A=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":z&&z in Object(t)?E(t):_(t)};var O=A,k=function(t){return null!=t&&"object"==typeof t};var W=function(t){return"symbol"==typeof t||k(t)&&"[object Symbol]"==O(t)},j=b,C=s,T=W,V=/^[-+]0x[0-9a-f]+$/i,I=/^0b[01]+$/i,L=/^0o[0-7]+$/i,R=parseInt;var P=s,N=u,X=function(t){if("number"==typeof t)return t;if(T(t))return NaN;if(C(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=C(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=j(t);var n=I.test(t);return n||L.test(t)?R(t.slice(2),n?2:8):V.test(t)?NaN:+t},G=Math.max,Y=Math.min;var M=function(t,e,n){var r,i,o,a,l,c,h=0,s=!1,p=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var n=r,o=i;return r=i=void 0,h=e,a=t.apply(o,n)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||p&&t-h>=o}function u(){var t=N();if(g(t))return F(t);l=setTimeout(u,function(t){var n=e-(t-c);return p?Y(n,o-(t-h)):n}(t))}function F(t){return l=void 0,f&&r?d(t):(r=i=void 0,a)}function y(){var t=N(),n=g(t);if(r=arguments,i=this,c=t,n){if(void 0===l)return function(t){return h=t,l=setTimeout(u,e),s?d(t):a}(c);if(p)return clearTimeout(l),l=setTimeout(u,e),d(c)}return void 0===l&&(l=setTimeout(u,e)),a}return e=X(e)||0,P(n)&&(s=!!n.leading,o=(p="maxWait"in n)?G(X(n.maxWait)||0,e):o,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==l&&clearTimeout(l),h=0,r=c=i=l=void 0},y.flush=function(){return void 0===l?a:F(N())},y};var U=Array.isArray,q=U,J=W,K=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/;var Z=function(t,e){if(q(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!J(t))||(Q.test(t)||!K.test(t)||null!=e&&t in Object(e))},tt=A,et=s;var nt,rt=function(t){if(!et(t))return!1;var e=tt(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},it=d["__core-js_shared__"],ot=(nt=/[^.]+$/.exec(it&&it.keys&&it.keys.IE_PROTO||""))?"Symbol(src)_1."+nt:"";var at=function(t){return!!ot&&ot in t},lt=Function.prototype.toString;var ct=rt,ht=at,st=s,pt=function(t){if(null!=t){try{return lt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},ft=/^\[object .+?Constructor\]$/,dt=Function.prototype,gt=Object.prototype,ut=dt.toString,Ft=gt.hasOwnProperty,yt=RegExp("^"+ut.call(Ft).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var mt=function(t){return!(!st(t)||ht(t))&&(ct(t)?yt:ft).test(pt(t))},bt=function(t,e){return null==t?void 0:t[e]};var vt=function(t,e){var n=bt(t,e);return mt(n)?n:void 0},St=vt(Object,"create"),Bt=St;var xt=function(){this.__data__=Bt?Bt(null):{},this.size=0};var Dt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},wt=St,Ht=Object.prototype.hasOwnProperty;var $t=function(t){var e=this.__data__;if(wt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Ht.call(e,t)?e[t]:void 0},Et=St,_t=Object.prototype.hasOwnProperty;var zt=St;var At=xt,Ot=Dt,kt=$t,Wt=function(t){var e=this.__data__;return Et?void 0!==e[t]:_t.call(e,t)},jt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=zt&&void 0===e?"__lodash_hash_undefined__":e,this};function Ct(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ct.prototype.clear=At,Ct.prototype.delete=Ot,Ct.prototype.get=kt,Ct.prototype.has=Wt,Ct.prototype.set=jt;var Tt=Ct;var Vt=function(){this.__data__=[],this.size=0};var It=function(t,e){return t===e||t!=t&&e!=e};var Lt=function(t,e){for(var n=t.length;n--;)if(It(t[n][0],e))return n;return-1},Rt=Lt,Pt=Array.prototype.splice;var Nt=Lt;var Xt=Lt;var Gt=Lt;var Yt=Vt,Mt=function(t){var e=this.__data__,n=Rt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Pt.call(e,n,1),--this.size,!0)},Ut=function(t){var e=this.__data__,n=Nt(e,t);return n<0?void 0:e[n][1]},qt=function(t){return Xt(this.__data__,t)>-1},Jt=function(t,e){var n=this.__data__,r=Gt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Kt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Kt.prototype.clear=Yt,Kt.prototype.delete=Mt,Kt.prototype.get=Ut,Kt.prototype.has=qt,Kt.prototype.set=Jt;var Qt=Kt,Zt=vt(d,"Map"),te=Tt,ee=Qt,ne=Zt;var re=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var ie=function(t,e){var n=t.__data__;return re(e)?n["string"==typeof e?"string":"hash"]:n.map},oe=ie;var ae=ie;var le=ie;var ce=ie;var he=function(){this.size=0,this.__data__={hash:new te,map:new(ne||ee),string:new te}},se=function(t){var e=oe(this,t).delete(t);return this.size-=e?1:0,e},pe=function(t){return ae(this,t).get(t)},fe=function(t){return le(this,t).has(t)},de=function(t,e){var n=ce(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ge(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ge.prototype.clear=he,ge.prototype.delete=se,ge.prototype.get=pe,ge.prototype.has=fe,ge.prototype.set=de;var ue=ge;function Fe(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Fe.Cache||ue),n}Fe.Cache=ue;var ye=Fe;var me=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,be=/\\(\\)?/g,ve=function(t){var e=ye(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(me,(function(t,n,r,i){e.push(r?i.replace(be,"$1"):n||t)})),e}));var Se=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},Be=U,xe=W,De=v?v.prototype:void 0,we=De?De.toString:void 0;var He=function t(e){if("string"==typeof e)return e;if(Be(e))return Se(e,t)+"";if(xe(e))return we?we.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},$e=He;var Ee=U,_e=Z,ze=ve,Ae=function(t){return null==t?"":$e(t)};var Oe=W;var ke=function(t,e){return Ee(t)?t:_e(t,e)?[t]:ze(Ae(t))},We=function(t){if("string"==typeof t||Oe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var je=function(t,e){for(var n=0,r=(e=ke(e,t)).length;null!=t&&n<r;)t=t[We(e[n++])];return n&&n==r?t:void 0};var Ce=function(t,e,n){var r=null==t?void 0:je(t,e);return void 0===r?n:r};const Te=(t,e,n)=>e?Ce(n,e)||Ce(t,e):n||t,Ve=(t,e)=>{const n=e||t.defaultValue;return Ce(t.collections,n)};var Ie;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Ie||(Ie={}));const Le={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Re=t=>e=>{const n=e.theme,r=Ve(Le,n[Ie.colorScheme]);return n.options&&n.options.color?Te(r,t,n.options.color):Te(r,t)},Pe=(Re("Brand.1"),Re("Brand.2"),Re("Brand.3"),Re("Brand.4"),Re("Brand.5"),Re("Brand.6"),Re("Primary")),Ne=(Re("PrimaryDark"),Re("Secondary")),Xe=(Re("Accent.Light.1"),Re("Accent.Light.2"),Re("Accent.Light.3"),Re("Accent.Light.4"),Re("Accent.Light.5"),Re("Accent.Light.6"),Re("Accent.Dark.1"),Re("Accent.Dark.2"),Re("Accent.Dark.3"),{1:Re("Neutral.1"),2:Re("Neutral.2"),3:Re("Neutral.3"),4:Re("Neutral.4"),5:Re("Neutral.5"),6:Re("Neutral.6"),7:Re("Neutral.7"),8:Re("Neutral.8")}),Ge=(Re("Validation.Green.Text"),Re("Validation.Green.Icon"),Re("Validation.Green.Border"),Re("Validation.Green.Background"),Re("Validation.Orange.Text"),Re("Validation.Orange.Icon"),Re("Validation.Orange.Border"),Re("Validation.Orange.Background"),Re("Validation.Orange.Badge"),Re("Validation.Red.Text"),Re("Validation.Red.Icon"),Re("Validation.Red.Border"),Re("Validation.Red.Background"),Re("Validation.Blue.Text"),Re("Validation.Blue.Icon"),Re("Validation.Blue.Border"),Re("Validation.Blue.Background"),Re("Shadow.Accent"),Re("Shadow.Red"),Re("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Ye={collections:{base:{D1:{fontFamily:Ge.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ge.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ge.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ge.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ge.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ge.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ge.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ge.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ge.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ge.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ge.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ge.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ge.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ge.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Me=t=>e=>{const n=e.theme,r=Ve(Ye,n[Ie.textStyleScheme]);return n.options&&n.options.textStyle?Te(r,t,n.options.textStyle):Te(r,t)},Ue={D1:{fontFamily:Me("D1.fontFamily"),fontSize:Me("D1.fontSize"),fontWeight:Me("D1.fontWeight"),lineHeight:Me("D1.lineHeight"),letterSpacing:Me("D1.letterSpacing")},D2:{fontFamily:Me("D2.fontFamily"),fontSize:Me("D2.fontSize"),fontWeight:Me("D2.fontWeight"),lineHeight:Me("D2.lineHeight"),letterSpacing:Me("D2.letterSpacing")},D3:{fontFamily:Me("D3.fontFamily"),fontSize:Me("D3.fontSize"),fontWeight:Me("D3.fontWeight"),lineHeight:Me("D3.lineHeight"),letterSpacing:Me("D3.letterSpacing")},D4:{fontFamily:Me("D4.fontFamily"),fontSize:Me("D4.fontSize"),fontWeight:Me("D4.fontWeight"),lineHeight:Me("D4.lineHeight"),letterSpacing:Me("D4.letterSpacing")},DBody:{fontFamily:Me("DBody.fontFamily"),fontSize:Me("DBody.fontSize"),fontWeight:Me("DBody.fontWeight"),lineHeight:Me("DBody.lineHeight"),letterSpacing:Me("DBody.letterSpacing")},H1:{fontFamily:Me("H1.fontFamily"),fontSize:Me("H1.fontSize"),fontWeight:Me("H1.fontWeight"),lineHeight:Me("H1.lineHeight"),letterSpacing:Me("H1.letterSpacing")},H2:{fontFamily:Me("H2.fontFamily"),fontSize:Me("H2.fontSize"),fontWeight:Me("H2.fontWeight"),lineHeight:Me("H2.lineHeight"),letterSpacing:Me("H2.letterSpacing")},H3:{fontFamily:Me("H3.fontFamily"),fontSize:Me("H3.fontSize"),fontWeight:Me("H3.fontWeight"),lineHeight:Me("H3.lineHeight"),letterSpacing:Me("H3.letterSpacing")},H4:{fontFamily:Me("H4.fontFamily"),fontSize:Me("H4.fontSize"),fontWeight:Me("H4.fontWeight"),lineHeight:Me("H4.lineHeight"),letterSpacing:Me("H4.letterSpacing")},H5:{fontFamily:Me("H5.fontFamily"),fontSize:Me("H5.fontSize"),fontWeight:Me("H5.fontWeight"),lineHeight:Me("H5.lineHeight"),letterSpacing:Me("H5.letterSpacing")},H6:{fontFamily:Me("H6.fontFamily"),fontSize:Me("H6.fontSize"),fontWeight:Me("H6.fontWeight"),lineHeight:Me("H6.lineHeight"),letterSpacing:Me("H6.letterSpacing")},Body:{fontFamily:Me("Body.fontFamily"),fontSize:Me("Body.fontSize"),fontWeight:Me("Body.fontWeight"),lineHeight:Me("Body.lineHeight"),letterSpacing:Me("Body.letterSpacing")},BodySmall:{fontFamily:Me("BodySmall.fontFamily"),fontSize:Me("BodySmall.fontSize"),fontWeight:Me("BodySmall.fontWeight"),lineHeight:Me("BodySmall.lineHeight"),letterSpacing:Me("BodySmall.letterSpacing")},XSmall:{fontFamily:Me("XSmall.fontFamily"),fontSize:Me("XSmall.fontSize"),fontWeight:Me("XSmall.fontWeight"),lineHeight:Me("XSmall.lineHeight"),letterSpacing:Me("XSmall.letterSpacing")}},qe=t=>{switch(t){case 700:case"bold":return Ge.Bold;case 600:case"semibold":return Ge.Semibold;case 300:case"light":return Ge.Light;case 400:case"regular":return Ge.Regular;default:return""}},Je=(t,e)=>n=>{var r;const i=Ue[t].fontFamily(n),o=Ue[t].fontWeight(n);return Object.values(Ge).includes(i)?l`
                font-family: ${qe(e)||qe(o)||i};
                font-weight: normal !important;
            `:l`
            font-family: ${i};
            font-weight: ${null!==(r=Ke(e)||o)&&void 0!==r?r:"normal"};
        `},Ke=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Qe=(t,e,n=!1)=>r=>{const i=Ue[t],o=i.fontSize(r);return l`
            ${Je(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ze=(t=!1,e=!1)=>e?l`
            display: block;
        `:t?l`
            display: inline;
        `:l`
            display: block;
        `;var tn;!function(t){t.D1=a.h1`
        ${t=>l`
                ${Qe("D1",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.D2=a.h1`
        ${t=>l`
                ${Qe("D2",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.D3=a.h1`
        ${t=>l`
                ${Qe("D3",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.D4=a.h1`
        ${t=>l`
                ${Qe("D4",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.DBody=a.h1`
        ${t=>l`
                ${Qe("DBody",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.H1=a.h1`
        ${t=>l`
                ${Qe("H1",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.H2=a.h2`
        ${t=>l`
                ${Qe("H2",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.H3=a.h3`
        ${t=>l`
                ${Qe("H3",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.H4=a.h4`
        ${t=>l`
                ${Qe("H4",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.H5=a.h5`
        ${t=>l`
                ${Qe("H5",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.H6=a.h6`
        ${t=>l`
                ${Qe("H6",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.Body=a.p`
        ${t=>l`
                ${Qe("Body",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=a.p`
        ${t=>l`
                ${Qe("BodySmall",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.XSmall=a.span`
        ${t=>l`
                ${Qe("XSmall",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>rn(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>rn(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(tn||(tn={}));const en=a.a`
    ${t=>l`
            ${Qe(t.textStyle,t.weight)}
            color: ${Pe};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ne};

                svg {
                    color: ${Ne};
                }
            }
        `}
`,nn=a(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,rn=n=>{var{external:r=!1,children:i}=n,o=c(n,["external","children"]);return t(en,Object.assign({},o,{children:[i,r&&e(nn,{})]}))},on=a.div`
    border-radius: 0.5rem;
    background: ${Xe[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,an={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ln=t=>Object.keys(an).reduce(((e,n)=>{const r=an[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),cn=ln("max-width"),hn=(ln("min-width"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),sn=a.div`
    position: absolute;
    max-width: 30rem;
    pointer-events: auto;

    ${t=>(t=>{switch(t){case"left":return l`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${cn.mobileL} {
                    width: auto;
                }
            `;case"right":return l`
                left: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${cn.mobileL} {
                    width: auto;
                }
            `;case"bottom":return l`
                top: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${cn.mobileL} {
                    max-width: 80vw;
                }
            `;default:return l`
                bottom: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${cn.mobileL} {
                    max-width: 80vw;
                }
            `}})(t.position)}
    ${t=>t.visible?l`
            visibility: "visible";
            opacity: 1;
            transition: ${hn};
            z-index: 2;
        `:l`
            visibility: "hidden";
            opacity: 0;
            transition: ${hn};
            z-index: -1;
        `}
`,pn=a((t=>{var{children:n}=t,r=c(t,["children"]);const i=r["data-testid"]||"card";return e(on,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?e(tn.Body,{children:n}):n}))}))`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,fn=a.div`
    position: absolute;
    overflow: hidden;

    ${t=>{switch(t.position){case"top":default:return l`
                    width: 50%;
                    height: 30px;
                    top: 100%;
                    left: 25%;

                    ::before {
                        content: "";
                        position: absolute;
                        background: transparent;
                        left: calc(50% - 3px);
                        width: 2px;
                        height: 8px;
                        box-shadow: 3px 2px 14px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: -10%;
                        left: calc(50% - 10px);
                        border-style: solid;
                        border-width: 16px 8px 0 8px;
                        border-color: ${Xe[8]} transparent
                            transparent transparent;
                    }
                `;case"right":return l`
                    width: 30px;
                    height: 100%;
                    top: 0;
                    left: -30px;

                    ::before {
                        content: "";
                        position: absolute;
                        background: red;
                        right: 0;
                        top: calc(50% - 3px);
                        width: 8px;
                        height: 2px;
                        box-shadow: 2px 3px 11px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: calc(50% - 10px);
                        right: -10%;
                        border-style: solid;
                        border-width: 8px 16px 8px 0;
                        border-color: transparent ${Xe[8]}
                            transparent transparent;
                    }
                `;case"left":return l`
                    width: 30px;
                    height: 100%;
                    top: 0;
                    right: -30px;

                    ::before {
                        content: "";
                        position: absolute;
                        background: red;
                        left: 0;
                        top: calc(50% - 3px);
                        width: 8px;
                        height: 2px;
                        box-shadow: 4px 0px 11px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: calc(50% - 10px);
                        left: -10%;
                        border-style: solid;
                        border-width: 8px 0 8px 16px;
                        border-color: transparent transparent transparent
                            ${Xe[8]};
                    }
                `;case"bottom":return l`
                    width: 50%;
                    height: 30px;
                    bottom: 100%;
                    left: 25%;

                    ::before {
                        content: "";
                        position: absolute;
                        background: transparent;
                        left: calc(50% - 3px);
                        bottom: -10px;
                        width: 2px;
                        height: 8px;
                        box-shadow: 3px -9px 14px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        bottom: -10%;
                        left: calc(50% - 10px);
                        border-style: solid;
                        border-width: 0 8px 16px 8px;
                        border-color: transparent transparent
                            ${Xe[8]} transparent;
                    }
                `}}}
`,dn=a.div`
    position: relative;
`,gn=o=>{var{visible:a,position:l="top",children:h}=o,s=c(o,["visible","position","children"]);const p=s["data-testid"]||"tooltip",[f,d]=n(l),g=r(null);i((()=>(F(),window.addEventListener("resize",M(u,300)),()=>{window.removeEventListener("resize",M(u,300))})),[]);const u=()=>{F()},F=()=>{if(g.current){const t=g.current.getBoundingClientRect();if(t.x<0)switch(l){case"left":case"top":case"bottom":d("right");break;case"right":d("top")}else if(t.x+t.width>window.outerWidth)switch(l){case"right":case"top":case"bottom":d("left");break;case"left":d("top")}else d(l)}};return t(sn,Object.assign({position:f,"data-testid":p,visible:a,ref:g},s,{children:[e(pn,{children:"string"==typeof h?e(tn.BodySmall,{children:h}):h}),e(fn,{position:f})]}))},un=(n,r)=>i=>{const{tooltipVisible:o,position:a}=i,l=c(i,["tooltipVisible","position"]);return t(dn,{children:[e(n,Object.assign({},l)),e(gn,Object.assign({visible:o,position:a},{children:r.content}))]})};export{gn as Tooltip,un as withTooltip};
//# sourceMappingURL=index.js.map
