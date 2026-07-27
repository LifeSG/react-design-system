"use strict";var e=require("styled-components"),i=require("../theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e);const r=o.default.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,d=o.default.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${i.Border["width-010"]} ${i.Border.solid} ${i.Colour.border};
    background-color: ${i.Colour["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,n=o.default(d)`
    height: 100vh;
    left: 0;
    top: 0;
    ${i.MediaQuery.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,l=o.default(d)`
    display: none;
    visibility: hidden;
    ${i.MediaQuery.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`;exports.DesktopContainer=n,exports.MobileContainer=l,exports.Wrapper=r;
//# sourceMappingURL=sidenav.styles.js.map
