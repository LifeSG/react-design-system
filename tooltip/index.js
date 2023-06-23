import t,{jsxs as e,jsx as n}from"react/jsx-runtime";import{useState as r,useRef as i,useEffect as o}from"react";import a,{css as l}from"styled-components";var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var h=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},p="object"==typeof c&&c&&c.Object===Object&&c,d="object"==typeof self&&self&&self.Object===Object&&self,s=p||d||Function("return this")(),f=s,g=function(){return f.Date.now()},u=/\s/;var F=function(t){for(var e=t.length;e--&&u.test(t.charAt(e)););return e},m=/^\s+/;var y=function(t){return t?t.slice(0,F(t)+1).replace(m,""):t},v=s.Symbol,b=v,S=Object.prototype,B=S.hasOwnProperty,x=S.toString,D=b?b.toStringTag:void 0;var H=function(t){var e=B.call(t,D),n=t[D];try{t[D]=void 0;var r=!0}catch(t){}var i=x.call(t);return r&&(e?t[D]=n:delete t[D]),i},w=Object.prototype.toString;var $=H,E=function(t){return w.call(t)},_=v?v.toStringTag:void 0;var C=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":_&&_ in Object(t)?$(t):E(t)};var z=C,A=function(t){return null!=t&&"object"==typeof t};var k=function(t){return"symbol"==typeof t||A(t)&&"[object Symbol]"==z(t)},W=y,O=h,j=k,T=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,I=/^0o[0-7]+$/i,L=parseInt;var R=h,N=g,P=function(t){if("number"==typeof t)return t;if(j(t))return NaN;if(O(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=O(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=W(t);var n=V.test(t);return n||I.test(t)?L(t.slice(2),n?2:8):T.test(t)?NaN:+t},X=Math.max,G=Math.min;var M,Y=function(t,e,n){var r,i,o,a,l,c,h=0,p=!1,d=!1,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function f(e){var n=r,o=i;return r=i=void 0,h=e,a=t.apply(o,n)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-h>=o}function u(){var t=N();if(g(t))return F(t);l=setTimeout(u,function(t){var n=e-(t-c);return d?G(n,o-(t-h)):n}(t))}function F(t){return l=void 0,s&&r?f(t):(r=i=void 0,a)}function m(){var t=N(),n=g(t);if(r=arguments,i=this,c=t,n){if(void 0===l)return function(t){return h=t,l=setTimeout(u,e),p?f(t):a}(c);if(d)return clearTimeout(l),l=setTimeout(u,e),f(c)}return void 0===l&&(l=setTimeout(u,e)),a}return e=P(e)||0,R(n)&&(p=!!n.leading,o=(d="maxWait"in n)?X(P(n.maxWait)||0,e):o,s="trailing"in n?!!n.trailing:s),m.cancel=function(){void 0!==l&&clearTimeout(l),h=0,r=c=i=l=void 0},m.flush=function(){return void 0===l?a:F(N())},m},Z={};Object.defineProperty(Z,"__esModule",{value:!0});var U=t;const q=t=>U.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:U.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});q.displayName="ExternalIcon",M=Z.ExternalIcon=q;var J=Array.isArray,K=J,Q=k,tt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,et=/^\w*$/;var nt=function(t,e){if(K(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Q(t))||(et.test(t)||!tt.test(t)||null!=e&&t in Object(e))},rt=C,it=h;var ot,at=function(t){if(!it(t))return!1;var e=rt(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},lt=s["__core-js_shared__"],ct=(ot=/[^.]+$/.exec(lt&&lt.keys&&lt.keys.IE_PROTO||""))?"Symbol(src)_1."+ot:"";var ht=function(t){return!!ct&&ct in t},pt=Function.prototype.toString;var dt=at,st=ht,ft=h,gt=function(t){if(null!=t){try{return pt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},ut=/^\[object .+?Constructor\]$/,Ft=Function.prototype,mt=Object.prototype,yt=Ft.toString,vt=mt.hasOwnProperty,bt=RegExp("^"+yt.call(vt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var St=function(t){return!(!ft(t)||st(t))&&(dt(t)?bt:ut).test(gt(t))},Bt=function(t,e){return null==t?void 0:t[e]};var xt=function(t,e){var n=Bt(t,e);return St(n)?n:void 0},Dt=xt(Object,"create"),Ht=Dt;var wt=function(){this.__data__=Ht?Ht(null):{},this.size=0};var $t=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Et=Dt,_t=Object.prototype.hasOwnProperty;var Ct=function(t){var e=this.__data__;if(Et){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return _t.call(e,t)?e[t]:void 0},zt=Dt,At=Object.prototype.hasOwnProperty;var kt=Dt;var Wt=wt,Ot=$t,jt=Ct,Tt=function(t){var e=this.__data__;return zt?void 0!==e[t]:At.call(e,t)},Vt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=kt&&void 0===e?"__lodash_hash_undefined__":e,this};function It(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}It.prototype.clear=Wt,It.prototype.delete=Ot,It.prototype.get=jt,It.prototype.has=Tt,It.prototype.set=Vt;var Lt=It;var Rt=function(){this.__data__=[],this.size=0};var Nt=function(t,e){return t===e||t!=t&&e!=e};var Pt=function(t,e){for(var n=t.length;n--;)if(Nt(t[n][0],e))return n;return-1},Xt=Pt,Gt=Array.prototype.splice;var Mt=Pt;var Yt=Pt;var Zt=Pt;var Ut=Rt,qt=function(t){var e=this.__data__,n=Xt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Gt.call(e,n,1),--this.size,!0)},Jt=function(t){var e=this.__data__,n=Mt(e,t);return n<0?void 0:e[n][1]},Kt=function(t){return Yt(this.__data__,t)>-1},Qt=function(t,e){var n=this.__data__,r=Zt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function te(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}te.prototype.clear=Ut,te.prototype.delete=qt,te.prototype.get=Jt,te.prototype.has=Kt,te.prototype.set=Qt;var ee=te,ne=xt(s,"Map"),re=Lt,ie=ee,oe=ne;var ae=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var le=function(t,e){var n=t.__data__;return ae(e)?n["string"==typeof e?"string":"hash"]:n.map},ce=le;var he=le;var pe=le;var de=le;var se=function(){this.size=0,this.__data__={hash:new re,map:new(oe||ie),string:new re}},fe=function(t){var e=ce(this,t).delete(t);return this.size-=e?1:0,e},ge=function(t){return he(this,t).get(t)},ue=function(t){return pe(this,t).has(t)},Fe=function(t,e){var n=de(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function me(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}me.prototype.clear=se,me.prototype.delete=fe,me.prototype.get=ge,me.prototype.has=ue,me.prototype.set=Fe;var ye=me;function ve(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(ve.Cache||ye),n}ve.Cache=ye;var be=ve;var Se=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Be=/\\(\\)?/g,xe=function(t){var e=be(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Se,(function(t,n,r,i){e.push(r?i.replace(Be,"$1"):n||t)})),e}));var De=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},He=J,we=k,$e=v?v.prototype:void 0,Ee=$e?$e.toString:void 0;var _e=function t(e){if("string"==typeof e)return e;if(He(e))return De(e,t)+"";if(we(e))return Ee?Ee.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},Ce=_e;var ze=J,Ae=nt,ke=xe,We=function(t){return null==t?"":Ce(t)};var Oe=k;var je=function(t,e){return ze(t)?t:Ae(t,e)?[t]:ke(We(t))},Te=function(t){if("string"==typeof t||Oe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Ve=function(t,e){for(var n=0,r=(e=je(e,t)).length;null!=t&&n<r;)t=t[Te(e[n++])];return n&&n==r?t:void 0};var Ie=function(t,e,n){var r=null==t?void 0:Ve(t,e);return void 0===r?n:r};const Le=(t,e,n)=>e?Ie(n,e)||Ie(t,e):n||t,Re=(t,e)=>{const n=e||t.defaultValue;return Ie(t.collections,n)};var Ne;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Ne||(Ne={}));const Pe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Xe=t=>e=>{const n=e.theme,r=Re(Pe,n[Ne.colorScheme]);return n.options&&n.options.color?Le(r,t,n.options.color):Le(r,t)},Ge=(Xe("Brand.1"),Xe("Brand.2"),Xe("Brand.3"),Xe("Brand.4"),Xe("Brand.5"),Xe("Brand.6"),Xe("Primary")),Me=(Xe("PrimaryDark"),Xe("Secondary")),Ye=(Xe("Accent.Light.1"),Xe("Accent.Light.2"),Xe("Accent.Light.3"),Xe("Accent.Light.4"),Xe("Accent.Light.5"),Xe("Accent.Light.6"),Xe("Accent.Dark.1"),Xe("Accent.Dark.2"),Xe("Accent.Dark.3"),{1:Xe("Neutral.1"),2:Xe("Neutral.2"),3:Xe("Neutral.3"),4:Xe("Neutral.4"),5:Xe("Neutral.5"),6:Xe("Neutral.6"),7:Xe("Neutral.7"),8:Xe("Neutral.8")}),Ze=(Xe("Validation.Green.Text"),Xe("Validation.Green.Icon"),Xe("Validation.Green.Border"),Xe("Validation.Green.Background"),Xe("Validation.Orange.Text"),Xe("Validation.Orange.Icon"),Xe("Validation.Orange.Border"),Xe("Validation.Orange.Background"),Xe("Validation.Orange.Badge"),Xe("Validation.Red.Text"),Xe("Validation.Red.Icon"),Xe("Validation.Red.Border"),Xe("Validation.Red.Background"),Xe("Validation.Blue.Text"),Xe("Validation.Blue.Icon"),Xe("Validation.Blue.Border"),Xe("Validation.Blue.Background"),Xe("Shadow.Accent"),Xe("Shadow.Red"),Xe("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Ue={collections:{base:{D1:{fontFamily:Ze.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ze.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ze.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ze.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ze.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ze.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ze.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ze.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ze.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ze.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ze.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ze.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ze.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ze.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},qe=t=>e=>{const n=e.theme,r=Re(Ue,n[Ne.textStyleScheme]);return n.options&&n.options.textStyle?Le(r,t,n.options.textStyle):Le(r,t)},Je={D1:{fontFamily:qe("D1.fontFamily"),fontSize:qe("D1.fontSize"),fontWeight:qe("D1.fontWeight"),lineHeight:qe("D1.lineHeight"),letterSpacing:qe("D1.letterSpacing")},D2:{fontFamily:qe("D2.fontFamily"),fontSize:qe("D2.fontSize"),fontWeight:qe("D2.fontWeight"),lineHeight:qe("D2.lineHeight"),letterSpacing:qe("D2.letterSpacing")},D3:{fontFamily:qe("D3.fontFamily"),fontSize:qe("D3.fontSize"),fontWeight:qe("D3.fontWeight"),lineHeight:qe("D3.lineHeight"),letterSpacing:qe("D3.letterSpacing")},D4:{fontFamily:qe("D4.fontFamily"),fontSize:qe("D4.fontSize"),fontWeight:qe("D4.fontWeight"),lineHeight:qe("D4.lineHeight"),letterSpacing:qe("D4.letterSpacing")},DBody:{fontFamily:qe("DBody.fontFamily"),fontSize:qe("DBody.fontSize"),fontWeight:qe("DBody.fontWeight"),lineHeight:qe("DBody.lineHeight"),letterSpacing:qe("DBody.letterSpacing")},H1:{fontFamily:qe("H1.fontFamily"),fontSize:qe("H1.fontSize"),fontWeight:qe("H1.fontWeight"),lineHeight:qe("H1.lineHeight"),letterSpacing:qe("H1.letterSpacing")},H2:{fontFamily:qe("H2.fontFamily"),fontSize:qe("H2.fontSize"),fontWeight:qe("H2.fontWeight"),lineHeight:qe("H2.lineHeight"),letterSpacing:qe("H2.letterSpacing")},H3:{fontFamily:qe("H3.fontFamily"),fontSize:qe("H3.fontSize"),fontWeight:qe("H3.fontWeight"),lineHeight:qe("H3.lineHeight"),letterSpacing:qe("H3.letterSpacing")},H4:{fontFamily:qe("H4.fontFamily"),fontSize:qe("H4.fontSize"),fontWeight:qe("H4.fontWeight"),lineHeight:qe("H4.lineHeight"),letterSpacing:qe("H4.letterSpacing")},H5:{fontFamily:qe("H5.fontFamily"),fontSize:qe("H5.fontSize"),fontWeight:qe("H5.fontWeight"),lineHeight:qe("H5.lineHeight"),letterSpacing:qe("H5.letterSpacing")},H6:{fontFamily:qe("H6.fontFamily"),fontSize:qe("H6.fontSize"),fontWeight:qe("H6.fontWeight"),lineHeight:qe("H6.lineHeight"),letterSpacing:qe("H6.letterSpacing")},Body:{fontFamily:qe("Body.fontFamily"),fontSize:qe("Body.fontSize"),fontWeight:qe("Body.fontWeight"),lineHeight:qe("Body.lineHeight"),letterSpacing:qe("Body.letterSpacing")},BodySmall:{fontFamily:qe("BodySmall.fontFamily"),fontSize:qe("BodySmall.fontSize"),fontWeight:qe("BodySmall.fontWeight"),lineHeight:qe("BodySmall.lineHeight"),letterSpacing:qe("BodySmall.letterSpacing")},XSmall:{fontFamily:qe("XSmall.fontFamily"),fontSize:qe("XSmall.fontSize"),fontWeight:qe("XSmall.fontWeight"),lineHeight:qe("XSmall.lineHeight"),letterSpacing:qe("XSmall.letterSpacing")}},Ke=t=>{switch(t){case 700:case"bold":return Ze.Bold;case 600:case"semibold":return Ze.Semibold;case 300:case"light":return Ze.Light;case 400:case"regular":return Ze.Regular;default:return""}},Qe=(t,e)=>n=>{const r=Je[t].fontFamily(n),i=Je[t].fontWeight(n);return Object.values(Ze).includes(r)?l`
                font-family: ${Ke(e)||Ke(i)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${(tn(e)||i)??"normal"};
        `},tn=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},en=(t,e,n=!1)=>r=>{const i=Je[t],o=i.fontSize(r);return l`
            ${Qe(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},nn=(t=!1,e=!1)=>e?l`
            display: block;
        `:t?l`
            display: inline;
        `:l`
            display: block;
        `;var rn;!function(t){t.D1=a.h1`
        ${t=>l`
                ${en("D1",t.weight,t.paragraph)}
                color: ${Ye[1]};
                ${nn(t.inline,t.paragraph)}
            `}
    `,t.D2=a.h1`
        ${t=>l`
                ${en("D2",t.weight,t.paragraph)}
                color: ${Ye[1]};
                ${nn(t.inline,t.paragraph)}
            `}
    `,t.D3=a.h1`
        ${t=>l`
                ${en("D3",t.weight,t.paragraph)}
                color: ${Ye[1]};
                ${nn(t.inline,t.paragraph)}
            `}
    `,t.D4=a.h1`
        ${t=>l`
                ${en("D4",t.weight,t.paragraph)}
                color: ${Ye[1]};
                ${nn(t.inline,t.paragraph)}
            `}
    `,t.DBody=a.h1`
        ${t=>l`
                ${en("DBody",t.weight,t.paragraph)}
                color: ${Ye[1]};
                ${nn(t.inline,t.paragraph)}
            `}
    `,t.H1=a.h1`
        ${t=>l`
                ${en("H1",t.weight,t.paragraph)}
                color: ${Ye[1]};
                ${nn(t.inline,t.paragraph)}
            `}
    `,t.H2=a.h2`
        ${t=>l`
                ${en("H2",t.weight,t.paragraph)}
                color: ${Ye[1]};
                ${nn(t.inline,t.paragraph)}
            `}
    `,t.H3=a.h3`
        ${t=>l`
                ${en("H3",t.weight,t.paragraph)}
                color: ${Ye[1]};
                ${nn(t.inline,t.paragraph)}
            `}
    `,t.H4=a.h4`
        ${t=>l`
                ${en("H4",t.weight,t.paragraph)}
                color: ${Ye[1]};
                ${nn(t.inline,t.paragraph)}
            `}
    `,t.H5=a.h5`
        ${t=>l`
                ${en("H5",t.weight,t.paragraph)}
                color: ${Ye[1]};
                ${nn(t.inline,t.paragraph)}
            `}
    `,t.H6=a.h6`
        ${t=>l`
                ${en("H6",t.weight,t.paragraph)}
                color: ${Ye[1]};
                ${nn(t.inline,t.paragraph)}
            `}
    `,t.Body=a.p`
        ${t=>l`
                ${en("Body",t.weight,t.paragraph)}
                color: ${Ye[1]};
                ${nn(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=a.p`
        ${t=>l`
                ${en("BodySmall",t.weight,t.paragraph)}
                color: ${Ye[1]};
                ${nn(t.inline,t.paragraph)}
            `}
    `,t.XSmall=a.span`
        ${t=>l`
                ${en("XSmall",t.weight,t.paragraph)}
                color: ${Ye[1]};
                ${nn(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>ln({...t,textStyle:"Body"}),Small:t=>ln({...t,textStyle:"BodySmall"})}}(rn||(rn={}));const on=a.a`
    ${t=>l`
            ${en(t.textStyle,t.weight)}
            color: ${Ge};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Me};

                svg {
                    color: ${Me};
                }
            }
        `}
`,an=a(M)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ln=({external:t=!1,children:r,...i})=>e(on,{...i,children:[r,t&&n(an,{})]}),cn=a.div`
    border-radius: 0.5rem;
    background: ${Ye[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,hn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},pn=t=>Object.keys(hn).reduce(((e,n)=>{const r=hn[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),dn=pn("max-width"),sn=(pn("min-width"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),fn=a.div`
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

                ${dn.mobileL} {
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

                ${dn.mobileL} {
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

                ${dn.mobileL} {
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

                ${dn.mobileL} {
                    max-width: 80vw;
                }
            `}})(t.position)}
    ${t=>t.visible?l`
            visibility: "visible";
            opacity: 1;
            transition: ${sn};
            z-index: 2;
        `:l`
            visibility: "hidden";
            opacity: 0;
            transition: ${sn};
            z-index: -1;
        `}
`,gn=a((({children:t,...e})=>{const r=e["data-testid"]||"card";return n(cn,{...e,"data-testid":r,children:"string"==typeof t?n(rn.Body,{children:t}):t})}))`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,un=a.div`
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
                        border-color: ${Ye[8]} transparent
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
                        border-color: transparent ${Ye[8]}
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
                            ${Ye[8]};
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
                            ${Ye[8]} transparent;
                    }
                `}}}
`,Fn=a.div`
    position: relative;
`,mn=({visible:t,position:a="top",children:l,...c})=>{const h=c["data-testid"]||"tooltip",[p,d]=r(a),s=i(null);o((()=>(g(),window.addEventListener("resize",Y(f,300)),()=>{window.removeEventListener("resize",Y(f,300))})),[]);const f=()=>{g()},g=()=>{if(s.current){const t=s.current.getBoundingClientRect();if(t.x<0)switch(a){case"left":case"top":case"bottom":d("right");break;case"right":d("top")}else if(t.x+t.width>window.outerWidth)switch(a){case"right":case"top":case"bottom":d("left");break;case"left":d("top")}else d(a)}};return e(fn,{position:p,"data-testid":h,visible:t,ref:s,...c,children:[n(gn,{children:"string"==typeof l?n(rn.BodySmall,{children:l}):l}),n(un,{position:p})]})},yn=(t,r)=>i=>{const{tooltipVisible:o,position:a,...l}=i;return e(Fn,{children:[n(t,{...l}),n(mn,{visible:o,position:a,children:r.content})]})};export{mn as Tooltip,yn as withTooltip};
//# sourceMappingURL=index.js.map
