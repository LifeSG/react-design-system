"use strict";var e=require("styled-components"),i=require("../../theme/index.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const t=r(e).default.div`
    --vertical-inset: ${i.Spacing["spacing-24"]};
    --horizontal-inset: ${i.Spacing["spacing-20"]};
    --header-bottom-spacing: ${i.Spacing["spacing-4"]};

    border: ${i.Border["width-010"]} ${i.Border.solid} ${i.Colour.border};
    border-radius: ${i.Radius.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${i.MediaQuery.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;exports.CalendarWrapper=t;
//# sourceMappingURL=calendar-dropdown.style.js.map
