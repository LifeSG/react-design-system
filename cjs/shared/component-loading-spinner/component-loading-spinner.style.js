"use strict";var e=require("styled-components");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=r(e);const n=t.default.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,o=e.keyframes`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,i=t.default.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-width: 2px;
    border-style: solid;
    border-radius: 100%;
    border-color: currentColor transparent transparent transparent;
    animation: ${o} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,a=t.default(i)`
    animation-delay: -0.45s;
`,s=t.default(i)`
    animation-delay: -0.3s;
`,d=t.default(i)`
    animation-delay: -0.15s;
`;exports.InnerRing1=i,exports.InnerRing2=a,exports.InnerRing3=s,exports.InnerRing4=d,exports.OuterRing=n;
//# sourceMappingURL=component-loading-spinner.style.js.map
