import{jsx as r}from"react/jsx-runtime";import e from"react";import t,{css as n}from"styled-components";"function"==typeof SuppressedError&&SuppressedError;var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var c=Array.isArray,i="object"==typeof o&&o&&o.Object===Object&&o,F="object"==typeof self&&self&&self.Object===Object&&self,u=i||F||Function("return this")(),d=u.Symbol,l=d,s=Object.prototype,B=s.hasOwnProperty,h=s.toString,g=l?l.toStringTag:void 0;var p=function(r){var e=B.call(r,g),t=r[g];try{r[g]=void 0;var n=!0}catch(r){}var o=h.call(r);return n&&(e?r[g]=t:delete r[g]),o},f=Object.prototype.toString;var E=p,y=function(r){return f.call(r)},v=d?d.toStringTag:void 0;var D=function(r){return null==r?void 0===r?"[object Undefined]":"[object Null]":v&&v in Object(r)?E(r):y(r)};var A=D,b=function(r){return null!=r&&"object"==typeof r};var C=function(r){return"symbol"==typeof r||b(r)&&"[object Symbol]"==A(r)},_=c,m=C,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/;var x=function(r,e){if(_(r))return!1;var t=typeof r;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=r&&!m(r))||(T.test(r)||!k.test(r)||null!=e&&r in Object(e))};var O=function(r){var e=typeof r;return null!=r&&("object"==e||"function"==e)},S=D,w=O;var j,I=function(r){if(!w(r))return!1;var e=S(r);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},$=u["__core-js_shared__"],P=(j=/[^.]+$/.exec($&&$.keys&&$.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var V=function(r){return!!P&&P in r},R=Function.prototype.toString;var z=I,N=V,L=O,G=function(r){if(null!=r){try{return R.call(r)}catch(r){}try{return r+""}catch(r){}}return""},M=/^\[object .+?Constructor\]$/,U=Function.prototype,X=Object.prototype,Y=U.toString,q=X.hasOwnProperty,H=RegExp("^"+Y.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var J=function(r){return!(!L(r)||N(r))&&(z(r)?H:M).test(G(r))},K=function(r,e){return null==r?void 0:r[e]};var Q=function(r,e){var t=K(r,e);return J(t)?t:void 0},W=Q(Object,"create"),Z=W;var rr=function(){this.__data__=Z?Z(null):{},this.size=0};var er=function(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e},tr=W,nr=Object.prototype.hasOwnProperty;var or=function(r){var e=this.__data__;if(tr){var t=e[r];return"__lodash_hash_undefined__"===t?void 0:t}return nr.call(e,r)?e[r]:void 0},ar=W,cr=Object.prototype.hasOwnProperty;var ir=W;var Fr=rr,ur=er,dr=or,lr=function(r){var e=this.__data__;return ar?void 0!==e[r]:cr.call(e,r)},sr=function(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=ir&&void 0===e?"__lodash_hash_undefined__":e,this};function Br(r){var e=-1,t=null==r?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Br.prototype.clear=Fr,Br.prototype.delete=ur,Br.prototype.get=dr,Br.prototype.has=lr,Br.prototype.set=sr;var hr=Br;var gr=function(){this.__data__=[],this.size=0};var pr=function(r,e){return r===e||r!=r&&e!=e};var fr=function(r,e){for(var t=r.length;t--;)if(pr(r[t][0],e))return t;return-1},Er=fr,yr=Array.prototype.splice;var vr=fr;var Dr=fr;var Ar=fr;var br=gr,Cr=function(r){var e=this.__data__,t=Er(e,r);return!(t<0)&&(t==e.length-1?e.pop():yr.call(e,t,1),--this.size,!0)},_r=function(r){var e=this.__data__,t=vr(e,r);return t<0?void 0:e[t][1]},mr=function(r){return Dr(this.__data__,r)>-1},kr=function(r,e){var t=this.__data__,n=Ar(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this};function Tr(r){var e=-1,t=null==r?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Tr.prototype.clear=br,Tr.prototype.delete=Cr,Tr.prototype.get=_r,Tr.prototype.has=mr,Tr.prototype.set=kr;var xr=Tr,Or=Q(u,"Map"),Sr=hr,wr=xr,jr=Or;var Ir=function(r){var e=typeof r;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r};var $r=function(r,e){var t=r.__data__;return Ir(e)?t["string"==typeof e?"string":"hash"]:t.map},Pr=$r;var Vr=$r;var Rr=$r;var zr=$r;var Nr=function(){this.size=0,this.__data__={hash:new Sr,map:new(jr||wr),string:new Sr}},Lr=function(r){var e=Pr(this,r).delete(r);return this.size-=e?1:0,e},Gr=function(r){return Vr(this,r).get(r)},Mr=function(r){return Rr(this,r).has(r)},Ur=function(r,e){var t=zr(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this};function Xr(r){var e=-1,t=null==r?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Xr.prototype.clear=Nr,Xr.prototype.delete=Lr,Xr.prototype.get=Gr,Xr.prototype.has=Mr,Xr.prototype.set=Ur;var Yr=Xr;function qr(r,e){if("function"!=typeof r||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=t.cache;if(a.has(o))return a.get(o);var c=r.apply(this,n);return t.cache=a.set(o,c)||a,c};return t.cache=new(qr.Cache||Yr),t}qr.Cache=Yr;var Hr=qr;var Jr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kr=/\\(\\)?/g,Qr=function(r){var e=Hr(r,(function(r){return 500===t.size&&t.clear(),r})),t=e.cache;return e}((function(r){var e=[];return 46===r.charCodeAt(0)&&e.push(""),r.replace(Jr,(function(r,t,n,o){e.push(n?o.replace(Kr,"$1"):t||r)})),e}));var Wr=function(r,e){for(var t=-1,n=null==r?0:r.length,o=Array(n);++t<n;)o[t]=e(r[t],t,r);return o},Zr=c,re=C,ee=d?d.prototype:void 0,te=ee?ee.toString:void 0;var ne=function r(e){if("string"==typeof e)return e;if(Zr(e))return Wr(e,r)+"";if(re(e))return te?te.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},oe=ne;var ae=c,ce=x,ie=Qr,Fe=function(r){return null==r?"":oe(r)};var ue=C;var de=function(r,e){return ae(r)?r:ce(r,e)?[r]:ie(Fe(r))},le=function(r){if("string"==typeof r||ue(r))return r;var e=r+"";return"0"==e&&1/r==-1/0?"-0":e};var se=function(r,e){for(var t=0,n=(e=de(e,r)).length;null!=r&&t<n;)r=r[le(e[t++])];return t&&t==n?r:void 0};var Be=a((function(r,e,t){var n=null==r?void 0:se(r,e);return void 0===n?t:n}));const he=(r,e,t)=>e?Be(t,e)||Be(r,e):t||r;var ge;!function(r){r.colorScheme="colorScheme",r.layout="layout",r.textStyleScheme="textStyleScheme",r.designTokenScheme="designTokenScheme",r.resourceScheme="resourceScheme"}(ge||(ge={}));const pe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},fe=r=>e=>{const t=e.theme,n=((r,e)=>{const t=e||r.defaultValue;return Be(r.collections,t)})(pe,t[ge.colorScheme]);return t.options&&t.options.color?he(n,r,t.options.color):he(n,r)},Ee=(fe("Brand.1"),fe("Brand.2"),fe("Brand.3"),fe("Brand.4"),fe("Brand.5"),fe("Brand.6"),fe("Primary")),ye=(fe("PrimaryDark"),fe("Secondary"),fe("Accent.Light.1"),fe("Accent.Light.2"),fe("Accent.Light.3"),fe("Accent.Light.4"),fe("Accent.Light.5"),fe("Accent.Light.6"),fe("Accent.Dark.1"),fe("Accent.Dark.2"),fe("Accent.Dark.3"),{1:fe("Neutral.1"),2:fe("Neutral.2"),3:fe("Neutral.3"),4:fe("Neutral.4"),5:fe("Neutral.5"),6:fe("Neutral.6"),7:fe("Neutral.7"),8:fe("Neutral.8")}),ve=(fe("Validation.Green.Text"),fe("Validation.Green.Icon"),fe("Validation.Green.Border"),fe("Validation.Green.Background"),fe("Validation.Orange.Text"),fe("Validation.Orange.Icon"),fe("Validation.Orange.Border"),fe("Validation.Orange.Background"),fe("Validation.Orange.Badge"),fe("Validation.Red.Text"),fe("Validation.Red.Icon"),fe("Validation.Red.Border"),fe("Validation.Red.Background"),fe("Validation.Blue.Text"),fe("Validation.Blue.Icon"),fe("Validation.Blue.Border"),fe("Validation.Blue.Background"),fe("Shadow.Accent"),fe("Shadow.Red"),fe("Shadow.Elevation"),t.button`
    align-items: center;
    background-color: ${Ee};
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
                    border: 1px solid ${Ee};
                    color: ${Ee};
                `;case"light":return n`
                    background-color: ${ye[8]};
                    border: 1px solid ${ye[5]};
                    color: ${Ee};
                `;default:return n`
                    background-color: ${Ee};
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
`),De=e.forwardRef(((e,t)=>{var{"data-testid":n,styleType:o="primary",children:a,sizeType:c="default",type:i="button"}=e,F=function(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(r);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(t[n[o]]=r[n[o]])}return t}(e,["data-testid","styleType","children","sizeType","type"]);return r(ve,Object.assign({"data-testid":n||"iconButton",ref:t,type:i,$sizeType:c,$styleType:o},F,{children:a}))}));export{De as IconButton};
//# sourceMappingURL=index.js.map
