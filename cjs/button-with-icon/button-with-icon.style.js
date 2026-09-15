"use strict";var t=require("styled-components"),e=require("../button/button.style.js");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}const o=n(t).default(e.Main)`
    flex-direction: ${t=>"right"===t.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;exports.MainButtonWithIcon=o;
//# sourceMappingURL=button-with-icon.style.js.map
