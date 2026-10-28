import o,{keyframes as r}from"styled-components";const i=o.div`
    display: inline-block;
    position: relative;
    width: ${({$size:o})=>o?`${o}px`:"1em"};
    height: ${({$size:o})=>o?`${o}px`:"1em"};
    color: ${o=>o.$color||"currentColor"};
`,t=r`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,e=o.div`
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
    animation: ${t} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,a=o(e)`
    animation-delay: -0.45s;
`,n=o(e)`
    animation-delay: -0.3s;
`,s=o(e)`
    animation-delay: -0.15s;
`;export{e as InnerRing1,a as InnerRing2,n as InnerRing3,s as InnerRing4,i as OuterRing};
//# sourceMappingURL=component-loading-spinner.style.js.map
