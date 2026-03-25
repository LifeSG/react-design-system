import i from"styled-components";import{V3_Spacing as t,V3_Border as e,V3_Colour as r,V3_Radius as d,V3_MediaQuery as o}from"../../v3_theme/index.js";const m=i.div`
    --vertical-inset: ${t["spacing-24"]};
    --horizontal-inset: ${t["spacing-20"]};
    --header-bottom-spacing: ${t["spacing-4"]};

    border: ${e["width-010"]} ${e.solid} ${r.border};
    border-radius: ${d.sm};
    overflow: hidden;

    width: ${i=>i.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${o.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;export{m as CalendarWrapper};
//# sourceMappingURL=calendar-dropdown.style.js.map
