"use strict";var t=require("styled-components"),r=require("../card/card.js"),e=require("../v2_color/color.js"),o=require("../v2_media/media.js"),a=require("../v2_transition/index.js");function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=i(t);const s=n.default.div`
    position: absolute;
    max-width: 30rem;
    pointer-events: auto;

    ${r=>(r=>{switch(r){case"left":return t.css`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${o.V2_MediaQuery.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"right":return t.css`
                left: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${o.V2_MediaQuery.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"bottom":return t.css`
                top: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${o.V2_MediaQuery.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `;default:return t.css`
                bottom: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${o.V2_MediaQuery.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(r.position)}
    ${r=>r.visible?t.css`
            visibility: "visible";
            opacity: 1;
            transition: ${a.V2_Transition.Base};
            z-index: 2;
        `:t.css`
            visibility: "hidden";
            opacity: 0;
            transition: ${a.V2_Transition.Base};
            z-index: -1;
        `}
`,p=n.default(r.Card)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,l=n.default.div`
    position: absolute;
    overflow: hidden;

    ${r=>{switch(r.position){case"top":default:return t.css`
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
                        border-color: ${e.V2_Color.Neutral[8]} transparent
                            transparent transparent;
                    }
                `;case"right":return t.css`
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
                        border-color: transparent ${e.V2_Color.Neutral[8]}
                            transparent transparent;
                    }
                `;case"left":return t.css`
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
                            ${e.V2_Color.Neutral[8]};
                    }
                `;case"bottom":return t.css`
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
                            ${e.V2_Color.Neutral[8]} transparent;
                    }
                `}}}
`,d=n.default.div`
    position: relative;
`;exports.Arrow=l,exports.Bubble=p,exports.BubbleWrap=s,exports.HOCWrapper=d;
//# sourceMappingURL=tooltip.styles.js.map
