"use strict";var e=require("react/jsx-runtime"),a=require("react"),i=require("styled-components");require("../shared/internal-calendar/calendar-dropdown.js");var r=require("../shared/internal-calendar/internal-calendar.js"),n=require("../theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const l=t(i).default.div`
    --vertical-inset: ${n.Spacing["spacing-24"]};
    --horizontal-inset: ${n.Spacing["spacing-32"]};
    --header-bottom-spacing: ${n.Spacing["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return i.css`
                border: ${n.Border["width-010"]} ${n.Border.solid} ${n.Colour.border};
                border-radius: ${n.Radius.lg};
                overflow: hidden;
            `}}
`;exports.Calendar=i=>{const{className:n,styleType:t="bordered",variant:o,id:d,minDate:s,maxDate:c,disabledDates:u,allowDisabledSelection:v,showActiveMonthDaysOnly:h,onHover:m,onYearMonthDisplayChange:b,"data-testid":p}=i,g="multi"!==i.variant?i.value:void 0,D="multi"===i.variant?i.values:void 0,S="multi"===i.variant?i.minSelectable:void 0,y="multi"===i.variant?i.maxSelectable:void 0,[$,f]=a.useState((()=>void 0!==D?D:void 0!==g?[g]:[]));a.useEffect((()=>{f(void 0!==D?D:void 0!==g?[g]:[])}),[g,D]);return e.jsx(l,{className:n,id:d,"data-testid":p,$hasBorder:"bordered"===t,children:e.jsx(r.InternalCalendar,{value:$[0],values:$,initialCalendarDate:$[0],isFocusable:!0,variant:o,minDate:s,maxDate:c,disabledDates:u,allowDisabledSelection:v,showActiveMonthDaysOnly:h,onHover:m,onYearMonthDisplayChange:b,onSelect:e=>{var a,r;f([e]),"multi"!==i.variant&&(null===(a=i.onChange)||void 0===a||a.call(i,e),null===(r=i.onSelect)||void 0===r||r.call(i,e))},onChange:e=>{var a;f(e),"multi"===i.variant&&(null===(a=i.onChange)||void 0===a||a.call(i,e))},minSelectable:S,maxSelectable:y})})};
//# sourceMappingURL=calendar.js.map
