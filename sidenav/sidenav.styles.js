import i from"styled-components";import{Border as e,Colour as t,MediaQuery as o}from"../theme/index.js";const d=i.div`
    display: flex;
    position: ${i=>i.$fixed?"fixed":"relative"};
    width: fit-content;
`,n=i.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${e["width-010"]} ${e.solid} ${t.border};
    background-color: ${t["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,r=i(n)`
    height: 100vh;
    left: 0;
    top: 0;
    ${o.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,l=i(n)`
    display: none;
    visibility: hidden;
    ${o.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`;export{r as DesktopContainer,l as MobileContainer,d as Wrapper};
//# sourceMappingURL=sidenav.styles.js.map
