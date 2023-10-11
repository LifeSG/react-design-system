import{jsx as r}from"react/jsx-runtime";import t from"react";import e,{css as n}from"styled-components";var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=Array.isArray,i="object"==typeof o&&o&&o.Object===Object&&o,c="object"==typeof self&&self&&self.Object===Object&&self,u=i||c||Function("return this")(),l=u.Symbol,d=l,s=Object.prototype,F=s.hasOwnProperty,h=s.toString,p=d?d.toStringTag:void 0;var f=function(r){var t=F.call(r,p),e=r[p];try{r[p]=void 0;var n=!0}catch(r){}var o=h.call(r);return n&&(t?r[p]=e:delete r[p]),o},y=Object.prototype.toString;var g=f,v=function(r){return y.call(r)},B=l?l.toStringTag:void 0;var b=function(r){return null==r?void 0===r?"[object Undefined]":"[object Null]":B&&B in Object(r)?g(r):v(r)};var _=b,E=function(r){return null!=r&&"object"==typeof r};var m=function(r){return"symbol"==typeof r||E(r)&&"[object Symbol]"==_(r)},D=a,A=m,O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var w=function(r,t){if(D(r))return!1;var e=typeof r;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=r&&!A(r))||(C.test(r)||!O.test(r)||null!=t&&r in Object(t))};var T=function(r){var t=typeof r;return null!=r&&("object"==t||"function"==t)},k=b,x=T;var S,j=function(r){if(!x(r))return!1;var t=k(r);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},$=u["__core-js_shared__"],V=(S=/[^.]+$/.exec($&&$.keys&&$.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"";var I=function(r){return!!V&&V in r},P=Function.prototype.toString;var z=j,R=I,N=T,L=function(r){if(null!=r){try{return P.call(r)}catch(r){}try{return r+""}catch(r){}}return""},G=/^\[object .+?Constructor\]$/,U=Function.prototype,M=Object.prototype,X=U.toString,Y=M.hasOwnProperty,q=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var H=function(r){return!(!N(r)||R(r))&&(z(r)?q:G).test(L(r))},J=function(r,t){return null==r?void 0:r[t]};var K=function(r,t){var e=J(r,t);return H(e)?e:void 0},Q=K(Object,"create"),W=Q;var Z=function(){this.__data__=W?W(null):{},this.size=0};var rr=function(r){var t=this.has(r)&&delete this.__data__[r];return this.size-=t?1:0,t},tr=Q,er=Object.prototype.hasOwnProperty;var nr=function(r){var t=this.__data__;if(tr){var e=t[r];return"__lodash_hash_undefined__"===e?void 0:e}return er.call(t,r)?t[r]:void 0},or=Q,ar=Object.prototype.hasOwnProperty;var ir=Q;var cr=Z,ur=rr,lr=nr,dr=function(r){var t=this.__data__;return or?void 0!==t[r]:ar.call(t,r)},sr=function(r,t){var e=this.__data__;return this.size+=this.has(r)?0:1,e[r]=ir&&void 0===t?"__lodash_hash_undefined__":t,this};function Fr(r){var t=-1,e=null==r?0:r.length;for(this.clear();++t<e;){var n=r[t];this.set(n[0],n[1])}}Fr.prototype.clear=cr,Fr.prototype.delete=ur,Fr.prototype.get=lr,Fr.prototype.has=dr,Fr.prototype.set=sr;var hr=Fr;var pr=function(){this.__data__=[],this.size=0};var fr=function(r,t){return r===t||r!=r&&t!=t};var yr=function(r,t){for(var e=r.length;e--;)if(fr(r[e][0],t))return e;return-1},gr=yr,vr=Array.prototype.splice;var Br=yr;var br=yr;var _r=yr;var Er=pr,mr=function(r){var t=this.__data__,e=gr(t,r);return!(e<0)&&(e==t.length-1?t.pop():vr.call(t,e,1),--this.size,!0)},Dr=function(r){var t=this.__data__,e=Br(t,r);return e<0?void 0:t[e][1]},Ar=function(r){return br(this.__data__,r)>-1},Or=function(r,t){var e=this.__data__,n=_r(e,r);return n<0?(++this.size,e.push([r,t])):e[n][1]=t,this};function Cr(r){var t=-1,e=null==r?0:r.length;for(this.clear();++t<e;){var n=r[t];this.set(n[0],n[1])}}Cr.prototype.clear=Er,Cr.prototype.delete=mr,Cr.prototype.get=Dr,Cr.prototype.has=Ar,Cr.prototype.set=Or;var wr=Cr,Tr=K(u,"Map"),kr=hr,xr=wr,Sr=Tr;var jr=function(r){var t=typeof r;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==r:null===r};var $r=function(r,t){var e=r.__data__;return jr(t)?e["string"==typeof t?"string":"hash"]:e.map},Vr=$r;var Ir=$r;var Pr=$r;var zr=$r;var Rr=function(){this.size=0,this.__data__={hash:new kr,map:new(Sr||xr),string:new kr}},Nr=function(r){var t=Vr(this,r).delete(r);return this.size-=t?1:0,t},Lr=function(r){return Ir(this,r).get(r)},Gr=function(r){return Pr(this,r).has(r)},Ur=function(r,t){var e=zr(this,r),n=e.size;return e.set(r,t),this.size+=e.size==n?0:1,this};function Mr(r){var t=-1,e=null==r?0:r.length;for(this.clear();++t<e;){var n=r[t];this.set(n[0],n[1])}}Mr.prototype.clear=Rr,Mr.prototype.delete=Nr,Mr.prototype.get=Lr,Mr.prototype.has=Gr,Mr.prototype.set=Ur;var Xr=Mr;function Yr(r,t){if("function"!=typeof r||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=t?t.apply(this,n):n[0],a=e.cache;if(a.has(o))return a.get(o);var i=r.apply(this,n);return e.cache=a.set(o,i)||a,i};return e.cache=new(Yr.Cache||Xr),e}Yr.Cache=Xr;var qr=Yr;var Hr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jr=/\\(\\)?/g,Kr=function(r){var t=qr(r,(function(r){return 500===e.size&&e.clear(),r})),e=t.cache;return t}((function(r){var t=[];return 46===r.charCodeAt(0)&&t.push(""),r.replace(Hr,(function(r,e,n,o){t.push(n?o.replace(Jr,"$1"):e||r)})),t}));var Qr=function(r,t){for(var e=-1,n=null==r?0:r.length,o=Array(n);++e<n;)o[e]=t(r[e],e,r);return o},Wr=a,Zr=m,rt=l?l.prototype:void 0,tt=rt?rt.toString:void 0;var et=function r(t){if("string"==typeof t)return t;if(Wr(t))return Qr(t,r)+"";if(Zr(t))return tt?tt.call(t):"";var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e},nt=et;var ot=a,at=w,it=Kr,ct=function(r){return null==r?"":nt(r)};var ut=m;var lt=function(r,t){return ot(r)?r:at(r,t)?[r]:it(ct(r))},dt=function(r){if("string"==typeof r||ut(r))return r;var t=r+"";return"0"==t&&1/r==-Infinity?"-0":t};var st=function(r,t){for(var e=0,n=(t=lt(t,r)).length;null!=r&&e<n;)r=r[dt(t[e++])];return e&&e==n?r:void 0};var Ft=function(r,t,e){var n=null==r?void 0:st(r,t);return void 0===n?e:n};const ht=(r,t,e)=>t?Ft(e,t)||Ft(r,t):e||r;var pt;!function(r){r.colorScheme="colorScheme",r.layout="layout",r.textStyleScheme="textStyleScheme",r.designTokenScheme="designTokenScheme",r.resourceScheme="resourceScheme"}(pt||(pt={}));const ft={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},yt=r=>t=>{const e=t.theme,n=((r,t)=>{const e=t||r.defaultValue;return Ft(r.collections,e)})(ft,e[pt.colorScheme]);return e.options&&e.options.color?ht(n,r,e.options.color):ht(n,r)},gt=(yt("Brand.1"),yt("Brand.2"),yt("Brand.3"),yt("Brand.4"),yt("Brand.5"),yt("Brand.6"),yt("Primary")),vt=(yt("PrimaryDark"),yt("Secondary"),yt("Accent.Light.1"),yt("Accent.Light.2"),yt("Accent.Light.3"),yt("Accent.Light.4"),yt("Accent.Light.5"),yt("Accent.Light.6"),yt("Accent.Dark.1"),yt("Accent.Dark.2"),yt("Accent.Dark.3"),{1:yt("Neutral.1"),2:yt("Neutral.2"),3:yt("Neutral.3"),4:yt("Neutral.4"),5:yt("Neutral.5"),6:yt("Neutral.6"),7:yt("Neutral.7"),8:yt("Neutral.8")}),Bt=(yt("Validation.Green.Text"),yt("Validation.Green.Icon"),yt("Validation.Green.Border"),yt("Validation.Green.Background"),yt("Validation.Orange.Text"),yt("Validation.Orange.Icon"),yt("Validation.Orange.Border"),yt("Validation.Orange.Background"),yt("Validation.Orange.Badge"),yt("Validation.Red.Text"),yt("Validation.Red.Icon"),yt("Validation.Red.Border"),yt("Validation.Red.Background"),yt("Validation.Blue.Text"),yt("Validation.Blue.Icon"),yt("Validation.Blue.Border"),yt("Validation.Blue.Background"),yt("Shadow.Accent"),yt("Shadow.Red"),yt("Shadow.Elevation"),e.button`
    align-items: center;
    background-color: ${gt};
    border-radius: 0.25rem;
    color: ${vt[8]};
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${r=>{switch(r.$sizeType){case"large":return n`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return n`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return n`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${r=>{switch(r.$styleType){case"secondary":return n`
                    background-color: ${vt[8]};
                    border: 1px solid ${gt};
                    color: ${gt};
                `;case"light":return n`
                    background-color: ${vt[8]};
                    border: 1px solid ${vt[5]};
                    color: ${gt};
                `;default:return n`
                    background-color: ${gt};
                    border: none;
                    color: ${vt[8]};
                `}}}
    &:hover {
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        background-color: ${vt[6]};
        border: 1px solid ${vt[6]};
        color: ${vt[3]};
        cursor: not-allowed;

        &:hover {
            box-shadow: none;
        }
    }
`),bt=t.forwardRef(((t,e)=>{var{"data-testid":n,styleType:o="primary",children:a,sizeType:i="default",type:c="button"}=t,u=function(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(r);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(e[n[o]]=r[n[o]])}return e}(t,["data-testid","styleType","children","sizeType","type"]);return r(Bt,Object.assign({"data-testid":n||"iconButton",ref:e,type:c,$sizeType:i,$styleType:o},u,{children:a}))}));export{bt as IconButton};
//# sourceMappingURL=index.js.map
