import e,{jsx as t,jsxs as n}from"react/jsx-runtime";import*as r from"react";import i,{cloneElement as o,useRef as a,useState as s,isValidElement as l,createRef as c,PureComponent as u,useEffect as d,useLayoutEffect as h,forwardRef as p,useCallback as f,useContext as g,useMemo as m}from"react";import y,{css as v,keyframes as b}from"styled-components";import{findDOMNode as w,unstable_batchedUpdates as $}from"react-dom";const S=e=>t("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{d:"M9.39601 16.062C9.21534 15.882 9.12167 15.6807 9.11501 15.458C9.10767 15.236 9.19434 15.0347 9.37501 14.854L13.354 10.875H4.20801C3.97201 10.875 3.76734 10.7883 3.59401 10.615C3.42001 10.441 3.33301 10.236 3.33301 10C3.33301 9.764 3.42001 9.559 3.59401 9.385C3.76734 9.21167 3.97201 9.125 4.20801 9.125H13.354L9.37501 5.167C9.19434 4.98633 9.10767 4.78133 9.11501 4.552C9.12167 4.32267 9.21534 4.118 9.39601 3.938C9.57667 3.75733 9.77801 3.667 10 3.667C10.222 3.667 10.4233 3.75733 10.604 3.938L16.042 9.375C16.1393 9.45833 16.2087 9.55567 16.25 9.667C16.2913 9.77767 16.312 9.88867 16.312 10C16.312 10.1113 16.2913 10.219 16.25 10.323C16.2087 10.427 16.1393 10.5277 16.042 10.625L10.604 16.062C10.4233 16.2427 10.222 16.333 10 16.333C9.77801 16.333 9.57667 16.2427 9.39601 16.062Z",fill:"currentColor"})});S.displayName="ArrowRightIcon";var x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},C=Array.isArray,_="object"==typeof x&&x&&x.Object===Object&&x,F="object"==typeof self&&self&&self.Object===Object&&self,M=_||F||Function("return this")(),k=M.Symbol,D=k,O=Object.prototype,B=O.hasOwnProperty,H=O.toString,A=D?D.toStringTag:void 0;var E=function(e){var t=B.call(e,A),n=e[A];try{e[A]=void 0;var r=!0}catch(e){}var i=H.call(e);return r&&(t?e[A]=n:delete e[A]),i},P=Object.prototype.toString;var I=E,T=function(e){return P.call(e)},z=k?k.toStringTag:void 0;var N=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":z&&z in Object(e)?I(e):T(e)};var j=N,R=function(e){return null!=e&&"object"==typeof e};var L=function(e){return"symbol"==typeof e||R(e)&&"[object Symbol]"==j(e)},V=C,W=L,U=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Y=/^\w*$/;var q=function(e,t){if(V(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!W(e))||(Y.test(e)||!U.test(e)||null!=t&&e in Object(t))};var Z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Q=N,G=Z;var X,J=function(e){if(!G(e))return!1;var t=Q(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},K=M["__core-js_shared__"],ee=(X=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+X:"";var te=function(e){return!!ee&&ee in e},ne=Function.prototype.toString;var re=J,ie=te,oe=Z,ae=function(e){if(null!=e){try{return ne.call(e)}catch(e){}try{return e+""}catch(e){}}return""},se=/^\[object .+?Constructor\]$/,le=Function.prototype,ce=Object.prototype,ue=le.toString,de=ce.hasOwnProperty,he=RegExp("^"+ue.call(de).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var pe=function(e){return!(!oe(e)||ie(e))&&(re(e)?he:se).test(ae(e))},fe=function(e,t){return null==e?void 0:e[t]};var ge=function(e,t){var n=fe(e,t);return pe(n)?n:void 0},me=ge(Object,"create"),ye=me;var ve=function(){this.__data__=ye?ye(null):{},this.size=0};var be=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},we=me,$e=Object.prototype.hasOwnProperty;var Se=function(e){var t=this.__data__;if(we){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return $e.call(t,e)?t[e]:void 0},xe=me,Ce=Object.prototype.hasOwnProperty;var _e=me;var Fe=ve,Me=be,ke=Se,De=function(e){var t=this.__data__;return xe?void 0!==t[e]:Ce.call(t,e)},Oe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=_e&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Be.prototype.clear=Fe,Be.prototype.delete=Me,Be.prototype.get=ke,Be.prototype.has=De,Be.prototype.set=Oe;var He=Be;var Ae=function(){this.__data__=[],this.size=0};var Ee=function(e,t){return e===t||e!=e&&t!=t};var Pe=function(e,t){for(var n=e.length;n--;)if(Ee(e[n][0],t))return n;return-1},Ie=Pe,Te=Array.prototype.splice;var ze=Pe;var Ne=Pe;var je=Pe;var Re=Ae,Le=function(e){var t=this.__data__,n=Ie(t,e);return!(n<0)&&(n==t.length-1?t.pop():Te.call(t,n,1),--this.size,!0)},Ve=function(e){var t=this.__data__,n=ze(t,e);return n<0?void 0:t[n][1]},We=function(e){return Ne(this.__data__,e)>-1},Ue=function(e,t){var n=this.__data__,r=je(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ye.prototype.clear=Re,Ye.prototype.delete=Le,Ye.prototype.get=Ve,Ye.prototype.has=We,Ye.prototype.set=Ue;var qe=Ye,Ze=ge(M,"Map"),Qe=He,Ge=qe,Xe=Ze;var Je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ke=function(e,t){var n=e.__data__;return Je(t)?n["string"==typeof t?"string":"hash"]:n.map},et=Ke;var tt=Ke;var nt=Ke;var rt=Ke;var it=function(){this.size=0,this.__data__={hash:new Qe,map:new(Xe||Ge),string:new Qe}},ot=function(e){var t=et(this,e).delete(e);return this.size-=t?1:0,t},at=function(e){return tt(this,e).get(e)},st=function(e){return nt(this,e).has(e)},lt=function(e,t){var n=rt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ct(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ct.prototype.clear=it,ct.prototype.delete=ot,ct.prototype.get=at,ct.prototype.has=st,ct.prototype.set=lt;var ut=ct;function dt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(dt.Cache||ut),n}dt.Cache=ut;var ht=dt;var pt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ft=/\\(\\)?/g,gt=function(e){var t=ht(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(pt,(function(e,n,r,i){t.push(r?i.replace(ft,"$1"):n||e)})),t}));var mt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},yt=C,vt=L,bt=k?k.prototype:void 0,wt=bt?bt.toString:void 0;var $t=function e(t){if("string"==typeof t)return t;if(yt(t))return mt(t,e)+"";if(vt(t))return wt?wt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},St=$t;var xt=C,Ct=q,_t=gt,Ft=function(e){return null==e?"":St(e)};var Mt=L;var kt=function(e,t){return xt(e)?e:Ct(e,t)?[e]:_t(Ft(e))},Dt=function(e){if("string"==typeof e||Mt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ot=function(e,t){for(var n=0,r=(t=kt(t,e)).length;null!=e&&n<r;)e=e[Dt(t[n++])];return n&&n==r?e:void 0};var Bt=function(e,t,n){var r=null==e?void 0:Ot(e,t);return void 0===r?n:r};const Ht=(e,t,n)=>t?Bt(n,t)||Bt(e,t):n||e,At=(e,t)=>{const n=t||e.defaultValue;return Bt(e.collections,n)};var Et;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Et||(Et={}));const Pt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},It=e=>t=>{const n=t.theme,r=At(Pt,n[Et.colorScheme]);return n.options&&n.options.color?Ht(r,e,n.options.color):Ht(r,e)},Tt={Brand:{1:It("Brand.1"),2:It("Brand.2"),3:It("Brand.3"),4:It("Brand.4"),5:It("Brand.5"),6:It("Brand.6")},Primary:It("Primary"),PrimaryDark:It("PrimaryDark"),Secondary:It("Secondary"),Accent:{Light:{1:It("Accent.Light.1"),2:It("Accent.Light.2"),3:It("Accent.Light.3"),4:It("Accent.Light.4"),5:It("Accent.Light.5"),6:It("Accent.Light.6")},Dark:{1:It("Accent.Dark.1"),2:It("Accent.Dark.2"),3:It("Accent.Dark.3")}},Neutral:{1:It("Neutral.1"),2:It("Neutral.2"),3:It("Neutral.3"),4:It("Neutral.4"),5:It("Neutral.5"),6:It("Neutral.6"),7:It("Neutral.7"),8:It("Neutral.8")},Validation:{Green:{Text:It("Validation.Green.Text"),Icon:It("Validation.Green.Icon"),Border:It("Validation.Green.Border"),Background:It("Validation.Green.Background")},Orange:{Text:It("Validation.Orange.Text"),Icon:It("Validation.Orange.Icon"),Border:It("Validation.Orange.Border"),Background:It("Validation.Orange.Background"),Badge:It("Validation.Orange.Badge")},Red:{Text:It("Validation.Red.Text"),Icon:It("Validation.Red.Icon"),Border:It("Validation.Red.Border"),Background:It("Validation.Red.Background")},Blue:{Text:It("Validation.Blue.Text"),Icon:It("Validation.Blue.Icon"),Border:It("Validation.Blue.Border"),Background:It("Validation.Blue.Background")}},Shadow:{Accent:It("Shadow.Accent"),Red:It("Shadow.Red"),Elevation:It("Shadow.Elevation")}},zt=e=>`@media screen and (max-width: ${e}px)`,Nt=y.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$minWidthBeforeWrap)return v`
                ${zt(e.$minWidthBeforeWrap)} {
                    /* Parent container need to provide space */
                    flex-wrap: wrap;

                    [data-id="range-container-elem1-container"],
                    [data-id="range-container-elem2-container"] {
                        // 100% - Icon size - 2padding
                        max-width: calc(100% - 1.125rem - 1rem);
                        flex: unset;
                    }

                    [data-id="range-container-elem2-container"] {
                        margin-top: 0.5rem;
                    }
                }
            `}}
`,jt=y.div`
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
`,Rt=y(S)`
    color: ${Tt.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,Lt=y.div`
    position: absolute;
    background: ${e=>e.$error?Tt.Validation.Red.Border(e):Tt.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return v`
                    opacity: 1;
                `;case"end":return v`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return v`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$minWidthBeforeWrap)return v`
                ${zt(e.$minWidthBeforeWrap)} {
                    display: none;
                }
            `}}
`,Vt=({children:e,currentActive:r,error:i,className:o,minWidthBeforeWrap:a})=>{const[s,l]=e;return n(Nt,{className:o,$minWidthBeforeWrap:a,children:[t(jt,{"data-id":"range-container-elem1-container",children:s}),t(Rt,{}),t(jt,{"data-id":"range-container-elem2-container",children:l}),t(Lt,{"data-id":"range-container-indicator",$position:r,$error:i,$minWidthBeforeWrap:a})]})};var Wt,Ut={};Object.defineProperty(Ut,"__esModule",{value:!0});var Yt=e;const qt=e=>Yt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Yt.jsx("path",{d:"M2.62611 5.81312C2.84811 5.59112 3.10478 5.48012 3.39611 5.48012C3.68811 5.48012 3.94511 5.59112 4.16711 5.81312L10.1881 11.8341L16.2301 5.79212C16.4381 5.58412 16.6881 5.48012 16.9801 5.48012C17.2714 5.48012 17.5281 5.59112 17.7501 5.81312C17.9588 6.02179 18.0631 6.27545 18.0631 6.57412C18.0631 6.87279 17.9588 7.12612 17.7501 7.33412L10.8131 14.2721C10.7158 14.3688 10.6151 14.4381 10.5111 14.4801C10.4071 14.5215 10.2994 14.5421 10.1881 14.5421C10.0768 14.5421 9.96911 14.5215 9.86511 14.4801C9.76111 14.4381 9.66044 14.3688 9.56311 14.2721L2.60511 7.31312C2.38244 7.09112 2.27811 6.83779 2.29211 6.55312C2.30611 6.26845 2.41744 6.02179 2.62611 5.81312Z",fill:"currentColor"})});qt.displayName="ChevronDownIcon",Wt=Ut.ChevronDownIcon=qt;var Zt,Qt={};Object.defineProperty(Qt,"__esModule",{value:!0});var Gt=e;const Xt=e=>Gt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Gt.jsx("path",{d:"M17.7279 14.2091C17.5059 14.4311 17.2492 14.5421 16.9579 14.5421C16.6659 14.5421 16.4089 14.4311 16.1869 14.2091L10.1659 8.18812L4.12389 14.2301C3.91589 14.4381 3.66589 14.5421 3.37389 14.5421C3.08256 14.5421 2.82589 14.4311 2.60389 14.2091C2.39523 14.0005 2.29089 13.7468 2.29089 13.4481C2.29089 13.1495 2.39523 12.8961 2.60389 12.6881L9.54089 5.75012C9.63823 5.65346 9.73889 5.58412 9.84289 5.54212C9.94689 5.50079 10.0546 5.48012 10.1659 5.48012C10.2772 5.48012 10.3849 5.50079 10.4889 5.54212C10.5929 5.58412 10.6936 5.65346 10.7909 5.75012L17.7489 12.7091C17.9716 12.9311 18.0759 13.1845 18.0619 13.4691C18.0479 13.7538 17.9366 14.0005 17.7279 14.2091Z",fill:"currentColor"})});Xt.displayName="ChevronUpIcon",Zt=Qt.ChevronUpIcon=Xt;var Jt=function(e,t){return Jt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Jt(e,t)};var Kt=function(){return Kt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Kt.apply(this,arguments)};var en="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var tn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},nn="object"==typeof en&&en&&en.Object===Object&&en,rn="object"==typeof self&&self&&self.Object===Object&&self,on=nn||rn||Function("return this")(),an=on,sn=function(){return an.Date.now()},ln=/\s/;var cn=function(e){for(var t=e.length;t--&&ln.test(e.charAt(t)););return t},un=/^\s+/;var dn=function(e){return e?e.slice(0,cn(e)+1).replace(un,""):e},hn=on.Symbol,pn=hn,fn=Object.prototype,gn=fn.hasOwnProperty,mn=fn.toString,yn=pn?pn.toStringTag:void 0;var vn=function(e){var t=gn.call(e,yn),n=e[yn];try{e[yn]=void 0;var r=!0}catch(e){}var i=mn.call(e);return r&&(t?e[yn]=n:delete e[yn]),i},bn=Object.prototype.toString;var wn=vn,$n=function(e){return bn.call(e)},Sn=hn?hn.toStringTag:void 0;var xn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Sn&&Sn in Object(e)?wn(e):$n(e)},Cn=function(e){return null!=e&&"object"==typeof e};var _n=dn,Fn=tn,Mn=function(e){return"symbol"==typeof e||Cn(e)&&"[object Symbol]"==xn(e)},kn=/^[-+]0x[0-9a-f]+$/i,Dn=/^0b[01]+$/i,On=/^0o[0-7]+$/i,Bn=parseInt;var Hn=tn,An=sn,En=function(e){if("number"==typeof e)return e;if(Mn(e))return NaN;if(Fn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Fn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=_n(e);var n=Dn.test(e);return n||On.test(e)?Bn(e.slice(2),n?2:8):kn.test(e)?NaN:+e},Pn=Math.max,In=Math.min;var Tn=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function f(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function g(){var e=An();if(f(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?In(n,o-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?p(e):(r=i=void 0,a)}function y(){var e=An(),n=f(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?p(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),p(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=En(t)||0,Hn(n)&&(u=!!n.leading,o=(d="maxWait"in n)?Pn(En(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:m(An())},y},zn=Tn,Nn=tn;var jn=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Nn(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),zn(e,t,{leading:r,maxWait:t,trailing:i})},Rn=function(e,t,n,r){switch(t){case"debounce":return Tn(e,n,r);case"throttle":return jn(e,n,r);default:return e}},Ln=function(e){return"function"==typeof e},Vn=function(){return"undefined"==typeof window},Wn=function(e){return e instanceof Element||e instanceof HTMLDocument},Un=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&Ln(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Vn()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Vn())return null;if(t)return document.querySelector(t);if(r&&Wn(r))return r;if(n.targetRef&&Wn(n.targetRef.current))return n.targetRef.current;var i=w(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=Un(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!Vn()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Ln(t)?"renderProp":Ln(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,Vn()||(n.resizeHandler=Rn(n.createResizeHandler,i,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Jt(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Vn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,a=t.nodeType,s=void 0===a?"div":a,l=this.state,c={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(c);case"childFunction":return(e=i)(c);case"child":if((e=i).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(c,["targetRef"]);return o(e,u)}return o(e,c);case"childArray":return(e=i).map((function(e){return!!e&&o(e,c)}));default:return r.createElement(s,null)}}}(u);var Yn=Vn()?d:h;let qn=cr();const Zn=e=>or(e,qn);let Qn=cr();Zn.write=e=>or(e,Qn);let Gn=cr();Zn.onStart=e=>or(e,Gn);let Xn=cr();Zn.onFrame=e=>or(e,Xn);let Jn=cr();Zn.onFinish=e=>or(e,Jn);let Kn=[];Zn.setTimeout=(e,t)=>{let n=Zn.now()+t,r=()=>{let e=Kn.findIndex((e=>e.cancel==r));~e&&Kn.splice(e,1),rr-=~e?1:0},i={time:n,handler:e,cancel:r};return Kn.splice(er(n),0,i),rr+=1,ar(),i};let er=e=>~(~Kn.findIndex((t=>t.time>e))||~Kn.length);Zn.cancel=e=>{Gn.delete(e),Xn.delete(e),Jn.delete(e),qn.delete(e),Qn.delete(e)},Zn.sync=e=>{ir=!0,Zn.batchedUpdates(e),ir=!1},Zn.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Zn.onStart(n)}return r.handler=e,r.cancel=()=>{Gn.delete(n),t=null},r};let tr="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Zn.use=e=>tr=e,Zn.now="undefined"!=typeof performance?()=>performance.now():Date.now,Zn.batchedUpdates=e=>e(),Zn.catch=console.error,Zn.frameLoop="always",Zn.advance=()=>{"demand"!==Zn.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):lr()};let nr=-1,rr=0,ir=!1;function or(e,t){ir?(t.delete(e),e(0)):(t.add(e),ar())}function ar(){nr<0&&(nr=0,"demand"!==Zn.frameLoop&&tr(sr))}function sr(){~nr&&(tr(sr),Zn.batchedUpdates(lr))}function lr(){let e=nr;nr=Zn.now();let t=er(nr);t&&(ur(Kn.splice(0,t),(e=>e.handler())),rr-=t),rr?(Gn.flush(),qn.flush(e?Math.min(64,nr-e):16.667),Xn.flush(),Qn.flush(),Jn.flush()):nr=-1}function cr(){let e=new Set,t=e;return{add(n){rr+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(rr-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,rr-=t.size,ur(t,(t=>t(n)&&e.add(t))),rr+=e.size,t=e)}}}function ur(e,t){e.forEach((e=>{try{t(e)}catch(e){Zn.catch(e)}}))}function dr(){}const hr={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function pr(e,t){if(hr.arr(e)){if(!hr.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const fr=(e,t)=>e.forEach(t);function gr(e,t,n){if(hr.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const mr=e=>hr.und(e)?[]:hr.arr(e)?e:[e];function yr(e,t){if(e.size){const n=Array.from(e);e.clear(),fr(n,t)}}const vr=(e,...t)=>yr(e,(e=>e(...t))),br=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let wr,$r,Sr=null,xr=!1,Cr=dr;var _r=Object.freeze({__proto__:null,get createStringInterpolator(){return wr},get to(){return $r},get colors(){return Sr},get skipAnimation(){return xr},get willAdvance(){return Cr},assign:e=>{e.to&&($r=e.to),e.now&&(Zn.now=e.now),void 0!==e.colors&&(Sr=e.colors),null!=e.skipAnimation&&(xr=e.skipAnimation),e.createStringInterpolator&&(wr=e.createStringInterpolator),e.requestAnimationFrame&&Zn.use(e.requestAnimationFrame),e.batchedUpdates&&(Zn.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Cr=e.willAdvance),e.frameLoop&&(Zn.frameLoop=e.frameLoop)}});const Fr=new Set;let Mr=[],kr=[],Dr=0;const Or={get idle(){return!Fr.size&&!Mr.length},start(e){Dr>e.priority?(Fr.add(e),Zn.onStart(Br)):(Hr(e),Zn(Er))},advance:Er,sort(e){if(Dr)Zn.onFrame((()=>Or.sort(e)));else{const t=Mr.indexOf(e);~t&&(Mr.splice(t,1),Ar(e))}},clear(){Mr=[],Fr.clear()}};function Br(){Fr.forEach(Hr),Fr.clear(),Zn(Er)}function Hr(e){Mr.includes(e)||Ar(e)}function Ar(e){Mr.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Mr,(t=>t.priority>e.priority)),0,e)}function Er(e){const t=kr;for(let n=0;n<Mr.length;n++){const r=Mr[n];Dr=r.priority,r.idle||(Cr(r),r.advance(e),r.idle||t.push(r))}return Dr=0,kr=Mr,kr.length=0,Mr=t,Mr.length>0}const Pr="[-+]?\\d*\\.?\\d+",Ir=Pr+"%";function Tr(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const zr=new RegExp("rgb"+Tr(Pr,Pr,Pr)),Nr=new RegExp("rgba"+Tr(Pr,Pr,Pr,Pr)),jr=new RegExp("hsl"+Tr(Pr,Ir,Ir)),Rr=new RegExp("hsla"+Tr(Pr,Ir,Ir,Pr)),Lr=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Vr=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Wr=/^#([0-9a-fA-F]{6})$/,Ur=/^#([0-9a-fA-F]{8})$/;function Yr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function qr(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=Yr(i,r,e+1/3),a=Yr(i,r,e),s=Yr(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Zr(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Qr(e){return(parseFloat(e)%360+360)%360/360}function Gr(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Xr(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Jr(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Wr.exec(e))?parseInt(t[1]+"ff",16)>>>0:Sr&&void 0!==Sr[e]?Sr[e]:(t=zr.exec(e))?(Zr(t[1])<<24|Zr(t[2])<<16|Zr(t[3])<<8|255)>>>0:(t=Nr.exec(e))?(Zr(t[1])<<24|Zr(t[2])<<16|Zr(t[3])<<8|Gr(t[4]))>>>0:(t=Lr.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ur.exec(e))?parseInt(t[1],16)>>>0:(t=Vr.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=jr.exec(e))?(255|qr(Qr(t[1]),Xr(t[2]),Xr(t[3])))>>>0:(t=Rr.exec(e))?(qr(Qr(t[1]),Xr(t[2]),Xr(t[3]))|Gr(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Kr=(e,t,n)=>{if(hr.fun(e))return e;if(hr.arr(e))return Kr({range:e,output:t,extrapolate:n});if(hr.str(e.output[0]))return wr(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const ei=1.70158,ti=1.525*ei,ni=ei+1,ri=2*Math.PI/3,ii=2*Math.PI/4.5,oi=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},ai={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ni*e*e*e-ei*e*e,easeOutBack:e=>1+ni*Math.pow(e-1,3)+ei*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ti)/2:(Math.pow(2*e-2,2)*((ti+1)*(2*e-2)+ti)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*ri),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*ri)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ii)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ii)/2+1,easeInBounce:e=>1-oi(1-e),easeOutBounce:oi,easeInOutBounce:e=>e<.5?(1-oi(1-2*e))/2:(1+oi(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e;return((e,t,n)=>Math.min(Math.max(n,e),t))(0,1,("end"===t?Math.floor(r):Math.ceil(r))/e)}};function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},si.apply(this,arguments)}const li=Symbol.for("FluidValue.get"),ci=Symbol.for("FluidValue.observers"),ui=e=>Boolean(e&&e[li]),di=e=>e&&e[li]?e[li]():e,hi=e=>e[ci]||null;function pi(e,t){let n=e[ci];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class fi{constructor(e){if(this[li]=void 0,this[ci]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");gi(this,e)}}const gi=(e,t)=>vi(e,li,t);function mi(e,t){if(e[li]){let n=e[ci];n||vi(e,ci,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function yi(e,t){let n=e[ci];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[ci]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const vi=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),bi=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,wi=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,$i=new RegExp(`(${bi.source})(%|[a-z]+)`,"i"),Si=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,xi=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ci=e=>{const[t,n]=_i(e);if(!t||br())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&xi.test(n)?Ci(n):n||e},_i=e=>{const t=xi.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Fi;const Mi=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,ki=e=>{Fi||(Fi=Sr?new RegExp(`(${Object.keys(Sr).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>di(e).replace(xi,Ci).replace(wi,Jr).replace(Fi,Jr))),n=t.map((e=>e.match(bi).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Kr(si({},e,{output:t}))));return e=>{var n;const i=!$i.test(t[0])&&(null==(n=t.find((e=>$i.test(e))))?void 0:n.replace(bi,""));let o=0;return t[0].replace(bi,(()=>`${r[o++](e)}${i||""}`)).replace(Si,Mi)}},Di="react-spring: ",Oi=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Di}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Bi=Oi(console.warn);const Hi=Oi(console.warn);function Ai(e){return hr.str(e)&&("#"==e[0]||/\d/.test(e)||!br()&&xi.test(e)||e in(Sr||{}))}const Ei=br()?d:h,Pi=()=>{const e=a(!1);return Ei((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Ii(){const e=s()[1],t=Pi();return()=>{t.current&&e(Math.random())}}const Ti=e=>d(e,zi),zi=[];function Ni(e){const t=a();return d((()=>{t.current=e})),t.current}const ji=Symbol.for("Animated:node"),Ri=e=>e&&e[ji],Li=(e,t)=>{return n=e,r=ji,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Vi=e=>e&&e[ji]&&e[ji].getPayload();class Wi{constructor(){this.payload=void 0,Li(this,this)}getPayload(){return this.payload||[]}}class Ui extends Wi{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,hr.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Ui(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return hr.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,hr.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class Yi extends Ui{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Kr({output:[e,e]})}static create(e){return new Yi(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(hr.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Kr({output:[this.getValue(),e]})),this._value=0,super.reset()}}const qi={dependencies:null};class Zi extends Wi{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return gr(this.source,((n,r)=>{var i;(i=n)&&i[ji]===i?t[r]=n.getValue(e):ui(n)?t[r]=di(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&fr(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return gr(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){qi.dependencies&&ui(e)&&qi.dependencies.add(e);const t=Vi(e);t&&fr(t,(e=>this.add(e)))}}class Qi extends Zi{constructor(e){super(e)}static create(e){return new Qi(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Gi)),!0)}}function Gi(e){return(Ai(e)?Yi:Ui).create(e)}function Xi(e){const t=Ri(e);return t?t.constructor:hr.arr(e)?Qi:Ai(e)?Yi:Ui}function Ji(){return Ji=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ji.apply(this,arguments)}const Ki=(e,t)=>{const n=!hr.fun(e)||e.prototype&&e.prototype.isReactComponent;return p(((i,o)=>{const s=a(null),l=n&&f((e=>{s.current=function(e,t){e&&(hr.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[c,u]=function(e,t){const n=new Set;qi.dependencies=n,e.style&&(e=Ji({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Zi(e),qi.dependencies=null,[e,n]}(i,t),h=Ii(),p=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},g=new eo(p,u),m=a();Ei((()=>(m.current=g,fr(u,(e=>mi(e,g))),()=>{m.current&&(fr(m.current.deps,(e=>yi(e,m.current))),Zn.cancel(m.current.update))}))),d(p,[]),Ti((()=>()=>{const e=m.current;fr(e.deps,(t=>yi(t,e)))}));const y=t.getComponentProps(c.getValue());return r.createElement(e,Ji({},y,{ref:l}))}))};class eo{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Zn.write(this.update)}}const to=Symbol.for("AnimatedComponent"),no=e=>hr.str(e)?e:e&&hr.str(e.displayName)?e.displayName:hr.fun(e)&&e.name||null;function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}function io(e,...t){return hr.fun(e)?e(...t):e}const oo=(e,t)=>!0===e||!!(t&&e&&(hr.fun(e)?e(t):mr(e).includes(t))),ao=(e,t)=>hr.obj(e)?t&&e[t]:e,so=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,lo=e=>e,co=(e,t=lo)=>{let n=uo;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);hr.und(n)||(r[i]=n)}return r},uo=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ho={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function po(e){const t=function(e){const t={};let n=0;if(gr(e,((e,r)=>{ho[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return gr(e,((e,r)=>r in t||(n[r]=e))),n}return ro({},e)}function fo(e){return e=di(e),hr.arr(e)?e.map(fo):Ai(e)?_r.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function go(e){return hr.fun(e)||hr.arr(e)&&hr.obj(e[0])}const mo=ro({},{tension:170,friction:26},{mass:1,damping:1,easing:ai.linear,clamp:!1});class yo{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,mo)}}function vo(e,t){if(hr.und(t.decay)){const n=!hr.und(t.tension)||!hr.und(t.friction);!n&&hr.und(t.frequency)&&hr.und(t.damping)&&hr.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const bo=[];class wo{constructor(){this.changed=!1,this.values=bo,this.toValues=null,this.fromValues=bo,this.to=void 0,this.from=void 0,this.config=new yo,this.immediate=!1}}function $o(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=oo(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)f();else{hr.und(n.pause)||(i.paused=oo(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||oo(e,t)),c=io(n.delay||0,t),e?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),c=u.time-Zn.now()}function p(){c>0&&!_r.skipAnimation?(i.delayed=!0,u=Zn.setTimeout(f,c),i.pauseQueue.add(h),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(ro({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const So=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?_o(e.get()):t.every((e=>e.noop))?xo(e.get()):Co(e.get(),t.every((e=>e.finished))),xo=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Co=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),_o=e=>({value:e,cancelled:!0,finished:!1});function Fo(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=co(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&_o(r)||i!==n.asyncId&&Co(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new ko,a=new Do;return(async()=>{if(_r.skipAnimation)throw Mo(n),a.result=Co(r,!1),d(a),a;p(o);const s=hr.obj(e)?ro({},e):ro({},t,{to:e});s.parentId=i,gr(c,((e,t)=>{hr.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(_r.skipAnimation)return Mo(n),Co(r,!1);try{let t;t=hr.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=Co(r.get(),!0,!1)}catch(e){if(e instanceof ko)g=e.result;else{if(!(e instanceof Do))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return hr.fun(a)&&Zn.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Mo(e,t){yr(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class ko extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Do extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Oo=e=>e instanceof Ho;let Bo=1;class Ho extends fi{constructor(...e){super(...e),this.id=Bo++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Ri(this);return e&&e.getValue()}to(...e){return _r.to(this,e)}interpolate(...e){return Bi(`${Di}The "interpolate" function is deprecated in v9 (use "to" instead)`),_r.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){pi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Or.sort(this),pi(this,{type:"priority",parent:this,priority:e})}}const Ao=Symbol.for("SpringPhase"),Eo=e=>(1&e[Ao])>0,Po=e=>(2&e[Ao])>0,Io=e=>(4&e[Ao])>0,To=(e,t)=>t?e[Ao]|=3:e[Ao]&=-3,zo=(e,t)=>t?e[Ao]|=4:e[Ao]&=-5;class No extends Ho{constructor(e,t){if(super(),this.key=void 0,this.animation=new wo,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!hr.und(e)||!hr.und(t)){const n=hr.obj(e)?ro({},e):ro({},t,{from:e});hr.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Po(this)||this._state.asyncTo)||Io(this)}get goal(){return di(this.animation.to)}get velocity(){const e=Ri(this);return e instanceof Ui?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Eo(this)}get isAnimating(){return Po(this)}get isPaused(){return Io(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=Vi(r.to);!a&&ui(r.to)&&(o=mr(di(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Yi?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=hr.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(hr.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!hr.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=Ri(this),l=s.getValue();if(t){const e=di(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Zn.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Po(this)){const{to:e,config:t}=this.animation;Zn.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return hr.und(e)?(n=this.queue||[],this.queue=[]):n=[hr.obj(e)?e:ro({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>So(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Mo(this._state,e&&this._lastCallId),Zn.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=hr.obj(n)?n[t]:n,(null==n||go(n))&&(n=void 0),r=hr.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Eo(this)||(e.reverse&&([n,r]=[r,n]),r=di(r),hr.und(r)?Ri(this)||this._set(n):this._set(r)),i}_update(e,t){let n=ro({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,co(n,((e,t)=>/^on/.test(t)?ao(e,r):e))),Yo(this,n,"onProps"),qo(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return $o(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{Io(this)||(zo(this,!0),vr(a.pauseQueue),qo(this,"onPause",Co(this,jo(this,this.animation.to)),this))},resume:()=>{Io(this)&&(zo(this,!1),Po(this)&&this._resume(),vr(a.resumeQueue),qo(this,"onResume",Co(this,jo(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=Ro(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(_o(this));const r=!hr.und(e.to),i=!hr.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(_o(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!hr.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!pr(d,c);h&&(s.from=d),d=di(d);const p=!pr(u,l);p&&this._focus(u);const f=go(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(vo(n=ro({},n),t),t=ro({},n,t)),vo(e,t),Object.assign(e,t);for(const t in mo)null==e[t]&&(e[t]=mo[t]);let{mass:r,frequency:i,damping:o}=e;hr.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,io(t.config,o),t.config!==a.config?io(a.config,o):void 0);let v=Ri(this);if(!v||hr.und(u))return n(Co(this,!0));const b=hr.und(t.reset)?i&&!t.default:!hr.und(d)&&oo(t.reset,o),w=b?d:this.get(),$=fo(u),S=hr.num($)||hr.arr($)||Ai($),x=!f&&(!S||oo(a.immediate||t.immediate,o));if(p){const e=Xi(u);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const C=v.constructor;let _=ui(u),F=!1;if(!_){const e=b||!Eo(this)&&h;(p||e)&&(F=pr(fo(w),$),_=!F),(pr(s.immediate,x)||x)&&pr(g.decay,m)&&pr(g.velocity,y)||(_=!0)}if(F&&Po(this)&&(s.changed&&!b?_=!0:_||this._stop(l)),!f&&((_||ui(l))&&(s.values=v.getPayload(),s.toValues=ui(u)?null:C==Yi?[1]:mr($)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),_)){const{onRest:e}=s;fr(Uo,(e=>Yo(this,t,e)));const r=Co(this,jo(this,l));vr(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Zn.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?io(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),f?n(Fo(t.to,t,this._state,this)):_?this._start():Po(this)&&!p?this._pendingCalls.add(n):n(xo(w))}_focus(e){const t=this.animation;e!==t.to&&(hi(this)&&this._detach(),t.to=e,hi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;ui(t)&&(mi(t,this),Oo(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;ui(e)&&yi(e,this)}_set(e,t=!0){const n=di(e);if(!hr.und(n)){const e=Ri(this);if(!e||!pr(n,e.getValue())){const r=Xi(n);e&&e.constructor==r?e.setValue(n):Li(this,r.create(n)),e&&Zn.batchedUpdates((()=>{this._onChange(n,t)}))}}return Ri(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,qo(this,"onStart",Co(this,jo(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),io(this.animation.onChange,e,this)),io(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Ri(this).reset(di(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Po(this)||(To(this,!0),Io(this)||this._resume())}_resume(){_r.skipAnimation?this.finish():Or.start(this)}_stop(e,t){if(Po(this)){To(this,!1);const n=this.animation;fr(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),pi(this,{type:"idle",parent:this});const r=t?_o(this.get()):Co(this.get(),jo(this,null!=e?e:n.to));vr(this._pendingCalls,r),n.changed&&(n.changed=!1,qo(this,"onRest",r,this))}}}function jo(e,t){const n=fo(t);return pr(fo(e.get()),n)}function Ro(e,t=e.loop,n=e.to){let r=io(t);if(r){const i=!0!==r&&po(r),o=(i||e).reverse,a=!i||i.reset;return Lo(ro({},e,{loop:t,default:!1,pause:void 0,to:!o||go(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function Lo(e){const{to:t,from:n}=e=po(e),r=new Set;return hr.obj(t)&&Wo(t,r),hr.obj(n)&&Wo(n,r),e.keys=r.size?Array.from(r):null,e}function Vo(e){const t=Lo(e);return hr.und(t.default)&&(t.default=co(t)),t}function Wo(e,t){gr(e,((e,n)=>null!=e&&t.add(n)))}const Uo=["onStart","onRest","onChange","onPause","onResume"];function Yo(e,t,n){e.animation[n]=t[n]!==so(t,n)?ao(t[n],e.key):void 0}function qo(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const Zo=["onStart","onChange","onRest"];let Qo=1;class Go{constructor(e,t){this.id=Qo++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(ro({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];hr.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Lo(e)),this}start(e){let{queue:t}=this;return e?t=mr(e).map(Lo):this.queue=[],this._flush?this._flush(this,t):(ra(this,t),Xo(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;fr(mr(t),(t=>n[t].stop(!!e)))}else Mo(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(hr.und(e))this.start({pause:!0});else{const t=this.springs;fr(mr(e),(e=>t[e].pause()))}return this}resume(e){if(hr.und(e))this.start({pause:!1});else{const t=this.springs;fr(mr(e),(e=>t[e].resume()))}return this}each(e){gr(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,yr(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&yr(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,yr(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Zn.onFrame(this._onFrame)}}function Xo(e,t){return Promise.all(t.map((t=>Jo(e,t)))).then((t=>So(e,t)))}async function Jo(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=hr.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=hr.arr(i)||hr.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):fr(Zo,(n=>{const r=t[n];if(hr.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,vr(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===so(t,"cancel");(u||p&&d.asyncId)&&h.push($o(++e._lastAsyncId,{props:t,state:d,actions:{pause:dr,resume:dr,start(t,n){p?(Mo(d,e._lastAsyncId),n(_o(e))):(t.onRest=s,n(Fo(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=So(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=Ro(t,a,i);if(n)return ra(e,[n]),Jo(e,n,!0)}return l&&Zn.batchedUpdates((()=>l(f,e,e.item))),f}function Ko(e,t){const n=ro({},e.springs);return t&&fr(mr(t),(e=>{hr.und(e.keys)&&(e=Lo(e)),hr.obj(e.to)||(e=ro({},e,{to:void 0})),na(n,e,(e=>ta(e)))})),ea(e,n),n}function ea(e,t){gr(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,mi(t,e))}))}function ta(e,t){const n=new No;return n.key=e,t&&mi(n,t),n}function na(e,t,n){t.keys&&fr(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function ra(e,t){fr(t,(t=>{na(e.springs,t,(t=>ta(t,e)))}))}const ia=["children"],oa=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,ia);const i=g(aa),o=n.pause||!!i.pause,l=n.immediate||!!i.immediate;n=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=a(),i=r.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=n;return d((()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)}),[o]),o.result}((()=>({pause:o,immediate:l})),[o,l]);const{Provider:c}=aa;return r.createElement(c,{value:n},t)},aa=(sa=oa,la={},Object.assign(sa,r.createContext(la)),sa.Provider._context=sa,sa.Consumer._context=sa,sa);var sa,la;oa.Provider=aa.Provider,oa.Consumer=aa.Consumer;const ca=()=>{const e=[],t=function(t){Hi(`${Di}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return fr(e,((e,i)=>{if(hr.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return fr(e,(e=>e.pause(...arguments))),this},t.resume=function(){return fr(e,(e=>e.resume(...arguments))),this},t.set=function(t){fr(e,(e=>e.set(t)))},t.start=function(t){const n=[];return fr(e,((e,r)=>{if(hr.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return fr(e,(e=>e.stop(...arguments))),this},t.update=function(t){return fr(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return hr.fun(e)?e(n,t):e};return t._getProps=n,t};function ua(e,t){const n=hr.fun(e),[[r],i]=function(e,t,n){const r=hr.fun(t)&&t;r&&!n&&(n=[]);const i=m((()=>r||3==arguments.length?ca():void 0),[]),o=a(0),s=Ii(),l=m((()=>({ctrls:[],queue:[],flush(e,t){const n=Ko(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Xo(e,t):new Promise((r=>{ea(e,n),l.queue.push((()=>{r(Xo(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),u=[],d=Ni(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new Go(null,l.flush)),n=r?r(i,e):t[i];n&&(u[i]=Vo(n))}}m((()=>{fr(c.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),m((()=>{h(0,Math.min(d,e))}),n);const p=c.current.map(((e,t)=>Ko(e,u[t]))),f=g(oa),y=Ni(f),v=f!==y&&function(e){for(const t in e)return!0;return!1}(f);Ei((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],fr(e,(e=>e()))),fr(c.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:f});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Ti((()=>()=>{fr(l.ctrls,(e=>e.stop(!0)))}));const b=p.map((e=>ro({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let da;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(da||(da={}));class ha extends Ho{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Kr(...t);const n=this._get(),r=Xi(n);Li(this,r.create(n))}advance(e){const t=this._get();pr(t,this.get())||(Ri(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&fa(this._active)&&ga(this)}_get(){const e=hr.arr(this.source)?this.source.map(di):mr(di(this.source));return this.calc(...e)}_start(){this.idle&&!fa(this._active)&&(this.idle=!1,fr(Vi(this),(e=>{e.done=!1})),_r.skipAnimation?(Zn.batchedUpdates((()=>this.advance())),ga(this)):Or.start(this))}_attach(){let e=1;fr(mr(this.source),(t=>{ui(t)&&mi(t,this),Oo(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){fr(mr(this.source),(e=>{ui(e)&&yi(e,this)})),this._active.clear(),ga(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=mr(this.source).reduce(((e,t)=>Math.max(e,(Oo(t)?t.priority:0)+1)),0))}}function pa(e){return!1!==e.idle}function fa(e){return!e.size||Array.from(e).every(pa)}function ga(e){e.idle||(e.idle=!0,fr(Vi(e),(e=>{e.done=!0})),pi(e,{type:"idle",parent:e}))}function ma(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}_r.assign({createStringInterpolator:ki,to:(e,t)=>new ha(e,t)});const ya=["style","children","scrollTop","scrollLeft","viewBox"],va=/^--/;function ba(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||va.test(e)||$a.hasOwnProperty(e)&&$a[e]?(""+t).trim():t+"px"}const wa={};let $a={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Sa=["Webkit","Ms","Moz","O"];$a=Object.keys($a).reduce(((e,t)=>(Sa.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),$a);const xa=["x","y","z"],Ca=/^(matrix|translate|scale|rotate|skew)/,_a=/^(translate)/,Fa=/^(rotate|skew)/,Ma=(e,t)=>hr.num(e)&&0!==e?e+t:e,ka=(e,t)=>hr.arr(e)?e.every((e=>ka(e,t))):hr.num(e)?e===t:parseFloat(e)===t;class Da extends Zi{constructor(e){let{x:t,y:n,z:r}=e,i=ma(e,xa);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Ma(e,"px"))).join(",")})`,ka(e,0)]))),gr(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Ca.test(t)){if(delete i[t],hr.und(e))return;const n=_a.test(t)?"px":Fa.test(t)?"deg":"";o.push(mr(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Ma(i,n)})`,ka(i,0)]:e=>[`${t}(${e.map((e=>Ma(e,n))).join(",")})`,ka(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new Oa(o,a)),super(i)}}class Oa extends fi{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return fr(this.inputs,((n,r)=>{const i=di(n[0]),[o,a]=this.transforms[r](hr.arr(i)?i:n.map(di));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&fr(this.inputs,(e=>fr(e,(e=>ui(e)&&mi(e,this)))))}observerRemoved(e){0==e&&fr(this.inputs,(e=>fr(e,(e=>ui(e)&&yi(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),pi(this,e)}}const Ba=["scrollTop","scrollLeft"];_r.assign({batchedUpdates:$,createStringInterpolator:ki,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Ha=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Zi(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=no(e)||"Anonymous";return(e=hr.str(e)?o[e]||(o[e]=Ki(e,i)):e[to]||(e[to]=Ki(e,i))).displayName=`Animated(${t})`,e};return gr(e,((t,n)=>{hr.arr(e)&&(n=no(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=ma(r,ya),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:wa[t]||(wa[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=ba(t,i[t]);va.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Da(e),getComponentProps:e=>ma(e,Ba)}),Aa=Ha.animated;var Ea,Pa,Ia;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r)=>{let i=0;t>n&&(i=Math.floor((t-n)/8));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(Ea||(Ea={})),function(e){e.AM="AM",e.PM="PM"}(Pa||(Pa={})),function(e){e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:Pa.AM};if(!t)return n;try{if("24hr"===e){const r=Na(t,e);n.minute=Ea.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=Pa.AM,n.hour=0===i?"12":Ea.padValue(i.toString())):(n.period=Pa.PM,n.hour=12===i?i.toString():Ea.padValue((i-12).toString()))}else{const r=Na(t,e);n.hour=Ea.padValue(r.hour),n.minute=Ea.padValue(r.minute),n.period="am"===r.period.toLowerCase()?Pa.AM:Pa.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Ea.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return Ea.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Ea.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?Ea.padValue(r.toString()):13===r?Ea.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===Pa.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return Ea.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=Na(e,t),r=Ea.padValue(n.hour);let i=`${r}:${Ea.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}}}(Ia||(Ia={}));const Ta=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},za=e=>{const t=parseInt(e);return t>=0&&t<=59},Na=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),o=n[1].substring(2);if(!Ta(n[0],t)||!za(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!Ta(n[0],t)||!za(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},ja={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ra=e=>Object.keys(ja).reduce(((t,n)=>{const r=ja[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),La=Ra("max-width"),Va=(Ra("min-width"),y.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Wa=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ua=y.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Tt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Wa} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ya=y(Ua)`
    animation-delay: -0.45s;
`,qa=y(Ua)`
    animation-delay: -0.3s;
`,Za=y(Ua)`
    animation-delay: -0.15s;
`,Qa={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ga={collections:{base:{D1:{fontFamily:Qa.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Qa.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Qa.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Qa.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Qa.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Qa.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Qa.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Qa.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Qa.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Qa.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Qa.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Qa.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Qa.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Qa.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Xa=e=>t=>{const n=t.theme,r=At(Ga,n[Et.textStyleScheme]);return n.options&&n.options.textStyle?Ht(r,e,n.options.textStyle):Ht(r,e)},Ja={D1:{fontFamily:Xa("D1.fontFamily"),fontSize:Xa("D1.fontSize"),fontWeight:Xa("D1.fontWeight"),lineHeight:Xa("D1.lineHeight"),letterSpacing:Xa("D1.letterSpacing")},D2:{fontFamily:Xa("D2.fontFamily"),fontSize:Xa("D2.fontSize"),fontWeight:Xa("D2.fontWeight"),lineHeight:Xa("D2.lineHeight"),letterSpacing:Xa("D2.letterSpacing")},D3:{fontFamily:Xa("D3.fontFamily"),fontSize:Xa("D3.fontSize"),fontWeight:Xa("D3.fontWeight"),lineHeight:Xa("D3.lineHeight"),letterSpacing:Xa("D3.letterSpacing")},D4:{fontFamily:Xa("D4.fontFamily"),fontSize:Xa("D4.fontSize"),fontWeight:Xa("D4.fontWeight"),lineHeight:Xa("D4.lineHeight"),letterSpacing:Xa("D4.letterSpacing")},DBody:{fontFamily:Xa("DBody.fontFamily"),fontSize:Xa("DBody.fontSize"),fontWeight:Xa("DBody.fontWeight"),lineHeight:Xa("DBody.lineHeight"),letterSpacing:Xa("DBody.letterSpacing")},H1:{fontFamily:Xa("H1.fontFamily"),fontSize:Xa("H1.fontSize"),fontWeight:Xa("H1.fontWeight"),lineHeight:Xa("H1.lineHeight"),letterSpacing:Xa("H1.letterSpacing")},H2:{fontFamily:Xa("H2.fontFamily"),fontSize:Xa("H2.fontSize"),fontWeight:Xa("H2.fontWeight"),lineHeight:Xa("H2.lineHeight"),letterSpacing:Xa("H2.letterSpacing")},H3:{fontFamily:Xa("H3.fontFamily"),fontSize:Xa("H3.fontSize"),fontWeight:Xa("H3.fontWeight"),lineHeight:Xa("H3.lineHeight"),letterSpacing:Xa("H3.letterSpacing")},H4:{fontFamily:Xa("H4.fontFamily"),fontSize:Xa("H4.fontSize"),fontWeight:Xa("H4.fontWeight"),lineHeight:Xa("H4.lineHeight"),letterSpacing:Xa("H4.letterSpacing")},H5:{fontFamily:Xa("H5.fontFamily"),fontSize:Xa("H5.fontSize"),fontWeight:Xa("H5.fontWeight"),lineHeight:Xa("H5.lineHeight"),letterSpacing:Xa("H5.letterSpacing")},H6:{fontFamily:Xa("H6.fontFamily"),fontSize:Xa("H6.fontSize"),fontWeight:Xa("H6.fontWeight"),lineHeight:Xa("H6.lineHeight"),letterSpacing:Xa("H6.letterSpacing")},Body:{fontFamily:Xa("Body.fontFamily"),fontSize:Xa("Body.fontSize"),fontWeight:Xa("Body.fontWeight"),lineHeight:Xa("Body.lineHeight"),letterSpacing:Xa("Body.letterSpacing")},BodySmall:{fontFamily:Xa("BodySmall.fontFamily"),fontSize:Xa("BodySmall.fontSize"),fontWeight:Xa("BodySmall.fontWeight"),lineHeight:Xa("BodySmall.lineHeight"),letterSpacing:Xa("BodySmall.letterSpacing")},XSmall:{fontFamily:Xa("XSmall.fontFamily"),fontSize:Xa("XSmall.fontSize"),fontWeight:Xa("XSmall.fontWeight"),lineHeight:Xa("XSmall.lineHeight"),letterSpacing:Xa("XSmall.letterSpacing")}},Ka=e=>{switch(e){case 700:case"bold":return Qa.Bold;case 600:case"semibold":return Qa.Semibold;case 300:case"light":return Qa.Light;case 400:case"regular":return Qa.Regular;default:return""}},es=(e,t)=>n=>{const r=Ja[e].fontFamily(n),i=Ja[e].fontWeight(n);return Object.values(Qa).includes(r)?v`
                font-family: ${Ka(t)||Ka(i)||r};
                font-weight: normal !important;
            `:v`
            font-family: ${r};
            font-weight: ${(ts(t)||i)??"normal"};
        `},ts=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ns=es,rs=(e,t,n=!1)=>r=>{const i=Ja[e],o=i.fontSize(r);return v`
            ${es(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${v`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},is=(e=!1,t=!1)=>t?v`
            display: block;
        `:e?v`
            display: inline;
        `:v`
            display: block;
        `;var os,as={};Object.defineProperty(as,"__esModule",{value:!0});var ss=e;const ls=e=>ss.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:ss.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var cs;ls.displayName="ExternalIcon",os=as.ExternalIcon=ls,function(e){e.D1=y.h1`
        ${e=>v`
                ${rs("D1",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.D2=y.h1`
        ${e=>v`
                ${rs("D2",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.D3=y.h1`
        ${e=>v`
                ${rs("D3",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.D4=y.h1`
        ${e=>v`
                ${rs("D4",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.DBody=y.h1`
        ${e=>v`
                ${rs("DBody",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.H1=y.h1`
        ${e=>v`
                ${rs("H1",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.H2=y.h2`
        ${e=>v`
                ${rs("H2",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.H3=y.h3`
        ${e=>v`
                ${rs("H3",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.H4=y.h4`
        ${e=>v`
                ${rs("H4",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.H5=y.h5`
        ${e=>v`
                ${rs("H5",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.H6=y.h6`
        ${e=>v`
                ${rs("H6",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.Body=y.p`
        ${e=>v`
                ${rs("Body",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=y.p`
        ${e=>v`
                ${rs("BodySmall",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.XSmall=y.span`
        ${e=>v`
                ${rs("XSmall",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>hs({...e,textStyle:"Body"}),Small:e=>hs({...e,textStyle:"BodySmall"})}}(cs||(cs={}));const us=y.a`
    ${e=>v`
            ${rs(e.textStyle,e.weight)}
            color: ${Tt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Tt.Secondary};

                svg {
                    color: ${Tt.Secondary};
                }
            }
        `}
`,ds=y(os)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,hs=({external:e=!1,children:r,...i})=>n(us,{...i,children:[r,e&&t(ds,{})]});var ps;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(ps||(ps={}));const fs=y.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return v`
                    background-color: ${Tt.Neutral[8](e)};
                    border: 1px solid ${Tt.Primary(e)};

                    span {
                        color: ${Tt.Primary(e)};
                    }
                `;case"light":return v`
                    background-color: ${Tt.Neutral[8](e)};
                    border: 1px solid ${Tt.Neutral[5](e)};

                    span {
                        color: ${Tt.Primary(e)};
                    }
                `;case"disabled":return v`
                    background-color: ${Tt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Tt.Neutral[3](e)};
                    }
                `;case"link":return v`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Tt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Tt.Secondary};
                        }
                    }
                `;default:return v`
                    background-color: ${Tt.Primary(e)};
                    border: 1px solid transparent;

                    ${La.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Tt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?v`
                    height: 2.5rem;
                    span {
                        ${rs("H5","semibold")}
                    }

                    ${La.mobileS} {
                        height: auto;
                    }
                `:v`
                    height: 3rem;
                    span {
                        ${rs("H4","semibold")}
                    }

                    ${La.mobileS} {
                        height: auto;
                    }
                `}
`,gs=y((({color:e,className:r,size:i=18})=>n(Va,{className:r,$size:i,$color:e,children:[t(Ua,{id:"inner1",$size:i-2,$borderWidth:2}),t(Ya,{id:"inner2",$size:i-2,$borderWidth:2}),t(qa,{id:"inner3",$size:i-2,$borderWidth:2}),t(Za,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Tt.Primary(e);break;case"disabled":t=Tt.Neutral[3](e);break;default:t=Tt.Neutral[8](e)}return v`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ms={Default:i.forwardRef(((e,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",...l}=e,c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default"};return n(fs,{ref:r,"data-testid":l["data-testid"]||"button",disabled:o,...c,...l,children:[a&&t(gs,{...c}),t("span",{children:i})]})})),Small:i.forwardRef(((e,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",...l}=e,c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small"};return n(fs,{ref:r,"data-testid":l["data-testid"]||"button",disabled:o,...c,...l,children:[a&&t(gs,{...c,size:16}),t("span",{children:i})]})}))},ys=y.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${e=>{if(!e.$indicator)return v`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?v`
                        border-color: ${Tt.Validation.Red.Icon};
                        background: ${Tt.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Tt.Shadow.Red};
                        }
                    `:e.$disabled?v`
                        border-color: transparent;
                    `:v`
                        border-color: transparent;

                        :hover {
                            background: ${Tt.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?v`
                        background: ${Tt.Neutral[6]};
                        border-color: ${Tt.Neutral[5]};
                    `:e.$disabled&&e.$selected?v`
                        background: ${Tt.Neutral[6]};
                        border-color: ${Tt.Neutral[4]};
                    `:e.$error?v`
                        background: ${Tt.Neutral[8]};
                        border-color: ${Tt.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Tt.Shadow.Red};
                        }
                    `:e.$selected?v`
                        background: ${Tt.Accent.Light[5]};
                        border-color: ${Tt.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Tt.Shadow.Accent};
                        }
                    `:v`
                        background: ${Tt.Neutral[8]};
                        border-color: ${Tt.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Tt.Shadow.Accent};
                            border-color: ${Tt.Accent.Light[1]};
                        }
                    `}
`,vs=y.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,bs=y.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
`,ws=y.label`
    ${e=>e.$selected&&!e.$indicator?v`
                ${rs("H4","semibold")}
            `:v`
                ${rs("H4","regular")}
            `}

    color: ${Tt.Neutral[1]};

    ${e=>e.$disabled?v`
                color: ${Tt.Neutral[3]};
            `:e.$selected?v`
                color: ${Tt.Primary};
            `:void 0}
`,$s=y.div`
    ${rs("BodySmall","regular")}
    margin-top: 0.5rem;

    strong,
    b {
        ${ns("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?v`
                color: ${Tt.Neutral[3]};
            `:e.$selected?v`
                color: ${Tt.Primary};
            `:v`
                color: ${Tt.Neutral[1]};
            `}
`;var Ss,xs={};Object.defineProperty(xs,"__esModule",{value:!0});var Cs=e;const _s=e=>Cs.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Cs.jsx("path",{d:"M10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});_s.displayName="CircleIcon",Ss=xs.CircleIcon=_s;var Fs,Ms={};Object.defineProperty(Ms,"__esModule",{value:!0});var ks=e;const Ds=e=>ks.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:ks.jsx("path",{d:"M10 14C11.1113 14 12.0557 13.611 12.833 12.833C13.611 12.0557 14 11.1113 14 10C14 8.88867 13.611 7.94433 12.833 7.167C12.0557 6.389 11.1113 6 10 6C8.88867 6 7.94433 6.389 7.167 7.167C6.389 7.94433 6 8.88867 6 10C6 11.1113 6.389 12.0557 7.167 12.833C7.94433 13.611 8.88867 14 10 14ZM10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});Ds.displayName="CircleDotIcon",Fs=Ms.CircleDotIcon=Ds;var Os,Bs={};Object.defineProperty(Bs,"__esModule",{value:!0});var Hs=e;const As=e=>Hs.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Hs.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});As.displayName="CrossIcon",Os=Bs.CrossIcon=As;var Es,Ps={};Object.defineProperty(Ps,"__esModule",{value:!0});var Is=e;const Ts=e=>Is.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Is.jsx("path",{d:"M4.5 17C4.08333 17 3.72933 16.854 3.438 16.562C3.146 16.2707 3 15.9167 3 15.5V4.5C3 4.08333 3.146 3.72933 3.438 3.438C3.72933 3.146 4.08333 3 4.5 3H15.5C15.9167 3 16.2707 3.146 16.562 3.438C16.854 3.72933 17 4.08333 17 4.5V15.5C17 15.9167 16.854 16.2707 16.562 16.562C16.2707 16.854 15.9167 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5Z",fill:"currentColor"})});Ts.displayName="SquareIcon",Es=Ps.SquareIcon=Ts;var zs,Ns={};Object.defineProperty(Ns,"__esModule",{value:!0});var js=e;const Rs=e=>js.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:js.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H15.75C16.236 2.5 16.6493 2.67 16.99 3.01C17.33 3.35067 17.5 3.764 17.5 4.25V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM8.875 13.188C8.98633 13.188 9.094 13.167 9.198 13.125C9.302 13.083 9.40267 13.0137 9.5 12.917L14.125 8.292C14.2917 8.12533 14.375 7.924 14.375 7.688C14.375 7.45133 14.2917 7.24267 14.125 7.062C13.9443 6.89533 13.736 6.812 13.5 6.812C13.264 6.812 13.0627 6.89533 12.896 7.062L8.875 11.083L7.125 9.333C6.95833 9.16633 6.757 9.083 6.521 9.083C6.285 9.083 6.08367 9.16633 5.917 9.333C5.73633 9.51367 5.646 9.722 5.646 9.958C5.646 10.194 5.73633 10.3953 5.917 10.562L8.25 12.917C8.34733 13.0137 8.448 13.083 8.552 13.125C8.656 13.167 8.76367 13.188 8.875 13.188Z",fill:"currentColor"})});Rs.displayName="SquareTickFillIcon",zs=Ns.SquareTickFillIcon=Rs;var Ls,Vs={};Object.defineProperty(Vs,"__esModule",{value:!0});var Ws=e;const Us=e=>Ws.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Ws.jsx("path",{d:"M7.97897 14.646C7.86764 14.646 7.75997 14.625 7.65597 14.583C7.55197 14.5417 7.4513 14.4723 7.35397 14.375L3.83297 10.854C3.6663 10.6873 3.58664 10.4757 3.59397 10.219C3.60064 9.96167 3.6873 9.74967 3.85397 9.583C4.02064 9.41634 4.22897 9.333 4.47897 9.333C4.72897 9.333 4.9373 9.41634 5.10397 9.583L8.02097 12.5L14.917 5.604C15.0836 5.43734 15.2883 5.354 15.531 5.354C15.7743 5.354 15.9793 5.43734 16.146 5.604C16.3126 5.77067 16.396 5.97567 16.396 6.219C16.396 6.46167 16.3126 6.66634 16.146 6.833L8.60397 14.375C8.50664 14.4723 8.40597 14.5417 8.30197 14.583C8.19797 14.625 8.0903 14.646 7.97897 14.646Z",fill:"currentColor"})});Us.displayName="TickIcon",Ls=Vs.TickIcon=Us;const Ys=y.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?v`
                    color: ${Tt.Primary};
                `:v`
                    color: ${Tt.Neutral[4]};
                `};
    }
`,qs=({type:e,active:n=!1,disabled:r,className:i})=>{let o;switch(e){case"checkbox":o=t(n?zs:Es,{});break;case"radio":o=t(n?Fs:Ss,{});break;case"tick":o=t(Ls,{});break;case"cross":o=t(Os,{});break;default:o=null}return t(Ys,{className:i,$active:n,disabled:r,children:o})};var Zs={exports:{}};Zs.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],p=u&&u[1];a[l]=p?{regex:h,parser:p}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,p=new Date,f=a||(i||o?1:p.getDate()),g=i||p.getFullYear(),m=0;i&&!o||(m=o>0?o-1:p.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(g,m,f,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,f,y,v,b,w)):new Date(g,m,f,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var p=s.length,f=1;f<=p;f+=1){a[1]=s[f-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}f===p&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Qs=Zs.exports,Gs={exports:{}};Gs.exports=function(){var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(n,r,i){var o,a=function(e,n,r){void 0===r&&(r={});var i=new Date(e),o=function(e,n){void 0===n&&(n={});var r=n.timeZoneName||"short",i=e+"|"+r,o=t[i];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),t[i]=o),o}(n,r);return o.formatToParts(i)},s=function(t,n){for(var r=a(t,n),o=[],s=0;s<r.length;s+=1){var l=r[s],c=l.type,u=l.value,d=e[c];d>=0&&(o[d]=parseInt(u,10))}var h=o[3],p=24===h?0:h,f=o[0]+"-"+o[1]+"-"+o[2]+" "+p+":"+o[4]+":"+o[5]+":000",g=+t;return(i.utc(f).valueOf()-(g-=g%1e3))/6e4},l=r.prototype;l.tz=function(e,t){void 0===e&&(e=o);var n=this.utcOffset(),r=this.toDate(),a=r.toLocaleString("en-US",{timeZone:e}),s=Math.round((r-new Date(a))/1e3/60),l=i(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(r.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(n-c,"minute")}return l.$x.$timezone=e,l},l.offsetName=function(e){var t=this.$x.$timezone||i.tz.guess(),n=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var c=l.startOf;l.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return c.call(this,e,t);var n=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return c.call(n,e,t).tz(this.$x.$timezone,!0)},i.tz=function(e,t,n){var r=n&&t,a=n||t||o,l=s(+i(),a);if("string"!=typeof e)return i(e).tz(a);var c=function(e,t,n){var r=e-60*t*1e3,i=s(r,n);if(t===i)return[r,t];var o=s(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(i.utc(e,r).valueOf(),l,a),u=c[0],d=c[1],h=i(u).utcOffset(d);return h.$x.$timezone=a,h},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(e){o=e}}}();var Xs=Gs.exports,Js={exports:{}};Js.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $=function(e){return e instanceof _},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new _(n)},C=v;C.l=S,C.i=$,C.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(C.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(f);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return C},y.isValid=function(){return!(this.$d.toString()===p)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return C.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!C.u(t)||t,u=C.p(e),p=function(e,t){var i=C.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},f=function(e,t){return C.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?p(1,0):p(31,11);case c:return r?p(1,m):p(0,m+1);case l:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return p(r?y-w:y+(6-w),m);case s:case h:return f(v+"Hours",0);case a:return f(v+"Minutes",1);case o:return f(v+"Seconds",2);case i:return f(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=C.p(e),u="set"+(this.$u?"UTC":""),p=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],f=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(h,1);g.$d[p](f),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[C.p(e)]()},y.add=function(r,u){var h,p=this;r=Number(r);var f=C.p(u),g=function(e){var t=x(p);return C.w(t.date(t.date()+Math.round(e*r)),p)};if(f===c)return this.set(c,this.$M+r);if(f===d)return this.set(d,this.$y+r);if(f===s)return g(1);if(f===l)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[f]||1,y=this.$d.getTime()+r*m;return C.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=C.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return C.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:C.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:C.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:C.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:C.s(a,2,"0"),s:String(this.$s),ss:C.s(this.$s,2,"0"),SSS:C.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||f[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,p){var f,g=C.p(h),m=x(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=C.m(this,m);return b=(f={},f[d]=b/12,f[c]=b,f[u]=b/3,f[l]=(v-y)/6048e5,f[s]=(v-y)/864e5,f[a]=v/n,f[o]=v/t,f[i]=v/e,f)[g]||v,p?b:C.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return C.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),F=_.prototype;return x.prototype=F,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){F[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,_,x),e.$i=!0),x},x.locale=S,x.isDayjs=$,x.unix=function(e){return x(1e3*e)},x.en=w[b],x.Ls=w,x.p={},x}();var Ks=Js.exports,el={exports:{}};el.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var tl=el.exports,nl={exports:{}};nl.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var rl=nl.exports,il={exports:{}};il.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var ol,al=il.exports;Ks.extend(tl),Ks.extend(rl),Ks.extend(al),Ks.extend(Qs),Ks.extend(Xs),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Ks(t).startOf("week");return sl(n).map((e=>ll(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return ll(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Ks(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Ks(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Ks(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(ol||(ol={}));const sl=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},ll=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},cl=[1,3,5,7,8,10,12],ul=[4,6,9,11];var dl,hl;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":cl.includes(o)?Math.min(i,31).toString():ul.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Ks(e,n);return Ks(t,n).diff(r,"minute")}}(dl||(dl={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(hl||(hl={}));const pl=y.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&v`
                background-color: ${Tt.Neutral[7]};
            `}
    }
`,fl=i.forwardRef((({children:e,focusHighlight:n=!0,focusOutline:r="none",type:i="button",...o},a)=>t(pl,{ref:a,$outline:r,$highlight:n,type:i,...o,children:e}))),gl={collections:{base:{InputBoxShadow:v`
        inset 0 0 6px 1px ${Tt.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 6px 1px ${Tt.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${Tt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:v`
        inset 0 0 6px 1px ${Tt.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 6px 1px ${Tt.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${Tt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},ml=e=>t=>{const n=t.theme,r=At(gl,n[Et.designTokenScheme]);return n.options?.designToken?Ht(r,e,n.options.designToken):Ht(r,e)},yl=ml("InputBoxShadow"),vl=ml("InputErrorBoxShadow"),bl=(ml("ElevationBoxShadow"),ml("Table.Header"),ml("Table.Cell.Primary"),ml("Table.Cell.Secondary"),ml("Table.Cell.Selected"),ml("Table.Cell.Hover"),y.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Tt.Neutral[5]};
    border-radius: 4px;
    background: ${Tt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Tt.Accent.Light[1]};
        box-shadow: ${yl};
    }

    ${e=>e.$readOnly?v`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?v`
                background: ${Tt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Tt.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?v`
                border: 1px solid ${Tt.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Tt.Validation.Red.Border};
                    box-shadow: ${vl};
                }
            `:void 0}
`),wl=y.input`
    ${rs("Body","regular")}
    color: ${Tt.Neutral[1]};
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
        color: ${Tt.Neutral[3]};
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
`,$l=y(Aa.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Tt.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${La.mobileS} {
        max-width: 100%;
    }
`,Sl=y.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,xl=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${La.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,Cl=y.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${La.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,_l=y.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${La.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,Fl=y.div`
    display: flex;
    gap: 0.5rem;

    ${La.tablet} {
        flex-direction: column;
    }

    ${La.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,Ml=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${La.mobileS} {
        width: 6rem;
    }
`,kl=y(fl)`
    width: 5rem;
    padding: 1rem 0;
    color: ${Tt.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Tt.Primary};
    }
`,Dl=y(cs.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${La.tablet} {
        margin: 0;
    }

    ${La.mobileS} {
        margin: 0 0.25rem;
    }
`,Ol=y(wl)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${Tt.Neutral[5]};
    background: ${Tt.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${Tt.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${Tt.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${La.mobileS} {
        width: 100%;
    }
`,Bl=y((({type:e="checkbox",indicator:r,checked:i,styleType:o="default",children:l,subLabel:c,disabled:u,error:h,name:p,id:f,className:g,"data-testid":m,onChange:y})=>{const[v,b]=s(i),[w]=s(hl.generate()),$=f?`${f}-input`:`tg-${w}-input`,S=a();d((()=>{b(i)}),[i]);return n(ys,{$selected:v,$disabled:u,className:g,$styleType:o,$error:h,$indicator:r,id:f,"data-testid":m,children:[r&&(()=>{let n;switch(e){case"yes":n="tick";break;case"no":n="cross";break;case"checkbox":case"radio":n=e}return t(qs,{type:n,active:v,disabled:u})})(),t(vs,{ref:S,name:p,id:$,type:"checkbox"===e?"checkbox":"radio","data-testid":"toggle-input",disabled:u,onChange:t=>{if(!u){if(y)return void y(t);switch(e){case"checkbox":b((e=>!e));break;case"radio":case"yes":case"no":v||b(!0)}}},checked:v}),n(bs,{children:[t(ws,{htmlFor:$,$selected:v,$indicator:r,$disabled:u,"data-testid":"toggle-label",children:l}),c&&(()=>{if(!c)return null;let e;return"string"==typeof c?e=c:"function"==typeof c&&(e=c()),t($s,{$disabled:u,$selected:v,children:e})})()]})]})}))`
    min-width: 5rem;
    flex: 1;
`,Hl=y(ms.Small)`
    width: 7rem;

    ${La.mobileL} {
        flex: 1;
    }

    ${La.mobileS} {
        width: 100%;
    }
`;var Al,El,Pl;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Al||(Al={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(El||(El={})),function(e){e.AM="am",e.PM="pm"}(Pl||(Pl={}));const Il=({id:e,value:r,show:i,format:o,onChange:l,onCancel:c})=>{const u=Ia.getTimeValues(o,r),[h,p]=s(u.hour),[g,m]=s(u.minute),[y,v]=s(u.period),b=a(),w=a(),$=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,p=e.targetRef,f=e.observerOptions,g=e.onResize,m=a(n),y=a(null),v=null!=p?p:y,b=a(),w=s({width:void 0,height:void 0}),$=w[0],S=w[1];return Yn((function(){if(!Vn()){var e=Un(g,S,u,h);b.current=Rn((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!Vn()&&e({width:r,height:i}),m.current=!1}))}),r,o,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,f),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,o,l,u,h,g,f,v.current]),Kt({ref:v},$)}();d((()=>{if(i&&b.current&&b.current.focus(),i){const{hour:e,minute:t,period:n}=Ia.getTimeValues(o,r);p(e),m(t),v(n)}}),[i,r,o]),d((()=>{const e=b.current,t=w.current;return e&&e.addEventListener("keydown",S),t&&t.addEventListener("keydown",S),()=>{e&&e.removeEventListener("keydown",S),t&&t.removeEventListener("keydown",S)}}),[]);const S=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},x=f((e=>{switch(e.currentTarget.name){case Al.MINUTE_UP:m(Ia.updateMinutes(g,"add"));break;case Al.MINUTE_DOWN:m(Ia.updateMinutes(g,"minus"));break;case Al.HOUR_UP:p(Ia.updateHours(h,"add"));break;case Al.HOUR_DOWN:p(Ia.updateHours(h,"minus"))}}),[h,g]),C=e=>{e.target.select()},_=e=>{const t=e.target.value;switch(e.target.name){case El.HOUR:t.length<=2&&p(t);break;case El.MINUTE:t.length<=2&&m(t)}},F=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case El.HOUR:{const n=t>23||t<0?u.hour:Ia.convertHourTo12HourFormat(e.target.value);p(n);break}case El.MINUTE:{const n=t>59||t<0?u.minute:e.target.value;m(Ea.padValue(n));break}}},M=e=>{switch(e.target.name){case Pl.AM:v(Pa.AM);break;case Pl.PM:v(Pa.PM)}},k=t=>e?`${e}-${t}`:t,D=ua({height:i?$.height+32:0});return t($l,{"data-testid":"animated-dropdown-wrapper",style:D,children:n(Sl,{ref:$.ref,"data-testid":k("timepicker-dropdown"),inert:i?void 0:"",children:[n(xl,{children:[n(_l,{children:[n(Ml,{children:[t(kl,{"aria-label":"increase hour",name:Al.HOUR_UP,tabIndex:-1,onClick:x,"data-testid":k("hour-increment-button"),children:t(Zt,{})}),t(Ol,{"aria-label":"hour",type:"number",name:El.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:b,value:h,onFocus:C,onChange:_,onBlur:F,min:1,max:12,placeholder:"HH","data-testid":k("hour-input")}),t(kl,{"aria-label":"decrease hour",name:Al.HOUR_DOWN,tabIndex:-1,onClick:x,"data-testid":k("hour-decrement-button"),children:t(Wt,{})})]}),t(Dl,{children:":"}),n(Ml,{children:[t(kl,{"aria-label":"increase minute",name:Al.MINUTE_UP,tabIndex:-1,onClick:x,"data-testid":k("minute-increment-button"),children:t(Zt,{})}),t(Ol,{"aria-label":"minute",type:"number",name:El.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:g,onChange:_,onBlur:F,onFocus:C,min:0,max:59,placeholder:"MM","data-testid":k("minute-input")}),t(kl,{"aria-label":"decrease minute",name:Al.MINUTE_DOWN,tabIndex:-1,onClick:x,"data-testid":k("minute-decrement-button"),children:t(Wt,{})})]})]}),n(Fl,{children:[t(Bl,{checked:y===Pa.AM,name:Pl.AM,type:"radio",onChange:M,"data-testid":k("am-toggle"),"aria-label":"AM",children:"AM"}),t(Bl,{checked:y===Pa.PM,name:Pl.PM,type:"radio",onChange:M,"data-testid":k("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),n(Cl,{children:[t(Hl,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":k("cancel-button"),children:"Cancel"}),t(Hl,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===o?Ia.convertTo24HourFormat({hour:h,minute:g,period:y}):`${h}:${g}${y}`,l(e)},disabled:""===h||""===g,"data-testid":k("confirm-button"),children:"Done"})]})]})})},Tl=(e,t,n=window)=>{const r=a();d((()=>{r.current=t}),[t]),d((()=>{if(!(n&&n.addEventListener))return;const t=e=>r.current(e);return n.addEventListener(e,t),()=>{n.removeEventListener(e,t)}}),[e,n])},zl=y.div`
    position: relative;
`,Nl=y(bl)`
    height: 3rem;
    gap: 0.5rem;
`,jl=y(wl)`
    display: block;
    width: 100%;
    flex: 1;
`,Rl=({id:e,disabled:r=!1,error:i,value:o,format:l="24hr",readOnly:c,onChange:u,onBlur:h,...p})=>{const[f,g]=s(!1),[m,y]=s(!1),[v,b]=s(""),[w,$]=s(""),S=a();d((()=>{o&&(b(o.start),$(o.end))}),[]),Tl("mousedown",(function(e){r||_(e)}),document),Tl("keyup",(function(e){if("Tab"===e.code)_(e)}),document);const x=()=>{C()},C=()=>{g(!1),y(!1),h&&h()},_=e=>{S&&!S.current.contains(e.target)&&(m||f)&&C()};return t(zl,{ref:S,id:e,...p,children:n(Nl,{$disabled:r,$error:i,$readOnly:c,children:[n(Vt,{error:i,currentActive:f?"start":m?"end":"none",children:[t(jl,{onFocus:()=>{r||c||f||(y(!1),g(!0))},readOnly:!0,placeholder:"From",value:Ia.formatDisplayValue(v,l),disabled:r,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(jl,{onFocus:()=>{r||c||m||(g(!1),y(!0))},readOnly:!0,placeholder:"To",value:Ia.formatDisplayValue(w,l),disabled:r,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),t(Il,{id:e,show:f,value:v,format:l,onCancel:x,onChange:e=>{g(!1),y(!0),b(e);u&&u({start:e,end:w})}}),t(Il,{id:e,show:m,value:w,format:l,onCancel:x,onChange:e=>{y(!1),$(e),""==v&&g(!0);u&&u({start:v,end:e})}})]})})};export{Rl as TimeRangePicker};
//# sourceMappingURL=index.js.map
