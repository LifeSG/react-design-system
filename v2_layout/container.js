import{__rest as t}from"../_virtual/_tslib.js";import{jsx as e}from"react/jsx-runtime";import i from"react";import r,{css as a}from"styled-components";import{V2_MediaQuery as d}from"../v2_media/media.js";const m=i.forwardRef(((i,r)=>{const{children:a,"data-testid":d="container",type:m="flex",stretch:n=!1}=i,l=t(i,["children","data-testid","type","stretch"]);return e(o,Object.assign({ref:r,"data-testid":d,$type:m,$stretch:n},l,{children:a}))})),o=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${t=>t.$stretch?a`
                padding: 0 3rem;
            `:a`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${d.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${d.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${d.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.$type){case"grid":return a`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${d.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${d.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return a`
                    display: flex;
                    flex-direction: column;
                `;default:return a`
                    display: flex;
                `}}}
`;export{m as V2_Container};
//# sourceMappingURL=container.js.map
