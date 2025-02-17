import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as c,PureComponent as u,useEffect as d,useLayoutEffect as f}from"react";import h,{css as p,keyframes as m}from"styled-components";import{ExternalIcon as g}from"@lifesg/react-icons/external";import{EyeIcon as y}from"@lifesg/react-icons/eye";import{EyeSlashIcon as v}from"@lifesg/react-icons/eye-slash";import{ICircleFillIcon as b}from"@lifesg/react-icons/i-circle-fill";import{useFloatingTree as $,FloatingTree as S,useFloatingNodeId as F,FloatingNode as x,useFloating as w,autoUpdate as O,offset as D,flip as B,shift as k,limitShift as j,useClick as E,useDismiss as H,useHover as _,useInteractions as C,FloatingPortal as M,FloatingFocusManager as z}from"@floating-ui/react";import T,{findDOMNode as A}from"react-dom";import{CrossIcon as P}from"@lifesg/react-icons/cross";import{ExclamationTriangleIcon as R}from"@lifesg/react-icons/exclamation-triangle";import{ArrowRightIcon as I}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as L}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as W}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as Y}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as N}from"@lifesg/react-icons";function V(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;const J={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},U=e=>Object.keys(J).reduce(((t,n)=>{const r=J[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),q=U("max-width"),Z=(U("min-width"),J),Q=h.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:i,$mobileStart:o,$mobileSpan:a}=e;return p`
            grid-column: ${t||"auto"} / span ${n||1};

            ${q.tablet} {
                grid-column: ${r||"auto"} / span
                    ${i||1};
            }

            ${q.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${a||1};
            }
        `}}
`,G=i.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:o}=t,a=V(t,["mobileCols","tabletCols","desktopCols"]);return e(Q,Object.assign({ref:n},(()=>{const e=i||r,t=r,n=X(o||i||r),a=X(e),s=X(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),X=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let o;return o=i===r?1:i-r,{start:r,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},K=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=V(t,["children","data-testid","type","stretch"]);return e(ee,Object.assign({ref:n,"data-testid":i,$type:o,$stretch:a},s,{children:r}))})),ee=h.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?p`
                padding: 0 3rem;
            `:p`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${q.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${q.tablet} {
        max-width: 720px;
    }
    ${q.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return p`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${q.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${q.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return p`
                    display: flex;
                    flex-direction: column;
                `;default:return p`
                    display: flex;
                `}}}
`,te=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:o=!1}=t,a=V(t,["children","data-testid","stretch"]);return e(ne,Object.assign({ref:n,"data-testid":i,$stretch:o},a,{children:r}))})),ne=h.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?p`
                ${q.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:p`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,re=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=V(t,["children","data-testid","className","type","stretch"]);return e(te,Object.assign({ref:n,"data-testid":i,className:o,stretch:s},l,{children:e(K,Object.assign({"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s},{children:r}))}))})),ie={Section:te,Container:K,Content:re,ColDiv:G};var oe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ae(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var se=Array.isArray,le="object"==typeof oe&&oe&&oe.Object===Object&&oe,ce="object"==typeof self&&self&&self.Object===Object&&self,ue=le||ce||Function("return this")(),de=ue.Symbol,fe=de,he=Object.prototype,pe=he.hasOwnProperty,me=he.toString,ge=fe?fe.toStringTag:void 0;var ye=function(e){var t=pe.call(e,ge),n=e[ge];try{e[ge]=void 0;var r=!0}catch(e){}var i=me.call(e);return r&&(t?e[ge]=n:delete e[ge]),i},ve=Object.prototype.toString;var be=ye,$e=function(e){return ve.call(e)},Se=de?de.toStringTag:void 0;var Fe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Se&&Se in Object(e)?be(e):$e(e)};var xe=Fe,we=function(e){return null!=e&&"object"==typeof e};var Oe=function(e){return"symbol"==typeof e||we(e)&&"[object Symbol]"==xe(e)},De=se,Be=Oe,ke=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,je=/^\w*$/;var Ee=function(e,t){if(De(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Be(e))||(je.test(e)||!ke.test(e)||null!=t&&e in Object(t))};var He=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},_e=Fe,Ce=He;var Me,ze=function(e){if(!Ce(e))return!1;var t=_e(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Te=ue["__core-js_shared__"],Ae=(Me=/[^.]+$/.exec(Te&&Te.keys&&Te.keys.IE_PROTO||""))?"Symbol(src)_1."+Me:"";var Pe=function(e){return!!Ae&&Ae in e},Re=Function.prototype.toString;var Ie=ze,Le=Pe,We=He,Ye=function(e){if(null!=e){try{return Re.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ne=/^\[object .+?Constructor\]$/,Ve=Function.prototype,Je=Object.prototype,Ue=Ve.toString,qe=Je.hasOwnProperty,Ze=RegExp("^"+Ue.call(qe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Qe=function(e){return!(!We(e)||Le(e))&&(Ie(e)?Ze:Ne).test(Ye(e))},Ge=function(e,t){return null==e?void 0:e[t]};var Xe=function(e,t){var n=Ge(e,t);return Qe(n)?n:void 0},Ke=Xe(Object,"create"),et=Ke;var tt=function(){this.__data__=et?et(null):{},this.size=0};var nt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},rt=Ke,it=Object.prototype.hasOwnProperty;var ot=function(e){var t=this.__data__;if(rt){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return it.call(t,e)?t[e]:void 0},at=Ke,st=Object.prototype.hasOwnProperty;var lt=Ke;var ct=tt,ut=nt,dt=ot,ft=function(e){var t=this.__data__;return at?void 0!==t[e]:st.call(t,e)},ht=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=lt&&void 0===t?"__lodash_hash_undefined__":t,this};function pt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pt.prototype.clear=ct,pt.prototype.delete=ut,pt.prototype.get=dt,pt.prototype.has=ft,pt.prototype.set=ht;var mt=pt;var gt=function(){this.__data__=[],this.size=0};var yt=function(e,t){return e===t||e!=e&&t!=t};var vt=function(e,t){for(var n=e.length;n--;)if(yt(e[n][0],t))return n;return-1},bt=vt,$t=Array.prototype.splice;var St=vt;var Ft=vt;var xt=vt;var wt=gt,Ot=function(e){var t=this.__data__,n=bt(t,e);return!(n<0)&&(n==t.length-1?t.pop():$t.call(t,n,1),--this.size,!0)},Dt=function(e){var t=this.__data__,n=St(t,e);return n<0?void 0:t[n][1]},Bt=function(e){return Ft(this.__data__,e)>-1},kt=function(e,t){var n=this.__data__,r=xt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function jt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}jt.prototype.clear=wt,jt.prototype.delete=Ot,jt.prototype.get=Dt,jt.prototype.has=Bt,jt.prototype.set=kt;var Et=jt,Ht=Xe(ue,"Map"),_t=mt,Ct=Et,Mt=Ht;var zt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Tt=function(e,t){var n=e.__data__;return zt(t)?n["string"==typeof t?"string":"hash"]:n.map},At=Tt;var Pt=Tt;var Rt=Tt;var It=Tt;var Lt=function(){this.size=0,this.__data__={hash:new _t,map:new(Mt||Ct),string:new _t}},Wt=function(e){var t=At(this,e).delete(e);return this.size-=t?1:0,t},Yt=function(e){return Pt(this,e).get(e)},Nt=function(e){return Rt(this,e).has(e)},Vt=function(e,t){var n=It(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Jt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Jt.prototype.clear=Lt,Jt.prototype.delete=Wt,Jt.prototype.get=Yt,Jt.prototype.has=Nt,Jt.prototype.set=Vt;var Ut=Jt;function qt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(qt.Cache||Ut),n}qt.Cache=Ut;var Zt=qt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gt=/\\(\\)?/g,Xt=function(e){var t=Zt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Qt,(function(e,n,r,i){t.push(r?i.replace(Gt,"$1"):n||e)})),t}));var Kt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},en=se,tn=Oe,nn=de?de.prototype:void 0,rn=nn?nn.toString:void 0;var on=function e(t){if("string"==typeof t)return t;if(en(t))return Kt(t,e)+"";if(tn(t))return rn?rn.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},an=on;var sn=se,ln=Ee,cn=Xt,un=function(e){return null==e?"":an(e)};var dn=Oe;var fn=function(e,t){return sn(e)?e:ln(e,t)?[e]:cn(un(e))},hn=function(e){if("string"==typeof e||dn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var pn=function(e,t){for(var n=0,r=(t=fn(t,e)).length;null!=e&&n<r;)e=e[hn(t[n++])];return n&&n==r?e:void 0};var mn=ae((function(e,t,n){var r=null==e?void 0:pn(e,t);return void 0===r?n:r}));const gn=(e,t,n)=>t?mn(n,t)||mn(e,t):n||e,yn=(e,t)=>{const n=t||e.defaultValue;return mn(e.collections,n)};var vn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(vn||(vn={}));const bn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},$n=e=>t=>{const n=t.theme,r=yn(bn,n[vn.colorScheme]);return n.options&&n.options.color?gn(r,e,n.options.color):gn(r,e)},Sn={Brand:{1:$n("Brand.1"),2:$n("Brand.2"),3:$n("Brand.3"),4:$n("Brand.4"),5:$n("Brand.5"),6:$n("Brand.6")},Primary:$n("Primary"),PrimaryDark:$n("PrimaryDark"),Secondary:$n("Secondary"),Accent:{Light:{1:$n("Accent.Light.1"),2:$n("Accent.Light.2"),3:$n("Accent.Light.3"),4:$n("Accent.Light.4"),5:$n("Accent.Light.5"),6:$n("Accent.Light.6")},Dark:{1:$n("Accent.Dark.1"),2:$n("Accent.Dark.2"),3:$n("Accent.Dark.3")}},Neutral:{1:$n("Neutral.1"),2:$n("Neutral.2"),3:$n("Neutral.3"),4:$n("Neutral.4"),5:$n("Neutral.5"),6:$n("Neutral.6"),7:$n("Neutral.7"),8:$n("Neutral.8")},Validation:{Green:{Text:$n("Validation.Green.Text"),Icon:$n("Validation.Green.Icon"),Border:$n("Validation.Green.Border"),Background:$n("Validation.Green.Background")},Orange:{Text:$n("Validation.Orange.Text"),Icon:$n("Validation.Orange.Icon"),Border:$n("Validation.Orange.Border"),Background:$n("Validation.Orange.Background"),Badge:$n("Validation.Orange.Badge")},Red:{Text:$n("Validation.Red.Text"),Icon:$n("Validation.Red.Icon"),Border:$n("Validation.Red.Border"),Background:$n("Validation.Red.Background")},Blue:{Text:$n("Validation.Blue.Text"),Icon:$n("Validation.Blue.Icon"),Border:$n("Validation.Blue.Border"),Background:$n("Validation.Blue.Background")}},Shadow:{Accent:$n("Shadow.Accent"),Red:$n("Shadow.Red"),Elevation:$n("Shadow.Elevation")}},Fn={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},xn={D1:{fontFamily:Fn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Fn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Fn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Fn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Fn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Fn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Fn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Fn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Fn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Fn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Fn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Fn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Fn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Fn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},wn={D1:{fontFamily:Fn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Fn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Fn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Fn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Fn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Fn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Fn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Fn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Fn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Fn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Fn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Fn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Fn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Fn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},On={collections:{base:xn,oneservice:{D1:{fontFamily:Fn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Fn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Fn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Fn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Fn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Fn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Fn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Fn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Fn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Fn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Fn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Fn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Fn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Fn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:wn},defaultValue:"base"},Dn=e=>t=>{const n=t.theme,r=yn(On,n[vn.textStyleScheme]);return n.options&&n.options.textStyle?gn(r,e,n.options.textStyle):gn(r,e)},Bn={D1:{fontFamily:Dn("D1.fontFamily"),fontSize:Dn("D1.fontSize"),fontWeight:Dn("D1.fontWeight"),lineHeight:Dn("D1.lineHeight"),letterSpacing:Dn("D1.letterSpacing")},D2:{fontFamily:Dn("D2.fontFamily"),fontSize:Dn("D2.fontSize"),fontWeight:Dn("D2.fontWeight"),lineHeight:Dn("D2.lineHeight"),letterSpacing:Dn("D2.letterSpacing")},D3:{fontFamily:Dn("D3.fontFamily"),fontSize:Dn("D3.fontSize"),fontWeight:Dn("D3.fontWeight"),lineHeight:Dn("D3.lineHeight"),letterSpacing:Dn("D3.letterSpacing")},D4:{fontFamily:Dn("D4.fontFamily"),fontSize:Dn("D4.fontSize"),fontWeight:Dn("D4.fontWeight"),lineHeight:Dn("D4.lineHeight"),letterSpacing:Dn("D4.letterSpacing")},DBody:{fontFamily:Dn("DBody.fontFamily"),fontSize:Dn("DBody.fontSize"),fontWeight:Dn("DBody.fontWeight"),lineHeight:Dn("DBody.lineHeight"),letterSpacing:Dn("DBody.letterSpacing")},H1:{fontFamily:Dn("H1.fontFamily"),fontSize:Dn("H1.fontSize"),fontWeight:Dn("H1.fontWeight"),lineHeight:Dn("H1.lineHeight"),letterSpacing:Dn("H1.letterSpacing")},H2:{fontFamily:Dn("H2.fontFamily"),fontSize:Dn("H2.fontSize"),fontWeight:Dn("H2.fontWeight"),lineHeight:Dn("H2.lineHeight"),letterSpacing:Dn("H2.letterSpacing")},H3:{fontFamily:Dn("H3.fontFamily"),fontSize:Dn("H3.fontSize"),fontWeight:Dn("H3.fontWeight"),lineHeight:Dn("H3.lineHeight"),letterSpacing:Dn("H3.letterSpacing")},H4:{fontFamily:Dn("H4.fontFamily"),fontSize:Dn("H4.fontSize"),fontWeight:Dn("H4.fontWeight"),lineHeight:Dn("H4.lineHeight"),letterSpacing:Dn("H4.letterSpacing")},H5:{fontFamily:Dn("H5.fontFamily"),fontSize:Dn("H5.fontSize"),fontWeight:Dn("H5.fontWeight"),lineHeight:Dn("H5.lineHeight"),letterSpacing:Dn("H5.letterSpacing")},H6:{fontFamily:Dn("H6.fontFamily"),fontSize:Dn("H6.fontSize"),fontWeight:Dn("H6.fontWeight"),lineHeight:Dn("H6.lineHeight"),letterSpacing:Dn("H6.letterSpacing")},Body:{fontFamily:Dn("Body.fontFamily"),fontSize:Dn("Body.fontSize"),fontWeight:Dn("Body.fontWeight"),lineHeight:Dn("Body.lineHeight"),letterSpacing:Dn("Body.letterSpacing")},BodySmall:{fontFamily:Dn("BodySmall.fontFamily"),fontSize:Dn("BodySmall.fontSize"),fontWeight:Dn("BodySmall.fontWeight"),lineHeight:Dn("BodySmall.lineHeight"),letterSpacing:Dn("BodySmall.letterSpacing")},XSmall:{fontFamily:Dn("XSmall.fontFamily"),fontSize:Dn("XSmall.fontSize"),fontWeight:Dn("XSmall.fontWeight"),lineHeight:Dn("XSmall.lineHeight"),letterSpacing:Dn("XSmall.letterSpacing")}},kn=[Fn.OpenSans,Fn.PlusJakartaSans],jn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},En=(e,t)=>n=>{var r;const i=Bn[e].fontFamily(n),o=Bn[e].fontWeight(n),a=kn.find((e=>Object.values(e).includes(i)));return a?p`
                font-family: ${jn(a,t)||jn(a,o)||i};
                font-weight: normal !important;
            `:p`
            font-family: ${i};
            font-weight: ${null!==(r=Hn(t)||o)&&void 0!==r?r:"normal"};
        `},Hn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},_n=e=>{if(e>0)return p`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Cn=En,Mn=(e,t,n=!1)=>r=>{const i=Bn[e],o=i.fontSize(r);return p`
            ${En(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${p`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},zn=(e=!1,t=!1,n=void 0)=>t?p`
            display: block;
            ${_n(n)}
        `:e?p`
            display: inline;
        `:p`
            display: block;
            ${_n(n)}
        `;var Tn;!function(e){e.D1=h.h1`
        ${e=>p`
                ${Mn("D1",e.weight,e.paragraph)}
                color: ${Sn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=h.h1`
        ${e=>p`
                ${Mn("D2",e.weight,e.paragraph)}
                color: ${Sn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=h.h1`
        ${e=>p`
                ${Mn("D3",e.weight,e.paragraph)}
                color: ${Sn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=h.h1`
        ${e=>p`
                ${Mn("D4",e.weight,e.paragraph)}
                color: ${Sn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=h.h1`
        ${e=>p`
                ${Mn("DBody",e.weight,e.paragraph)}
                color: ${Sn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=h.h1`
        ${e=>p`
                ${Mn("H1",e.weight,e.paragraph)}
                color: ${Sn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=h.h2`
        ${e=>p`
                ${Mn("H2",e.weight,e.paragraph)}
                color: ${Sn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=h.h3`
        ${e=>p`
                ${Mn("H3",e.weight,e.paragraph)}
                color: ${Sn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=h.h4`
        ${e=>p`
                ${Mn("H4",e.weight,e.paragraph)}
                color: ${Sn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=h.h5`
        ${e=>p`
                ${Mn("H5",e.weight,e.paragraph)}
                color: ${Sn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=h.h6`
        ${e=>p`
                ${Mn("H6",e.weight,e.paragraph)}
                color: ${Sn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=h.p`
        ${e=>p`
                ${Mn("Body",e.weight,e.paragraph)}
                color: ${Sn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=h.p`
        ${e=>p`
                ${Mn("BodySmall",e.weight,e.paragraph)}
                color: ${Sn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=h.span`
        ${e=>p`
                ${Mn("XSmall",e.weight,e.paragraph)}
                color: ${Sn.Neutral[1]};
                ${zn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Rn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Rn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Tn||(Tn={}));const An=h.a`
    ${e=>p`
            ${Mn(e.textStyle,e.weight)}
            color: ${Sn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Sn.Secondary};

                svg {
                    color: ${Sn.Secondary};
                }
            }
        `}
`,Pn=h(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Rn=n=>{var{external:r=!1,children:i}=n,o=V(n,["external","children"]);return t(An,Object.assign({},o,{children:[i,r&&e(Pn,{})]}))};var In;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(In||(In={}));const Ln=p`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${q.mobileL} {
        grid-column: 1 / -1;
    }
`,Wn=h(ie.Content)`
    background: ${({$background:e})=>e?Sn.Neutral[7]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,Yn=h(Tn.H3)`
    margin-bottom: 1rem;
    ${Ln}
`,Nn=h(Tn.Body)`
    margin-bottom: 2rem;
    ${Ln}
`,Vn=h.div`
    ${Ln}
`,Jn=h.ul`
    ${Ln}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${q.tablet} {
        column-gap: 1.5rem;
    }

    ${q.mobileL} {
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,Un=i.forwardRef(((t,n)=>{var{stretch:r}=t,i=V(t,["stretch"]);return e(Jn,Object.assign({ref:n,$stretch:r},i))}));var qn,Zn={exports:{}};qn=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var i=e.expressions.every((function(e){var n=e.feature,r=e.modifier,i=e.value,o=t[n];if(!o)return!1;switch(n){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=u(i),o=u(o);break;case"resolution":i=c(i),o=c(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(r){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!n||!i&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),o=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(i);return{modifier:n[1],feature:n[2],value:t[2]}})),l}))}function l(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=/[A-Z]/g,i=/^ms-/,o={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(o.hasOwnProperty(e))return o[e];var t=e.replace(r,a);return o[e]=i.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,n)=>{var r=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function o(e,t,n){var o=this;if(i&&!n){var a=i.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=r(e,t),this.media=e;function s(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,n){return new o(e,t,n)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))n.call(o,c)&&(s[c]=o[c]);if(t){a=t(o);for(var u=0;u<a.length;u++)r.call(o,a[u])&&(s[a[u]]=o[a[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,n)=>{var r,i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,n,null,i)}catch(e){u=e}if(!u||u instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in o)){o[u.message]=!0;var f=l?l():"";r("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),o=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:m((function(t,n,r,i,o){var a=t[n];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+r+" `"+o+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||d;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,i,o+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===$(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+S(n)+" at index "+t+"."),c}return m((function(t,n,r,i,o){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,i,o,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,i,o){var s=t[n],l=b(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(r,i,o,c,$(u));var d=u(s,c,r,i,o+"."+c,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,i,l){var c=t[n],u=b(c);if("object"!==u)return new p("Invalid "+i+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=o({},t[n],e);for(var f in d){var h=e[f];if(s(e,f)&&"function"!=typeof h)return y(r,i,l,f,$(h));if(!h)return new p("Invalid "+i+" `"+l+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=h(c,f,r,i,l+"."+f,a);if(m)return m}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},i=0;function o(o,s,l,c,u,f,h){if(c=c||d,f=f||l,h!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,i++)}}return null==s[l]?o?null===s[l]?new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,f)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function g(e){return m((function(t,n,r,i,o,a){var s=t[n];return b(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+$(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,o=r.call(t);if(r!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function $(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function S(e){var t=$(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=l,f.resetWarningCache=l.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,t,n)=>{var r=n(/*! react-is */"./node_modules/react-is/index.js");e.exports=n(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(r.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var h=e.type;switch(h){case c:case u:case i:case a:case o:case f:return h;default:var g=h&&h.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case r:return t}}}var S=c,F=u,x=l,w=s,O=n,D=d,B=i,k=m,j=p,E=r,H=a,_=o,C=f,M=!1;function z(e){return $(e)===u}t.AsyncMode=S,t.ConcurrentMode=F,t.ContextConsumer=x,t.ContextProvider=w,t.Element=O,t.ForwardRef=D,t.Fragment=B,t.Lazy=k,t.Memo=j,t.Portal=E,t.Profiler=H,t.StrictMode=_,t.Suspense=C,t.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),z(e)||$(e)===c},t.isConcurrentMode=z,t.isContextConsumer=function(e){return $(e)===l},t.isContextProvider=function(e){return $(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return $(e)===d},t.isFragment=function(e){return $(e)===i},t.isLazy=function(e){return $(e)===m},t.isMemo=function(e){return $(e)===p},t.isPortal=function(e){return $(e)===r},t.isProfiler=function(e){return $(e)===a},t.isStrictMode=function(e){return $(e)===o},t.isSuspense=function(e){return $(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===a||e===o||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=$}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,n)=>{e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,n)=>{function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(var o=0;o<i;o++){var a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function i(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>r})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,i=e.onChange,a=r(e,["children","device","onChange"]),s=(0,o.default)(a,n,i);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(/*! react */"react").createContext)(void 0);t.default=r},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var i=r(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=i.default;var o=r(n(/*! ./Component */"./src/Component.ts"));t.default=o.default;var a=r(n(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var s=r(n(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},u=i(c,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),f=r(r({},l),d);t.default={all:f,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),o=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],o=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&o(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(c.default),n=function(){return u(e)||u(t)},r=(0,i.useState)(n),o=r[0],a=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,o.default)(e,t||{},!!t)},r=(0,i.useState)(n),a=r[0],s=r[1],l=d();return(0,i.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),h=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),p=d();return(0,i.useEffect)((function(){p&&n&&n(h)}),[h]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var Qn=Zn.exports=qn(i),Gn={exports:{}};Gn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",$={};$[b]=g;var S="$isDayjsObject",F=function(e){return e instanceof D||!(!e||!e[S])},x=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();$[o]&&(i=o),n&&($[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;$[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},w=function(e,t){if(F(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},O=v;O.l=x,O.i=F,O.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function g(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[S]=!0}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return O},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return w(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<w(e)},y.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!O.u(t)||t,u=O.p(e),h=function(e,t){var i=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,g):h(0,g+1);case l:var b=this.$locale().weekStart||0,$=(m<b?m+7:m)-b;return h(r?y-$:y+(6-$),g);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=O.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(f,1);m.$d[h](p),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[O.p(e)]()},y.add=function(r,u){var f,h=this;r=Number(r);var p=O.p(u),m=function(e){var t=w(h);return O.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(f={},f[o]=t,f[a]=n,f[i]=e,f)[p]||1,y=this.$d.getTime()+r*g;return O.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},f=function(e){return O.s(o%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return O.s(t.$y,4,"0");case"M":return s+1;case"MM":return O.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return O.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return O.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return O.s(a,2,"0");case"s":return String(t.$s);case"ss":return O.s(t.$s,2,"0");case"SSS":return O.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,h){var p,m=this,g=O.p(f),y=w(r),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,$=function(){return O.m(m,y)};switch(g){case d:p=$()/12;break;case c:p=$();break;case u:p=$()/3;break;case l:p=(b-v)/6048e5;break;case s:p=(b-v)/864e5;break;case a:p=b/n;break;case o:p=b/t;break;case i:p=b/e;break;default:p=b}return h?p:O.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return O.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),B=D.prototype;return w.prototype=B,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,D,w),e.$i=!0),w},w.locale=x,w.isDayjs=F,w.unix=function(e){return w(1e3*e)},w.en=$[b],w.Ls=$,w.p={},w}();var Xn=ae(Gn.exports),Kn={exports:{}};Kn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],h=u&&u[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,p=a||(i||o?1:h.getDate()),m=i||h.getFullYear(),g=0;i&&!o||(g=o>0?o-1:h.getMonth());var y=s||0,v=l||0,b=c||0,$=u||0;return d?new Date(Date.UTC(m,g,p,y,v,b,$+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,p,y,v,b,$)):new Date(m,g,p,y,v,b,$)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var er=ae(Kn.exports),tr={exports:{}};tr.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var nr=ae(tr.exports),rr={exports:{}};rr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var ir=ae(rr.exports),or={exports:{}};or.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var ar,sr,lr,cr=ae(or.exports),ur={exports:{}},dr=ae(ur.exports=(ar={year:0,month:1,day:2,hour:3,minute:4,second:5},sr={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=sr[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),sr[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=ar[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],f=24===d?0:d,h=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));Xn.extend(nr),Xn.extend(cr),Xn.extend(ir),Xn.extend(er),Xn.extend(dr),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Xn(t).startOf("week");return fr(n).map((e=>hr(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return hr(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Xn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Xn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Xn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?Xn(r):void 0,i?Xn(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(lr||(lr={}));const fr=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},hr=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},pr=[1,3,5,7,8,10,12],mr=[4,6,9,11];var gr,yr,vr,br;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":pr.includes(o)?Math.min(i,31).toString():mr.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Xn(e,n);return Xn(t,n).diff(r,"minute")},e.toDayjs=e=>e?Xn(e):Xn(),e.addMinutesToTime=(e,t,n="HH:mm")=>Xn(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>Xn(e).isSame(Xn(t),n)}(gr||(gr={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Xn(e).isBefore(r,"day"))||!(!i||!Xn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Xn(e).isValid())return e}return""}}(yr||(yr={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(vr||(vr={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,r+1)+o.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(br||(br={}));var $r=function(e,t){return $r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},$r(e,t)};var Sr=function(){return Sr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Sr.apply(this,arguments)};var Fr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var xr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},wr="object"==typeof Fr&&Fr&&Fr.Object===Object&&Fr,Or="object"==typeof self&&self&&self.Object===Object&&self,Dr=wr||Or||Function("return this")(),Br=Dr,kr=function(){return Br.Date.now()},jr=/\s/;var Er=function(e){for(var t=e.length;t--&&jr.test(e.charAt(t)););return t},Hr=/^\s+/;var _r=function(e){return e?e.slice(0,Er(e)+1).replace(Hr,""):e},Cr=Dr.Symbol,Mr=Cr,zr=Object.prototype,Tr=zr.hasOwnProperty,Ar=zr.toString,Pr=Mr?Mr.toStringTag:void 0;var Rr=function(e){var t=Tr.call(e,Pr),n=e[Pr];try{e[Pr]=void 0;var r=!0}catch(e){}var i=Ar.call(e);return r&&(t?e[Pr]=n:delete e[Pr]),i},Ir=Object.prototype.toString;var Lr=Rr,Wr=function(e){return Ir.call(e)},Yr=Cr?Cr.toStringTag:void 0;var Nr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Yr&&Yr in Object(e)?Lr(e):Wr(e)},Vr=function(e){return null!=e&&"object"==typeof e};var Jr=_r,Ur=xr,qr=function(e){return"symbol"==typeof e||Vr(e)&&"[object Symbol]"==Nr(e)},Zr=/^[-+]0x[0-9a-f]+$/i,Qr=/^0b[01]+$/i,Gr=/^0o[0-7]+$/i,Xr=parseInt;var Kr=xr,ei=kr,ti=function(e){if("number"==typeof e)return e;if(qr(e))return NaN;if(Ur(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ur(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Jr(e);var n=Qr.test(e);return n||Gr.test(e)?Xr(e.slice(2),n?2:8):Zr.test(e)?NaN:+e},ni=Math.max,ri=Math.min;var ii=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function m(){var e=ei();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?ri(n,o-(e-c)):n}(e))}function g(e){return s=void 0,f&&r?h(e):(r=i=void 0,a)}function y(){var e=ei(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?h(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),h(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=ti(t)||0,Kr(n)&&(u=!!n.leading,o=(d="maxWait"in n)?ni(ti(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:g(ei())},y},oi=ii,ai=xr;var si=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ai(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),oi(e,t,{leading:r,maxWait:t,trailing:i})},li=function(e,t,n,r){switch(t){case"debounce":return ii(e,n,r);case"throttle":return si(e,n,r);default:return e}},ci=function(e){return"function"==typeof e},ui=function(){return"undefined"==typeof window},di=function(e){return e instanceof Element||e instanceof HTMLDocument},fi=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&ci(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ui()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ui())return null;if(t)return document.querySelector(t);if(r&&di(r))return r;if(n.targetRef&&di(n.targetRef.current))return n.targetRef.current;var i=A(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=fi(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!ui()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return ci(t)?"renderProp":ci(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,ui()||(n.resizeHandler=li(n.createResizeHandler,i,a,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}$r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ui()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return c(e,u)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return r.createElement(a,null)}}}(u);var hi=ui()?d:f;const pi=h.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return p`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,mi=h.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=p`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=p`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=p`
                transition: none;
            `),t}}
`;var gi;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(gi||(gi={}));const yi=({show:t=!1,rootId:n,onOverlayClick:r,children:s,backgroundOpacity:l,backgroundBlur:c=!0,disableTransition:u=!1,enableOverlayClick:f=!1,zIndex:h,id:p})=>{const[m,g]=a(null),[y,v]=a(),[b]=a((()=>vr.generate())),S=F(),w=o(),O=o(null),D=s&&i.cloneElement(s,{ref:O}),B=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root",k=null!=h?h:y?99999:99998;(e=>{const t=$();d((()=>{if(!t)return;const n={zIndex:e};t.events.emit(gi.Change,n)}),[t,e]),d((()=>{if(!t)return;const n=()=>{const n={zIndex:e};t.events.emit(gi.Change,n)};return null==t||t.events.on(gi.Ready,n),()=>null==t?void 0:t.events.off(gi.Ready,n)}),[t,e])})(k),d((()=>(_(),g(E()),()=>{A(),M().length<1&&C("remove")})),[]),d((()=>{if(t){const e=H();j(e),z();const t=setTimeout((()=>{C("add")}),200);return()=>clearTimeout(t)}{A();const e=setTimeout((()=>{M().length<1&&C("remove")}),200);return()=>clearTimeout(e)}}),[t]);const j=e=>{w.current=e,v(e)},E=()=>document&&n?document.getElementById(n):document?document.body:null,H=()=>M().length>0,_=()=>{if(!document.getElementById(bi)){const e=document.createElement("style");e.id=bi;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${$i} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${$i}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},C=e=>{const t=document.body.classList.contains($i);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove($i):document.body.classList.add($i)},M=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},z=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=[...e,b].join(",")},A=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==b)).join(",")},P=e=>{var t;const n=null===(t=O.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&f&&(e.preventDefault(),r())};return m?T.createPortal(e(pi,Object.assign({id:B,"data-testid":B,$show:t,$zIndex:k},{children:s&&e(x,Object.assign({id:S},{children:e(mi,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:l||(y?.5:.8),$backgroundBlur:c,$disableTransition:u,onClick:P},{children:D}))}))})),m):null},vi=t=>e(S,{children:e(yi,Object.assign({},t))}),bi="lifesg-ds-overlay-stylesheet",$i="lifesg-ds-overlay-open",Si=h.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${q.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Fi=t=>{var{id:n="modal",show:r,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:u,dismissKeyboardOnShow:f=!0}=t,h=V(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[p,m]=a(),[g,y]=a();d((()=>window.visualViewport?(b(),window.visualViewport.addEventListener("resize",b),()=>{window.visualViewport.removeEventListener("resize",b)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),d((()=>{var e,t;r&&f&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const v=()=>{const e=.01*window.innerHeight;m(e)},b=()=>{const e=.01*window.visualViewport.height;m(e),y(window.visualViewport.offsetTop)};return e(vi,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:s,onOverlayClick:u,id:n,rootId:l,zIndex:c},{children:e(Si,Object.assign({show:r,animationFrom:i,"data-testid":n,verticalHeight:p,offsetTop:g},h,{children:o}))}))},xi=h.div`
    border-radius: 0.5rem;
    background: ${Sn.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,wi=h.button`
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

    svg {
        height: 1.125rem;
        width: 1.125rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&p`
                background-color: ${Sn.Neutral[7]};
            `}
    }
`,Oi=i.forwardRef(((t,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=V(t,["children","focusHighlight","focusOutline","type"]);return e(wi,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Di=h.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Sn.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${q.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Bi=h(Oi)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${Sn.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${Sn.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${q.mobileL} {
        right: 1.25rem;
    }
`,ki=e=>{const{textSize:t}=e||{};return p`
        // Text styling
        ${t&&Mn(t,"regular")}

        strong {
            font-family: ${Fn.OpenSans.Semibold};
            ${t&&Mn(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${Fn.OpenSans.Semibold};
            ${t&&Mn(t,"semibold")}
            color: ${Sn.Primary};
            text-decoration: none;

            svg {
                color: ${Sn.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Sn.Secondary};

                svg {
                    color: ${Sn.Secondary};
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
    `},ji=h.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Ei=h((t=>{var{children:n}=t,r=V(t,["children"]);const i=r["data-testid"]||"card";return e(xi,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?e(Tn.Body,{children:n}):n}))}))`
    color: ${Sn.Neutral[1]};
    ${ki({textSize:"BodySmall"})}

    ${q.mobileL} {
        display: none;
    }
`,Hi=h((n=>{var{id:r="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,s=V(n,["id","children","onClose","showCloseButton"]);return t(Di,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&e(Bi,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1},{children:e(P,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,_i=h.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Sn.Neutral[1]};
    ${ki({textSize:"BodySmall"})}
`,Ci=r=>{var{children:i,visible:o,onMobileClose:a}=r,s=V(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=Qn.useMediaQuery({maxWidth:J.mobileL}),u=()=>{a&&a()},d=()=>"string"==typeof i?e(Tn.BodySmall,{children:i}):i;return t(n,{children:[o&&e(ji,Object.assign({"data-testid":l},s,{children:e(Ei,{children:d()})})),c&&e(Fi,Object.assign({show:o,onOverlayClick:u},{children:e(Hi,Object.assign({onClose:u},{children:e(_i,{children:d()})}))}))]})},Mi=h.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,zi=r=>{var i,s,{children:l,popoverContent:c,trigger:u="click",position:f="top",zIndex:h,rootNode:p,customOffset:m,delay:g,onPopoverAppear:y,onPopoverDismiss:v}=r,b=V(r,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[S,F]=a(!1),x=o(),T=o(),A=Qn.useMediaQuery({maxWidth:Z.mobileL}),{refs:P,floatingStyles:R,context:I}=w({open:S,placement:f,whileElementsMounted:O,middleware:[D(null!=m?m:16),B(),k({limiter:j()})],onOpenChange:e=>{F(e),S!==e&&G(e)}}),L=(()=>{const[e,t]=a(void 0),n=$();return d((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(gi.Change,e),n.events.emit(gi.Ready),()=>n.events.off(gi.Change,e)}),[n]),e})(),W=A?"click":u,Y=E(I,{ignoreMouse:"hover"===W}),N=H(I),J=_(I,{enabled:"hover"===W,delay:{open:null!==(i=null==g?void 0:g.open)&&void 0!==i?i:0,close:null!==(s=null==g?void 0:g.close)&&void 0!==s?s:500}}),{getReferenceProps:U,getFloatingProps:q}=C([Y,N,J]),Q=()=>{F(!1),G(!1)},G=e=>{e&&y&&y(),!e&&v&&v()};return t(n,{children:[e(Mi,Object.assign({ref:e=>{x.current=e,P.setReference(e)}},U({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),b,{children:l})),S&&e(M,Object.assign({root:p},{children:e(z,Object.assign({context:I},{children:e("div",Object.assign({ref:e=>{T.current=e,P.setFloating(e)},style:Object.assign(Object.assign({},R),{outline:"none",zIndex:null!=h?h:L})},q(),{children:"function"==typeof c?c():e(Ci,Object.assign({visible:!0,onMobileClose:Q},{children:c}))}))}))}))]})},Ti=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Ai=h.span`
    color: ${Sn.Primary};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Ti(e)}

    &:hover,
    &:focus-visible {
        color: ${Sn.Secondary};
        ${({$hoverStyle:e})=>Ti(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Pi=h.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Ri=n=>{var{ariaLabel:r,content:i,icon:o,underlineStyle:a="default",underlineHoverStyle:s="default"}=n,l=V(n,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!i;return e(zi,Object.assign({},l,{children:t(Ai,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=r?r:c?void 0:"More info"},{children:[i,o&&e(Pi,Object.assign({$standalone:!c},{children:o}))]}))}))};h.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Sn.Primary};
    }
`;const Ii=h.div`
    padding-left: 0.25rem;
    display: inline;
`,Li=({addon:t,rootNode:n})=>{const{content:r,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=t;return e(Ii,{children:e(Ri,{trigger:"click",id:a,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s,icon:null!=o?o:e(b,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Wi=h.label`
    ${Mn("H5","semibold")}
    color: ${Sn.Neutral[2]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${Mn("H5","semibold")}
    }

    a {
        color: ${Sn.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${Sn.Secondary};

            svg {
                color: ${Sn.Secondary};
            }
        }
    }
`;h(Tn.H6)`
    color: ${Sn.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;const Yi=h(Tn.BodySmall)`
    && {
        color: ${Sn.Neutral[3]};
        ${Cn("BodySmall","regular")}
    }
`,Ni=n=>{var{children:r,addon:i,subtitle:o,"data-testid":a}=n,s=V(n,["children","addon","subtitle","data-testid"]);return t(Wi,Object.assign({},s,{children:[r,i&&i.type&&("popover"===i.type?e(Li,{addon:i}):null),"string"==typeof o?e(Yi,Object.assign({as:"span","data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:o})):o]}))},Vi=h.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Ji=m`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ui=h.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Sn.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Ji} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,qi=h(Ui)`
    animation-delay: -0.45s;
`,Zi=h(Ui)`
    animation-delay: -0.3s;
`,Qi=h(Ui)`
    animation-delay: -0.15s;
`,Gi=h.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=Sn.Validation.Red.Background(e),n=Sn.Validation.Red.Border(e);break;case"success":t=Sn.Validation.Green.Background(e),n=Sn.Validation.Green.Border(e);break;case"warning":default:t=Sn.Validation.Orange.Background(e),n=Sn.Validation.Orange.Border(e);break;case"info":t=Sn.Validation.Blue.Background(e),n=Sn.Validation.Blue.Border(e);break;case"description":t=Sn.Neutral[7](e),n=Sn.Neutral[4](e)}return p`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${Sn.Neutral[1]};
    ${e=>"small"===e.$sizeType?ki({textSize:"H6"}):ki({textSize:"BodySmall"})}
`,Xi=h.div`
    display: flex;
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&p`
            align-items: center;
            height: 1lh;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Sn.Validation.Red.Icon(e);break;case"success":t=Sn.Validation.Green.Icon(e);break;case"warning":default:t=Sn.Validation.Orange.Icon(e);break;case"info":t=Sn.Validation.Blue.Icon(e);break;case"description":t=Sn.Neutral[4](e)}return p`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,Ki=h(Tn.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?p`
                ${Mn("H6","semibold")}
                margin-top: 0.25rem;
            `:p`
                ${Mn("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${Sn.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${Sn.Primary};
    }
`,eo=h.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,to=h.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,no=h.button`
    ${e=>"small"===e.$sizeType?p`
                ${Mn("H6","semibold")}
            `:p`
                ${Mn("H5","semibold")}
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

    color: ${Sn.Primary};
`,ro=h(N)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,io=h.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return p`
                    grid-column: auto / span 4;
                `;case"full":return p`
                    grid-column: auto / span 8;
                `}}}

    ${q.tablet} {
        grid-column: auto / span 8;
    }

    ${q.mobileL} {
        grid-column: auto / span 4;
    }

    overflow-wrap: break-word;
`,oo=h.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${Sn.Primary};
    margin-left: 0.5rem;

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`,ao=h.button`
    ${Mn("Body","regular")}
    color: ${Sn.Neutral[1]};
    border: none;
    background: transparent;
    padding: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    overflow-wrap: anywhere;
    text-align: left;

    span {
        overflow-wrap: anywhere;
        text-align: left;
    }
`,so=h.span`
    color: ${Sn.Neutral[3]};
`,lo=h((({color:n,className:r,size:i=18})=>t(Vi,Object.assign({className:r,$size:i,$color:n},{children:[e(Ui,{id:"inner1",$size:i-2,$borderWidth:2,$color:n}),e(qi,{id:"inner2",$size:i-2,$borderWidth:2,$color:n}),e(Zi,{id:"inner3",$size:i-2,$borderWidth:2,$color:n}),e(Qi,{id:"inner4",$size:i-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${Sn.Neutral[3]} transparent transparent transparent;
    }
`,co=h(R)`
    color: ${Sn.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,uo=h.span`
    color: ${Sn.Validation.Orange.Text};
`,fo=h.span`
    ${Mn("Body","semibold")}
    color: ${Sn.Primary};
    text-decoration: underline;
    margin-left: 0.5rem;
`,ho=h((n=>{var{type:r,className:i,children:s,actionLink:l,actionLinkIcon:c,sizeType:u="default",showIcon:f=!1,customIcon:h,maxCollapsedHeight:p}=n,m=V(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[g,y]=a(!1),[v,$]=a(!1),{height:S,ref:F}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,p=e.observerOptions,m=e.onResize,g=o(n),y=o(null),v=null!=h?h:y,b=o(),$=a({width:void 0,height:void 0}),S=$[0],F=$[1];return hi((function(){if(!ui()){var e=fi(m,F,u,f);b.current=li((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!g.current&&!ui()&&e({width:r,height:i}),g.current=!1}))}),r,s,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,u,f,m,p,v.current]),Sr({ref:v},S)}();d((()=>{x()}),[p,S]);const x=()=>{y(!p),$(w())},w=()=>!!p&&S>p;return t(Gi,Object.assign({className:i,$type:r,$sizeType:u,"data-testid":m["data-testid"]},{children:[f&&e(Xi,Object.assign({$sizeType:u,$type:r},{children:(()=>{if(r&&h)return h;switch(r){case"success":return e(Y,{});case"warning":return e(W,{});case"error":return e(L,{});case"info":case"description":return e(b,{});default:return null}})()})),t(eo,{children:[t(to,Object.assign({$maxCollapsedHeight:w()?p:void 0,$showMore:g,$hasActionLink:!!l},{children:[e("div",Object.assign({ref:F},{children:s})),l&&t(Ki,Object.assign({"data-testid":"action-link",$type:r,$sizeType:u},l,{children:[l.children,c||e(I,{})]}))]})),v&&t(no,Object.assign({$sizeType:u,$type:r,type:"button",onClick:()=>y(!g)},{children:["Show ",g?"less":"more",e(ro,{$expanded:g})]}))]})]}))}))`
    margin-top: 0.5rem;
`,po=({label:r,value:i,displayWidth:o="full",maskState:s,maskLoadingState:l,maskChar:c="•",maskRange:u,unmaskRange:f,maskRegex:h,disableMaskUnmask:p,alert:m,maskTransformer:g,onMask:b,onUnmask:$,onTryAgain:S})=>{const[F,x]=a(s);d((()=>{x(s)}),[s]);const w=()=>{switch("fail"===l&&S&&S(),F){case"masked":$&&$(),x("unmasked");break;case"unmasked":b&&b(),x("masked")}},O=()=>"string"!=typeof i?i:"masked"===F?br.maskValue(i,{maskChar:c,maskRange:u,unmaskRange:f,maskRegex:h,maskTransformer:g}):i,D=()=>{switch(l){case"fail":return t(n,{children:[e(co,{}),e(uo,{children:"Error"}),e(fo,{children:"Try again?"})]});case"loading":return t(n,{children:[e(lo,{}),e(so,{children:"Retrieving..."})]});default:return t(n,{children:[O(),e(oo,{children:"masked"===F?e(y,{"data-testid":"masked-icon"}):e(v,{"data-testid":"unmasked-icon"})})]})}};return t(io,Object.assign({$widthStyle:o},{children:[e(Ni,{children:r}),"string"!=typeof i?i:F?p?e(Tn.Body,{children:O()}):e(ao,Object.assign({"data-testid":"clickable-label",onClick:w,"aria-busy":"loading"===l,"aria-live":"polite",type:"button"},{children:D()})):e(Tn.Body,{children:i}),m&&e(ho,Object.assign({sizeType:"small"},m))]}))},mo=Object.assign((r=>{var{items:i,title:o,description:a,topSection:s,bottomSection:l,children:c,background:u=!0,stretch:d,onMask:f,onUnmask:h,onTryAgain:p}=r,m=V(r,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const g=e=>()=>{f&&f(e)},y=e=>()=>{h&&h(e)},v=e=>()=>{p&&p(e)},b=()=>{if(i&&i.length>0){const t=i.map(((t,n)=>e(po,Object.assign({},t,{onMask:g(t),onUnmask:y(t),onTryAgain:v(t)}),n)));return e(Jn,Object.assign({$stretch:d},{children:t}))}return null};return e(Wn,Object.assign({$background:u},m,{type:"grid"},{children:c||t(n,{children:[o&&e(Yn,Object.assign({weight:"semibold",$stretch:d},{children:o})),a&&e(Nn,Object.assign({$stretch:d},{children:a})),s&&e(Vn,Object.assign({"data-id":"top-section",$stretch:d},{children:s})),b(),l&&e(Vn,Object.assign({"data-id":"bottom-section",$stretch:d},{children:l}))]})}))}),{ItemSection:Un,Item:po});export{mo as UneditableSection};
//# sourceMappingURL=index.js.map
