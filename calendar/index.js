import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n,{useMemo as i,useState as a,useRef as o,useImperativeHandle as s,useEffect as l}from"react";import c,{keyframes as d,css as u}from"styled-components";import{ChevronDownIcon as h}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as f}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as p}from"@lifesg/react-icons/chevron-right";import{ExternalIcon as g}from"@lifesg/react-icons/external";function $(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}var m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},y=Array.isArray,v="object"==typeof m&&m&&m.Object===Object&&m,b="object"==typeof self&&self&&self.Object===Object&&self,D=v||b||Function("return this")(),S=D.Symbol,w=S,x=Object.prototype,F=x.hasOwnProperty,B=x.toString,H=w?w.toStringTag:void 0;var O=function(e){var t=F.call(e,H),r=e[H];try{e[H]=void 0;var n=!0}catch(e){}var i=B.call(e);return n&&(t?e[H]=r:delete e[H]),i},k=Object.prototype.toString;var A=O,M=function(e){return k.call(e)},L=S?S.toStringTag:void 0;var Y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":L&&L in Object(e)?A(e):M(e)};var j=Y,z=function(e){return null!=e&&"object"==typeof e};var E=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==j(e)},W=y,C=E,N=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_=/^\w*$/;var T=function(e,t){if(W(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!C(e))||(_.test(e)||!N.test(e)||null!=t&&e in Object(t))};var P=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},R=Y,I=P;var V,Z=function(e){if(!I(e))return!1;var t=R(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},U=D["__core-js_shared__"],X=(V=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var G=function(e){return!!X&&X in e},J=Function.prototype.toString;var q=Z,Q=G,K=P,ee=function(e){if(null!=e){try{return J.call(e)}catch(e){}try{return e+""}catch(e){}}return""},te=/^\[object .+?Constructor\]$/,re=Function.prototype,ne=Object.prototype,ie=re.toString,ae=ne.hasOwnProperty,oe=RegExp("^"+ie.call(ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var se=function(e){return!(!K(e)||Q(e))&&(q(e)?oe:te).test(ee(e))},le=function(e,t){return null==e?void 0:e[t]};var ce=function(e,t){var r=le(e,t);return se(r)?r:void 0},de=ce(Object,"create"),ue=de;var he=function(){this.__data__=ue?ue(null):{},this.size=0};var fe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},pe=de,ge=Object.prototype.hasOwnProperty;var $e=function(e){var t=this.__data__;if(pe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ge.call(t,e)?t[e]:void 0},me=de,ye=Object.prototype.hasOwnProperty;var ve=de;var be=he,De=fe,Se=$e,we=function(e){var t=this.__data__;return me?void 0!==t[e]:ye.call(t,e)},xe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ve&&void 0===t?"__lodash_hash_undefined__":t,this};function Fe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Fe.prototype.clear=be,Fe.prototype.delete=De,Fe.prototype.get=Se,Fe.prototype.has=we,Fe.prototype.set=xe;var Be=Fe;var He=function(){this.__data__=[],this.size=0};var Oe=function(e,t){return e===t||e!=e&&t!=t};var ke=function(e,t){for(var r=e.length;r--;)if(Oe(e[r][0],t))return r;return-1},Ae=ke,Me=Array.prototype.splice;var Le=ke;var Ye=ke;var je=ke;var ze=He,Ee=function(e){var t=this.__data__,r=Ae(t,e);return!(r<0)&&(r==t.length-1?t.pop():Me.call(t,r,1),--this.size,!0)},We=function(e){var t=this.__data__,r=Le(t,e);return r<0?void 0:t[r][1]},Ce=function(e){return Ye(this.__data__,e)>-1},Ne=function(e,t){var r=this.__data__,n=je(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function _e(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}_e.prototype.clear=ze,_e.prototype.delete=Ee,_e.prototype.get=We,_e.prototype.has=Ce,_e.prototype.set=Ne;var Te=_e,Pe=ce(D,"Map"),Re=Be,Ie=Te,Ve=Pe;var Ze=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ue=function(e,t){var r=e.__data__;return Ze(t)?r["string"==typeof t?"string":"hash"]:r.map},Xe=Ue;var Ge=Ue;var Je=Ue;var qe=Ue;var Qe=function(){this.size=0,this.__data__={hash:new Re,map:new(Ve||Ie),string:new Re}},Ke=function(e){var t=Xe(this,e).delete(e);return this.size-=t?1:0,t},et=function(e){return Ge(this,e).get(e)},tt=function(e){return Je(this,e).has(e)},rt=function(e,t){var r=qe(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function nt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}nt.prototype.clear=Qe,nt.prototype.delete=Ke,nt.prototype.get=et,nt.prototype.has=tt,nt.prototype.set=rt;var it=nt;function at(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(at.Cache||it),r}at.Cache=it;var ot=at;var st=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,lt=/\\(\\)?/g,ct=function(e){var t=ot(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(st,(function(e,r,n,i){t.push(n?i.replace(lt,"$1"):r||e)})),t}));var dt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},ut=y,ht=E,ft=S?S.prototype:void 0,pt=ft?ft.toString:void 0;var gt=function e(t){if("string"==typeof t)return t;if(ut(t))return dt(t,e)+"";if(ht(t))return pt?pt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},$t=gt;var mt=y,yt=T,vt=ct,bt=function(e){return null==e?"":$t(e)};var Dt=E;var St=function(e,t){return mt(e)?e:yt(e,t)?[e]:vt(bt(e))},wt=function(e){if("string"==typeof e||Dt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var xt=function(e,t){for(var r=0,n=(t=St(t,e)).length;null!=e&&r<n;)e=e[wt(t[r++])];return r&&r==n?e:void 0};var Ft=function(e,t,r){var n=null==e?void 0:xt(e,t);return void 0===n?r:n};const Bt=(e,t,r)=>t?Ft(r,t)||Ft(e,t):r||e,Ht=(e,t)=>{const r=t||e.defaultValue;return Ft(e.collections,r)};var Ot;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ot||(Ot={}));const kt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},At=e=>t=>{const r=t.theme,n=Ht(kt,r[Ot.colorScheme]);return r.options&&r.options.color?Bt(n,e,r.options.color):Bt(n,e)},Mt={Brand:{1:At("Brand.1"),2:At("Brand.2"),3:At("Brand.3"),4:At("Brand.4"),5:At("Brand.5"),6:At("Brand.6")},Primary:At("Primary"),PrimaryDark:At("PrimaryDark"),Secondary:At("Secondary"),Accent:{Light:{1:At("Accent.Light.1"),2:At("Accent.Light.2"),3:At("Accent.Light.3"),4:At("Accent.Light.4"),5:At("Accent.Light.5"),6:At("Accent.Light.6")},Dark:{1:At("Accent.Dark.1"),2:At("Accent.Dark.2"),3:At("Accent.Dark.3")}},Neutral:{1:At("Neutral.1"),2:At("Neutral.2"),3:At("Neutral.3"),4:At("Neutral.4"),5:At("Neutral.5"),6:At("Neutral.6"),7:At("Neutral.7"),8:At("Neutral.8")},Validation:{Green:{Text:At("Validation.Green.Text"),Icon:At("Validation.Green.Icon"),Border:At("Validation.Green.Border"),Background:At("Validation.Green.Background")},Orange:{Text:At("Validation.Orange.Text"),Icon:At("Validation.Orange.Icon"),Border:At("Validation.Orange.Border"),Background:At("Validation.Orange.Background"),Badge:At("Validation.Orange.Badge")},Red:{Text:At("Validation.Red.Text"),Icon:At("Validation.Red.Icon"),Border:At("Validation.Red.Border"),Background:At("Validation.Red.Background")},Blue:{Text:At("Validation.Blue.Text"),Icon:At("Validation.Blue.Icon"),Border:At("Validation.Blue.Border"),Background:At("Validation.Blue.Background")}},Shadow:{Accent:At("Shadow.Accent"),Red:At("Shadow.Red"),Elevation:At("Shadow.Elevation")}};var Lt={exports:{}};Lt.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},m=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:m,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+m(n,2,"0")+":"+m(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),a=r-i<0,o=t.clone().add(n+(a?-1:1),c);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:o,m:a,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",b={};b[v]=$;var D=function(e){return e instanceof F},S=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();b[a]&&(i=a),r&&(b[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;b[s]=t,i=s}return!n&&i&&(v=i),i||!n&&v},w=function(e,t){if(D(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new F(r)},x=y;x.l=S,x.i=D,x.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var F=function(){function $(e){this.$L=S(e.locale,null,!0),this.parse(e)}var m=$.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return x},m.isValid=function(){return!(this.$d.toString()===f)},m.isSame=function(e,t){var r=w(e);return this.startOf(t)<=r&&r<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,r){return x.u(e)?this[t]:this.set(r,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var r=this,n=!!x.u(t)||t,d=x.p(e),f=function(e,t){var i=x.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return x.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,$=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return n?f(1,0):f(31,11);case c:return n?f(1,$):f(0,$+1);case l:var v=this.$locale().weekStart||0,b=(g<v?g+7:g)-v;return f(n?m-b:m+(6-b),$);case s:case h:return p(y+"Hours",0);case o:return p(y+"Minutes",1);case a:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var r,l=x.p(e),d="set"+(this.$u?"UTC":""),f=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[a]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[x.p(e)]()},m.add=function(n,d){var h,f=this;n=Number(n);var p=x.p(d),g=function(e){var t=w(f);return x.w(t.date(t.date()+Math.round(e*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var $=(h={},h[a]=t,h[o]=r,h[i]=e,h)[p]||1,m=this.$d.getTime()+n*$;return x.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},u=function(e){return x.s(a%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:x.s(s+1,2,"0"),MMM:d(r.monthsShort,s,c,3),MMMM:d(c,s),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,l,2),ddd:d(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:x.s(a,2,"0"),h:u(1),hh:u(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:x.s(o,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return n.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,h,f){var p,g=x.p(h),$=w(n),m=($.utcOffset()-this.utcOffset())*t,y=this-$,v=x.m(this,$);return v=(p={},p[u]=v/12,p[c]=v,p[d]=v/3,p[l]=(y-m)/6048e5,p[s]=(y-m)/864e5,p[o]=y/r,p[a]=y/t,p[i]=y/e,p)[g]||y,f?v:x.a(v)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return b[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},m.clone=function(){return x.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},$}(),B=F.prototype;return w.prototype=B,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,F,w),e.$i=!0),w},w.locale=S,w.isDayjs=D,w.unix=function(e){return w(1e3*e)},w.en=b[v],w.Ls=b,w.p={},w}();var Yt=Lt.exports,jt={exports:{}};jt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],f=d&&d[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(n),d=a.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,f=new Date,p=o||(i||a?1:f.getDate()),g=i||f.getFullYear(),$=0;i&&!a||($=a>0?a-1:f.getMonth());var m=s||0,y=l||0,v=c||0,b=d||0;return u?new Date(Date.UTC(g,$,p,m,y,v,b+60*u.offset*1e3)):r?new Date(Date.UTC(g,$,p,m,y,v,b)):new Date(g,$,p,m,y,v,b)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var g=r.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var zt,Et,Wt=jt.exports,Ct={exports:{}},Nt=Ct.exports=(zt={year:0,month:1,day:2,hour:3,minute:4,second:5},Et={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Et[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Et[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,d=zt[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],h=24===u?0:u,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=r(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}),_t={exports:{}};_t.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Tt=_t.exports,Pt={exports:{}};Pt.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Rt=Pt.exports,It={exports:{}};It.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Vt,Zt=It.exports;Yt.extend(Tt),Yt.extend(Rt),Yt.extend(Zt),Yt.extend(Wt),Yt.extend(Nt),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Yt(t).startOf("week");return Ut(r).map((e=>Xt(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Xt(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Yt(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Yt(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Yt(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?Yt(n):void 0,i?Yt(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Vt||(Vt={}));const Ut=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Xt=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Gt=[1,3,5,7,8,10,12],Jt=[4,6,9,11];var qt,Qt,Kt,er;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":Gt.includes(a)?Math.min(i,31).toString():Jt.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Yt(e,r);return Yt(t,r).diff(n,"minute")},e.toDayjs=e=>e?Yt(e):Yt()}(qt||(qt={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!Yt(e).isBefore(n,"day"))||!(!i||!Yt(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Yt(e).isValid())return e}return""}}(Qt||(Qt={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Kt||(Kt={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width}}(er||(er={}));const tr={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},rr=e=>Object.keys(tr).reduce(((t,r)=>{const n=tr[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),nr=rr("max-width"),ir=(rr("min-width"),c.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),ar=d`
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
    border-color: ${e=>e.$color||Mt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ar} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,sr=c(or)`
    animation-delay: -0.45s;
`,lr=c(or)`
    animation-delay: -0.3s;
`,cr=c(or)`
    animation-delay: -0.15s;
`,dr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ur={collections:{base:{D1:{fontFamily:dr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:dr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:dr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:dr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:dr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:dr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:dr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:dr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:dr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:dr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:dr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:dr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:dr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:dr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},hr=e=>t=>{const r=t.theme,n=Ht(ur,r[Ot.textStyleScheme]);return r.options&&r.options.textStyle?Bt(n,e,r.options.textStyle):Bt(n,e)},fr={D1:{fontFamily:hr("D1.fontFamily"),fontSize:hr("D1.fontSize"),fontWeight:hr("D1.fontWeight"),lineHeight:hr("D1.lineHeight"),letterSpacing:hr("D1.letterSpacing")},D2:{fontFamily:hr("D2.fontFamily"),fontSize:hr("D2.fontSize"),fontWeight:hr("D2.fontWeight"),lineHeight:hr("D2.lineHeight"),letterSpacing:hr("D2.letterSpacing")},D3:{fontFamily:hr("D3.fontFamily"),fontSize:hr("D3.fontSize"),fontWeight:hr("D3.fontWeight"),lineHeight:hr("D3.lineHeight"),letterSpacing:hr("D3.letterSpacing")},D4:{fontFamily:hr("D4.fontFamily"),fontSize:hr("D4.fontSize"),fontWeight:hr("D4.fontWeight"),lineHeight:hr("D4.lineHeight"),letterSpacing:hr("D4.letterSpacing")},DBody:{fontFamily:hr("DBody.fontFamily"),fontSize:hr("DBody.fontSize"),fontWeight:hr("DBody.fontWeight"),lineHeight:hr("DBody.lineHeight"),letterSpacing:hr("DBody.letterSpacing")},H1:{fontFamily:hr("H1.fontFamily"),fontSize:hr("H1.fontSize"),fontWeight:hr("H1.fontWeight"),lineHeight:hr("H1.lineHeight"),letterSpacing:hr("H1.letterSpacing")},H2:{fontFamily:hr("H2.fontFamily"),fontSize:hr("H2.fontSize"),fontWeight:hr("H2.fontWeight"),lineHeight:hr("H2.lineHeight"),letterSpacing:hr("H2.letterSpacing")},H3:{fontFamily:hr("H3.fontFamily"),fontSize:hr("H3.fontSize"),fontWeight:hr("H3.fontWeight"),lineHeight:hr("H3.lineHeight"),letterSpacing:hr("H3.letterSpacing")},H4:{fontFamily:hr("H4.fontFamily"),fontSize:hr("H4.fontSize"),fontWeight:hr("H4.fontWeight"),lineHeight:hr("H4.lineHeight"),letterSpacing:hr("H4.letterSpacing")},H5:{fontFamily:hr("H5.fontFamily"),fontSize:hr("H5.fontSize"),fontWeight:hr("H5.fontWeight"),lineHeight:hr("H5.lineHeight"),letterSpacing:hr("H5.letterSpacing")},H6:{fontFamily:hr("H6.fontFamily"),fontSize:hr("H6.fontSize"),fontWeight:hr("H6.fontWeight"),lineHeight:hr("H6.lineHeight"),letterSpacing:hr("H6.letterSpacing")},Body:{fontFamily:hr("Body.fontFamily"),fontSize:hr("Body.fontSize"),fontWeight:hr("Body.fontWeight"),lineHeight:hr("Body.lineHeight"),letterSpacing:hr("Body.letterSpacing")},BodySmall:{fontFamily:hr("BodySmall.fontFamily"),fontSize:hr("BodySmall.fontSize"),fontWeight:hr("BodySmall.fontWeight"),lineHeight:hr("BodySmall.lineHeight"),letterSpacing:hr("BodySmall.letterSpacing")},XSmall:{fontFamily:hr("XSmall.fontFamily"),fontSize:hr("XSmall.fontSize"),fontWeight:hr("XSmall.fontWeight"),lineHeight:hr("XSmall.lineHeight"),letterSpacing:hr("XSmall.letterSpacing")}},pr=e=>{switch(e){case 700:case"bold":return dr.Bold;case 600:case"semibold":return dr.Semibold;case 300:case"light":return dr.Light;case 400:case"regular":return dr.Regular;default:return""}},gr=(e,t)=>r=>{var n;const i=fr[e].fontFamily(r),a=fr[e].fontWeight(r);return Object.values(dr).includes(i)?u`
                font-family: ${pr(t)||pr(a)||i};
                font-weight: normal !important;
            `:u`
            font-family: ${i};
            font-weight: ${null!==(n=$r(t)||a)&&void 0!==n?n:"normal"};
        `},$r=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},mr=e=>{if(e>0)return u`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},yr=(e,t,r=!1)=>n=>{const i=fr[e],a=i.fontSize(n);return u`
            ${gr(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${u`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},vr=(e=!1,t=!1,r=void 0)=>t?u`
            display: block;
            ${mr(r)}
        `:e?u`
            display: inline;
        `:u`
            display: block;
            ${mr(r)}
        `;var br;!function(e){e.D1=c.h1`
        ${e=>u`
                ${yr("D1",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=c.h1`
        ${e=>u`
                ${yr("D2",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=c.h1`
        ${e=>u`
                ${yr("D3",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=c.h1`
        ${e=>u`
                ${yr("D4",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=c.h1`
        ${e=>u`
                ${yr("DBody",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=c.h1`
        ${e=>u`
                ${yr("H1",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=c.h2`
        ${e=>u`
                ${yr("H2",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=c.h3`
        ${e=>u`
                ${yr("H3",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=c.h4`
        ${e=>u`
                ${yr("H4",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=c.h5`
        ${e=>u`
                ${yr("H5",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=c.h6`
        ${e=>u`
                ${yr("H6",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=c.p`
        ${e=>u`
                ${yr("Body",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=c.p`
        ${e=>u`
                ${yr("BodySmall",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=c.span`
        ${e=>u`
                ${yr("XSmall",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>wr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>wr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(br||(br={}));const Dr=c.a`
    ${e=>u`
            ${yr(e.textStyle,e.weight)}
            color: ${Mt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Mt.Secondary};

                svg {
                    color: ${Mt.Secondary};
                }
            }
        `}
`,Sr=c(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,wr=r=>{var{external:n=!1,children:i}=r,a=$(r,["external","children"]);return e(Dr,Object.assign({},a,{children:[i,n&&t(Sr,{})]}))};var xr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(xr||(xr={}));const Fr=c.button`
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
                    background-color: ${Mt.Neutral[8](e)};
                    border: 1px solid ${Mt.Primary(e)};

                    span {
                        color: ${Mt.Primary(e)};
                    }
                `;case"light":return u`
                    background-color: ${Mt.Neutral[8](e)};
                    border: 1px solid ${Mt.Neutral[5](e)};

                    span {
                        color: ${Mt.Primary(e)};
                    }
                `;case"disabled":return u`
                    background-color: ${Mt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Mt.Neutral[3](e)};
                    }
                `;case"link":return u`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Mt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Mt.Secondary};
                        }
                    }
                `;default:return u`
                    background-color: ${Mt.Primary(e)};
                    border: 1px solid transparent;

                    ${nr.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Mt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?u`
                    height: 2.5rem;
                    span {
                        ${yr("H5","semibold")}
                    }

                    ${nr.mobileS} {
                        height: auto;
                    }
                `:u`
                    height: 3rem;
                    span {
                        ${yr("H4","semibold")}
                    }

                    ${nr.mobileS} {
                        height: auto;
                    }
                `}
`,Br=c((({color:r,className:n,size:i=18})=>e(ir,Object.assign({className:n,$size:i,$color:r},{children:[t(or,{id:"inner1",$size:i-2,$borderWidth:2}),t(sr,{id:"inner2",$size:i-2,$borderWidth:2}),t(lr,{id:"inner3",$size:i-2,$borderWidth:2}),t(cr,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Mt.Primary(e);break;case"disabled":t=Mt.Neutral[3](e);break;default:t=Mt.Neutral[8](e)}return u`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Hr={Default:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default"}=r,l=$(r,["children","disabled","loading","styleType"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default"};return e(Fr,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:a},c,l,{children:[o&&t(Br,Object.assign({},c)),t("span",{children:i})]}))})),Small:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default"}=r,l=$(r,["children","disabled","loading","styleType"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small"};return e(Fr,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:a},c,l,{children:[o&&t(Br,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},Or=c.button`
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
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&u`
                background-color: ${Mt.Neutral[7]};
            `}
    }
`,kr=n.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=$(e,["children","focusHighlight","focusOutline","type"]);return t(Or,Object.assign({ref:r,$outline:a,$highlight:i,type:o},s,{children:n}))})),Ar=u`
    color: ${Mt.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Mr=c(f)`
    ${Ar}
`,Lr=c(p)`
    ${Ar}
`,Yr=c(h)`
    ${Ar}
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
`,Er=c.div`
    isolation: isolate;
    width: 100%;
`,Wr=c.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Mt.Neutral[8]};

    ${e=>{if(!e.$visible)return u`
                display: none;
            `}}
`,Cr=c.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Nr=c.div`
    display: flex;
`,_r=c.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?u`
                display: none;
            `:e.$expanded?u`
                ${Yr} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Tr=c.p`
    ${yr("H5","regular")}
`,Pr=c.div`
    display: flex;
`,Rr=c(kr)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Ir=c.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Vr=c(Hr.Small)`
    flex: 1;
`,Zr=c.div`
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
`,Ur=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?u`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Mt.Shadow.Accent};
                    border: 1px solid ${Mt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?u`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return u`
                    background-color: ${Mt.Accent.Light[6](e)};
                `;case"selected-month":return u`
                    background-color: ${Mt.Accent.Light[5](e)};
                    border: 1px solid ${Mt.Primary(e)};
                `}}}
`,Xr=c(br.H5)`
    ${e=>{if(e.$disabledDisplay)return u`
                color: ${Mt.Neutral[4]};
            `;switch(e.$variant){case"current-month":return u`
                    color: ${Mt.Neutral[3](e)};
                `;case"selected-month":return u`
                    ${yr("H5","semibold")}
                    color: ${Mt.Primary(e)};
                `}}}
`,Gr=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:o,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onMonthSelect:h})=>{const f=i((()=>Vt.generateMonths(Yt(e))),[e]),p=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return t||i},g=e=>{const t=e.format("MMMM"),r=(n=e,!Vt.isWithinRange(n,c?Yt(c):void 0,d?Yt(d):void 0,"month"));var n;const i=o.isSame(e,"month")?"selected-month":Yt().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||p(e),interactive:!r||u,month:t,variant:i}};return f.length?t(Zr,Object.assign({$type:s},{children:f.map((e=>{const{disabledDisplay:r,interactive:n,variant:i,month:a}=g(e);return t(Ur,Object.assign({$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||h(e)})(e,!n)},{children:t(Xr,Object.assign({weight:"regular",$variant:i,$disabledDisplay:r},{children:a}))}),a)}))})):null},Jr=c.div`
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
`,qr=c.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?u`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Mt.Shadow.Accent};
                    border: 1px solid ${Mt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?u`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return u`
                    background: ${Mt.Accent.Light[6](e)};
                `;case"selected-year":return u`
                    background: ${Mt.Accent.Light[5](e)};
                    border: 1px solid ${Mt.Primary(e)};
                `}}};
`,Qr=c(br.H5)`
    ${e=>{if(e.$disabledDisplay)return u`
                color: ${Mt.Neutral[4]};
            `;switch(e.$variant){case"current-year":return u`
                    color: ${Mt.Neutral[3](e)};
                `;case"selected-year":return u`
                    ${yr("H5","semibold")}
                    color: ${Mt.Primary(e)};
                `;case"other-decade":return u`
                    color: ${Mt.Neutral[4](e)};
                `}}}
`,Kr=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:o,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onYearSelect:h})=>{const f=i((()=>Vt.generateDecadeOfYears(Yt(e))),[e]),p=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return t||i},g=e=>{const t=[0,11].includes(f.indexOf(e)),r=e.year(),n=(i=e,!Vt.isWithinRange(i,c?Yt(c):void 0,d?Yt(d):void 0,"year"));var i;const a=t?"other-decade":o.isSame(e,"year")?"selected-year":Yt().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||p(e),interactive:!n||u,year:r,variant:a}};return f.length?t(Jr,Object.assign({$type:s},{children:f.map((e=>{const{disabledDisplay:r,interactive:n,variant:i,year:a}=g(e);return t(qr,Object.assign({$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||h(e)})(e,!n)},{children:t(Qr,Object.assign({weight:"regular",$variant:i,$disabledDisplay:r,$interactive:n},{children:a}))}),a)}))})):null},en=n.forwardRef(((n,i)=>{var{children:c,initialCalendarDate:d,type:u,minDate:h,maxDate:f,currentFocus:p,selectedStartDate:g,selectedEndDate:m,selectWithinRange:y,dynamicHeight:v=!1,allowDisabledSelection:b,onCalendarDateChange:D,withButton:S,doneButtonDisabled:w,onDismiss:x,showNavigationHeader:F=!0,getLeftArrowDate:B,getRightArrowDate:H,isLeftArrowDisabled:O,isRightArrowDisabled:k,getMonthHeaderLabel:A,getYearHeaderLabel:M}=n,L=$(n,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[Y,j]=a(qt.toDayjs(d)),[z,E]=a(qt.toDayjs(d)),[W,C]=a("default"),N=o(null),_=o(null),T=o();s(i,(()=>({defaultView(){C("default")},resetView(){const e=qt.toDayjs(d);j(e),E(e),C("default")},setCalendarDate(e){const t=qt.toDayjs(e);j(t),E(t)}}))),l((()=>{const e=qt.toDayjs(d);j(e),E(e)}),[d]),l((()=>{X(z)}),[z]);const P=()=>{"month-options"!==W?(C("month-options"),T.current.focus()):(C("default"),j(z))},R=()=>{"default"!==W?(C("default"),j(z)):C("year-options")},I=()=>{T.current.focus();const e=B?B(Y):Y.subtract(1,"month");switch(W){case"default":E(e),j(e);break;case"month-options":j((e=>e.subtract(1,"year")));break;case"year-options":j((e=>e.subtract(10,"year")))}},V=()=>{T.current.focus();const e=H?H(Y):Y.add(1,"month");switch(W){case"default":E(e),j(e);break;case"month-options":j((e=>e.add(1,"year")));break;case"year-options":j((e=>e.add(10,"year")))}},Z=e=>{j(e),E(e),S||C("default")},U=()=>{const e=qt.toDayjs(d);j(e),E(e),"default"===W?G("reset"):C("default")},X=e=>{D&&D(e)},G=e=>{x&&x(e)},J=()=>{if(!h||b)return!1;const e=Yt(h);return"month-options"===W?!Vt.isPreviousYearWithinRange(Y,e):"year-options"===W?!Vt.isPreviousDecadeWithinRange(Y,e):O?O(Y):!Vt.isPreviousMonthWithinRange(Y,e)},q=()=>{if(!f||b)return!1;const e=Yt(f);return"month-options"===W?!Vt.isNextYearWithinRange(Y,e):"year-options"===W?!Vt.isNextDecadeWithinRange(Y,e):k?k(Y):!Vt.isNextMonthWithinRange(Y,e)},Q=()=>{if("year-options"===W){const{beginDecade:e,endDecade:t}=Vt.getStartEndDecade(Y);return`${e} to ${t}`}return M?M(Y):Y.format("YYYY")},K=()=>{const n=A?A(Y):Y.format("MMM");return e(r,{children:[e(_r,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===W,$visible:"default"===W,id:"month-dropdown",onClick:P},{children:[t(Tr,{children:n}),t(Yr,{})]})),e(_r,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==W,id:"year-dropdown",onClick:R},{children:[t(Tr,{children:Q()}),t(Yr,{})]}))]})},ee=()=>{switch(W){case"month-options":return t(Gr,{type:u,calendarDate:Y,currentFocus:p,minDate:h,maxDate:f,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:z,isNewSelection:y,onMonthSelect:Z,allowDisabledSelection:b});case"year-options":return t(Kr,{type:u,calendarDate:Y,currentFocus:p,minDate:h,maxDate:f,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:z,isNewSelection:y,onYearSelect:Z,allowDisabledSelection:b});default:return null}};return e(jr,Object.assign({ref:T,tabIndex:-1,"data-id":"calendar-container","data-testid":"calendar-container"},L,{children:[F&&e(Cr,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Nr,{children:K()}),e(Pr,{children:[t(Rr,Object.assign({"data-testid":"left-arrow-btn",disabled:J(),focusHighlight:!1,tabIndex:-1,onClick:I},{children:t(Mr,{})})),t(Rr,Object.assign({"data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(Lr,{})}))]})]})),t(zr,{children:(()=>{const n="function"==typeof c?c({calendarDate:z,currentView:W}):c;return e(r,v?{children:["default"===W&&n,ee()]}:{children:[t(Er,{children:n}),t(Wr,Object.assign({$visible:"default"!==W},{children:ee()}))]})})()}),(()=>{if(!S)return;const r=!!("default"===W)&&w;return e(Ir,{children:[t(Vr,Object.assign({ref:_,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U},{children:"Cancel"})),t(Vr,Object.assign({"data-testid":"done-button",ref:N,type:"button",onClick:()=>(e=>{e||(j(z),"default"===W?G("confirmed"):C("default"))})(r),disabled:r},{children:"Done"}))]})})()]}))})),tn=c.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,rn=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,nn=c.div`
    grid-column: 1 / -1;
    display: flex;
`,an=c.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,on=c.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return u`
                    left: 0;
                `;case"right":return u`
                    right: 0;
                `}}}
`,sn=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`,ln=c(br.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:r,$variant:n}=e;if(t&&r)return u`
                ${yr("H5","semibold")};
                color: ${Mt.Accent.Light[2]};
            `;if(t)return u`
                color: ${Mt.Neutral[4]};
            `;if(r)return u`
                ${yr("H5","semibold")};
                color: ${Mt.Primary};
            `;switch(n){case"other-month":return u`
                    color: ${Mt.Neutral[4]};
                `;case"today":return u`
                    color: ${Mt.Neutral[3]};
                `;case"default":return u`
                    color: ${Mt.Neutral[1]};
                `}}}
`,cn=c(on)`
    ${e=>{const{$selected:t}=e;if(t)return u`
                border-top: 1px solid ${Mt.Accent.Light[4]};
                border-bottom: 1px solid ${Mt.Accent.Light[4]};
                background-color: ${Mt.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:r}=e;return t?u`
                border-top: 1px dashed ${Mt.Accent.Light[4]};
                border-bottom: 1px dashed ${Mt.Accent.Light[4]};
                background-color: ${Mt.Accent.Light[6]};
            `:r?u`
                background-color: ${Mt.Accent.Light[4]};
            `:void 0}}
`,dn=c(sn)`
    ${e=>{const{$hovered:t,$selected:r}=e;return r?u`
                background: ${Mt.Accent.Light[5]};
                border: 1px solid ${Mt.Primary};
            `:t?u`
                box-shadow: 0px 0px 4px 1px ${Mt.Shadow.Accent};
                border: 1px solid ${Mt.Accent.Light[1]};
                background-color: ${Mt.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?u`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Mt.Shadow.Accent};
                    border: 1px solid ${Mt.Accent.Light[1]};
                    background-color: ${Mt.Neutral[8]};
                }
            `:r?u`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:r,$variant:n}=e;return r?u`
                border: 1px solid ${Mt.Accent.Light[1]};
                background: ${Mt.Accent.Light[4]};

                :hover {
                    background: ${Mt.Accent.Light[4]};
                }
            `:t?u`
                color: ${Mt.Neutral[4]};
            `:"today"===n?u`
                    background: ${Mt.Accent.Light[5]};
                `:void 0}}
`,un=c(on)`
    ${e=>{const{$hovered:t,$selected:r}=e;return t?u`
                border-top: 1px dashed ${Mt.Accent.Light[4]};
                border-bottom: 1px dashed ${Mt.Accent.Light[4]};
                background-color: ${Mt.Accent.Light[6]};
            `:r?u`
                border-top: 1px solid ${Mt.Primary};
                border-bottom: 1px solid ${Mt.Primary};
                background-color: ${Mt.Accent.Light[5]};
            `:void 0}}

    ${e=>{if(e.$overlap)return u`
                border-top: 1px solid ${Mt.Primary};
                border-bottom: 1px solid ${Mt.Primary};
                background-color: ${Mt.Neutral[8]};
                box-shadow: 4px 0px 4px 0px ${Mt.Shadow.Accent};
            `}}
`,hn=c.div`
    display: none;
    position: absolute;
    pointer-events: none;
    background-color: transparent;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;

    ::before {
        content: "";
        display: block;
        position: absolute;
        width: 1.75rem; // width must larger than half original width to cover middle border curve and border shadow
        pointer-events: none;
        height: 100%;
        top: 0;
    }

    ${e=>{if(e.$hovered)return u`
                border: 1px dashed ${Mt.Accent.Light[4]};

                ::before {
                    background-color: ${Mt.Accent.Light[6]};
                }
            `}}

    ${e=>{if(e.$selected)return u`
                border: 1px solid ${Mt.Primary};

                ::before {
                    background-color: ${Mt.Accent.Light[5]};
                }
            `}}

    ${e=>{if(e.$overlap)return u`
                ::before {
                    background-color: ${Mt.Neutral[8]};
                }
            `}}

    ${e=>e.$overlap&&"left"===e.$position?u`
                box-shadow: -1px 0px 4px 0px ${Mt.Shadow.Accent};
            `:e.$overlap&&"right"===e.$position?u`
                box-shadow: 1px 0px 4px 0px ${Mt.Shadow.Accent};
            `:void 0}

    ${e=>{switch(e.$position){case"left":return u`
                    display: block;

                    ::before {
                        left: 50%;
                    }
                `;case"right":return u`
                    display: block;

                    ::before {
                        right: 50%;
                    }
                `}}}
`,fn=c(sn)`
    ${e=>{const{$hovered:t,$selected:r,$position:n}=e;if(r){if("left"===n)return u`
                    background: ${Mt.Accent.Light[5]};
                `;if("right"===n)return u`
                    background: ${Mt.Accent.Light[5]};
                `}if(t)return u`
                background-color: ${Mt.Accent.Light[6]};
            `}}

    ${e=>{const{$overlap:t,$position:r}=e;if(t){if("left"===r)return u`
                    background-color: ${Mt.Neutral[8]};
                `;if("right"===r)return u`
                    background-color: ${Mt.Neutral[8]};
                `}}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?u`
                cursor: pointer;
            `:r?u`
                cursor: not-allowed;
            `:void 0}}
    
    ${e=>{const{$disabledDisplay:t,$overlap:r,$selected:n,$variant:i}=e;return t?u`
                color: ${Mt.Neutral[4]};
            `:"today"===i?r?u`
                    background: ${Mt.Neutral[8]};
                    height: 2.35rem;
                `:n?u`
                    height: 2.35rem;
                `:u`
                    background: ${Mt.Accent.Light[5]};
                `:void 0}}
`,pn=c(ln)`
    ${e=>{if("default"===e.$view)return u`
                z-index: 1;
            `}}
`,gn=({type:n,dayDate:i,currentView:a,variant:o,styleLeftProps:s,styleRightProps:l,styleCircleProps:c,styleLabelProps:d,styleOverflowCirleProps:u,onDayClick:h,onHoverCell:f})=>t(r,{children:(()=>{const r=i.format("YYYY-MM-DD");switch(n){case"regular":return e(an,{children:[t(cn,Object.assign({$position:"left"},s)),t(cn,Object.assign({$position:"right"},l)),t(dn,Object.assign({$variant:o,onClick:()=>h(i,!c.$interactive),onMouseEnter:()=>f(r,!c.$interactive)},c,{children:t(ln,Object.assign({weight:d.$selected?"semibold":"regular",$variant:o},d,{children:i.format("D")}))}))]});case"week":return e(an,{children:[t(un,Object.assign({$position:"left"},s)),t(un,Object.assign({$position:"right"},l)),t(fn,Object.assign({$variant:o,onClick:()=>h(i,!c.$interactive),onMouseEnter:()=>f(r,!c.$interactive)},c,u,{children:t(pn,Object.assign({weight:d.$selected?"semibold":"regular",$variant:o,$view:a},d,{children:i.format("D")}))})),t(hn,Object.assign({},c,u))]})}})()});var $n;Yt.extend(Tt),function(e){e.generateStyleProps=(e,t,r,n,i,a,o,s,l,c,d)=>{const u=e.format("YYYY-MM-DD"),h={},f={},p={},g={},$=mn(e,l,o,s),m=t&&r&&t===r;return!d&&["reset-start","reset-end"].includes(i)&&[t,r].includes(u)&&(p.$overlap=!0),($||yn(e,a,t,r,d))&&(p.$disabledDisplay=!0,g.$disabledDisplay=!0),p.$interactive=!$||c,[t,r].includes(u)&&(p.$selected=!0,g.$selected=!0),t&&r&&!m&&e.isBetween(t,r,"day","[]")&&(g.$selected=!0,e.isSame(t)?f.$selected=!0:e.isSame(r)?h.$selected=!0:(h.$selected=!0,f.$selected=!0)),"hover-start"===i&&e.isBetween(r,n,"day","[]")&&(g.$selected=!0,r===u?h.$hovered=!0:n===u?(f.$hovered=!0,p.$hovered=!0):(h.$hovered=!0,f.$hovered=!0)),"hover-end"===i&&e.isBetween(t,n,"day","[]")&&(g.$selected=!0,t===u?f.$hovered=!0:n===u?(h.$hovered=!0,p.$hovered=!0):(h.$hovered=!0,f.$hovered=!0)),"overlap-start"===i&&e.isBetween(r,n,"day","[]")&&(n===u?(f.$overlap=!0,p.$overlap=!0):r===u?(h.$overlap=!0,p.$overlap=!0,p.$hovered=!0):(h.$overlap=!0,f.$overlap=!0)),"overlap-end"===i&&e.isBetween(t,n,"day","[]")&&(n===u?(h.$overlap=!0,p.$overlap=!0):t===u?(f.$overlap=!0,p.$overlap=!0,p.$hovered=!0):(h.$overlap=!0,f.$overlap=!0)),"full-overlap-start"===i&&e.isBetween(r,n,"day","[]")&&(t===u&&m?(h.$hovered=!0,p.$overlap=!0):t===u?(h.$hovered=!0,f.$overlap=!0,p.$overlap=!0):r===u?(h.$overlap=!0,p.$overlap=!0):e.isSame(n)?(f.$hovered=!0,g.$selected=!0,p.$hovered=!0):e.isBetween(t,n,"day","()")&&(h.$hovered=!0,f.$hovered=!0,g.$selected=!0)),"full-overlap-end"===i&&e.isBetween(t,n,"day","[]")&&(r===u&&m?(f.$hovered=!0,p.$overlap=!0):r===u?(h.$overlap=!0,f.$hovered=!0,p.$overlap=!0):t===u?(f.$overlap=!0,p.$overlap=!0):e.isSame(n)?(h.$hovered=!0,g.$selected=!0,p.$hovered=!0):e.isBetween(r,n,"day","()")&&(h.$hovered=!0,f.$hovered=!0,g.$selected=!0)),["full-overlap-end","full-overlap-start"].includes(i)&&e.isBetween(t,r,"day","()")&&(h.$overlap=!0,f.$overlap=!0),{styleLeftProps:h,styleRightProps:f,styleCircleProps:p,styleLabelProps:g}},e.getStylePropsForWeekSelection=(e,t,r,n,i,a,o,s)=>{const l={},c={},d={},u={},h={},f=mn(e,o,i,a);if(f&&(d.$disabledDisplay=!0,u.$disabledDisplay=!0),d.$interactive=!f||s,t){const{firstDayOfWeek:r,lastDayOfWeek:n}=vn(t);e.isBetween(r,n,"day","[]")&&(u.$selected=!0,e.isSame(r)?(c.$selected=!0,d.$selected=!0,h.$position="left"):e.isSame(n)?(l.$selected=!0,d.$selected=!0,h.$position="right"):(l.$selected=!0,d.$selected=!0,c.$selected=!0))}if(n){const{firstDayOfWeek:t,lastDayOfWeek:r}=vn(n);e.isBetween(t,r,"day","[]")&&(u.$selected=!0,e.isSame(t)?(c.$hovered=!0,d.$hovered=!0,h.$position="left"):e.isSame(r)?(l.$hovered=!0,d.$hovered=!0,h.$position="right"):(l.$hovered=!0,c.$hovered=!0))}if(t&&r&&n&&e.isBetween(t,r,"day","[]")&&Yt(n).isBetween(t,r,"day","[]")){const{firstDayOfWeek:r,lastDayOfWeek:n}=vn(t);e.isBetween(r,n,"day","[]")&&(u.$selected=!0,e.isSame(r)?(c.$overlap=!0,d.$overlap=!0,h.$position="left"):e.isSame(n)?(l.$overlap=!0,d.$overlap=!0,h.$position="right"):(l.$overlap=!0,d.$overlap=!0,c.$overlap=!0))}return{styleLeftProps:l,styleRightProps:c,styleCircleProps:d,styleLabelProps:u,styleOverflowCirleProps:h}}}($n||($n={}));const mn=(e,t,r,n)=>{const i=Vt.isWithinRange(e,r?Yt(r):void 0,n?Yt(n):void 0),a=t&&t.includes(e.format("YYYY-MM-DD"));return!i||a},yn=(e,t,r,n,i)=>{const a="start"===t&&n&&e.isAfter(n)&&i,o="end"===t&&r&&e.isBefore(r)&&i;return a||o},vn=e=>({firstDayOfWeek:qt.toDayjs(e).startOf("week").format("YYYY-MM-DD"),lastDayOfWeek:qt.toDayjs(e).endOf("week").format("YYYY-MM-DD")});Yt.extend(Tt);const bn=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:s,selectedEndDate:l,onSelect:c,onHover:d,isNewSelection:u,minDate:h,maxDate:f,variant:p,allowDisabledSelection:g})=>{const $=i((()=>Vt.generateDays(r)),[r]),[m,y]=a(""),v=(e,t)=>{t&&!g||c(e)},b=(e,t)=>{t&&!g||(y(e),d(e))},D=()=>{y(""),d("")},S=(()=>{if(!m||"single"===p)return null;const e=Yt(m);if(s&&l)if(e.isBefore(s)){if("start"===n)return"full-overlap-start";if("end"===n)return"reset-end"}else if(e.isAfter(l)){if("end"===n)return"full-overlap-end";if("start"===n)return"reset-start"}else if(e.isBetween(s,l,"day","[]")&&![s,l].includes(m)){if("start"===n)return"overlap-start";if("end"===n)return"overlap-end"}if(s&&!l){if(e.isAfter(s)&&"end"===n)return"hover-end"}else if(!s&&l&&e.isBefore(l)&&"start"===n)return"hover-start";return null})();return e(tn,Object.assign({"data-testid":"calendar-content"},{children:[$[0].map(((e,r)=>t(rn,{children:t(br.H6,Object.assign({weight:"semibold"},{children:Yt(e).format("ddd")}))},`week-day-${r}`))),$.map(((e,i)=>t(nn,Object.assign({onMouseLeave:D},{children:e.map(((e,i)=>{const{variant:a}=(e=>({variant:r.month()!==e.month()?"other-month":Yt().isSame(e,"day")?"today":"default"}))(e),{styleLeftProps:c,styleRightProps:d,styleCircleProps:p,styleLabelProps:$}=$n.generateStyleProps(e,s,l,m,S,n,h,f,o,g,u);return t(gn,{type:"regular",dayDate:e,variant:a,styleLeftProps:c,styleRightProps:d,styleCircleProps:p,styleLabelProps:$,onDayClick:v,onHoverCell:b},`day-${i}`)}))}),i)))]}))},Dn=e=>{let t=Mt.Neutral[8],r="1px solid transparent";switch(e.$type){case"current":t=Mt.Accent.Light[5];break;case"hover-dash":t=Mt.Accent.Light[6],r=`1px dashed ${Mt.Accent.Light[4](e)}`;break;case"hover-current":t=Mt.Neutral[8],r=`1px solid ${Mt.Primary(e)}`;break;case"selected":t=Mt.Accent.Light[5],r=`1px solid ${Mt.Accent.Light[4](e)}`;break;case"selected-outline":t=Mt.Accent.Light[5],r=`1px solid ${Mt.Primary(e)}`;break;case"overlap":t=Mt.Accent.Light[4],r=`1px solid ${Mt.Accent.Light[4](e)}`;break;case"overlap-outline":t=Mt.Accent.Light[4],r=`1px solid ${Mt.Primary(e)}`}return{color:t,border:r}},Sn=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,wn=c.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:r}=Dn(e);return u`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${r};
            border-bottom: ${r};
        `}}
`,xn=c(wn)`
    left: 0;
`,Fn=c(wn)`
    right: 0;
`,Bn=c.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${Mt.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Hn=c(Bn)`
    left: 0;
`,On=c(Bn)`
    right: 0;
`,kn=c.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:r}=Dn(e);return u`
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
`,An=c(kn)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${Mt.Shadow.Accent};
    }
`,Mn=c(kn)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${Mt.Shadow.Accent};
    }
`,Ln=c(br.H5)`
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
                    ${yr("H5","semibold")};
                    color: ${Mt.Accent.Light[2]};
                `:u`
                color: ${Mt.Neutral[4]};
            `;switch(r){case"selected":return u`
                    ${yr("H5","semibold")};
                    color: ${Mt.Primary};
                `;case"current":return u`
                    color: ${Mt.Neutral[3]};
                `;case"unavailable":return u`
                    color: ${Mt.Neutral[4]};
                `;default:return u`
                    color: ${Mt.Neutral[1]};
                `}}}
`,Yn=({bgLeft:r,bgRight:n,circleLeft:i,circleRight:a,shadow:o,circleShadow:s,labelType:l,disabled:c,interactive:d,date:u,onSelect:h,onHover:f})=>e(Sn,{children:[t(Hn,{$shadow:r&&o}),t(xn,{$type:r,$shadow:r&&o}),t(An,{$type:i,$shadow:i&&s}),t(On,{$shadow:n&&o}),t(Fn,{$type:n,$shadow:n&&o}),t(Mn,{$type:a,$shadow:a&&s}),t(Ln,Object.assign({weight:"regular",$type:l,$disabled:c,$interactive:d,onClick:()=>{h(u)},onMouseEnter:()=>{f(u)}},{children:u.date()}))]}),jn=({date:e,calendarDate:r,selectedDate:n,hoverDate:i,minDate:a,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=Vt.isDisabledDay(e,s,a,o),h=!u||l,{start:f,end:p}=Vt.getWeekStartEnd(qt.toDayjs(n)),{start:g,end:$}=Vt.getWeekStartEnd(qt.toDayjs(i)),m=n&&e.isBetween(f,p,"day","[]"),y=i&&e.isBetween(g,$,"day","[]"),v=m&&e.isSame(f)||y&&e.isSame(g),b=m&&e.isSame(p)||y&&e.isSame($),D={date:e,calendarDate:r,disabled:u,interactive:h,onSelect:()=>{c(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(Yn,Object.assign({},D,(()=>{const t={};return m||y?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":Yt().isSame(e,"day")&&!u&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return m&&y?(t="hover-current",e.shadow=!0,e.circleShadow=v||b):m?t="selected-outline":y&&(t="hover-dash"),t&&(v?e.circleLeft=t:e.bgLeft=t,b?e.circleRight=t:e.bgRight=t),e})()))},zn=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:s,onHover:l,minDate:c,maxDate:d,allowDisabledSelection:u})=>{const h=i((()=>Vt.generateDays(r)),[r]),[f,p]=a(""),g=(e,t)=>{if(t&&!u)return;const r=e.startOf("week");s(r),e&&!Yt(e).isSame(r,"month")&&p("")},$=(e,t)=>{t&&!u||(p(e),l(e))},m=()=>{p(""),l("")};return e(tn,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,r)=>t(rn,{children:t(br.H6,Object.assign({weight:"semibold"},{children:Yt(e).format("ddd")}))},`week-day-${r}`))),h.map(((e,i)=>t(nn,Object.assign({onMouseLeave:m},{children:e.map(((e,i)=>t(jn,{date:e,calendarDate:r,selectedDate:o,hoverDate:f,minDate:c,maxDate:d,disabledDates:n,allowDisabledSelection:u,onSelect:g,onHover:$},`day-${i}`)))}),i)))]}))},En=c.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${Mt.Neutral[8]};

    ${e=>{if("input"===e.$type)return u`
                border: 1px solid ${Mt.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,Wn=n.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:i,onDismiss:a,value:l,endValue:c,currentFocus:d,withButton:u,variant:h,minDate:f,maxDate:p,allowDisabledSelection:g,type:$="standalone",selectWithinRange:m=!0,initialCalendarDate:y},v)=>{const b=o(),D=o(void 0);s(v,(()=>({reset(){b.current.resetView()},setCalendarDate(e){b.current.setCalendarDate(e)}})));const S=e=>{const t=e.format("YYYY-MM-DD");b.current.setCalendarDate(t),x(t)},w=e=>{F(e)},x=e=>{n&&n(e)},F=e=>{i&&i(e)},B=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(En,Object.assign({$type:$},{children:t(en,Object.assign({type:$,ref:b,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(h){case"single":e=!1;break;case"range":e=!!l!=!!c;break;case"week":e=!l&&!c}return e})(),onDismiss:a,minDate:f,maxDate:p,selectWithinRange:m,currentFocus:d,selectedStartDate:l,selectedEndDate:c,allowDisabledSelection:g,onCalendarDateChange:e=>{D.current&&D.current.isSame(e,"month")||B(e),D.current=e},initialCalendarDate:y},{children:({calendarDate:r,currentView:n})=>((r,n)=>{switch(h){case"single":case"range":default:return t(bn,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:l,selectedEndDate:c,variant:h,minDate:f,maxDate:p,isNewSelection:m,allowDisabledSelection:g,onSelect:S,onHover:w});case"week":return t(zn,{calendarDate:r,disabledDates:e,selectedStartDate:l,minDate:f,maxDate:p,allowDisabledSelection:g,onSelect:S,onHover:w})}})(r)}))}))})),Cn=e=>{var{className:r,styleType:n="bordered",value:i,onSelect:o}=e,s=$(e,["className","styleType","value","onSelect"]);const[c,d]=a(i);return l((()=>{d(i)}),[i]),t(Nn,Object.assign({className:r,$hasBorder:"bordered"===n},{children:t(Wn,Object.assign({type:"standalone",value:c,initialCalendarDate:c,onSelect:e=>{d(e),null==o||o(e)}},s))}))},Nn=c.div`
    width: 41rem;

    ${e=>{if(e.$hasBorder)return u`
                border: 1px solid ${Mt.Neutral[5](e)};
                border-radius: 12px;
                overflow: hidden;
            `}}
`;export{Cn as Calendar};
//# sourceMappingURL=index.js.map
