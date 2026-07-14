"use strict";var e=require("@lifesg/react-icons/star"),i=require("@lifesg/react-icons/star-fill"),r=require("styled-components"),t=require("../theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(r);const o=r.css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${t.Colour["icon-primary"]};
`,s=a.default(e.StarIcon)`
    ${o}
`,l=a.default(i.StarFillIcon)`
    ${o}
`,c=a.default.div`
    margin: 0 ${t.Spacing["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    ${t.MediaQuery.MaxWidth.md} {
        margin: 0 ${t.Spacing["spacing-8"]};
    }
`,d=a.default.div`
    display: flex;
    justify-content: center;
    margin: ${t.Spacing["spacing-8"]} ${t.Spacing["spacing-16"]};
    border-radius: ${t.Radius.sm};
    outline: none;

    ${({$isFocused:e})=>e&&r.css`
            outline: ${t.Border["width-020"]} ${t.Border.solid}
                ${t.Colour["icon-primary"]};
            outline-offset: 2px;
        `}
`;exports.Container=d,exports.Label=c,exports.StarFilled=l,exports.StarUnfilled=s;
//# sourceMappingURL=feedback-rating-stars-container.styles.js.map
