"use strict";var r,e,i=require("./_asciiWords.js"),u=require("./_hasUnicodeWord.js"),_=require("./toString.js"),o=require("./_unicodeWords.js");exports.__require=function(){if(e)return r;e=1;var s=i.__require(),t=u.__require(),n=_.__require(),q=o.__require();return r=function(r,e,i){return r=n(r),void 0===(e=i?void 0:e)?t(r)?q(r):s(r):r.match(e)||[]}};
//# sourceMappingURL=words.js.map
