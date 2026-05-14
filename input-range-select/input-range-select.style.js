import e from"styled-components";import{InputWrapper as t}from"../shared/input-wrapper/input-wrapper.js";import"../theme/theme-provider/index.js";import"react";import"../theme/theme-provider/context.js";import"../theme/tokens/border.js";import{Colour as o}from"../theme/tokens/colour.js";import"../theme/tokens/font.js";import"../theme/tokens/media-query.js";import{Spacing as r}from"../theme/tokens/spacing.js";import"../util/calendar-helper.js";import"../external/dayjs/dayjs.min.js";import"../util/simple-id-generator.js";import"../util/string-helper.js";import"@react-aria/live-announcer";import{V3_Spacing as i,V3_Colour as n}from"../v3_theme/index.js";const s=e.button`
    height: auto;
    padding: ${r["spacing-12"]} ${r["spacing-16"]};
    cursor: pointer;
    color: ${o.icon};

    /* Position styles */
    position: absolute;
    right: 0;
    padding-left: ${i["spacing-8"]};
    margin-right: 0;
`,p=e(t)`
    height: 3rem;
`,m=e.button`
    appearance: none;
    border: 0;
    background: transparent;
    display: flex;
    flex: 1;
    color: ${n.text};

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${n["border-focus"]};
        border-radius: 4px;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;export{s as ClearIconContainer,m as RangeSelectorButton,p as StyledInputWrapper};
//# sourceMappingURL=input-range-select.style.js.map
