"use strict";var r=require("styled-components"),d=require("../theme/index.js");function e(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}const o=e(r).default.div`
    border-radius: ${d.Radius.md};
    background: ${d.Colour.bg};
    padding: ${d.Spacing["spacing-16"]} ${d.Spacing["spacing-32"]};
    ${e=>{var o;return"dark"===(null===(o=e.theme)||void 0===o?void 0:o.colourMode)?r.css`
                  border: ${d.Border["width-010"]} ${d.Border.solid}
                      ${d.Colour.border};
              `:r.css`
                  box-shadow: ${d.Shadow["md-subtle"]};
              `}}
`;exports.StyledCard=o;
//# sourceMappingURL=card.style.js.map
