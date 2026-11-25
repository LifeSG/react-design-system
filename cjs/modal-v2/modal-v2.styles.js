"use strict";var t=require("styled-components"),e=require("../theme/index.js");function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=i(t);const o=n.default.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${e.MediaQuery.MaxWidth.sm} {
        height: calc(
            ${t=>t.$verticalHeight?`${t.$verticalHeight}px`:"1vh"} * 100
        );
    }

    @supports (height: 100dvh) {
        height: 100dvh;
    }

    ${i=>t.css`
        &[data-status="initial"] {
            opacity: 0;
            ${i.$animationFrom}: -3%;
        }

        &[data-status="open"] {
            opacity: 1;
            ${i.$animationFrom}: 0;
            transition: all ${e.Motion["duration-250"]} ${e.Motion["ease-entrance"]};
            transition-delay: ${e.Motion["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${i.$animationFrom}: -3%;
            transition: all ${e.Motion["duration-250"]} ${e.Motion["ease-exit"]};
        }
    `}
`,a=n.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,r=n.default.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`;exports.Container=o,exports.ModalContainer=r,exports.ScrollContainer=a;
//# sourceMappingURL=modal-v2.styles.js.map
