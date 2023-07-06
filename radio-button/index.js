import{jsxs as t,jsx as e}from"react/jsx-runtime";import r from"styled-components";var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=Array.isArray,o="object"==typeof n&&n&&n.Object===Object&&n,i="object"==typeof self&&self&&self.Object===Object&&self,c=o||i||Function("return this")(),d=c.Symbol,u=d,l=Object.prototype,s=l.hasOwnProperty,F=l.toString,h=u?u.toStringTag:void 0;var p=function(t){var e=s.call(t,h),r=t[h];try{t[h]=void 0;var n=!0}catch(t){}var a=F.call(t);return n&&(e?t[h]=r:delete t[h]),a},f=Object.prototype.toString;var v=p,g=function(t){return f.call(t)},B=d?d.toStringTag:void 0;var y=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":B&&B in Object(t)?v(t):g(t)};var b=y,_=function(t){return null!=t&&"object"==typeof t};var E=function(t){return"symbol"==typeof t||_(t)&&"[object Symbol]"==b(t)},D=a,A=E,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,m=/^\w*$/;var C=function(t,e){if(D(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!A(t))||(m.test(t)||!k.test(t)||null!=e&&t in Object(e))};var x=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},S=y,O=x;var T,j=function(t){if(!O(t))return!1;var e=S(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},w=c["__core-js_shared__"],I=(T=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var V=function(t){return!!I&&I in t},$=Function.prototype.toString;var P=j,N=V,R=x,z=function(t){if(null!=t){try{return $.call(t)}catch(t){}try{return t+""}catch(t){}}return""},L=/^\[object .+?Constructor\]$/,G=Function.prototype,H=Object.prototype,M=G.toString,U=H.hasOwnProperty,q=RegExp("^"+M.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var J=function(t){return!(!R(t)||N(t))&&(P(t)?q:L).test(z(t))},K=function(t,e){return null==t?void 0:t[e]};var Q=function(t,e){var r=K(t,e);return J(r)?r:void 0},W=Q(Object,"create"),X=W;var Y=function(){this.__data__=X?X(null):{},this.size=0};var Z=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},tt=W,et=Object.prototype.hasOwnProperty;var rt=function(t){var e=this.__data__;if(tt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return et.call(e,t)?e[t]:void 0},nt=W,at=Object.prototype.hasOwnProperty;var ot=W;var it=Y,ct=Z,dt=rt,ut=function(t){var e=this.__data__;return nt?void 0!==e[t]:at.call(e,t)},lt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=ot&&void 0===e?"__lodash_hash_undefined__":e,this};function st(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}st.prototype.clear=it,st.prototype.delete=ct,st.prototype.get=dt,st.prototype.has=ut,st.prototype.set=lt;var Ft=st;var ht=function(){this.__data__=[],this.size=0};var pt=function(t,e){return t===e||t!=t&&e!=e};var ft=function(t,e){for(var r=t.length;r--;)if(pt(t[r][0],e))return r;return-1},vt=ft,gt=Array.prototype.splice;var Bt=ft;var yt=ft;var bt=ft;var _t=ht,Et=function(t){var e=this.__data__,r=vt(e,t);return!(r<0)&&(r==e.length-1?e.pop():gt.call(e,r,1),--this.size,!0)},Dt=function(t){var e=this.__data__,r=Bt(e,t);return r<0?void 0:e[r][1]},At=function(t){return yt(this.__data__,t)>-1},kt=function(t,e){var r=this.__data__,n=bt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function mt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}mt.prototype.clear=_t,mt.prototype.delete=Et,mt.prototype.get=Dt,mt.prototype.has=At,mt.prototype.set=kt;var Ct=mt,xt=Q(c,"Map"),St=Ft,Ot=Ct,Tt=xt;var jt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var wt=function(t,e){var r=t.__data__;return jt(e)?r["string"==typeof e?"string":"hash"]:r.map},It=wt;var Vt=wt;var $t=wt;var Pt=wt;var Nt=function(){this.size=0,this.__data__={hash:new St,map:new(Tt||Ot),string:new St}},Rt=function(t){var e=It(this,t).delete(t);return this.size-=e?1:0,e},zt=function(t){return Vt(this,t).get(t)},Lt=function(t){return $t(this,t).has(t)},Gt=function(t,e){var r=Pt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function Ht(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ht.prototype.clear=Nt,Ht.prototype.delete=Rt,Ht.prototype.get=zt,Ht.prototype.has=Lt,Ht.prototype.set=Gt;var Mt=Ht;function Ut(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=e?e.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=t.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(Ut.Cache||Mt),r}Ut.Cache=Mt;var qt=Ut;var Jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kt=/\\(\\)?/g,Qt=function(t){var e=qt(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Jt,(function(t,r,n,a){e.push(n?a.replace(Kt,"$1"):r||t)})),e}));var Wt=function(t,e){for(var r=-1,n=null==t?0:t.length,a=Array(n);++r<n;)a[r]=e(t[r],r,t);return a},Xt=a,Yt=E,Zt=d?d.prototype:void 0,te=Zt?Zt.toString:void 0;var ee=function t(e){if("string"==typeof e)return e;if(Xt(e))return Wt(e,t)+"";if(Yt(e))return te?te.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r},re=ee;var ne=a,ae=C,oe=Qt,ie=function(t){return null==t?"":re(t)};var ce=E;var de=function(t,e){return ne(t)?t:ae(t,e)?[t]:oe(ie(t))},ue=function(t){if("string"==typeof t||ce(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var le=function(t,e){for(var r=0,n=(e=de(e,t)).length;null!=t&&r<n;)t=t[ue(e[r++])];return r&&r==n?t:void 0};var se=function(t,e,r){var n=null==t?void 0:le(t,e);return void 0===n?r:n};const Fe=(t,e,r)=>e?se(r,e)||se(t,e):r||t;var he;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(he||(he={}));const pe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},fe=t=>e=>{const r=e.theme,n=((t,e)=>{const r=e||t.defaultValue;return se(t.collections,r)})(pe,r[he.colorScheme]);return r.options&&r.options.color?Fe(n,t,r.options.color):Fe(n,t)},ve={Brand:{1:fe("Brand.1"),2:fe("Brand.2"),3:fe("Brand.3"),4:fe("Brand.4"),5:fe("Brand.5"),6:fe("Brand.6")},Primary:fe("Primary"),PrimaryDark:fe("PrimaryDark"),Secondary:fe("Secondary"),Accent:{Light:{1:fe("Accent.Light.1"),2:fe("Accent.Light.2"),3:fe("Accent.Light.3"),4:fe("Accent.Light.4"),5:fe("Accent.Light.5"),6:fe("Accent.Light.6")},Dark:{1:fe("Accent.Dark.1"),2:fe("Accent.Dark.2"),3:fe("Accent.Dark.3")}},Neutral:{1:fe("Neutral.1"),2:fe("Neutral.2"),3:fe("Neutral.3"),4:fe("Neutral.4"),5:fe("Neutral.5"),6:fe("Neutral.6"),7:fe("Neutral.7"),8:fe("Neutral.8")},Validation:{Green:{Text:fe("Validation.Green.Text"),Icon:fe("Validation.Green.Icon"),Border:fe("Validation.Green.Border"),Background:fe("Validation.Green.Background")},Orange:{Text:fe("Validation.Orange.Text"),Icon:fe("Validation.Orange.Icon"),Border:fe("Validation.Orange.Border"),Background:fe("Validation.Orange.Background"),Badge:fe("Validation.Orange.Badge")},Red:{Text:fe("Validation.Red.Text"),Icon:fe("Validation.Red.Icon"),Border:fe("Validation.Red.Border"),Background:fe("Validation.Red.Background")},Blue:{Text:fe("Validation.Blue.Text"),Icon:fe("Validation.Blue.Icon"),Border:fe("Validation.Blue.Border"),Background:fe("Validation.Blue.Background")}},Shadow:{Accent:fe("Shadow.Accent"),Red:fe("Shadow.Red"),Elevation:fe("Shadow.Elevation")}},ge=r.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    border-radius: 50%;
    border: 2px solid ${ve.Accent.Light[2]};

    ${t=>{if(t.$disabled)return`\n\t\t\t\tborder: 2px solid ${ve.Neutral[4](t)};\n\t\t\t`}}
`,Be=r.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${t=>t.disabled?"not-allowed":"pointer"};
    z-index: 1;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,ye=r.div`
    height: 0.75rem;
    width: 0.75rem;
    opacity: ${t=>t.$selected?1:0};
    transition: all 200ms ease-in-out;
    background: ${t=>t.$disabled?ve.Neutral[4](t):ve.Primary(t)};
    border-radius: 50%;
    border: 1px solid transparent;
`,be=({className:r,checked:n,disabled:a,onChange:o,...i})=>t(ge,{$selected:n,$disabled:a,className:r,"data-testid":"radio-button",children:[e(Be,{type:"radio","data-testid":"radio-input",onChange:t=>{a||o?.(t)},checked:n,disabled:a,...i}),e(ye,{id:"checkmark","data-testid":"checkmark",$disabled:a,$selected:n})]});export{be as RadioButton};
//# sourceMappingURL=index.js.map
