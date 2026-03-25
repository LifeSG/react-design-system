"use strict";var e=require("../_virtual/_tslib.js"),r=require("react/jsx-runtime"),a=require("react"),n=require("styled-components");require("../shared/internal-calendar/calendar-dropdown.js");var t=require("../shared/internal-calendar/internal-calendar.js"),s=require("../v3_theme/index.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const l=i(n).default.div`
    --vertical-inset: ${s.V3_Spacing["spacing-24"]};
    --horizontal-inset: ${s.V3_Spacing["spacing-32"]};
    --header-bottom-spacing: ${s.V3_Spacing["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return n.css`
                border: ${s.V3_Border["width-010"]} ${s.V3_Border.solid}
                    ${s.V3_Colour.border};
                border-radius: ${s.V3_Radius.lg};
                overflow: hidden;
            `}}
`;exports.Calendar=n=>{var{className:s,styleType:i="bordered",value:d,onSelect:o}=n,c=e.__rest(n,["className","styleType","value","onSelect"]);const[u,p]=a.useState(d);return a.useEffect((()=>{p(d)}),[d]),r.jsx(l,{className:s,$hasBorder:"bordered"===i,children:r.jsx(t.InternalCalendar,Object.assign({value:u,initialCalendarDate:u,isFocusable:!0,onSelect:e=>{p(e),null==o||o(e)}},c))})};
//# sourceMappingURL=calendar.js.map
