"use strict";var e=require("styled-components");require("../theme/theme-provider/index.js"),require("react"),require("../theme/theme-provider/context.js"),require("../theme/tokens/border.js");var r=require("../theme/tokens/colour.js");require("../theme/tokens/font.js"),require("../theme/tokens/media-query.js"),require("../util/calendar-helper.js"),require("../external/dayjs/dayjs.min.js"),require("../util/string-helper.js");var t=require("../v3_theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const d=o(e).default.div`
    border-radius: ${t.V3_Radius.md};
    background: ${r.Colour.bg};
    padding: ${t.V3_Spacing["spacing-16"]} ${t.V3_Spacing["spacing-32"]};
    ${r=>{var o;return"dark"===(null===(o=r.theme)||void 0===o?void 0:o.colourMode)?e.css`
                  border: ${t.V3_Border["width-010"]} ${t.V3_Border.solid}
                      ${t.V3_Colour.border};
              `:e.css`
                  box-shadow: ${t.V3_Shadow["md-subtle"]};
              `}}
`;exports.StyledCard=d;
//# sourceMappingURL=card.style.js.map
