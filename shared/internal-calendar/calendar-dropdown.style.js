import i from"styled-components";import{Spacing as t,Border as e,Colour as r,Radius as d,MediaQuery as o}from"../../theme/index.js";const m=i.div`
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
