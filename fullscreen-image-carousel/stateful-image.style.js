import e from"styled-components";import{ImagePlaceholder as t}from"../shared/image-placeholder/image-placeholder.js";const i=e.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,o=e.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,n=e(t)`
    width: 100%;
    height: 100%;
`;export{n as DefaultPlaceholder,o as ImageBox,i as ImageWrapper};
//# sourceMappingURL=stateful-image.style.js.map
