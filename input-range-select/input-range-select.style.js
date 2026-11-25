import o from"styled-components";import{ClearButton as r}from"../input/input.style.js";import{InputWrapper as e}from"../shared/input-wrapper/input-wrapper.js";import{Spacing as t,Colour as i}from"../theme/index.js";const n=o(r)`
    position: absolute;
    right: 0;
    padding-left: ${t["spacing-8"]};
    margin-right: 0;
`,p=o(e)`
    height: 3rem;
`,s=o.button`
    appearance: none;
    border: 0;
    background: transparent;
    display: flex;
    flex: 1;
    color: ${i.text};

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${i["border-focus"]};
        border-radius: 4px;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;export{n as ClearIconContainer,s as RangeSelectorButton,p as StyledInputWrapper};
//# sourceMappingURL=input-range-select.style.js.map
