import{jsxs as t,jsx as e}from"react/jsx-runtime";import{useState as n,useRef as r,useEffect as i}from"react";import{ExternalIcon as o}from"@lifesg/react-icons/external";import a,{css as l}from"styled-components";function c(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var h=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},d="object"==typeof s&&s&&s.Object===Object&&s,f="object"==typeof self&&self&&self.Object===Object&&self,g=d||f||Function("return this")(),u=g,F=function(){return u.Date.now()},m=/\s/;var y=function(t){for(var e=t.length;e--&&m.test(t.charAt(e)););return e},b=/^\s+/;var B=function(t){return t?t.slice(0,y(t)+1).replace(b,""):t},v=g.Symbol,S=v,x=Object.prototype,D=x.hasOwnProperty,w=x.toString,$=S?S.toStringTag:void 0;var H=function(t){var e=D.call(t,$),n=t[$];try{t[$]=void 0;var r=!0}catch(t){}var i=w.call(t);return r&&(e?t[$]=n:delete t[$]),i},E=Object.prototype.toString;var _=H,A=function(t){return E.call(t)},z=v?v.toStringTag:void 0;var k=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":z&&z in Object(t)?_(t):A(t)};var O=k,C=function(t){return null!=t&&"object"==typeof t};var j=function(t){return"symbol"==typeof t||C(t)&&"[object Symbol]"==O(t)},W=B,L=h,T=j,V=/^[-+]0x[0-9a-f]+$/i,I=/^0b[01]+$/i,R=/^0o[0-7]+$/i,P=parseInt;var N=h,X=F,G=function(t){if("number"==typeof t)return t;if(T(t))return NaN;if(L(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=L(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=W(t);var n=I.test(t);return n||R.test(t)?P(t.slice(2),n?2:8):V.test(t)?NaN:+t},M=Math.max,Y=Math.min;var U=p((function(t,e,n){var r,i,o,a,l,c,s=0,p=!1,h=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function f(e){var n=r,o=i;return r=i=void 0,s=e,a=t.apply(o,n)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||h&&t-s>=o}function u(){var t=X();if(g(t))return F(t);l=setTimeout(u,function(t){var n=e-(t-c);return h?Y(n,o-(t-s)):n}(t))}function F(t){return l=void 0,d&&r?f(t):(r=i=void 0,a)}function m(){var t=X(),n=g(t);if(r=arguments,i=this,c=t,n){if(void 0===l)return function(t){return s=t,l=setTimeout(u,e),p?f(t):a}(c);if(h)return clearTimeout(l),l=setTimeout(u,e),f(c)}return void 0===l&&(l=setTimeout(u,e)),a}return e=G(e)||0,N(n)&&(p=!!n.leading,o=(h="maxWait"in n)?M(G(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),m.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=i=l=void 0},m.flush=function(){return void 0===l?a:F(X())},m}));var q=Array.isArray,J=q,K=j,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Z=/^\w*$/;var tt=function(t,e){if(J(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!K(t))||(Z.test(t)||!Q.test(t)||null!=e&&t in Object(e))},et=k,nt=h;var rt,it=function(t){if(!nt(t))return!1;var e=et(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},ot=g["__core-js_shared__"],at=(rt=/[^.]+$/.exec(ot&&ot.keys&&ot.keys.IE_PROTO||""))?"Symbol(src)_1."+rt:"";var lt=function(t){return!!at&&at in t},ct=Function.prototype.toString;var st=it,pt=lt,ht=h,dt=function(t){if(null!=t){try{return ct.call(t)}catch(t){}try{return t+""}catch(t){}}return""},ft=/^\[object .+?Constructor\]$/,gt=Function.prototype,ut=Object.prototype,Ft=gt.toString,mt=ut.hasOwnProperty,yt=RegExp("^"+Ft.call(mt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var bt=function(t){return!(!ht(t)||pt(t))&&(st(t)?yt:ft).test(dt(t))},Bt=function(t,e){return null==t?void 0:t[e]};var vt=function(t,e){var n=Bt(t,e);return bt(n)?n:void 0},St=vt(Object,"create"),xt=St;var Dt=function(){this.__data__=xt?xt(null):{},this.size=0};var wt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},$t=St,Ht=Object.prototype.hasOwnProperty;var Et=function(t){var e=this.__data__;if($t){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Ht.call(e,t)?e[t]:void 0},_t=St,At=Object.prototype.hasOwnProperty;var zt=St;var kt=Dt,Ot=wt,Ct=Et,jt=function(t){var e=this.__data__;return _t?void 0!==e[t]:At.call(e,t)},Wt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=zt&&void 0===e?"__lodash_hash_undefined__":e,this};function Lt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Lt.prototype.clear=kt,Lt.prototype.delete=Ot,Lt.prototype.get=Ct,Lt.prototype.has=jt,Lt.prototype.set=Wt;var Tt=Lt;var Vt=function(){this.__data__=[],this.size=0};var It=function(t,e){return t===e||t!=t&&e!=e};var Rt=function(t,e){for(var n=t.length;n--;)if(It(t[n][0],e))return n;return-1},Pt=Rt,Nt=Array.prototype.splice;var Xt=Rt;var Gt=Rt;var Mt=Rt;var Yt=Vt,Ut=function(t){var e=this.__data__,n=Pt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Nt.call(e,n,1),--this.size,!0)},qt=function(t){var e=this.__data__,n=Xt(e,t);return n<0?void 0:e[n][1]},Jt=function(t){return Gt(this.__data__,t)>-1},Kt=function(t,e){var n=this.__data__,r=Mt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Qt.prototype.clear=Yt,Qt.prototype.delete=Ut,Qt.prototype.get=qt,Qt.prototype.has=Jt,Qt.prototype.set=Kt;var Zt=Qt,te=vt(g,"Map"),ee=Tt,ne=Zt,re=te;var ie=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var oe=function(t,e){var n=t.__data__;return ie(e)?n["string"==typeof e?"string":"hash"]:n.map},ae=oe;var le=oe;var ce=oe;var se=oe;var pe=function(){this.size=0,this.__data__={hash:new ee,map:new(re||ne),string:new ee}},he=function(t){var e=ae(this,t).delete(t);return this.size-=e?1:0,e},de=function(t){return le(this,t).get(t)},fe=function(t){return ce(this,t).has(t)},ge=function(t,e){var n=se(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ue(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ue.prototype.clear=pe,ue.prototype.delete=he,ue.prototype.get=de,ue.prototype.has=fe,ue.prototype.set=ge;var Fe=ue;function me(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(me.Cache||Fe),n}me.Cache=Fe;var ye=me;var be=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Be=/\\(\\)?/g,ve=function(t){var e=ye(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(be,(function(t,n,r,i){e.push(r?i.replace(Be,"$1"):n||t)})),e}));var Se=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},xe=q,De=j,we=v?v.prototype:void 0,$e=we?we.toString:void 0;var He=function t(e){if("string"==typeof e)return e;if(xe(e))return Se(e,t)+"";if(De(e))return $e?$e.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},Ee=He;var _e=q,Ae=tt,ze=ve,ke=function(t){return null==t?"":Ee(t)};var Oe=j;var Ce=function(t,e){return _e(t)?t:Ae(t,e)?[t]:ze(ke(t))},je=function(t){if("string"==typeof t||Oe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var We=function(t,e){for(var n=0,r=(e=Ce(e,t)).length;null!=t&&n<r;)t=t[je(e[n++])];return n&&n==r?t:void 0};var Le=p((function(t,e,n){var r=null==t?void 0:We(t,e);return void 0===r?n:r}));const Te=(t,e,n)=>e?Le(n,e)||Le(t,e):n||t,Ve=(t,e)=>{const n=e||t.defaultValue;return Le(t.collections,n)};var Ie;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Ie||(Ie={}));const Re={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Pe=t=>e=>{const n=e.theme,r=Ve(Re,n[Ie.colorScheme]);return n.options&&n.options.color?Te(r,t,n.options.color):Te(r,t)},Ne=(Pe("Brand.1"),Pe("Brand.2"),Pe("Brand.3"),Pe("Brand.4"),Pe("Brand.5"),Pe("Brand.6"),Pe("Primary")),Xe=(Pe("PrimaryDark"),Pe("Secondary")),Ge=(Pe("Accent.Light.1"),Pe("Accent.Light.2"),Pe("Accent.Light.3"),Pe("Accent.Light.4"),Pe("Accent.Light.5"),Pe("Accent.Light.6"),Pe("Accent.Dark.1"),Pe("Accent.Dark.2"),Pe("Accent.Dark.3"),{1:Pe("Neutral.1"),2:Pe("Neutral.2"),3:Pe("Neutral.3"),4:Pe("Neutral.4"),5:Pe("Neutral.5"),6:Pe("Neutral.6"),7:Pe("Neutral.7"),8:Pe("Neutral.8")}),Me=(Pe("Validation.Green.Text"),Pe("Validation.Green.Icon"),Pe("Validation.Green.Border"),Pe("Validation.Green.Background"),Pe("Validation.Orange.Text"),Pe("Validation.Orange.Icon"),Pe("Validation.Orange.Border"),Pe("Validation.Orange.Background"),Pe("Validation.Orange.Badge"),Pe("Validation.Red.Text"),Pe("Validation.Red.Icon"),Pe("Validation.Red.Border"),Pe("Validation.Red.Background"),Pe("Validation.Blue.Text"),Pe("Validation.Blue.Icon"),Pe("Validation.Blue.Border"),Pe("Validation.Blue.Background"),Pe("Shadow.Accent"),Pe("Shadow.Red"),Pe("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Ye={collections:{base:{D1:{fontFamily:Me.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Me.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Me.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Me.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Me.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Me.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Me.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Me.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Me.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Me.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Me.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Me.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Me.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Me.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ue=t=>e=>{const n=e.theme,r=Ve(Ye,n[Ie.textStyleScheme]);return n.options&&n.options.textStyle?Te(r,t,n.options.textStyle):Te(r,t)},qe={D1:{fontFamily:Ue("D1.fontFamily"),fontSize:Ue("D1.fontSize"),fontWeight:Ue("D1.fontWeight"),lineHeight:Ue("D1.lineHeight"),letterSpacing:Ue("D1.letterSpacing")},D2:{fontFamily:Ue("D2.fontFamily"),fontSize:Ue("D2.fontSize"),fontWeight:Ue("D2.fontWeight"),lineHeight:Ue("D2.lineHeight"),letterSpacing:Ue("D2.letterSpacing")},D3:{fontFamily:Ue("D3.fontFamily"),fontSize:Ue("D3.fontSize"),fontWeight:Ue("D3.fontWeight"),lineHeight:Ue("D3.lineHeight"),letterSpacing:Ue("D3.letterSpacing")},D4:{fontFamily:Ue("D4.fontFamily"),fontSize:Ue("D4.fontSize"),fontWeight:Ue("D4.fontWeight"),lineHeight:Ue("D4.lineHeight"),letterSpacing:Ue("D4.letterSpacing")},DBody:{fontFamily:Ue("DBody.fontFamily"),fontSize:Ue("DBody.fontSize"),fontWeight:Ue("DBody.fontWeight"),lineHeight:Ue("DBody.lineHeight"),letterSpacing:Ue("DBody.letterSpacing")},H1:{fontFamily:Ue("H1.fontFamily"),fontSize:Ue("H1.fontSize"),fontWeight:Ue("H1.fontWeight"),lineHeight:Ue("H1.lineHeight"),letterSpacing:Ue("H1.letterSpacing")},H2:{fontFamily:Ue("H2.fontFamily"),fontSize:Ue("H2.fontSize"),fontWeight:Ue("H2.fontWeight"),lineHeight:Ue("H2.lineHeight"),letterSpacing:Ue("H2.letterSpacing")},H3:{fontFamily:Ue("H3.fontFamily"),fontSize:Ue("H3.fontSize"),fontWeight:Ue("H3.fontWeight"),lineHeight:Ue("H3.lineHeight"),letterSpacing:Ue("H3.letterSpacing")},H4:{fontFamily:Ue("H4.fontFamily"),fontSize:Ue("H4.fontSize"),fontWeight:Ue("H4.fontWeight"),lineHeight:Ue("H4.lineHeight"),letterSpacing:Ue("H4.letterSpacing")},H5:{fontFamily:Ue("H5.fontFamily"),fontSize:Ue("H5.fontSize"),fontWeight:Ue("H5.fontWeight"),lineHeight:Ue("H5.lineHeight"),letterSpacing:Ue("H5.letterSpacing")},H6:{fontFamily:Ue("H6.fontFamily"),fontSize:Ue("H6.fontSize"),fontWeight:Ue("H6.fontWeight"),lineHeight:Ue("H6.lineHeight"),letterSpacing:Ue("H6.letterSpacing")},Body:{fontFamily:Ue("Body.fontFamily"),fontSize:Ue("Body.fontSize"),fontWeight:Ue("Body.fontWeight"),lineHeight:Ue("Body.lineHeight"),letterSpacing:Ue("Body.letterSpacing")},BodySmall:{fontFamily:Ue("BodySmall.fontFamily"),fontSize:Ue("BodySmall.fontSize"),fontWeight:Ue("BodySmall.fontWeight"),lineHeight:Ue("BodySmall.lineHeight"),letterSpacing:Ue("BodySmall.letterSpacing")},XSmall:{fontFamily:Ue("XSmall.fontFamily"),fontSize:Ue("XSmall.fontSize"),fontWeight:Ue("XSmall.fontWeight"),lineHeight:Ue("XSmall.lineHeight"),letterSpacing:Ue("XSmall.letterSpacing")}},Je=t=>{switch(t){case 700:case"bold":return Me.Bold;case 600:case"semibold":return Me.Semibold;case 300:case"light":return Me.Light;case 400:case"regular":return Me.Regular;default:return""}},Ke=(t,e)=>n=>{var r;const i=qe[t].fontFamily(n),o=qe[t].fontWeight(n);return Object.values(Me).includes(i)?l`
                font-family: ${Je(e)||Je(o)||i};
                font-weight: normal !important;
            `:l`
            font-family: ${i};
            font-weight: ${null!==(r=Qe(e)||o)&&void 0!==r?r:"normal"};
        `},Qe=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ze=t=>{if(t>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},tn=(t,e,n=!1)=>r=>{const i=qe[t],o=i.fontSize(r);return l`
            ${Ke(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},en=(t=!1,e=!1,n=void 0)=>e?l`
            display: block;
            ${Ze(n)}
        `:t?l`
            display: inline;
        `:l`
            display: block;
            ${Ze(n)}
        `;var nn;!function(t){t.D1=a.h1`
        ${t=>l`
                ${tn("D1",t.weight,t.paragraph)}
                color: ${Ge[1]};
                ${en(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=a.h1`
        ${t=>l`
                ${tn("D2",t.weight,t.paragraph)}
                color: ${Ge[1]};
                ${en(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=a.h1`
        ${t=>l`
                ${tn("D3",t.weight,t.paragraph)}
                color: ${Ge[1]};
                ${en(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=a.h1`
        ${t=>l`
                ${tn("D4",t.weight,t.paragraph)}
                color: ${Ge[1]};
                ${en(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=a.h1`
        ${t=>l`
                ${tn("DBody",t.weight,t.paragraph)}
                color: ${Ge[1]};
                ${en(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=a.h1`
        ${t=>l`
                ${tn("H1",t.weight,t.paragraph)}
                color: ${Ge[1]};
                ${en(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=a.h2`
        ${t=>l`
                ${tn("H2",t.weight,t.paragraph)}
                color: ${Ge[1]};
                ${en(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=a.h3`
        ${t=>l`
                ${tn("H3",t.weight,t.paragraph)}
                color: ${Ge[1]};
                ${en(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=a.h4`
        ${t=>l`
                ${tn("H4",t.weight,t.paragraph)}
                color: ${Ge[1]};
                ${en(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=a.h5`
        ${t=>l`
                ${tn("H5",t.weight,t.paragraph)}
                color: ${Ge[1]};
                ${en(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=a.h6`
        ${t=>l`
                ${tn("H6",t.weight,t.paragraph)}
                color: ${Ge[1]};
                ${en(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=a.p`
        ${t=>l`
                ${tn("Body",t.weight,t.paragraph)}
                color: ${Ge[1]};
                ${en(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=a.p`
        ${t=>l`
                ${tn("BodySmall",t.weight,t.paragraph)}
                color: ${Ge[1]};
                ${en(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=a.span`
        ${t=>l`
                ${tn("XSmall",t.weight,t.paragraph)}
                color: ${Ge[1]};
                ${en(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>an(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>an(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(nn||(nn={}));const rn=a.a`
    ${t=>l`
            ${tn(t.textStyle,t.weight)}
            color: ${Ne};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Xe};

                svg {
                    color: ${Xe};
                }
            }
        `}
`,on=a(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,an=n=>{var{external:r=!1,children:i}=n,o=c(n,["external","children"]);return t(rn,Object.assign({},o,{children:[i,r&&e(on,{})]}))},ln=a.div`
    border-radius: 0.5rem;
    background: ${Ge[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,cn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},sn=t=>Object.keys(cn).reduce(((e,n)=>{const r=cn[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),pn=sn("max-width"),hn=(sn("min-width"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),dn=a.div`
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

                ${pn.mobileL} {
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

                ${pn.mobileL} {
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

                ${pn.mobileL} {
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

                ${pn.mobileL} {
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
`,fn=a((t=>{var{children:n}=t,r=c(t,["children"]);const i=r["data-testid"]||"card";return e(ln,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?e(nn.Body,{children:n}):n}))}))`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,gn=a.div`
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
                        border-color: ${Ge[8]} transparent
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
                        border-color: transparent ${Ge[8]}
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
                            ${Ge[8]};
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
                            ${Ge[8]} transparent;
                    }
                `}}}
`,un=a.div`
    position: relative;
`,Fn=o=>{var{visible:a,position:l="top",children:s}=o,p=c(o,["visible","position","children"]);const h=p["data-testid"]||"tooltip",[d,f]=n(l),g=r(null);i((()=>(F(),window.addEventListener("resize",U(u,300)),()=>{window.removeEventListener("resize",U(u,300))})),[]);const u=()=>{F()},F=()=>{if(g.current){const t=g.current.getBoundingClientRect();if(t.x<0)switch(l){case"left":case"top":case"bottom":f("right");break;case"right":f("top")}else if(t.x+t.width>window.outerWidth)switch(l){case"right":case"top":case"bottom":f("left");break;case"left":f("top")}else f(l)}};return t(dn,Object.assign({position:d,"data-testid":h,visible:a,ref:g},p,{children:[e(fn,{children:"string"==typeof s?e(nn.BodySmall,{children:s}):s}),e(gn,{position:d})]}))},mn=(n,r)=>i=>{const{tooltipVisible:o,position:a}=i,l=c(i,["tooltipVisible","position"]);return t(un,{children:[e(n,Object.assign({},l)),e(Fn,Object.assign({visible:o,position:a},{children:r.content}))]})};export{Fn as Tooltip,mn as withTooltip};
//# sourceMappingURL=index.js.map
