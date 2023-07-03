import{jsx as t}from"react/jsx-runtime";import r from"react";import e,{css as n}from"styled-components";var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=Array.isArray,i="object"==typeof o&&o&&o.Object===Object&&o,c="object"==typeof self&&self&&self.Object===Object&&self,u=i||c||Function("return this")(),l=u.Symbol,d=l,s=Object.prototype,h=s.hasOwnProperty,f=s.toString,p=d?d.toStringTag:void 0;var F=function(t){var r=h.call(t,p),e=t[p];try{t[p]=void 0;var n=!0}catch(t){}var o=f.call(t);return n&&(r?t[p]=e:delete t[p]),o},v=Object.prototype.toString;var g=F,y=function(t){return v.call(t)},_=l?l.toStringTag:void 0;var B=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":_&&_ in Object(t)?g(t):y(t)};var b=B,E=function(t){return null!=t&&"object"==typeof t};var m=function(t){return"symbol"==typeof t||E(t)&&"[object Symbol]"==b(t)},A=a,D=m,S=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j=/^\w*$/;var k=function(t,r){if(A(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!D(t))||(j.test(t)||!S.test(t)||null!=r&&t in Object(r))};var O=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},C=B,w=O;var x,V=function(t){if(!w(t))return!1;var r=C(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},T=u["__core-js_shared__"],$=(x=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"";var I=function(t){return!!$&&$ in t},P=Function.prototype.toString;var z=V,R=I,N=O,L=function(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return""},G=/^\[object .+?Constructor\]$/,H=Function.prototype,M=Object.prototype,U=H.toString,q=M.hasOwnProperty,J=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(t){return!(!N(t)||R(t))&&(z(t)?J:G).test(L(t))},Q=function(t,r){return null==t?void 0:t[r]};var W=function(t,r){var e=Q(t,r);return K(e)?e:void 0},X=W(Object,"create"),Y=X;var Z=function(){this.__data__=Y?Y(null):{},this.size=0};var tt=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},rt=X,et=Object.prototype.hasOwnProperty;var nt=function(t){var r=this.__data__;if(rt){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return et.call(r,t)?r[t]:void 0},ot=X,at=Object.prototype.hasOwnProperty;var it=X;var ct=Z,ut=tt,lt=nt,dt=function(t){var r=this.__data__;return ot?void 0!==r[t]:at.call(r,t)},st=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=it&&void 0===r?"__lodash_hash_undefined__":r,this};function ht(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}ht.prototype.clear=ct,ht.prototype.delete=ut,ht.prototype.get=lt,ht.prototype.has=dt,ht.prototype.set=st;var ft=ht;var pt=function(){this.__data__=[],this.size=0};var Ft=function(t,r){return t===r||t!=t&&r!=r};var vt=function(t,r){for(var e=t.length;e--;)if(Ft(t[e][0],r))return e;return-1},gt=vt,yt=Array.prototype.splice;var _t=vt;var Bt=vt;var bt=vt;var Et=pt,mt=function(t){var r=this.__data__,e=gt(r,t);return!(e<0)&&(e==r.length-1?r.pop():yt.call(r,e,1),--this.size,!0)},At=function(t){var r=this.__data__,e=_t(r,t);return e<0?void 0:r[e][1]},Dt=function(t){return Bt(this.__data__,t)>-1},St=function(t,r){var e=this.__data__,n=bt(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function jt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}jt.prototype.clear=Et,jt.prototype.delete=mt,jt.prototype.get=At,jt.prototype.has=Dt,jt.prototype.set=St;var kt=jt,Ot=W(u,"Map"),Ct=ft,wt=kt,xt=Ot;var Vt=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var Tt=function(t,r){var e=t.__data__;return Vt(r)?e["string"==typeof r?"string":"hash"]:e.map},$t=Tt;var It=Tt;var Pt=Tt;var zt=Tt;var Rt=function(){this.size=0,this.__data__={hash:new Ct,map:new(xt||wt),string:new Ct}},Nt=function(t){var r=$t(this,t).delete(t);return this.size-=r?1:0,r},Lt=function(t){return It(this,t).get(t)},Gt=function(t){return Pt(this,t).has(t)},Ht=function(t,r){var e=zt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function Mt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Mt.prototype.clear=Rt,Mt.prototype.delete=Nt,Mt.prototype.get=Lt,Mt.prototype.has=Gt,Mt.prototype.set=Ht;var Ut=Mt;function qt(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],a=e.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return e.cache=a.set(o,i)||a,i};return e.cache=new(qt.Cache||Ut),e}qt.Cache=Ut;var Jt=qt;var Kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qt=/\\(\\)?/g,Wt=function(t){var r=Jt(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(Kt,(function(t,e,n,o){r.push(n?o.replace(Qt,"$1"):e||t)})),r}));var Xt=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},Yt=a,Zt=m,tr=l?l.prototype:void 0,rr=tr?tr.toString:void 0;var er=function t(r){if("string"==typeof r)return r;if(Yt(r))return Xt(r,t)+"";if(Zt(r))return rr?rr.call(r):"";var e=r+"";return"0"==e&&1/r==-Infinity?"-0":e},nr=er;var or=a,ar=k,ir=Wt,cr=function(t){return null==t?"":nr(t)};var ur=m;var lr=function(t,r){return or(t)?t:ar(t,r)?[t]:ir(cr(t))},dr=function(t){if("string"==typeof t||ur(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r};var sr=function(t,r){for(var e=0,n=(r=lr(r,t)).length;null!=t&&e<n;)t=t[dr(r[e++])];return e&&e==n?t:void 0};var hr=function(t,r,e){var n=null==t?void 0:sr(t,r);return void 0===n?e:n};const fr=(t,r,e)=>r?hr(e,r)||hr(t,r):e||t;var pr;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(pr||(pr={}));const Fr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},vr=t=>r=>{const e=r.theme,n=((t,r)=>{const e=r||t.defaultValue;return hr(t.collections,e)})(Fr,e[pr.colorScheme]);return e.options&&e.options.color?fr(n,t,e.options.color):fr(n,t)},gr=(vr("Brand.1"),vr("Brand.2"),vr("Brand.3"),vr("Brand.4"),vr("Brand.5"),vr("Brand.6"),vr("Primary"),vr("PrimaryDark"),vr("Secondary"),vr("Accent.Light.1"),vr("Accent.Light.2"),vr("Accent.Light.3"),vr("Accent.Light.4"),vr("Accent.Light.5"),vr("Accent.Light.6"),vr("Accent.Dark.1"),vr("Accent.Dark.2"),vr("Accent.Dark.3"),{1:vr("Neutral.1"),2:vr("Neutral.2"),3:vr("Neutral.3"),4:vr("Neutral.4"),5:vr("Neutral.5"),6:vr("Neutral.6"),7:vr("Neutral.7"),8:vr("Neutral.8")}),yr=(vr("Validation.Green.Text"),vr("Validation.Green.Icon"),vr("Validation.Green.Border"),vr("Validation.Green.Background"),vr("Validation.Orange.Text"),vr("Validation.Orange.Icon"),vr("Validation.Orange.Border"),vr("Validation.Orange.Background"),vr("Validation.Orange.Badge"),vr("Validation.Red.Text"),vr("Validation.Red.Icon"),vr("Validation.Red.Border"),vr("Validation.Red.Background"),vr("Validation.Blue.Text"),vr("Validation.Blue.Icon"),vr("Validation.Blue.Border"),vr("Validation.Blue.Background"),vr("Shadow.Accent"),vr("Shadow.Red"),vr("Shadow.Elevation"),e.button`
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
        ${({$outline:t})=>"none"===t&&"outline: none;"}

        ${({$highlight:t})=>t&&n`
                background-color: ${gr[7]};
            `}
    }
`),_r=r.forwardRef((({children:r,focusHighlight:e=!0,focusOutline:n="none",type:o="button",...a},i)=>t(yr,{ref:i,$outline:n,$highlight:e,type:o,...a,children:r})));export{_r as IconButton};
//# sourceMappingURL=index.js.map
