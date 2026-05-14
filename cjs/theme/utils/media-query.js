"use strict";var e=require("../../external/react-responsive/dist/react-responsive.js");const r=/^-?\d*\.?\d+(px|rem)$/i,t="480px";exports.DEFAULT_MOBILE_MAX_WIDTH_BREAKPOINT=t,exports.useSafeMaxWidthMediaQuery=(s,i=t)=>{const a=(o=s)&&r.test(o.trim())?s.trim():i;var o;return e.reactResponsiveExports.useMediaQuery({maxWidth:a})};
//# sourceMappingURL=media-query.js.map
