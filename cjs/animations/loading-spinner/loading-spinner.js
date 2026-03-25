"use strict";var e=require("../../_virtual/_tslib.js"),i=require("react/jsx-runtime"),t=require("react"),r=require("styled-components"),n=require("../../v3_theme/index.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=a(r);const u=t.lazy((()=>e.__awaiter(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.js")}))).LottieSpinner}})))),o=()=>i.jsx("div",{style:{height:"200px",width:"200px"}}),d=s.default.div`
    margin: 0 auto;
    padding: ${n.V3_Spacing["spacing-32"]} ${n.V3_Spacing["spacing-16"]};
`;exports.LoadingSpinner=e=>i.jsx(d,Object.assign({},e,{children:i.jsx(t.Suspense,{fallback:i.jsx(o,{}),children:i.jsx(u,{})})}));
//# sourceMappingURL=loading-spinner.js.map
