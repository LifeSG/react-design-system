import{MenuIcon as t}from"@lifesg/react-icons/menu";import e,{css as n,keyframes as r,useTheme as i}from"styled-components";import{jsx as a,jsxs as o,Fragment as s}from"react/jsx-runtime";import l,{useEffect as c,useState as d,useRef as u,forwardRef as h,useImperativeHandle as f}from"react";import{useFloatingTree as g,FloatingTree as p,useFloatingNodeId as m,FloatingNode as y}from"@floating-ui/react";import b from"react-dom";import{CrossIcon as v}from"@lifesg/react-icons/cross";import{ExternalIcon as $}from"@lifesg/react-icons/external";import{ChevronUpIcon as S}from"@lifesg/react-icons/chevron-up";var F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function B(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var w=Array.isArray,D="object"==typeof F&&F&&F.Object===Object&&F,x=D,k="object"==typeof self&&self&&self.Object===Object&&self,O=x||k||Function("return this")(),A=O.Symbol,H=A,E=Object.prototype,C=E.hasOwnProperty,_=E.toString,j=H?H.toStringTag:void 0;var z=function(t){var e=C.call(t,j),n=t[j];try{t[j]=void 0;var r=!0}catch(t){}var i=_.call(t);return r&&(e?t[j]=n:delete t[j]),i},M=Object.prototype.toString;var T=z,I=function(t){return M.call(t)},W=A?A.toStringTag:void 0;var N=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":W&&W in Object(t)?T(t):I(t)};var L=function(t){return null!=t&&"object"==typeof t},Y=N,P=L;var V=function(t){return"symbol"==typeof t||P(t)&&"[object Symbol]"==Y(t)},R=w,U=V,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,G=/^\w*$/;var X=function(t,e){if(R(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!U(t))||(G.test(t)||!J.test(t)||null!=e&&t in Object(e))};var Q=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},Z=N,K=Q;var q,tt=function(t){if(!K(t))return!1;var e=Z(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},et=O["__core-js_shared__"],nt=(q=/[^.]+$/.exec(et&&et.keys&&et.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"";var rt=function(t){return!!nt&&nt in t},it=Function.prototype.toString;var at=function(t){if(null!=t){try{return it.call(t)}catch(t){}try{return t+""}catch(t){}}return""},ot=tt,st=rt,lt=Q,ct=at,dt=/^\[object .+?Constructor\]$/,ut=Function.prototype,ht=Object.prototype,ft=ut.toString,gt=ht.hasOwnProperty,pt=RegExp("^"+ft.call(gt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var mt=function(t){return!(!lt(t)||st(t))&&(ot(t)?pt:dt).test(ct(t))},yt=function(t,e){return null==t?void 0:t[e]};var bt=function(t,e){var n=yt(t,e);return mt(n)?n:void 0},vt=bt(Object,"create"),$t=vt;var St=function(){this.__data__=$t?$t(null):{},this.size=0};var Ft=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Bt=vt,wt=Object.prototype.hasOwnProperty;var Dt=function(t){var e=this.__data__;if(Bt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return wt.call(e,t)?e[t]:void 0},xt=vt,kt=Object.prototype.hasOwnProperty;var Ot=vt;var At=St,Ht=Ft,Et=Dt,Ct=function(t){var e=this.__data__;return xt?void 0!==e[t]:kt.call(e,t)},_t=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ot&&void 0===e?"__lodash_hash_undefined__":e,this};function jt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}jt.prototype.clear=At,jt.prototype.delete=Ht,jt.prototype.get=Et,jt.prototype.has=Ct,jt.prototype.set=_t;var zt=jt;var Mt=function(){this.__data__=[],this.size=0};var Tt=function(t,e){return t===e||t!=t&&e!=e},It=Tt;var Wt=function(t,e){for(var n=t.length;n--;)if(It(t[n][0],e))return n;return-1},Nt=Wt,Lt=Array.prototype.splice;var Yt=Wt;var Pt=Wt;var Vt=Wt;var Rt=Mt,Ut=function(t){var e=this.__data__,n=Nt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Lt.call(e,n,1),--this.size,!0)},Jt=function(t){var e=this.__data__,n=Yt(e,t);return n<0?void 0:e[n][1]},Gt=function(t){return Pt(this.__data__,t)>-1},Xt=function(t,e){var n=this.__data__,r=Vt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Qt.prototype.clear=Rt,Qt.prototype.delete=Ut,Qt.prototype.get=Jt,Qt.prototype.has=Gt,Qt.prototype.set=Xt;var Zt=Qt,Kt=bt(O,"Map"),qt=zt,te=Zt,ee=Kt;var ne=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var re=function(t,e){var n=t.__data__;return ne(e)?n["string"==typeof e?"string":"hash"]:n.map},ie=re;var ae=re;var oe=re;var se=re;var le=function(){this.size=0,this.__data__={hash:new qt,map:new(ee||te),string:new qt}},ce=function(t){var e=ie(this,t).delete(t);return this.size-=e?1:0,e},de=function(t){return ae(this,t).get(t)},ue=function(t){return oe(this,t).has(t)},he=function(t,e){var n=se(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function fe(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}fe.prototype.clear=le,fe.prototype.delete=ce,fe.prototype.get=de,fe.prototype.has=ue,fe.prototype.set=he;var ge=fe,pe=ge;function me(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(me.Cache||pe),n}me.Cache=pe;var ye=me;var be=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ve=/\\(\\)?/g,$e=function(t){var e=ye(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(be,(function(t,n,r,i){e.push(r?i.replace(ve,"$1"):n||t)})),e}));var Se=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},Fe=w,Be=V,we=A?A.prototype:void 0,De=we?we.toString:void 0;var xe=function t(e){if("string"==typeof e)return e;if(Fe(e))return Se(e,t)+"";if(Be(e))return De?De.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},ke=xe;var Oe=w,Ae=X,He=$e,Ee=function(t){return null==t?"":ke(t)};var Ce=function(t,e){return Oe(t)?t:Ae(t,e)?[t]:He(Ee(t))},_e=V;var je=function(t){if("string"==typeof t||_e(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e},ze=Ce,Me=je;var Te=function(t,e){for(var n=0,r=(e=ze(e,t)).length;null!=t&&n<r;)t=t[Me(e[n++])];return n&&n==r?t:void 0},Ie=Te;var We=function(t,e,n){var r=null==t?void 0:Ie(t,e);return void 0===r?n:r},Ne=B(We);const Le=(t,e,n)=>e?Ne(n,e)||Ne(t,e):n||t,Ye=(t,e)=>{const n=e||t.defaultValue;return Ne(t.collections,n)};var Pe;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Pe||(Pe={}));const Ve={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Re=t=>e=>{const n=e.theme,r=Ye(Ve,n[Pe.colorScheme]);return n.options&&n.options.color?Le(r,t,n.options.color):Le(r,t)},Ue={Brand:{1:Re("Brand.1"),2:Re("Brand.2"),3:Re("Brand.3"),4:Re("Brand.4"),5:Re("Brand.5"),6:Re("Brand.6")},Primary:Re("Primary"),PrimaryDark:Re("PrimaryDark"),Secondary:Re("Secondary"),Accent:{Light:{1:Re("Accent.Light.1"),2:Re("Accent.Light.2"),3:Re("Accent.Light.3"),4:Re("Accent.Light.4"),5:Re("Accent.Light.5"),6:Re("Accent.Light.6")},Dark:{1:Re("Accent.Dark.1"),2:Re("Accent.Dark.2"),3:Re("Accent.Dark.3")}},Neutral:{1:Re("Neutral.1"),2:Re("Neutral.2"),3:Re("Neutral.3"),4:Re("Neutral.4"),5:Re("Neutral.5"),6:Re("Neutral.6"),7:Re("Neutral.7"),8:Re("Neutral.8")},Validation:{Green:{Text:Re("Validation.Green.Text"),Icon:Re("Validation.Green.Icon"),Border:Re("Validation.Green.Border"),Background:Re("Validation.Green.Background")},Orange:{Text:Re("Validation.Orange.Text"),Icon:Re("Validation.Orange.Icon"),Border:Re("Validation.Orange.Border"),Background:Re("Validation.Orange.Background"),Badge:Re("Validation.Orange.Badge")},Red:{Text:Re("Validation.Red.Text"),Icon:Re("Validation.Red.Icon"),Border:Re("Validation.Red.Border"),Background:Re("Validation.Red.Background")},Blue:{Text:Re("Validation.Blue.Text"),Icon:Re("Validation.Blue.Icon"),Border:Re("Validation.Blue.Border"),Background:Re("Validation.Blue.Background")}},Shadow:{Accent:Re("Shadow.Accent"),Red:Re("Shadow.Red"),Elevation:Re("Shadow.Elevation")}},Je={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ge=t=>Object.keys(Je).reduce(((e,n)=>{const r=Je[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),Xe=Ge("max-width");Ge("min-width");function Qe(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;const Ze=e.button`
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
        ${({$outline:t})=>"none"===t&&"outline: none;"}

        ${({$highlight:t})=>t&&n`
                background-color: ${Ue.Neutral[7]};
            `}
    }
`,Ke=l.forwardRef(((t,e)=>{var{children:n,focusHighlight:r=!0,focusOutline:i="none",type:o="button"}=t,s=Qe(t,["children","focusHighlight","focusOutline","type"]);return a(Ze,Object.assign({ref:e,$outline:i,$highlight:r,type:o},s,{children:n}))})),qe="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",tn={notCompress:6,compress:4},en=e.div`
    position: ${t=>t.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,nn=e.nav`
    height: ${t=>t.$compress?tn.compress:tn.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${qe};

    ${Xe.tablet} {
        height: ${3.5}rem;
    }
`,rn=e.div`
    display: flex;
    height: 100%;
    margin-left: ${t=>t.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${Xe.tablet} {
        margin-left: 0rem;
    }
`,an=e(Ke)`
    display: none;

    ${Xe.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,on=e(t)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ue.Neutral[1]};
`,sn=e.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${t=>t.$compress?1.5:2}rem;

    ${Xe.tablet} {
        height: 1.5rem;
    }

    ${Xe.mobileS} {
        height: 1.25rem;
    }
`,ln=e.div`
    display: flex;
    background-color: ${Ue.Neutral[5]};
    height: 100%;
    width: 1px;
    margin: 0 ${t=>t.$compress?1:1.5}rem;

    ${Xe.tablet} {
        margin: 0 1rem;
    }

    ${Xe.mobileS} {
        width: 2px;
        margin: 0 0.75rem;
    }
`,cn=e.div`
    position: relative;
    ${t=>{const{$desktopStart:e,$desktopSpan:r,$tabletStart:i,$tabletSpan:a,$mobileStart:o,$mobileSpan:s}=t;return n`
            grid-column: ${e||"auto"} / span ${r||1};

            ${Xe.tablet} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }

            ${Xe.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${s||1};
            }
        `}}
`,dn=l.forwardRef(((t,e)=>{const{mobileCols:n,tabletCols:r,desktopCols:i}=t,o=Qe(t,["mobileCols","tabletCols","desktopCols"]);return a(cn,Object.assign({ref:e},(()=>{const t=r||n,e=n,a=un(i||r||n),o=un(t),s=un(e);return{$desktopSpan:a.span,$desktopStart:a.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),un=t=>{if(Array.isArray(t)&&t.length>1){const[e,n]=t,r=e<=n?e:n,i=e<=n?n:e;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof t?{start:void 0,span:t}:{start:void 0,span:void 0}},hn=l.forwardRef(((t,e)=>{const{children:n,"data-testid":r="container",type:i="flex",stretch:o=!1}=t,s=Qe(t,["children","data-testid","type","stretch"]);return a(fn,Object.assign({ref:e,"data-testid":r,$type:i,$stretch:o},s,{children:n}))})),fn=e.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${t=>t.$stretch?n`
                padding: 0 3rem;
            `:n`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Xe.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Xe.tablet} {
        max-width: 720px;
    }
    ${Xe.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.$type){case"grid":return n`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Xe.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Xe.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return n`
                    display: flex;
                    flex-direction: column;
                `;default:return n`
                    display: flex;
                `}}}
`,gn=l.forwardRef(((t,e)=>{const{children:n,"data-testid":r="section",stretch:i=!1}=t,o=Qe(t,["children","data-testid","stretch"]);return a(pn,Object.assign({ref:e,"data-testid":r,$stretch:i},o,{children:n}))})),pn=e.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?n`
                ${Xe.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:n`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,mn=l.forwardRef(((t,e)=>{const{children:n,"data-testid":r="content",className:i,type:o="flex",stretch:s=!1}=t,l=Qe(t,["children","data-testid","className","type","stretch"]);return a(gn,Object.assign({ref:e,"data-testid":r,className:i,stretch:s},l,{children:a(hn,Object.assign({"data-testid":`${r}-container`,type:o,"data-id":"container",stretch:s},{children:n}))}))})),yn={Section:gn,Container:hn,Content:mn,ColDiv:dn},bn=e.div`
    // matches Layout.Container
    // not able to fully align with Layout.Section due to dynamic spacing
    --sgds-mainnav-max-width: 1320px;
    --sgds-mainnav-padding-x: 0.75rem;
    --sgds-mainnav-mobile-padding-x: 0.75rem;

    ${Xe.desktopM} {
        --sgds-mainnav-max-width: 1140px;
    }

    ${Xe.tablet} {
        --sgds-mainnav-max-width: 720px;
    }

    ${Xe.mobileL} {
        --sgds-mainnav-max-width: 100%;
    }
`,vn=()=>{c((()=>{t()||e()}),[]);const t=()=>document.getElementById($n),e=()=>{if(!document.getElementById($n)){const t=document.createElement("script");t.id=$n,t.type="module",t.src=Sn,document.head.appendChild(t)}};return a(bn,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},$n="lifesg-ds-masthead-script",Sn="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";var Fn={exports:{}};Fn.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},b={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),a=n-i<0,o=e.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:u,w:l,d:s,D:h,h:o,m:a,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",$={};$[v]=m;var S="$isDayjsObject",F=function(t){return t instanceof x||!(!t||!t[S])},B=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var a=e.toLowerCase();$[a]&&(i=a),n&&($[a]=n,i=a);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var s=e.name;$[s]=e,i=s}return!r&&i&&(v=i),i||!r&&v},w=function(t,e){if(F(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},D=b;D.l=B,D.i=F,D.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function m(t){this.$L=B(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[S]=!0}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return w(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<w(t)},y.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!D.u(e)||e,d=D.p(t),f=function(t,e){var i=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},g=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,$=(p<v?p+7:p)-v;return f(r?y-$:y+(6-$),m);case s:case h:return g(b+"Hours",0);case o:return g(b+"Minutes",1);case a:return g(b+"Seconds",2);case i:return g(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,l=D.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[s]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],g=l===s?this.$D+(e-this.$W):e;if(l===c||l===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[D.p(t)]()},y.add=function(r,d){var h,f=this;r=Number(r);var g=D.p(d),p=function(t){var e=w(f);return D.w(e.date(e.date()+Math.round(t*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[a]=e,h[o]=n,h[i]=t,h)[g]||1,y=this.$d.getTime()+r*m;return D.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},h=function(t){return D.s(a%12||12,t,"0")},g=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return D.s(e.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return e.$D;case"DD":return D.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return u(n.weekdaysMin,e.$W,l,2);case"ddd":return u(n.weekdaysShort,e.$W,l,3);case"dddd":return l[e.$W];case"H":return String(a);case"HH":return D.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return D.s(o,2,"0");case"s":return String(e.$s);case"ss":return D.s(e.$s,2,"0");case"SSS":return D.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=this,m=D.p(h),y=w(r),b=(y.utcOffset()-this.utcOffset())*e,v=this-y,$=function(){return D.m(p,y)};switch(m){case u:g=$()/12;break;case c:g=$();break;case d:g=$()/3;break;case l:g=(v-b)/6048e5;break;case s:g=(v-b)/864e5;break;case o:g=v/n;break;case a:g=v/e;break;case i:g=v/t;break;default:g=v}return f?g:D.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=B(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),k=x.prototype;return w.prototype=k,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,x,w),t.$i=!0),w},w.locale=B,w.isDayjs=F,w.unix=function(t){return w(1e3*t)},w.en=$[v],w.Ls=$,w.p={},w}();var Bn=B(Fn.exports),wn={exports:{}};wn.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,o={},s=function(t){return(t=+t)+(t>68?1900:2e3)},l=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],d=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},h={A:[a,function(t){this.afternoon=u(t,!1)}],a:[a,function(t){this.afternoon=u(t,!0)}],Q:[n,function(t){this.month=3*(t-1)+1}],S:[n,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[i,l("seconds")],ss:[i,l("seconds")],m:[i,l("minutes")],mm:[i,l("minutes")],H:[i,l("hours")],h:[i,l("hours")],HH:[i,l("hours")],hh:[i,l("hours")],D:[i,l("day")],DD:[r,l("day")],Do:[a,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],w:[i,l("week")],ww:[r,l("week")],M:[i,l("month")],MM:[r,l("month")],MMM:[a,function(t){var e=d("months"),n=(d("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(t){var e=d("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(t){this.year=s(t)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function f(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var a=r&&r.toUpperCase();return n||i[r]||t[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),s=a.length,l=0;l<s;l+=1){var c=a[l],d=h[c],u=d&&d[0],f=d&&d[1];a[l]=f?{regex:u,parser:f}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=t.slice(r),d=o.exec(c)[0];l.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(s=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,a=t.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(t,e,n,r){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var i=f(e)(t),a=i.year,o=i.month,s=i.day,l=i.hours,c=i.minutes,d=i.seconds,u=i.milliseconds,h=i.zone,g=i.week,p=new Date,m=s||(a||o?1:p.getDate()),y=a||p.getFullYear(),b=0;a&&!o||(b=o>0?o-1:p.getMonth());var v,$=l||0,S=c||0,F=d||0,B=u||0;return h?new Date(Date.UTC(y,b,m,$,S,F,B+60*h.offset*1e3)):n?new Date(Date.UTC(y,b,m,$,S,F,B)):(v=new Date(y,b,m,$,S,F,B),g&&(v=r(v).week(g).toDate()),v)}catch(t){return new Date("")}}(e,s,r,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&e!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var h=s.length,g=1;g<=h;g+=1){a[1]=s[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===h&&(this.$d=new Date(""))}else i.call(this,t)}}}();var Dn=B(wn.exports),xn={exports:{}};xn.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var a=n(t),o=n(e),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var kn=B(xn.exports),On={exports:{}};On.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var An=B(On.exports),Hn={exports:{}};Hn.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var En,Cn,_n,jn=B(Hn.exports),zn={exports:{}},Mn=B(zn.exports=(En={year:0,month:1,day:2,hour:3,minute:4,second:5},Cn={},function(t,e,n){var r,i=function(t,e,n){void 0===n&&(n={});var r=new Date(t),i=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=Cn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Cn[r]=i),i}(e,n);return i.formatToParts(r)},a=function(t,e){for(var r=i(t,e),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,d=En[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],h=24===u?0:u,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+t;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},o=e.prototype;o.tz=function(t,e){void 0===t&&(t=r);var i,a=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:t}),l=Math.round((o-new Date(s))/1e3/60),c=15*-Math.round(o.getTimezoneOffset()/15)-l;if(Number(c)){if(i=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),e){var d=i.utcOffset();i=i.add(a-d,"minute")}}else i=this.utcOffset(0,e);return i.$x.$timezone=t,i},o.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var o=i&&e,s=i||e||r,l=a(+n(),s);if("string"!=typeof t)return n(t).tz(s);var c=function(t,e,n){var r=t-60*e*1e3,i=a(r,n);if(e===i)return[r,e];var o=a(r-=60*(i-e)*1e3,n);return i===o?[r,i]:[t-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(t,o).valueOf(),l,s),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}}));Bn.extend(kn),Bn.extend(jn),Bn.extend(An),Bn.extend(Dn),Bn.extend(Mn),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=Bn(e).startOf("week");return Tn(n).map((t=>In(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return In(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(Bn(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+Bn(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=Bn(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")},t.getWeekStartEnd=t=>({start:t.startOf("week").format("YYYY-MM-DD"),end:t.endOf("week").format("YYYY-MM-DD")}),t.getFixedRangeStartEnd=(t,e)=>({start:t.format("YYYY-MM-DD"),end:t.add(e-1,"day").format("YYYY-MM-DD")}),t.isDisabledDay=(e,n,r,i)=>{const a=t.isWithinRange(e,r?Bn(r):void 0,i?Bn(i):void 0),o=n&&n.includes(e.format("YYYY-MM-DD"));return!a||!!o}}(_n||(_n={}));const Tn=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},In=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},Wn=[1,3,5,7,8,10,12],Nn=[4,6,9,11];var Ln,Yn,Pn,Vn;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),a=parseInt(n),o=parseInt(r);return 0==i?"1":Wn.includes(a)?Math.min(i,31).toString():Nn.includes(a)?Math.min(i,30).toString():2===a?t.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=Bn(t,n);return Bn(e,n).diff(r,"minute")},t.toDayjs=t=>t?Bn(t):Bn(),t.addMinutesToTime=(t,e,n="HH:mm")=>Bn(t,n).add(e,"minutes").format(n),t.isSame=(t,e,n="day")=>Bn(t).isSame(Bn(e),n)}(Ln||(Ln={})),function(t){t.isDateDisabled=(t,e)=>{const{disabledDates:n,minDate:r,maxDate:i}=e;return!!(n&&n.length&&n.includes(t))||(!(!r||!Bn(t).isBefore(r,"day"))||!(!i||!Bn(t).isAfter(i,"day")))},t.sanitizeInput=t=>{if(t){if(Bn(t).isValid())return t}return""}}(Yn||(Yn={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(Pn||(Pn={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,i=8)=>{let a=0;e>n&&(a=Math.floor((e-n)/i));const o=r+a;if(o<t.length){const e=Math.floor(o/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.truncateTwoLines=(t,e,n,r=1.2)=>{const i=Math.floor(2*e/(.6*n))*(2/r);if(t.length<=i)return t;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${t.substring(0,a)}...${t.substring(t.length-o)}`},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const r=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(e).width},t.maskValue=(t,n)=>{if(!t)return t;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(t);if(o)return t.replace(o,a);if(r){const{startIndex:n,endIndex:i}=e(r[0],r[1]);return t.substring(0,n)+a.repeat(t.substring(n,i+1).length)+t.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=e(i[0],i[1]);return a.repeat(t.substring(0,n).length)+t.substring(n,r+1)+a.repeat(t.substring(r+1).length)}return t};const e=(t,e)=>t<e?{startIndex:t,endIndex:e}:{startIndex:e,endIndex:t}}(Vn||(Vn={}));const Rn=e.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${t=>t.$zIndex};

    ${t=>{if(t.$show)return n`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Un=e.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${t=>t.$backgroundOpacity});
    backdrop-filter: ${t=>(t=>{let e="";return t&&(e+="blur(10px)"),e.length>0?e:"none"})(t.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${t=>{let e="";return t.$show?e+=n`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:e+=n`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${t.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,t.$disableTransition&&(e+=n`
                transition: none;
            `),e}}
`;var Jn;!function(t){t.Ready="overlay-context-ready",t.Change="overlay-context-change"}(Jn||(Jn={}));const Gn=({show:t=!1,rootId:e,onOverlayClick:n,children:r,backgroundOpacity:i,backgroundBlur:o=!0,disableTransition:s=!1,enableOverlayClick:h=!1,zIndex:f,id:p})=>{const[v,$]=d(null),[S,F]=d(),[B]=d((()=>Pn.generate())),w=m(),D=u(),x=u(null),k=r&&l.cloneElement(r,{ref:x}),O=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root",A=null!=f?f:S?99999:99998;(t=>{const e=g();c((()=>{if(!e)return;const n={zIndex:t};e.events.emit(Jn.Change,n)}),[e,t]),c((()=>{if(!e)return;const n=()=>{const n={zIndex:t};e.events.emit(Jn.Change,n)};return null==e||e.events.on(Jn.Ready,n),()=>null==e?void 0:e.events.off(Jn.Ready,n)}),[e,t])})(A),c((()=>(_(),$(E()),()=>{T(),z().length<1&&j("remove")})),[]),c((()=>{if(t){const t=C();H(t),M();const e=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(e)}{T();const t=setTimeout((()=>{z().length<1&&j("remove")}),200);return()=>clearTimeout(t)}}),[t]);const H=t=>{D.current=t,F(t)},E=()=>document&&e?document.getElementById(e):document?document.body:null,C=()=>z().length>0,_=()=>{if(!document.getElementById(Qn)){const t=document.createElement("style");t.id=Qn;const e=document.documentElement.clientWidth,n=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${Zn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Zn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},j=t=>{const e=document.body.classList.contains(Zn);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(Zn):document.body.classList.add(Zn)},z=()=>{const t=document.body.dataset.lifesgDsOverlayOrder;return t?t.split(","):[]},M=()=>{const t=z();document.body.dataset.lifesgDsOverlayOrder=[...t,B].join(",")},T=()=>{const t=z();document.body.dataset.lifesgDsOverlayOrder=t.filter((t=>t!==B)).join(",")},I=t=>{var e;const r=null===(e=x.current)||void 0===e?void 0:e.firstChild;r&&r.contains(t.target)||n&&h&&(t.preventDefault(),n())};return v?b.createPortal(a(Rn,Object.assign({id:O,"data-testid":O,$show:t,$zIndex:A},{children:r&&a(y,Object.assign({id:w},{children:a(Un,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:i||(S?.5:.8),$backgroundBlur:o,$disableTransition:s,onClick:I},{children:k}))}))})),v):null},Xn=t=>a(p,{children:a(Gn,Object.assign({},t))}),Qn="lifesg-ds-overlay-stylesheet",Zn="lifesg-ds-overlay-open",Kn=e.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${qe};
        object-fit: contain;
    }
`;const qn=({src:t,alt:e,className:n,"data-testid":r})=>a("img",{src:t,alt:e||"",className:n,"data-testid":r,onError:t=>{t.target.onerror=null,t.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),tr=({resources:t,onClick:e,"data-id":n,"data-testid":r="navbar-brand",type:i})=>a(Kn,Object.assign({role:"link",onClick:t=>{e&&e(t,i)},tabIndex:0,"data-id":n,"data-testid":r,$type:i},{children:a(qn,{src:t.logoSrc,alt:t.brandName})})),er=e.div`
    display: none;

    ${Xe.tablet} {
        display: flex;
    }
`,nr=e.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 1rem;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${t=>t.$show?"visible":"hidden"};

    ${t=>t.$show?n`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:n`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}
    ${t=>{const e=`${t.$viewHeight}px`||"1vh";return n`
            height: calc(${e} * 100);
        `}}

	${Xe.tablet} {
        width: 75%;
    }

    ${Xe.mobileL} {
        width: 100%;
    }
`,rr=e.div`
    display: flex;
    flex-direction: column;
`,ir=e.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,ar=e(v)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,or=e(Ke)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${Ue.Neutral[1]};

    :active,
    :focus {
        color: ${Ue.Primary};
    }
`,sr=l.forwardRef(((t,e)=>{const{show:n,resources:r,children:i,hideNavBranding:l,onClose:u,onBrandClick:h}=t,[f,g]=d(0),{primary:p,secondary:m}=r;c((()=>(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]);const y=()=>{if(window){const t=.01*window.innerHeight;g(t)}};return a(er,Object.assign({ref:e,"data-testid":"drawer"},{children:a(nr,Object.assign({$show:n,$viewHeight:f},{children:o(rr,{children:[o(ir,{children:[a(sn,Object.assign({"data-id":"drawer-brand-container"},{children:!l&&o(s,{children:[a(tr,{resources:p,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&o(s,{children:[a(ln,{}),a(tr,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),a(or,Object.assign({onClick:u,focusHighlight:!1,"aria-label":"Close nav menu"},{children:a(ar,{})}))]}),i]})}))}))})),lr={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},cr={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},dr={primary:{brandName:"MyLegacy",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},ur={primary:{brandName:"CCube",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}};var hr=function(t,e,n,r){for(var i=t.length,a=n+(r?1:-1);r?a--:++a<i;)if(e(t[a],a,t))return a;return-1},fr=Zt;var gr=Zt,pr=Kt,mr=ge;var yr=Zt,br=function(){this.__data__=new fr,this.size=0},vr=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},$r=function(t){return this.__data__.get(t)},Sr=function(t){return this.__data__.has(t)},Fr=function(t,e){var n=this.__data__;if(n instanceof gr){var r=n.__data__;if(!pr||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new mr(r)}return n.set(t,e),this.size=n.size,this};function Br(t){var e=this.__data__=new yr(t);this.size=e.size}Br.prototype.clear=br,Br.prototype.delete=vr,Br.prototype.get=$r,Br.prototype.has=Sr,Br.prototype.set=Fr;var wr=Br;var Dr=ge,xr=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},kr=function(t){return this.__data__.has(t)};function Or(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Dr;++e<n;)this.add(t[e])}Or.prototype.add=Or.prototype.push=xr,Or.prototype.has=kr;var Ar=Or,Hr=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1},Er=function(t,e){return t.has(e)};var Cr=function(t,e,n,r,i,a){var o=1&n,s=t.length,l=e.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(t),d=a.get(e);if(c&&d)return c==e&&d==t;var u=-1,h=!0,f=2&n?new Ar:void 0;for(a.set(t,e),a.set(e,t);++u<s;){var g=t[u],p=e[u];if(r)var m=o?r(p,g,u,e,t,a):r(g,p,u,t,e,a);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Hr(e,(function(t,e){if(!Er(f,e)&&(g===t||i(g,t,n,r,a)))return f.push(e)}))){h=!1;break}}else if(g!==p&&!i(g,p,n,r,a)){h=!1;break}}return a.delete(t),a.delete(e),h};var _r=O.Uint8Array,jr=Tt,zr=Cr,Mr=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n},Tr=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},Ir=A?A.prototype:void 0,Wr=Ir?Ir.valueOf:void 0;var Nr=function(t,e,n,r,i,a,o){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!a(new _r(t),new _r(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return jr(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var s=Mr;case"[object Set]":var l=1&r;if(s||(s=Tr),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;r|=2,o.set(t,e);var d=zr(s(t),s(e),r,i,a,o);return o.delete(t),d;case"[object Symbol]":if(Wr)return Wr.call(t)==Wr.call(e)}return!1};var Lr=function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t},Yr=w;var Pr=function(t,e,n){var r=e(t);return Yr(t)?r:Lr(r,n(t))};var Vr=function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,a=[];++n<r;){var o=t[n];e(o,n,t)&&(a[i++]=o)}return a},Rr=function(){return[]},Ur=Object.prototype.propertyIsEnumerable,Jr=Object.getOwnPropertySymbols,Gr=Jr?function(t){return null==t?[]:(t=Object(t),Vr(Jr(t),(function(e){return Ur.call(t,e)})))}:Rr;var Xr=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},Qr=N,Zr=L;var Kr=function(t){return Zr(t)&&"[object Arguments]"==Qr(t)},qr=L,ti=Object.prototype,ei=ti.hasOwnProperty,ni=ti.propertyIsEnumerable,ri=Kr(function(){return arguments}())?Kr:function(t){return qr(t)&&ei.call(t,"callee")&&!ni.call(t,"callee")},ii={exports:{}};var ai=function(){return!1};!function(t,e){var n=O,r=ai,i=e&&!e.nodeType&&e,a=i&&t&&!t.nodeType&&t,o=a&&a.exports===i?n.Buffer:void 0,s=(o?o.isBuffer:void 0)||r;t.exports=s}(ii,ii.exports);var oi=ii.exports,si=/^(?:0|[1-9]\d*)$/;var li=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&si.test(t))&&t>-1&&t%1==0&&t<e};var ci=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},di=N,ui=ci,hi=L,fi={};fi["[object Float32Array]"]=fi["[object Float64Array]"]=fi["[object Int8Array]"]=fi["[object Int16Array]"]=fi["[object Int32Array]"]=fi["[object Uint8Array]"]=fi["[object Uint8ClampedArray]"]=fi["[object Uint16Array]"]=fi["[object Uint32Array]"]=!0,fi["[object Arguments]"]=fi["[object Array]"]=fi["[object ArrayBuffer]"]=fi["[object Boolean]"]=fi["[object DataView]"]=fi["[object Date]"]=fi["[object Error]"]=fi["[object Function]"]=fi["[object Map]"]=fi["[object Number]"]=fi["[object Object]"]=fi["[object RegExp]"]=fi["[object Set]"]=fi["[object String]"]=fi["[object WeakMap]"]=!1;var gi=function(t){return hi(t)&&ui(t.length)&&!!fi[di(t)]};var pi=function(t){return function(e){return t(e)}},mi={exports:{}};!function(t,e){var n=D,r=e&&!e.nodeType&&e,i=r&&t&&!t.nodeType&&t,a=i&&i.exports===r&&n.process,o=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=o}(mi,mi.exports);var yi=mi.exports,bi=gi,vi=pi,$i=yi&&yi.isTypedArray,Si=$i?vi($i):bi,Fi=Xr,Bi=ri,wi=w,Di=oi,xi=li,ki=Si,Oi=Object.prototype.hasOwnProperty;var Ai=function(t,e){var n=wi(t),r=!n&&Bi(t),i=!n&&!r&&Di(t),a=!n&&!r&&!i&&ki(t),o=n||r||i||a,s=o?Fi(t.length,String):[],l=s.length;for(var c in t)!e&&!Oi.call(t,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||xi(c,l))||s.push(c);return s},Hi=Object.prototype;var Ei=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Hi)};var Ci=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),_i=Ei,ji=Ci,zi=Object.prototype.hasOwnProperty;var Mi=tt,Ti=ci;var Ii=Ai,Wi=function(t){if(!_i(t))return ji(t);var e=[];for(var n in Object(t))zi.call(t,n)&&"constructor"!=n&&e.push(n);return e},Ni=function(t){return null!=t&&Ti(t.length)&&!Mi(t)};var Li=function(t){return Ni(t)?Ii(t):Wi(t)},Yi=Pr,Pi=Gr,Vi=Li;var Ri=function(t){return Yi(t,Vi,Pi)},Ui=Object.prototype.hasOwnProperty;var Ji=function(t,e,n,r,i,a){var o=1&n,s=Ri(t),l=s.length;if(l!=Ri(e).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in e:Ui.call(e,d)))return!1}var u=a.get(t),h=a.get(e);if(u&&h)return u==e&&h==t;var f=!0;a.set(t,e),a.set(e,t);for(var g=o;++c<l;){var p=t[d=s[c]],m=e[d];if(r)var y=o?r(m,p,d,e,t,a):r(p,m,d,t,e,a);if(!(void 0===y?p===m||i(p,m,n,r,a):y)){f=!1;break}g||(g="constructor"==d)}if(f&&!g){var b=t.constructor,v=e.constructor;b==v||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(f=!1)}return a.delete(t),a.delete(e),f},Gi=bt(O,"DataView"),Xi=Kt,Qi=bt(O,"Promise"),Zi=bt(O,"Set"),Ki=bt(O,"WeakMap"),qi=N,ta=at,ea="[object Map]",na="[object Promise]",ra="[object Set]",ia="[object WeakMap]",aa="[object DataView]",oa=ta(Gi),sa=ta(Xi),la=ta(Qi),ca=ta(Zi),da=ta(Ki),ua=qi;(Gi&&ua(new Gi(new ArrayBuffer(1)))!=aa||Xi&&ua(new Xi)!=ea||Qi&&ua(Qi.resolve())!=na||Zi&&ua(new Zi)!=ra||Ki&&ua(new Ki)!=ia)&&(ua=function(t){var e=qi(t),n="[object Object]"==e?t.constructor:void 0,r=n?ta(n):"";if(r)switch(r){case oa:return aa;case sa:return ea;case la:return na;case ca:return ra;case da:return ia}return e});var ha=wr,fa=Cr,ga=Nr,pa=Ji,ma=ua,ya=w,ba=oi,va=Si,$a="[object Arguments]",Sa="[object Array]",Fa="[object Object]",Ba=Object.prototype.hasOwnProperty;var wa=function(t,e,n,r,i,a){var o=ya(t),s=ya(e),l=o?Sa:ma(t),c=s?Sa:ma(e),d=(l=l==$a?Fa:l)==Fa,u=(c=c==$a?Fa:c)==Fa,h=l==c;if(h&&ba(t)){if(!ba(e))return!1;o=!0,d=!1}if(h&&!d)return a||(a=new ha),o||va(t)?fa(t,e,n,r,i,a):ga(t,e,l,n,r,i,a);if(!(1&n)){var f=d&&Ba.call(t,"__wrapped__"),g=u&&Ba.call(e,"__wrapped__");if(f||g){var p=f?t.value():t,m=g?e.value():e;return a||(a=new ha),i(p,m,n,r,a)}}return!!h&&(a||(a=new ha),pa(t,e,n,r,i,a))},Da=L;var xa=function t(e,n,r,i,a){return e===n||(null==e||null==n||!Da(e)&&!Da(n)?e!=e&&n!=n:wa(e,n,r,i,t,a))},ka=wr,Oa=xa;var Aa=Q;var Ha=function(t){return t==t&&!Aa(t)},Ea=Ha,Ca=Li;var _a=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}},ja=function(t,e,n,r){var i=n.length,a=i,o=!r;if(null==t)return!a;for(t=Object(t);i--;){var s=n[i];if(o&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<a;){var l=(s=n[i])[0],c=t[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in t))return!1}else{var u=new ka;if(r)var h=r(c,d,l,t,e,u);if(!(void 0===h?Oa(d,c,3,r,u):h))return!1}}return!0},za=function(t){for(var e=Ca(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,Ea(i)]}return e},Ma=_a;var Ta=Ce,Ia=ri,Wa=w,Na=li,La=ci,Ya=je;var Pa=function(t,e){return null!=t&&e in Object(t)},Va=function(t,e,n){for(var r=-1,i=(e=Ta(e,t)).length,a=!1;++r<i;){var o=Ya(e[r]);if(!(a=null!=t&&n(t,o)))break;t=t[o]}return a||++r!=i?a:!!(i=null==t?0:t.length)&&La(i)&&Na(o,i)&&(Wa(t)||Ia(t))};var Ra=xa,Ua=We,Ja=function(t,e){return null!=t&&Va(t,e,Pa)},Ga=X,Xa=Ha,Qa=_a,Za=je;var Ka=Te;var qa=function(t){return function(e){return null==e?void 0:e[t]}},to=function(t){return function(e){return Ka(e,t)}},eo=X,no=je;var ro=function(t){var e=za(t);return 1==e.length&&e[0][2]?Ma(e[0][0],e[0][1]):function(n){return n===t||ja(n,t,e)}},io=function(t,e){return Ga(t)&&Xa(e)?Qa(Za(t),e):function(n){var r=Ua(n,t);return void 0===r&&r===e?Ja(n,t):Ra(e,r,3)}},ao=function(t){return t},oo=w,so=function(t){return eo(t)?qa(no(t)):to(t)};var lo=/\s/;var co=function(t){for(var e=t.length;e--&&lo.test(t.charAt(e)););return e},uo=/^\s+/;var ho=function(t){return t?t.slice(0,co(t)+1).replace(uo,""):t},fo=Q,go=V,po=/^[-+]0x[0-9a-f]+$/i,mo=/^0b[01]+$/i,yo=/^0o[0-7]+$/i,bo=parseInt;var vo=function(t){if("number"==typeof t)return t;if(go(t))return NaN;if(fo(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=fo(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=ho(t);var n=mo.test(t);return n||yo.test(t)?bo(t.slice(2),n?2:8):po.test(t)?NaN:+t},$o=1/0;var So=function(t){return t?(t=vo(t))===$o||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var Fo=hr,Bo=function(t){return"function"==typeof t?t:null==t?ao:"object"==typeof t?oo(t)?io(t[0],t[1]):ro(t):so(t)},wo=function(t){var e=So(t),n=e%1;return e==e?n?e-n:e:0},Do=Math.max;var xo=B((function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:wo(n);return i<0&&(i=Do(r+i,0)),Fo(t,Bo(e),i)}));const ko={collections:{base:{InputBoxShadow:n`
        inset 0 0 4px 0px ${Ue.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 4px 0px ${Ue.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${Ue.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:n`
        inset 0 0 3px 0px ${Ue.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 3px 0px ${Ue.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${Ue.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Oo=t=>e=>{var n;const r=e.theme,i=Ye(ko,r[Pe.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Le(i,t,r.options.designToken):Le(i,t)},Ao={InputBoxShadow:Oo("InputBoxShadow"),InputErrorBoxShadow:Oo("InputErrorBoxShadow"),ElevationBoxShadow:Oo("ElevationBoxShadow"),Table:{Header:Oo("Table.Header"),Cell:{Primary:Oo("Table.Cell.Primary"),Secondary:Oo("Table.Cell.Secondary"),Selected:Oo("Table.Cell.Selected"),Hover:Oo("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Oo("Button.Danger.BackgroundColor"),Hover:Oo("Button.Danger.Hover"),Primary:Oo("Button.Danger.Primary"),Border:Oo("Button.Danger.Border")}}},Ho=e.div`
    display: inline-block;
    position: relative;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
`,Eo=r`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Co=e.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
    margin: ${t=>t.$borderWidth}px;
    border-width: ${t=>t.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${t=>t.$color||Ue.Neutral[8](t)}
        transparent transparent transparent;
    animation: ${Eo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,_o=e(Co)`
    animation-delay: -0.45s;
`,jo=e(Co)`
    animation-delay: -0.3s;
`,zo=e(Co)`
    animation-delay: -0.15s;
`,Mo={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},To={D1:{fontFamily:Mo.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Mo.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Mo.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mo.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mo.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Mo.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Mo.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Mo.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Mo.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Mo.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Mo.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Mo.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Mo.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Mo.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Io={D1:{fontFamily:Mo.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:Mo.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:Mo.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:Mo.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:Mo.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:Mo.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:Mo.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:Mo.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:Mo.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:Mo.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:Mo.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:Mo.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:Mo.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:Mo.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Wo={collections:{base:To,oneservice:{D1:{fontFamily:Mo.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Mo.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Mo.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mo.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mo.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Mo.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Mo.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Mo.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Mo.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Mo.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Mo.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Mo.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Mo.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Mo.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Io},defaultValue:"base"},No=t=>e=>{const n=e.theme,r=Ye(Wo,n[Pe.textStyleScheme]);return n.options&&n.options.textStyle?Le(r,t,n.options.textStyle):Le(r,t)},Lo={D1:{fontFamily:No("D1.fontFamily"),fontSize:No("D1.fontSize"),fontWeight:No("D1.fontWeight"),lineHeight:No("D1.lineHeight"),letterSpacing:No("D1.letterSpacing"),fontVariant:No("D1.fontVariant")},D2:{fontFamily:No("D2.fontFamily"),fontSize:No("D2.fontSize"),fontWeight:No("D2.fontWeight"),lineHeight:No("D2.lineHeight"),letterSpacing:No("D2.letterSpacing"),fontVariant:No("D2.fontVariant")},D3:{fontFamily:No("D3.fontFamily"),fontSize:No("D3.fontSize"),fontWeight:No("D3.fontWeight"),lineHeight:No("D3.lineHeight"),letterSpacing:No("D3.letterSpacing"),fontVariant:No("D3.fontVariant")},D4:{fontFamily:No("D4.fontFamily"),fontSize:No("D4.fontSize"),fontWeight:No("D4.fontWeight"),lineHeight:No("D4.lineHeight"),letterSpacing:No("D4.letterSpacing"),fontVariant:No("D4.fontVariant")},DBody:{fontFamily:No("DBody.fontFamily"),fontSize:No("DBody.fontSize"),fontWeight:No("DBody.fontWeight"),lineHeight:No("DBody.lineHeight"),letterSpacing:No("DBody.letterSpacing"),fontVariant:No("DBody.fontVariant")},H1:{fontFamily:No("H1.fontFamily"),fontSize:No("H1.fontSize"),fontWeight:No("H1.fontWeight"),lineHeight:No("H1.lineHeight"),letterSpacing:No("H1.letterSpacing"),fontVariant:No("H1.fontVariant")},H2:{fontFamily:No("H2.fontFamily"),fontSize:No("H2.fontSize"),fontWeight:No("H2.fontWeight"),lineHeight:No("H2.lineHeight"),letterSpacing:No("H2.letterSpacing"),fontVariant:No("H2.fontVariant")},H3:{fontFamily:No("H3.fontFamily"),fontSize:No("H3.fontSize"),fontWeight:No("H3.fontWeight"),lineHeight:No("H3.lineHeight"),letterSpacing:No("H3.letterSpacing"),fontVariant:No("H3.fontVariant")},H4:{fontFamily:No("H4.fontFamily"),fontSize:No("H4.fontSize"),fontWeight:No("H4.fontWeight"),lineHeight:No("H4.lineHeight"),letterSpacing:No("H4.letterSpacing"),fontVariant:No("H4.fontVariant")},H5:{fontFamily:No("H5.fontFamily"),fontSize:No("H5.fontSize"),fontWeight:No("H5.fontWeight"),lineHeight:No("H5.lineHeight"),letterSpacing:No("H5.letterSpacing"),fontVariant:No("H5.fontVariant")},H6:{fontFamily:No("H6.fontFamily"),fontSize:No("H6.fontSize"),fontWeight:No("H6.fontWeight"),lineHeight:No("H6.lineHeight"),letterSpacing:No("H6.letterSpacing"),fontVariant:No("H6.fontVariant")},Body:{fontFamily:No("Body.fontFamily"),fontSize:No("Body.fontSize"),fontWeight:No("Body.fontWeight"),lineHeight:No("Body.lineHeight"),letterSpacing:No("Body.letterSpacing"),fontVariant:No("Body.fontVariant")},BodySmall:{fontFamily:No("BodySmall.fontFamily"),fontSize:No("BodySmall.fontSize"),fontWeight:No("BodySmall.fontWeight"),lineHeight:No("BodySmall.lineHeight"),letterSpacing:No("BodySmall.letterSpacing"),fontVariant:No("BodySmall.fontVariant")},XSmall:{fontFamily:No("XSmall.fontFamily"),fontSize:No("XSmall.fontSize"),fontWeight:No("XSmall.fontWeight"),lineHeight:No("XSmall.lineHeight"),letterSpacing:No("XSmall.letterSpacing"),fontVariant:No("XSmall.fontVariant")}},Yo=[Mo.OpenSans,Mo.PlusJakartaSans],Po=(t,e)=>{switch(e){case 700:case"bold":return t.Bold;case 600:case"semibold":return t.Semibold;case 300:case"light":return t.Light;case 400:case"regular":return t.Regular;default:return""}},Vo=(t,e)=>r=>{var i;const a=Lo[t].fontFamily(r),o=Lo[t].fontWeight(r),s=Yo.find((t=>Object.values(t).includes(a)));return s?n`
                font-family: ${Po(s,e)||Po(s,o)||a};
                font-weight: normal !important;
            `:n`
            font-family: ${a};
            font-weight: ${null!==(i=Ro(e)||o)&&void 0!==i?i:"normal"};
        `},Ro=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Uo=t=>{if(t>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},Jo=(t,e,r=!1)=>i=>{const a=Lo[t],o=a.fontSize(i);return n`
            ${Vo(t,e)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            font-variant: ${a.fontVariant(i)||"normal"};
            ${n`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Go=(t=!1,e=!1,r=void 0)=>e?n`
            display: block;
            ${Uo(r)}
        `:t?n`
            display: inline;
        `:n`
            display: block;
            ${Uo(r)}
        `;var Xo;!function(t){t.D1=e.h1`
        ${t=>n`
                ${Jo("D1",t.weight,t.paragraph)}
                color: ${Ue.Neutral[1]};
                ${Go(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=e.h1`
        ${t=>n`
                ${Jo("D2",t.weight,t.paragraph)}
                color: ${Ue.Neutral[1]};
                ${Go(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=e.h1`
        ${t=>n`
                ${Jo("D3",t.weight,t.paragraph)}
                color: ${Ue.Neutral[1]};
                ${Go(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=e.h1`
        ${t=>n`
                ${Jo("D4",t.weight,t.paragraph)}
                color: ${Ue.Neutral[1]};
                ${Go(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=e.h1`
        ${t=>n`
                ${Jo("DBody",t.weight,t.paragraph)}
                color: ${Ue.Neutral[1]};
                ${Go(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=e.h1`
        ${t=>n`
                ${Jo("H1",t.weight,t.paragraph)}
                color: ${Ue.Neutral[1]};
                ${Go(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=e.h2`
        ${t=>n`
                ${Jo("H2",t.weight,t.paragraph)}
                color: ${Ue.Neutral[1]};
                ${Go(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=e.h3`
        ${t=>n`
                ${Jo("H3",t.weight,t.paragraph)}
                color: ${Ue.Neutral[1]};
                ${Go(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=e.h4`
        ${t=>n`
                ${Jo("H4",t.weight,t.paragraph)}
                color: ${Ue.Neutral[1]};
                ${Go(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=e.h5`
        ${t=>n`
                ${Jo("H5",t.weight,t.paragraph)}
                color: ${Ue.Neutral[1]};
                ${Go(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=e.h6`
        ${t=>n`
                ${Jo("H6",t.weight,t.paragraph)}
                color: ${Ue.Neutral[1]};
                ${Go(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=e.p`
        ${t=>n`
                ${Jo("Body",t.weight,t.paragraph)}
                color: ${Ue.Neutral[1]};
                ${Go(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=e.p`
        ${t=>n`
                ${Jo("BodySmall",t.weight,t.paragraph)}
                color: ${Ue.Neutral[1]};
                ${Go(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=e.span`
        ${t=>n`
                ${Jo("XSmall",t.weight,t.paragraph)}
                color: ${Ue.Neutral[1]};
                ${Go(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Ko(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Ko(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Xo||(Xo={}));const Qo=e.a`
    ${t=>n`
            ${Jo(t.textStyle,t.weight)}
            color: ${Ue.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ue.Secondary};

                svg {
                    color: ${Ue.Secondary};
                }
            }
        `}
`,Zo=e($)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ko=t=>{var{external:e=!1,children:n}=t,r=Qe(t,["external","children"]);return o(Qo,Object.assign({},r,{children:[n,e&&a(Zo,{})]}))};var qo;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(qo||(qo={}));const ts=e.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    }

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${t=>{switch(t.$buttonStyle){case"secondary":return n`
                    background-color: ${Ue.Neutral[8]};
                    border: 1px solid
                        ${t.$buttonIsDanger?Ao.Button.Danger.Border:Ue.Primary};

                    color: ${t.$buttonIsDanger?Ao.Button.Danger.Primary:Ue.Primary};
                `;case"light":return n`
                    background-color: ${Ue.Neutral[8]};
                    border: 1px solid ${Ue.Neutral[5]};

                    color: ${t.$buttonIsDanger?Ao.Button.Danger.Primary:Ue.Primary};
                `;case"disabled":return n`
                    background-color: ${Ue.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ue.Neutral[3]};
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${t.$buttonIsDanger?Ao.Button.Danger.Primary:Ue.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${t.$buttonIsDanger?Ao.Button.Danger.Hover:Ue.Secondary};
                    }
                `;default:return n`
                    background-color: ${t.$buttonIsDanger?Ao.Button.Danger.BackgroundColor:Ue.Primary};
                    border: 1px solid transparent;

                    ${Xe.mobileL} {
                        width: 100%;
                    }

                    color: ${Ue.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${t=>"small"===t.$buttonSizeStyle?n`
                    height: 2.5rem;
                    ${Jo("H5","semibold")}

                    ${Xe.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    ${Jo("H4","semibold")}

                    ${Xe.mobileS} {
                        height: auto;
                    }
                `}
`,es=e((({color:t,className:e,size:n=18})=>o(Ho,Object.assign({className:e,$size:n,$color:t,"data-testid":"component-loading-spinner"},{children:[a(Co,{id:"inner1",$size:n-2,$borderWidth:2,$color:t}),a(_o,{id:"inner2",$size:n-2,$borderWidth:2,$color:t}),a(jo,{id:"inner3",$size:n-2,$borderWidth:2,$color:t}),a(zo,{id:"inner4",$size:n-2,$borderWidth:2,$color:t})]}))))`
    ${t=>{let e=t.$buttonIsDanger?Ao.Button.Danger.Primary:Ue.Primary(t);switch(t.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":e=Ue.Neutral[3](t);break;default:e=Ue.Neutral[8](t)}return n`
            margin-right: ${t.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${e} transparent transparent transparent;
            }
        `}}
`,ns={Default:l.forwardRef(((t,e)=>{const{children:n,disabled:r=!1,loading:i=!1,styleType:s="default",danger:l=!1}=t,c=Qe(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:r?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return o(ts,Object.assign({ref:e,"data-testid":c["data-testid"]||"button",disabled:r},d,c,{children:[i&&a(es,Object.assign({},d)),a("span",{children:n})]}))})),Small:l.forwardRef(((t,e)=>{const{children:n,disabled:r=!1,loading:i=!1,styleType:s="default",danger:l=!1}=t,c=Qe(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:r?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return o(ts,Object.assign({ref:e,"data-testid":c["data-testid"]||"button",disabled:r},d,c,{children:[i&&a(es,Object.assign({},d,{size:16})),a("span",{children:n})]}))}))},rs=e.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${Xe.tablet} {
        display: none;
    }
`,is=e.ul`
    display: none;

    ${Xe.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,as=e.ul`
    display: none;
    list-style: none;

    ${Xe.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Xe.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,os=e.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${Xe.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${t=>t.$mobile?"1rem":"0"};
        }
    }

    ${Xe.mobileL} {
        ${t=>{if(t.$mobile)return n`
                    padding: 0 1rem;
                `}}
    }
`,ss=e(ns.Small)`
    ${Xe.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,ls=e.div`
    display: none;

    ${Xe.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,cs=e(Xo.BodySmall)`
    margin-bottom: 0.5rem;
`,ds=e.div`
    display: flex;
`,us=e.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Xe.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${Xe.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,hs=({actionButtons:t,mobile:e=!1,onActionButtonClick:n})=>{const r=t=>{t.stopPropagation()},i=t=>e=>{e.stopPropagation(),"download"===t.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),n(e,t)},l=(t,e)=>{const n=t?(t=>{const e=xo(t,(t=>"download"===t.type));if(e>-1){const n=[...t],r=n.splice(e,1);return[...n,r[0]]}return t})(e):e;return n.map(((e,n)=>{let s;switch(e.type){case"download":s=t?(l=e.args,o(ls,{children:[a(cs,Object.assign({weight:"semibold"},{children:l&&l.children||"Download the app"})),o(ds,{children:[a(us,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:r},{children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),a(us,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:r},{children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):a(ss,Object.assign({},e.args,{type:"button",onClick:i(e),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const r=e.args["data-testid"]?`action-button__${e.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${n+1}`;s=a(ss,Object.assign({},e.args,{type:"button",onClick:i(e),"data-testid":r}));break}case"component":{const t=e.args;s=t&&t.render||null;break}default:s=null}var l;if(s)return a(os,Object.assign({$mobile:t},{children:s}),`action-button-${n+1}`)}))};if(t){const n=(null==t?void 0:t.mobile)||t.desktop,r=n.filter((t=>!!t.uncollapsible)),i=n.filter((t=>!t.uncollapsible));return e?a(s,{children:i.length>0&&a(as,{children:l(e,i)})}):o(s,{children:[r.length>0&&a(is,{children:l(!1,r)}),t.desktop.length>0&&a(rs,{children:l(e,t.desktop)})]})}return a(s,{})},fs=e.ul`
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    left: 0;
    top: 102%;
    min-width: 15.625rem;
    position: absolute;
    max-height: 20rem;

    background: ${Ue.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${Ao.ElevationBoxShadow};
`,gs=e.ul`
    display: none;
    list-style: none;

    ${Xe.tablet} {
        border-left: 0.25rem solid ${Ue.Primary};
        display: flex;
        flex-direction: column;
    }
`,ps=e(Xo.Hyperlink.Small)`
    ${Jo("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${Ue.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${Ue.Primary};
    }
    :hover {
        color: ${Ue.Accent.Light[1]};
    }

    ${Xe.tablet} {
        ${Jo("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,ms=e.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 0.5rem 0;

    :first-child {
        padding-top: 1rem;
    }

    :last-child {
        padding-bottom: 1rem;
    }

    ${Xe.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,ys=({items:t,mobile:e=!1,onItemClick:n})=>{const r=t=>e=>{e.stopPropagation(),n(e,t)},i=(e=!1)=>t.map(((t,n)=>{const{children:i,options:o}=t,s=Qe(t,["children","options"]),l=e?`link__mobile-${n+1}`:`link__${n+1}`;return a(ms,{children:a(ps,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:r(t)},o,{children:i}))},n)}));if(t&&t.length>0){return a(e?gs:fs,{children:i(e)})}return a(s,{})},bs=e.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${t=>t.$alignLeft&&"margin-right: auto;"}

    ${Xe.tablet} {
        display: none;
    }
`,vs=e.ul`
    display: none;
    list-style: none;

    ${Xe.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,$s=e.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${t=>t.$hiddenBranding?"-0.5rem":"0"};
    }

    ${Xe.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,Ss=e(Xo.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Ue.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Ue.Neutral[1]};
    }

    ${Xe.tablet} {
        color: ${Ue.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Ue.Neutral[1]};
        }
    }
`,Fs=e.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,Bs=e.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Ue.Primary};

    ${Xe.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Ue.Primary};
    }
`,ws=e.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,Ds=e(Ke)`
    padding: 0.5rem;
    transform: rotate(${t=>t.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,xs=e(S)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Ue.Neutral[3]};
    :hover {
        color: ${Ue.Neutral[1]};
    }
`,ks=({items:t,selectedId:e,mobile:n=!1,hideNavBranding:r,onItemClick:i})=>{const[l,h]=d(-1),[f,g]=d(!1),p=u(null);c((()=>{const t=t=>{p.current&&!p.current.contains(t.target)&&m()};return document.addEventListener("click",t,!0),()=>{document.removeEventListener("click",t,!0)}}),[]);const m=()=>{g(!1)},y=(t,e)=>n=>{n.stopPropagation(),h(e),g(!0),i(n,t)},b=(t,e)=>{t.stopPropagation(),i(t,e),g(!1)},v=()=>t.map(((t,i)=>{if("component"===t.itemType){const e=t&&t.children||null;return a("li",{children:e},i)}{const s=(t=>{if(t.id===e)return!0;if((null==t?void 0:t.subMenu)&&t.subMenu.length>=1)return!!t.subMenu.find((t=>t.id===e));return!1})(t),{children:c,options:d}=t,u=Qe(t,["children","options"]),h=s?n?"bold":"semibold":"regular",g=n?`link__mobile-${i+1}`:`link__${i+1}`,p=l>=0&&l===i&&f;return o($s,Object.assign({$hiddenBranding:r},{children:[o(Ss,Object.assign({"data-testid":g,weight:h,$selected:s},u,{onClick:y(t,i)},d,{children:[a(Fs,{children:c}),s&&a(Bs,{"data-testid":`${g}-indicator`}),n&&t.subMenu&&a(ws,{children:a(Ds,Object.assign({"data-testid":`${g}-expand-collapse-button`,$selected:p,focusHighlight:!1,focusOutline:"browser","aria-label":p?"Collapse":"Expand"},{children:a(xs,{})}))})]})),p&&a(ys,{items:t.subMenu,mobile:n,onItemClick:b})]}),i)}}));return t&&t.length>0?n?a(vs,Object.assign({ref:p},{children:v()})):a(bs,Object.assign({ref:p,$alignLeft:r},{children:v()})):a(s,{})},Os=h(((t,e)=>{var{items:n,className:r,id:l,selectedId:h,compress:g=!1,fixed:p=!0,resources:m,hideNavElements:y=!1,hideNavBranding:b=!1,drawerDismissalExclusions:v=[],actionButtons:$,onItemClick:S,onActionButtonClick:F,onBrandClick:B,masthead:w=!0,layout:D="default"}=t,x=Qe(t,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[k,O]=d(!1),[A,H]=d(!1),E="stretch"===D,C=u(),_=i(),j=(t=>{switch(t){case"bookingsg":return cr;case"mylegacy":return ur;case"ccube":return dr;default:return lr}})(null==_?void 0:_.resourceScheme),z=(null==m?void 0:m.primary)||j.primary,M=null==m?void 0:m.secondary;f(e,(()=>Object.assign(C.current,{dismissDrawer:()=>{T()}})),[k]),c((()=>(W(),window.addEventListener("resize",W),()=>{window.removeEventListener("resize",W)})),[]);const T=()=>{O(!1),setTimeout((()=>{H(!1)}),550)},I=t=>k&&-1===v.indexOf(t),W=()=>{window.innerWidth<=Je.tablet&&k&&T()},N=(t,e)=>{B&&(t.preventDefault(),B(e)),I("brand-click")&&T()},L=(t,e)=>{e.onClick?e.onClick(t):S&&(t.preventDefault(),S(e)),!(null==e?void 0:e.subMenu)&&I("item-click")&&T()},Y=(t,e)=>{e.args&&e.args.onClick?e.args.onClick(t):F&&(t.preventDefault(),F(e)),I("item-click")&&T()},P=()=>{O(!0),H(!0)},V=()=>{I("close-button-click")&&T()},R=()=>{const t=n.mobile||n.desktop;return t&&t.length>0||$&&(()=>{const t=$.mobile||$.desktop;return!!t&&t.length&&t.some((t=>!t.uncollapsible))})()?a(an,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:P,focusHighlight:!1},{children:a(on,{})})):null};return o(en,Object.assign({ref:C,$fixed:p,className:r,id:l||"navbar-wrapper","data-testid":x["data-testid"]||"navbar-wrapper"},{children:[w&&a(vn,{}),o(yn.Content,Object.assign({stretch:E},{children:[o(nn,Object.assign({$compress:g},{children:[!b&&o(sn,Object.assign({$compress:g,"data-id":"brand-container"},{children:[a(tr,{resources:z,onClick:N,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),M&&o(s,{children:[a(ln,{$compress:g}),a(tr,{resources:M,onClick:N,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!y&&o(rn,Object.assign({$hideNavBranding:b},{children:[a(ks,{items:n.desktop,onItemClick:L,selectedId:h,hideNavBranding:b}),a(hs,{actionButtons:$,onActionButtonClick:Y}),R()]}))]})),!y&&a(Xn,Object.assign({show:A,enableOverlayClick:!0,onOverlayClick:V},{children:o(sr,Object.assign({show:k,resources:{primary:z,secondary:M},onClose:V,onBrandClick:N,actionButtons:$,hideNavBranding:b},{children:[a(ks,{items:n.mobile||n.desktop,onItemClick:L,selectedId:h,mobile:!0}),a(hs,{actionButtons:$,onActionButtonClick:Y,mobile:!0})]}))}))]}))]}))})),As=tn,Hs=3.5;export{Os as Navbar,As as NavbarHeight,Hs as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
