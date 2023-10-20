import{jsxs as t,jsx as e}from"react/jsx-runtime";import{ExternalIcon as n}from"@lifesg/react-icons/external";import r,{css as i}from"styled-components";function a(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l=Array.isArray,c="object"==typeof o&&o&&o.Object===Object&&o,g="object"==typeof self&&self&&self.Object===Object&&self,h=c||g||Function("return this")(),f=h.Symbol,d=f,u=Object.prototype,p=u.hasOwnProperty,s=u.toString,F=d?d.toStringTag:void 0;var y=function(t){var e=p.call(t,F),n=t[F];try{t[F]=void 0;var r=!0}catch(t){}var i=s.call(t);return r&&(e?t[F]=n:delete t[F]),i},m=Object.prototype.toString;var S=y,B=function(t){return m.call(t)},v=f?f.toStringTag:void 0;var D=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?S(t):B(t)};var H=D,b=function(t){return null!=t&&"object"==typeof t};var $=function(t){return"symbol"==typeof t||b(t)&&"[object Symbol]"==H(t)},_=l,E=$,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/;var x=function(t,e){if(_(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!E(t))||(A.test(t)||!z.test(t)||null!=e&&t in Object(e))};var w=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},O=D,k=w;var W,C=function(t){if(!k(t))return!1;var e=O(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},j=h["__core-js_shared__"],L=(W=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"";var T=function(t){return!!L&&L in t},V=Function.prototype.toString;var I=C,R=T,P=w,N=function(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""},X=/^\[object .+?Constructor\]$/,G=Function.prototype,M=Object.prototype,U=G.toString,q=M.hasOwnProperty,J=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(t){return!(!P(t)||R(t))&&(I(t)?J:X).test(N(t))},Q=function(t,e){return null==t?void 0:t[e]};var Y=function(t,e){var n=Q(t,e);return K(n)?n:void 0},Z=Y(Object,"create"),tt=Z;var et=function(){this.__data__=tt?tt(null):{},this.size=0};var nt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},rt=Z,it=Object.prototype.hasOwnProperty;var at=function(t){var e=this.__data__;if(rt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return it.call(e,t)?e[t]:void 0},ot=Z,lt=Object.prototype.hasOwnProperty;var ct=Z;var gt=et,ht=nt,ft=at,dt=function(t){var e=this.__data__;return ot?void 0!==e[t]:lt.call(e,t)},ut=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ct&&void 0===e?"__lodash_hash_undefined__":e,this};function pt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}pt.prototype.clear=gt,pt.prototype.delete=ht,pt.prototype.get=ft,pt.prototype.has=dt,pt.prototype.set=ut;var st=pt;var Ft=function(){this.__data__=[],this.size=0};var yt=function(t,e){return t===e||t!=t&&e!=e};var mt=function(t,e){for(var n=t.length;n--;)if(yt(t[n][0],e))return n;return-1},St=mt,Bt=Array.prototype.splice;var vt=mt;var Dt=mt;var Ht=mt;var bt=Ft,$t=function(t){var e=this.__data__,n=St(e,t);return!(n<0)&&(n==e.length-1?e.pop():Bt.call(e,n,1),--this.size,!0)},_t=function(t){var e=this.__data__,n=vt(e,t);return n<0?void 0:e[n][1]},Et=function(t){return Dt(this.__data__,t)>-1},zt=function(t,e){var n=this.__data__,r=Ht(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function At(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}At.prototype.clear=bt,At.prototype.delete=$t,At.prototype.get=_t,At.prototype.has=Et,At.prototype.set=zt;var xt=At,wt=Y(h,"Map"),Ot=st,kt=xt,Wt=wt;var Ct=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var jt=function(t,e){var n=t.__data__;return Ct(e)?n["string"==typeof e?"string":"hash"]:n.map},Lt=jt;var Tt=jt;var Vt=jt;var It=jt;var Rt=function(){this.size=0,this.__data__={hash:new Ot,map:new(Wt||kt),string:new Ot}},Pt=function(t){var e=Lt(this,t).delete(t);return this.size-=e?1:0,e},Nt=function(t){return Tt(this,t).get(t)},Xt=function(t){return Vt(this,t).has(t)},Gt=function(t,e){var n=It(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Mt.prototype.clear=Rt,Mt.prototype.delete=Pt,Mt.prototype.get=Nt,Mt.prototype.has=Xt,Mt.prototype.set=Gt;var Ut=Mt;function qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(qt.Cache||Ut),n}qt.Cache=Ut;var Jt=qt;var Kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qt=/\\(\\)?/g,Yt=function(t){var e=Jt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Kt,(function(t,n,r,i){e.push(r?i.replace(Qt,"$1"):n||t)})),e}));var Zt=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},te=l,ee=$,ne=f?f.prototype:void 0,re=ne?ne.toString:void 0;var ie=function t(e){if("string"==typeof e)return e;if(te(e))return Zt(e,t)+"";if(ee(e))return re?re.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ae=ie;var oe=l,le=x,ce=Yt,ge=function(t){return null==t?"":ae(t)};var he=$;var fe=function(t,e){return oe(t)?t:le(t,e)?[t]:ce(ge(t))},de=function(t){if("string"==typeof t||he(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ue=function(t,e){for(var n=0,r=(e=fe(e,t)).length;null!=t&&n<r;)t=t[de(e[n++])];return n&&n==r?t:void 0};var pe=function(t,e,n){var r=null==t?void 0:ue(t,e);return void 0===r?n:r};const se=(t,e,n)=>e?pe(n,e)||pe(t,e):n||t,Fe=(t,e)=>{const n=e||t.defaultValue;return pe(t.collections,n)};var ye;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(ye||(ye={}));const me={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Se=t=>e=>{const n=e.theme,r=Fe(me,n[ye.colorScheme]);return n.options&&n.options.color?se(r,t,n.options.color):se(r,t)},Be=(Se("Brand.1"),Se("Brand.2"),Se("Brand.3"),Se("Brand.4"),Se("Brand.5"),Se("Brand.6"),Se("Primary")),ve=(Se("PrimaryDark"),Se("Secondary")),De=(Se("Accent.Light.1"),Se("Accent.Light.2"),Se("Accent.Light.3"),Se("Accent.Light.4"),Se("Accent.Light.5"),Se("Accent.Light.6"),Se("Accent.Dark.1"),Se("Accent.Dark.2"),Se("Accent.Dark.3"),{1:Se("Neutral.1"),2:Se("Neutral.2"),3:Se("Neutral.3"),4:Se("Neutral.4"),5:Se("Neutral.5"),6:Se("Neutral.6"),7:Se("Neutral.7"),8:Se("Neutral.8")}),He=(Se("Validation.Green.Text"),Se("Validation.Green.Icon"),Se("Validation.Green.Border"),Se("Validation.Green.Background"),Se("Validation.Orange.Text"),Se("Validation.Orange.Icon"),Se("Validation.Orange.Border"),Se("Validation.Orange.Background"),Se("Validation.Orange.Badge"),Se("Validation.Red.Text"),Se("Validation.Red.Icon"),Se("Validation.Red.Border"),Se("Validation.Red.Background"),Se("Validation.Blue.Text"),Se("Validation.Blue.Icon"),Se("Validation.Blue.Border"),Se("Validation.Blue.Background"),Se("Shadow.Accent"),Se("Shadow.Red"),Se("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),be={collections:{base:{D1:{fontFamily:He.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:He.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:He.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:He.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:He.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:He.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:He.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:He.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:He.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:He.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:He.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:He.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:He.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:He.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},$e=t=>e=>{const n=e.theme,r=Fe(be,n[ye.textStyleScheme]);return n.options&&n.options.textStyle?se(r,t,n.options.textStyle):se(r,t)},_e={D1:{fontFamily:$e("D1.fontFamily"),fontSize:$e("D1.fontSize"),fontWeight:$e("D1.fontWeight"),lineHeight:$e("D1.lineHeight"),letterSpacing:$e("D1.letterSpacing")},D2:{fontFamily:$e("D2.fontFamily"),fontSize:$e("D2.fontSize"),fontWeight:$e("D2.fontWeight"),lineHeight:$e("D2.lineHeight"),letterSpacing:$e("D2.letterSpacing")},D3:{fontFamily:$e("D3.fontFamily"),fontSize:$e("D3.fontSize"),fontWeight:$e("D3.fontWeight"),lineHeight:$e("D3.lineHeight"),letterSpacing:$e("D3.letterSpacing")},D4:{fontFamily:$e("D4.fontFamily"),fontSize:$e("D4.fontSize"),fontWeight:$e("D4.fontWeight"),lineHeight:$e("D4.lineHeight"),letterSpacing:$e("D4.letterSpacing")},DBody:{fontFamily:$e("DBody.fontFamily"),fontSize:$e("DBody.fontSize"),fontWeight:$e("DBody.fontWeight"),lineHeight:$e("DBody.lineHeight"),letterSpacing:$e("DBody.letterSpacing")},H1:{fontFamily:$e("H1.fontFamily"),fontSize:$e("H1.fontSize"),fontWeight:$e("H1.fontWeight"),lineHeight:$e("H1.lineHeight"),letterSpacing:$e("H1.letterSpacing")},H2:{fontFamily:$e("H2.fontFamily"),fontSize:$e("H2.fontSize"),fontWeight:$e("H2.fontWeight"),lineHeight:$e("H2.lineHeight"),letterSpacing:$e("H2.letterSpacing")},H3:{fontFamily:$e("H3.fontFamily"),fontSize:$e("H3.fontSize"),fontWeight:$e("H3.fontWeight"),lineHeight:$e("H3.lineHeight"),letterSpacing:$e("H3.letterSpacing")},H4:{fontFamily:$e("H4.fontFamily"),fontSize:$e("H4.fontSize"),fontWeight:$e("H4.fontWeight"),lineHeight:$e("H4.lineHeight"),letterSpacing:$e("H4.letterSpacing")},H5:{fontFamily:$e("H5.fontFamily"),fontSize:$e("H5.fontSize"),fontWeight:$e("H5.fontWeight"),lineHeight:$e("H5.lineHeight"),letterSpacing:$e("H5.letterSpacing")},H6:{fontFamily:$e("H6.fontFamily"),fontSize:$e("H6.fontSize"),fontWeight:$e("H6.fontWeight"),lineHeight:$e("H6.lineHeight"),letterSpacing:$e("H6.letterSpacing")},Body:{fontFamily:$e("Body.fontFamily"),fontSize:$e("Body.fontSize"),fontWeight:$e("Body.fontWeight"),lineHeight:$e("Body.lineHeight"),letterSpacing:$e("Body.letterSpacing")},BodySmall:{fontFamily:$e("BodySmall.fontFamily"),fontSize:$e("BodySmall.fontSize"),fontWeight:$e("BodySmall.fontWeight"),lineHeight:$e("BodySmall.lineHeight"),letterSpacing:$e("BodySmall.letterSpacing")},XSmall:{fontFamily:$e("XSmall.fontFamily"),fontSize:$e("XSmall.fontSize"),fontWeight:$e("XSmall.fontWeight"),lineHeight:$e("XSmall.lineHeight"),letterSpacing:$e("XSmall.letterSpacing")}},Ee=t=>{switch(t){case 700:case"bold":return He.Bold;case 600:case"semibold":return He.Semibold;case 300:case"light":return He.Light;case 400:case"regular":return He.Regular;default:return""}},ze=(t,e)=>n=>{var r;const a=_e[t].fontFamily(n),o=_e[t].fontWeight(n);return Object.values(He).includes(a)?i`
                font-family: ${Ee(e)||Ee(o)||a};
                font-weight: normal !important;
            `:i`
            font-family: ${a};
            font-weight: ${null!==(r=Ae(e)||o)&&void 0!==r?r:"normal"};
        `},Ae=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},xe=t=>{if(t>0)return i`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},we=(t,e,n=!1)=>r=>{const a=_e[t],o=a.fontSize(r);return i`
            ${ze(t,e)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${i`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Oe=(t=!1,e=!1,n=void 0)=>e?i`
            display: block;
            ${xe(n)}
        `:t?i`
            display: inline;
        `:i`
            display: block;
            ${xe(n)}
        `;var ke;!function(t){t.D1=r.h1`
        ${t=>i`
                ${we("D1",t.weight,t.paragraph)}
                color: ${De[1]};
                ${Oe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=r.h1`
        ${t=>i`
                ${we("D2",t.weight,t.paragraph)}
                color: ${De[1]};
                ${Oe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=r.h1`
        ${t=>i`
                ${we("D3",t.weight,t.paragraph)}
                color: ${De[1]};
                ${Oe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=r.h1`
        ${t=>i`
                ${we("D4",t.weight,t.paragraph)}
                color: ${De[1]};
                ${Oe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=r.h1`
        ${t=>i`
                ${we("DBody",t.weight,t.paragraph)}
                color: ${De[1]};
                ${Oe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=r.h1`
        ${t=>i`
                ${we("H1",t.weight,t.paragraph)}
                color: ${De[1]};
                ${Oe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=r.h2`
        ${t=>i`
                ${we("H2",t.weight,t.paragraph)}
                color: ${De[1]};
                ${Oe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=r.h3`
        ${t=>i`
                ${we("H3",t.weight,t.paragraph)}
                color: ${De[1]};
                ${Oe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=r.h4`
        ${t=>i`
                ${we("H4",t.weight,t.paragraph)}
                color: ${De[1]};
                ${Oe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=r.h5`
        ${t=>i`
                ${we("H5",t.weight,t.paragraph)}
                color: ${De[1]};
                ${Oe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=r.h6`
        ${t=>i`
                ${we("H6",t.weight,t.paragraph)}
                color: ${De[1]};
                ${Oe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=r.p`
        ${t=>i`
                ${we("Body",t.weight,t.paragraph)}
                color: ${De[1]};
                ${Oe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=r.p`
        ${t=>i`
                ${we("BodySmall",t.weight,t.paragraph)}
                color: ${De[1]};
                ${Oe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=r.span`
        ${t=>i`
                ${we("XSmall",t.weight,t.paragraph)}
                color: ${De[1]};
                ${Oe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>je(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>je(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(ke||(ke={}));const We=r.a`
    ${t=>i`
            ${we(t.textStyle,t.weight)}
            color: ${Be};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ve};

                svg {
                    color: ${ve};
                }
            }
        `}
`,Ce=r(n)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,je=n=>{var{external:r=!1,children:i}=n,o=a(n,["external","children"]);return t(We,Object.assign({},o,{children:[i,r&&e(Ce,{})]}))},Le=r.div`
    border-radius: 0.5rem;
    background: ${De[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Te=t=>{var{children:n}=t,r=a(t,["children"]);const i=r["data-testid"]||"card";return e(Le,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?e(ke.Body,{children:n}):n}))};export{Te as Card};
//# sourceMappingURL=index.js.map
