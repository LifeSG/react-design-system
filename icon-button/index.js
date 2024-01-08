import{jsx as r}from"react/jsx-runtime";import e from"react";import t,{css as n}from"styled-components";var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=Array.isArray,i="object"==typeof o&&o&&o.Object===Object&&o,c="object"==typeof self&&self&&self.Object===Object&&self,u=i||c||Function("return this")(),l=u.Symbol,d=l,F=Object.prototype,s=F.hasOwnProperty,h=F.toString,p=d?d.toStringTag:void 0;var f=function(r){var e=s.call(r,p),t=r[p];try{r[p]=void 0;var n=!0}catch(r){}var o=h.call(r);return n&&(e?r[p]=t:delete r[p]),o},g=Object.prototype.toString;var B=f,y=function(r){return g.call(r)},v=l?l.toStringTag:void 0;var E=function(r){return null==r?void 0===r?"[object Undefined]":"[object Null]":v&&v in Object(r)?B(r):y(r)};var b=E,D=function(r){return null!=r&&"object"==typeof r};var _=function(r){return"symbol"==typeof r||D(r)&&"[object Symbol]"==b(r)},A=a,m=_,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var O=function(r,e){if(A(r))return!1;var t=typeof r;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=r&&!m(r))||(k.test(r)||!C.test(r)||null!=e&&r in Object(e))};var T=function(r){var e=typeof r;return null!=r&&("object"==e||"function"==e)},x=E,w=T;var S,j=function(r){if(!w(r))return!1;var e=x(r);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},$=u["__core-js_shared__"],I=(S=/[^.]+$/.exec($&&$.keys&&$.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"";var V=function(r){return!!I&&I in r},P=Function.prototype.toString;var R=j,z=V,N=T,L=function(r){if(null!=r){try{return P.call(r)}catch(r){}try{return r+""}catch(r){}}return""},G=/^\[object .+?Constructor\]$/,U=Function.prototype,M=Object.prototype,X=U.toString,Y=M.hasOwnProperty,q=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var H=function(r){return!(!N(r)||z(r))&&(R(r)?q:G).test(L(r))},J=function(r,e){return null==r?void 0:r[e]};var K=function(r,e){var t=J(r,e);return H(t)?t:void 0},Q=K(Object,"create"),W=Q;var Z=function(){this.__data__=W?W(null):{},this.size=0};var rr=function(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e},er=Q,tr=Object.prototype.hasOwnProperty;var nr=function(r){var e=this.__data__;if(er){var t=e[r];return"__lodash_hash_undefined__"===t?void 0:t}return tr.call(e,r)?e[r]:void 0},or=Q,ar=Object.prototype.hasOwnProperty;var ir=Q;var cr=Z,ur=rr,lr=nr,dr=function(r){var e=this.__data__;return or?void 0!==e[r]:ar.call(e,r)},Fr=function(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=ir&&void 0===e?"__lodash_hash_undefined__":e,this};function sr(r){var e=-1,t=null==r?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}sr.prototype.clear=cr,sr.prototype.delete=ur,sr.prototype.get=lr,sr.prototype.has=dr,sr.prototype.set=Fr;var hr=sr;var pr=function(){this.__data__=[],this.size=0};var fr=function(r,e){return r===e||r!=r&&e!=e};var gr=function(r,e){for(var t=r.length;t--;)if(fr(r[t][0],e))return t;return-1},Br=gr,yr=Array.prototype.splice;var vr=gr;var Er=gr;var br=gr;var Dr=pr,_r=function(r){var e=this.__data__,t=Br(e,r);return!(t<0)&&(t==e.length-1?e.pop():yr.call(e,t,1),--this.size,!0)},Ar=function(r){var e=this.__data__,t=vr(e,r);return t<0?void 0:e[t][1]},mr=function(r){return Er(this.__data__,r)>-1},Cr=function(r,e){var t=this.__data__,n=br(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this};function kr(r){var e=-1,t=null==r?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}kr.prototype.clear=Dr,kr.prototype.delete=_r,kr.prototype.get=Ar,kr.prototype.has=mr,kr.prototype.set=Cr;var Or=kr,Tr=K(u,"Map"),xr=hr,wr=Or,Sr=Tr;var jr=function(r){var e=typeof r;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r};var $r=function(r,e){var t=r.__data__;return jr(e)?t["string"==typeof e?"string":"hash"]:t.map},Ir=$r;var Vr=$r;var Pr=$r;var Rr=$r;var zr=function(){this.size=0,this.__data__={hash:new xr,map:new(Sr||wr),string:new xr}},Nr=function(r){var e=Ir(this,r).delete(r);return this.size-=e?1:0,e},Lr=function(r){return Vr(this,r).get(r)},Gr=function(r){return Pr(this,r).has(r)},Ur=function(r,e){var t=Rr(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this};function Mr(r){var e=-1,t=null==r?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Mr.prototype.clear=zr,Mr.prototype.delete=Nr,Mr.prototype.get=Lr,Mr.prototype.has=Gr,Mr.prototype.set=Ur;var Xr=Mr;function Yr(r,e){if("function"!=typeof r||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=t.cache;if(a.has(o))return a.get(o);var i=r.apply(this,n);return t.cache=a.set(o,i)||a,i};return t.cache=new(Yr.Cache||Xr),t}Yr.Cache=Xr;var qr=Yr;var Hr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jr=/\\(\\)?/g,Kr=function(r){var e=qr(r,(function(r){return 500===t.size&&t.clear(),r})),t=e.cache;return e}((function(r){var e=[];return 46===r.charCodeAt(0)&&e.push(""),r.replace(Hr,(function(r,t,n,o){e.push(n?o.replace(Jr,"$1"):t||r)})),e}));var Qr=function(r,e){for(var t=-1,n=null==r?0:r.length,o=Array(n);++t<n;)o[t]=e(r[t],t,r);return o},Wr=a,Zr=_,re=l?l.prototype:void 0,ee=re?re.toString:void 0;var te=function r(e){if("string"==typeof e)return e;if(Wr(e))return Qr(e,r)+"";if(Zr(e))return ee?ee.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},ne=te;var oe=a,ae=O,ie=Kr,ce=function(r){return null==r?"":ne(r)};var ue=_;var le=function(r,e){return oe(r)?r:ae(r,e)?[r]:ie(ce(r))},de=function(r){if("string"==typeof r||ue(r))return r;var e=r+"";return"0"==e&&1/r==-Infinity?"-0":e};var Fe=function(r,e){for(var t=0,n=(e=le(e,r)).length;null!=r&&t<n;)r=r[de(e[t++])];return t&&t==n?r:void 0};var se=function(r,e,t){var n=null==r?void 0:Fe(r,e);return void 0===n?t:n};const he=(r,e,t)=>e?se(t,e)||se(r,e):t||r;var pe;!function(r){r.colorScheme="colorScheme",r.layout="layout",r.textStyleScheme="textStyleScheme",r.designTokenScheme="designTokenScheme",r.resourceScheme="resourceScheme"}(pe||(pe={}));const fe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},ge=r=>e=>{const t=e.theme,n=((r,e)=>{const t=e||r.defaultValue;return se(r.collections,t)})(fe,t[pe.colorScheme]);return t.options&&t.options.color?he(n,r,t.options.color):he(n,r)},Be=(ge("Brand.1"),ge("Brand.2"),ge("Brand.3"),ge("Brand.4"),ge("Brand.5"),ge("Brand.6"),ge("Primary")),ye=(ge("PrimaryDark"),ge("Secondary"),ge("Accent.Light.1"),ge("Accent.Light.2"),ge("Accent.Light.3"),ge("Accent.Light.4"),ge("Accent.Light.5"),ge("Accent.Light.6"),ge("Accent.Dark.1"),ge("Accent.Dark.2"),ge("Accent.Dark.3"),{1:ge("Neutral.1"),2:ge("Neutral.2"),3:ge("Neutral.3"),4:ge("Neutral.4"),5:ge("Neutral.5"),6:ge("Neutral.6"),7:ge("Neutral.7"),8:ge("Neutral.8")}),ve=(ge("Validation.Green.Text"),ge("Validation.Green.Icon"),ge("Validation.Green.Border"),ge("Validation.Green.Background"),ge("Validation.Orange.Text"),ge("Validation.Orange.Icon"),ge("Validation.Orange.Border"),ge("Validation.Orange.Background"),ge("Validation.Orange.Badge"),ge("Validation.Red.Text"),ge("Validation.Red.Icon"),ge("Validation.Red.Border"),ge("Validation.Red.Background"),ge("Validation.Blue.Text"),ge("Validation.Blue.Icon"),ge("Validation.Blue.Border"),ge("Validation.Blue.Background"),ge("Shadow.Accent"),ge("Shadow.Red"),ge("Shadow.Elevation"),t.button`
    align-items: center;
    background-color: ${Be};
    border-radius: 0.25rem;
    color: ${ye[8]};
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
                    background-color: ${ye[8]};
                    border: 1px solid ${Be};
                    color: ${Be};
                `;case"light":return n`
                    background-color: ${ye[8]};
                    border: 1px solid ${ye[5]};
                    color: ${Be};
                `;default:return n`
                    background-color: ${Be};
                    border: none;
                    color: ${ye[8]};
                `}}}
    &:hover {
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        background-color: ${ye[6]};
        border: 1px solid ${ye[6]};
        color: ${ye[3]};
        cursor: not-allowed;

        &:hover {
            box-shadow: none;
        }
    }
`),Ee=e.forwardRef(((e,t)=>{var{"data-testid":n,styleType:o="primary",children:a,sizeType:i="default",type:c="button"}=e,u=function(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(r);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(t[n[o]]=r[n[o]])}return t}(e,["data-testid","styleType","children","sizeType","type"]);return r(ve,Object.assign({"data-testid":n||"iconButton",ref:t,type:c,$sizeType:i,$styleType:o},u,{children:a}))}));export{Ee as IconButton};
//# sourceMappingURL=index.js.map
