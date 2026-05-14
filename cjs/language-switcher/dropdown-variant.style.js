"use strict";var e=require("styled-components");require("react/jsx-runtime"),require("clsx"),require("react"),require("../theme/theme-provider/index.js"),require("../theme/theme-provider/context.js");var r=require("../theme/tokens/border.js"),o=require("../theme/tokens/colour.js"),s=require("../theme/tokens/font.js");require("../theme/tokens/media-query.js");var i=require("../theme/tokens/radius.js"),t=require("../theme/tokens/spacing.js");require("../util/calendar-helper.js"),require("../external/dayjs/dayjs.min.js"),require("../util/simple-id-generator.js"),require("../util/string-helper.js"),require("@react-aria/live-announcer"),require("../shared/dropdown-list/dropdown-label.styles_1dwmd8f.css"),require("../shared/dropdown-list/dropdown-list.js"),require("../shared/dropdown-list/dropdown-list-state.js");var d=require("../shared/dropdown-list/expandable-element.js");require("@lifesg/react-icons/caret-right"),require("@lifesg/react-icons/exclamation-circle-fill"),require("@lifesg/react-icons/minus-square-fill"),require("@lifesg/react-icons/square"),require("@lifesg/react-icons/square-tick-fill"),require("@lifesg/react-icons/tick"),require("react-virtuoso"),require("../markup/markup.js"),require("../_virtual/_tslib.js"),require("../shared/component-loading-spinner/component-loading-spinner.styles_15eq02i.css"),require("../shared/dropdown-wrapper/element-with-dropdown.js"),require("../shared/input-wrapper/input-wrapper.js"),require("../shared/dropdown-list/dropdown-list.styles_1qveyb9.css"),require("../shared/dropdown-list/dropdown-search.js"),require("../shared/dropdown-list/nested-dropdown-list.styles_wdhxoe.css"),require("immer"),require("../external/lodash/_getTag.js"),require("../external/lodash/isArguments.js"),require("../external/lodash/_baseGetTag.js"),require("../external/lodash/isBuffer.js"),require("../external/lodash/isTypedArray.js"),require("../external/lodash/_Stack.js"),require("../external/lodash/_SetCache.js"),require("../external/lodash/_equalByTag.js"),require("../shared/dropdown-list/virtuoso-components.js");var a=require("../shared/dropdown-list/expandable-element.styles.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=l(e);const u=n.default(d.ExpandableElement)`
    min-width: 9rem;
    width: auto;
    ${s.Font["body-md-semibold"]}
    color: ${o.Colour["text-primary"]};
    height: 2.5rem;
    padding: 0 ${t.Spacing["spacing-16"]};
    border-radius: ${i.Radius.sm};
    border: ${r.Border["width-010"]} ${r.Border.solid} ${o.Colour.border};
    background: ${o.Colour.bg};

    .${a.iconContainer} {
        margin-left: auto;

        svg {
            color: ${o.Colour["text-selected"]};
        }
    }

    &:focus-visible {
        outline: 2px solid ${o.Colour["focus-ring"]};
        outline-offset: -2px;
    }
`,c=e.css`
    display: flex;
    align-items: center;

    svg {
        height: 1rem;
        width: 1rem;
    }
`,p=n.default.span`
    ${c}
    color: ${o.Colour["icon-primary"]};
`,q=n.default.div`
    border-radius: ${i.Radius.sm};
    border: ${r.Border["width-010"]} ${r.Border.solid} ${o.Colour.border};
    background: ${o.Colour.bg};
    overflow: hidden;
`,h=n.default.ul`
    list-style: none;
    margin: 0;
    padding: ${t.Spacing["spacing-8"]};
`,m=n.default.li`
    align-items: center;
    ${s.Font["body-md-regular"]}
    color: ${o.Colour.text};

    &:hover {
        background: ${o.Colour["bg-hover-subtle"]};
    }

    ${r=>r.$selected&&e.css`
            background: transparent;
            color: ${o.Colour["text-selected"]};

            &:hover {
                background: ${o.Colour["bg-hover"]};
            }
        `}
`;exports.DropdownItem=m,exports.DropdownList=h,exports.DropdownPanel=q,exports.LanguageIconWrapper=p,exports.StyledExpandableElement=u;
//# sourceMappingURL=dropdown-variant.style.js.map
