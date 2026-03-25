"use strict";var e=require("styled-components"),i=require("../../v3_theme/index.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const t=r(e).default.div`
    --vertical-inset: ${i.V3_Spacing["spacing-24"]};
    --horizontal-inset: ${i.V3_Spacing["spacing-20"]};
    --header-bottom-spacing: ${i.V3_Spacing["spacing-4"]};

    border: ${i.V3_Border["width-010"]} ${i.V3_Border.solid} ${i.V3_Colour.border};
    border-radius: ${i.V3_Radius.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${i.V3_MediaQuery.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;exports.CalendarWrapper=t;
//# sourceMappingURL=calendar-dropdown.style.js.map
