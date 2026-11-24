"use strict";var r,e,i=require("./isArray.js"),u=require("./_isKey.js"),t=require("./_stringToPath.js"),_=require("./toString.js");exports.__require=function(){if(e)return r;e=1;var s=i.__require(),n=u.__require(),q=t.__require(),o=_.__require();return r=function(r,e){return s(r)?r:n(r,e)?[r]:q(o(r))}};
//# sourceMappingURL=_castPath.js.map
