import r,{css as e}from"styled-components";import{Typography as t}from"../typography/index.js";import{V3_Colour as o}from"../v3_theme/index.js";const i=r.div`
    border-radius: 50%;
    background-color: ${o["bg-primary-subtler"]};
    ${r=>"small"===r.$sizeType?e`
                  width: 1.5rem;
                  height: 1.5rem;
              `:e`
                  width: 2.5rem;
                  height: 2.5rem;
              `}

    align-items: center;
    justify-content: center;
    display: flex;
`,m=r(t.BodyBL)`
    color: ${o["text-primary"]};
`,d=r(t.BodySM)`
    color: ${o["text-primary"]};
`;export{m as AvatarBaselineText,d as AvatarBodySmallText,i as AvatarDisplay};
//# sourceMappingURL=avatar.style.js.map
