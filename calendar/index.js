import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n,{useMemo as i,useState as a,useRef as o,useImperativeHandle as l,useEffect as s}from"react";import c,{keyframes as d,css as u}from"styled-components";import{ChevronDownIcon as h}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as f}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as p}from"@lifesg/react-icons/chevron-right";import{ExternalIcon as g}from"@lifesg/react-icons/external";var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},m=Array.isArray,y="object"==typeof $&&$&&$.Object===Object&&$,v="object"==typeof self&&self&&self.Object===Object&&self,D=y||v||Function("return this")(),b=D.Symbol,S=b,w=Object.prototype,F=w.hasOwnProperty,x=w.toString,B=S?S.toStringTag:void 0;var H=function(e){var t=F.call(e,B),r=e[B];try{e[B]=void 0;var n=!0}catch(e){}var i=x.call(e);return n&&(t?e[B]=r:delete e[B]),i},k=Object.prototype.toString;var M=H,A=function(e){return k.call(e)},L=b?b.toStringTag:void 0;var O=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":L&&L in Object(e)?M(e):A(e)};var Y=O,C=function(e){return null!=e&&"object"==typeof e};var z=function(e){return"symbol"==typeof e||C(e)&&"[object Symbol]"==Y(e)},E=m,_=z,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;var P=function(e,t){if(E(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!_(e))||(N.test(e)||!W.test(e)||null!=t&&e in Object(t))};var T=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},R=O,I=T;var j,V=function(e){if(!I(e))return!1;var t=R(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Z=D["__core-js_shared__"],U=(j=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var X=function(e){return!!U&&U in e},G=Function.prototype.toString;var J=V,q=X,Q=T,K=function(e){if(null!=e){try{return G.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ee=/^\[object .+?Constructor\]$/,te=Function.prototype,re=Object.prototype,ne=te.toString,ie=re.hasOwnProperty,ae=RegExp("^"+ne.call(ie).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(e){return!(!Q(e)||q(e))&&(J(e)?ae:ee).test(K(e))},le=function(e,t){return null==e?void 0:e[t]};var se=function(e,t){var r=le(e,t);return oe(r)?r:void 0},ce=se(Object,"create"),de=ce;var ue=function(){this.__data__=de?de(null):{},this.size=0};var he=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},fe=ce,pe=Object.prototype.hasOwnProperty;var ge=function(e){var t=this.__data__;if(fe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return pe.call(t,e)?t[e]:void 0},$e=ce,me=Object.prototype.hasOwnProperty;var ye=ce;var ve=ue,De=he,be=ge,Se=function(e){var t=this.__data__;return $e?void 0!==t[e]:me.call(t,e)},we=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ye&&void 0===t?"__lodash_hash_undefined__":t,this};function Fe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Fe.prototype.clear=ve,Fe.prototype.delete=De,Fe.prototype.get=be,Fe.prototype.has=Se,Fe.prototype.set=we;var xe=Fe;var Be=function(){this.__data__=[],this.size=0};var He=function(e,t){return e===t||e!=e&&t!=t};var ke=function(e,t){for(var r=e.length;r--;)if(He(e[r][0],t))return r;return-1},Me=ke,Ae=Array.prototype.splice;var Le=ke;var Oe=ke;var Ye=ke;var Ce=Be,ze=function(e){var t=this.__data__,r=Me(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ae.call(t,r,1),--this.size,!0)},Ee=function(e){var t=this.__data__,r=Le(t,e);return r<0?void 0:t[r][1]},_e=function(e){return Oe(this.__data__,e)>-1},We=function(e,t){var r=this.__data__,n=Ye(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ne(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ne.prototype.clear=Ce,Ne.prototype.delete=ze,Ne.prototype.get=Ee,Ne.prototype.has=_e,Ne.prototype.set=We;var Pe=Ne,Te=se(D,"Map"),Re=xe,Ie=Pe,je=Te;var Ve=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ze=function(e,t){var r=e.__data__;return Ve(t)?r["string"==typeof t?"string":"hash"]:r.map},Ue=Ze;var Xe=Ze;var Ge=Ze;var Je=Ze;var qe=function(){this.size=0,this.__data__={hash:new Re,map:new(je||Ie),string:new Re}},Qe=function(e){var t=Ue(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Xe(this,e).get(e)},et=function(e){return Ge(this,e).has(e)},tt=function(e,t){var r=Je(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function rt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}rt.prototype.clear=qe,rt.prototype.delete=Qe,rt.prototype.get=Ke,rt.prototype.has=et,rt.prototype.set=tt;var nt=rt;function it(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(it.Cache||nt),r}it.Cache=nt;var at=it;var ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,lt=/\\(\\)?/g,st=function(e){var t=at(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ot,(function(e,r,n,i){t.push(n?i.replace(lt,"$1"):r||e)})),t}));var ct=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},dt=m,ut=z,ht=b?b.prototype:void 0,ft=ht?ht.toString:void 0;var pt=function e(t){if("string"==typeof t)return t;if(dt(t))return ct(t,e)+"";if(ut(t))return ft?ft.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},gt=pt;var $t=m,mt=P,yt=st,vt=function(e){return null==e?"":gt(e)};var Dt=z;var bt=function(e,t){return $t(e)?e:mt(e,t)?[e]:yt(vt(e))},St=function(e){if("string"==typeof e||Dt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var wt=function(e,t){for(var r=0,n=(t=bt(t,e)).length;null!=e&&r<n;)e=e[St(t[r++])];return r&&r==n?e:void 0};var Ft=function(e,t,r){var n=null==e?void 0:wt(e,t);return void 0===n?r:n};const xt=(e,t,r)=>t?Ft(r,t)||Ft(e,t):r||e,Bt=(e,t)=>{const r=t||e.defaultValue;return Ft(e.collections,r)};var Ht;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ht||(Ht={}));const kt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Mt=e=>t=>{const r=t.theme,n=Bt(kt,r[Ht.colorScheme]);return r.options&&r.options.color?xt(n,e,r.options.color):xt(n,e)},At={Brand:{1:Mt("Brand.1"),2:Mt("Brand.2"),3:Mt("Brand.3"),4:Mt("Brand.4"),5:Mt("Brand.5"),6:Mt("Brand.6")},Primary:Mt("Primary"),PrimaryDark:Mt("PrimaryDark"),Secondary:Mt("Secondary"),Accent:{Light:{1:Mt("Accent.Light.1"),2:Mt("Accent.Light.2"),3:Mt("Accent.Light.3"),4:Mt("Accent.Light.4"),5:Mt("Accent.Light.5"),6:Mt("Accent.Light.6")},Dark:{1:Mt("Accent.Dark.1"),2:Mt("Accent.Dark.2"),3:Mt("Accent.Dark.3")}},Neutral:{1:Mt("Neutral.1"),2:Mt("Neutral.2"),3:Mt("Neutral.3"),4:Mt("Neutral.4"),5:Mt("Neutral.5"),6:Mt("Neutral.6"),7:Mt("Neutral.7"),8:Mt("Neutral.8")},Validation:{Green:{Text:Mt("Validation.Green.Text"),Icon:Mt("Validation.Green.Icon"),Border:Mt("Validation.Green.Border"),Background:Mt("Validation.Green.Background")},Orange:{Text:Mt("Validation.Orange.Text"),Icon:Mt("Validation.Orange.Icon"),Border:Mt("Validation.Orange.Border"),Background:Mt("Validation.Orange.Background"),Badge:Mt("Validation.Orange.Badge")},Red:{Text:Mt("Validation.Red.Text"),Icon:Mt("Validation.Red.Icon"),Border:Mt("Validation.Red.Border"),Background:Mt("Validation.Red.Background")},Blue:{Text:Mt("Validation.Blue.Text"),Icon:Mt("Validation.Blue.Icon"),Border:Mt("Validation.Blue.Border"),Background:Mt("Validation.Blue.Background")}},Shadow:{Accent:Mt("Shadow.Accent"),Red:Mt("Shadow.Red"),Elevation:Mt("Shadow.Elevation")}};var Lt={exports:{}};Lt.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",l="day",s="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},m=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:m,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+m(n,2,"0")+":"+m(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),a=r-i<0,o=t.clone().add(n+(a?-1:1),c);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:s,d:l,D:h,h:o,m:a,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",D={};D[v]=$;var b=function(e){return e instanceof x},S=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();D[a]&&(i=a),r&&(D[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var l=t.name;D[l]=t,i=l}return!n&&i&&(v=i),i||!n&&v},w=function(e,t){if(b(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new x(r)},F=y;F.l=S,F.i=b,F.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function $(e){this.$L=S(e.locale,null,!0),this.parse(e)}var m=$.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return F},m.isValid=function(){return!(this.$d.toString()===f)},m.isSame=function(e,t){var r=w(e);return this.startOf(t)<=r&&r<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,r){return F.u(e)?this[t]:this.set(r,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var r=this,n=!!F.u(t)||t,d=F.p(e),f=function(e,t){var i=F.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(l)},p=function(e,t){return F.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,$=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return n?f(1,0):f(31,11);case c:return n?f(1,$):f(0,$+1);case s:var v=this.$locale().weekStart||0,D=(g<v?g+7:g)-v;return f(n?m-D:m+(6-D),$);case l:case h:return p(y+"Hours",0);case o:return p(y+"Minutes",1);case a:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var r,s=F.p(e),d="set"+(this.$u?"UTC":""),f=(r={},r[l]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[a]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[s],p=s===l?this.$D+(t-this.$W):t;if(s===c||s===u){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[F.p(e)]()},m.add=function(n,d){var h,f=this;n=Number(n);var p=F.p(d),g=function(e){var t=w(f);return F.w(t.date(t.date()+Math.round(e*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===l)return g(1);if(p===s)return g(7);var $=(h={},h[a]=t,h[o]=r,h[i]=e,h)[p]||1,m=this.$d.getTime()+n*$;return F.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=F.z(this),a=this.$H,o=this.$m,l=this.$M,s=r.weekdays,c=r.months,d=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},u=function(e){return F.s(a%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:F.s(l+1,2,"0"),MMM:d(r.monthsShort,l,c,3),MMMM:d(c,l),D:this.$D,DD:F.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,s,2),ddd:d(r.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(a),HH:F.s(a,2,"0"),h:u(1),hh:u(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:F.s(o,2,"0"),s:String(this.$s),ss:F.s(this.$s,2,"0"),SSS:F.s(this.$ms,3,"0"),Z:i};return n.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,h,f){var p,g=F.p(h),$=w(n),m=($.utcOffset()-this.utcOffset())*t,y=this-$,v=F.m(this,$);return v=(p={},p[u]=v/12,p[c]=v,p[d]=v/3,p[s]=(y-m)/6048e5,p[l]=(y-m)/864e5,p[o]=y/r,p[a]=y/t,p[i]=y/e,p)[g]||y,f?v:F.a(v)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},m.clone=function(){return F.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},$}(),B=x.prototype;return w.prototype=B,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",l],["$M",c],["$y",u],["$D",h]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,x,w),e.$i=!0),w},w.locale=S,w.isDayjs=b,w.unix=function(e){return w(1e3*e)},w.en=D[v],w.Ls=D,w.p={},w}();var Ot=Lt.exports,Yt={exports:{}};Yt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,l("seconds")],ss:[n,l("seconds")],m:[n,l("minutes")],mm:[n,l("minutes")],H:[n,l("hours")],h:[n,l("hours")],HH:[n,l("hours")],hh:[n,l("hours")],D:[n,l("day")],DD:[r,l("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,l("month")],MM:[r,l("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),l=o.length,s=0;s<l;s+=1){var c=o[s],d=u[c],h=d&&d[0],f=d&&d[1];o[s]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<l;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,s=i.parser,c=e.slice(n),d=a.exec(c)[0];s.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var l=o[1];if("string"==typeof l){var s=!0===o[2],c=!0===o[3],d=s||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!s&&u&&(a=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,a=n.month,o=n.day,l=n.hours,s=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,f=new Date,p=o||(i||a?1:f.getDate()),g=i||f.getFullYear(),$=0;i&&!a||($=a>0?a-1:f.getMonth());var m=l||0,y=s||0,v=c||0,D=d||0;return u?new Date(Date.UTC(g,$,p,m,y,v,D+60*u.offset*1e3)):r?new Date(Date.UTC(g,$,p,m,y,v,D)):new Date(g,$,p,m,y,v,D)}catch(e){return new Date("")}}(t,l,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var f=l.length,p=1;p<=f;p+=1){o[1]=l[p-1];var g=r.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Ct,zt,Et=Yt.exports,_t={exports:{}},Wt=_t.exports=(Ct={year:0,month:1,day:2,hour:3,minute:4,second:5},zt={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=zt[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),zt[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var l=n[o],s=l.type,c=l.value,d=Ct[s];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],h=24===u?0:u,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),l=Math.round((a-new Date(o))/1e3/60),s=r(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=e,s},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var l=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,l=i||t||n,s=a(+r(),l);if("string"!=typeof e)return r(e).tz(l);var c=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),s,l),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=l,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}),Nt={exports:{}};Nt.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(a,n):!this.isBefore(a,n))&&(s?this.isBefore(o,n):!this.isAfter(o,n))||(l?this.isBefore(a,n):!this.isAfter(a,n))&&(s?this.isAfter(o,n):!this.isBefore(o,n))}};var Pt=Nt.exports,Tt={exports:{}};Tt.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Rt=Tt.exports,It={exports:{}};It.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var jt,Vt=It.exports;Ot.extend(Pt),Ot.extend(Rt),Ot.extend(Vt),Ot.extend(Et),Ot.extend(Wt),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Ot(t).startOf("week");return Zt(r).map((e=>Ut(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ut(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Ot(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Ot(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Ot(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")}}(jt||(jt={}));const Zt=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Ut=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Xt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Gt=e=>Object.keys(Xt).reduce(((t,r)=>{const n=Xt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Jt=Gt("max-width"),qt=(Gt("min-width"),c.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Qt=d`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Kt=c.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||At.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Qt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,er=c(Kt)`
    animation-delay: -0.45s;
`,tr=c(Kt)`
    animation-delay: -0.3s;
`,rr=c(Kt)`
    animation-delay: -0.15s;
`,nr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ir={collections:{base:{D1:{fontFamily:nr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:nr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:nr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:nr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:nr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:nr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:nr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:nr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:nr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:nr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:nr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:nr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:nr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:nr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},ar=e=>t=>{const r=t.theme,n=Bt(ir,r[Ht.textStyleScheme]);return r.options&&r.options.textStyle?xt(n,e,r.options.textStyle):xt(n,e)},or={D1:{fontFamily:ar("D1.fontFamily"),fontSize:ar("D1.fontSize"),fontWeight:ar("D1.fontWeight"),lineHeight:ar("D1.lineHeight"),letterSpacing:ar("D1.letterSpacing")},D2:{fontFamily:ar("D2.fontFamily"),fontSize:ar("D2.fontSize"),fontWeight:ar("D2.fontWeight"),lineHeight:ar("D2.lineHeight"),letterSpacing:ar("D2.letterSpacing")},D3:{fontFamily:ar("D3.fontFamily"),fontSize:ar("D3.fontSize"),fontWeight:ar("D3.fontWeight"),lineHeight:ar("D3.lineHeight"),letterSpacing:ar("D3.letterSpacing")},D4:{fontFamily:ar("D4.fontFamily"),fontSize:ar("D4.fontSize"),fontWeight:ar("D4.fontWeight"),lineHeight:ar("D4.lineHeight"),letterSpacing:ar("D4.letterSpacing")},DBody:{fontFamily:ar("DBody.fontFamily"),fontSize:ar("DBody.fontSize"),fontWeight:ar("DBody.fontWeight"),lineHeight:ar("DBody.lineHeight"),letterSpacing:ar("DBody.letterSpacing")},H1:{fontFamily:ar("H1.fontFamily"),fontSize:ar("H1.fontSize"),fontWeight:ar("H1.fontWeight"),lineHeight:ar("H1.lineHeight"),letterSpacing:ar("H1.letterSpacing")},H2:{fontFamily:ar("H2.fontFamily"),fontSize:ar("H2.fontSize"),fontWeight:ar("H2.fontWeight"),lineHeight:ar("H2.lineHeight"),letterSpacing:ar("H2.letterSpacing")},H3:{fontFamily:ar("H3.fontFamily"),fontSize:ar("H3.fontSize"),fontWeight:ar("H3.fontWeight"),lineHeight:ar("H3.lineHeight"),letterSpacing:ar("H3.letterSpacing")},H4:{fontFamily:ar("H4.fontFamily"),fontSize:ar("H4.fontSize"),fontWeight:ar("H4.fontWeight"),lineHeight:ar("H4.lineHeight"),letterSpacing:ar("H4.letterSpacing")},H5:{fontFamily:ar("H5.fontFamily"),fontSize:ar("H5.fontSize"),fontWeight:ar("H5.fontWeight"),lineHeight:ar("H5.lineHeight"),letterSpacing:ar("H5.letterSpacing")},H6:{fontFamily:ar("H6.fontFamily"),fontSize:ar("H6.fontSize"),fontWeight:ar("H6.fontWeight"),lineHeight:ar("H6.lineHeight"),letterSpacing:ar("H6.letterSpacing")},Body:{fontFamily:ar("Body.fontFamily"),fontSize:ar("Body.fontSize"),fontWeight:ar("Body.fontWeight"),lineHeight:ar("Body.lineHeight"),letterSpacing:ar("Body.letterSpacing")},BodySmall:{fontFamily:ar("BodySmall.fontFamily"),fontSize:ar("BodySmall.fontSize"),fontWeight:ar("BodySmall.fontWeight"),lineHeight:ar("BodySmall.lineHeight"),letterSpacing:ar("BodySmall.letterSpacing")},XSmall:{fontFamily:ar("XSmall.fontFamily"),fontSize:ar("XSmall.fontSize"),fontWeight:ar("XSmall.fontWeight"),lineHeight:ar("XSmall.lineHeight"),letterSpacing:ar("XSmall.letterSpacing")}},lr=e=>{switch(e){case 700:case"bold":return nr.Bold;case 600:case"semibold":return nr.Semibold;case 300:case"light":return nr.Light;case 400:case"regular":return nr.Regular;default:return""}},sr=(e,t)=>r=>{const n=or[e].fontFamily(r),i=or[e].fontWeight(r);return Object.values(nr).includes(n)?u`
                font-family: ${lr(t)||lr(i)||n};
                font-weight: normal !important;
            `:u`
            font-family: ${n};
            font-weight: ${(cr(t)||i)??"normal"};
        `},cr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},dr=(e,t,r=!1)=>n=>{const i=or[e],a=i.fontSize(n);return u`
            ${sr(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${u`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},ur=(e=!1,t=!1)=>t?u`
            display: block;
        `:e?u`
            display: inline;
        `:u`
            display: block;
        `;var hr;!function(e){e.D1=c.h1`
        ${e=>u`
                ${dr("D1",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${ur(e.inline,e.paragraph)}
            `}
    `,e.D2=c.h1`
        ${e=>u`
                ${dr("D2",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${ur(e.inline,e.paragraph)}
            `}
    `,e.D3=c.h1`
        ${e=>u`
                ${dr("D3",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${ur(e.inline,e.paragraph)}
            `}
    `,e.D4=c.h1`
        ${e=>u`
                ${dr("D4",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${ur(e.inline,e.paragraph)}
            `}
    `,e.DBody=c.h1`
        ${e=>u`
                ${dr("DBody",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${ur(e.inline,e.paragraph)}
            `}
    `,e.H1=c.h1`
        ${e=>u`
                ${dr("H1",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${ur(e.inline,e.paragraph)}
            `}
    `,e.H2=c.h2`
        ${e=>u`
                ${dr("H2",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${ur(e.inline,e.paragraph)}
            `}
    `,e.H3=c.h3`
        ${e=>u`
                ${dr("H3",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${ur(e.inline,e.paragraph)}
            `}
    `,e.H4=c.h4`
        ${e=>u`
                ${dr("H4",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${ur(e.inline,e.paragraph)}
            `}
    `,e.H5=c.h5`
        ${e=>u`
                ${dr("H5",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${ur(e.inline,e.paragraph)}
            `}
    `,e.H6=c.h6`
        ${e=>u`
                ${dr("H6",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${ur(e.inline,e.paragraph)}
            `}
    `,e.Body=c.p`
        ${e=>u`
                ${dr("Body",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${ur(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=c.p`
        ${e=>u`
                ${dr("BodySmall",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${ur(e.inline,e.paragraph)}
            `}
    `,e.XSmall=c.span`
        ${e=>u`
                ${dr("XSmall",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${ur(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>gr({...e,textStyle:"Body"}),Small:e=>gr({...e,textStyle:"BodySmall"})}}(hr||(hr={}));const fr=c.a`
    ${e=>u`
            ${dr(e.textStyle,e.weight)}
            color: ${At.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${At.Secondary};

                svg {
                    color: ${At.Secondary};
                }
            }
        `}
`,pr=c(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,gr=({external:r=!1,children:n,...i})=>e(fr,{...i,children:[n,r&&t(pr,{})]});var $r;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}($r||($r={}));const mr=c.button`
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
                    background-color: ${At.Neutral[8](e)};
                    border: 1px solid ${At.Primary(e)};

                    span {
                        color: ${At.Primary(e)};
                    }
                `;case"light":return u`
                    background-color: ${At.Neutral[8](e)};
                    border: 1px solid ${At.Neutral[5](e)};

                    span {
                        color: ${At.Primary(e)};
                    }
                `;case"disabled":return u`
                    background-color: ${At.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${At.Neutral[3](e)};
                    }
                `;case"link":return u`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${At.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${At.Secondary};
                        }
                    }
                `;default:return u`
                    background-color: ${At.Primary(e)};
                    border: 1px solid transparent;

                    ${Jt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${At.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?u`
                    height: 2.5rem;
                    span {
                        ${dr("H5","semibold")}
                    }

                    ${Jt.mobileS} {
                        height: auto;
                    }
                `:u`
                    height: 3rem;
                    span {
                        ${dr("H4","semibold")}
                    }

                    ${Jt.mobileS} {
                        height: auto;
                    }
                `}
`,yr=c((({color:r,className:n,size:i=18})=>e(qt,{className:n,$size:i,$color:r,children:[t(Kt,{id:"inner1",$size:i-2,$borderWidth:2}),t(er,{id:"inner2",$size:i-2,$borderWidth:2}),t(tr,{id:"inner3",$size:i-2,$borderWidth:2}),t(rr,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=At.Primary(e);break;case"disabled":t=At.Neutral[3](e);break;default:t=At.Neutral[8](e)}return u`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,vr={Default:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...s}=r,c={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default"};return e(mr,{ref:n,"data-testid":s["data-testid"]||"button",disabled:a,...c,...s,children:[o&&t(yr,{...c}),t("span",{children:i})]})})),Small:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...s}=r,c={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small"};return e(mr,{ref:n,"data-testid":s["data-testid"]||"button",disabled:a,...c,...s,children:[o&&t(yr,{...c,size:16}),t("span",{children:i})]})}))},Dr=c.button`
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
                background-color: ${At.Neutral[7]};
            `}
    }
`,br=n.forwardRef((({children:e,focusHighlight:r=!0,focusOutline:n="none",type:i="button",...a},o)=>t(Dr,{ref:o,$outline:n,$highlight:r,type:i,...a,children:e}))),Sr=u`
    color: ${At.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,wr=c(f)`
    ${Sr}
`,Fr=c(p)`
    ${Sr}
`,xr=c(h)`
    ${Sr}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Br=c.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Hr=c.div`
    display: flex;
    flex: 1;
    position: relative;
`,kr=c.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${At.Neutral[8]};

    ${e=>{if(!e.$visible)return u`
                display: none;
            `}}
`,Mr=c.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Ar=c.div`
    display: flex;
`,Lr=c.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?u`
                display: none;
            `:e.$expanded?u`
                ${xr} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Or=c.p`
    ${dr("H5","regular")}
`,Yr=c.div`
    display: flex;
`,Cr=c(br)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,zr=c.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Er=c(vr.Small)`
    flex: 1;
`,_r=c.div`
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
`,Wr=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?u`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${At.Shadow.Accent};
                    border: 1px solid ${At.Accent.Light[1]};
                }
            `:e.$disabledDisplay?u`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return u`
                    background-color: ${At.Accent.Light[6](e)};
                `;case"selected-month":return u`
                    background-color: ${At.Accent.Light[5](e)};
                    border: 1px solid ${At.Primary(e)};
                `}}}
`,Nr=c(hr.H5)`
    ${e=>{if(e.$disabledDisplay)return u`
                color: ${At.Neutral[4]};
            `;switch(e.$variant){case"current-month":return u`
                    color: ${At.Neutral[3](e)};
                `;case"selected-month":return u`
                    ${dr("H5","semibold")}
                    color: ${At.Primary(e)};
                `}}}
`,Pr=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:o,type:l,isNewSelection:s,minDate:c,maxDate:d,allowDisabledSelection:u,onMonthSelect:h})=>{const f=i((()=>jt.generateMonths(Ot(e))),[e]),p=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&s,i="end"===r&&n&&e.isBefore(n,"month")&&s;return t||i},g=e=>{const t=e.format("MMMM"),r=(n=e,!jt.isWithinRange(n,c?Ot(c):void 0,d?Ot(d):void 0,"month"));var n;const i=o.isSame(e,"month")?"selected-month":Ot().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||p(e),interactive:!r||u,month:t,variant:i}};return f.length?t(_r,{$type:l,children:f.map((e=>{const{disabledDisplay:r,interactive:n,variant:i,month:a}=g(e);return t(Wr,{$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||h(e)})(e,!n),children:t(Nr,{weight:"regular",$variant:i,$disabledDisplay:r,children:a})},a)}))}):null},Tr=c.div`
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
`,Rr=c.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?u`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${At.Shadow.Accent};
                    border: 1px solid ${At.Accent.Light[1]};
                }
            `:e.$disabledDisplay?u`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return u`
                    background: ${At.Accent.Light[6](e)};
                `;case"selected-year":return u`
                    background: ${At.Accent.Light[5](e)};
                    border: 1px solid ${At.Primary(e)};
                `}}};
`,Ir=c(hr.H5)`
    ${e=>{if(e.$disabledDisplay)return u`
                color: ${At.Neutral[4]};
            `;switch(e.$variant){case"current-year":return u`
                    color: ${At.Neutral[3](e)};
                `;case"selected-year":return u`
                    ${dr("H5","semibold")}
                    color: ${At.Primary(e)};
                `;case"other-decade":return u`
                    color: ${At.Neutral[4](e)};
                `}}}
`,jr=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:o,type:l,isNewSelection:s,minDate:c,maxDate:d,allowDisabledSelection:u,onYearSelect:h})=>{const f=i((()=>jt.generateDecadeOfYears(Ot(e))),[e]),p=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&s,i="end"===r&&n&&e.isBefore(n,"year")&&s;return t||i},g=e=>{const t=[0,11].includes(f.indexOf(e)),r=e.year(),n=(i=e,!jt.isWithinRange(i,c?Ot(c):void 0,d?Ot(d):void 0,"year"));var i;const a=t?"other-decade":o.isSame(e,"year")?"selected-year":Ot().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||p(e),interactive:!n||u,year:r,variant:a}};return f.length?t(Tr,{$type:l,children:f.map((e=>{const{disabledDisplay:r,interactive:n,variant:i,year:a}=g(e);return t(Rr,{$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||h(e)})(e,!n),children:t(Ir,{weight:"regular",$variant:i,$disabledDisplay:r,$interactive:n,children:a})},a)}))}):null},Vr=n.forwardRef((({children:n,initialCalendarDate:i,type:c,minDate:d,maxDate:u,currentFocus:h,selectedStartDate:f,selectedEndDate:p,selectWithinRange:g,dynamicHeight:$=!1,allowDisabledSelection:m,onCalendarDateChange:y,withButton:v,doneButtonDisabled:D,onDismiss:b,showNavigationHeader:S=!0,getLeftArrowDate:w,getRightArrowDate:F,isLeftArrowDisabled:x,isRightArrowDisabled:B,getMonthHeaderLabel:H,getYearHeaderLabel:k,...M},A)=>{const[L,O]=a(Ot(i)),[Y,C]=a(Ot(i)),[z,E]=a("default"),_=o(null),W=o(null),N=o();l(A,(()=>({defaultView(){E("default")},resetView(){const e=Ot(i);O(e),C(e),E("default")},setCalendarDate(e){const t=e?Ot(e):Ot();O(t),C(t)}}))),s((()=>{const e=i?Ot(i):Ot();O(e),C(e)}),[i]),s((()=>{Z(Y)}),[Y]);const P=()=>{"month-options"!==z?(E("month-options"),N.current.focus()):(E("default"),O(Y))},T=()=>{"default"!==z?(E("default"),O(Y)):E("year-options")},R=()=>{N.current.focus();const e=w?w(L):L.subtract(1,"month");switch(z){case"default":C(e),O(e);break;case"month-options":O((e=>e.subtract(1,"year")));break;case"year-options":O((e=>e.subtract(10,"year")))}},I=()=>{N.current.focus();const e=F?F(L):L.add(1,"month");switch(z){case"default":C(e),O(e);break;case"month-options":O((e=>e.add(1,"year")));break;case"year-options":O((e=>e.add(10,"year")))}},j=e=>{O(e),C(e)},V=()=>{O(Ot(i)),C(Ot(i)),"default"===z?U("reset"):E("default")},Z=e=>{y&&y(e)},U=e=>{b&&b(e)},X=()=>{if(!d||m)return!1;const e=Ot(d);return"month-options"===z?!jt.isPreviousYearWithinRange(L,e):"year-options"===z?!jt.isPreviousDecadeWithinRange(L,e):x?x(L):!jt.isPreviousMonthWithinRange(L,e)},G=()=>{if(!u||m)return!1;const e=Ot(u);return"month-options"===z?!jt.isNextYearWithinRange(L,e):"year-options"===z?!jt.isNextDecadeWithinRange(L,e):B?B(L):!jt.isNextMonthWithinRange(L,e)},J=()=>{if("year-options"===z){const{beginDecade:e,endDecade:t}=jt.getStartEndDecade(L);return`${e} to ${t}`}return k?k(L):Ot(L).format("YYYY")},q=()=>{const n=H?H(L):Ot(L).format("MMM");return e(r,{children:[e(Lr,{type:"button",tabIndex:-1,$expanded:"month-options"===z,$visible:"default"===z,id:"month-dropdown",onClick:P,children:[t(Or,{children:n}),t(xr,{})]}),e(Lr,{type:"button",tabIndex:-1,$expanded:"default"!==z,id:"year-dropdown",onClick:T,children:[t(Or,{children:J()}),t(xr,{})]})]})},Q=()=>{switch(z){case"month-options":return t(Pr,{type:c,calendarDate:L,currentFocus:h,minDate:d,maxDate:u,selectedStartDate:f,selectedEndDate:p,viewCalendarDate:Y,isNewSelection:g,onMonthSelect:j,allowDisabledSelection:m});case"year-options":return t(jr,{type:c,calendarDate:L,currentFocus:h,minDate:d,maxDate:u,selectedStartDate:f,selectedEndDate:p,viewCalendarDate:Y,isNewSelection:g,onYearSelect:j,allowDisabledSelection:m});default:return null}};return e(Br,{ref:N,tabIndex:-1,"data-id":"calendar-container","data-testid":"calendar-container",...M,children:[S&&e(Mr,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(Ar,{children:q()}),e(Yr,{children:[t(Cr,{"data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,tabIndex:-1,onClick:R,children:t(wr,{})}),t(Cr,{"data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:I,children:t(Fr,{})})]})]}),t(Hr,{children:(()=>{const i="function"==typeof n?n({calendarDate:Y,currentView:z}):n;return e(r,$?{children:["default"===z&&i,Q()]}:{children:[i,t(kr,{$visible:"default"!==z,children:Q()})]})})()}),(()=>{if(!v)return;const r=!!("default"===z)&&D;return e(zr,{children:[t(Er,{ref:W,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:V,children:"Cancel"}),t(Er,{"data-testid":"done-button",ref:_,type:"button",onClick:()=>(e=>{e||(O(Y),"default"===z?U("confirmed"):E("default"))})(r),disabled:r,children:"Done"})]})})()]})})),Zr=c.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Ur=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,Xr=c.div`
    grid-column: 1 / -1;
    display: flex;
`,Gr=c.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,Jr=c.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return u`
                    left: 0;
                `;case"right":return u`
                    right: 0;
                `}}}
`,qr=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`,Qr=c(hr.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:r,$variant:n}=e;if(t&&r)return u`
                ${dr("H5","semibold")};
                color: ${At.Accent.Light[2]};
            `;if(t)return u`
                color: ${At.Neutral[4]};
            `;if(r)return u`
                ${dr("H5","semibold")};
                color: ${At.Primary};
            `;switch(n){case"other-month":return u`
                    color: ${At.Neutral[4]};
                `;case"today":return u`
                    color: ${At.Neutral[3]};
                `;case"default":return u`
                    color: ${At.Neutral[1]};
                `}}}
`,Kr=c(Jr)`
    ${e=>{const{$selected:t}=e;if(t)return u`
                border-top: 1px solid ${At.Accent.Light[4]};
                border-bottom: 1px solid ${At.Accent.Light[4]};
                background-color: ${At.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:r}=e;return t?u`
                border-top: 1px dashed ${At.Accent.Light[4]};
                border-bottom: 1px dashed ${At.Accent.Light[4]};
                background-color: ${At.Accent.Light[6]};
            `:r?u`
                background-color: ${At.Accent.Light[4]};
            `:void 0}}
`,en=c(qr)`
    ${e=>{const{$hovered:t,$selected:r}=e;return r?u`
                background: ${At.Accent.Light[5]};
                border: 1px solid ${At.Primary};
            `:t?u`
                box-shadow: 0px 0px 4px 1px ${At.Shadow.Accent};
                border: 1px solid ${At.Accent.Light[1]};
                background-color: ${At.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?u`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${At.Shadow.Accent};
                    border: 1px solid ${At.Accent.Light[1]};
                    background-color: ${At.Neutral[8]};
                }
            `:r?u`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:r,$variant:n}=e;return r?u`
                border: 1px solid ${At.Accent.Light[1]};
                background: ${At.Accent.Light[4]};

                :hover {
                    background: ${At.Accent.Light[4]};
                }
            `:t?u`
                color: ${At.Neutral[4]};
            `:"today"===n?u`
                    background: ${At.Accent.Light[5]};
                `:void 0}}
`,tn=c(Jr)`
    ${e=>{const{$hovered:t,$selected:r}=e;return t?u`
                border-top: 1px dashed ${At.Accent.Light[4]};
                border-bottom: 1px dashed ${At.Accent.Light[4]};
                background-color: ${At.Accent.Light[6]};
            `:r?u`
                border-top: 1px solid ${At.Primary};
                border-bottom: 1px solid ${At.Primary};
                background-color: ${At.Accent.Light[5]};
            `:void 0}}

    ${e=>{if(e.$overlap)return u`
                border-top: 1px solid ${At.Primary};
                border-bottom: 1px solid ${At.Primary};
                background-color: ${At.Neutral[8]};
                box-shadow: 4px 0px 4px 0px ${At.Shadow.Accent};
            `}}
`,rn=c.div`
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
                border: 1px dashed ${At.Accent.Light[4]};

                ::before {
                    background-color: ${At.Accent.Light[6]};
                }
            `}}

    ${e=>{if(e.$selected)return u`
                border: 1px solid ${At.Primary};

                ::before {
                    background-color: ${At.Accent.Light[5]};
                }
            `}}

    ${e=>{if(e.$overlap)return u`
                ::before {
                    background-color: ${At.Neutral[8]};
                }
            `}}

    ${e=>e.$overlap&&"left"===e.$position?u`
                box-shadow: -1px 0px 4px 0px ${At.Shadow.Accent};
            `:e.$overlap&&"right"===e.$position?u`
                box-shadow: 1px 0px 4px 0px ${At.Shadow.Accent};
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
`,nn=c(qr)`
    ${e=>{const{$hovered:t,$selected:r,$position:n}=e;if(r){if("left"===n)return u`
                    background: ${At.Accent.Light[5]};
                `;if("right"===n)return u`
                    background: ${At.Accent.Light[5]};
                `}if(t)return u`
                background-color: ${At.Accent.Light[6]};
            `}}

    ${e=>{const{$overlap:t,$position:r}=e;if(t){if("left"===r)return u`
                    background-color: ${At.Neutral[8]};
                `;if("right"===r)return u`
                    background-color: ${At.Neutral[8]};
                `}}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?u`
                cursor: pointer;
            `:r?u`
                cursor: not-allowed;
            `:void 0}}
    
    ${e=>{const{$disabledDisplay:t,$overlap:r,$selected:n,$variant:i}=e;return t?u`
                color: ${At.Neutral[4]};
            `:"today"===i?r?u`
                    background: ${At.Neutral[8]};
                    height: 2.35rem;
                `:n?u`
                    height: 2.35rem;
                `:u`
                    background: ${At.Accent.Light[5]};
                `:void 0}}
`,an=c(Qr)`
    ${e=>{if("default"===e.$view)return u`
                z-index: 1;
            `}}
`,on=({type:n,dayDate:i,currentView:a,variant:o,styleLeftProps:l,styleRightProps:s,styleCircleProps:c,styleLabelProps:d,styleOverflowCirleProps:u,onDayClick:h,onHoverCell:f})=>t(r,{children:(()=>{const r=i.format("YYYY-MM-DD");switch(n){case"regular":return e(Gr,{children:[t(Kr,{$position:"left",...l}),t(Kr,{$position:"right",...s}),t(en,{$variant:o,onClick:()=>h(i,!c.$interactive),onMouseEnter:()=>f(r,!c.$interactive),...c,children:t(Qr,{weight:d.$selected?"semibold":"regular",$variant:o,...d,children:i.format("D")})})]});case"week":return e(Gr,{children:[t(tn,{$position:"left",...l}),t(tn,{$position:"right",...s}),t(nn,{$variant:o,onClick:()=>h(i,!c.$interactive),onMouseEnter:()=>f(r,!c.$interactive),...c,...u,children:t(an,{weight:d.$selected?"semibold":"regular",$variant:o,$view:a,...d,children:i.format("D")})}),t(rn,{...c,...u})]})}})()}),ln=[1,3,5,7,8,10,12],sn=[4,6,9,11];var cn,dn,un,hn;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":ln.includes(a)?Math.min(i,31).toString():sn.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Ot(e,r);return Ot(t,r).diff(n,"minute")}}(cn||(cn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(dn||(dn={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(un||(un={})),Ot.extend(Pt),function(e){e.generateStyleProps=(e,t,r,n,i,a,o,l,s,c,d)=>{const u=e.format("YYYY-MM-DD"),h={},f={},p={},g={},$=fn(e,s,o,l),m=t&&r&&t===r;return!d&&["reset-start","reset-end"].includes(i)&&[t,r].includes(u)&&(p.$overlap=!0),($||pn(e,a,t,r,d))&&(p.$disabledDisplay=!0,g.$disabledDisplay=!0),p.$interactive=!$||c,[t,r].includes(u)&&(p.$selected=!0,g.$selected=!0),t&&r&&!m&&e.isBetween(t,r,"day","[]")&&(g.$selected=!0,e.isSame(t)?f.$selected=!0:e.isSame(r)?h.$selected=!0:(h.$selected=!0,f.$selected=!0)),"hover-start"===i&&e.isBetween(r,n,"day","[]")&&(g.$selected=!0,r===u?h.$hovered=!0:n===u?(f.$hovered=!0,p.$hovered=!0):(h.$hovered=!0,f.$hovered=!0)),"hover-end"===i&&e.isBetween(t,n,"day","[]")&&(g.$selected=!0,t===u?f.$hovered=!0:n===u?(h.$hovered=!0,p.$hovered=!0):(h.$hovered=!0,f.$hovered=!0)),"overlap-start"===i&&e.isBetween(r,n,"day","[]")&&(n===u?(f.$overlap=!0,p.$overlap=!0):r===u?(h.$overlap=!0,p.$overlap=!0,p.$hovered=!0):(h.$overlap=!0,f.$overlap=!0)),"overlap-end"===i&&e.isBetween(t,n,"day","[]")&&(n===u?(h.$overlap=!0,p.$overlap=!0):t===u?(f.$overlap=!0,p.$overlap=!0,p.$hovered=!0):(h.$overlap=!0,f.$overlap=!0)),"full-overlap-start"===i&&e.isBetween(r,n,"day","[]")&&(t===u&&m?(h.$hovered=!0,p.$overlap=!0):t===u?(h.$hovered=!0,f.$overlap=!0,p.$overlap=!0):r===u?(h.$overlap=!0,p.$overlap=!0):e.isSame(n)?(f.$hovered=!0,g.$selected=!0,p.$hovered=!0):e.isBetween(t,n,"day","()")&&(h.$hovered=!0,f.$hovered=!0,g.$selected=!0)),"full-overlap-end"===i&&e.isBetween(t,n,"day","[]")&&(r===u&&m?(f.$hovered=!0,p.$overlap=!0):r===u?(h.$overlap=!0,f.$hovered=!0,p.$overlap=!0):t===u?(f.$overlap=!0,p.$overlap=!0):e.isSame(n)?(h.$hovered=!0,g.$selected=!0,p.$hovered=!0):e.isBetween(r,n,"day","()")&&(h.$hovered=!0,f.$hovered=!0,g.$selected=!0)),["full-overlap-end","full-overlap-start"].includes(i)&&e.isBetween(t,r,"day","()")&&(h.$overlap=!0,f.$overlap=!0),{styleLeftProps:h,styleRightProps:f,styleCircleProps:p,styleLabelProps:g}},e.getStylePropsForWeekSelection=(e,t,r,n,i,a,o,l)=>{const s={},c={},d={},u={},h={},f=fn(e,o,i,a);if(f&&(d.$disabledDisplay=!0,u.$disabledDisplay=!0),d.$interactive=!f||l,t){const{firstDayOfWeek:r,lastDayOfWeek:n}=gn(t);e.isBetween(r,n,"day","[]")&&(u.$selected=!0,e.isSame(r)?(c.$selected=!0,d.$selected=!0,h.$position="left"):e.isSame(n)?(s.$selected=!0,d.$selected=!0,h.$position="right"):(s.$selected=!0,d.$selected=!0,c.$selected=!0))}if(n){const{firstDayOfWeek:t,lastDayOfWeek:r}=gn(n);e.isBetween(t,r,"day","[]")&&(u.$selected=!0,e.isSame(t)?(c.$hovered=!0,d.$hovered=!0,h.$position="left"):e.isSame(r)?(s.$hovered=!0,d.$hovered=!0,h.$position="right"):(s.$hovered=!0,c.$hovered=!0))}if(t&&r&&n&&e.isBetween(t,r,"day","[]")&&Ot(n).isBetween(t,r,"day","[]")){const{firstDayOfWeek:r,lastDayOfWeek:n}=gn(t);e.isBetween(r,n,"day","[]")&&(u.$selected=!0,e.isSame(r)?(c.$overlap=!0,d.$overlap=!0,h.$position="left"):e.isSame(n)?(s.$overlap=!0,d.$overlap=!0,h.$position="right"):(s.$overlap=!0,d.$overlap=!0,c.$overlap=!0))}return{styleLeftProps:s,styleRightProps:c,styleCircleProps:d,styleLabelProps:u,styleOverflowCirleProps:h}}}(hn||(hn={}));const fn=(e,t,r,n)=>{const i=jt.isWithinRange(e,r?Ot(r):void 0,n?Ot(n):void 0),a=t&&t.includes(e.format("YYYY-MM-DD"));return!i||a},pn=(e,t,r,n,i)=>{const a="start"===t&&n&&e.isAfter(n)&&i,o="end"===t&&r&&e.isBefore(r)&&i;return a||o},gn=e=>({firstDayOfWeek:Ot(e).startOf("week").format("YYYY-MM-DD"),lastDayOfWeek:Ot(e).endOf("week").format("YYYY-MM-DD")});Ot.extend(Pt);const $n=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:l,selectedEndDate:s,onSelect:c,onHover:d,isNewSelection:u,minDate:h,maxDate:f,variant:p,allowDisabledSelection:g})=>{const $=i((()=>jt.generateDays(r)),[r]),[m,y]=a(""),v=(e,t)=>{t&&!g||c(e)},D=(e,t)=>{t&&!g||(y(e),d(e))},b=()=>{y(""),d("")},S=(()=>{if(!m||"single"===p)return null;const e=Ot(m);if(l&&s)if(e.isBefore(l)){if("start"===n)return"full-overlap-start";if("end"===n)return"reset-end"}else if(e.isAfter(s)){if("end"===n)return"full-overlap-end";if("start"===n)return"reset-start"}else if(e.isBetween(l,s,"day","[]")&&![l,s].includes(m)){if("start"===n)return"overlap-start";if("end"===n)return"overlap-end"}if(l&&!s){if(e.isAfter(l)&&"end"===n)return"hover-end"}else if(!l&&s&&e.isBefore(s)&&"start"===n)return"hover-start";return null})();return e(Zr,{"data-testid":"calendar-content",children:[$[0].map(((e,r)=>t(Ur,{children:t(hr.H6,{weight:"semibold",children:Ot(e).format("ddd")})},`week-day-${r}`))),$.map(((e,i)=>t(Xr,{onMouseLeave:b,children:e.map(((e,i)=>{const{variant:a}=(e=>({variant:r.month()!==e.month()?"other-month":Ot().isSame(e,"day")?"today":"default"}))(e),{styleLeftProps:c,styleRightProps:d,styleCircleProps:p,styleLabelProps:$}=hn.generateStyleProps(e,l,s,m,S,n,h,f,o,g,u);return t(on,{type:"regular",dayDate:e,variant:a,styleLeftProps:c,styleRightProps:d,styleCircleProps:p,styleLabelProps:$,onDayClick:v,onHoverCell:D},`day-${i}`)}))},i)))]})},mn=({calendarDate:r,disabledDates:n,selectedStartDate:o,selectedEndDate:l,onSelect:s,onHover:c,minDate:d,maxDate:u,currentView:h,allowDisabledSelection:f})=>{const p=i((()=>jt.generateDays(r)),[r]),[g,$]=a(""),m=(e,t)=>{if(t&&!f)return;const r=e.startOf("week");s(r),e&&!Ot(e).isSame(r,"month")&&$("")},y=(e,t)=>{t&&!f||($(e),c(e))},v=()=>{$(""),c("")};return e(Zr,{"data-testid":"calendar-content",children:[p[0].map(((e,r)=>t(Ur,{children:t(hr.H6,{weight:"semibold",children:Ot(e).format("ddd")})},`week-day-${r}`))),p.map(((e,i)=>t(Xr,{onMouseLeave:v,children:e.map(((e,i)=>{const{variant:a}=(e=>({variant:r.month()!==e.month()?"other-month":Ot().isSame(e,"day")?"today":"default"}))(e),{styleLeftProps:s,styleRightProps:c,styleCircleProps:p,styleLabelProps:$,styleOverflowCirleProps:v}=hn.getStylePropsForWeekSelection(e,o,l,g,d,u,n,f);return t(on,{type:"week",dayDate:e,variant:a,currentView:h,styleLeftProps:s,styleRightProps:c,styleCircleProps:p,styleLabelProps:$,styleOverflowCirleProps:v,onDayClick:m,onHoverCell:y},`day-${i}`)}))},i)))]})},yn=c.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${At.Neutral[8]};

    ${e=>{if("input"===e.$type)return u`
                border: 1px solid ${At.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,vn=n.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:i,onDismiss:a,value:s,endValue:c,currentFocus:d,withButton:u,variant:h,minDate:f,maxDate:p,allowDisabledSelection:g,type:$="standalone",selectWithinRange:m=!0,initialCalendarDate:y},v)=>{const D=o(),b=o(void 0);l(v,(()=>({reset(){D.current.resetView()},setCalendarDate(e){D.current.setCalendarDate(e)}})));const S=e=>{const t=e.format("YYYY-MM-DD");D.current.setCalendarDate(t),F(t)},w=e=>{x(e)},F=e=>{n&&n(e)},x=e=>{i&&i(e)},B=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(yn,{$type:$,children:t(Vr,{type:$,ref:D,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(h){case"single":e=!1;break;case"range":e=!!s!=!!c;break;case"week":e=!s&&!c}return e})(),onDismiss:a,minDate:f,maxDate:p,selectWithinRange:m,currentFocus:d,selectedStartDate:s,selectedEndDate:c,allowDisabledSelection:g,onCalendarDateChange:e=>{b.current&&b.current.isSame(e,"month")||B(e),b.current=e},initialCalendarDate:y,children:({calendarDate:r,currentView:n})=>((r,n)=>{switch(h){case"single":case"range":default:return t($n,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:c,variant:h,minDate:f,maxDate:p,isNewSelection:m,allowDisabledSelection:g,onSelect:S,onHover:w});case"week":return t(mn,{calendarDate:r,disabledDates:e,selectedStartDate:s,selectedEndDate:c,minDate:f,maxDate:p,currentView:n,allowDisabledSelection:g,onSelect:S,onHover:w})}})(r,n)})})})),Dn=({className:e,styleType:r="bordered",value:n,onSelect:i,...o})=>{const[l,c]=a(n);return s((()=>{c(n)}),[n]),t(bn,{className:e,$hasBorder:"bordered"===r,children:t(vn,{type:"standalone",value:l,initialCalendarDate:l,onSelect:e=>{c(e),i?.(e)},...o})})},bn=c.div`
    width: 41rem;

    ${e=>{if(e.$hasBorder)return u`
                border: 1px solid ${At.Neutral[5](e)};
                border-radius: 12px;
                overflow: hidden;
            `}}
`;export{Dn as Calendar};
//# sourceMappingURL=index.js.map
