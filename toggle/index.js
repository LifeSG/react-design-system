import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import{ChevronDownIcon as n}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as i}from"@lifesg/react-icons/chevron-up";import*as a from"react";import{useRef as o,useState as s,isValidElement as l,createRef as c,cloneElement as d,PureComponent as u,useEffect as f,useLayoutEffect as h,useMemo as g}from"react";import{CircleIcon as p}from"@lifesg/react-icons/circle";import{CircleDotIcon as m}from"@lifesg/react-icons/circle-dot";import{CrossIcon as y}from"@lifesg/react-icons/cross";import{SquareIcon as $}from"@lifesg/react-icons/square";import{SquareTickFillIcon as v}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as b}from"@lifesg/react-icons/tick";import F,{css as S}from"styled-components";import{ArrowRightIcon as D}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as B}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as w}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as x}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as k}from"@lifesg/react-icons/tick-circle-fill";import{findDOMNode as O}from"react-dom";import{ChevronDownIcon as H}from"@lifesg/react-icons";import{ExternalIcon as E}from"@lifesg/react-icons/external";var M="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function A(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var z=Array.isArray,T="object"==typeof M&&M&&M.Object===Object&&M,_="object"==typeof self&&self&&self.Object===Object&&self,j=T||_||Function("return this")(),C=j.Symbol,L=C,Y=Object.prototype,R=Y.hasOwnProperty,N=Y.toString,W=L?L.toStringTag:void 0;var I=function(e){var t=R.call(e,W),r=e[W];try{e[W]=void 0;var n=!0}catch(e){}var i=N.call(e);return n&&(t?e[W]=r:delete e[W]),i},P=Object.prototype.toString;var V=I,Z=function(e){return P.call(e)},G=C?C.toStringTag:void 0;var U=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":G&&G in Object(e)?V(e):Z(e)};var X=U,q=function(e){return null!=e&&"object"==typeof e};var J=function(e){return"symbol"==typeof e||q(e)&&"[object Symbol]"==X(e)},Q=z,K=J,ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,te=/^\w*$/;var re=function(e,t){if(Q(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!K(e))||(te.test(e)||!ee.test(e)||null!=t&&e in Object(t))};var ne=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie=U,ae=ne;var oe,se=function(e){if(!ae(e))return!1;var t=ie(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},le=j["__core-js_shared__"],ce=(oe=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||""))?"Symbol(src)_1."+oe:"";var de=function(e){return!!ce&&ce in e},ue=Function.prototype.toString;var fe=se,he=de,ge=ne,pe=function(e){if(null!=e){try{return ue.call(e)}catch(e){}try{return e+""}catch(e){}}return""},me=/^\[object .+?Constructor\]$/,ye=Function.prototype,$e=Object.prototype,ve=ye.toString,be=$e.hasOwnProperty,Fe=RegExp("^"+ve.call(be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Se=function(e){return!(!ge(e)||he(e))&&(fe(e)?Fe:me).test(pe(e))},De=function(e,t){return null==e?void 0:e[t]};var Be=function(e,t){var r=De(e,t);return Se(r)?r:void 0},we=Be(Object,"create"),xe=we;var ke=function(){this.__data__=xe?xe(null):{},this.size=0};var Oe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},He=we,Ee=Object.prototype.hasOwnProperty;var Me=function(e){var t=this.__data__;if(He){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Ee.call(t,e)?t[e]:void 0},Ae=we,ze=Object.prototype.hasOwnProperty;var Te=we;var _e=ke,je=Oe,Ce=Me,Le=function(e){var t=this.__data__;return Ae?void 0!==t[e]:ze.call(t,e)},Ye=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Te&&void 0===t?"__lodash_hash_undefined__":t,this};function Re(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Re.prototype.clear=_e,Re.prototype.delete=je,Re.prototype.get=Ce,Re.prototype.has=Le,Re.prototype.set=Ye;var Ne=Re;var We=function(){this.__data__=[],this.size=0};var Ie=function(e,t){return e===t||e!=e&&t!=t};var Pe=function(e,t){for(var r=e.length;r--;)if(Ie(e[r][0],t))return r;return-1},Ve=Pe,Ze=Array.prototype.splice;var Ge=Pe;var Ue=Pe;var Xe=Pe;var qe=We,Je=function(e){var t=this.__data__,r=Ve(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ze.call(t,r,1),--this.size,!0)},Qe=function(e){var t=this.__data__,r=Ge(t,e);return r<0?void 0:t[r][1]},Ke=function(e){return Ue(this.__data__,e)>-1},et=function(e,t){var r=this.__data__,n=Xe(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function tt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}tt.prototype.clear=qe,tt.prototype.delete=Je,tt.prototype.get=Qe,tt.prototype.has=Ke,tt.prototype.set=et;var rt=tt,nt=Be(j,"Map"),it=Ne,at=rt,ot=nt;var st=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var lt=function(e,t){var r=e.__data__;return st(t)?r["string"==typeof t?"string":"hash"]:r.map},ct=lt;var dt=lt;var ut=lt;var ft=lt;var ht=function(){this.size=0,this.__data__={hash:new it,map:new(ot||at),string:new it}},gt=function(e){var t=ct(this,e).delete(e);return this.size-=t?1:0,t},pt=function(e){return dt(this,e).get(e)},mt=function(e){return ut(this,e).has(e)},yt=function(e,t){var r=ft(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function $t(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}$t.prototype.clear=ht,$t.prototype.delete=gt,$t.prototype.get=pt,$t.prototype.has=mt,$t.prototype.set=yt;var vt=$t;function bt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(bt.Cache||vt),r}bt.Cache=vt;var Ft=bt;var St=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Dt=/\\(\\)?/g,Bt=function(e){var t=Ft(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(St,(function(e,r,n,i){t.push(n?i.replace(Dt,"$1"):r||e)})),t}));var wt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},xt=z,kt=J,Ot=C?C.prototype:void 0,Ht=Ot?Ot.toString:void 0;var Et=function e(t){if("string"==typeof t)return t;if(xt(t))return wt(t,e)+"";if(kt(t))return Ht?Ht.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Mt=Et;var At=z,zt=re,Tt=Bt,_t=function(e){return null==e?"":Mt(e)};var jt=J;var Ct=function(e,t){return At(e)?e:zt(e,t)?[e]:Tt(_t(e))},Lt=function(e){if("string"==typeof e||jt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Yt=function(e,t){for(var r=0,n=(t=Ct(t,e)).length;null!=e&&r<n;)e=e[Lt(t[r++])];return r&&r==n?e:void 0};var Rt=A((function(e,t,r){var n=null==e?void 0:Yt(e,t);return void 0===n?r:n}));const Nt=(e,t,r)=>t?Rt(r,t)||Rt(e,t):r||e,Wt=(e,t)=>{const r=t||e.defaultValue;return Rt(e.collections,r)};var It;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(It||(It={}));const Pt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Vt=e=>t=>{const r=t.theme,n=Wt(Pt,r[It.colorScheme]);return r.options&&r.options.color?Nt(n,e,r.options.color):Nt(n,e)},Zt={Brand:{1:Vt("Brand.1"),2:Vt("Brand.2"),3:Vt("Brand.3"),4:Vt("Brand.4"),5:Vt("Brand.5"),6:Vt("Brand.6")},Primary:Vt("Primary"),PrimaryDark:Vt("PrimaryDark"),Secondary:Vt("Secondary"),Accent:{Light:{1:Vt("Accent.Light.1"),2:Vt("Accent.Light.2"),3:Vt("Accent.Light.3"),4:Vt("Accent.Light.4"),5:Vt("Accent.Light.5"),6:Vt("Accent.Light.6")},Dark:{1:Vt("Accent.Dark.1"),2:Vt("Accent.Dark.2"),3:Vt("Accent.Dark.3")}},Neutral:{1:Vt("Neutral.1"),2:Vt("Neutral.2"),3:Vt("Neutral.3"),4:Vt("Neutral.4"),5:Vt("Neutral.5"),6:Vt("Neutral.6"),7:Vt("Neutral.7"),8:Vt("Neutral.8")},Validation:{Green:{Text:Vt("Validation.Green.Text"),Icon:Vt("Validation.Green.Icon"),Border:Vt("Validation.Green.Border"),Background:Vt("Validation.Green.Background")},Orange:{Text:Vt("Validation.Orange.Text"),Icon:Vt("Validation.Orange.Icon"),Border:Vt("Validation.Orange.Border"),Background:Vt("Validation.Orange.Background"),Badge:Vt("Validation.Orange.Badge")},Red:{Text:Vt("Validation.Red.Text"),Icon:Vt("Validation.Red.Icon"),Border:Vt("Validation.Red.Border"),Background:Vt("Validation.Red.Background")},Blue:{Text:Vt("Validation.Blue.Text"),Icon:Vt("Validation.Blue.Icon"),Border:Vt("Validation.Blue.Border"),Background:Vt("Validation.Blue.Background")}},Shadow:{Accent:Vt("Shadow.Accent"),Red:Vt("Shadow.Red"),Elevation:Vt("Shadow.Elevation")}},Gt=F.div`
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
`,Ut=({type:t,active:r=!1,disabled:n,className:i})=>{let a;switch(t){case"checkbox":a=e(r?v:$,{});break;case"radio":a=e(r?m:p,{});break;case"tick":a=e(b,{});break;case"cross":a=e(y,{});break;default:a=null}return e(Gt,Object.assign({className:i,$active:r,disabled:n},{children:a}))};var Xt={exports:{}};Xt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],f=d&&d[0],h=d&&d[1];o[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(n),d=a.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,h=new Date,g=o||(i||a?1:h.getDate()),p=i||h.getFullYear(),m=0;i&&!a||(m=a>0?a-1:h.getMonth());var y=s||0,$=l||0,v=c||0,b=d||0;return u?new Date(Date.UTC(p,m,g,y,$,v,b+60*u.offset*1e3)):r?new Date(Date.UTC(p,m,g,y,$,v,b)):new Date(p,m,g,y,$,v,b)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var h=s.length,g=1;g<=h;g+=1){o[1]=s[g-1];var p=r.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var qt,Jt,Qt=A(Xt.exports),Kt={exports:{}},er=A(Kt.exports=(qt={year:0,month:1,day:2,hour:3,minute:4,second:5},Jt={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Jt[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Jt[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,d=qt[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],f=24===u?0:u,h=a[0]+"-"+a[1]+"-"+a[2]+" "+f+":"+a[4]+":"+a[5]+":000",g=+e;return(r.utc(h).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],f=r(d).utcOffset(u);return f.$x.$timezone=s,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),tr={exports:{}};tr.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",f="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},$={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),a=r-i<0,o=t.clone().add(n+(a?-1:1),c);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:f,h:o,m:a,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",b={};b[v]=m;var F="$isDayjsObject",S=function(e){return e instanceof x||!(!e||!e[F])},D=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();b[a]&&(i=a),r&&(b[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;b[s]=t,i=s}return!n&&i&&(v=i),i||!n&&v},B=function(e,t){if(S(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new x(r)},w=$;w.l=D,w.i=S,w.w=function(e,t){return B(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function m(e){this.$L=D(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var r=B(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return B(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<B(e)},y.$g=function(e,t,r){return w.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!w.u(t)||t,d=w.p(e),h=function(e,t){var i=w.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},g=function(e,t){return w.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case u:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case l:var v=this.$locale().weekStart||0,b=(p<v?p+7:p)-v;return h(n?y-b:y+(6-b),m);case s:case f:return g($+"Hours",0);case o:return g($+"Minutes",1);case a:return g($+"Seconds",2);case i:return g($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=w.p(e),d="set"+(this.$u?"UTC":""),h=(r={},r[s]=d+"Date",r[f]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[a]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],g=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var p=this.clone().set(f,1);p.$d[h](g),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[w.p(e)]()},y.add=function(n,d){var f,h=this;n=Number(n);var g=w.p(d),p=function(e){var t=B(h);return w.w(t.date(t.date()+Math.round(e*n)),h)};if(g===c)return this.set(c,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return p(1);if(g===l)return p(7);var m=(f={},f[a]=t,f[o]=r,f[i]=e,f)[g]||1,y=this.$d.getTime()+n*m;return w.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},f=function(e){return w.s(a%12||12,e,"0")},g=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return s+1;case"MM":return w.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return w.s(a,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return w.s(o,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,f,h){var g,p=this,m=w.p(f),y=B(n),$=(y.utcOffset()-this.utcOffset())*t,v=this-y,b=function(){return w.m(p,y)};switch(m){case u:g=b()/12;break;case c:g=b();break;case d:g=b()/3;break;case l:g=(v-$)/6048e5;break;case s:g=(v-$)/864e5;break;case o:g=v/r;break;case a:g=v/t;break;case i:g=v/e;break;default:g=v}return h?g:w.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return b[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=D(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),k=x.prototype;return B.prototype=k,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",f]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),B.extend=function(e,t){return e.$i||(e(t,x,B),e.$i=!0),B},B.locale=D,B.isDayjs=S,B.unix=function(e){return B(1e3*e)},B.en=b[v],B.Ls=b,B.p={},B}();var rr=A(tr.exports),nr={exports:{}};nr.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var ir=A(nr.exports),ar={exports:{}};ar.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var or=A(ar.exports),sr={exports:{}};sr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var lr,cr=A(sr.exports);rr.extend(ir),rr.extend(or),rr.extend(cr),rr.extend(Qt),rr.extend(er),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=rr(t).startOf("week");return dr(r).map((e=>ur(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return ur(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(rr(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+rr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=rr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?rr(n):void 0,i?rr(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(lr||(lr={}));const dr=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},ur=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},fr=[1,3,5,7,8,10,12],hr=[4,6,9,11];var gr,pr,mr,yr;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":fr.includes(a)?Math.min(i,31).toString():hr.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=rr(e,r);return rr(t,r).diff(n,"minute")},e.toDayjs=e=>e?rr(e):rr(),e.addMinutesToTime=(e,t,r="HH:mm")=>rr(e,r).add(t,"minutes").format(r)}(gr||(gr={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!rr(e).isBefore(n,"day"))||!(!i||!rr(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(rr(e).isValid())return e}return""}}(pr||(pr={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(mr||(mr={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+a.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return a.repeat(e.substring(0,r).length)+e.substring(r,n+1)+a.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(yr||(yr={}));var $r=function(e,t){return $r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},$r(e,t)};var vr=function(){return vr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},vr.apply(this,arguments)};var br="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Fr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Sr="object"==typeof br&&br&&br.Object===Object&&br,Dr="object"==typeof self&&self&&self.Object===Object&&self,Br=Sr||Dr||Function("return this")(),wr=Br,xr=function(){return wr.Date.now()},kr=/\s/;var Or=function(e){for(var t=e.length;t--&&kr.test(e.charAt(t)););return t},Hr=/^\s+/;var Er=function(e){return e?e.slice(0,Or(e)+1).replace(Hr,""):e},Mr=Br.Symbol,Ar=Mr,zr=Object.prototype,Tr=zr.hasOwnProperty,_r=zr.toString,jr=Ar?Ar.toStringTag:void 0;var Cr=function(e){var t=Tr.call(e,jr),r=e[jr];try{e[jr]=void 0;var n=!0}catch(e){}var i=_r.call(e);return n&&(t?e[jr]=r:delete e[jr]),i},Lr=Object.prototype.toString;var Yr=Cr,Rr=function(e){return Lr.call(e)},Nr=Mr?Mr.toStringTag:void 0;var Wr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Nr&&Nr in Object(e)?Yr(e):Rr(e)},Ir=function(e){return null!=e&&"object"==typeof e};var Pr=Er,Vr=Fr,Zr=function(e){return"symbol"==typeof e||Ir(e)&&"[object Symbol]"==Wr(e)},Gr=/^[-+]0x[0-9a-f]+$/i,Ur=/^0b[01]+$/i,Xr=/^0o[0-7]+$/i,qr=parseInt;var Jr=Fr,Qr=xr,Kr=function(e){if("number"==typeof e)return e;if(Zr(e))return NaN;if(Vr(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Vr(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Pr(e);var r=Ur.test(e);return r||Xr.test(e)?qr(e.slice(2),r?2:8):Gr.test(e)?NaN:+e},en=Math.max,tn=Math.min;var rn=function(e,t,r){var n,i,a,o,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,a=i;return n=i=void 0,c=t,o=e.apply(a,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=a}function p(){var e=Qr();if(g(e))return m(e);s=setTimeout(p,function(e){var r=t-(e-l);return u?tn(r,a-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=i=void 0,o)}function y(){var e=Qr(),r=g(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(p,t),d?h(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(p,t),h(l)}return void 0===s&&(s=setTimeout(p,t)),o}return t=Kr(t)||0,Jr(r)&&(d=!!r.leading,a=(u="maxWait"in r)?en(Kr(r.maxWait)||0,t):a,f="trailing"in r?!!r.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},y.flush=function(){return void 0===s?o:m(Qr())},y},nn=rn,an=Fr;var on=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return an(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),nn(e,t,{leading:n,maxWait:t,trailing:i})},sn=function(e,t,r,n){switch(t){case"debounce":return rn(e,r,n);case"throttle":return on(e,r,n);default:return e}},ln=function(e){return"function"==typeof e},cn=function(){return"undefined"==typeof window},dn=function(e){return e instanceof Element||e instanceof HTMLDocument},un=function(e,t,r,n){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!n||t.height===o&&!r?t:(e&&ln(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!cn()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(cn())return null;if(t)return document.querySelector(t);if(n&&dn(n))return n;if(r.targetRef&&dn(r.targetRef.current))return r.targetRef.current;var i=O(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(i||o){var l=un(s,r.setState.bind(r),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!cn()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return ln(t)?"renderProp":ln(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=c(),r.observableElement=null,cn()||(r.resizeHandler=sn(r.createResizeHandler,i,o,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}$r(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){cn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,n=t.children,i=t.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=n)(l);case"child":if((e=n).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=n).map((function(e){return!!e&&d(e,l)}));default:return a.createElement(o,null)}}}(u);var fn=cn()?f:h;function hn(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;const gn={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},pn={collections:{base:{D1:{fontFamily:gn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:gn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:gn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:gn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:gn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:gn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:gn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:gn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:gn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:gn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:gn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:gn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:gn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:gn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},mn=e=>t=>{const r=t.theme,n=Wt(pn,r[It.textStyleScheme]);return r.options&&r.options.textStyle?Nt(n,e,r.options.textStyle):Nt(n,e)},yn={D1:{fontFamily:mn("D1.fontFamily"),fontSize:mn("D1.fontSize"),fontWeight:mn("D1.fontWeight"),lineHeight:mn("D1.lineHeight"),letterSpacing:mn("D1.letterSpacing")},D2:{fontFamily:mn("D2.fontFamily"),fontSize:mn("D2.fontSize"),fontWeight:mn("D2.fontWeight"),lineHeight:mn("D2.lineHeight"),letterSpacing:mn("D2.letterSpacing")},D3:{fontFamily:mn("D3.fontFamily"),fontSize:mn("D3.fontSize"),fontWeight:mn("D3.fontWeight"),lineHeight:mn("D3.lineHeight"),letterSpacing:mn("D3.letterSpacing")},D4:{fontFamily:mn("D4.fontFamily"),fontSize:mn("D4.fontSize"),fontWeight:mn("D4.fontWeight"),lineHeight:mn("D4.lineHeight"),letterSpacing:mn("D4.letterSpacing")},DBody:{fontFamily:mn("DBody.fontFamily"),fontSize:mn("DBody.fontSize"),fontWeight:mn("DBody.fontWeight"),lineHeight:mn("DBody.lineHeight"),letterSpacing:mn("DBody.letterSpacing")},H1:{fontFamily:mn("H1.fontFamily"),fontSize:mn("H1.fontSize"),fontWeight:mn("H1.fontWeight"),lineHeight:mn("H1.lineHeight"),letterSpacing:mn("H1.letterSpacing")},H2:{fontFamily:mn("H2.fontFamily"),fontSize:mn("H2.fontSize"),fontWeight:mn("H2.fontWeight"),lineHeight:mn("H2.lineHeight"),letterSpacing:mn("H2.letterSpacing")},H3:{fontFamily:mn("H3.fontFamily"),fontSize:mn("H3.fontSize"),fontWeight:mn("H3.fontWeight"),lineHeight:mn("H3.lineHeight"),letterSpacing:mn("H3.letterSpacing")},H4:{fontFamily:mn("H4.fontFamily"),fontSize:mn("H4.fontSize"),fontWeight:mn("H4.fontWeight"),lineHeight:mn("H4.lineHeight"),letterSpacing:mn("H4.letterSpacing")},H5:{fontFamily:mn("H5.fontFamily"),fontSize:mn("H5.fontSize"),fontWeight:mn("H5.fontWeight"),lineHeight:mn("H5.lineHeight"),letterSpacing:mn("H5.letterSpacing")},H6:{fontFamily:mn("H6.fontFamily"),fontSize:mn("H6.fontSize"),fontWeight:mn("H6.fontWeight"),lineHeight:mn("H6.lineHeight"),letterSpacing:mn("H6.letterSpacing")},Body:{fontFamily:mn("Body.fontFamily"),fontSize:mn("Body.fontSize"),fontWeight:mn("Body.fontWeight"),lineHeight:mn("Body.lineHeight"),letterSpacing:mn("Body.letterSpacing")},BodySmall:{fontFamily:mn("BodySmall.fontFamily"),fontSize:mn("BodySmall.fontSize"),fontWeight:mn("BodySmall.fontWeight"),lineHeight:mn("BodySmall.lineHeight"),letterSpacing:mn("BodySmall.letterSpacing")},XSmall:{fontFamily:mn("XSmall.fontFamily"),fontSize:mn("XSmall.fontSize"),fontWeight:mn("XSmall.fontWeight"),lineHeight:mn("XSmall.lineHeight"),letterSpacing:mn("XSmall.letterSpacing")}},$n=e=>{switch(e){case 700:case"bold":return gn.Bold;case 600:case"semibold":return gn.Semibold;case 300:case"light":return gn.Light;case 400:case"regular":return gn.Regular;default:return""}},vn=(e,t)=>r=>{var n;const i=yn[e].fontFamily(r),a=yn[e].fontWeight(r);return Object.values(gn).includes(i)?S`
                font-family: ${$n(t)||$n(a)||i};
                font-weight: normal !important;
            `:S`
            font-family: ${i};
            font-weight: ${null!==(n=bn(t)||a)&&void 0!==n?n:"normal"};
        `},bn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Fn=e=>{if(e>0)return S`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Sn=vn,Dn=(e,t,r=!1)=>n=>{const i=yn[e],a=i.fontSize(n);return S`
            ${vn(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${S`
                margin-bottom: ${a*(r?1.05:0)}rem;
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
    `,e.Hyperlink={Default:e=>On(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>On(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(wn||(wn={}));const xn=F.a`
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
`,On=r=>{var{external:n=!1,children:i}=r,a=hn(r,["external","children"]);return t(xn,Object.assign({},a,{children:[i,n&&e(kn,{})]}))};var Hn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Hn||(Hn={}));const En=e=>{const{textSize:t}=e||{};return S`
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
    `},Mn=F.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Zt.Validation.Red.Background(e),r=Zt.Validation.Red.Border(e);break;case"success":t=Zt.Validation.Green.Background(e),r=Zt.Validation.Green.Border(e);break;case"warning":default:t=Zt.Validation.Orange.Background(e),r=Zt.Validation.Orange.Border(e);break;case"info":t=Zt.Validation.Blue.Background(e),r=Zt.Validation.Blue.Border(e);break;case"description":t=Zt.Neutral[7](e),r=Zt.Neutral[4](e)}return S`
            background: ${t};
            border-left: 2px solid ${r};
        `}}

    color: ${Zt.Neutral[1]};
    ${e=>"small"===e.$sizeType?En({textSize:"H6"}):En({textSize:"BodySmall"})}
`,An=F.div`
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
`,_n=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,jn=F.button`
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
`,Cn=F(H)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,Ln={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Yn=e=>Object.keys(Ln).reduce(((t,r)=>{const n=Ln[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Rn=Yn("max-width"),Nn=(Yn("min-width"),e=>`\n\tmargin-bottom: ${e||0}rem;\n`),Wn=(F.ol`
    ${e=>Nn(e.bottomMargin)}
    margin-left: ${3}rem;

    ${Rn.tablet} {
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
    ${e=>Nn(e.bottomMargin)}
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
`),In=t=>{var{size:r="Body",children:n}=t,i=hn(t,["size","children"]);return e(Wn,Object.assign({size:r},i,{children:n}))},Pn=F.div`
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
    ${Rn.tablet} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Rn.mobileL} {
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
`,ei=F((r=>{var{type:n,className:i,children:a,actionLink:l,actionLinkIcon:c,sizeType:d="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:g}=r,p=hn(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[m,y]=s(!1),[$,v]=s(!1),{height:b,ref:F}=function(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,a=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,f=void 0===u||u,h=e.targetRef,g=e.observerOptions,p=e.onResize,m=o(r),y=o(null),$=null!=h?h:y,v=o(),b=s({width:void 0,height:void 0}),F=b[0],S=b[1];return fn((function(){if(!cn()){var e=un(p,S,d,f);v.current=sn((function(t){(d||f)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!m.current&&!cn()&&e({width:n,height:i}),m.current=!1}))}),n,a,l);var t=new window.ResizeObserver(v.current);return $.current&&t.observe($.current,g),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,a,l,d,f,p,g,$.current]),vr({ref:$},F)}();f((()=>{S()}),[g,b]);const S=()=>{y(!g),v(O())},O=()=>!!g&&b>g;return t(Mn,Object.assign({className:i,$type:n,$sizeType:d,"data-testid":p["data-testid"]},{children:[u&&e(An,Object.assign({$sizeType:d,$type:n},{children:(()=>{if(n&&h)return h;switch(n){case"success":return e(k,{});case"warning":return e(w,{});case"error":return e(B,{});case"info":case"description":return e(x,{});default:return null}})()})),t(Tn,{children:[t(_n,Object.assign({$maxCollapsedHeight:O()?g:void 0,$showMore:m,$hasActionLink:!!l},{children:[e("div",Object.assign({ref:F},{children:a})),l&&t(zn,Object.assign({"data-testid":"action-link",$type:n,$sizeType:d},l,{children:[l.children,c||e(D,{})]}))]})),$&&t(jn,Object.assign({$sizeType:d,$type:n,type:"button",onClick:()=>y(!m)},{children:["Show ",m?"less":"more",e(Cn,{$expanded:m})]}))]})]}))}))`
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
`,ii=({type:a="checkbox",indicator:l,checked:c,styleType:d="default",children:u,childrenMaxLines:h,subLabel:p,disabled:m,error:y,name:$,id:v,className:b,compositeSection:F,removable:S,onRemove:D,"data-testid":B,onChange:w})=>{const{collapsible:x=!0,errors:k,children:O,initialExpanded:H}=F||{},[E,M]=s(c),[A,z]=s(H),T=g((()=>{const e=Array.isArray(k)&&(null==k?void 0:k.length)>0,t=!Array.isArray(k)&&!!k;return e||t}),[k]),[_]=s(mr.generate()),j=v?`${v}`:`tg-${_}`,C=o();f((()=>{M(c)}),[c]),f((()=>{E&&z(null==H||H)}),[E]);const L=e=>{if(!m){if(w)return void w(e);switch(a){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":E||M(!0)}}},Y=()=>{m||z(!A)},R=()=>{m||!D||D()},N=()=>{let t;switch(a){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=a}return e(Ut,{type:t,active:E,disabled:m})},W=()=>{if(!p)return null;let t;return t="function"==typeof p?p():p,e(Un,Object.assign({"data-id":"toggle-sublabel",$disabled:m,$selected:E},{children:t}))},I=()=>{const r=!A&&!T;return x&&t(Qn,Object.assign({$paddingTopRequired:r,disabled:m,onClick:Y,"data-testid":A?"collapse-button":"expand-button"},{children:[A?"Show less":"Show more",e(A?i:n,{"aria-hidden":!0})]}))},P=n=>t(r,{children:[e(ri,Object.assign({weight:"semibold",$disabled:m},{children:"Error"})),e(ni,Object.assign({$disabled:m},{children:null==n?void 0:n.map(((t,r)=>e("li",Object.assign({id:`${j}-error-list-item-${r}`},{children:e(ri,Object.assign({weight:"semibold",$disabled:m},{children:t}))}),r)))}))]});return t(Pn,Object.assign({$selected:E,$disabled:m,className:b,$styleType:d,$error:y,$indicator:l,id:v,"data-testid":B},{children:[t(Xn,Object.assign({id:`${j}-header-container`,$disabled:m,$error:y,$selected:E,$indicator:l,$styleType:d},{children:[t(qn,Object.assign({$addPadding:S},{children:[e(Vn,{ref:C,name:$,id:`${j}-input`,type:"checkbox"===a?"checkbox":"radio","data-testid":"toggle-input",disabled:m,onChange:L,checked:E}),l&&N(),t(Zn,{children:[e(Gn,Object.assign({htmlFor:`${j}-input`,$selected:E,$indicator:l,$disabled:m,"data-testid":`${j}-toggle-label`,$maxLines:h},{children:u})),p&&W()]})]})),S&&e(Jn,Object.assign({type:"button",$disabled:m,onClick:R,id:`${j}-remove-button`},{children:"Remove"}))]})),O&&t("div",{children:[(!x||A)&&e(ti,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!x,$disabled:m},{children:O})),x&&!A&&T&&e(Kn,Object.assign({$disabled:m,onClick:Y,id:`${j}-error-alert`},{children:e(ei,Object.assign({type:m?"description":"error",className:b,showIcon:!0},{children:Array.isArray(k)?P(k):k}))})),I()]})]}))};export{ii as Toggle};
//# sourceMappingURL=index.js.map
