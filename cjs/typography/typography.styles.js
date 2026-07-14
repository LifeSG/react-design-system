"use strict";var e=require("@lifesg/react-icons/external"),t=require("styled-components"),r=require("../theme/index.js"),l=require("./helper.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(t);const i=a.default.div`
    ${e=>l.createTypographyStyles(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,n=a.default.a`
    ${e=>{var o;return t.css`
        ${l.getTextStyle(e.$textStyle,e.$weight||"regular")}
        color: ${r.Colour.hyperlink};
        text-decoration: ${null!==(o=e.$underlineStyle)&&void 0!==o?o:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${r.Colour["text-hover"]};
        }
    `}}
`,u=a.default(e.ExternalIcon)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: top;
`;exports.HyperlinkBase=n,exports.StyledExternalIcon=u,exports.TypographyBase=i;
//# sourceMappingURL=typography.styles.js.map
