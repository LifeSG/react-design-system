"use strict";var e=require("styled-components");require("react/jsx-runtime"),require("react");var r=require("../theme/index.js");require("../util/string-helper.js"),require("../shared/dropdown-list/dropdown-label.styles.js"),require("../shared/dropdown-list/dropdown-list.js"),require("../shared/dropdown-list/dropdown-list-state.js");var o=require("../shared/dropdown-list/expandable-element.js");require("@lifesg/react-icons/caret-right"),require("react-virtuoso"),require("../button/button.style.js"),require("../util/calendar-helper.js"),require("../util/date-helper.js"),require("../util/date-input-helper.js"),require("../util/file-helper.js"),require("../util/simple-id-generator.js"),require("@react-aria/live-announcer"),require("../shared/dropdown-wrapper/element-with-dropdown.js");var t=require("../shared/dropdown-list/dropdown-list.styles.js");require("../shared/dropdown-list/dropdown-search.js"),require("immer"),require("../_virtual/isEmpty.js"),require("../_virtual/isEqual.js"),require("../shared/dropdown-list/nested-dropdown-list.styles.js"),require("../shared/dropdown-list/virtuoso-components.js");var d=require("../shared/dropdown-list/expandable-element.styles.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=i(e);const l=s.default(o.ExpandableElement)`
    min-width: 9rem;
    width: auto;
    ${r.Font["body-md-semibold"]}
    color: ${r.Colour["text-primary"]};
    height: 2.5rem;
    padding: 0 ${r.Spacing["spacing-16"]};
    border-radius: ${r.Radius.sm};
    border: ${r.Border["width-010"]} ${r.Border.solid} ${r.Colour.border};
    background: ${r.Colour.bg};

    ${d.IconContainer} {
        margin-left: auto;

        svg {
            color: ${r.Colour["text-selected"]};
        }
    }

    &:focus-visible {
        outline: 2px solid ${r.Colour["focus-ring"]};
        outline-offset: -2px;
    }
`,n=e.css`
    display: flex;
    align-items: center;

    svg {
        height: 1rem;
        width: 1rem;
    }
`,a=s.default.span`
    ${n}
    color: ${r.Colour["icon-primary"]};
`,u=s.default.div`
    border-radius: ${r.Radius.sm};
    border: ${r.Border["width-010"]} ${r.Border.solid} ${r.Colour.border};
    background: ${r.Colour.bg};
    overflow: hidden;
`,p=s.default.ul`
    list-style: none;
    margin: 0;
    padding: ${r.Spacing["spacing-8"]};
`,c=s.default(t.ListItem)`
    align-items: center;
    ${r.Font["body-md-regular"]}
    color: ${r.Colour.text};

    &:hover {
        background: ${r.Colour["bg-hover-subtle"]};
    }

    ${o=>o.$selected&&e.css`
            background: transparent;
            color: ${r.Colour["text-selected"]};

            &:hover {
                background: ${r.Colour["bg-hover"]};
            }
        `}
`;exports.SelectedIndicator=t.SelectedIndicator,exports.UnselectedIndicator=t.UnselectedIndicator,exports.DropdownItem=c,exports.DropdownList=p,exports.DropdownPanel=u,exports.LanguageIconWrapper=a,exports.StyledExpandableElement=l;
//# sourceMappingURL=dropdown-variant.style.js.map
