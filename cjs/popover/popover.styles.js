"use strict";var t=require("styled-components"),e=require("../modal/modal-box.js"),r=require("../v2_media/media.js"),a=require("../v2_transition/index.js");function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=o(t);const n=i.default.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?t.css`
            visibility: visible;
            opacity: 1;
            transition: ${a.V2_Transition.Base};
            z-index: 50;
        `:t.css`
            visibility: hidden;
            opacity: 0;
            transition: ${a.V2_Transition.Base};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return t.css`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return t.css`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return t.css`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return t.css`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return t.css`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return t.css`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${r.V2_MediaQuery.MaxWidth.mobileL} {
        display: none;
    }
`,s=i.default(e.ModalBox)`
    padding: 3.5rem 1.25rem 2.5rem;
`,l=i.default.div`
    position: relative;
    width: fit-content;
`,c=i.default.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,d=i.default.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`;exports.BubbleWrap=n,exports.ContentWrapper=d,exports.HOCTrigger=c,exports.HOCWrapper=l,exports.MobileModalBox=s;
//# sourceMappingURL=popover.styles.js.map
