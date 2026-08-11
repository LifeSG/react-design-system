import i,{css as e}from"styled-components";import{Button as t}from"../../button/button.js";import{Checkbox as n}from"../../checkbox/checkbox.js";import{Spacing as a,MediaQuery as g,Font as l,Colour as o}from"../../theme/index.js";import{Toggle as p}from"../../toggle/toggle.js";import{FilterItem as s}from"../filter-item.js";const $=i(s)`
    padding: 0 0 ${a["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${a["spacing-8"]} ${a["spacing-8"]} 0;

        ${g.MaxWidth.lg} {
            padding: ${a["spacing-16"]} ${a["spacing-20"]}
                ${a["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${a["spacing-8"]} ${a["spacing-20"]} 0;
    }
`,c=i.div`
    display: flex;
    flex-direction: column;

    ${g.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${i=>i.$isMobileToggleMode?a["spacing-16"]:0};
    }
`,d=i.label`
    display: flex;
    align-items: flex-start;
    ${i=>!i.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${a["spacing-8"]} ${a["spacing-12"]};
    ${i=>i.$level&&e`
            padding-left: calc(
                ${a["spacing-12"]} + ${i.$level} *
                    ${a["spacing-32"]}
            );
        `}

    cursor: pointer;
    ${l["body-md-regular"]}
    color: ${o.text};
    ${i=>i.$selected&&e`
            color: ${o["text-selected"]};
        `}
    ${g.MaxWidth.lg} {
        padding: ${a["spacing-8"]};
        ${i=>i.$level&&e`
                padding-left: calc(
                    ${a["spacing-8"]} + ${i.$level} *
                        ${a["spacing-32"]}
                );
            `}
    }
`,r=i(n)`
    flex-shrink: 0;
    margin-right: ${a["spacing-8"]};
`,m=i(p)`
    ${i=>!i.$visible&&"visibility: hidden;"}
    min-width: 5rem;
`,h=i(t.Small)`
    height: fit-content;
    padding: 0;
    margin: ${a["spacing-16"]} 0 ${a["spacing-8"]}
        ${a["spacing-12"]};

    ${g.MaxWidth.lg} {
        margin: 0 0 ${a["spacing-16"]} 0;
    }
`;export{c as Group,d as Item,h as SelectAllButton,r as StyledCheckbox,$ as StyledFilterItem,m as StyledToggle};
//# sourceMappingURL=filter-item-checkbox.styles.js.map
