var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var t=Array.isArray,n="object"==typeof r&&r&&r.Object===Object&&r,a="object"==typeof self&&self&&self.Object===Object&&self,o=n||a||Function("return this")(),c=o.Symbol,F=c,i=Object.prototype,u=i.hasOwnProperty,d=i.toString,l=F?F.toStringTag:void 0;var B=function(r){var e=u.call(r,l),t=r[l];try{r[l]=void 0;var n=!0}catch(r){}var a=d.call(r);return n&&(e?r[l]=t:delete r[l]),a},s=Object.prototype.toString;var g=B,E=function(r){return s.call(r)},h=c?c.toStringTag:void 0;var D=function(r){return null==r?void 0===r?"[object Undefined]":"[object Null]":h&&h in Object(r)?g(r):E(r)};var f=D,v=function(r){return null!=r&&"object"==typeof r};var p=function(r){return"symbol"==typeof r||v(r)&&"[object Symbol]"==f(r)},y=t,A=p,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_=/^\w*$/;var b=function(r,e){if(y(r))return!1;var t=typeof r;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=r&&!A(r))||(_.test(r)||!C.test(r)||null!=e&&r in Object(e))};var k=function(r){var e=typeof r;return null!=r&&("object"==e||"function"==e)},T=D,x=k;var S,m=function(r){if(!x(r))return!1;var e=T(r);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},I=o["__core-js_shared__"],O=(S=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"";var w=function(r){return!!O&&O in r},j=Function.prototype.toString;var V=m,P=w,R=k,N=function(r){if(null!=r){try{return j.call(r)}catch(r){}try{return r+""}catch(r){}}return""},L=/^\[object .+?Constructor\]$/,z=Function.prototype,G=Object.prototype,$=z.toString,M=G.hasOwnProperty,U=RegExp("^"+$.call(M).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var q=function(r){return!(!R(r)||P(r))&&(V(r)?U:L).test(N(r))},H=function(r,e){return null==r?void 0:r[e]};var J=function(r,e){var t=H(r,e);return q(t)?t:void 0},K=J(Object,"create"),Q=K;var W=function(){this.__data__=Q?Q(null):{},this.size=0};var X=function(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e},Y=K,Z=Object.prototype.hasOwnProperty;var rr=function(r){var e=this.__data__;if(Y){var t=e[r];return"__lodash_hash_undefined__"===t?void 0:t}return Z.call(e,r)?e[r]:void 0},er=K,tr=Object.prototype.hasOwnProperty;var nr=K;var ar=W,or=X,cr=rr,Fr=function(r){var e=this.__data__;return er?void 0!==e[r]:tr.call(e,r)},ir=function(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=nr&&void 0===e?"__lodash_hash_undefined__":e,this};function ur(r){var e=-1,t=null==r?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}ur.prototype.clear=ar,ur.prototype.delete=or,ur.prototype.get=cr,ur.prototype.has=Fr,ur.prototype.set=ir;var dr=ur;var lr=function(){this.__data__=[],this.size=0};var Br=function(r,e){return r===e||r!=r&&e!=e};var sr=function(r,e){for(var t=r.length;t--;)if(Br(r[t][0],e))return t;return-1},gr=sr,Er=Array.prototype.splice;var hr=sr;var Dr=sr;var fr=sr;var vr=lr,pr=function(r){var e=this.__data__,t=gr(e,r);return!(t<0)&&(t==e.length-1?e.pop():Er.call(e,t,1),--this.size,!0)},yr=function(r){var e=this.__data__,t=hr(e,r);return t<0?void 0:e[t][1]},Ar=function(r){return Dr(this.__data__,r)>-1},Cr=function(r,e){var t=this.__data__,n=fr(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this};function _r(r){var e=-1,t=null==r?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}_r.prototype.clear=vr,_r.prototype.delete=pr,_r.prototype.get=yr,_r.prototype.has=Ar,_r.prototype.set=Cr;var br=_r,kr=J(o,"Map"),Tr=dr,xr=br,Sr=kr;var mr=function(r){var e=typeof r;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r};var Ir=function(r,e){var t=r.__data__;return mr(e)?t["string"==typeof e?"string":"hash"]:t.map},Or=Ir;var wr=Ir;var jr=Ir;var Vr=Ir;var Pr=function(){this.size=0,this.__data__={hash:new Tr,map:new(Sr||xr),string:new Tr}},Rr=function(r){var e=Or(this,r).delete(r);return this.size-=e?1:0,e},Nr=function(r){return wr(this,r).get(r)},Lr=function(r){return jr(this,r).has(r)},zr=function(r,e){var t=Vr(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this};function Gr(r){var e=-1,t=null==r?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Gr.prototype.clear=Pr,Gr.prototype.delete=Rr,Gr.prototype.get=Nr,Gr.prototype.has=Lr,Gr.prototype.set=zr;var $r=Gr;function Mr(r,e){if("function"!=typeof r||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=e?e.apply(this,n):n[0],o=t.cache;if(o.has(a))return o.get(a);var c=r.apply(this,n);return t.cache=o.set(a,c)||o,c};return t.cache=new(Mr.Cache||$r),t}Mr.Cache=$r;var Ur=Mr;var qr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hr=/\\(\\)?/g,Jr=function(r){var e=Ur(r,(function(r){return 500===t.size&&t.clear(),r})),t=e.cache;return e}((function(r){var e=[];return 46===r.charCodeAt(0)&&e.push(""),r.replace(qr,(function(r,t,n,a){e.push(n?a.replace(Hr,"$1"):t||r)})),e}));var Kr=function(r,e){for(var t=-1,n=null==r?0:r.length,a=Array(n);++t<n;)a[t]=e(r[t],t,r);return a},Qr=t,Wr=p,Xr=c?c.prototype:void 0,Yr=Xr?Xr.toString:void 0;var Zr=function r(e){if("string"==typeof e)return e;if(Qr(e))return Kr(e,r)+"";if(Wr(e))return Yr?Yr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},re=Zr;var ee=t,te=b,ne=Jr,ae=function(r){return null==r?"":re(r)};var oe=p;var ce=function(r,e){return ee(r)?r:te(r,e)?[r]:ne(ae(r))},Fe=function(r){if("string"==typeof r||oe(r))return r;var e=r+"";return"0"==e&&1/r==-1/0?"-0":e};var ie=function(r,e){for(var t=0,n=(e=ce(e,r)).length;null!=r&&t<n;)r=r[Fe(e[t++])];return t&&t==n?r:void 0};var ue=e((function(r,e,t){var n=null==r?void 0:ie(r,e);return void 0===n?t:n}));const de=(r,e,t)=>e?ue(t,e)||ue(r,e):t||r;var le;!function(r){r.colorScheme="colorScheme",r.layout="layout",r.textStyleScheme="textStyleScheme",r.designTokenScheme="designTokenScheme",r.resourceScheme="resourceScheme"}(le||(le={}));const Be={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},se=r=>e=>{const t=e.theme,n=((r,e)=>{const t=e||r.defaultValue;return ue(r.collections,t)})(Be,t[le.colorScheme]);return t.options&&t.options.color?de(n,r,t.options.color):de(n,r)},ge={Brand:{1:se("Brand.1"),2:se("Brand.2"),3:se("Brand.3"),4:se("Brand.4"),5:se("Brand.5"),6:se("Brand.6")},Primary:se("Primary"),PrimaryDark:se("PrimaryDark"),Secondary:se("Secondary"),Accent:{Light:{1:se("Accent.Light.1"),2:se("Accent.Light.2"),3:se("Accent.Light.3"),4:se("Accent.Light.4"),5:se("Accent.Light.5"),6:se("Accent.Light.6")},Dark:{1:se("Accent.Dark.1"),2:se("Accent.Dark.2"),3:se("Accent.Dark.3")}},Neutral:{1:se("Neutral.1"),2:se("Neutral.2"),3:se("Neutral.3"),4:se("Neutral.4"),5:se("Neutral.5"),6:se("Neutral.6"),7:se("Neutral.7"),8:se("Neutral.8")},Validation:{Green:{Text:se("Validation.Green.Text"),Icon:se("Validation.Green.Icon"),Border:se("Validation.Green.Border"),Background:se("Validation.Green.Background")},Orange:{Text:se("Validation.Orange.Text"),Icon:se("Validation.Orange.Icon"),Border:se("Validation.Orange.Border"),Background:se("Validation.Orange.Background"),Badge:se("Validation.Orange.Badge")},Red:{Text:se("Validation.Red.Text"),Icon:se("Validation.Red.Icon"),Border:se("Validation.Red.Border"),Background:se("Validation.Red.Background")},Blue:{Text:se("Validation.Blue.Text"),Icon:se("Validation.Blue.Icon"),Border:se("Validation.Blue.Border"),Background:se("Validation.Blue.Background")}},Shadow:{Accent:se("Shadow.Accent"),Red:se("Shadow.Red"),Elevation:se("Shadow.Elevation")}};export{ge as Color};
//# sourceMappingURL=index.js.map
