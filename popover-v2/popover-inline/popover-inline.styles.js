import e from"styled-components";import{V3_Colour as t}from"../../v3_theme/index.js";const n=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},r=e.span`
    color: ${t["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>n(e)}

    &:hover,
    &:focus-visible {
        color: ${t["text-hover"]};
        ${({$hoverStyle:e})=>n(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,i=e.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`;export{i as StyledIcon,r as StyledText};
//# sourceMappingURL=popover-inline.styles.js.map
