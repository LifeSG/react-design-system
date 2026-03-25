"use strict";var e=require("@lifesg/react-icons/minus-square-fill"),i=require("styled-components"),t=require("../../v3_theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(i);const a=r.default.li`
    display: ${e=>e.$visible?"flex":"none"};
`,o=r.default.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${t.V3_Spacing["spacing-8"]};
    padding: ${t.V3_Spacing["spacing-12"]} ${t.V3_Spacing["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${t.V3_Radius.none};
    outline: none;

    ${e=>e.$active&&i.css`
            background: ${t.V3_Colour["bg-hover"]};
        `}
`,l=r.default.div`
    height: 1px;
    width: calc(
        (1lh + ${t.V3_Spacing["spacing-8"]}) * ${e=>e.$level}
    );
`,s=r.default.div`
    width: 1lh;
    height: 1lh;
    color: ${t.V3_Colour["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${t.V3_Motion["duration-350"]}
            ${t.V3_Motion["ease-standard"]};

        ${e=>{if(e.$expanded)return i.css`
                    transform: rotate(90deg);
                `}}
    }
`,d=r.default.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${t.V3_Spacing["spacing-8"]};
`,c=r.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":t.V3_Spacing["spacing-16"]};

    display: flex;
    justify-content: center;
`,h=r.default(e.MinusSquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: lh;
    r: ${t.V3_Colour["icon-selected"]};
`;exports.CheckboxMixedIndicator=h,exports.ExpandButton=s,exports.Indent=l,exports.ListItem=o,exports.ListItemContainer=a,exports.SelectionIndicator=c,exports.UnexpandableIndicator=d;
//# sourceMappingURL=nested-dropdown-list.styles.js.map
