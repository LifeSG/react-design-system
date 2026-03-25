import{ExternalIcon as e}from"@lifesg/react-icons/external";import t,{css as r}from"styled-components";import{V3_Colour as i}from"../v3_theme/index.js";import{createTypographyStyles as o,getTextStyle as l}from"./helper.js";const n=t.div`
    ${e=>o(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,m=t.a`
    ${e=>{var t;return r`
        ${l(e.$textStyle,e.$weight||"regular")}
        color: ${i.hyperlink};
        text-decoration: ${null!==(t=e.$underlineStyle)&&void 0!==t?t:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${i["text-hover"]};
        }
    `}}
`,a=t(e)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;export{m as HyperlinkBase,a as StyledExternalIcon,n as TypographyBase};
//# sourceMappingURL=typography.styles.js.map
