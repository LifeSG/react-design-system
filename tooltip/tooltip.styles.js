import t,{css as o}from"styled-components";import{Card as r}from"../card/card.js";import{V2_Color as e}from"../v2_color/color.js";import{V2_MediaQuery as a}from"../v2_media/media.js";import{V2_Transition as i}from"../v2_transition/index.js";const n=t.div`
    position: absolute;
    max-width: 30rem;
    pointer-events: auto;

    ${t=>(t=>{switch(t){case"left":return o`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${a.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"right":return o`
                left: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${a.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"bottom":return o`
                top: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${a.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `;default:return o`
                bottom: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${a.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(t.position)}
    ${t=>t.visible?o`
            visibility: "visible";
            opacity: 1;
            transition: ${i.Base};
            z-index: 2;
        `:o`
            visibility: "hidden";
            opacity: 0;
            transition: ${i.Base};
            z-index: -1;
        `}
`,p=t(r)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,s=t.div`
    position: absolute;
    overflow: hidden;

    ${t=>{switch(t.position){case"top":default:return o`
                    width: 50%;
                    height: 30px;
                    top: 100%;
                    left: 25%;

                    &::before {
                        content: "";
                        position: absolute;
                        background: transparent;
                        left: calc(50% - 3px);
                        width: 2px;
                        height: 8px;
                        box-shadow: 3px 2px 14px 3px rgba(91, 91, 91, 0.5);
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: -10%;
                        left: calc(50% - 10px);
                        border-style: solid;
                        border-width: 16px 8px 0 8px;
                        border-color: ${e.Neutral[8]} transparent
                            transparent transparent;
                    }
                `;case"right":return o`
                    width: 30px;
                    height: 100%;
                    top: 0;
                    left: -30px;

                    &::before {
                        content: "";
                        position: absolute;
                        background: red;
                        right: 0;
                        top: calc(50% - 3px);
                        width: 8px;
                        height: 2px;
                        box-shadow: 2px 3px 11px 3px rgba(91, 91, 91, 0.5);
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: calc(50% - 10px);
                        right: -10%;
                        border-style: solid;
                        border-width: 8px 16px 8px 0;
                        border-color: transparent ${e.Neutral[8]}
                            transparent transparent;
                    }
                `;case"left":return o`
                    width: 30px;
                    height: 100%;
                    top: 0;
                    right: -30px;

                    &::before {
                        content: "";
                        position: absolute;
                        background: red;
                        left: 0;
                        top: calc(50% - 3px);
                        width: 8px;
                        height: 2px;
                        box-shadow: 4px 0px 11px 3px rgba(91, 91, 91, 0.5);
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: calc(50% - 10px);
                        left: -10%;
                        border-style: solid;
                        border-width: 8px 0 8px 16px;
                        border-color: transparent transparent transparent
                            ${e.Neutral[8]};
                    }
                `;case"bottom":return o`
                    width: 50%;
                    height: 30px;
                    bottom: 100%;
                    left: 25%;

                    &::before {
                        content: "";
                        position: absolute;
                        background: transparent;
                        left: calc(50% - 3px);
                        bottom: -10px;
                        width: 2px;
                        height: 8px;
                        box-shadow: 3px -9px 14px 3px rgba(91, 91, 91, 0.5);
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        bottom: -10%;
                        left: calc(50% - 10px);
                        border-style: solid;
                        border-width: 0 8px 16px 8px;
                        border-color: transparent transparent
                            ${e.Neutral[8]} transparent;
                    }
                `}}}
`,x=t.div`
    position: relative;
`;export{s as Arrow,p as Bubble,n as BubbleWrap,x as HOCWrapper};
//# sourceMappingURL=tooltip.styles.js.map
