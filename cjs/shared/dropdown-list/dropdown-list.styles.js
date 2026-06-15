"use strict";var e=require("@lifesg/react-icons/exclamation-circle-fill"),i=require("@lifesg/react-icons/square"),r=require("@lifesg/react-icons/square-fill"),t=require("@lifesg/react-icons/square-tick-fill"),o=require("@lifesg/react-icons/tick"),a=require("styled-components"),n=require("../../theme/index.js"),l=require("../component-loading-spinner/component-loading-spinner.js"),d=require("../html-content/html-content.js"),s=require("../input-wrapper/input-wrapper.js");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=c(a);const u=p.default.div`
    border: ${n.Border["width-010"]} ${n.Border.solid} ${n.Colour.border};
    border-radius: ${n.Radius.sm};
    background: ${n.Colour.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${n.MediaQuery.MaxWidth.sm} {
        --x-spacing: ${n.Breakpoint["sm-margin"]}px;
        max-height: 15rem;
    }

    ${n.MediaQuery.MaxWidth.xs} {
        --x-spacing: ${n.Breakpoint["xs-margin"]}px;
    }

    ${n.MediaQuery.MaxWidth.xxs} {
        --x-spacing: ${n.Breakpoint["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?n.Font["body-md-regular"]:n.Font["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${n.Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${n.Radius.full};
        background-clip: padding-box;
    }
`,g=p.default.div`
    background: transparent;
    padding: ${n.Spacing["spacing-8"]};
`,h=p.default.li`
    display: flex;
    align-items: flex-start;
    gap: ${n.Spacing["spacing-8"]};
    padding: ${n.Spacing["spacing-12"]} ${n.Spacing["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${n.Radius.none};
    outline: none;

    ${e=>e.$disabled?a.css`
                cursor: not-allowed;
            `:e.$active&&e.$selected?a.css`
                background: ${n.Colour["bg-hover"]};
            `:e.$active?a.css`
                background: ${n.Colour["bg-hover-subtle"]};
            `:void 0}
`,x=p.default(o.TickIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${n.Colour["icon-selected"]};
`,$=p.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,b=p.default(t.SquareTickFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${n.Colour["icon-selected"]};
`,m=p.default(i.SquareIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${n.Colour["icon-primary-subtlest"]};
`,f=p.default(r.SquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${n.Colour["icon-disabled-subtle"]};
`,w=p.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,v=p.default(s.BasicButton)`
    cursor: pointer;
    overflow: hidden;
    color: ${n.Colour["text-primary"]};
    font-size: inherit;
`,k=p.default(v)`
    ${n.Font["body-baseline-semibold"]}
`,C=p.default(v)`
    ${n.Font["body-md-semibold"]}
    padding: ${n.Spacing["spacing-8"]} ${n.Spacing["spacing-8"]};
`,S=p.default.div`
    width: 100%;
    display: flex;
    padding: ${n.Spacing["spacing-12"]} ${n.Spacing["spacing-16"]};
    align-items: center;
`,y=p.default(e.ExclamationCircleFillIcon)`
    margin-right: ${n.Spacing["spacing-4"]};
    color: ${n.Colour["icon-error"]};
    height: 1em;
    width: 1em;
`,q=p.default(l.ComponentLoadingSpinner)`
    margin-right: ${n.Spacing["spacing-8"]};
    color: ${n.Colour.icon};
`,I=p.default.div`
    ${d.applyHtmlContentStyle()}
    color: ${n.Colour["text-subtle"]};
    padding: 0 ${n.Spacing["spacing-16"]} ${n.Spacing["spacing-12"]}
        ${n.Spacing["spacing-16"]};
`;exports.CheckboxDisabledIndicator=f,exports.CheckboxSelectedIndicator=b,exports.CheckboxUnselectedIndicator=m,exports.Container=u,exports.DropdownCommonButton=v,exports.LabelIcon=y,exports.List=g,exports.ListItem=h,exports.NoResultDescContainer=I,exports.ResultStateContainer=S,exports.SelectAllButton=C,exports.SelectAllContainer=w,exports.SelectedIndicator=x,exports.Spinner=q,exports.TryAgainButton=k,exports.UnselectedIndicator=$;
//# sourceMappingURL=dropdown-list.styles.js.map
