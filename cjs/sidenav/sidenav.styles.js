"use strict";var e=require("styled-components");require("../theme/theme-provider/index.js"),require("react"),require("../theme/theme-provider/context.js"),require("../theme/tokens/border.js");var r=require("../theme/tokens/colour.js");require("../theme/tokens/font.js"),require("../theme/tokens/media-query.js"),require("../util/calendar-helper.js"),require("../external/dayjs/dayjs.min.js"),require("../util/string-helper.js");var i=require("../v3_theme/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e);const d=o.default.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,n=o.default.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${i.V3_Border["width-010"]} ${i.V3_Border.solid} ${i.V3_Colour.border};
    background-color: ${r.Colour["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,s=o.default(n)`
    height: 100vh;
    left: 0;
    top: 0;
    ${i.V3_MediaQuery.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,a=o.default(n)`
    display: none;
    visibility: hidden;
    ${i.V3_MediaQuery.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`;exports.DesktopContainer=s,exports.MobileContainer=a,exports.Wrapper=d;
//# sourceMappingURL=sidenav.styles.js.map
