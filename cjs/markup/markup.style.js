"use strict";var t=require("styled-components"),e=require("../shared/html-content/html-content.js");function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}const n=o(t).default.div`
    ${t=>e.applyHtmlContentStyle({textSize:t.$textSize})}
    ${e=>e.$textColor&&t.css`
            color: ${e.$textColor};
        `}
`;exports.Container=n;
//# sourceMappingURL=markup.style.js.map
