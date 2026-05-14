"use strict";var i=require("styled-components"),e=require("../../button/button.js"),a=require("../../checkbox/checkbox.js"),t=require("../../toggle/toggle.js"),n=require("../../v3_theme/index.js"),g=require("../filter-item.js");function c(i){return i&&"object"==typeof i&&"default"in i?i:{default:i}}var p=c(i);const l=p.default(g.FilterItem)`
    padding: 0 0 ${n.V3_Spacing["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${n.V3_Spacing["spacing-8"]} ${n.V3_Spacing["spacing-8"]} 0;

        ${n.V3_MediaQuery.MaxWidth.lg} {
            padding: ${n.V3_Spacing["spacing-16"]} ${n.V3_Spacing["spacing-20"]}
                ${n.V3_Spacing["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${n.V3_Spacing["spacing-8"]} ${n.V3_Spacing["spacing-20"]} 0;
    }
`,s=p.default.div`
    display: flex;
    flex-direction: column;

    ${n.V3_MediaQuery.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${i=>i.$isMobileToggleMode?n.V3_Spacing["spacing-16"]:0};
    }
`,r=p.default.label`
    display: flex;
    align-items: flex-start;
    ${i=>!i.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${n.V3_Spacing["spacing-8"]} ${n.V3_Spacing["spacing-12"]};
    ${e=>e.$level&&i.css`
            padding-left: calc(
                ${n.V3_Spacing["spacing-12"]} + ${e.$level} *
                    ${n.V3_Spacing["spacing-32"]}
            );
        `}

    cursor: pointer;
    ${n.V3_Font["body-md-regular"]}
    color: ${n.V3_Colour.text};
    ${e=>e.$selected&&i.css`
            color: ${n.V3_Colour["text-selected"]};
        `}
    ${n.V3_MediaQuery.MaxWidth.lg} {
        padding: ${n.V3_Spacing["spacing-8"]};
        ${e=>e.$level&&i.css`
                padding-left: calc(
                    ${n.V3_Spacing["spacing-8"]} + ${e.$level} *
                        ${n.V3_Spacing["spacing-32"]}
                );
            `}
    }
`,o=p.default(a.Checkbox)`
    flex-shrink: 0;
    margin-right: ${n.V3_Spacing["spacing-8"]};
`,d=p.default(t.Toggle)`
    ${i=>!i.$visible&&"visibility: hidden;"}
    min-width: 5rem;
`,$=p.default(e.Button.Small)`
    height: fit-content;
    padding: 0;
    margin: ${n.V3_Spacing["spacing-16"]} 0 ${n.V3_Spacing["spacing-8"]}
        ${n.V3_Spacing["spacing-12"]};

    ${n.V3_MediaQuery.MaxWidth.lg} {
        margin: 0 0 ${n.V3_Spacing["spacing-16"]} 0;
    }
`;exports.Group=s,exports.Item=r,exports.SelectAllButton=$,exports.StyledCheckbox=o,exports.StyledFilterItem=l,exports.StyledToggle=d;
//# sourceMappingURL=filter-item-checkbox.styles.js.map
