"use strict";var e=require("styled-components"),o=require("../input/input.js"),r=require("../shared/clickable-icon/clickable-icon.js"),i=require("../theme/index.js"),t=require("../typography/typography.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(e);const l=a.default.nav`
    display: flex;
`,s=a.default.div`
    align-self: flex-start;

    display: flex;
    align-items: center;

    ${i.MediaQuery.MaxWidth.lg} {
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
    border-radius: ${i.Radius.sm};
    height: 2.5rem;
    width: 2.5rem;
    padding: 0 ${i.Spacing["spacing-8"]};

    color: ${i.Colour["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${i.Colour["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${i.Colour["bg-hover"]};
    }
`,u=a.default(r.ClickableIcon)`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    margin: ${i.Spacing["spacing-4"]};
    border-radius: ${i.Radius.sm};
    height: 2.5rem;
    width: 2.5rem;
    padding: 0 ${i.Spacing["spacing-8"]};

    color: ${i.Colour["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${i.Colour["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${i.Colour["bg-hover"]};
    }
`,g=a.default.button`
    outline: none;
    margin: ${i.Spacing["spacing-4"]};
    box-shadow: none;
    border: ${i.Border["width-010"]} ${i.Border.solid}
        ${o=>e.css`
                ${o.$selected?i.Colour["bg-primary"]:i.Colour.border}
            `};
    border-radius: ${i.Radius.sm};
    min-width: 2.5rem;
    height: 2.5rem;
    padding: 0 ${i.Spacing["spacing-8"]};

    background: ${e=>e.$selected?i.Colour["bg-primary"]:i.Colour.bg};
    cursor: pointer;

    ${i.Font["body-baseline-regular"]};
    text-align: center;
    color: ${e=>e.$selected?i.Colour["text-inverse"]:i.Colour.text};

    ${o=>o.$selected?e.css`
                  font-weight: ${i.Font.Spec["weight-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${i.Colour["bg-selected-strongest-hover"]};
                      background: ${i.Colour["bg-selected-strongest-hover"]};
                      color: ${i.Colour["text-inverse"]};
                  }
              `:e.css`
                  &:hover,
                  &:focus-visible {
                      border-color: ${i.Colour["bg-hover"]};
                      background: ${i.Colour["bg-hover"]};
                      color: ${i.Colour["text-hover"]};
                      font-weight: ${i.Font.Spec["weight-semibold"]};
                  }
              `}
`,p=a.default.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${i.Spacing["spacing-4"]};
    border-radius: ${i.Radius.sm};
    width: 2.5rem;
    height: 2.5rem;

    cursor: pointer;
`,b=a.default.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${i.Spacing["spacing-4"]};

    color: ${i.Colour.text};
`,h=a.default(t.Typography.BodyBL)`
    white-space: nowrap;
`,$=a.default(t.Typography.BodyBL)`
    margin: 0 ${i.Spacing["spacing-16"]};
    white-space: nowrap;
`,m=a.default(o.Input)`
    width: 3.5rem;
    height: 2.5rem;
    ${i.Font["body-baseline-regular"]};

    input {
        padding: 0 ${i.Spacing["spacing-8"]};
        text-align: center;
    }
`,f=a.default.div`
    position: absolute;
    top: -${i.Spacing["spacing-8"]};
    transform: translateY(-100%);

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: ${i.Radius.sm};
    width: max-content;
    padding: ${i.Spacing["spacing-4"]} ${i.Spacing["spacing-12"]};

    background-color: ${i.Colour["bg-hover"]};

    ${i.Font["body-xs-regular"]}
    color: ${i.Colour["text-hover"]};
`,x=a.default.div`
    margin-left: ${i.Spacing["spacing-4"]};
    width: 10rem;
`;exports.EllipsisButton=c,exports.EllipsisContainer=p,exports.Hover=f,exports.InputSelectWrapper=x,exports.InputView=m,exports.Label=h,exports.LabelDivider=$,exports.NavigationButton=u,exports.PageItem=g,exports.PaginationList=s,exports.PaginationMenu=d,exports.PaginationMobileInput=b,exports.PaginationWrapper=l;
//# sourceMappingURL=pagination.styles.js.map
