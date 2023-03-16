import{jsxs as t,jsx as e}from"react/jsx-runtime";import r from"styled-components";var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=Array.isArray,o="object"==typeof n&&n&&n.Object===Object&&n,i="object"==typeof self&&self&&self.Object===Object&&self,c=o||i||Function("return this")(),u=c.Symbol,d=u,l=Object.prototype,s=l.hasOwnProperty,h=l.toString,p=d?d.toStringTag:void 0;var f=function(t){var e=s.call(t,p),r=t[p];try{t[p]=void 0;var n=!0}catch(t){}var a=h.call(t);return n&&(e?t[p]=r:delete t[p]),a},F=Object.prototype.toString;var v=f,y=function(t){return F.call(t)},g=u?u.toStringTag:void 0;var _=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":g&&g in Object(t)?v(t):y(t)};var b=_,B=function(t){return null!=t&&"object"==typeof t};var m=function(t){return"symbol"==typeof t||B(t)&&"[object Symbol]"==b(t)},A=a,D=m,E=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var S=function(t,e){if(A(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!D(t))||(k.test(t)||!E.test(t)||null!=e&&t in Object(e))};var j=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},O=_,w=j;var x,C=function(t){if(!w(t))return!1;var e=O(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},$=c["__core-js_shared__"],T=(x=/[^.]+$/.exec($&&$.keys&&$.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"";var V=function(t){return!!T&&T in t},N=Function.prototype.toString;var P=C,I=V,z=j,R=function(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""},L=/^\[object .+?Constructor\]$/,G=Function.prototype,H=Object.prototype,M=G.toString,U=H.hasOwnProperty,q=RegExp("^"+M.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var J=function(t){return!(!z(t)||I(t))&&(P(t)?q:L).test(R(t))},K=function(t,e){return null==t?void 0:t[e]};var Q=function(t,e){var r=K(t,e);return J(r)?r:void 0},W=Q(Object,"create"),X=W;var Y=function(){this.__data__=X?X(null):{},this.size=0};var Z=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},tt=W,et=Object.prototype.hasOwnProperty;var rt=function(t){var e=this.__data__;if(tt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return et.call(e,t)?e[t]:void 0},nt=W,at=Object.prototype.hasOwnProperty;var ot=W;var it=Y,ct=Z,ut=rt,dt=function(t){var e=this.__data__;return nt?void 0!==e[t]:at.call(e,t)},lt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=ot&&void 0===e?"__lodash_hash_undefined__":e,this};function st(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}st.prototype.clear=it,st.prototype.delete=ct,st.prototype.get=ut,st.prototype.has=dt,st.prototype.set=lt;var ht=st;var pt=function(){this.__data__=[],this.size=0};var ft=function(t,e){return t===e||t!=t&&e!=e};var Ft=function(t,e){for(var r=t.length;r--;)if(ft(t[r][0],e))return r;return-1},vt=Ft,yt=Array.prototype.splice;var gt=Ft;var _t=Ft;var bt=Ft;var Bt=pt,mt=function(t){var e=this.__data__,r=vt(e,t);return!(r<0)&&(r==e.length-1?e.pop():yt.call(e,r,1),--this.size,!0)},At=function(t){var e=this.__data__,r=gt(e,t);return r<0?void 0:e[r][1]},Dt=function(t){return _t(this.__data__,t)>-1},Et=function(t,e){var r=this.__data__,n=bt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function kt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}kt.prototype.clear=Bt,kt.prototype.delete=mt,kt.prototype.get=At,kt.prototype.has=Dt,kt.prototype.set=Et;var St=kt,jt=Q(c,"Map"),Ot=ht,wt=St,xt=jt;var Ct=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var $t=function(t,e){var r=t.__data__;return Ct(e)?r["string"==typeof e?"string":"hash"]:r.map},Tt=$t;var Vt=$t;var Nt=$t;var Pt=$t;var It=function(){this.size=0,this.__data__={hash:new Ot,map:new(xt||wt),string:new Ot}},zt=function(t){var e=Tt(this,t).delete(t);return this.size-=e?1:0,e},Rt=function(t){return Vt(this,t).get(t)},Lt=function(t){return Nt(this,t).has(t)},Gt=function(t,e){var r=Pt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function Ht(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ht.prototype.clear=It,Ht.prototype.delete=zt,Ht.prototype.get=Rt,Ht.prototype.has=Lt,Ht.prototype.set=Gt;var Mt=Ht;function Ut(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=e?e.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=t.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(Ut.Cache||Mt),r}Ut.Cache=Mt;var qt=Ut;var Jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kt=/\\(\\)?/g,Qt=function(t){var e=qt(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Jt,(function(t,r,n,a){e.push(n?a.replace(Kt,"$1"):r||t)})),e}));var Wt=function(t,e){for(var r=-1,n=null==t?0:t.length,a=Array(n);++r<n;)a[r]=e(t[r],r,t);return a},Xt=a,Yt=m,Zt=u?u.prototype:void 0,te=Zt?Zt.toString:void 0;var ee=function t(e){if("string"==typeof e)return e;if(Xt(e))return Wt(e,t)+"";if(Yt(e))return te?te.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r},re=ee;var ne=a,ae=S,oe=Qt,ie=function(t){return null==t?"":re(t)};var ce=m;var ue=function(t,e){return ne(t)?t:ae(t,e)?[t]:oe(ie(t))},de=function(t){if("string"==typeof t||ce(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var le=function(t,e){for(var r=0,n=(e=ue(e,t)).length;null!=t&&r<n;)t=t[de(e[r++])];return r&&r==n?t:void 0};var se=function(t,e,r){var n=null==t?void 0:le(t,e);return void 0===n?r:n};const he=(t,e,r)=>e?se(r,e)||se(t,e):r||t;var pe;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme"}(pe||(pe={}));const fe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}}},defaultValue:"base"},Fe=t=>e=>{const r=e.theme,n=((t,e)=>{const r=e||t.defaultValue;return se(t.collections,r)})(fe,r[pe.colorScheme]);return r.options&&r.options.color?he(n,t,r.options.color):he(n,t)},ve={Brand:{1:Fe("Brand.1"),2:Fe("Brand.2"),3:Fe("Brand.3"),4:Fe("Brand.4"),5:Fe("Brand.5"),6:Fe("Brand.6")},Primary:Fe("Primary"),PrimaryDark:Fe("PrimaryDark"),Secondary:Fe("Secondary"),Accent:{Light:{1:Fe("Accent.Light.1"),2:Fe("Accent.Light.2"),3:Fe("Accent.Light.3"),4:Fe("Accent.Light.4"),5:Fe("Accent.Light.5"),6:Fe("Accent.Light.6")},Dark:{1:Fe("Accent.Dark.1"),2:Fe("Accent.Dark.2"),3:Fe("Accent.Dark.3")}},Neutral:{1:Fe("Neutral.1"),2:Fe("Neutral.2"),3:Fe("Neutral.3"),4:Fe("Neutral.4"),5:Fe("Neutral.5"),6:Fe("Neutral.6"),7:Fe("Neutral.7"),8:Fe("Neutral.8")},Validation:{Green:{Text:Fe("Validation.Green.Text"),Icon:Fe("Validation.Green.Icon"),Border:Fe("Validation.Green.Border"),Background:Fe("Validation.Green.Background")},Orange:{Text:Fe("Validation.Orange.Text"),Icon:Fe("Validation.Orange.Icon"),Border:Fe("Validation.Orange.Border"),Background:Fe("Validation.Orange.Background"),Badge:Fe("Validation.Orange.Badge")},Red:{Text:Fe("Validation.Red.Text"),Icon:Fe("Validation.Red.Icon"),Border:Fe("Validation.Red.Border"),Background:Fe("Validation.Red.Background")}},Shadow:{Accent:Fe("Shadow.Accent"),Red:Fe("Shadow.Red")}},ye=r.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    border-radius: 50%;
    border: 2px solid ${ve.Accent.Light[2]};

    ${t=>{if(t.$disabled)return`\n\t\t\t\tborder: 2px solid ${ve.Neutral[4](t)};\n\t\t\t`}}
`,ge=r.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${t=>t.disabled?"not-allowed":"pointer"};
    z-index: 1;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,_e=r.div`
    height: 0.75rem;
    width: 0.75rem;
    opacity: ${t=>t.$selected?1:0};
    transition: all 200ms ease-in-out;
    background: ${t=>t.$disabled?ve.Neutral[4](t):ve.Primary(t)};
    border-radius: 50%;
    border: 1px solid transparent;
`,be=({className:r,checked:n,disabled:a,onChange:o,...i})=>t(ye,{$selected:n,$disabled:a,className:r,"data-testid":"radio-button",children:[e(ge,{type:"radio","data-testid":"radio-input",onChange:t=>{a||o?.(t)},checked:n,disabled:a,...i}),e(_e,{id:"checkmark","data-testid":"checkmark",$disabled:a,$selected:n})]});export{be as RadioButton};
//# sourceMappingURL=index.js.map
