import t,{jsxs as e,jsx as n}from"react/jsx-runtime";import r,{useMemo as i,useState as a,useEffect as o}from"react";import l,{css as c}from"styled-components";var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u={exports:{}};u.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",l="day",c="week",s="month",u="quarter",d="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,s),a=n-i<0,o=e.clone().add(r+(a?-1:1),s);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:s,y:d,w:c,d:l,D:h,h:o,m:a,s:i,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",S={};S[v]=m;var D=function(t){return t instanceof B},F=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var a=e.toLowerCase();S[a]&&(i=a),n&&(S[a]=n,i=a);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var l=e.name;S[l]=e,i=l}return!r&&i&&(v=i),i||!r&&v},b=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new B(n)},w=$;w.l=F,w.i=D,w.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var B=function(){function m(t){this.$L=F(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return b(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<b(t)},y.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!w.u(e)||e,u=w.p(t),f=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(l)},g=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case s:return r?f(1,m):f(0,m+1);case c:var v=this.$locale().weekStart||0,S=(p<v?p+7:p)-v;return f(r?y-S:y+(6-S),m);case l:case h:return g($+"Hours",0);case o:return g($+"Minutes",1);case a:return g($+"Seconds",2);case i:return g($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,c=w.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[l]=u+"Date",n[h]=u+"Date",n[s]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[a]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],g=c===l?this.$D+(e-this.$W):e;if(c===s||c===d){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[w.p(t)]()},y.add=function(r,u){var h,f=this;r=Number(r);var g=w.p(u),p=function(t){var e=b(f);return w.w(e.date(e.date()+Math.round(t*r)),f)};if(g===s)return this.set(s,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===l)return p(1);if(g===c)return p(7);var m=(h={},h[a]=e,h[o]=n,h[i]=t,h)[g]||1,y=this.$d.getTime()+r*m;return w.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),a=this.$H,o=this.$m,l=this.$M,c=n.weekdays,s=n.months,u=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},d=function(t){return w.s(a%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:w.s(l+1,2,"0"),MMM:u(n.monthsShort,l,s,3),MMMM:u(s,l),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:w.s(a,2,"0"),h:d(1),hh:d(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=w.p(h),m=b(r),y=(m.utcOffset()-this.utcOffset())*e,$=this-m,v=w.m(this,m);return v=(g={},g[d]=v/12,g[s]=v,g[u]=v/3,g[c]=($-y)/6048e5,g[l]=($-y)/864e5,g[o]=$/n,g[a]=$/e,g[i]=$/t,g)[p]||$,f?v:w.a(v)},y.daysInMonth=function(){return this.endOf(s).$D},y.$locale=function(){return S[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=F(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),H=B.prototype;return b.prototype=H,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",l],["$M",s],["$y",d],["$D",h]].forEach((function(t){H[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,B,b),t.$i=!0),b},b.locale=F,b.isDayjs=D,b.unix=function(t){return b(1e3*t)},b.en=S[v],b.Ls=S,b.p={},b}();var d=u.exports;const h={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},f={D1:{fontFamily:h.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:h.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:h.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:h.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:h.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:h.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:h.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:h.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:h.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:h.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:h.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:h.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:h.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:h.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var g=Array.isArray,p="object"==typeof s&&s&&s.Object===Object&&s,m="object"==typeof self&&self&&self.Object===Object&&self,y=p||m||Function("return this")(),$=y.Symbol,v=$,S=Object.prototype,D=S.hasOwnProperty,F=S.toString,b=v?v.toStringTag:void 0;var w=function(t){var e=D.call(t,b),n=t[b];try{t[b]=void 0;var r=!0}catch(t){}var i=F.call(t);return r&&(e?t[b]=n:delete t[b]),i},B=Object.prototype.toString;var H=w,C=function(t){return B.call(t)},x=$?$.toStringTag:void 0;var _=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":x&&x in Object(t)?H(t):C(t)};var M=_,k=function(t){return null!=t&&"object"==typeof t};var O=function(t){return"symbol"==typeof t||k(t)&&"[object Symbol]"==M(t)},A=g,z=O,E=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j=/^\w*$/;var N=function(t,e){if(A(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!z(t))||(j.test(t)||!E.test(t)||null!=e&&t in Object(e))};var W=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},Y=_,L=W;var T,I=function(t){if(!L(t))return!1;var e=Y(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},V=y["__core-js_shared__"],P=(T=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var R=function(t){return!!P&&P in t},X=Function.prototype.toString;var Z=I,G=R,U=W,J=function(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""},q=/^\[object .+?Constructor\]$/,Q=Function.prototype,K=Object.prototype,tt=Q.toString,et=K.hasOwnProperty,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var rt=function(t){return!(!U(t)||G(t))&&(Z(t)?nt:q).test(J(t))},it=function(t,e){return null==t?void 0:t[e]};var at=function(t,e){var n=it(t,e);return rt(n)?n:void 0},ot=at(Object,"create"),lt=ot;var ct=function(){this.__data__=lt?lt(null):{},this.size=0};var st=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ut=ot,dt=Object.prototype.hasOwnProperty;var ht=function(t){var e=this.__data__;if(ut){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return dt.call(e,t)?e[t]:void 0},ft=ot,gt=Object.prototype.hasOwnProperty;var pt=ot;var mt=ct,yt=st,$t=ht,vt=function(t){var e=this.__data__;return ft?void 0!==e[t]:gt.call(e,t)},St=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=pt&&void 0===e?"__lodash_hash_undefined__":e,this};function Dt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Dt.prototype.clear=mt,Dt.prototype.delete=yt,Dt.prototype.get=$t,Dt.prototype.has=vt,Dt.prototype.set=St;var Ft=Dt;var bt=function(){this.__data__=[],this.size=0};var wt=function(t,e){return t===e||t!=t&&e!=e};var Bt=function(t,e){for(var n=t.length;n--;)if(wt(t[n][0],e))return n;return-1},Ht=Bt,Ct=Array.prototype.splice;var xt=Bt;var _t=Bt;var Mt=Bt;var kt=bt,Ot=function(t){var e=this.__data__,n=Ht(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ct.call(e,n,1),--this.size,!0)},At=function(t){var e=this.__data__,n=xt(e,t);return n<0?void 0:e[n][1]},zt=function(t){return _t(this.__data__,t)>-1},Et=function(t,e){var n=this.__data__,r=Mt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function jt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}jt.prototype.clear=kt,jt.prototype.delete=Ot,jt.prototype.get=At,jt.prototype.has=zt,jt.prototype.set=Et;var Nt=jt,Wt=at(y,"Map"),Yt=Ft,Lt=Nt,Tt=Wt;var It=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Vt=function(t,e){var n=t.__data__;return It(e)?n["string"==typeof e?"string":"hash"]:n.map},Pt=Vt;var Rt=Vt;var Xt=Vt;var Zt=Vt;var Gt=function(){this.size=0,this.__data__={hash:new Yt,map:new(Tt||Lt),string:new Yt}},Ut=function(t){var e=Pt(this,t).delete(t);return this.size-=e?1:0,e},Jt=function(t){return Rt(this,t).get(t)},qt=function(t){return Xt(this,t).has(t)},Qt=function(t,e){var n=Zt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Kt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Kt.prototype.clear=Gt,Kt.prototype.delete=Ut,Kt.prototype.get=Jt,Kt.prototype.has=qt,Kt.prototype.set=Qt;var te=Kt;function ee(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(ee.Cache||te),n}ee.Cache=te;var ne=ee;var re=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ie=/\\(\\)?/g,ae=function(t){var e=ne(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(re,(function(t,n,r,i){e.push(r?i.replace(ie,"$1"):n||t)})),e}));var oe=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},le=g,ce=O,se=$?$.prototype:void 0,ue=se?se.toString:void 0;var de=function t(e){if("string"==typeof e)return e;if(le(e))return oe(e,t)+"";if(ce(e))return ue?ue.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},he=de;var fe=g,ge=N,pe=ae,me=function(t){return null==t?"":he(t)};var ye=O;var $e=function(t,e){return fe(t)?t:ge(t,e)?[t]:pe(me(t))},ve=function(t){if("string"==typeof t||ye(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Se=function(t,e){for(var n=0,r=(e=$e(e,t)).length;null!=t&&n<r;)t=t[ve(e[n++])];return n&&n==r?t:void 0};var De=function(t,e,n){var r=null==t?void 0:Se(t,e);return void 0===r?n:r};const Fe=(t,e,n)=>e?De(n,e)||De(t,e):n||t,be=(t,e)=>{const n=e||t.defaultValue;return De(t.collections,n)};var we;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(we||(we={}));const Be={collections:{base:f},defaultValue:"base"},He=t=>e=>{const n=e.theme,r=be(Be,n[we.textStyleScheme]);return n.options&&n.options.textStyle?Fe(r,t,n.options.textStyle):Fe(r,t)},Ce={D1:{fontFamily:He("D1.fontFamily"),fontSize:He("D1.fontSize"),fontWeight:He("D1.fontWeight"),lineHeight:He("D1.lineHeight"),letterSpacing:He("D1.letterSpacing")},D2:{fontFamily:He("D2.fontFamily"),fontSize:He("D2.fontSize"),fontWeight:He("D2.fontWeight"),lineHeight:He("D2.lineHeight"),letterSpacing:He("D2.letterSpacing")},D3:{fontFamily:He("D3.fontFamily"),fontSize:He("D3.fontSize"),fontWeight:He("D3.fontWeight"),lineHeight:He("D3.lineHeight"),letterSpacing:He("D3.letterSpacing")},D4:{fontFamily:He("D4.fontFamily"),fontSize:He("D4.fontSize"),fontWeight:He("D4.fontWeight"),lineHeight:He("D4.lineHeight"),letterSpacing:He("D4.letterSpacing")},DBody:{fontFamily:He("DBody.fontFamily"),fontSize:He("DBody.fontSize"),fontWeight:He("DBody.fontWeight"),lineHeight:He("DBody.lineHeight"),letterSpacing:He("DBody.letterSpacing")},H1:{fontFamily:He("H1.fontFamily"),fontSize:He("H1.fontSize"),fontWeight:He("H1.fontWeight"),lineHeight:He("H1.lineHeight"),letterSpacing:He("H1.letterSpacing")},H2:{fontFamily:He("H2.fontFamily"),fontSize:He("H2.fontSize"),fontWeight:He("H2.fontWeight"),lineHeight:He("H2.lineHeight"),letterSpacing:He("H2.letterSpacing")},H3:{fontFamily:He("H3.fontFamily"),fontSize:He("H3.fontSize"),fontWeight:He("H3.fontWeight"),lineHeight:He("H3.lineHeight"),letterSpacing:He("H3.letterSpacing")},H4:{fontFamily:He("H4.fontFamily"),fontSize:He("H4.fontSize"),fontWeight:He("H4.fontWeight"),lineHeight:He("H4.lineHeight"),letterSpacing:He("H4.letterSpacing")},H5:{fontFamily:He("H5.fontFamily"),fontSize:He("H5.fontSize"),fontWeight:He("H5.fontWeight"),lineHeight:He("H5.lineHeight"),letterSpacing:He("H5.letterSpacing")},H6:{fontFamily:He("H6.fontFamily"),fontSize:He("H6.fontSize"),fontWeight:He("H6.fontWeight"),lineHeight:He("H6.lineHeight"),letterSpacing:He("H6.letterSpacing")},Body:{fontFamily:He("Body.fontFamily"),fontSize:He("Body.fontSize"),fontWeight:He("Body.fontWeight"),lineHeight:He("Body.lineHeight"),letterSpacing:He("Body.letterSpacing")},BodySmall:{fontFamily:He("BodySmall.fontFamily"),fontSize:He("BodySmall.fontSize"),fontWeight:He("BodySmall.fontWeight"),lineHeight:He("BodySmall.lineHeight"),letterSpacing:He("BodySmall.letterSpacing")},XSmall:{fontFamily:He("XSmall.fontFamily"),fontSize:He("XSmall.fontSize"),fontWeight:He("XSmall.fontWeight"),lineHeight:He("XSmall.lineHeight"),letterSpacing:He("XSmall.letterSpacing")}},xe=t=>{switch(t){case 700:case"bold":return h.Bold;case 600:case"semibold":return h.Semibold;case 300:case"light":return h.Light;case 400:case"regular":return h.Regular;default:return""}},_e=(t,e)=>n=>{const r=Ce[t].fontFamily(n),i=Ce[t].fontWeight(n);return Object.values(h).includes(r)?c`
                font-family: ${xe(e)||xe(i)||r};
                font-weight: normal !important;
            `:c`
            font-family: ${r};
            font-weight: ${(Me(e)||i)??"normal"};
        `},Me=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ke=(t,e,n=!1)=>r=>{const i=Ce[t],a=i.fontSize(r);return c`
            ${_e(t,e)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Oe=(t=!1,e=!1)=>e?c`
            display: block;
        `:t?c`
            display: inline;
        `:c`
            display: block;
        `;var Ae,ze={};Object.defineProperty(ze,"__esModule",{value:!0});var Ee=t;const je=t=>Ee.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Ee.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});je.displayName="ExternalIcon",Ae=ze.ExternalIcon=je;const Ne={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},We=t=>e=>{const n=e.theme,r=be(Ne,n[we.colorScheme]);return n.options&&n.options.color?Fe(r,t,n.options.color):Fe(r,t)},Ye={Brand:{1:We("Brand.1"),2:We("Brand.2"),3:We("Brand.3"),4:We("Brand.4"),5:We("Brand.5"),6:We("Brand.6")},Primary:We("Primary"),PrimaryDark:We("PrimaryDark"),Secondary:We("Secondary"),Accent:{Light:{1:We("Accent.Light.1"),2:We("Accent.Light.2"),3:We("Accent.Light.3"),4:We("Accent.Light.4"),5:We("Accent.Light.5"),6:We("Accent.Light.6")},Dark:{1:We("Accent.Dark.1"),2:We("Accent.Dark.2"),3:We("Accent.Dark.3")}},Neutral:{1:We("Neutral.1"),2:We("Neutral.2"),3:We("Neutral.3"),4:We("Neutral.4"),5:We("Neutral.5"),6:We("Neutral.6"),7:We("Neutral.7"),8:We("Neutral.8")},Validation:{Green:{Text:We("Validation.Green.Text"),Icon:We("Validation.Green.Icon"),Border:We("Validation.Green.Border"),Background:We("Validation.Green.Background")},Orange:{Text:We("Validation.Orange.Text"),Icon:We("Validation.Orange.Icon"),Border:We("Validation.Orange.Border"),Background:We("Validation.Orange.Background"),Badge:We("Validation.Orange.Badge")},Red:{Text:We("Validation.Red.Text"),Icon:We("Validation.Red.Icon"),Border:We("Validation.Red.Border"),Background:We("Validation.Red.Background")},Blue:{Text:We("Validation.Blue.Text"),Icon:We("Validation.Blue.Icon"),Border:We("Validation.Blue.Border"),Background:We("Validation.Blue.Background")}},Shadow:{Accent:We("Shadow.Accent"),Red:We("Shadow.Red"),Elevation:We("Shadow.Elevation")}};var Le;!function(t){t.D1=l.h1`
        ${t=>c`
                ${ke("D1",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.D2=l.h1`
        ${t=>c`
                ${ke("D2",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.D3=l.h1`
        ${t=>c`
                ${ke("D3",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.D4=l.h1`
        ${t=>c`
                ${ke("D4",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.DBody=l.h1`
        ${t=>c`
                ${ke("DBody",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.H1=l.h1`
        ${t=>c`
                ${ke("H1",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.H2=l.h2`
        ${t=>c`
                ${ke("H2",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.H3=l.h3`
        ${t=>c`
                ${ke("H3",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.H4=l.h4`
        ${t=>c`
                ${ke("H4",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.H5=l.h5`
        ${t=>c`
                ${ke("H5",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.H6=l.h6`
        ${t=>c`
                ${ke("H6",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.Body=l.p`
        ${t=>c`
                ${ke("Body",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=l.p`
        ${t=>c`
                ${ke("BodySmall",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.XSmall=l.span`
        ${t=>c`
                ${ke("XSmall",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ve({...t,textStyle:"Body"}),Small:t=>Ve({...t,textStyle:"BodySmall"})}}(Le||(Le={}));const Te=l.a`
    ${t=>c`
            ${ke(t.textStyle,t.weight)}
            color: ${Ye.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ye.Secondary};

                svg {
                    color: ${Ye.Secondary};
                }
            }
        `}
`,Ie=l(Ae)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ve=({external:t=!1,children:r,...i})=>e(Te,{...i,children:[r,t&&n(Ie,{})]});var Pe,Re;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Pe||(Pe={})),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=d(e).startOf("week");return Xe(n).map((t=>Ze(t)))},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(d(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+d(`${e+9}-01-01`).format("YYYY")}}}(Re||(Re={}));const Xe=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},Ze=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},Ge=l.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.5rem;
`,Ue=l.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.625rem;
`,Je=l.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
`,qe=l.div`
    position: absolute;
    width: 50%;
    height: 100%;
    ${t=>{switch(t.$position){case"left":return c`
                    left: 0;
                `;case"right":return c`
                    right: 0;
                `}}}
`,Qe=l.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    position: absolute;

    :hover {
        box-shadow: 0px 0px 4px 1px ${Ye.Shadow.Accent};
        border: 1px solid ${Ye.Accent.Light[1]};
    }

    ${t=>t.$disabled?c`
                color: ${Ye.Neutral[4](t)};
                cursor: not-allowed;
                pointer-events: none;
            `:t.$selected?c`
                background: ${Ye.Accent.Light[5](t)};
                border: 1px solid ${Ye.Primary(t)};
            `:"today"===t.$variant?c`
                    background: ${Ye.Accent.Light[5](t)};
                `:void 0}
`,Ke=l(Le.H5)`
    ${t=>{if(t.$disabled)return c`
                color: ${Ye.Neutral[4](t)};
            `;if(t.$selected)return c`
                color: ${Ye.Primary(t)};
            `;switch(t.$variant){case"other-month":return c`
                    color: ${Ye.Neutral[4](t)};
                `;case"today":return c`
                    color: ${Ye.Neutral[3](t)};
                `;case"default":return c`
                    color: ${Ye.Neutral[1](t)};
                `}}}
`,tn=({calendarDate:t,disabledDates:r,selectedStartDate:a,onSelect:o})=>{const l=i((()=>Re.generateDays(t)),[t]);return e(Ge,{children:[l[0].map(((t,e)=>n(Ue,{children:n(Le.H6,{weight:"semibold",children:d(t).format("ddd")})},`week-day-${e}`))),l.map((i=>i.map(((i,l)=>{const{isDisabled:c,variant:s}=(e=>{const n=e.format("YYYY-MM-DD");let i=!1;return r&&r.length&&(i=r.includes(n)),{isDisabled:i,variant:t.month()!==e.month()?"other-month":d().isSame(e,"day")?"today":"default"}})(i),u=i.format("YYYY-MM-DD");return e(Je,{children:[n(qe,{$position:"left"}),n(qe,{$position:"right"}),n(Qe,{$variant:s,$selected:a===u,$disabled:c,onClick:()=>{o(i)},children:n(Ke,{weight:a===u?"semibold":"regular",$variant:s,$disabled:c,$selected:a===u,children:i.format("D")})})]},`day-${l}`)}))))]})},en=l.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${t=>{switch(t.$type){case"standalone":return c`
                    gap: 0.5rem 2.5rem;
                `;case"input":return c`
                    gap: 0.5rem 2rem;
                `}}}
`,nn=l.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5rem;

    &:hover {
        box-shadow: 0px 0px 4px 1px ${Ye.Shadow.Accent};
        border: 1px solid ${Ye.Accent.Light[1]};
    }

    ${t=>{switch(t.$variant){case"current-month":return c`
                    background-color: ${Ye.Accent.Light[6](t)};
                `;case"selected-month":return c`
                    background-color: ${Ye.Accent.Light[5](t)};
                    border: 1px solid ${Ye.Primary(t)};
                `}}}
`,rn=l(Le.H5)`
    ${t=>{switch(t.$variant){case"current-month":return c`
                    color: ${Ye.Neutral[3](t)};
                `;case"selected-month":return c`
                    ${ke("H5","semibold")}
                    color: ${Ye.Primary(t)};
                `}}}
`,an=({calendarDate:t,selectedStartDate:e,type:r,onSelect:i})=>{const[l,c]=a([]);o((()=>{s()}),[t]);const s=()=>{const e=Re.generateMonths(t);c(e)};return l.length?n(en,{$type:r,children:l.map((t=>{const{variant:r,month:a}=(t=>{const n=t.format("MMMM"),r=t.format("YYYY-MM-DD");let i="default";return i=d(e).isSame(r,"month")?"selected-month":d().isSame(r,"month")?"current-month":"default",{month:n,variant:i}})(t);return n(nn,{onClick:()=>{i(t)},$variant:r,children:n(rn,{weight:"regular",$variant:r,children:a})},a)}))}):null},on=l.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 4rem);
    align-content: center;

    ${t=>{switch(t.$type){case"standalone":return c`
                    gap: 0.5rem 2rem;
                `;case"input":return c`
                    gap: 0.5rem 1rem;
                `}}}
`,ln=l.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 4px 1px ${Ye.Shadow.Accent};
        border: 1px solid ${Ye.Accent.Light[1]};
    }

    ${t=>{switch(t.$variant){case"current-year":return c`
                    background: ${Ye.Accent.Light[6](t)};
                `;case"selected-year":return c`
                    background: ${Ye.Accent.Light[5](t)};
                    border: 1px solid ${Ye.Primary(t)};
                `}}};
`,cn=l(Le.H5)`
    ${t=>{switch(t.$variant){case"current-year":return c`
                    color: ${Ye.Neutral[3](t)};
                `;case"selected-year":return c`
                    ${ke("H5","semibold")}
                    color: ${Ye.Primary(t)};
                `;case"other-decade":return c`
                    color: ${Ye.Neutral[4](t)};
                `}}}
`,sn=({calendarDate:t,selectedStartDate:e,type:r,onSelect:i})=>{const[l,c]=a([]);o((()=>{s()}),[t]);const s=()=>{const e=Re.generateDecadeOfYears(t);c(e)};return l.length?n(on,{$type:r,children:l.map((t=>{const{variant:r,year:a}=(t=>{const n=[0,11].includes(l.indexOf(t)),r=t.format("YYYY-MM-DD");return{year:t.year(),variant:n?"other-decade":d(e).isSame(r,"year")?"selected-year":d().isSame(r,"year")?"current-year":"default"}})(t);return n(ln,{$variant:r,onClick:()=>{i(t)},children:n(cn,{weight:"regular",$variant:r,children:a})},a)}))}):null};var un,dn={};Object.defineProperty(dn,"__esModule",{value:!0});var hn=t;const fn=t=>hn.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:hn.jsx("path",{d:"M12.521 17.562L5.58301 10.625C5.48635 10.5277 5.41701 10.427 5.37501 10.323C5.33301 10.219 5.31201 10.1113 5.31201 10C5.31201 9.88867 5.33301 9.781 5.37501 9.677C5.41701 9.573 5.48635 9.47234 5.58301 9.375L12.542 2.417C12.75 2.20834 13.0033 2.104 13.302 2.104C13.6007 2.104 13.854 2.21534 14.062 2.438C14.2847 2.646 14.389 2.90267 14.375 3.208C14.361 3.514 14.25 3.771 14.042 3.979L8.02101 10L14.062 16.042C14.2567 16.236 14.354 16.4893 14.354 16.802C14.354 17.1147 14.2567 17.368 14.062 17.562C13.854 17.7707 13.5973 17.875 13.292 17.875C12.986 17.875 12.729 17.7707 12.521 17.562Z",fill:"currentColor"})});fn.displayName="ChevronLeftIcon",un=dn.ChevronLeftIcon=fn;var gn,pn={};Object.defineProperty(pn,"__esModule",{value:!0});var mn=t;const yn=t=>mn.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:mn.jsx("path",{d:"M5.979 17.562C5.757 17.34 5.646 17.0833 5.646 16.792C5.646 16.5 5.757 16.243 5.979 16.021L12 10L5.958 3.958C5.75 3.75 5.646 3.5 5.646 3.208C5.646 2.91667 5.757 2.66 5.979 2.438C6.18766 2.22933 6.44133 2.125 6.74 2.125C7.03866 2.125 7.292 2.22933 7.5 2.438L14.438 9.375C14.5347 9.47233 14.604 9.573 14.646 9.677C14.6873 9.781 14.708 9.88867 14.708 10C14.708 10.1113 14.6873 10.219 14.646 10.323C14.604 10.427 14.5347 10.5277 14.438 10.625L7.479 17.583C7.257 17.8057 7.00366 17.91 6.719 17.896C6.43433 17.882 6.18766 17.7707 5.979 17.562Z",fill:"currentColor"})});yn.displayName="ChevronRightIcon",gn=pn.ChevronRightIcon=yn;var $n,vn={};Object.defineProperty(vn,"__esModule",{value:!0});var Sn=t;const Dn=t=>Sn.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Sn.jsx("path",{d:"M2.62611 5.81312C2.84811 5.59112 3.10478 5.48012 3.39611 5.48012C3.68811 5.48012 3.94511 5.59112 4.16711 5.81312L10.1881 11.8341L16.2301 5.79212C16.4381 5.58412 16.6881 5.48012 16.9801 5.48012C17.2714 5.48012 17.5281 5.59112 17.7501 5.81312C17.9588 6.02179 18.0631 6.27545 18.0631 6.57412C18.0631 6.87279 17.9588 7.12612 17.7501 7.33412L10.8131 14.2721C10.7158 14.3688 10.6151 14.4381 10.5111 14.4801C10.4071 14.5215 10.2994 14.5421 10.1881 14.5421C10.0768 14.5421 9.96911 14.5215 9.86511 14.4801C9.76111 14.4381 9.66044 14.3688 9.56311 14.2721L2.60511 7.31312C2.38244 7.09112 2.27811 6.83779 2.29211 6.55312C2.30611 6.26845 2.41744 6.02179 2.62611 5.81312Z",fill:"currentColor"})});Dn.displayName="ChevronDownIcon",$n=vn.ChevronDownIcon=Dn;const Fn=l.button`
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

    &:active,
    &:focus {
        ${({$outline:t})=>"none"===t&&"outline: none;"}

        ${({$highlight:t})=>t&&c`
                background-color: ${Ye.Neutral[7]};
            `}
    }
`,bn=r.forwardRef((({children:t,focusHighlight:e=!0,focusOutline:r="none",...i},a)=>n(Fn,{ref:a,$outline:r,$highlight:e,...i,children:t}))),wn=l.div`
    position: relative;
    display: flex;
    min-width: 28rem;
    width: 100%;
    max-width: 41rem;
    padding: 2rem 0.25rem;
    align-items: center;
    background: ${Ye.Neutral[8]};
    border: 1px solid ${Ye.Neutral[5]};
    border-radius: 12px;

    ${t=>{const{$type:e}=t;if("standalone"===e)return c`
                    ${On},
                    ${An} {
                        width: 1.5rem;
                        height: 1.5rem;
                    }

                    ${zn} {
                        width: 1.125rem;
                        height: 1.125rem;
                    }
                `}}
`,Bn=l.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,Hn=l.div`
    display: flex;
    flex: 1;
    position: relative;
`,Cn=l.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Ye.Neutral[8]};

    ${t=>{if(!t.$visible)return c`
                display: none;
            `}}
`,xn=l.div`
    display: flex;
    margin: 0 auto;
    margin-bottom: 1rem;
`,_n=l.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${t=>!1===t.$visible?c`
                display: none;
            `:t.$expandedDisplay?c`
                ${zn} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Mn=l(bn)`
    padding: 1rem;
    background: transparent;
    margin: auto 0;

    :focus,
    :active {
        background: transparent;
    }

    ${t=>"left"===t.$direction?c`
                    margin: auto 0.625rem auto 0; // to counter the padding
                `:c`
                    margin: auto 0 auto 0.625rem; // to counter the padding
                `}
`,kn=c`
    color: ${Ye.Neutral[3]};
`,On=l(un)`
    ${kn}
`,An=l(gn)`
    ${kn}
`,zn=l($n)`
    color: ${Ye.Neutral[3]};
    transition: transform 250ms ease-in-out;
    margin-left: 0.625rem;
`,En=({disabledDates:t,onSelect:r,value:i,type:l="standalone",...c})=>{const[s,u]=a(d()),[h,f]=a("default"),[g,p]=a("");o((()=>{i&&p(i)}),[i]);const m=t=>{const e=t.format("YYYY-MM-DD");u(t),p(e),y(e)},y=t=>{r&&r(t)};return e(wn,{$type:l,...c,children:[n(Mn,{$direction:"left",onClick:()=>{switch(h){case"default":u((t=>t.subtract(1,"month")));break;case"month-options":u((t=>t.subtract(1,"year")));break;case"year-options":u((t=>t.subtract(10,"year")))}},children:n(On,{})}),e(Bn,{children:[e(xn,{children:[e(_n,{type:"button",$expandedDisplay:"month-options"===h,$visible:"default"===h,id:"month-dropdown",onClick:()=>{f("month-options"!==h?"month-options":"default")},children:[n(Le.H4,{weight:"regular",children:d(s).format("MMM")}),n(zn,{})]}),e(_n,{type:"button",$expandedDisplay:"default"!==h,id:"year-dropdown",onClick:()=>{f("default"!==h?"default":"year-options")},children:[n(Le.H4,{weight:"regular",children:(()=>{if("year-options"===h){const{beginDecade:t,endDecade:e}=Re.getStartEndDecade(s);return`${t} to ${e}`}return d(s).format("YYYY")})()}),n(zn,{})]})]}),e(Hn,{children:[n(tn,{calendarDate:s,disabledDates:t,selectedStartDate:g,onSelect:m}),n(Cn,{$visible:"default"!==h,children:(()=>{switch(h){case"month-options":return n(an,{type:l,calendarDate:s,selectedStartDate:g,onSelect:m});case"year-options":return n(sn,{type:l,calendarDate:s,selectedStartDate:g,onSelect:m});default:return null}})()})]})]}),n(Mn,{$direction:"right",onClick:()=>{switch(h){case"default":u((t=>t.add(1,"month")));break;case"month-options":u((t=>t.add(1,"year")));break;case"year-options":u((t=>t.add(10,"year")))}},children:n(An,{})})]})};export{En as Calendar};
//# sourceMappingURL=index.js.map
