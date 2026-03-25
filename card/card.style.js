import e,{css as r}from"styled-components";import"../theme/theme-provider/index.js";import"react";import"../theme/theme-provider/context.js";import"../theme/tokens/border.js";import{Colour as o}from"../theme/tokens/colour.js";import"../theme/tokens/font.js";import"../theme/tokens/media-query.js";import"../util/calendar-helper.js";import"../external/dayjs/dayjs.min.js";import"../util/string-helper.js";import{V3_Radius as t,V3_Spacing as i,V3_Border as m,V3_Colour as d,V3_Shadow as s}from"../v3_theme/index.js";const n=e.div`
    border-radius: ${t.md};
    background: ${o.bg};
    padding: ${i["spacing-16"]} ${i["spacing-32"]};
    ${e=>{var o;return"dark"===(null===(o=e.theme)||void 0===o?void 0:o.colourMode)?r`
                  border: ${m["width-010"]} ${m.solid}
                      ${d.border};
              `:r`
                  box-shadow: ${s["md-subtle"]};
              `}}
`;export{n as StyledCard};
//# sourceMappingURL=card.style.js.map
