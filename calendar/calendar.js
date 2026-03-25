import{__rest as e}from"../_virtual/_tslib.js";import{jsx as r}from"react/jsx-runtime";import{useState as a,useEffect as t}from"react";import o,{css as i}from"styled-components";import"../shared/internal-calendar/calendar-dropdown.js";import{InternalCalendar as n}from"../shared/internal-calendar/internal-calendar.js";import{V3_Spacing as s,V3_Border as l,V3_Colour as d,V3_Radius as c}from"../v3_theme/index.js";const m=o=>{var{className:i,styleType:s="bordered",value:l,onSelect:d}=o,c=e(o,["className","styleType","value","onSelect"]);const[m,h]=a(l);return t((()=>{h(l)}),[l]),r(p,{className:i,$hasBorder:"bordered"===s,children:r(n,Object.assign({value:m,initialCalendarDate:m,isFocusable:!0,onSelect:e=>{h(e),null==d||d(e)}},c))})},p=o.div`
    --vertical-inset: ${s["spacing-24"]};
    --horizontal-inset: ${s["spacing-32"]};
    --header-bottom-spacing: ${s["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return i`
                border: ${l["width-010"]} ${l.solid}
                    ${d.border};
                border-radius: ${c.lg};
                overflow: hidden;
            `}}
`;export{m as Calendar};
//# sourceMappingURL=calendar.js.map
