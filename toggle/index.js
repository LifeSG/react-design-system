import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import{ChevronDownIcon as n}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as i}from"@lifesg/react-icons/chevron-up";import*as o from"react";import{useRef as a,useState as l,isValidElement as s,createRef as c,cloneElement as d,PureComponent as u,useEffect as f,useLayoutEffect as h,useMemo as g}from"react";import{CircleIcon as m}from"@lifesg/react-icons/circle";import{CircleDotIcon as p}from"@lifesg/react-icons/circle-dot";import{CrossIcon as y}from"@lifesg/react-icons/cross";import{SquareIcon as $}from"@lifesg/react-icons/square";import{SquareTickFillIcon as v}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as b}from"@lifesg/react-icons/tick";import F,{css as S}from"styled-components";import{ArrowRightIcon as D}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as B}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as w}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as x}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as k}from"@lifesg/react-icons/tick-circle-fill";import{findDOMNode as H}from"react-dom";import{ChevronDownIcon as O}from"@lifesg/react-icons";import{ExternalIcon as E}from"@lifesg/react-icons/external";var A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function M(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var z=Array.isArray,T="object"==typeof A&&A&&A.Object===Object&&A,C="object"==typeof self&&self&&self.Object===Object&&self,_=T||C||Function("return this")(),j=_.Symbol,L=j,R=Object.prototype,W=R.hasOwnProperty,Y=R.toString,N=L?L.toStringTag:void 0;var I=function(e){var t=W.call(e,N),r=e[N];try{e[N]=void 0;var n=!0}catch(e){}var i=Y.call(e);return n&&(t?e[N]=r:delete e[N]),i},P=Object.prototype.toString;var V=I,Z=function(e){return P.call(e)},G=j?j.toStringTag:void 0;var U=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":G&&G in Object(e)?V(e):Z(e)};var X=U,q=function(e){return null!=e&&"object"==typeof e};var J=function(e){return"symbol"==typeof e||q(e)&&"[object Symbol]"==X(e)},Q=z,K=J,ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,te=/^\w*$/;var re=function(e,t){if(Q(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!K(e))||(te.test(e)||!ee.test(e)||null!=t&&e in Object(t))};var ne=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie=U,oe=ne;var ae,le=function(e){if(!oe(e))return!1;var t=ie(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},se=_["__core-js_shared__"],ce=(ae=/[^.]+$/.exec(se&&se.keys&&se.keys.IE_PROTO||""))?"Symbol(src)_1."+ae:"";var de=function(e){return!!ce&&ce in e},ue=Function.prototype.toString;var fe=le,he=de,ge=ne,me=function(e){if(null!=e){try{return ue.call(e)}catch(e){}try{return e+""}catch(e){}}return""},pe=/^\[object .+?Constructor\]$/,ye=Function.prototype,$e=Object.prototype,ve=ye.toString,be=$e.hasOwnProperty,Fe=RegExp("^"+ve.call(be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Se=function(e){return!(!ge(e)||he(e))&&(fe(e)?Fe:pe).test(me(e))},De=function(e,t){return null==e?void 0:e[t]};var Be=function(e,t){var r=De(e,t);return Se(r)?r:void 0},we=Be(Object,"create"),xe=we;var ke=function(){this.__data__=xe?xe(null):{},this.size=0};var He=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Oe=we,Ee=Object.prototype.hasOwnProperty;var Ae=function(e){var t=this.__data__;if(Oe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Ee.call(t,e)?t[e]:void 0},Me=we,ze=Object.prototype.hasOwnProperty;var Te=we;var Ce=ke,_e=He,je=Ae,Le=function(e){var t=this.__data__;return Me?void 0!==t[e]:ze.call(t,e)},Re=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Te&&void 0===t?"__lodash_hash_undefined__":t,this};function We(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}We.prototype.clear=Ce,We.prototype.delete=_e,We.prototype.get=je,We.prototype.has=Le,We.prototype.set=Re;var Ye=We;var Ne=function(){this.__data__=[],this.size=0};var Ie=function(e,t){return e===t||e!=e&&t!=t};var Pe=function(e,t){for(var r=e.length;r--;)if(Ie(e[r][0],t))return r;return-1},Ve=Pe,Ze=Array.prototype.splice;var Ge=Pe;var Ue=Pe;var Xe=Pe;var qe=Ne,Je=function(e){var t=this.__data__,r=Ve(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ze.call(t,r,1),--this.size,!0)},Qe=function(e){var t=this.__data__,r=Ge(t,e);return r<0?void 0:t[r][1]},Ke=function(e){return Ue(this.__data__,e)>-1},et=function(e,t){var r=this.__data__,n=Xe(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function tt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}tt.prototype.clear=qe,tt.prototype.delete=Je,tt.prototype.get=Qe,tt.prototype.has=Ke,tt.prototype.set=et;var rt=tt,nt=Be(_,"Map"),it=Ye,ot=rt,at=nt;var lt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var st=function(e,t){var r=e.__data__;return lt(t)?r["string"==typeof t?"string":"hash"]:r.map},ct=st;var dt=st;var ut=st;var ft=st;var ht=function(){this.size=0,this.__data__={hash:new it,map:new(at||ot),string:new it}},gt=function(e){var t=ct(this,e).delete(e);return this.size-=t?1:0,t},mt=function(e){return dt(this,e).get(e)},pt=function(e){return ut(this,e).has(e)},yt=function(e,t){var r=ft(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function $t(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}$t.prototype.clear=ht,$t.prototype.delete=gt,$t.prototype.get=mt,$t.prototype.has=pt,$t.prototype.set=yt;var vt=$t;function bt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(bt.Cache||vt),r}bt.Cache=vt;var Ft=bt;var St=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Dt=/\\(\\)?/g,Bt=function(e){var t=Ft(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(St,(function(e,r,n,i){t.push(n?i.replace(Dt,"$1"):r||e)})),t}));var wt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},xt=z,kt=J,Ht=j?j.prototype:void 0,Ot=Ht?Ht.toString:void 0;var Et=function e(t){if("string"==typeof t)return t;if(xt(t))return wt(t,e)+"";if(kt(t))return Ot?Ot.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},At=Et;var Mt=z,zt=re,Tt=Bt,Ct=function(e){return null==e?"":At(e)};var _t=J;var jt=function(e,t){return Mt(e)?e:zt(e,t)?[e]:Tt(Ct(e))},Lt=function(e){if("string"==typeof e||_t(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Rt=function(e,t){for(var r=0,n=(t=jt(t,e)).length;null!=e&&r<n;)e=e[Lt(t[r++])];return r&&r==n?e:void 0};var Wt=M((function(e,t,r){var n=null==e?void 0:Rt(e,t);return void 0===n?r:n}));const Yt=(e,t,r)=>t?Wt(r,t)||Wt(e,t):r||e,Nt=(e,t)=>{const r=t||e.defaultValue;return Wt(e.collections,r)};var It;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(It||(It={}));const Pt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Vt=e=>t=>{const r=t.theme,n=Nt(Pt,r[It.colorScheme]);return r.options&&r.options.color?Yt(n,e,r.options.color):Yt(n,e)},Zt={Brand:{1:Vt("Brand.1"),2:Vt("Brand.2"),3:Vt("Brand.3"),4:Vt("Brand.4"),5:Vt("Brand.5"),6:Vt("Brand.6")},Primary:Vt("Primary"),PrimaryDark:Vt("PrimaryDark"),Secondary:Vt("Secondary"),Accent:{Light:{1:Vt("Accent.Light.1"),2:Vt("Accent.Light.2"),3:Vt("Accent.Light.3"),4:Vt("Accent.Light.4"),5:Vt("Accent.Light.5"),6:Vt("Accent.Light.6")},Dark:{1:Vt("Accent.Dark.1"),2:Vt("Accent.Dark.2"),3:Vt("Accent.Dark.3")}},Neutral:{1:Vt("Neutral.1"),2:Vt("Neutral.2"),3:Vt("Neutral.3"),4:Vt("Neutral.4"),5:Vt("Neutral.5"),6:Vt("Neutral.6"),7:Vt("Neutral.7"),8:Vt("Neutral.8")},Validation:{Green:{Text:Vt("Validation.Green.Text"),Icon:Vt("Validation.Green.Icon"),Border:Vt("Validation.Green.Border"),Background:Vt("Validation.Green.Background")},Orange:{Text:Vt("Validation.Orange.Text"),Icon:Vt("Validation.Orange.Icon"),Border:Vt("Validation.Orange.Border"),Background:Vt("Validation.Orange.Background"),Badge:Vt("Validation.Orange.Badge")},Red:{Text:Vt("Validation.Red.Text"),Icon:Vt("Validation.Red.Icon"),Border:Vt("Validation.Red.Border"),Background:Vt("Validation.Red.Background")},Blue:{Text:Vt("Validation.Blue.Text"),Icon:Vt("Validation.Blue.Icon"),Border:Vt("Validation.Blue.Border"),Background:Vt("Validation.Blue.Background")}},Shadow:{Accent:Vt("Shadow.Accent"),Red:Vt("Shadow.Red"),Elevation:Vt("Shadow.Elevation")}},Gt=F.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?S`
                    color: ${Zt.Primary};
                `:S`
                    color: ${Zt.Neutral[4]};
                `};
    }
`,Ut=({type:t,active:r=!1,disabled:n,className:i})=>{let o;switch(t){case"checkbox":o=e(r?v:$,{});break;case"radio":o=e(r?p:m,{});break;case"tick":o=e(b,{});break;case"cross":o=e(y,{});break;default:o=null}return e(Gt,Object.assign({className:i,$active:r,disabled:n},{children:o}))};var Xt={exports:{}};Xt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,l("seconds")],ss:[n,l("seconds")],m:[n,l("minutes")],mm:[n,l("minutes")],H:[n,l("hours")],h:[n,l("hours")],HH:[n,l("hours")],hh:[n,l("hours")],D:[n,l("day")],DD:[r,l("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,l("month")],MM:[r,l("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function f(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var c=a[s],d=u[c],f=d&&d[0],h=d&&d[1];a[s]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<l;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,s=i.parser,c=e.slice(n),d=o.exec(c)[0];s.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],d=s||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!s&&u&&(o=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),i=n.year,o=n.month,a=n.day,l=n.hours,s=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,h=new Date,g=a||(i||o?1:h.getDate()),m=i||h.getFullYear(),p=0;i&&!o||(p=o>0?o-1:h.getMonth());var y=l||0,$=s||0,v=c||0,b=d||0;return u?new Date(Date.UTC(m,p,g,y,$,v,b+60*u.offset*1e3)):r?new Date(Date.UTC(m,p,g,y,$,v,b)):new Date(m,p,g,y,$,v,b)}catch(e){return new Date("")}}(t,l,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(l)&&(this.$d=new Date("")),o={}}else if(l instanceof Array)for(var h=l.length,g=1;g<=h;g+=1){a[1]=l[g-1];var m=r.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var qt,Jt,Qt=M(Xt.exports),Kt={exports:{}},er=M(Kt.exports=(qt={year:0,month:1,day:2,hour:3,minute:4,second:5},Jt={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Jt[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Jt[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var l=n[a],s=l.type,c=l.value,d=qt[s];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],f=24===u?0:u,h=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",g=+e;return(r.utc(h).valueOf()-(g-=g%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),l=Math.round((o-new Date(a))/1e3/60),s=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,l=i||t||n,s=o(+r(),l);if("string"!=typeof e)return r(e).tz(l);var c=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),s,l),d=c[0],u=c[1],f=r(d).utcOffset(u);return f.$x.$timezone=l,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),tr={exports:{}};tr.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",l="day",s="week",c="month",d="quarter",u="year",f="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},$={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,a=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:s,d:l,D:f,h:a,m:o,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",b={};b[v]=p;var F="$isDayjsObject",S=function(e){return e instanceof x||!(!e||!e[F])},D=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();b[o]&&(i=o),r&&(b[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var l=t.name;b[l]=t,i=l}return!n&&i&&(v=i),i||!n&&v},B=function(e,t){if(S(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new x(r)},w=$;w.l=D,w.i=S,w.w=function(e,t){return B(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function p(e){this.$L=D(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var y=p.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var r=B(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return B(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<B(e)},y.$g=function(e,t,r){return w.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!w.u(t)||t,d=w.p(e),h=function(e,t){var i=w.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(l)},g=function(e,t){return w.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,p=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case u:return n?h(1,0):h(31,11);case c:return n?h(1,p):h(0,p+1);case s:var v=this.$locale().weekStart||0,b=(m<v?m+7:m)-v;return h(n?y-b:y+(6-b),p);case l:case f:return g($+"Hours",0);case a:return g($+"Minutes",1);case o:return g($+"Seconds",2);case i:return g($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,s=w.p(e),d="set"+(this.$u?"UTC":""),h=(r={},r[l]=d+"Date",r[f]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[a]=d+"Hours",r[o]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===u){var m=this.clone().set(f,1);m.$d[h](g),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[w.p(e)]()},y.add=function(n,d){var f,h=this;n=Number(n);var g=w.p(d),m=function(e){var t=B(h);return w.w(t.date(t.date()+Math.round(e*n)),h)};if(g===c)return this.set(c,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===l)return m(1);if(g===s)return m(7);var p=(f={},f[o]=t,f[a]=r,f[i]=e,f)[g]||1,y=this.$d.getTime()+n*p;return w.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),o=this.$H,a=this.$m,l=this.$M,s=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},f=function(e){return w.s(o%12||12,e,"0")},g=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return l+1;case"MM":return w.s(l+1,2,"0");case"MMM":return u(r.monthsShort,l,c,3);case"MMMM":return u(c,l);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,s,2);case"ddd":return u(r.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(o);case"HH":return w.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(o,a,!0);case"A":return g(o,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,f,h){var g,m=this,p=w.p(f),y=B(n),$=(y.utcOffset()-this.utcOffset())*t,v=this-y,b=function(){return w.m(m,y)};switch(p){case u:g=b()/12;break;case c:g=b();break;case d:g=b()/3;break;case s:g=(v-$)/6048e5;break;case l:g=(v-$)/864e5;break;case a:g=v/r;break;case o:g=v/t;break;case i:g=v/e;break;default:g=v}return h?g:w.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return b[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=D(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},p}(),k=x.prototype;return B.prototype=k,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",l],["$M",c],["$y",u],["$D",f]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),B.extend=function(e,t){return e.$i||(e(t,x,B),e.$i=!0),B},B.locale=D,B.isDayjs=S,B.unix=function(e){return B(1e3*e)},B.en=b[v],B.Ls=b,B.p={},B}();var rr=M(tr.exports),nr={exports:{}};nr.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(o,n):!this.isBefore(o,n))&&(s?this.isBefore(a,n):!this.isAfter(a,n))||(l?this.isBefore(o,n):!this.isAfter(o,n))&&(s?this.isAfter(a,n):!this.isBefore(a,n))}};var ir=M(nr.exports),or={exports:{}};or.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var ar=M(or.exports),lr={exports:{}};lr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var sr,cr=M(lr.exports);rr.extend(ir),rr.extend(ar),rr.extend(cr),rr.extend(Qt),rr.extend(er),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=rr(t).startOf("week");return dr(r).map((e=>ur(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return ur(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(rr(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+rr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=rr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?rr(n):void 0,i?rr(i):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(sr||(sr={}));const dr=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},ur=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},fr=[1,3,5,7,8,10,12],hr=[4,6,9,11];var gr,mr,pr,yr;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":fr.includes(o)?Math.min(i,31).toString():hr.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=rr(e,r);return rr(t,r).diff(n,"minute")},e.toDayjs=e=>e?rr(e):rr(),e.addMinutesToTime=(e,t,r="HH:mm")=>rr(e,r).add(t,"minutes").format(r)}(gr||(gr={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!rr(e).isBefore(n,"day"))||!(!i||!rr(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(rr(e).isValid())return e}return""}}(mr||(mr={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(pr||(pr={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:l}=r;if(l)return l(e);if(a)return e.replace(a,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(yr||(yr={}));var $r=function(e,t){return $r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},$r(e,t)};var vr=function(){return vr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},vr.apply(this,arguments)};var br="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Fr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Sr="object"==typeof br&&br&&br.Object===Object&&br,Dr="object"==typeof self&&self&&self.Object===Object&&self,Br=Sr||Dr||Function("return this")(),wr=Br,xr=function(){return wr.Date.now()},kr=/\s/;var Hr=function(e){for(var t=e.length;t--&&kr.test(e.charAt(t)););return t},Or=/^\s+/;var Er=function(e){return e?e.slice(0,Hr(e)+1).replace(Or,""):e},Ar=Br.Symbol,Mr=Ar,zr=Object.prototype,Tr=zr.hasOwnProperty,Cr=zr.toString,_r=Mr?Mr.toStringTag:void 0;var jr=function(e){var t=Tr.call(e,_r),r=e[_r];try{e[_r]=void 0;var n=!0}catch(e){}var i=Cr.call(e);return n&&(t?e[_r]=r:delete e[_r]),i},Lr=Object.prototype.toString;var Rr=jr,Wr=function(e){return Lr.call(e)},Yr=Ar?Ar.toStringTag:void 0;var Nr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Yr&&Yr in Object(e)?Rr(e):Wr(e)},Ir=function(e){return null!=e&&"object"==typeof e};var Pr=Er,Vr=Fr,Zr=function(e){return"symbol"==typeof e||Ir(e)&&"[object Symbol]"==Nr(e)},Gr=/^[-+]0x[0-9a-f]+$/i,Ur=/^0b[01]+$/i,Xr=/^0o[0-7]+$/i,qr=parseInt;var Jr=Fr,Qr=xr,Kr=function(e){if("number"==typeof e)return e;if(Zr(e))return NaN;if(Vr(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Vr(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Pr(e);var r=Ur.test(e);return r||Xr.test(e)?qr(e.slice(2),r?2:8):Gr.test(e)?NaN:+e},en=Math.max,tn=Math.min;var rn=function(e,t,r){var n,i,o,a,l,s,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function g(e){var r=e-s;return void 0===s||r>=t||r<0||u&&e-c>=o}function m(){var e=Qr();if(g(e))return p(e);l=setTimeout(m,function(e){var r=t-(e-s);return u?tn(r,o-(e-c)):r}(e))}function p(e){return l=void 0,f&&n?h(e):(n=i=void 0,a)}function y(){var e=Qr(),r=g(e);if(n=arguments,i=this,s=e,r){if(void 0===l)return function(e){return c=e,l=setTimeout(m,t),d?h(e):a}(s);if(u)return clearTimeout(l),l=setTimeout(m,t),h(s)}return void 0===l&&(l=setTimeout(m,t)),a}return t=Kr(t)||0,Jr(r)&&(d=!!r.leading,o=(u="maxWait"in r)?en(Kr(r.maxWait)||0,t):o,f="trailing"in r?!!r.trailing:f),y.cancel=function(){void 0!==l&&clearTimeout(l),c=0,n=s=i=l=void 0},y.flush=function(){return void 0===l?a:p(Qr())},y},nn=rn,on=Fr;var an=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return on(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),nn(e,t,{leading:n,maxWait:t,trailing:i})},ln=function(e,t,r,n){switch(t){case"debounce":return rn(e,r,n);case"throttle":return an(e,r,n);default:return e}},sn=function(e){return"function"==typeof e},cn=function(){return"undefined"==typeof window},dn=function(e){return e instanceof Element||e instanceof HTMLDocument},un=function(e,t,r,n){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!n||t.height===a&&!r?t:(e&&sn(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!cn()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(cn())return null;if(t)return document.querySelector(t);if(n&&dn(n))return n;if(r.targetRef&&dn(r.targetRef.current))return r.targetRef.current;var i=H(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,o=t.handleHeight,a=void 0===o||o,l=t.onResize;if(i||a){var s=un(l,r.setState.bind(r),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!cn()&&s({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return sn(t)?"renderProp":sn(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,l=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=c(),r.observableElement=null,cn()||(r.resizeHandler=ln(r.createResizeHandler,i,a,l),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}$r(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){cn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,n=t.children,i=t.nodeType,a=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(s);case"childFunction":return(e=n)(s);case"child":if((e=n).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(s,["targetRef"]);return d(e,c)}return d(e,s);case"childArray":return(e=n).map((function(e){return!!e&&d(e,s)}));default:return o.createElement(a,null)}}}(u);var fn=cn()?f:h;function hn(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;const gn={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},mn={collections:{base:{D1:{fontFamily:gn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:gn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:gn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:gn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:gn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:gn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:gn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:gn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:gn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:gn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:gn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:gn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:gn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:gn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oneservice:{D1:{fontFamily:gn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:gn.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:gn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:gn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:gn.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:gn.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:gn.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:gn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:gn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:gn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:gn.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:gn.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:gn.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:gn.Regular,fontSize:.75,lineHeight:1.125}}},defaultValue:"base"},pn=e=>t=>{const r=t.theme,n=Nt(mn,r[It.textStyleScheme]);return r.options&&r.options.textStyle?Yt(n,e,r.options.textStyle):Yt(n,e)},yn={D1:{fontFamily:pn("D1.fontFamily"),fontSize:pn("D1.fontSize"),fontWeight:pn("D1.fontWeight"),lineHeight:pn("D1.lineHeight"),letterSpacing:pn("D1.letterSpacing")},D2:{fontFamily:pn("D2.fontFamily"),fontSize:pn("D2.fontSize"),fontWeight:pn("D2.fontWeight"),lineHeight:pn("D2.lineHeight"),letterSpacing:pn("D2.letterSpacing")},D3:{fontFamily:pn("D3.fontFamily"),fontSize:pn("D3.fontSize"),fontWeight:pn("D3.fontWeight"),lineHeight:pn("D3.lineHeight"),letterSpacing:pn("D3.letterSpacing")},D4:{fontFamily:pn("D4.fontFamily"),fontSize:pn("D4.fontSize"),fontWeight:pn("D4.fontWeight"),lineHeight:pn("D4.lineHeight"),letterSpacing:pn("D4.letterSpacing")},DBody:{fontFamily:pn("DBody.fontFamily"),fontSize:pn("DBody.fontSize"),fontWeight:pn("DBody.fontWeight"),lineHeight:pn("DBody.lineHeight"),letterSpacing:pn("DBody.letterSpacing")},H1:{fontFamily:pn("H1.fontFamily"),fontSize:pn("H1.fontSize"),fontWeight:pn("H1.fontWeight"),lineHeight:pn("H1.lineHeight"),letterSpacing:pn("H1.letterSpacing")},H2:{fontFamily:pn("H2.fontFamily"),fontSize:pn("H2.fontSize"),fontWeight:pn("H2.fontWeight"),lineHeight:pn("H2.lineHeight"),letterSpacing:pn("H2.letterSpacing")},H3:{fontFamily:pn("H3.fontFamily"),fontSize:pn("H3.fontSize"),fontWeight:pn("H3.fontWeight"),lineHeight:pn("H3.lineHeight"),letterSpacing:pn("H3.letterSpacing")},H4:{fontFamily:pn("H4.fontFamily"),fontSize:pn("H4.fontSize"),fontWeight:pn("H4.fontWeight"),lineHeight:pn("H4.lineHeight"),letterSpacing:pn("H4.letterSpacing")},H5:{fontFamily:pn("H5.fontFamily"),fontSize:pn("H5.fontSize"),fontWeight:pn("H5.fontWeight"),lineHeight:pn("H5.lineHeight"),letterSpacing:pn("H5.letterSpacing")},H6:{fontFamily:pn("H6.fontFamily"),fontSize:pn("H6.fontSize"),fontWeight:pn("H6.fontWeight"),lineHeight:pn("H6.lineHeight"),letterSpacing:pn("H6.letterSpacing")},Body:{fontFamily:pn("Body.fontFamily"),fontSize:pn("Body.fontSize"),fontWeight:pn("Body.fontWeight"),lineHeight:pn("Body.lineHeight"),letterSpacing:pn("Body.letterSpacing")},BodySmall:{fontFamily:pn("BodySmall.fontFamily"),fontSize:pn("BodySmall.fontSize"),fontWeight:pn("BodySmall.fontWeight"),lineHeight:pn("BodySmall.lineHeight"),letterSpacing:pn("BodySmall.letterSpacing")},XSmall:{fontFamily:pn("XSmall.fontFamily"),fontSize:pn("XSmall.fontSize"),fontWeight:pn("XSmall.fontWeight"),lineHeight:pn("XSmall.lineHeight"),letterSpacing:pn("XSmall.letterSpacing")}},$n=e=>{switch(e){case 700:case"bold":return gn.Bold;case 600:case"semibold":return gn.Semibold;case 300:case"light":return gn.Light;case 400:case"regular":return gn.Regular;default:return""}},vn=(e,t)=>r=>{var n;const i=yn[e].fontFamily(r),o=yn[e].fontWeight(r);return Object.values(gn).includes(i)?S`
                font-family: ${$n(t)||$n(o)||i};
                font-weight: normal !important;
            `:S`
            font-family: ${i};
            font-weight: ${null!==(n=bn(t)||o)&&void 0!==n?n:"normal"};
        `},bn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Fn=e=>{if(e>0)return S`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Sn=vn,Dn=(e,t,r=!1)=>n=>{const i=yn[e],o=i.fontSize(n);return S`
            ${vn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${S`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Bn=(e=!1,t=!1,r=void 0)=>t?S`
            display: block;
            ${Fn(r)}
        `:e?S`
            display: inline;
        `:S`
            display: block;
            ${Fn(r)}
        `;var wn;!function(e){e.D1=F.h1`
        ${e=>S`
                ${Dn("D1",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${Bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=F.h1`
        ${e=>S`
                ${Dn("D2",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${Bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=F.h1`
        ${e=>S`
                ${Dn("D3",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${Bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=F.h1`
        ${e=>S`
                ${Dn("D4",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${Bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=F.h1`
        ${e=>S`
                ${Dn("DBody",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${Bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=F.h1`
        ${e=>S`
                ${Dn("H1",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${Bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=F.h2`
        ${e=>S`
                ${Dn("H2",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${Bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=F.h3`
        ${e=>S`
                ${Dn("H3",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${Bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=F.h4`
        ${e=>S`
                ${Dn("H4",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${Bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=F.h5`
        ${e=>S`
                ${Dn("H5",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${Bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=F.h6`
        ${e=>S`
                ${Dn("H6",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${Bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=F.p`
        ${e=>S`
                ${Dn("Body",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${Bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=F.p`
        ${e=>S`
                ${Dn("BodySmall",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${Bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=F.span`
        ${e=>S`
                ${Dn("XSmall",e.weight,e.paragraph)}
                color: ${Zt.Neutral[1]};
                ${Bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Hn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Hn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(wn||(wn={}));const xn=F.a`
    ${e=>S`
            ${Dn(e.textStyle,e.weight)}
            color: ${Zt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Zt.Secondary};

                svg {
                    color: ${Zt.Secondary};
                }
            }
        `}
`,kn=F(E)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Hn=r=>{var{external:n=!1,children:i}=r,o=hn(r,["external","children"]);return t(xn,Object.assign({},o,{children:[i,n&&e(kn,{})]}))};var On;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(On||(On={}));const En=e=>{const{textSize:t}=e||{};return S`
        // Text styling
        ${t&&Dn(t,"regular")}

        strong {
            font-family: ${gn.Semibold};
            ${t&&Dn(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${gn.Semibold};
            ${t&&Dn(t,"semibold")}
            color: ${Zt.Primary};
            text-decoration: none;

            svg {
                color: ${Zt.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Zt.Secondary};

                svg {
                    color: ${Zt.Secondary};
                }
            }
        }

        // List styling
        ul,
        ol {
            margin: 0;
            padding: 0;
            margin-left: 2.5rem;
        }

        ol {
            list-style: decimal;
        }

        ul {
            list-style: disc;
        }
    `},An=F.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Zt.Validation.Red.Background(e),r=Zt.Validation.Red.Border(e);break;case"success":t=Zt.Validation.Green.Background(e),r=Zt.Validation.Green.Border(e);break;case"warning":default:t=Zt.Validation.Orange.Background(e),r=Zt.Validation.Orange.Border(e);break;case"info":t=Zt.Validation.Blue.Background(e),r=Zt.Validation.Blue.Border(e);break;case"description":t=Zt.Neutral[7](e),r=Zt.Neutral[4](e)}return S`
            background: ${t};
            border-left: 2px solid ${r};
        `}}

    color: ${Zt.Neutral[1]};
    ${e=>"small"===e.$sizeType?En({textSize:"H6"}):En({textSize:"BodySmall"})}
`,Mn=F.div`
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&S`
            display: flex;
            align-items: center;
            height: 1.625rem;
        `}

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Zt.Validation.Red.Icon(e);break;case"success":t=Zt.Validation.Green.Icon(e);break;case"warning":default:t=Zt.Validation.Orange.Icon(e);break;case"info":t=Zt.Validation.Blue.Icon(e);break;case"description":t=Zt.Neutral[4](e)}return S`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,zn=F(wn.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?S`
                ${Dn("H6","semibold")}
                margin-top: 0.25rem;
            `:S`
                ${Dn("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${Zt.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${Zt.Primary};
    }
`,Tn=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Cn=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,_n=F.button`
    ${e=>"small"===e.$sizeType?S`
                ${Dn("H6","semibold")}
            `:S`
                ${Dn("H5","semibold")}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 0.25rem;
    margin-top: 0.5rem;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Zt.Primary};
`,jn=F(O)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,Ln={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Rn=e=>Object.keys(Ln).reduce(((t,r)=>{const n=Ln[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Wn=Rn("max-width"),Yn=(Rn("min-width"),e=>`\n\tmargin-bottom: ${e||0}rem;\n`),Nn=(F.ol`
    ${e=>Yn(e.bottomMargin)}
    margin-left: ${3}rem;

    ${Wn.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>Dn(e.size,"regular")}
        position: relative;
        color: ${Zt.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,r=e.counterType||"decimal",n=e.counterSeparator||")";return S`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return S`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    ul > li:before {
        content: "";
    }
`,F.ul`
    ${e=>Yn(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>Dn(e.size,"regular")}
        color: ${Zt.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`),In=t=>{var{size:r="Body",children:n}=t,i=hn(t,["size","children"]);return e(Nn,Object.assign({size:r},i,{children:n}))},Pn=F.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;

    // Content positioning style
    ${e=>{if(!e.$indicator)return S`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return S`
                min-width: unset;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?S`
                        border-color: ${Zt.Validation.Red.Icon};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Zt.Shadow.Red};
                        }
                    `:e.$disabled?S`
                        border-color: transparent;
                    `:S`
                        border-color: transparent;

                        :hover {
                            background: ${Zt.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?S`
                        border-color: ${Zt.Neutral[5]};
                    `:e.$disabled&&e.$selected?S`
                        border-color: ${Zt.Neutral[4]};
                    `:e.$error?S`
                        border-color: ${Zt.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Zt.Shadow.Red};
                        }
                    `:e.$selected?S`
                        border-color: ${Zt.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Zt.Shadow.Accent};
                        }
                    `:S`
                        background: ${Zt.Neutral[8]};
                        border-color: ${Zt.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Zt.Shadow.Accent};
                            border-color: ${Zt.Accent.Light[1]};
                        }
                    `}
`,Vn=F.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,Zn=F.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,Gn=F.label`
    ${e=>e.$selected&&!e.$indicator?S`
                ${Dn("H4","semibold")}
            `:S`
                ${Dn("H4","regular")}
            `}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Wn.tablet} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Wn.mobileL} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
    color: ${Zt.Neutral[1]};

    ${e=>e.$disabled?S`
                color: ${Zt.Neutral[3]};
            `:e.$selected?S`
                color: ${Zt.Primary};
            `:void 0}
`,Un=F.div`
    ${Dn("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Sn("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?S`
                color: ${Zt.Neutral[3]};
            `:e.$selected?S`
                color: ${Zt.Primary};
            `:S`
                color: ${Zt.Neutral[1]};
            `}
`,Xn=F.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?S`
                        background: ${Zt.Neutral[8]};
                    `:e.$disabled?S``:S`
                        :hover {
                            background: ${Zt.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected||e.$disabled&&e.$selected?S`
                        background: ${Zt.Neutral[6]};
                    `:e.$error?S`
                        background: ${Zt.Neutral[8]};
                    `:e.$selected?S`
                        background: ${Zt.Accent.Light[5]};
                    `:S`
                        background: ${Zt.Neutral[8]};
                    `}
`,qn=F.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Jn=F.button`
    color: ${e=>e.$disabled?Zt.Neutral[3]:Zt.Validation.Red.Icon};
    white-space: nowrap;
    ${Dn("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Qn=F.button`
    color: ${e=>e.disabled?Zt.Neutral[3]:Zt.Primary};
    ${Dn("H4","semibold")}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background: none;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1.125rem;
        height: 1.125rem;
        margin-left: 0.5rem;
    }
`,Kn=F.div`
    width: 100%;
    color: ${e=>e.$disabled?Zt.Neutral[3]:Zt.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,ei=F((r=>{var{type:n,className:i,children:o,actionLink:s,actionLinkIcon:c,sizeType:d="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:g}=r,m=hn(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[p,y]=l(!1),[$,v]=l(!1),{height:b,ref:F}=function(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,s=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,f=void 0===u||u,h=e.targetRef,g=e.observerOptions,m=e.onResize,p=a(r),y=a(null),$=null!=h?h:y,v=a(),b=l({width:void 0,height:void 0}),F=b[0],S=b[1];return fn((function(){if(!cn()){var e=un(m,S,d,f);v.current=ln((function(t){(d||f)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!p.current&&!cn()&&e({width:n,height:i}),p.current=!1}))}),n,o,s);var t=new window.ResizeObserver(v.current);return $.current&&t.observe($.current,g),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,o,s,d,f,m,g,$.current]),vr({ref:$},F)}();f((()=>{S()}),[g,b]);const S=()=>{y(!g),v(H())},H=()=>!!g&&b>g;return t(An,Object.assign({className:i,$type:n,$sizeType:d,"data-testid":m["data-testid"]},{children:[u&&e(Mn,Object.assign({$sizeType:d,$type:n},{children:(()=>{if(n&&h)return h;switch(n){case"success":return e(k,{});case"warning":return e(w,{});case"error":return e(B,{});case"info":case"description":return e(x,{});default:return null}})()})),t(Tn,{children:[t(Cn,Object.assign({$maxCollapsedHeight:H()?g:void 0,$showMore:p,$hasActionLink:!!s},{children:[e("div",Object.assign({ref:F},{children:o})),s&&t(zn,Object.assign({"data-testid":"action-link",$type:n,$sizeType:d},s,{children:[s.children,c||e(D,{})]}))]})),$&&t(_n,Object.assign({$sizeType:d,$type:n,type:"button",onClick:()=>y(!p)},{children:["Show ",p?"less":"more",e(jn,{$expanded:p})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,ti=F.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${En({textSize:"BodySmall"})}

    ${e=>e.$disabled?S`
                color: ${Zt.Neutral[3]};
            `:e.$selected?S`
                color: ${Zt.Primary};
            `:S`
                color: ${Zt.Neutral[1]};
            `}
`,ri=F(wn.BodySmall)`
    color: ${e=>e.$disabled?Zt.Neutral[3]:Zt.Validation.Red.Text};
`,ni=F(In)`
    li {
        color: ${e=>e.$disabled?Zt.Neutral[3]:Zt.Validation.Red.Text};
    }
`,ii=({type:o="checkbox",indicator:s,checked:c,styleType:d="default",children:u,childrenMaxLines:h,subLabel:m,disabled:p,error:y,name:$,id:v,className:b,compositeSection:F,removable:S,onRemove:D,"data-testid":B,onChange:w,useContentWidth:x})=>{const{collapsible:k=!0,errors:H,children:O,initialExpanded:E}=F||{},[A,M]=l(c),[z,T]=l(E),C=g((()=>{const e=Array.isArray(H)&&(null==H?void 0:H.length)>0,t=!Array.isArray(H)&&!!H;return e||t}),[H]),[_]=l(pr.generate()),j=v?`${v}`:`tg-${_}`,L=a();f((()=>{M(c)}),[c]),f((()=>{A&&T(null==E||E)}),[A]);const R=e=>{if(!p){if(w)return void w(e);switch(o){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":A||M(!0)}}},W=()=>{p||T(!z)},Y=()=>{p||!D||D()},N=()=>{let t;switch(o){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=o}return e(Ut,{type:t,active:A,disabled:p})},I=()=>{if(!m)return null;let t;return t="function"==typeof m?m():m,e(Un,Object.assign({"data-id":"toggle-sublabel",$disabled:p,$selected:A},{children:t}))},P=()=>{const r=!z&&!C;return k&&t(Qn,Object.assign({$paddingTopRequired:r,disabled:p,onClick:W,"data-testid":z?"collapse-button":"expand-button"},{children:[z?"Show less":"Show more",e(z?i:n,{"aria-hidden":!0})]}))},V=n=>t(r,{children:[e(ri,Object.assign({weight:"semibold",$disabled:p},{children:"Error"})),e(ni,Object.assign({$disabled:p},{children:null==n?void 0:n.map(((t,r)=>e("li",Object.assign({id:`${j}-error-list-item-${r}`},{children:e(ri,Object.assign({weight:"semibold",$disabled:p},{children:t}))}),r)))}))]});return t(Pn,Object.assign({$selected:A,$disabled:p,className:b,$styleType:d,$error:y,$indicator:s,$useContentWidth:x,id:v,"data-testid":B},{children:[t(Xn,Object.assign({id:`${j}-header-container`,$disabled:p,$error:y,$selected:A,$indicator:s,$styleType:d},{children:[t(qn,Object.assign({$addPadding:S},{children:[e(Vn,{ref:L,name:$,id:`${j}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:p,onChange:R,checked:A}),s&&N(),t(Zn,{children:[e(Gn,Object.assign({htmlFor:`${j}-input`,$selected:A,$indicator:s,$disabled:p,"data-testid":`${j}-toggle-label`,$maxLines:h},{children:u})),m&&I()]})]})),S&&e(Jn,Object.assign({type:"button",$disabled:p,onClick:Y,id:`${j}-remove-button`},{children:"Remove"}))]})),O&&t("div",{children:[(!k||z)&&e(ti,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:p},{children:O})),k&&!z&&C&&e(Kn,Object.assign({$disabled:p,onClick:W,id:`${j}-error-alert`},{children:e(ei,Object.assign({type:p?"description":"error",className:b,showIcon:!0},{children:Array.isArray(H)?V(H):H}))})),P()]})]}))};export{ii as Toggle};
//# sourceMappingURL=index.js.map
