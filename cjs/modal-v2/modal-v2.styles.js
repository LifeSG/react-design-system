"use strict";var t=require("styled-components"),e=require("../v3_theme/index.js");function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=i(t);const n=o.default.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${e.V3_MediaQuery.MaxWidth.sm} {
        ${e=>t.css`
                height: calc(
                    ${e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
                );
            `}

        top: ${t=>t.$offsetTop||0}px;
    }

    ${i=>t.css`
        &[data-status="initial"] {
            opacity: 0;
            ${i.$animationFrom}: -3%;
        }

        &[data-status="open"] {
            opacity: 1;
            ${i.$animationFrom}: 0;
            transition: all ${e.V3_Motion["duration-250"]}
                ${e.V3_Motion["ease-entrance"]};
            transition-delay: ${e.V3_Motion["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${i.$animationFrom}: -3%;
            transition: all ${e.V3_Motion["duration-250"]}
                ${e.V3_Motion["ease-exit"]};
        }
    `}
`,a=o.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,r=o.default.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`;exports.Container=n,exports.ModalContainer=r,exports.ScrollContainer=a;
//# sourceMappingURL=modal-v2.styles.js.map
