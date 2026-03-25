"use strict";var e=require("@lifesg/react-icons/external"),t=require("styled-components"),r=require("../v3_theme/index.js"),l=require("./helper.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(t);const n=a.default.div`
    ${e=>l.createTypographyStyles(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,o=a.default.a`
    ${e=>{var i;return t.css`
        ${l.getTextStyle(e.$textStyle,e.$weight||"regular")}
        color: ${r.V3_Colour.hyperlink};
        text-decoration: ${null!==(i=e.$underlineStyle)&&void 0!==i?i:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${r.V3_Colour["text-hover"]};
        }
    `}}
`,u=a.default(e.ExternalIcon)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;exports.HyperlinkBase=o,exports.StyledExternalIcon=u,exports.TypographyBase=n;
//# sourceMappingURL=typography.styles.js.map
