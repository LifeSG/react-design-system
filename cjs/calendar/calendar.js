"use strict";var e=require("react/jsx-runtime"),a=require("react"),i=require("styled-components");require("../shared/internal-calendar/calendar-dropdown.js");var n=require("../shared/internal-calendar/internal-calendar.js"),r=require("../theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const l=t(i).default.div`
    --vertical-inset: ${r.Spacing["spacing-24"]};
    --horizontal-inset: ${r.Spacing["spacing-32"]};
    --header-bottom-spacing: ${r.Spacing["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return i.css`
                border: ${r.Border["width-010"]} ${r.Border.solid} ${r.Colour.border};
                border-radius: ${r.Radius.lg};
                overflow: hidden;
            `}}
`;exports.Calendar=i=>{const{className:r,styleType:t="bordered",variant:o="single",id:d,minDate:s,maxDate:c,disabledDates:u,allowDisabledSelection:v,showActiveMonthDaysOnly:h,onHover:m,onYearMonthDisplayChange:b,"data-testid":g}=i,p="multi"!==i.variant?i.value:void 0,D="multi"===i.variant?i.values:void 0,S="multi"===i.variant?i.minSelectable:void 0,y="multi"===i.variant?i.maxSelectable:void 0,[$,f]=a.useState((()=>void 0!==D?D:void 0!==p?[p]:[]));a.useEffect((()=>{f(void 0!==D?D:void 0!==p?[p]:[])}),[p,D]);return e.jsx(l,{className:r,id:d,"data-testid":g,$hasBorder:"bordered"===t,children:e.jsx(n.InternalCalendar,{value:$[0],values:$,initialCalendarDate:$[0],isFocusable:!0,variant:o,minDate:s,maxDate:c,disabledDates:u,allowDisabledSelection:v,showActiveMonthDaysOnly:h,onHover:m,onYearMonthDisplayChange:b,onSelect:e=>{var a,n;f([e]),"multi"!==i.variant&&(null===(a=i.onChange)||void 0===a||a.call(i,e),null===(n=i.onSelect)||void 0===n||n.call(i,e))},onChange:e=>{var a;f(e),"multi"===i.variant&&(null===(a=i.onChange)||void 0===a||a.call(i,e))},minSelectable:S,maxSelectable:y})})};
//# sourceMappingURL=calendar.js.map
