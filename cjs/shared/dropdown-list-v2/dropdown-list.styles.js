"use strict";var e=require("@lifesg/react-icons/exclamation-circle-fill"),i=require("@lifesg/react-icons/square"),r=require("@lifesg/react-icons/square-fill"),t=require("@lifesg/react-icons/square-tick-fill"),o=require("@lifesg/react-icons/tick"),a=require("styled-components"),n=require("../../v3_theme/index.js"),l=require("../component-loading-spinner/component-loading-spinner.js"),s=require("../html-content/html-content.js"),d=require("../input-wrapper/input-wrapper.js");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=c(a);const u=p.default.div`
    border: ${n.V3_Border["width-010"]} ${n.V3_Border.solid}
        ${n.V3_Colour.border};
    border-radius: ${n.V3_Radius.sm};
    background: ${n.V3_Colour.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${n.V3_MediaQuery.MaxWidth.sm} {
        --x-spacing: ${n.V3_Breakpoint["sm-margin"]}px;
        max-height: 15rem;
    }

    ${n.V3_MediaQuery.MaxWidth.xs} {
        --x-spacing: ${n.V3_Breakpoint["xs-margin"]}px;
    }

    ${n.V3_MediaQuery.MaxWidth.xxs} {
        --x-spacing: ${n.V3_Breakpoint["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?n.V3_Font["body-md-regular"]:n.V3_Font["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${n.V3_Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${n.V3_Radius.full};
        background-clip: padding-box;
    }
`,g=p.default.div`
    background: transparent;
    padding: ${n.V3_Spacing["spacing-8"]};
`,h=p.default.ul`
    list-style-type: none;
`,x=p.default.li`
    display: flex;
    align-items: flex-start;
    gap: ${n.V3_Spacing["spacing-8"]};
    padding: ${n.V3_Spacing["spacing-12"]} ${n.V3_Spacing["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${n.V3_Radius.none};
    outline: none;

    ${e=>e.$disabled?a.css`
                cursor: not-allowed;
            `:e.$active&&e.$selected?a.css`
                background: ${n.V3_Colour["bg-hover"]};
            `:e.$active?a.css`
                background: ${n.V3_Colour["bg-hover-subtle"]};
            `:void 0}
`,$=p.default(o.TickIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${n.V3_Colour["icon-selected"]};
`,b=p.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,m=p.default(t.SquareTickFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${n.V3_Colour["icon-selected"]};
`,f=p.default(i.SquareIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${n.V3_Colour["icon-primary-subtlest"]};
`,_=p.default(r.SquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${n.V3_Colour["icon-disabled-subtle"]};
`,V=p.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,w=p.default(d.BasicButton)`
    cursor: pointer;
    overflow: hidden;
    color: ${n.V3_Colour["text-primary"]};
    font-size: inherit;
`,v=p.default(w)`
    ${n.V3_Font["body-baseline-semibold"]}
`,k=p.default(w)`
    ${n.V3_Font["body-md-semibold"]}
    padding: ${n.V3_Spacing["spacing-8"]} ${n.V3_Spacing["spacing-8"]};
`,C=p.default.div`
    width: 100%;
    display: flex;
    padding: ${n.V3_Spacing["spacing-12"]} ${n.V3_Spacing["spacing-16"]};
    align-items: center;
`,S=p.default(e.ExclamationCircleFillIcon)`
    margin-right: ${n.V3_Spacing["spacing-4"]};
    color: ${n.V3_Colour["icon-error"]};
    height: 1em;
    width: 1em;
`,y=p.default(l.ComponentLoadingSpinner)`
    margin-right: ${n.V3_Spacing["spacing-8"]};
    color: ${n.V3_Colour.icon};
`,q=p.default.div`
    ${s.applyHtmlContentStyle()}
    color: ${n.V3_Colour["text-subtle"]};
    padding: 0 ${n.V3_Spacing["spacing-16"]} ${n.V3_Spacing["spacing-12"]}
        ${n.V3_Spacing["spacing-16"]};
`;exports.CheckboxDisabledIndicator=_,exports.CheckboxSelectedIndicator=m,exports.CheckboxUnselectedIndicator=f,exports.Container=u,exports.DropdownCommonButton=w,exports.LabelIcon=S,exports.List=g,exports.ListItem=x,exports.Listbox=h,exports.NoResultDescContainer=q,exports.ResultStateContainer=C,exports.SelectAllButton=k,exports.SelectAllContainer=V,exports.SelectedIndicator=$,exports.Spinner=y,exports.TryAgainButton=v,exports.UnselectedIndicator=b;
//# sourceMappingURL=dropdown-list.styles.js.map
