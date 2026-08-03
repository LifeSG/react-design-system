"use strict";var e=require("styled-components"),t=require("../button/button.js"),r=require("../theme/index.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=i(e);const n=d.default.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    ${r.MediaQuery.MaxWidth.md} {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,o=d.default.div`
    border-top: 1px solid ${r.Colour.border};
    border-bottom: 1px solid ${r.Colour.border};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    ${r.MediaQuery.MaxWidth.md} {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,m=d.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    ${r.MediaQuery.MaxWidth.md} {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,a=d.default(t.Button.Default)`
    margin-top: 1rem;
    width: 100%;
`;exports.ChildContainer=m,exports.Image=n,exports.MainContainer=o,exports.SubmitButton=a;
//# sourceMappingURL=feedback-rating.styles.js.map
