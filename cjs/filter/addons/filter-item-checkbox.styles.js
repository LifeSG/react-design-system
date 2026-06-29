"use strict";var i=require("styled-components"),e=require("../../button/button.js"),a=require("../../checkbox/checkbox.js"),t=require("../../theme/index.js"),n=require("../../toggle/toggle.js"),g=require("../filter-item.js");function c(i){return i&&"object"==typeof i&&"default"in i?i:{default:i}}var p=c(i);const l=p.default(g.FilterItem)`
    padding: 0 0 ${t.Spacing["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${t.Spacing["spacing-8"]} ${t.Spacing["spacing-8"]} 0;

        ${t.MediaQuery.MaxWidth.lg} {
            padding: ${t.Spacing["spacing-16"]} ${t.Spacing["spacing-20"]}
                ${t.Spacing["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${t.Spacing["spacing-8"]} ${t.Spacing["spacing-20"]} 0;
    }
`,s=p.default.div`
    display: flex;
    flex-direction: column;

    ${t.MediaQuery.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${i=>i.$isMobileToggleMode?t.Spacing["spacing-16"]:0};
    }
`,r=p.default.label`
    display: flex;
    align-items: flex-start;
    ${i=>!i.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${t.Spacing["spacing-8"]} ${t.Spacing["spacing-12"]};
    ${e=>e.$level&&i.css`
            padding-left: calc(
                ${t.Spacing["spacing-12"]} + ${e.$level} *
                    ${t.Spacing["spacing-32"]}
            );
        `}

    cursor: pointer;
    ${t.Font["body-md-regular"]}
    color: ${t.Colour.text};
    ${e=>e.$selected&&i.css`
            color: ${t.Colour["text-selected"]};
        `}
    ${t.MediaQuery.MaxWidth.lg} {
        padding: ${t.Spacing["spacing-8"]};
        ${e=>e.$level&&i.css`
                padding-left: calc(
                    ${t.Spacing["spacing-8"]} + ${e.$level} *
                        ${t.Spacing["spacing-32"]}
                );
            `}
    }
`,o=p.default(a.Checkbox)`
    flex-shrink: 0;
    margin-right: ${t.Spacing["spacing-8"]};
`,d=p.default(n.Toggle)`
    ${i=>!i.$visible&&"visibility: hidden;"}
    min-width: 5rem;
`,$=p.default(e.Button.Small)`
    height: fit-content;
    padding: 0;
    margin: ${t.Spacing["spacing-16"]} 0 ${t.Spacing["spacing-8"]}
        ${t.Spacing["spacing-12"]};

    ${t.MediaQuery.MaxWidth.lg} {
        margin: 0 0 ${t.Spacing["spacing-16"]} 0;
    }
`;exports.Group=s,exports.Item=r,exports.SelectAllButton=$,exports.StyledCheckbox=o,exports.StyledFilterItem=l,exports.StyledToggle=d;
//# sourceMappingURL=filter-item-checkbox.styles.js.map
