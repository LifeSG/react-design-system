import{jsx as a}from"react/jsx-runtime";import{useState as e,useEffect as i}from"react";import t,{css as n}from"styled-components";import"../shared/internal-calendar/calendar-dropdown.js";import{InternalCalendar as l}from"../shared/internal-calendar/internal-calendar.js";import{Spacing as o,Border as r,Colour as d,Radius as s}from"../theme/index.js";const m=t=>{const{className:n,styleType:o="bordered",variant:r,id:d,minDate:s,maxDate:m,disabledDates:c,allowDisabledSelection:h,showActiveMonthDaysOnly:u,onHover:p,onYearMonthDisplayChange:b,"data-testid":D}=t,g="multi"!==t.variant?t.value:void 0,$="multi"===t.variant?t.values:void 0,y="multi"===t.variant?t.minSelectable:void 0,w="multi"===t.variant?t.maxSelectable:void 0,[S,f]=e((()=>void 0!==$?$:void 0!==g?[g]:[]));i((()=>{f(void 0!==$?$:void 0!==g?[g]:[])}),[g,$]);return a(v,{className:n,id:d,"data-testid":D,$hasBorder:"bordered"===o,children:a(l,{value:S[0],values:S,initialCalendarDate:S[0],isFocusable:!0,variant:r,minDate:s,maxDate:m,disabledDates:c,allowDisabledSelection:h,showActiveMonthDaysOnly:u,onHover:p,onYearMonthDisplayChange:b,onSelect:a=>{var e,i;f([a]),"multi"!==t.variant&&(null===(e=t.onChange)||void 0===e||e.call(t,a),null===(i=t.onSelect)||void 0===i||i.call(t,a))},onChange:a=>{var e;f(a),"multi"===t.variant&&(null===(e=t.onChange)||void 0===e||e.call(t,a))},minSelectable:y,maxSelectable:w})})},v=t.div`
    --vertical-inset: ${o["spacing-24"]};
    --horizontal-inset: ${o["spacing-32"]};
    --header-bottom-spacing: ${o["spacing-8"]};

    width: 41rem;

    ${a=>{if(a.$hasBorder)return n`
                border: ${r["width-010"]} ${r.solid} ${d.border};
                border-radius: ${s.lg};
                overflow: hidden;
            `}}
`;export{m as Calendar};
//# sourceMappingURL=calendar.js.map
