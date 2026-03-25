import i,{css as e}from"styled-components";import{Input as r}from"../input/input.js";import{InputBox as t}from"../shared/input-wrapper/input-wrapper.js";import{V3_Spacing as n,V3_Font as o,V3_Colour as p}from"../v3_theme/index.js";const s=i(t)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0
        ${i=>i.$readOnly||i.$noBorder?"0":n["spacing-16"]};
    flex-direction: ${i=>"right"===i.$position?"row-reverse":"row"};
`,a=i(t)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0
        ${i=>i.$readOnly||i.$noBorder?"0":n["spacing-16"]};
    flex-direction: ${i=>"right"===i.$position?"row-reverse":"row"};
`,d=i(r)``,l=i.div`
    position: relative;
    display: flex;
    align-items: center;

    ${o["body-baseline-regular"]}
    color: ${p.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${i=>{if(i.$disabled)return e`
                color: ${p["text-subtler"]};
            `}}

    ${i=>"right"===i.$position?e`
                    margin-left: ${i.$readOnly?n["spacing-4"]:n["spacing-12"]};
                `:e`
                    margin-right: ${i.$readOnly?n["spacing-4"]:n["spacing-12"]};
                `};
`;export{s as AddonWrapper,l as LabelAddonContainer,d as MainInput,a as NoAddonWrapper};
//# sourceMappingURL=input-group.style.js.map
