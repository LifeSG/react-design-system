"use strict";var e=require("@lifesg/react-icons/minus-square-fill"),i=require("styled-components"),t=require("../../theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(i);const a=r.default.li`
    display: ${e=>e.$visible?"flex":"none"};
`,o=r.default.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${t.Spacing["spacing-8"]};
    padding: ${t.Spacing["spacing-12"]} ${t.Spacing["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${t.Radius.none};
    outline: none;

    ${e=>e.$active&&i.css`
            background: ${t.Colour["bg-hover"]};
        `}
`,l=r.default.div`
    height: 1px;
    width: calc((1lh + ${t.Spacing["spacing-8"]}) * ${e=>e.$level});
`,s=r.default.div`
    width: 1lh;
    height: 1lh;
    color: ${t.Colour["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${t.Motion["duration-350"]}
            ${t.Motion["ease-standard"]};

        ${e=>{if(e.$expanded)return i.css`
                    transform: rotate(90deg);
                `}}
    }
`,d=r.default.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${t.Spacing["spacing-8"]};
`,c=r.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":t.Spacing["spacing-16"]};

    display: flex;
    justify-content: center;
`,h=r.default(e.MinusSquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${t.Colour["icon-selected"]};
`;exports.CheckboxMixedIndicator=h,exports.ExpandButton=s,exports.Indent=l,exports.ListItem=o,exports.ListItemContainer=a,exports.SelectionIndicator=c,exports.UnexpandableIndicator=d;
//# sourceMappingURL=nested-dropdown-list.styles.js.map
