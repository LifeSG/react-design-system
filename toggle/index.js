import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import{ChevronDownIcon as r}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as i}from"@lifesg/react-icons/chevron-up";import*as a from"react";import{useRef as o,useState as l,isValidElement as s,createRef as c,cloneElement as d,PureComponent as u,useEffect as f,useLayoutEffect as h,useMemo as g}from"react";import{CircleIcon as m}from"@lifesg/react-icons/circle";import{CircleDotIcon as p}from"@lifesg/react-icons/circle-dot";import{CrossIcon as y}from"@lifesg/react-icons/cross";import{SquareIcon as $}from"@lifesg/react-icons/square";import{SquareTickFillIcon as v}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as b}from"@lifesg/react-icons/tick";import F,{css as S}from"styled-components";import{ArrowRightIcon as D}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as B}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as w}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as x}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as O}from"@lifesg/react-icons/tick-circle-fill";import{findDOMNode as H}from"react-dom";import{ChevronDownIcon as k}from"@lifesg/react-icons";import{ExternalIcon as E}from"@lifesg/react-icons/external";var z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function A(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var M=Array.isArray,T="object"==typeof z&&z&&z.Object===Object&&z,C="object"==typeof self&&self&&self.Object===Object&&self,_=T||C||Function("return this")(),W=_.Symbol,V=W,j=Object.prototype,R=j.hasOwnProperty,L=j.toString,Y=V?V.toStringTag:void 0;var N=function(e){var t=R.call(e,Y),n=e[Y];try{e[Y]=void 0;var r=!0}catch(e){}var i=L.call(e);return r&&(t?e[Y]=n:delete e[Y]),i},P=Object.prototype.toString;var I=N,J=function(e){return P.call(e)},Z=W?W.toStringTag:void 0;var G=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Z&&Z in Object(e)?I(e):J(e)};var U=G,X=function(e){return null!=e&&"object"==typeof e};var q=function(e){return"symbol"==typeof e||X(e)&&"[object Symbol]"==U(e)},Q=M,K=q,ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,te=/^\w*$/;var ne=function(e,t){if(Q(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!K(e))||(te.test(e)||!ee.test(e)||null!=t&&e in Object(t))};var re=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie=G,ae=re;var oe,le=function(e){if(!ae(e))return!1;var t=ie(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},se=_["__core-js_shared__"],ce=(oe=/[^.]+$/.exec(se&&se.keys&&se.keys.IE_PROTO||""))?"Symbol(src)_1."+oe:"";var de=function(e){return!!ce&&ce in e},ue=Function.prototype.toString;var fe=le,he=de,ge=re,me=function(e){if(null!=e){try{return ue.call(e)}catch(e){}try{return e+""}catch(e){}}return""},pe=/^\[object .+?Constructor\]$/,ye=Function.prototype,$e=Object.prototype,ve=ye.toString,be=$e.hasOwnProperty,Fe=RegExp("^"+ve.call(be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Se=function(e){return!(!ge(e)||he(e))&&(fe(e)?Fe:pe).test(me(e))},De=function(e,t){return null==e?void 0:e[t]};var Be=function(e,t){var n=De(e,t);return Se(n)?n:void 0},we=Be(Object,"create"),xe=we;var Oe=function(){this.__data__=xe?xe(null):{},this.size=0};var He=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ke=we,Ee=Object.prototype.hasOwnProperty;var ze=function(e){var t=this.__data__;if(ke){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ee.call(t,e)?t[e]:void 0},Ae=we,Me=Object.prototype.hasOwnProperty;var Te=we;var Ce=Oe,_e=He,We=ze,Ve=function(e){var t=this.__data__;return Ae?void 0!==t[e]:Me.call(t,e)},je=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Te&&void 0===t?"__lodash_hash_undefined__":t,this};function Re(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Re.prototype.clear=Ce,Re.prototype.delete=_e,Re.prototype.get=We,Re.prototype.has=Ve,Re.prototype.set=je;var Le=Re;var Ye=function(){this.__data__=[],this.size=0};var Ne=function(e,t){return e===t||e!=e&&t!=t};var Pe=function(e,t){for(var n=e.length;n--;)if(Ne(e[n][0],t))return n;return-1},Ie=Pe,Je=Array.prototype.splice;var Ze=Pe;var Ge=Pe;var Ue=Pe;var Xe=Ye,qe=function(e){var t=this.__data__,n=Ie(t,e);return!(n<0)&&(n==t.length-1?t.pop():Je.call(t,n,1),--this.size,!0)},Qe=function(e){var t=this.__data__,n=Ze(t,e);return n<0?void 0:t[n][1]},Ke=function(e){return Ge(this.__data__,e)>-1},et=function(e,t){var n=this.__data__,r=Ue(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function tt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tt.prototype.clear=Xe,tt.prototype.delete=qe,tt.prototype.get=Qe,tt.prototype.has=Ke,tt.prototype.set=et;var nt=tt,rt=Be(_,"Map"),it=Le,at=nt,ot=rt;var lt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var st=function(e,t){var n=e.__data__;return lt(t)?n["string"==typeof t?"string":"hash"]:n.map},ct=st;var dt=st;var ut=st;var ft=st;var ht=function(){this.size=0,this.__data__={hash:new it,map:new(ot||at),string:new it}},gt=function(e){var t=ct(this,e).delete(e);return this.size-=t?1:0,t},mt=function(e){return dt(this,e).get(e)},pt=function(e){return ut(this,e).has(e)},yt=function(e,t){var n=ft(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function $t(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$t.prototype.clear=ht,$t.prototype.delete=gt,$t.prototype.get=mt,$t.prototype.has=pt,$t.prototype.set=yt;var vt=$t;function bt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(bt.Cache||vt),n}bt.Cache=vt;var Ft=bt;var St=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Dt=/\\(\\)?/g,Bt=function(e){var t=Ft(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(St,(function(e,n,r,i){t.push(r?i.replace(Dt,"$1"):n||e)})),t}));var wt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},xt=M,Ot=q,Ht=W?W.prototype:void 0,kt=Ht?Ht.toString:void 0;var Et=function e(t){if("string"==typeof t)return t;if(xt(t))return wt(t,e)+"";if(Ot(t))return kt?kt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},zt=Et;var At=M,Mt=ne,Tt=Bt,Ct=function(e){return null==e?"":zt(e)};var _t=q;var Wt=function(e,t){return At(e)?e:Mt(e,t)?[e]:Tt(Ct(e))},Vt=function(e){if("string"==typeof e||_t(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var jt=function(e,t){for(var n=0,r=(t=Wt(t,e)).length;null!=e&&n<r;)e=e[Vt(t[n++])];return n&&n==r?e:void 0};var Rt=A((function(e,t,n){var r=null==e?void 0:jt(e,t);return void 0===r?n:r}));const Lt=(e,t,n)=>t?Rt(n,t)||Rt(e,t):n||e,Yt=(e,t)=>{const n=t||e.defaultValue;return Rt(e.collections,n)};var Nt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Nt||(Nt={}));const Pt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},It=e=>t=>{const n=t.theme,r=Yt(Pt,n[Nt.colorScheme]);return n.options&&n.options.color?Lt(r,e,n.options.color):Lt(r,e)},Jt={Brand:{1:It("Brand.1"),2:It("Brand.2"),3:It("Brand.3"),4:It("Brand.4"),5:It("Brand.5"),6:It("Brand.6")},Primary:It("Primary"),PrimaryDark:It("PrimaryDark"),Secondary:It("Secondary"),Accent:{Light:{1:It("Accent.Light.1"),2:It("Accent.Light.2"),3:It("Accent.Light.3"),4:It("Accent.Light.4"),5:It("Accent.Light.5"),6:It("Accent.Light.6")},Dark:{1:It("Accent.Dark.1"),2:It("Accent.Dark.2"),3:It("Accent.Dark.3")}},Neutral:{1:It("Neutral.1"),2:It("Neutral.2"),3:It("Neutral.3"),4:It("Neutral.4"),5:It("Neutral.5"),6:It("Neutral.6"),7:It("Neutral.7"),8:It("Neutral.8")},Validation:{Green:{Text:It("Validation.Green.Text"),Icon:It("Validation.Green.Icon"),Border:It("Validation.Green.Border"),Background:It("Validation.Green.Background")},Orange:{Text:It("Validation.Orange.Text"),Icon:It("Validation.Orange.Icon"),Border:It("Validation.Orange.Border"),Background:It("Validation.Orange.Background"),Badge:It("Validation.Orange.Badge")},Red:{Text:It("Validation.Red.Text"),Icon:It("Validation.Red.Icon"),Border:It("Validation.Red.Border"),Background:It("Validation.Red.Background")},Blue:{Text:It("Validation.Blue.Text"),Icon:It("Validation.Blue.Icon"),Border:It("Validation.Blue.Border"),Background:It("Validation.Blue.Background")}},Shadow:{Accent:It("Shadow.Accent"),Red:It("Shadow.Red"),Elevation:It("Shadow.Elevation")}},Zt=F.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?S`
                    color: ${Jt.Primary};
                `:S`
                    color: ${Jt.Neutral[4]};
                `};
    }
`,Gt=({type:t,active:n=!1,disabled:r,className:i})=>{let a;switch(t){case"checkbox":a=e(n?v:$,{});break;case"radio":a=e(n?p:m,{});break;case"tick":a=e(b,{});break;case"cross":a=e(y,{});break;default:a=null}return e(Zt,Object.assign({className:i,$active:n,disabled:r},{children:a}))};var Ut={exports:{}};Ut.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",l="day",s="week",c="month",d="quarter",u="year",f="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},$={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),a=n-i<0,o=t.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:s,d:l,D:f,h:o,m:a,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",b={};b[v]=p;var F="$isDayjsObject",S=function(e){return e instanceof x||!(!e||!e[F])},D=function e(t,n,r){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();b[a]&&(i=a),n&&(b[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var l=t.name;b[l]=t,i=l}return!r&&i&&(v=i),i||!r&&v},B=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new x(n)},w=$;w.l=D,w.i=S,w.w=function(e,t){return B(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function p(e){this.$L=D(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var y=p.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var n=B(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return B(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<B(e)},y.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!w.u(t)||t,d=w.p(e),h=function(e,t){var i=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(l)},g=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,p=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case u:return r?h(1,0):h(31,11);case c:return r?h(1,p):h(0,p+1);case s:var v=this.$locale().weekStart||0,b=(m<v?m+7:m)-v;return h(r?y-b:y+(6-b),p);case l:case f:return g($+"Hours",0);case o:return g($+"Minutes",1);case a:return g($+"Seconds",2);case i:return g($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,s=w.p(e),d="set"+(this.$u?"UTC":""),h=(n={},n[l]=d+"Date",n[f]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===u){var m=this.clone().set(f,1);m.$d[h](g),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[w.p(e)]()},y.add=function(r,d){var f,h=this;r=Number(r);var g=w.p(d),m=function(e){var t=B(h);return w.w(t.date(t.date()+Math.round(e*r)),h)};if(g===c)return this.set(c,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===l)return m(1);if(g===s)return m(7);var p=(f={},f[a]=t,f[o]=n,f[i]=e,f)[g]||1,y=this.$d.getTime()+r*p;return w.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),a=this.$H,o=this.$m,l=this.$M,s=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},f=function(e){return w.s(a%12||12,e,"0")},g=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return l+1;case"MM":return w.s(l+1,2,"0");case"MMM":return u(n.monthsShort,l,c,3);case"MMMM":return u(c,l);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,s,2);case"ddd":return u(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(a);case"HH":return w.s(a,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return w.s(o,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,h){var g,m=this,p=w.p(f),y=B(r),$=(y.utcOffset()-this.utcOffset())*t,v=this-y,b=function(){return w.m(m,y)};switch(p){case u:g=b()/12;break;case c:g=b();break;case d:g=b()/3;break;case s:g=(v-$)/6048e5;break;case l:g=(v-$)/864e5;break;case o:g=v/n;break;case a:g=v/t;break;case i:g=v/e;break;default:g=v}return h?g:w.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return b[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=D(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},p}(),O=x.prototype;return B.prototype=O,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",l],["$M",c],["$y",u],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),B.extend=function(e,t){return e.$i||(e(t,x,B),e.$i=!0),B},B.locale=D,B.isDayjs=S,B.unix=function(e){return B(1e3*e)},B.en=b[v],B.Ls=b,B.p={},B}();var Xt=A(Ut.exports),qt={exports:{}};qt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function f(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=o.length,s=0;s<l;s+=1){var c=o[s],d=u[c],f=d&&d[0],h=d&&d[1];o[s]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,s=i.parser,c=e.slice(r),d=a.exec(c)[0];s.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var l=o[1];if("string"==typeof l){var s=!0===o[2],c=!0===o[3],d=s||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!s&&u&&(a=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),i=r.year,a=r.month,o=r.day,l=r.hours,s=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,h=new Date,g=o||(i||a?1:h.getDate()),m=i||h.getFullYear(),p=0;i&&!a||(p=a>0?a-1:h.getMonth());var y=l||0,$=s||0,v=c||0,b=d||0;return u?new Date(Date.UTC(m,p,g,y,$,v,b+60*u.offset*1e3)):n?new Date(Date.UTC(m,p,g,y,$,v,b)):new Date(m,p,g,y,$,v,b)}catch(e){return new Date("")}}(t,l,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var h=l.length,g=1;g<=h;g+=1){o[1]=l[g-1];var m=n.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Qt=A(qt.exports),Kt={exports:{}};Kt.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(a,r):!this.isBefore(a,r))&&(s?this.isBefore(o,r):!this.isAfter(o,r))||(l?this.isBefore(a,r):!this.isAfter(a,r))&&(s?this.isAfter(o,r):!this.isBefore(o,r))}};var en=A(Kt.exports),tn={exports:{}};tn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var nn=A(tn.exports),rn={exports:{}};rn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var an,on,ln,sn=A(rn.exports),cn={exports:{}},dn=A(cn.exports=(an={year:0,month:1,day:2,hour:3,minute:4,second:5},on={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=on[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),on[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var l=r[o],s=l.type,c=l.value,d=an[s];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],f=24===u?0:u,h=a[0]+"-"+a[1]+"-"+a[2]+" "+f+":"+a[4]+":"+a[5]+":000",g=+e;return(n.utc(h).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),l=Math.round((a-new Date(o))/1e3/60),s=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=e,s},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,l=i||t||r,s=a(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),s,l),d=c[0],u=c[1],f=n(d).utcOffset(u);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));Xt.extend(en),Xt.extend(sn),Xt.extend(nn),Xt.extend(Qt),Xt.extend(dn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Xt(t).startOf("week");return un(n).map((e=>fn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return fn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Xt(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Xt(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Xt(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?Xt(r):void 0,i?Xt(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(ln||(ln={}));const un=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},fn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},hn=[1,3,5,7,8,10,12],gn=[4,6,9,11];var mn,pn,yn,$n;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":hn.includes(a)?Math.min(i,31).toString():gn.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Xt(e,n);return Xt(t,n).diff(r,"minute")},e.toDayjs=e=>e?Xt(e):Xt(),e.addMinutesToTime=(e,t,n="HH:mm")=>Xt(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>Xt(e).isSame(Xt(t),n)}(mn||(mn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Xt(e).isBefore(r,"day"))||!(!i||!Xt(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Xt(e).isValid())return e}return""}}(pn||(pn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(yn||(yn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:l}=n;if(l)return l(e);if(o)return e.replace(o,a);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+a.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return a.repeat(e.substring(0,n).length)+e.substring(n,r+1)+a.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}($n||($n={}));var vn=function(e,t){return vn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},vn(e,t)};var bn=function(){return bn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},bn.apply(this,arguments)};var Fn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Sn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Dn="object"==typeof Fn&&Fn&&Fn.Object===Object&&Fn,Bn="object"==typeof self&&self&&self.Object===Object&&self,wn=Dn||Bn||Function("return this")(),xn=wn,On=function(){return xn.Date.now()},Hn=/\s/;var kn=function(e){for(var t=e.length;t--&&Hn.test(e.charAt(t)););return t},En=/^\s+/;var zn=function(e){return e?e.slice(0,kn(e)+1).replace(En,""):e},An=wn.Symbol,Mn=An,Tn=Object.prototype,Cn=Tn.hasOwnProperty,_n=Tn.toString,Wn=Mn?Mn.toStringTag:void 0;var Vn=function(e){var t=Cn.call(e,Wn),n=e[Wn];try{e[Wn]=void 0;var r=!0}catch(e){}var i=_n.call(e);return r&&(t?e[Wn]=n:delete e[Wn]),i},jn=Object.prototype.toString;var Rn=Vn,Ln=function(e){return jn.call(e)},Yn=An?An.toStringTag:void 0;var Nn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Yn&&Yn in Object(e)?Rn(e):Ln(e)},Pn=function(e){return null!=e&&"object"==typeof e};var In=zn,Jn=Sn,Zn=function(e){return"symbol"==typeof e||Pn(e)&&"[object Symbol]"==Nn(e)},Gn=/^[-+]0x[0-9a-f]+$/i,Un=/^0b[01]+$/i,Xn=/^0o[0-7]+$/i,qn=parseInt;var Qn=Sn,Kn=On,er=function(e){if("number"==typeof e)return e;if(Zn(e))return NaN;if(Jn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Jn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=In(e);var n=Un.test(e);return n||Xn.test(e)?qn(e.slice(2),n?2:8):Gn.test(e)?NaN:+e},tr=Math.max,nr=Math.min;var rr=function(e,t,n){var r,i,a,o,l,s,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function g(e){var n=e-s;return void 0===s||n>=t||n<0||u&&e-c>=a}function m(){var e=Kn();if(g(e))return p(e);l=setTimeout(m,function(e){var n=t-(e-s);return u?nr(n,a-(e-c)):n}(e))}function p(e){return l=void 0,f&&r?h(e):(r=i=void 0,o)}function y(){var e=Kn(),n=g(e);if(r=arguments,i=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(m,t),d?h(e):o}(s);if(u)return clearTimeout(l),l=setTimeout(m,t),h(s)}return void 0===l&&(l=setTimeout(m,t)),o}return t=er(t)||0,Qn(n)&&(d=!!n.leading,a=(u="maxWait"in n)?tr(er(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=i=l=void 0},y.flush=function(){return void 0===l?o:p(Kn())},y},ir=rr,ar=Sn;var or=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ar(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),ir(e,t,{leading:r,maxWait:t,trailing:i})},lr=function(e,t,n,r){switch(t){case"debounce":return rr(e,n,r);case"throttle":return or(e,n,r);default:return e}},sr=function(e){return"function"==typeof e},cr=function(){return"undefined"==typeof window},dr=function(e){return e instanceof Element||e instanceof HTMLDocument},ur=function(e,t,n,r){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!r||t.height===o&&!n?t:(e&&sr(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!cr()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(cr())return null;if(t)return document.querySelector(t);if(r&&dr(r))return r;if(n.targetRef&&dr(n.targetRef.current))return n.targetRef.current;var i=H(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,a=t.handleHeight,o=void 0===a||a,l=t.onResize;if(i||o){var s=ur(l,n.setState.bind(n),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!cr()&&s({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return sr(t)?"renderProp":sr(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,l=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,cr()||(n.resizeHandler=lr(n.createResizeHandler,i,o,l),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}vn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){cr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,r=t.children,i=t.nodeType,o=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(s);case"childFunction":return(e=r)(s);case"child":if((e=r).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(s,["targetRef"]);return d(e,c)}return d(e,s);case"childArray":return(e=r).map((function(e){return!!e&&d(e,s)}));default:return a.createElement(o,null)}}}(u);var fr=cr()?f:h;function hr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;const gr={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},mr={D1:{fontFamily:gr.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:gr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:gr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:gr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:gr.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:gr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:gr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:gr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:gr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:gr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:gr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:gr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:gr.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:gr.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},pr={D1:{fontFamily:gr.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:gr.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:gr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:gr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:gr.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:gr.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:gr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:gr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:gr.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:gr.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:gr.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:gr.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:gr.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:gr.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},yr={collections:{base:mr,oneservice:{D1:{fontFamily:gr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:gr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:gr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:gr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:gr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:gr.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:gr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:gr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:gr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:gr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:gr.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:gr.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:gr.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:gr.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:pr},defaultValue:"base"},$r=e=>t=>{const n=t.theme,r=Yt(yr,n[Nt.textStyleScheme]);return n.options&&n.options.textStyle?Lt(r,e,n.options.textStyle):Lt(r,e)},vr={D1:{fontFamily:$r("D1.fontFamily"),fontSize:$r("D1.fontSize"),fontWeight:$r("D1.fontWeight"),lineHeight:$r("D1.lineHeight"),letterSpacing:$r("D1.letterSpacing"),fontVariant:$r("D1.fontVariant")},D2:{fontFamily:$r("D2.fontFamily"),fontSize:$r("D2.fontSize"),fontWeight:$r("D2.fontWeight"),lineHeight:$r("D2.lineHeight"),letterSpacing:$r("D2.letterSpacing"),fontVariant:$r("D2.fontVariant")},D3:{fontFamily:$r("D3.fontFamily"),fontSize:$r("D3.fontSize"),fontWeight:$r("D3.fontWeight"),lineHeight:$r("D3.lineHeight"),letterSpacing:$r("D3.letterSpacing"),fontVariant:$r("D3.fontVariant")},D4:{fontFamily:$r("D4.fontFamily"),fontSize:$r("D4.fontSize"),fontWeight:$r("D4.fontWeight"),lineHeight:$r("D4.lineHeight"),letterSpacing:$r("D4.letterSpacing"),fontVariant:$r("D4.fontVariant")},DBody:{fontFamily:$r("DBody.fontFamily"),fontSize:$r("DBody.fontSize"),fontWeight:$r("DBody.fontWeight"),lineHeight:$r("DBody.lineHeight"),letterSpacing:$r("DBody.letterSpacing"),fontVariant:$r("DBody.fontVariant")},H1:{fontFamily:$r("H1.fontFamily"),fontSize:$r("H1.fontSize"),fontWeight:$r("H1.fontWeight"),lineHeight:$r("H1.lineHeight"),letterSpacing:$r("H1.letterSpacing"),fontVariant:$r("H1.fontVariant")},H2:{fontFamily:$r("H2.fontFamily"),fontSize:$r("H2.fontSize"),fontWeight:$r("H2.fontWeight"),lineHeight:$r("H2.lineHeight"),letterSpacing:$r("H2.letterSpacing"),fontVariant:$r("H2.fontVariant")},H3:{fontFamily:$r("H3.fontFamily"),fontSize:$r("H3.fontSize"),fontWeight:$r("H3.fontWeight"),lineHeight:$r("H3.lineHeight"),letterSpacing:$r("H3.letterSpacing"),fontVariant:$r("H3.fontVariant")},H4:{fontFamily:$r("H4.fontFamily"),fontSize:$r("H4.fontSize"),fontWeight:$r("H4.fontWeight"),lineHeight:$r("H4.lineHeight"),letterSpacing:$r("H4.letterSpacing"),fontVariant:$r("H4.fontVariant")},H5:{fontFamily:$r("H5.fontFamily"),fontSize:$r("H5.fontSize"),fontWeight:$r("H5.fontWeight"),lineHeight:$r("H5.lineHeight"),letterSpacing:$r("H5.letterSpacing"),fontVariant:$r("H5.fontVariant")},H6:{fontFamily:$r("H6.fontFamily"),fontSize:$r("H6.fontSize"),fontWeight:$r("H6.fontWeight"),lineHeight:$r("H6.lineHeight"),letterSpacing:$r("H6.letterSpacing"),fontVariant:$r("H6.fontVariant")},Body:{fontFamily:$r("Body.fontFamily"),fontSize:$r("Body.fontSize"),fontWeight:$r("Body.fontWeight"),lineHeight:$r("Body.lineHeight"),letterSpacing:$r("Body.letterSpacing"),fontVariant:$r("Body.fontVariant")},BodySmall:{fontFamily:$r("BodySmall.fontFamily"),fontSize:$r("BodySmall.fontSize"),fontWeight:$r("BodySmall.fontWeight"),lineHeight:$r("BodySmall.lineHeight"),letterSpacing:$r("BodySmall.letterSpacing"),fontVariant:$r("BodySmall.fontVariant")},XSmall:{fontFamily:$r("XSmall.fontFamily"),fontSize:$r("XSmall.fontSize"),fontWeight:$r("XSmall.fontWeight"),lineHeight:$r("XSmall.lineHeight"),letterSpacing:$r("XSmall.letterSpacing"),fontVariant:$r("XSmall.fontVariant")}},br=[gr.OpenSans,gr.PlusJakartaSans],Fr=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Sr=(e,t)=>n=>{var r;const i=vr[e].fontFamily(n),a=vr[e].fontWeight(n),o=br.find((e=>Object.values(e).includes(i)));return o?S`
                font-family: ${Fr(o,t)||Fr(o,a)||i};
                font-weight: normal !important;
            `:S`
            font-family: ${i};
            font-weight: ${null!==(r=Dr(t)||a)&&void 0!==r?r:"normal"};
        `},Dr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Br=e=>{if(e>0)return S`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},wr=Sr,xr=(e,t,n=!1)=>r=>{const i=vr[e],a=i.fontSize(r);return S`
            ${Sr(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            font-variant: ${i.fontVariant(r)||"normal"};
            ${S`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Or=(e=!1,t=!1,n=void 0)=>t?S`
            display: block;
            ${Br(n)}
        `:e?S`
            display: inline;
        `:S`
            display: block;
            ${Br(n)}
        `;var Hr;!function(e){e.D1=F.h1`
        ${e=>S`
                ${xr("D1",e.weight,e.paragraph)}
                color: ${Jt.Neutral[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=F.h1`
        ${e=>S`
                ${xr("D2",e.weight,e.paragraph)}
                color: ${Jt.Neutral[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=F.h1`
        ${e=>S`
                ${xr("D3",e.weight,e.paragraph)}
                color: ${Jt.Neutral[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=F.h1`
        ${e=>S`
                ${xr("D4",e.weight,e.paragraph)}
                color: ${Jt.Neutral[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=F.h1`
        ${e=>S`
                ${xr("DBody",e.weight,e.paragraph)}
                color: ${Jt.Neutral[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=F.h1`
        ${e=>S`
                ${xr("H1",e.weight,e.paragraph)}
                color: ${Jt.Neutral[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=F.h2`
        ${e=>S`
                ${xr("H2",e.weight,e.paragraph)}
                color: ${Jt.Neutral[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=F.h3`
        ${e=>S`
                ${xr("H3",e.weight,e.paragraph)}
                color: ${Jt.Neutral[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=F.h4`
        ${e=>S`
                ${xr("H4",e.weight,e.paragraph)}
                color: ${Jt.Neutral[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=F.h5`
        ${e=>S`
                ${xr("H5",e.weight,e.paragraph)}
                color: ${Jt.Neutral[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=F.h6`
        ${e=>S`
                ${xr("H6",e.weight,e.paragraph)}
                color: ${Jt.Neutral[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=F.p`
        ${e=>S`
                ${xr("Body",e.weight,e.paragraph)}
                color: ${Jt.Neutral[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=F.p`
        ${e=>S`
                ${xr("BodySmall",e.weight,e.paragraph)}
                color: ${Jt.Neutral[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=F.span`
        ${e=>S`
                ${xr("XSmall",e.weight,e.paragraph)}
                color: ${Jt.Neutral[1]};
                ${Or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>zr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>zr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Hr||(Hr={}));const kr=F.a`
    ${e=>S`
            ${xr(e.textStyle,e.weight)}
            color: ${Jt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Jt.Secondary};

                svg {
                    color: ${Jt.Secondary};
                }
            }
        `}
`,Er=F(E)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,zr=n=>{var{external:r=!1,children:i}=n,a=hr(n,["external","children"]);return t(kr,Object.assign({},a,{children:[i,r&&e(Er,{})]}))};var Ar;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ar||(Ar={}));const Mr=e=>{const{textSize:t}=e||{};return S`
        // Text styling
        ${t&&xr(t,"regular")}

        strong {
            font-family: ${gr.OpenSans.Semibold};
            ${t&&xr(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${gr.OpenSans.Semibold};
            ${t&&xr(t,"semibold")}
            color: ${Jt.Primary};
            text-decoration: none;

            svg {
                color: ${Jt.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Jt.Secondary};

                svg {
                    color: ${Jt.Secondary};
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
    `},Tr=F.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=Jt.Validation.Red.Background(e),n=Jt.Validation.Red.Border(e);break;case"success":t=Jt.Validation.Green.Background(e),n=Jt.Validation.Green.Border(e);break;case"warning":default:t=Jt.Validation.Orange.Background(e),n=Jt.Validation.Orange.Border(e);break;case"info":t=Jt.Validation.Blue.Background(e),n=Jt.Validation.Blue.Border(e);break;case"description":t=Jt.Neutral[7](e),n=Jt.Neutral[4](e)}return S`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${Jt.Neutral[1]};
    ${e=>"small"===e.$sizeType?Mr({textSize:"H6"}):Mr({textSize:"BodySmall"})}
`,Cr=F.div`
    display: flex;
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&S`
            align-items: center;
            height: 1lh;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Jt.Validation.Red.Icon(e);break;case"success":t=Jt.Validation.Green.Icon(e);break;case"warning":default:t=Jt.Validation.Orange.Icon(e);break;case"info":t=Jt.Validation.Blue.Icon(e);break;case"description":t=Jt.Neutral[4](e)}return S`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,_r=F(Hr.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?S`
                ${xr("H6","semibold")}
                margin-top: 0.25rem;
            `:S`
                ${xr("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${Jt.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${Jt.Primary};
    }
`,Wr=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Vr=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,jr=F.button`
    ${e=>"small"===e.$sizeType?S`
                ${xr("H6","semibold")}
            `:S`
                ${xr("H5","semibold")}
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

    color: ${Jt.Primary};
`,Rr=F(k)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,Lr={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Yr=e=>Object.keys(Lr).reduce(((t,n)=>{const r=Lr[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Nr=Yr("max-width"),Pr=(Yr("min-width"),e=>`\n\tmargin-bottom: ${e||0}rem;\n`),Ir=(F.ol`
    ${e=>Pr(e.bottomMargin)}
    margin-left: ${3}rem;

    ${Nr.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>xr(e.size,"regular")}
        position: relative;
        color: ${Jt.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,n=e.counterType||"decimal",r=e.counterSeparator||")";return S`
            li:before {
                content: counter(list, ${n}) "${r}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:n}=e;if(n){return S`
                counter-reset: list ${t?n+1:n-1};
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
    ${e=>Pr(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>xr(e.size,"regular")}
        color: ${Jt.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`),Jr=t=>{var{size:n="Body",children:r}=t,i=hr(t,["size","children"]);return e(Ir,Object.assign({size:n},i,{children:r}))},Zr=F.div`
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
                        border-color: ${Jt.Validation.Red.Icon};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Jt.Shadow.Red};
                        }
                    `:e.$disabled?S`
                        border-color: transparent;
                    `:S`
                        border-color: transparent;

                        :hover {
                            background: ${Jt.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?S`
                        border-color: ${Jt.Neutral[5]};
                    `:e.$disabled&&e.$selected?S`
                        border-color: ${Jt.Neutral[4]};
                    `:e.$error?S`
                        border-color: ${Jt.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Jt.Shadow.Red};
                        }
                    `:e.$selected?S`
                        border-color: ${Jt.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Jt.Shadow.Accent};
                        }
                    `:S`
                        background: ${Jt.Neutral[8]};
                        border-color: ${Jt.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Jt.Shadow.Accent};
                            border-color: ${Jt.Accent.Light[1]};
                        }
                    `}
`,Gr=F.input`
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
`,Ur=F.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,Xr=F.label`
    ${e=>e.$selected&&!e.$indicator?S`
                ${xr("H4","semibold")}
            `:S`
                ${xr("H4","regular")}
            `}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==n?n:"none"}};
    ${Nr.tablet} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==n?n:"none"}};
    }
    ${Nr.mobileL} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==n?n:"none"}};
    }
    color: ${Jt.Neutral[1]};

    ${e=>e.$disabled?S`
                color: ${Jt.Neutral[3]};
            `:e.$selected?S`
                color: ${Jt.Primary};
            `:void 0}
`,qr=F.div`
    ${xr("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${wr("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?S`
                color: ${Jt.Neutral[3]};
            `:e.$selected?S`
                color: ${Jt.Primary};
            `:S`
                color: ${Jt.Neutral[1]};
            `}
`,Qr=F.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?S`
                        background: ${Jt.Neutral[8]};
                    `:e.$disabled?S``:S`
                        :hover {
                            background: ${Jt.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected||e.$disabled&&e.$selected?S`
                        background: ${Jt.Neutral[6]};
                    `:e.$error?S`
                        background: ${Jt.Neutral[8]};
                    `:e.$selected?S`
                        background: ${Jt.Accent.Light[5]};
                    `:S`
                        background: ${Jt.Neutral[8]};
                    `}
`,Kr=F.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,ei=F.button`
    color: ${e=>e.$disabled?Jt.Neutral[3]:Jt.Validation.Red.Icon};
    white-space: nowrap;
    ${xr("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,ti=F.button`
    color: ${e=>e.disabled?Jt.Neutral[3]:Jt.Primary};
    ${xr("H4","semibold")}
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
`,ni=F.div`
    width: 100%;
    color: ${e=>e.$disabled?Jt.Neutral[3]:Jt.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,ri=F((n=>{var{type:r,className:i,children:a,actionLink:s,actionLinkIcon:c,sizeType:d="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:g}=n,m=hr(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[p,y]=l(!1),[$,v]=l(!1),{height:b,ref:F}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,a=void 0===i?1e3:i,s=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,f=void 0===u||u,h=e.targetRef,g=e.observerOptions,m=e.onResize,p=o(n),y=o(null),$=null!=h?h:y,v=o(),b=l({width:void 0,height:void 0}),F=b[0],S=b[1];return fr((function(){if(!cr()){var e=ur(m,S,d,f);v.current=lr((function(t){(d||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!p.current&&!cr()&&e({width:r,height:i}),p.current=!1}))}),r,a,s);var t=new window.ResizeObserver(v.current);return $.current&&t.observe($.current,g),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[r,a,s,d,f,m,g,$.current]),bn({ref:$},F)}();f((()=>{S()}),[g,b]);const S=()=>{y(!g),v(H())},H=()=>!!g&&b>g;return t(Tr,Object.assign({className:i,$type:r,$sizeType:d,"data-testid":m["data-testid"]},{children:[u&&e(Cr,Object.assign({$sizeType:d,$type:r},{children:(()=>{if(r&&h)return h;switch(r){case"success":return e(O,{});case"warning":return e(w,{});case"error":return e(B,{});case"info":case"description":return e(x,{});default:return null}})()})),t(Wr,{children:[t(Vr,Object.assign({$maxCollapsedHeight:H()?g:void 0,$showMore:p,$hasActionLink:!!s},{children:[e("div",Object.assign({ref:F},{children:a})),s&&t(_r,Object.assign({"data-testid":"action-link",$type:r,$sizeType:d},s,{children:[s.children,c||e(D,{})]}))]})),$&&t(jr,Object.assign({$sizeType:d,$type:r,type:"button",onClick:()=>y(!p)},{children:["Show ",p?"less":"more",e(Rr,{$expanded:p})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,ii=F.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${Mr({textSize:"BodySmall"})}

    ${e=>e.$disabled?S`
                color: ${Jt.Neutral[3]};
            `:e.$selected?S`
                color: ${Jt.Primary};
            `:S`
                color: ${Jt.Neutral[1]};
            `}
`,ai=F(Hr.BodySmall)`
    color: ${e=>e.$disabled?Jt.Neutral[3]:Jt.Validation.Red.Text};
`,oi=F(Jr)`
    li {
        color: ${e=>e.$disabled?Jt.Neutral[3]:Jt.Validation.Red.Text};
    }
`,li=({type:a="checkbox",indicator:s,checked:c,styleType:d="default",children:u,childrenMaxLines:h,subLabel:m,disabled:p,error:y,name:$,id:v,className:b,compositeSection:F,removable:S,onRemove:D,"data-testid":B,onChange:w,useContentWidth:x})=>{const{collapsible:O=!0,errors:H,children:k,initialExpanded:E}=F||{},[z,A]=l(c),[M,T]=l(E),C=g((()=>{const e=Array.isArray(H)&&(null==H?void 0:H.length)>0,t=!Array.isArray(H)&&!!H;return e||t}),[H]),[_]=l(yn.generate()),W=v?`${v}`:`tg-${_}`,V=o();f((()=>{A(c)}),[c]),f((()=>{z&&T(null==E||E)}),[z]);const j=e=>{if(!p){if(w)return void w(e);switch(a){case"checkbox":A((e=>!e));break;case"radio":case"yes":case"no":z||A(!0)}}},R=()=>{p||T(!M)},L=()=>{p||!D||D()},Y=()=>{let t;switch(a){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=a}return e(Gt,{type:t,active:z,disabled:p})},N=()=>{if(!m)return null;let t;return t="function"==typeof m?m():m,e(qr,Object.assign({"data-id":"toggle-sublabel",$disabled:p,$selected:z},{children:t}))},P=()=>{const n=!M&&!C;return O&&t(ti,Object.assign({$paddingTopRequired:n,disabled:p,onClick:R,"data-testid":M?"collapse-button":"expand-button"},{children:[M?"Show less":"Show more",e(M?i:r,{"aria-hidden":!0})]}))},I=r=>t(n,{children:[e(ai,Object.assign({weight:"semibold",$disabled:p},{children:"Error"})),e(oi,Object.assign({$disabled:p},{children:null==r?void 0:r.map(((t,n)=>e("li",Object.assign({id:`${W}-error-list-item-${n}`},{children:e(ai,Object.assign({weight:"semibold",$disabled:p},{children:t}))}),n)))}))]});return t(Zr,Object.assign({$selected:z,$disabled:p,className:b,$styleType:d,$error:y,$indicator:s,$useContentWidth:x,id:v,"data-testid":B},{children:[t(Qr,Object.assign({id:`${W}-header-container`,$disabled:p,$error:y,$selected:z,$indicator:s,$styleType:d},{children:[t(Kr,Object.assign({$addPadding:S},{children:[e(Gr,{ref:V,name:$,id:`${W}-input`,type:"checkbox"===a?"checkbox":"radio","data-testid":"toggle-input",disabled:p,onChange:j,checked:z}),s&&Y(),t(Ur,{children:[e(Xr,Object.assign({htmlFor:`${W}-input`,$selected:z,$indicator:s,$disabled:p,"data-testid":`${W}-toggle-label`,$maxLines:h},{children:u})),m&&N()]})]})),S&&e(ei,Object.assign({type:"button",$disabled:p,onClick:L,id:`${W}-remove-button`},{children:"Remove"}))]})),k&&t("div",{children:[(!O||M)&&e(ii,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!O,$disabled:p},{children:k})),O&&!M&&C&&e(ni,Object.assign({$disabled:p,onClick:R,id:`${W}-error-alert`},{children:e(ri,Object.assign({type:p?"description":"error",className:b,showIcon:!0},{children:Array.isArray(H)?I(H):H}))})),P()]})]}))};export{li as Toggle};
//# sourceMappingURL=index.js.map
