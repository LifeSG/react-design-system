import{__awaiter as o,__rest as t}from"../../_virtual/_tslib.js";import{jsx as r}from"react/jsx-runtime";import{lazy as i,useContext as e,Suspense as n}from"react";import m,{ThemeContext as l}from"styled-components";import{V3_ThemeAnimation as s}from"../../v3_theme/components/theme-helper.js";const c=i((()=>o(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.js")).LottieLoadingDotsSpinner}})))),a=o=>{var{color:i}=o,m=t(o,["color"]);const a=e(l),h=i||s["loading-dots-spinner-colour"]({theme:a});return r(p,Object.assign({},m,{children:r(n,{fallback:r(d,{}),children:r(c,{color:h})})}))},d=()=>r("div",{style:{height:"200px",width:"200px"}}),p=m.div`
    margin: 0 auto;
`;export{a as LoadingDotsSpinner};
//# sourceMappingURL=loading-dots-spinner.js.map
