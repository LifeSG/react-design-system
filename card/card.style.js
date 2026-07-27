import o,{css as d}from"styled-components";import{Radius as r,Colour as e,Spacing as i,Border as t,Shadow as n}from"../theme/index.js";const s=o.div`
    border-radius: ${r.md};
    background: ${e.bg};
    padding: ${i["spacing-16"]} ${i["spacing-32"]};
    ${o=>{var r;return"dark"===(null===(r=o.theme)||void 0===r?void 0:r.colourMode)?d`
                  border: ${t["width-010"]} ${t.solid}
                      ${e.border};
              `:d`
                  box-shadow: ${n["md-subtle"]};
              `}}
`;export{s as StyledCard};
//# sourceMappingURL=card.style.js.map
