"use strict";var e=require("./_MapCache.js"),a=require("./_setCacheAdd.js"),t=require("./_setCacheHas.js"),s=e._MapCache,r=a._setCacheAdd,h=t._setCacheHas;function _(e){var a=-1,t=null==e?0:e.length;for(this.__data__=new s;++a<t;)this.add(e[a])}_.prototype.add=_.prototype.push=r,_.prototype.has=h;var p=_;exports._SetCache=p;
//# sourceMappingURL=_SetCache.js.map
