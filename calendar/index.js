import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n,{useMemo as a,useState as i,useRef as o,useImperativeHandle as s,useEffect as l}from"react";import c,{keyframes as d,css as u}from"styled-components";import{ChevronDownIcon as h}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as f}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as g}from"@lifesg/react-icons/chevron-right";import{ExternalIcon as p}from"@lifesg/react-icons/external";function m(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},D=Array.isArray,b="object"==typeof y&&y&&y.Object===Object&&y,$="object"==typeof self&&self&&self.Object===Object&&self,v=b||$||Function("return this")(),S=v.Symbol,F=S,w=Object.prototype,x=w.hasOwnProperty,B=w.toString,H=F?F.toStringTag:void 0;var O=function(e){var t=x.call(e,H),r=e[H];try{e[H]=void 0;var n=!0}catch(e){}var a=B.call(e);return n&&(t?e[H]=r:delete e[H]),a},A=Object.prototype.toString;var M=O,k=function(e){return A.call(e)},E=S?S.toStringTag:void 0;var L=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?M(e):k(e)};var Y=L,C=function(e){return null!=e&&"object"==typeof e};var T=function(e){return"symbol"==typeof e||C(e)&&"[object Symbol]"==Y(e)},j=D,z=T,N=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_=/^\w*$/;var W=function(e,t){if(j(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!z(e))||(_.test(e)||!N.test(e)||null!=t&&e in Object(t))};var R=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},I=L,P=R;var V,Z=function(e){if(!P(e))return!1;var t=I(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},U=v["__core-js_shared__"],X=(V=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var G=function(e){return!!X&&X in e},J=Function.prototype.toString;var q=Z,Q=G,K=R,ee=function(e){if(null!=e){try{return J.call(e)}catch(e){}try{return e+""}catch(e){}}return""},te=/^\[object .+?Constructor\]$/,re=Function.prototype,ne=Object.prototype,ae=re.toString,ie=ne.hasOwnProperty,oe=RegExp("^"+ae.call(ie).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var se=function(e){return!(!K(e)||Q(e))&&(q(e)?oe:te).test(ee(e))},le=function(e,t){return null==e?void 0:e[t]};var ce=function(e,t){var r=le(e,t);return se(r)?r:void 0},de=ce(Object,"create"),ue=de;var he=function(){this.__data__=ue?ue(null):{},this.size=0};var fe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ge=de,pe=Object.prototype.hasOwnProperty;var me=function(e){var t=this.__data__;if(ge){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return pe.call(t,e)?t[e]:void 0},ye=de,De=Object.prototype.hasOwnProperty;var be=de;var $e=he,ve=fe,Se=me,Fe=function(e){var t=this.__data__;return ye?void 0!==t[e]:De.call(t,e)},we=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=be&&void 0===t?"__lodash_hash_undefined__":t,this};function xe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}xe.prototype.clear=$e,xe.prototype.delete=ve,xe.prototype.get=Se,xe.prototype.has=Fe,xe.prototype.set=we;var Be=xe;var He=function(){this.__data__=[],this.size=0};var Oe=function(e,t){return e===t||e!=e&&t!=t};var Ae=function(e,t){for(var r=e.length;r--;)if(Oe(e[r][0],t))return r;return-1},Me=Ae,ke=Array.prototype.splice;var Ee=Ae;var Le=Ae;var Ye=Ae;var Ce=He,Te=function(e){var t=this.__data__,r=Me(t,e);return!(r<0)&&(r==t.length-1?t.pop():ke.call(t,r,1),--this.size,!0)},je=function(e){var t=this.__data__,r=Ee(t,e);return r<0?void 0:t[r][1]},ze=function(e){return Le(this.__data__,e)>-1},Ne=function(e,t){var r=this.__data__,n=Ye(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function _e(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}_e.prototype.clear=Ce,_e.prototype.delete=Te,_e.prototype.get=je,_e.prototype.has=ze,_e.prototype.set=Ne;var We=_e,Re=ce(v,"Map"),Ie=Be,Pe=We,Ve=Re;var Ze=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ue=function(e,t){var r=e.__data__;return Ze(t)?r["string"==typeof t?"string":"hash"]:r.map},Xe=Ue;var Ge=Ue;var Je=Ue;var qe=Ue;var Qe=function(){this.size=0,this.__data__={hash:new Ie,map:new(Ve||Pe),string:new Ie}},Ke=function(e){var t=Xe(this,e).delete(e);return this.size-=t?1:0,t},et=function(e){return Ge(this,e).get(e)},tt=function(e){return Je(this,e).has(e)},rt=function(e,t){var r=qe(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function nt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}nt.prototype.clear=Qe,nt.prototype.delete=Ke,nt.prototype.get=et,nt.prototype.has=tt,nt.prototype.set=rt;var at=nt;function it(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(it.Cache||at),r}it.Cache=at;var ot=it;var st=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,lt=/\\(\\)?/g,ct=function(e){var t=ot(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(st,(function(e,r,n,a){t.push(n?a.replace(lt,"$1"):r||e)})),t}));var dt=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},ut=D,ht=T,ft=S?S.prototype:void 0,gt=ft?ft.toString:void 0;var pt=function e(t){if("string"==typeof t)return t;if(ut(t))return dt(t,e)+"";if(ht(t))return gt?gt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},mt=pt;var yt=D,Dt=W,bt=ct,$t=function(e){return null==e?"":mt(e)};var vt=T;var St=function(e,t){return yt(e)?e:Dt(e,t)?[e]:bt($t(e))},Ft=function(e){if("string"==typeof e||vt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var wt=function(e,t){for(var r=0,n=(t=St(t,e)).length;null!=e&&r<n;)e=e[Ft(t[r++])];return r&&r==n?e:void 0};var xt=function(e,t,r){var n=null==e?void 0:wt(e,t);return void 0===n?r:n};const Bt=(e,t,r)=>t?xt(r,t)||xt(e,t):r||e,Ht=(e,t)=>{const r=t||e.defaultValue;return xt(e.collections,r)};var Ot;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ot||(Ot={}));const At={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Mt=e=>t=>{const r=t.theme,n=Ht(At,r[Ot.colorScheme]);return r.options&&r.options.color?Bt(n,e,r.options.color):Bt(n,e)},kt={Brand:{1:Mt("Brand.1"),2:Mt("Brand.2"),3:Mt("Brand.3"),4:Mt("Brand.4"),5:Mt("Brand.5"),6:Mt("Brand.6")},Primary:Mt("Primary"),PrimaryDark:Mt("PrimaryDark"),Secondary:Mt("Secondary"),Accent:{Light:{1:Mt("Accent.Light.1"),2:Mt("Accent.Light.2"),3:Mt("Accent.Light.3"),4:Mt("Accent.Light.4"),5:Mt("Accent.Light.5"),6:Mt("Accent.Light.6")},Dark:{1:Mt("Accent.Dark.1"),2:Mt("Accent.Dark.2"),3:Mt("Accent.Dark.3")}},Neutral:{1:Mt("Neutral.1"),2:Mt("Neutral.2"),3:Mt("Neutral.3"),4:Mt("Neutral.4"),5:Mt("Neutral.5"),6:Mt("Neutral.6"),7:Mt("Neutral.7"),8:Mt("Neutral.8")},Validation:{Green:{Text:Mt("Validation.Green.Text"),Icon:Mt("Validation.Green.Icon"),Border:Mt("Validation.Green.Border"),Background:Mt("Validation.Green.Background")},Orange:{Text:Mt("Validation.Orange.Text"),Icon:Mt("Validation.Orange.Icon"),Border:Mt("Validation.Orange.Border"),Background:Mt("Validation.Orange.Background"),Badge:Mt("Validation.Orange.Badge")},Red:{Text:Mt("Validation.Red.Text"),Icon:Mt("Validation.Red.Icon"),Border:Mt("Validation.Red.Border"),Background:Mt("Validation.Red.Background")},Blue:{Text:Mt("Validation.Blue.Text"),Icon:Mt("Validation.Blue.Icon"),Border:Mt("Validation.Blue.Border"),Background:Mt("Validation.Blue.Background")}},Shadow:{Accent:Mt("Shadow.Accent"),Red:Mt("Shadow.Red"),Elevation:Mt("Shadow.Elevation")}};var Et={exports:{}};Et.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},D={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),a=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(n,c),i=r-a<0,o=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",$={};$[b]=m;var v=function(e){return e instanceof x},S=function e(t,r,n){var a;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();$[i]&&(a=i),r&&($[i]=r,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;$[s]=t,a=s}return!n&&a&&(b=a),a||!n&&b},F=function(e,t){if(v(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new x(r)},w=D;w.l=S,w.i=v,w.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=F(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return F(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<F(e)},y.$g=function(e,t,r){return w.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!w.u(t)||t,d=w.p(e),f=function(e,t){var a=w.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?a:a.endOf(s)},g=function(e,t){return w.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,y=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case u:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,$=(p<b?p+7:p)-b;return f(n?y-$:y+(6-$),m);case s:case h:return g(D+"Hours",0);case o:return g(D+"Minutes",1);case i:return g(D+"Seconds",2);case a:return g(D+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=w.p(e),d="set"+(this.$u?"UTC":""),f=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[i]=d+"Minutes",r[a]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],g=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[w.p(e)]()},y.add=function(n,d){var h,f=this;n=Number(n);var g=w.p(d),p=function(e){var t=F(f);return w.w(t.date(t.date()+Math.round(e*n)),f)};if(g===c)return this.set(c,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[i]=t,h[o]=r,h[a]=e,h)[g]||1,y=this.$d.getTime()+n*m;return w.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=w.z(this),i=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=function(e,r,a,i){return e&&(e[r]||e(t,n))||a[r].slice(0,i)},u=function(e){return w.s(i%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:w.s(s+1,2,"0"),MMM:d(r.monthsShort,s,c,3),MMMM:d(c,s),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,l,2),ddd:d(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:w.s(i,2,"0"),h:u(1),hh:u(2),a:h(i,o,!0),A:h(i,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:a};return n.replace(p,(function(e,t){return t||g[e]||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var g,p=w.p(h),m=F(n),y=(m.utcOffset()-this.utcOffset())*t,D=this-m,b=w.m(this,m);return b=(g={},g[u]=b/12,g[c]=b,g[d]=b/3,g[l]=(D-y)/6048e5,g[s]=(D-y)/864e5,g[o]=D/r,g[i]=D/t,g[a]=D/e,g)[p]||D,f?b:w.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),B=x.prototype;return F.prototype=B,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,x,F),e.$i=!0),F},F.locale=S,F.isDayjs=v,F.unix=function(e){return F(1e3*e)},F.en=$[b],F.Ls=$,F.p={},F}();var Lt=Et.exports,Yt={exports:{}};Yt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,t))>-1){r=a>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[a,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[a,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,a;n=r,a=i&&i.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],f=d&&d[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var a=o[r];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,c=e.slice(n),d=i.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,a=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,f=new Date,g=o||(a||i?1:f.getDate()),p=a||f.getFullYear(),m=0;a&&!i||(m=i>0?i-1:f.getMonth());var y=s||0,D=l||0,b=c||0,$=d||0;return u?new Date(Date.UTC(p,m,g,y,D,b,$+60*u.offset*1e3)):r?new Date(Date.UTC(p,m,g,y,D,b,$)):new Date(p,m,g,y,D,b,$)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){o[1]=s[g-1];var p=r.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Ct,Tt,jt=Yt.exports,zt={exports:{}},Nt=zt.exports=(Ct={year:0,month:1,day:2,hour:3,minute:4,second:5},Tt={},function(e,t,r){var n,a=function(e,t,r){void 0===r&&(r={});var n=new Date(e),a=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,a=Tt[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Tt[n]=a),a}(t,r);return a.formatToParts(n)},i=function(e,t){for(var n=a(e,t),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,d=Ct[l];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(r.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=r(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(a-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,a){var o=a&&t,s=a||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,a=i(n,r);if(t===a)return[n,t];var o=i(n-=60*(a-t)*1e3,r);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(r.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}),_t={exports:{}};_t.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,a){var i=r(e),o=r(t),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Wt=_t.exports,Rt={exports:{}};Rt.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var It=Rt.exports,Pt={exports:{}};Pt.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Vt,Zt=Pt.exports;Lt.extend(Wt),Lt.extend(It),Lt.extend(Zt),Lt.extend(jt),Lt.extend(Nt),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Lt(t).startOf("week");return Ut(r).map((e=>Xt(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Xt(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Lt(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Lt(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Lt(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,a)=>{const i=e.isWithinRange(t,n?Lt(n):void 0,a?Lt(a):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!o}}(Vt||(Vt={}));const Ut=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Xt=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Gt=[1,3,5,7,8,10,12],Jt=[4,6,9,11];var qt,Qt,Kt,er;!function(e){e.clampDay=(t,r,n)=>{const a=parseInt(t),i=parseInt(r),o=parseInt(n);return 0==a?"1":Gt.includes(i)?Math.min(a,31).toString():Jt.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Lt(e,r);return Lt(t,r).diff(n,"minute")},e.toDayjs=e=>e?Lt(e):Lt()}(qt||(qt={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:a}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!Lt(e).isBefore(n,"day"))||!(!a||!Lt(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(Lt(e).isValid())return e}return""}}(Qt||(Qt={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Kt||(Kt={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,a=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/a));const o=n+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width}}(er||(er={}));const tr={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},rr=e=>Object.keys(tr).reduce(((t,r)=>{const n=tr[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),nr=rr("max-width"),ar=(rr("min-width"),c.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),ir=d`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,or=c.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||kt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ir} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,sr=c(or)`
    animation-delay: -0.45s;
`,lr=c(or)`
    animation-delay: -0.3s;
`,cr=c(or)`
    animation-delay: -0.15s;
`,dr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ur={collections:{base:{D1:{fontFamily:dr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:dr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:dr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:dr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:dr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:dr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:dr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:dr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:dr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:dr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:dr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:dr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:dr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:dr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},hr=e=>t=>{const r=t.theme,n=Ht(ur,r[Ot.textStyleScheme]);return r.options&&r.options.textStyle?Bt(n,e,r.options.textStyle):Bt(n,e)},fr={D1:{fontFamily:hr("D1.fontFamily"),fontSize:hr("D1.fontSize"),fontWeight:hr("D1.fontWeight"),lineHeight:hr("D1.lineHeight"),letterSpacing:hr("D1.letterSpacing")},D2:{fontFamily:hr("D2.fontFamily"),fontSize:hr("D2.fontSize"),fontWeight:hr("D2.fontWeight"),lineHeight:hr("D2.lineHeight"),letterSpacing:hr("D2.letterSpacing")},D3:{fontFamily:hr("D3.fontFamily"),fontSize:hr("D3.fontSize"),fontWeight:hr("D3.fontWeight"),lineHeight:hr("D3.lineHeight"),letterSpacing:hr("D3.letterSpacing")},D4:{fontFamily:hr("D4.fontFamily"),fontSize:hr("D4.fontSize"),fontWeight:hr("D4.fontWeight"),lineHeight:hr("D4.lineHeight"),letterSpacing:hr("D4.letterSpacing")},DBody:{fontFamily:hr("DBody.fontFamily"),fontSize:hr("DBody.fontSize"),fontWeight:hr("DBody.fontWeight"),lineHeight:hr("DBody.lineHeight"),letterSpacing:hr("DBody.letterSpacing")},H1:{fontFamily:hr("H1.fontFamily"),fontSize:hr("H1.fontSize"),fontWeight:hr("H1.fontWeight"),lineHeight:hr("H1.lineHeight"),letterSpacing:hr("H1.letterSpacing")},H2:{fontFamily:hr("H2.fontFamily"),fontSize:hr("H2.fontSize"),fontWeight:hr("H2.fontWeight"),lineHeight:hr("H2.lineHeight"),letterSpacing:hr("H2.letterSpacing")},H3:{fontFamily:hr("H3.fontFamily"),fontSize:hr("H3.fontSize"),fontWeight:hr("H3.fontWeight"),lineHeight:hr("H3.lineHeight"),letterSpacing:hr("H3.letterSpacing")},H4:{fontFamily:hr("H4.fontFamily"),fontSize:hr("H4.fontSize"),fontWeight:hr("H4.fontWeight"),lineHeight:hr("H4.lineHeight"),letterSpacing:hr("H4.letterSpacing")},H5:{fontFamily:hr("H5.fontFamily"),fontSize:hr("H5.fontSize"),fontWeight:hr("H5.fontWeight"),lineHeight:hr("H5.lineHeight"),letterSpacing:hr("H5.letterSpacing")},H6:{fontFamily:hr("H6.fontFamily"),fontSize:hr("H6.fontSize"),fontWeight:hr("H6.fontWeight"),lineHeight:hr("H6.lineHeight"),letterSpacing:hr("H6.letterSpacing")},Body:{fontFamily:hr("Body.fontFamily"),fontSize:hr("Body.fontSize"),fontWeight:hr("Body.fontWeight"),lineHeight:hr("Body.lineHeight"),letterSpacing:hr("Body.letterSpacing")},BodySmall:{fontFamily:hr("BodySmall.fontFamily"),fontSize:hr("BodySmall.fontSize"),fontWeight:hr("BodySmall.fontWeight"),lineHeight:hr("BodySmall.lineHeight"),letterSpacing:hr("BodySmall.letterSpacing")},XSmall:{fontFamily:hr("XSmall.fontFamily"),fontSize:hr("XSmall.fontSize"),fontWeight:hr("XSmall.fontWeight"),lineHeight:hr("XSmall.lineHeight"),letterSpacing:hr("XSmall.letterSpacing")}},gr=e=>{switch(e){case 700:case"bold":return dr.Bold;case 600:case"semibold":return dr.Semibold;case 300:case"light":return dr.Light;case 400:case"regular":return dr.Regular;default:return""}},pr=(e,t)=>r=>{var n;const a=fr[e].fontFamily(r),i=fr[e].fontWeight(r);return Object.values(dr).includes(a)?u`
                font-family: ${gr(t)||gr(i)||a};
                font-weight: normal !important;
            `:u`
            font-family: ${a};
            font-weight: ${null!==(n=mr(t)||i)&&void 0!==n?n:"normal"};
        `},mr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},yr=e=>{if(e>0)return u`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Dr=(e,t,r=!1)=>n=>{const a=fr[e],i=a.fontSize(n);return u`
            ${pr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${u`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},br=(e=!1,t=!1,r=void 0)=>t?u`
            display: block;
            ${yr(r)}
        `:e?u`
            display: inline;
        `:u`
            display: block;
            ${yr(r)}
        `;var $r;!function(e){e.D1=c.h1`
        ${e=>u`
                ${Dr("D1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=c.h1`
        ${e=>u`
                ${Dr("D2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=c.h1`
        ${e=>u`
                ${Dr("D3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=c.h1`
        ${e=>u`
                ${Dr("D4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=c.h1`
        ${e=>u`
                ${Dr("DBody",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=c.h1`
        ${e=>u`
                ${Dr("H1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=c.h2`
        ${e=>u`
                ${Dr("H2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=c.h3`
        ${e=>u`
                ${Dr("H3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=c.h4`
        ${e=>u`
                ${Dr("H4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=c.h5`
        ${e=>u`
                ${Dr("H5",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=c.h6`
        ${e=>u`
                ${Dr("H6",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=c.p`
        ${e=>u`
                ${Dr("Body",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=c.p`
        ${e=>u`
                ${Dr("BodySmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=c.span`
        ${e=>u`
                ${Dr("XSmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Fr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Fr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}($r||($r={}));const vr=c.a`
    ${e=>u`
            ${Dr(e.textStyle,e.weight)}
            color: ${kt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${kt.Secondary};

                svg {
                    color: ${kt.Secondary};
                }
            }
        `}
`,Sr=c(p)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Fr=r=>{var{external:n=!1,children:a}=r,i=m(r,["external","children"]);return e(vr,Object.assign({},i,{children:[a,n&&t(Sr,{})]}))};var wr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(wr||(wr={}));const xr={collections:{base:{InputBoxShadow:u`
        inset 0 0 4px 0px ${kt.Shadow.Accent}
    `,InputErrorBoxShadow:u`
        inset 0 0 4px 0px ${kt.Shadow.Red}
    `,ElevationBoxShadow:u`
      0px 2px 8px ${kt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:u`
        inset 0 0 3px 0px ${kt.Shadow.Accent}
    `,InputErrorBoxShadow:u`
        inset 0 0 3px 0px ${kt.Shadow.Red}
    `,ElevationBoxShadow:u`
      0px 2px 8px ${kt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Br=e=>t=>{var r;const n=t.theme,a=Ht(xr,n[Ot.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Bt(a,e,n.options.designToken):Bt(a,e)},Hr={InputBoxShadow:Br("InputBoxShadow"),InputErrorBoxShadow:Br("InputErrorBoxShadow"),ElevationBoxShadow:Br("ElevationBoxShadow"),Table:{Header:Br("Table.Header"),Cell:{Primary:Br("Table.Cell.Primary"),Secondary:Br("Table.Cell.Secondary"),Selected:Br("Table.Cell.Selected"),Hover:Br("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Br("Button.Danger.BackgroundColor"),Hover:Br("Button.Danger.Hover"),Primary:Br("Button.Danger.Primary"),Border:Br("Button.Danger.Border")}}},Or=c.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return u`
                    background-color: ${kt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Hr.Button.Danger.Border:kt.Primary};

                    span {
                        color: ${e.$buttonIsDanger?Hr.Button.Danger.Primary:kt.Primary};
                    }
                `;case"light":return u`
                    background-color: ${kt.Neutral[8]};
                    border: 1px solid ${kt.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?Hr.Button.Danger.Primary:kt.Primary};
                    }
                `;case"disabled":return u`
                    background-color: ${kt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${kt.Neutral[3]};
                    }
                `;case"link":return u`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Hr.Button.Danger.Primary:kt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?Hr.Button.Danger.Hover:kt.Secondary};
                        }
                    }
                `;default:return u`
                    background-color: ${e.$buttonIsDanger?Hr.Button.Danger.BackgroundColor:kt.Primary};
                    border: 1px solid transparent;

                    ${nr.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${kt.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?u`
                    height: 2.5rem;
                    span {
                        ${Dr("H5","semibold")}
                    }

                    ${nr.mobileS} {
                        height: auto;
                    }
                `:u`
                    height: 3rem;
                    span {
                        ${Dr("H4","semibold")}
                    }

                    ${nr.mobileS} {
                        height: auto;
                    }
                `}
`,Ar=c((({color:r,className:n,size:a=18})=>e(ar,Object.assign({className:n,$size:a,$color:r},{children:[t(or,{id:"inner1",$size:a-2,$borderWidth:2}),t(sr,{id:"inner2",$size:a-2,$borderWidth:2}),t(lr,{id:"inner3",$size:a-2,$borderWidth:2}),t(cr,{id:"inner4",$size:a-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Hr.Button.Danger.Primary:kt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=kt.Neutral[3](e);break;default:t=kt.Neutral[8](e)}return u`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Mr={Default:n.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,c=m(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Or,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(Ar,Object.assign({},d)),t("span",{children:a})]}))})),Small:n.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,c=m(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Or,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(Ar,Object.assign({},d,{size:16})),t("span",{children:a})]}))}))},kr=c.button`
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

        ${({$highlight:e})=>e&&u`
                background-color: ${kt.Neutral[7]};
            `}
    }
`,Er=n.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=m(e,["children","focusHighlight","focusOutline","type"]);return t(kr,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),Lr=u`
    color: ${kt.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Yr=c(f)`
    ${Lr}
`,Cr=c(g)`
    ${Lr}
`,Tr=c(h)`
    ${Lr}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,jr=c.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,zr=c.div`
    display: flex;
    flex: 1;
    position: relative;
`,Nr=c.div`
    isolation: isolate;
    width: 100%;
`,_r=c.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${kt.Neutral[8]};

    ${e=>{if(!e.$visible)return u`
                display: none;
            `}}
`,Wr=c.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Rr=c.div`
    display: flex;
`,Ir=c.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?u`
                display: none;
            `:e.$expanded?u`
                ${Tr} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Pr=c.p`
    ${Dr("H5","regular")}
`,Vr=c.div`
    display: flex;
`,Zr=c(Er)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Ur=c.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Xr=c(Mr.Small)`
    flex: 1;
`,Gr=c.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return u`
                    gap: 0.5rem 2.5rem;
                `;case"input":return u`
                    gap: 0.5rem 1rem;
                `}}}
`,Jr=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?u`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${kt.Shadow.Accent};
                    border: 1px solid ${kt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?u`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return u`
                    background-color: ${kt.Accent.Light[6](e)};
                `;case"selected-month":return u`
                    background-color: ${kt.Accent.Light[5](e)};
                    border: 1px solid ${kt.Primary(e)};
                `}}}
`,qr=c($r.H5)`
    ${e=>{if(e.$disabledDisplay)return u`
                color: ${kt.Neutral[4]};
            `;switch(e.$variant){case"current-month":return u`
                    color: ${kt.Neutral[3](e)};
                `;case"selected-month":return u`
                    ${Dr("H5","semibold")}
                    color: ${kt.Primary(e)};
                `}}}
`,Qr=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onMonthSelect:h})=>{const f=a((()=>Vt.generateMonths(Lt(e))),[e]),g=e=>{const t="start"===r&&i&&e.isAfter(i,"month")&&l,a="end"===r&&n&&e.isBefore(n,"month")&&l;return t||a},p=e=>{const t=e.format("MMMM"),r=(n=e,!Vt.isWithinRange(n,c?Lt(c):void 0,d?Lt(d):void 0,"month"));var n;const a=o.isSame(e,"month")?"selected-month":Lt().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||g(e),interactive:!r||u,month:t,variant:a}};return f.length?t(Gr,Object.assign({$type:s},{children:f.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,month:i}=p(e);return t(Jr,Object.assign({$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||h(e)})(e,!n)},{children:t(qr,Object.assign({weight:"regular",$variant:a,$disabledDisplay:r},{children:i}))}),i)}))})):null},Kr=c.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return u`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return u`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,en=c.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?u`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${kt.Shadow.Accent};
                    border: 1px solid ${kt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?u`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return u`
                    background: ${kt.Accent.Light[6](e)};
                `;case"selected-year":return u`
                    background: ${kt.Accent.Light[5](e)};
                    border: 1px solid ${kt.Primary(e)};
                `}}};
`,tn=c($r.H5)`
    ${e=>{if(e.$disabledDisplay)return u`
                color: ${kt.Neutral[4]};
            `;switch(e.$variant){case"current-year":return u`
                    color: ${kt.Neutral[3](e)};
                `;case"selected-year":return u`
                    ${Dr("H5","semibold")}
                    color: ${kt.Primary(e)};
                `;case"other-decade":return u`
                    color: ${kt.Neutral[4](e)};
                `}}}
`,rn=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onYearSelect:h})=>{const f=a((()=>Vt.generateDecadeOfYears(Lt(e))),[e]),g=e=>{const t="start"===r&&i&&e.isAfter(i,"year")&&l,a="end"===r&&n&&e.isBefore(n,"year")&&l;return t||a},p=e=>{const t=[0,11].includes(f.indexOf(e)),r=e.year(),n=(a=e,!Vt.isWithinRange(a,c?Lt(c):void 0,d?Lt(d):void 0,"year"));var a;const i=t?"other-decade":o.isSame(e,"year")?"selected-year":Lt().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||g(e),interactive:!n||u,year:r,variant:i}};return f.length?t(Kr,Object.assign({$type:s},{children:f.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,year:i}=p(e);return t(en,Object.assign({$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||h(e)})(e,!n)},{children:t(tn,Object.assign({weight:"regular",$variant:a,$disabledDisplay:r,$interactive:n},{children:i}))}),i)}))})):null},nn=n.forwardRef(((n,a)=>{var{children:c,initialCalendarDate:d,type:u,minDate:h,maxDate:f,currentFocus:g,selectedStartDate:p,selectedEndDate:y,selectWithinRange:D,dynamicHeight:b=!1,allowDisabledSelection:$,onCalendarDateChange:v,withButton:S,doneButtonDisabled:F,onDismiss:w,showNavigationHeader:x=!0,getLeftArrowDate:B,getRightArrowDate:H,isLeftArrowDisabled:O,isRightArrowDisabled:A,getMonthHeaderLabel:M,getYearHeaderLabel:k}=n,E=m(n,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[L,Y]=i(qt.toDayjs(d)),[C,T]=i(qt.toDayjs(d)),[j,z]=i("default"),N=o(null),_=o(null),W=o();s(a,(()=>({defaultView(){z("default")},resetView(){const e=qt.toDayjs(d);Y(e),T(e),z("default")},setCalendarDate(e){const t=qt.toDayjs(e);Y(t),T(t)}}))),l((()=>{const e=qt.toDayjs(d);Y(e),T(e)}),[d]),l((()=>{X(C)}),[C]);const R=()=>{"month-options"!==j?(z("month-options"),W.current.focus()):(z("default"),Y(C))},I=()=>{"default"!==j?(z("default"),Y(C)):z("year-options")},P=()=>{W.current.focus();const e=B?B(L):L.subtract(1,"month");switch(j){case"default":T(e),Y(e);break;case"month-options":Y((e=>e.subtract(1,"year")));break;case"year-options":Y((e=>e.subtract(10,"year")))}},V=()=>{W.current.focus();const e=H?H(L):L.add(1,"month");switch(j){case"default":T(e),Y(e);break;case"month-options":Y((e=>e.add(1,"year")));break;case"year-options":Y((e=>e.add(10,"year")))}},Z=e=>{Y(e),T(e),S||z("default")},U=()=>{const e=qt.toDayjs(d);Y(e),T(e),"default"===j?G("reset"):z("default")},X=e=>{v&&v(e)},G=e=>{w&&w(e)},J=()=>{if(!h||$)return!1;const e=Lt(h);return"month-options"===j?!Vt.isPreviousYearWithinRange(L,e):"year-options"===j?!Vt.isPreviousDecadeWithinRange(L,e):O?O(L):!Vt.isPreviousMonthWithinRange(L,e)},q=()=>{if(!f||$)return!1;const e=Lt(f);return"month-options"===j?!Vt.isNextYearWithinRange(L,e):"year-options"===j?!Vt.isNextDecadeWithinRange(L,e):A?A(L):!Vt.isNextMonthWithinRange(L,e)},Q=()=>{if("year-options"===j){const{beginDecade:e,endDecade:t}=Vt.getStartEndDecade(L);return`${e} to ${t}`}return k?k(L):L.format("YYYY")},K=()=>{const n=M?M(L):L.format("MMM");return e(r,{children:[e(Ir,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:R},{children:[t(Pr,{children:n}),t(Tr,{})]})),e(Ir,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==j,id:"year-dropdown",onClick:I},{children:[t(Pr,{children:Q()}),t(Tr,{})]}))]})},ee=()=>{switch(j){case"month-options":return t(Qr,{type:u,calendarDate:L,currentFocus:g,minDate:h,maxDate:f,selectedStartDate:p,selectedEndDate:y,viewCalendarDate:C,isNewSelection:D,onMonthSelect:Z,allowDisabledSelection:$});case"year-options":return t(rn,{type:u,calendarDate:L,currentFocus:g,minDate:h,maxDate:f,selectedStartDate:p,selectedEndDate:y,viewCalendarDate:C,isNewSelection:D,onYearSelect:Z,allowDisabledSelection:$});default:return null}};return e(jr,Object.assign({ref:W,tabIndex:-1,"data-id":"calendar-container","data-testid":"calendar-container"},E,{children:[x&&e(Wr,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Rr,{children:K()}),e(Vr,{children:[t(Zr,Object.assign({"data-testid":"left-arrow-btn",disabled:J(),focusHighlight:!1,tabIndex:-1,onClick:P},{children:t(Yr,{})})),t(Zr,Object.assign({"data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(Cr,{})}))]})]})),t(zr,{children:(()=>{const n="function"==typeof c?c({calendarDate:C,currentView:j}):c;return e(r,b?{children:["default"===j&&n,ee()]}:{children:[t(Nr,{children:n}),t(_r,Object.assign({$visible:"default"!==j},{children:ee()}))]})})()}),(()=>{if(!S)return;const r=!!("default"===j)&&F;return e(Ur,{children:[t(Xr,Object.assign({ref:_,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U},{children:"Cancel"})),t(Xr,Object.assign({"data-testid":"done-button",ref:N,type:"button",onClick:()=>{r||(Y(C),"default"===j?G("confirmed"):z("default"))},disabled:r},{children:"Done"}))]})})()]}))})),an=c.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,on=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,sn=c.div`
    grid-column: 1 / -1;
    display: flex;
`;c.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const ln=c.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return u`
                    left: 0;
                `;case"right":return u`
                    right: 0;
                `}}}
`,cn=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;c($r.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:r,$variant:n}=e;if(t&&r)return u`
                ${Dr("H5","semibold")};
                color: ${kt.Accent.Light[2]};
            `;if(t)return u`
                color: ${kt.Neutral[4]};
            `;if(r)return u`
                ${Dr("H5","semibold")};
                color: ${kt.Primary};
            `;switch(n){case"other-month":return u`
                    color: ${kt.Neutral[4]};
                `;case"today":return u`
                    color: ${kt.Neutral[3]};
                `;case"default":return u`
                    color: ${kt.Neutral[1]};
                `}}}
`,c(ln)`
    ${e=>{const{$selected:t}=e;if(t)return u`
                border-top: 1px solid ${kt.Accent.Light[4]};
                border-bottom: 1px solid ${kt.Accent.Light[4]};
                background-color: ${kt.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:r}=e;return t?u`
                border-top: 1px dashed ${kt.Accent.Light[4]};
                border-bottom: 1px dashed ${kt.Accent.Light[4]};
                background-color: ${kt.Accent.Light[6]};
            `:r?u`
                background-color: ${kt.Accent.Light[4]};
            `:void 0}}
`,c(cn)`
    ${e=>{const{$hovered:t,$selected:r}=e;return r?u`
                background: ${kt.Accent.Light[5]};
                border: 1px solid ${kt.Primary};
            `:t?u`
                box-shadow: 0px 0px 4px 1px ${kt.Shadow.Accent};
                border: 1px solid ${kt.Accent.Light[1]};
                background-color: ${kt.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?u`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${kt.Shadow.Accent};
                    border: 1px solid ${kt.Accent.Light[1]};
                    background-color: ${kt.Neutral[8]};
                }
            `:r?u`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:r,$variant:n}=e;return r?u`
                border: 1px solid ${kt.Accent.Light[1]};
                background: ${kt.Accent.Light[4]};

                :hover {
                    background: ${kt.Accent.Light[4]};
                }
            `:t?u`
                color: ${kt.Neutral[4]};
            `:"today"===n?u`
                    background: ${kt.Accent.Light[5]};
                `:void 0}}
`;const dn=e=>{let t=kt.Neutral[8],r="1px solid transparent";switch(e.$type){case"current":t=kt.Accent.Light[5];break;case"hover-dash":t=kt.Accent.Light[6],r=`1px dashed ${kt.Accent.Light[4](e)}`;break;case"hover-current":t=kt.Neutral[8],r=`1px solid ${kt.Primary(e)}`;break;case"selected":t=kt.Accent.Light[5],r=`1px solid ${kt.Accent.Light[4](e)}`;break;case"selected-outline":t=kt.Accent.Light[5],r=`1px solid ${kt.Primary(e)}`;break;case"overlap":t=kt.Accent.Light[4],r=`1px solid ${kt.Accent.Light[4](e)}`;break;case"overlap-outline":t=kt.Accent.Light[4],r=`1px solid ${kt.Primary(e)}`}return{color:t,border:r}},un=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,hn=c.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:r}=dn(e);return u`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${r};
            border-bottom: ${r};
        `}}
`,fn=c(hn)`
    left: 0;
`,gn=c(hn)`
    right: 0;
`,pn=c.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${kt.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,mn=c(pn)`
    left: 0;
`,yn=c(pn)`
    right: 0;
`,Dn=c.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:r}=dn(e);return u`
                background-color: ${t};
                background-clip: content-box;
                border: ${r};
            `}}}

    ${e=>e.$shadow&&u`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,bn=c(Dn)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${kt.Shadow.Accent};
    }
`,$n=c(Dn)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${kt.Shadow.Accent};
    }
`,vn=c($r.H5)`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;

    cursor: ${e=>e.$interactive?"pointer":"not-allowed"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"selected"===r?u`
                    ${Dr("H5","semibold")};
                    color: ${kt.Accent.Light[2]};
                `:u`
                color: ${kt.Neutral[4]};
            `;switch(r){case"selected":return u`
                    ${Dr("H5","semibold")};
                    color: ${kt.Primary};
                `;case"current":return u`
                    color: ${kt.Neutral[3]};
                `;case"unavailable":return u`
                    color: ${kt.Neutral[4]};
                `;default:return u`
                    color: ${kt.Neutral[1]};
                `}}}
`,Sn=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:i,shadow:o,circleShadow:s,labelType:l,disabled:c,interactive:d,date:u,onSelect:h,onHover:f})=>e(un,{children:[t(mn,{$shadow:r&&o}),t(fn,{$type:r,$shadow:r&&o}),t(bn,{$type:a,$shadow:a&&s}),t(yn,{$shadow:n&&o}),t(gn,{$type:n,$shadow:n&&o}),t($n,{$type:i,$shadow:i&&s}),t(vn,Object.assign({weight:"regular",$type:l,$disabled:c,$interactive:d,onClick:()=>{h(u)},onMouseEnter:()=>{f(u)}},{children:u.date()}))]}),Fn=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:i,hoverDate:o,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,onSelect:h,onHover:f})=>{const g=Vt.isDisabledDay(e,c,s,l),p=!g||d,m=()=>{const e=Lt(o),t=e.isBefore(a,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===i&&a&&t&&(n&&r?(c=o,d=a):(s=o,l=n||a)),"end"===i&&n&&r&&(a&&t?(c=n,d=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},y={date:e,calendarDate:r,disabled:g,interactive:p,onSelect:()=>{h(e,!p)},onHover:()=>{f(e.format("YYYY-MM-DD"),!p)}};return t(Sn,Object.assign({},y,(()=>{const t={};if(r.month()!==e.month())t.labelType="unavailable";else if(Lt().isSame(e,"day")&&!g)t.labelType="current",t.circleLeft="current",t.circleRight="current";else if(u){const r="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},r=e.isSame(n,"day"),i=e.isSame(a,"day");return(n&&r||a&&i)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",r||(t.bgLeft="selected"),i||(t.bgRight="selected")),t})(),(()=>{if(!o)return;const t={};e.isSame(o,"day")&&(t.circleShadow=!0,t.circleLeft="hover-current",t.circleRight="hover-current");const{hoverStart:r,hoverEnd:n,overlapStart:a,overlapEnd:i}=m();if(r&&n){if(e.isBetween(r,n,"day","[]")){const a=e.isSame(r,"day"),i=e.isSame(n,"day");t.labelType="selected",a||(t.bgLeft="hover-dash"),i||(t.bgRight="hover-dash")}return t}if(a&&i){if(e.isBetween(a,i,"day","[]")){const r=e.isSame(a,"day"),n=e.isSame(i,"day");t.labelType="selected",(r||n)&&(t.circleShadow=!0,t.circleLeft="overlap-outline",t.circleRight="overlap-outline"),r||(t.bgLeft="overlap"),n||(t.bgRight="overlap")}return t}return t})()))};Lt.extend(Wt);const wn=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:s,selectedEndDate:l,onSelect:c,onHover:d,isNewSelection:u,minDate:h,maxDate:f,allowDisabledSelection:g})=>{const p=a((()=>Vt.generateDays(r)),[r]),[m,y]=i(""),D=(e,t)=>{t&&!g||c(e)},b=(e,t)=>{t&&!g||(y(e),d(e))},$=()=>{y(""),d("")};return e(an,Object.assign({"data-testid":"calendar-content"},{children:[p[0].map(((e,r)=>t(on,{children:t($r.H6,Object.assign({weight:"semibold"},{children:Lt(e).format("ddd")}))},`week-day-${r}`))),p.map(((e,a)=>t(sn,Object.assign({onMouseLeave:$},{children:e.map(((e,a)=>t(Fn,{date:e,calendarDate:r,startDate:s,endDate:l,hoverDate:m,currentFocus:n,minDate:h,maxDate:f,disabledDates:o,allowDisabledSelection:g,isNewSelection:u,onSelect:D,onHover:b},`day-${a}`)))}),a)))]}))},xn=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:c,onSelect:d,onHover:u})=>{const h=Vt.isDisabledDay(e,s,i,o),f=!h||l,{start:g,end:p}=n?Vt.getFixedRangeStartEnd(qt.toDayjs(n),c):{start:void 0,end:void 0},{start:m,end:y}=a?Vt.getFixedRangeStartEnd(qt.toDayjs(a),c):{start:void 0,end:void 0},D=n&&e.isBetween(g,p,"day","[]"),b=a&&e.isBetween(m,y,"day","[]"),$=D&&e.isSame(g,"day")||b&&e.isSame(m,"day"),v=D&&e.isSame(p,"day")||b&&e.isSame(y,"day"),S=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},F={date:e,calendarDate:r,disabled:h,interactive:f,onSelect:()=>{d(e,!f)},onHover:()=>{u(e.format("YYYY-MM-DD"),!f)}};return t(Sn,Object.assign({},F,(()=>{const t={};return D||b?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":Lt().isSame(e,"day")&&!h&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const t={},r=e.format("YYYY-MM-DD");return b&&S(t,"hover-dash",r===m,r===y),D&&S(t,"selected",r===g,r===p),D&&b&&S(t,"overlap",$,v),r===g&&(b?(t.circleLeft="overlap-outline",t.circleRight="overlap-outline"):(t.circleRight="selected-outline",t.circleLeft="selected-outline")),r===m&&(t.circleLeft="hover-current",t.circleRight="hover-current",t.circleShadow=!0,m>=g&&m<p&&(t.circleLeft="overlap-outline",t.circleRight="overlap-outline")),t})()))},Bn=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:s,onHover:l,minDate:c,maxDate:d,allowDisabledSelection:u,numberOfDays:h})=>{const f=a((()=>Vt.generateDays(r)),[r]),[g,p]=i(""),m=(e,t)=>{t&&!u||(s(e),e&&!Lt(e).isSame(e,"month")&&p(""))},y=(e,t)=>{t&&!u||(p(e),l(e))},D=()=>{p(""),l("")};return e(an,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,r)=>t(on,{children:t($r.H6,Object.assign({weight:"semibold"},{children:Lt(e).format("ddd")}))},`week-day-${r}`))),f.map(((e,a)=>t(sn,Object.assign({onMouseLeave:D},{children:e.map(((e,a)=>t(xn,{date:e,calendarDate:r,selectedDate:o,hoverDate:g,minDate:c,maxDate:d,disabledDates:n,allowDisabledSelection:u,onSelect:m,onHover:y,numberOfDays:h},`day-${a}`)))}),a)))]}))},Hn=c.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${kt.Neutral[8]};

    ${e=>{if("input"===e.$type)return u`
                border: 1px solid ${kt.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,On=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=Vt.isDisabledDay(e,s,i,o),h=!u||l,{start:f,end:g}=Vt.getWeekStartEnd(qt.toDayjs(n)),{start:p,end:m}=Vt.getWeekStartEnd(qt.toDayjs(a)),y=n&&e.isBetween(f,g,"day","[]"),D=a&&e.isBetween(p,m,"day","[]"),b=y&&e.isSame(f)||D&&e.isSame(p),$=y&&e.isSame(g)||D&&e.isSame(m),v={date:e,calendarDate:r,disabled:u,interactive:h,onSelect:()=>{c(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(Sn,Object.assign({},v,(()=>{const t={};return y||D?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":Lt().isSame(e,"day")&&!u&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return y&&D?(t="hover-current",e.shadow=!0,e.circleShadow=b||$):y?t="selected-outline":D&&(t="hover-dash"),t&&(b?e.circleLeft=t:e.bgLeft=t,$?e.circleRight=t:e.bgRight=t),e})()))},An=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:s,onHover:l,minDate:c,maxDate:d,allowDisabledSelection:u})=>{const h=a((()=>Vt.generateDays(r)),[r]),[f,g]=i(""),p=(e,t)=>{if(t&&!u)return;const r=e.startOf("week");s(r),e&&!Lt(e).isSame(r,"month")&&g("")},m=(e,t)=>{t&&!u||(g(e),l(e))},y=()=>{g(""),l("")};return e(an,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,r)=>t(on,{children:t($r.H6,Object.assign({weight:"semibold"},{children:Lt(e).format("ddd")}))},`week-day-${r}`))),h.map(((e,a)=>t(sn,Object.assign({onMouseLeave:y},{children:e.map(((e,a)=>t(On,{date:e,calendarDate:r,selectedDate:o,hoverDate:f,minDate:c,maxDate:d,disabledDates:n,allowDisabledSelection:u,onSelect:p,onHover:m},`day-${a}`)))}),a)))]}))},Mn=n.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:i,value:l,endValue:c,currentFocus:d,withButton:u,variant:h,minDate:f,maxDate:g,allowDisabledSelection:p,type:m="standalone",selectWithinRange:y=!0,initialCalendarDate:D,numberOfDays:b},$)=>{const v=o(),S=o(void 0);s($,(()=>({reset(){v.current.resetView()},setCalendarDate(e){v.current.setCalendarDate(e)}})));const F=e=>{const t=e.format("YYYY-MM-DD");v.current.setCalendarDate(t),x(t)},w=e=>{B(e)},x=e=>{n&&n(e)},B=e=>{a&&a(e)},H=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(Hn,Object.assign({$type:m},{children:t(nn,Object.assign({type:m,ref:v,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(h){case"single":e=!1;break;case"range":case"fixed-range":e=!!l!=!!c;break;case"week":e=!l&&!c}return e})(),onDismiss:i,minDate:f,maxDate:g,selectWithinRange:y,currentFocus:d,selectedStartDate:l,selectedEndDate:c,allowDisabledSelection:p,onCalendarDateChange:e=>{S.current&&S.current.isSame(e,"month")||H(e),S.current=e},initialCalendarDate:D},{children:({calendarDate:r})=>(r=>{switch(h){case"week":return t(An,{calendarDate:r,disabledDates:e,selectedStartDate:l,minDate:f,maxDate:g,allowDisabledSelection:p,onSelect:F,onHover:w});case"fixed-range":return t(Bn,{calendarDate:r,disabledDates:e,selectedStartDate:l,minDate:f,maxDate:g,allowDisabledSelection:p,onSelect:F,onHover:w,numberOfDays:b});default:return t(wn,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:l,selectedEndDate:c,minDate:f,maxDate:g,isNewSelection:y,allowDisabledSelection:p,onSelect:F,onHover:w})}})(r)}))}))})),kn=e=>{var{className:r,styleType:n="bordered",value:a,onSelect:o}=e,s=m(e,["className","styleType","value","onSelect"]);const[c,d]=i(a);return l((()=>{d(a)}),[a]),t(En,Object.assign({className:r,$hasBorder:"bordered"===n},{children:t(Mn,Object.assign({type:"standalone",value:c,initialCalendarDate:c,onSelect:e=>{d(e),null==o||o(e)}},s))}))},En=c.div`
    width: 41rem;

    ${e=>{if(e.$hasBorder)return u`
                border: 1px solid ${kt.Neutral[5](e)};
                border-radius: 12px;
                overflow: hidden;
            `}}
`;export{kn as Calendar};
//# sourceMappingURL=index.js.map
