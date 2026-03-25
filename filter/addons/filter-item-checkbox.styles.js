import i,{css as e}from"styled-components";import{Button as t}from"../../button/button.js";import{Checkbox as n}from"../../checkbox/checkbox.js";import{Toggle as a}from"../../toggle/toggle.js";import{V3_Spacing as g,V3_MediaQuery as l,V3_Font as o,V3_Colour as p}from"../../v3_theme/index.js";import{FilterItem as s}from"../filter-item.js";const $=i(s)`
    padding: 0 0 ${g["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${g["spacing-8"]} ${g["spacing-8"]} 0;

        ${l.MaxWidth.lg} {
            padding: ${g["spacing-16"]} ${g["spacing-20"]}
                ${g["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${g["spacing-8"]} ${g["spacing-20"]} 0;
    }
`,c=i.div`
    display: flex;
    flex-direction: column;

    ${l.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${i=>i.$isMobileToggleMode?g["spacing-16"]:0};
    }
`,d=i.label`
    display: flex;
    align-items: flex-start;
    ${i=>!i.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${g["spacing-8"]} ${g["spacing-12"]};
    ${i=>i.$level&&e`
            padding-left: calc(
                ${g["spacing-12"]} + ${i.$level} *
                    ${g["spacing-32"]}
            );
        `}

    cursor: pointer;
    ${o["body-md-regular"]}
    color: ${p.text};
    ${i=>i.$selected&&e`
            color: ${p["text-selected"]};
        `}
    ${l.MaxWidth.lg} {
        padding: ${g["spacing-8"]};
        ${i=>i.$level&&e`
                padding-left: calc(
                    ${g["spacing-8"]} + ${i.$level} *
                        ${g["spacing-32"]}
                );
            `}
    }
`,r=i(n)`
    flex-shrink: 0;
    margin-right: ${g["spacing-8"]};
`,m=i(a)`
    ${i=>!i.$visible&&"visibility: hidden;"}
    min-width: 5rem;
`,h=i(t.Small)`
    height: fit-content;
    padding: 0;
    margin: ${g["spacing-16"]} 0 ${g["spacing-8"]}
        ${g["spacing-12"]};

    ${l.MaxWidth.lg} {
        margin: 0 0 ${g["spacing-16"]} 0;
    }
`;export{c as Group,d as Item,h as SelectAllButton,r as StyledCheckbox,$ as StyledFilterItem,m as StyledToggle};
//# sourceMappingURL=filter-item-checkbox.styles.js.map
