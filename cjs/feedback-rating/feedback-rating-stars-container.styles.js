"use strict";var e=require("@lifesg/react-icons/star"),i=require("@lifesg/react-icons/star-fill"),t=require("styled-components"),r=require("../v3_theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(t);a.default.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`;const o=t.css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${r.V3_Colour["icon-primary"]};
`,s=a.default(e.StarIcon)`
    ${o}
`,l=a.default(i.StarFillIcon)`
    ${o}
`,c=a.default.div`
    margin: 0 ${r.V3_Spacing["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    ${r.V3_MediaQuery.MaxWidth.md} {
        margin: 0 ${r.V3_Spacing["spacing-8"]};
    }
`,d=a.default.div`
    display: flex;
    justify-content: center;
    margin: ${r.V3_Spacing["spacing-8"]} ${r.V3_Spacing["spacing-16"]};
    border-radius: ${r.V3_Radius.sm};
    outline: none;

    ${({$isFocused:e})=>e&&t.css`
            outline: ${r.V3_Border["width-020"]} ${r.V3_Border.solid}
                ${r.V3_Colour["icon-primary"]};
            outline-offset: 2px;
        `}
`;exports.Container=d,exports.Label=c,exports.StarFilled=l,exports.StarUnfilled=s;
//# sourceMappingURL=feedback-rating-stars-container.styles.js.map
