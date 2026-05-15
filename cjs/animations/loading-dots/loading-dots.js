"use strict";var e=require("../../_virtual/_tslib.js"),t=require("react/jsx-runtime"),i=require("react");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(require("styled-components"));const s=i.lazy((()=>e.__awaiter(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.js")}))).LottieLoadingDots}})))),o=()=>t.jsx("div",{style:{height:"16px",width:"64px"}}),a=n.default.div`
    margin: 0 auto;
`;exports.LoadingDots=e=>t.jsx(a,Object.assign({},e,{children:t.jsx(i.Suspense,{fallback:t.jsx(o,{}),children:t.jsx(s,{})})}));
//# sourceMappingURL=loading-dots.js.map
