var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Array.isArray,e="object"==typeof r&&r&&r.Object===Object&&r,n="object"==typeof self&&self&&self.Object===Object&&self,o=e||n||Function("return this")(),a=o.Symbol,i=a,c=Object.prototype,u=c.hasOwnProperty,l=c.toString,d=i?i.toStringTag:void 0;var F=function(r){var t=u.call(r,d),e=r[d];try{r[d]=void 0;var n=!0}catch(r){}var o=l.call(r);return n&&(t?r[d]=e:delete r[d]),o},s=Object.prototype.toString;var h=F,f=function(r){return s.call(r)},B=a?a.toStringTag:void 0;var v=function(r){return null==r?void 0===r?"[object Undefined]":"[object Null]":B&&B in Object(r)?h(r):f(r)};var p=v,g=function(r){return null!=r&&"object"==typeof r};var y=function(r){return"symbol"==typeof r||g(r)&&"[object Symbol]"==p(r)},_=t,E=y,D=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/;var b=function(r,t){if(_(r))return!1;var e=typeof r;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=r&&!E(r))||(A.test(r)||!D.test(r)||null!=t&&r in Object(t))};var C=function(r){var t=typeof r;return null!=r&&("object"==t||"function"==t)},k=v,S=C;var m,O=function(r){if(!S(r))return!1;var t=k(r);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},T=o["__core-js_shared__"],x=(m=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+m:"";var j=function(r){return!!x&&x in r},w=Function.prototype.toString;var I=O,V=j,P=C,R=function(r){if(null!=r){try{return w.call(r)}catch(r){}try{return r+""}catch(r){}}return""},N=/^\[object .+?Constructor\]$/,z=Function.prototype,L=Object.prototype,G=z.toString,$=L.hasOwnProperty,M=RegExp("^"+G.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var U=function(r){return!(!P(r)||V(r))&&(I(r)?M:N).test(R(r))},q=function(r,t){return null==r?void 0:r[t]};var H=function(r,t){var e=q(r,t);return U(e)?e:void 0},J=H(Object,"create"),K=J;var Q=function(){this.__data__=K?K(null):{},this.size=0};var W=function(r){var t=this.has(r)&&delete this.__data__[r];return this.size-=t?1:0,t},X=J,Y=Object.prototype.hasOwnProperty;var Z=function(r){var t=this.__data__;if(X){var e=t[r];return"__lodash_hash_undefined__"===e?void 0:e}return Y.call(t,r)?t[r]:void 0},rr=J,tr=Object.prototype.hasOwnProperty;var er=J;var nr=Q,or=W,ar=Z,ir=function(r){var t=this.__data__;return rr?void 0!==t[r]:tr.call(t,r)},cr=function(r,t){var e=this.__data__;return this.size+=this.has(r)?0:1,e[r]=er&&void 0===t?"__lodash_hash_undefined__":t,this};function ur(r){var t=-1,e=null==r?0:r.length;for(this.clear();++t<e;){var n=r[t];this.set(n[0],n[1])}}ur.prototype.clear=nr,ur.prototype.delete=or,ur.prototype.get=ar,ur.prototype.has=ir,ur.prototype.set=cr;var lr=ur;var dr=function(){this.__data__=[],this.size=0};var Fr=function(r,t){return r===t||r!=r&&t!=t};var sr=function(r,t){for(var e=r.length;e--;)if(Fr(r[e][0],t))return e;return-1},hr=sr,fr=Array.prototype.splice;var Br=sr;var vr=sr;var pr=sr;var gr=dr,yr=function(r){var t=this.__data__,e=hr(t,r);return!(e<0)&&(e==t.length-1?t.pop():fr.call(t,e,1),--this.size,!0)},_r=function(r){var t=this.__data__,e=Br(t,r);return e<0?void 0:t[e][1]},Er=function(r){return vr(this.__data__,r)>-1},Dr=function(r,t){var e=this.__data__,n=pr(e,r);return n<0?(++this.size,e.push([r,t])):e[n][1]=t,this};function Ar(r){var t=-1,e=null==r?0:r.length;for(this.clear();++t<e;){var n=r[t];this.set(n[0],n[1])}}Ar.prototype.clear=gr,Ar.prototype.delete=yr,Ar.prototype.get=_r,Ar.prototype.has=Er,Ar.prototype.set=Dr;var br=Ar,Cr=H(o,"Map"),kr=lr,Sr=br,mr=Cr;var Or=function(r){var t=typeof r;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==r:null===r};var Tr=function(r,t){var e=r.__data__;return Or(t)?e["string"==typeof t?"string":"hash"]:e.map},xr=Tr;var jr=Tr;var wr=Tr;var Ir=Tr;var Vr=function(){this.size=0,this.__data__={hash:new kr,map:new(mr||Sr),string:new kr}},Pr=function(r){var t=xr(this,r).delete(r);return this.size-=t?1:0,t},Rr=function(r){return jr(this,r).get(r)},Nr=function(r){return wr(this,r).has(r)},zr=function(r,t){var e=Ir(this,r),n=e.size;return e.set(r,t),this.size+=e.size==n?0:1,this};function Lr(r){var t=-1,e=null==r?0:r.length;for(this.clear();++t<e;){var n=r[t];this.set(n[0],n[1])}}Lr.prototype.clear=Vr,Lr.prototype.delete=Pr,Lr.prototype.get=Rr,Lr.prototype.has=Nr,Lr.prototype.set=zr;var Gr=Lr;function $r(r,t){if("function"!=typeof r||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=t?t.apply(this,n):n[0],a=e.cache;if(a.has(o))return a.get(o);var i=r.apply(this,n);return e.cache=a.set(o,i)||a,i};return e.cache=new($r.Cache||Gr),e}$r.Cache=Gr;var Mr=$r;var Ur=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qr=/\\(\\)?/g,Hr=function(r){var t=Mr(r,(function(r){return 500===e.size&&e.clear(),r})),e=t.cache;return t}((function(r){var t=[];return 46===r.charCodeAt(0)&&t.push(""),r.replace(Ur,(function(r,e,n,o){t.push(n?o.replace(qr,"$1"):e||r)})),t}));var Jr=function(r,t){for(var e=-1,n=null==r?0:r.length,o=Array(n);++e<n;)o[e]=t(r[e],e,r);return o},Kr=t,Qr=y,Wr=a?a.prototype:void 0,Xr=Wr?Wr.toString:void 0;var Yr=function r(t){if("string"==typeof t)return t;if(Kr(t))return Jr(t,r)+"";if(Qr(t))return Xr?Xr.call(t):"";var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e},Zr=Yr;var rt=t,tt=b,et=Hr,nt=function(r){return null==r?"":Zr(r)};var ot=y;var at=function(r,t){return rt(r)?r:tt(r,t)?[r]:et(nt(r))},it=function(r){if("string"==typeof r||ot(r))return r;var t=r+"";return"0"==t&&1/r==-Infinity?"-0":t};var ct=function(r,t){for(var e=0,n=(t=at(t,r)).length;null!=r&&e<n;)r=r[it(t[e++])];return e&&e==n?r:void 0};var ut=function(r,t,e){var n=null==r?void 0:ct(r,t);return void 0===n?e:n};const lt=(r,t,e)=>t?ut(e,t)||ut(r,t):e||r;var dt;!function(r){r.colorScheme="colorScheme",r.layout="layout",r.textStyleScheme="textStyleScheme",r.designTokenScheme="designTokenScheme",r.resourceScheme="resourceScheme"}(dt||(dt={}));const Ft={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},st=r=>t=>{const e=t.theme,n=((r,t)=>{const e=t||r.defaultValue;return ut(r.collections,e)})(Ft,e[dt.colorScheme]);return e.options&&e.options.color?lt(n,r,e.options.color):lt(n,r)},ht={Brand:{1:st("Brand.1"),2:st("Brand.2"),3:st("Brand.3"),4:st("Brand.4"),5:st("Brand.5"),6:st("Brand.6")},Primary:st("Primary"),PrimaryDark:st("PrimaryDark"),Secondary:st("Secondary"),Accent:{Light:{1:st("Accent.Light.1"),2:st("Accent.Light.2"),3:st("Accent.Light.3"),4:st("Accent.Light.4"),5:st("Accent.Light.5"),6:st("Accent.Light.6")},Dark:{1:st("Accent.Dark.1"),2:st("Accent.Dark.2"),3:st("Accent.Dark.3")}},Neutral:{1:st("Neutral.1"),2:st("Neutral.2"),3:st("Neutral.3"),4:st("Neutral.4"),5:st("Neutral.5"),6:st("Neutral.6"),7:st("Neutral.7"),8:st("Neutral.8")},Validation:{Green:{Text:st("Validation.Green.Text"),Icon:st("Validation.Green.Icon"),Border:st("Validation.Green.Border"),Background:st("Validation.Green.Background")},Orange:{Text:st("Validation.Orange.Text"),Icon:st("Validation.Orange.Icon"),Border:st("Validation.Orange.Border"),Background:st("Validation.Orange.Background"),Badge:st("Validation.Orange.Badge")},Red:{Text:st("Validation.Red.Text"),Icon:st("Validation.Red.Icon"),Border:st("Validation.Red.Border"),Background:st("Validation.Red.Background")},Blue:{Text:st("Validation.Blue.Text"),Icon:st("Validation.Blue.Icon"),Border:st("Validation.Blue.Border"),Background:st("Validation.Blue.Background")}},Shadow:{Accent:st("Shadow.Accent"),Red:st("Shadow.Red"),Elevation:st("Shadow.Elevation")}};export{ht as Color};
//# sourceMappingURL=index.js.map
