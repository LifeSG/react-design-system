import r,{css as e}from"styled-components";import{Colour as t}from"../theme/index.js";import{Typography as o}from"../typography/typography.js";const i=r.div`
    border-radius: 50%;
    background-color: ${t["bg-primary-subtler"]};
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
`,m=r(o.BodyBL)`
    color: ${t["text-primary"]};
`,p=r(o.BodySM)`
    color: ${t["text-primary"]};
`;export{m as AvatarBaselineText,p as AvatarBodySmallText,i as AvatarDisplay};
//# sourceMappingURL=avatar.style.js.map
