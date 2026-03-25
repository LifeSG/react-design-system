"use strict";var e=require("styled-components"),o=require("../input/input.js"),r=require("../shared/clickable-icon/clickable-icon.js"),i=require("../typography/index.js"),t=require("../v3_theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(e);const l=a.default.nav`
    display: flex;
`,s=a.default.div`
    align-self: flex-start;

    display: flex;
    align-items: center;

    ${t.V3_MediaQuery.MaxWidth.lg} {
        align-self: center;
    }
`,d=a.default.div`
    display: inline-flex;
    align-items: center;
`,c=a.default(r.ClickableIcon)`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    border-radius: ${t.V3_Radius.sm};
    height: 2.5rem;
    width: 2.5rem;
    padding: 0 ${t.V3_Spacing["spacing-8"]};

    color: ${t.V3_Colour["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${t.V3_Colour["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${t.V3_Colour["bg-hover"]};
    }
`,u=a.default(r.ClickableIcon)`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    margin: ${t.V3_Spacing["spacing-4"]};
    border-radius: ${t.V3_Radius.sm};
    height: 2.5rem;
    width: 2.5rem;
    padding: 0 ${t.V3_Spacing["spacing-8"]};

    color: ${t.V3_Colour["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${t.V3_Colour["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${t.V3_Colour["bg-hover"]};
    }
`,g=a.default.button`
    outline: none;
    margin: ${t.V3_Spacing["spacing-4"]};
    box-shadow: none;
    border: ${t.V3_Border["width-010"]} ${t.V3_Border.solid}
        ${o=>e.css`
                ${o.$selected?t.V3_Colour["bg-primary"]:t.V3_Colour.border}
            `};
    border-radius: ${t.V3_Radius.sm};
    min-width: 2.5rem;
    height: 2.5rem;
    padding: 0 ${t.V3_Spacing["spacing-8"]};

    background: ${e=>e.$selected?t.V3_Colour["bg-primary"]:t.V3_Colour.bg};
    cursor: pointer;

    ${t.V3_Font["body-baseline-regular"]};
    text-align: center;
    color: ${e=>e.$selected?t.V3_Colour["text-inverse"]:t.V3_Colour.text};

    ${o=>o.$selected?e.css`
                  font-weight: ${t.V3_Font.Spec["weight-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${t.V3_Colour["bg-selected-strongest-hover"]};
                      background: ${t.V3_Colour["bg-selected-strongest-hover"]};
                      color: ${t.V3_Colour["text-inverse"]};
                  }
              `:e.css`
                  &:hover,
                  &:focus-visible {
                      border-color: ${t.V3_Colour["bg-hover"]};
                      background: ${t.V3_Colour["bg-hover"]};
                      color: ${t.V3_Colour["text-hover"]};
                      font-weight: ${t.V3_Font.Spec["weight-semibold"]};
                  }
              `}
`,p=a.default.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${t.V3_Spacing["spacing-4"]};
    border-radius: ${t.V3_Radius.sm};
    width: 2.5rem;
    height: 2.5rem;

    cursor: pointer;
`,b=a.default.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${t.V3_Spacing["spacing-4"]};

    color: ${t.V3_Colour.text};
`,h=a.default(i.Typography.BodyBL)`
    white-space: nowrap;
`,$=a.default(i.Typography.BodyBL)`
    margin: 0 ${t.V3_Spacing["spacing-16"]};
    white-space: nowrap;
`,V=a.default(o.Input)`
    width: 3.5rem;
    height: 2.5rem;
    ${t.V3_Font["body-baseline-regular"]};

    input {
        padding: 0 ${t.V3_Spacing["spacing-8"]};
        text-align: center;
    }
`,_=a.default.div`
    position: absolute;
    top: -${t.V3_Spacing["spacing-8"]};
    transform: translateY(-100%);

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: ${t.V3_Radius.sm};
    width: max-content;
    padding: ${t.V3_Spacing["spacing-4"]} ${t.V3_Spacing["spacing-12"]};

    background-color: ${t.V3_Colour["bg-hover"]};

    ${t.V3_Font["body-xs-regular"]}
    color: ${t.V3_Colour["text-hover"]};
`,m=a.default.div`
    margin-left: ${t.V3_Spacing["spacing-4"]};
    width: 10rem;
`;exports.EllipsisButton=c,exports.EllipsisContainer=p,exports.Hover=_,exports.InputSelectWrapper=m,exports.InputView=V,exports.Label=h,exports.LabelDivider=$,exports.NavigationButton=u,exports.PageItem=g,exports.PaginationList=s,exports.PaginationMenu=d,exports.PaginationMobileInput=b,exports.PaginationWrapper=l;
//# sourceMappingURL=pagination.styles.js.map
