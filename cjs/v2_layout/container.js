"use strict";var e=require("../_virtual/_tslib.js"),t=require("react/jsx-runtime"),r=require("react"),i=require("styled-components"),a=require("../v2_media/media.js");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=d(r),n=d(i);const l=s.default.forwardRef(((r,i)=>{const{children:a,"data-testid":d="container",type:s="flex",stretch:n=!1}=r,l=e.__rest(r,["children","data-testid","type","stretch"]);return t.jsx(u,Object.assign({ref:i,"data-testid":d,$type:s,$stretch:n},l,{children:a}))})),u=n.default.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?i.css`
                padding: 0 3rem;
            `:i.css`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${a.V2_MediaQuery.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${a.V2_MediaQuery.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${a.V2_MediaQuery.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return i.css`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${a.V2_MediaQuery.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${a.V2_MediaQuery.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return i.css`
                    display: flex;
                    flex-direction: column;
                `;default:return i.css`
                    display: flex;
                `}}}
`;exports.V2_Container=l;
//# sourceMappingURL=container.js.map
