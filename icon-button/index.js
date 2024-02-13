import{jsx as r}from"react/jsx-runtime";import e from"react";import t,{css as n}from"styled-components";"function"==typeof SuppressedError&&SuppressedError;var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var i=Array.isArray,c="object"==typeof o&&o&&o.Object===Object&&o,u="object"==typeof self&&self&&self.Object===Object&&self,l=c||u||Function("return this")(),d=l.Symbol,F=d,s=Object.prototype,h=s.hasOwnProperty,p=s.toString,f=F?F.toStringTag:void 0;var g=function(r){var e=h.call(r,f),t=r[f];try{r[f]=void 0;var n=!0}catch(r){}var o=p.call(r);return n&&(e?r[f]=t:delete r[f]),o},B=Object.prototype.toString;var y=g,v=function(r){return B.call(r)},E=d?d.toStringTag:void 0;var b=function(r){return null==r?void 0===r?"[object Undefined]":"[object Null]":E&&E in Object(r)?y(r):v(r)};var D=b,_=function(r){return null!=r&&"object"==typeof r};var A=function(r){return"symbol"==typeof r||_(r)&&"[object Symbol]"==D(r)},m=i,C=A,O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var T=function(r,e){if(m(r))return!1;var t=typeof r;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=r&&!C(r))||(k.test(r)||!O.test(r)||null!=e&&r in Object(e))};var x=function(r){var e=typeof r;return null!=r&&("object"==e||"function"==e)},w=b,S=x;var j,$=function(r){if(!S(r))return!1;var e=w(r);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},I=l["__core-js_shared__"],V=(j=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var P=function(r){return!!V&&V in r},R=Function.prototype.toString;var z=$,N=P,L=x,G=function(r){if(null!=r){try{return R.call(r)}catch(r){}try{return r+""}catch(r){}}return""},M=/^\[object .+?Constructor\]$/,U=Function.prototype,X=Object.prototype,Y=U.toString,q=X.hasOwnProperty,H=RegExp("^"+Y.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var J=function(r){return!(!L(r)||N(r))&&(z(r)?H:M).test(G(r))},K=function(r,e){return null==r?void 0:r[e]};var Q=function(r,e){var t=K(r,e);return J(t)?t:void 0},W=Q(Object,"create"),Z=W;var rr=function(){this.__data__=Z?Z(null):{},this.size=0};var er=function(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e},tr=W,nr=Object.prototype.hasOwnProperty;var or=function(r){var e=this.__data__;if(tr){var t=e[r];return"__lodash_hash_undefined__"===t?void 0:t}return nr.call(e,r)?e[r]:void 0},ar=W,ir=Object.prototype.hasOwnProperty;var cr=W;var ur=rr,lr=er,dr=or,Fr=function(r){var e=this.__data__;return ar?void 0!==e[r]:ir.call(e,r)},sr=function(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=cr&&void 0===e?"__lodash_hash_undefined__":e,this};function hr(r){var e=-1,t=null==r?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}hr.prototype.clear=ur,hr.prototype.delete=lr,hr.prototype.get=dr,hr.prototype.has=Fr,hr.prototype.set=sr;var pr=hr;var fr=function(){this.__data__=[],this.size=0};var gr=function(r,e){return r===e||r!=r&&e!=e};var Br=function(r,e){for(var t=r.length;t--;)if(gr(r[t][0],e))return t;return-1},yr=Br,vr=Array.prototype.splice;var Er=Br;var br=Br;var Dr=Br;var _r=fr,Ar=function(r){var e=this.__data__,t=yr(e,r);return!(t<0)&&(t==e.length-1?e.pop():vr.call(e,t,1),--this.size,!0)},mr=function(r){var e=this.__data__,t=Er(e,r);return t<0?void 0:e[t][1]},Cr=function(r){return br(this.__data__,r)>-1},Or=function(r,e){var t=this.__data__,n=Dr(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this};function kr(r){var e=-1,t=null==r?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}kr.prototype.clear=_r,kr.prototype.delete=Ar,kr.prototype.get=mr,kr.prototype.has=Cr,kr.prototype.set=Or;var Tr=kr,xr=Q(l,"Map"),wr=pr,Sr=Tr,jr=xr;var $r=function(r){var e=typeof r;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r};var Ir=function(r,e){var t=r.__data__;return $r(e)?t["string"==typeof e?"string":"hash"]:t.map},Vr=Ir;var Pr=Ir;var Rr=Ir;var zr=Ir;var Nr=function(){this.size=0,this.__data__={hash:new wr,map:new(jr||Sr),string:new wr}},Lr=function(r){var e=Vr(this,r).delete(r);return this.size-=e?1:0,e},Gr=function(r){return Pr(this,r).get(r)},Mr=function(r){return Rr(this,r).has(r)},Ur=function(r,e){var t=zr(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this};function Xr(r){var e=-1,t=null==r?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Xr.prototype.clear=Nr,Xr.prototype.delete=Lr,Xr.prototype.get=Gr,Xr.prototype.has=Mr,Xr.prototype.set=Ur;var Yr=Xr;function qr(r,e){if("function"!=typeof r||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=t.cache;if(a.has(o))return a.get(o);var i=r.apply(this,n);return t.cache=a.set(o,i)||a,i};return t.cache=new(qr.Cache||Yr),t}qr.Cache=Yr;var Hr=qr;var Jr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kr=/\\(\\)?/g,Qr=function(r){var e=Hr(r,(function(r){return 500===t.size&&t.clear(),r})),t=e.cache;return e}((function(r){var e=[];return 46===r.charCodeAt(0)&&e.push(""),r.replace(Jr,(function(r,t,n,o){e.push(n?o.replace(Kr,"$1"):t||r)})),e}));var Wr=function(r,e){for(var t=-1,n=null==r?0:r.length,o=Array(n);++t<n;)o[t]=e(r[t],t,r);return o},Zr=i,re=A,ee=d?d.prototype:void 0,te=ee?ee.toString:void 0;var ne=function r(e){if("string"==typeof e)return e;if(Zr(e))return Wr(e,r)+"";if(re(e))return te?te.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},oe=ne;var ae=i,ie=T,ce=Qr,ue=function(r){return null==r?"":oe(r)};var le=A;var de=function(r,e){return ae(r)?r:ie(r,e)?[r]:ce(ue(r))},Fe=function(r){if("string"==typeof r||le(r))return r;var e=r+"";return"0"==e&&1/r==-Infinity?"-0":e};var se=function(r,e){for(var t=0,n=(e=de(e,r)).length;null!=r&&t<n;)r=r[Fe(e[t++])];return t&&t==n?r:void 0};var he=a((function(r,e,t){var n=null==r?void 0:se(r,e);return void 0===n?t:n}));const pe=(r,e,t)=>e?he(t,e)||he(r,e):t||r;var fe;!function(r){r.colorScheme="colorScheme",r.layout="layout",r.textStyleScheme="textStyleScheme",r.designTokenScheme="designTokenScheme",r.resourceScheme="resourceScheme"}(fe||(fe={}));const ge={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Be=r=>e=>{const t=e.theme,n=((r,e)=>{const t=e||r.defaultValue;return he(r.collections,t)})(ge,t[fe.colorScheme]);return t.options&&t.options.color?pe(n,r,t.options.color):pe(n,r)},ye=(Be("Brand.1"),Be("Brand.2"),Be("Brand.3"),Be("Brand.4"),Be("Brand.5"),Be("Brand.6"),Be("Primary")),ve=(Be("PrimaryDark"),Be("Secondary"),Be("Accent.Light.1"),Be("Accent.Light.2"),Be("Accent.Light.3"),Be("Accent.Light.4"),Be("Accent.Light.5"),Be("Accent.Light.6"),Be("Accent.Dark.1"),Be("Accent.Dark.2"),Be("Accent.Dark.3"),{1:Be("Neutral.1"),2:Be("Neutral.2"),3:Be("Neutral.3"),4:Be("Neutral.4"),5:Be("Neutral.5"),6:Be("Neutral.6"),7:Be("Neutral.7"),8:Be("Neutral.8")}),Ee=(Be("Validation.Green.Text"),Be("Validation.Green.Icon"),Be("Validation.Green.Border"),Be("Validation.Green.Background"),Be("Validation.Orange.Text"),Be("Validation.Orange.Icon"),Be("Validation.Orange.Border"),Be("Validation.Orange.Background"),Be("Validation.Orange.Badge"),Be("Validation.Red.Text"),Be("Validation.Red.Icon"),Be("Validation.Red.Border"),Be("Validation.Red.Background"),Be("Validation.Blue.Text"),Be("Validation.Blue.Icon"),Be("Validation.Blue.Border"),Be("Validation.Blue.Background"),Be("Shadow.Accent"),Be("Shadow.Red"),Be("Shadow.Elevation"),t.button`
    align-items: center;
    background-color: ${ye};
    border-radius: 0.25rem;
    color: ${ve[8]};
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
                    background-color: ${ve[8]};
                    border: 1px solid ${ye};
                    color: ${ye};
                `;case"light":return n`
                    background-color: ${ve[8]};
                    border: 1px solid ${ve[5]};
                    color: ${ye};
                `;default:return n`
                    background-color: ${ye};
                    border: none;
                    color: ${ve[8]};
                `}}}
    &:hover {
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        background-color: ${ve[6]};
        border: 1px solid ${ve[6]};
        color: ${ve[3]};
        cursor: not-allowed;

        &:hover {
            box-shadow: none;
        }
    }
`),be=e.forwardRef(((e,t)=>{var{"data-testid":n,styleType:o="primary",children:a,sizeType:i="default",type:c="button"}=e,u=function(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(r);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(t[n[o]]=r[n[o]])}return t}(e,["data-testid","styleType","children","sizeType","type"]);return r(Ee,Object.assign({"data-testid":n||"iconButton",ref:t,type:c,$sizeType:i,$styleType:o},u,{children:a}))}));export{be as IconButton};
//# sourceMappingURL=index.js.map
