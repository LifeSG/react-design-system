import e from"styled-components";import"../theme/theme-provider/index.js";import"react";import"../theme/theme-provider/context.js";import"../theme/tokens/border.js";import{Colour as t}from"../theme/tokens/colour.js";import"../theme/tokens/font.js";import"../theme/tokens/media-query.js";import"../util/calendar-helper.js";import"../external/dayjs/dayjs.min.js";import"../util/string-helper.js";import{V3_Border as i,V3_Colour as o,V3_MediaQuery as r}from"../v3_theme/index.js";const m=e.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,d=e.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${i["width-010"]} ${i.solid} ${o.border};
    background-color: ${t["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,n=e(d)`
    height: 100vh;
    left: 0;
    top: 0;
    ${r.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,s=e(d)`
    display: none;
    visibility: hidden;
    ${r.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`;export{n as DesktopContainer,s as MobileContainer,m as Wrapper};
//# sourceMappingURL=sidenav.styles.js.map
