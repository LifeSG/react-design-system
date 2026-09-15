"use strict";var e=require("styled-components"),o=require("../shared/input-wrapper/input-wrapper.js"),r=require("../shared/styles/index.js"),t=require("../theme/index.js"),i=require("../typography/typography.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=s(e);const n=d.default.li`
    width: 100%;
`,a=d.default.span`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1rem;
    border-radius: ${t.Radius.md};
    color: ${t.Colour["icon-primary"]};
    transition: ${t.Motion["duration-250"]} ${t.Motion["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,l=d.default(i.Typography.BodyXS)`
    ${r.lineClampCss(2)}
    margin-top: 0.25rem;
    transition: ${t.Motion["duration-250"]} ${t.Motion["ease-default"]};
`,u=d.default(o.BasicButton)`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        ${a} {
            background-color: ${t.Colour["bg-hover"]};
        }

        ${l} {
            ${t.Font["body-xs-semibold"]}
            color: ${t.Colour["text-hover"]};
        }
    }

    ${o=>o.$highlight&&e.css`
            ${a} {
                background-color: ${t.Colour["bg-hover"]};
            }

            ${l} {
                ${t.Font["body-xs-semibold"]}
                color: ${t.Colour["text-selected"]};
            }
        `}
`,p=d.default.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    overflow: auto;
    width: 15rem;
    height: 100%;
    padding: 1rem 0.5rem;
    background-color: ${t.Colour["bg-primary-subtlest"]};
    border-top-right-radius: ${t.Radius.md};
    border-bottom-right-radius: ${t.Radius.md};
    border: ${t.Border["width-010"]} ${t.Border.solid} ${t.Colour.border};
    ${o=>o.$showShadow&&e.css`
            box-shadow: ${t.Shadow["xs-subtle"]};
            clip-path: inset(0 -6px 0 0);
        `}
`;exports.Container=n,exports.DefaultButton=u,exports.DesktopDrawer=p,exports.IconContainer=a,exports.TitleText=l;
//# sourceMappingURL=sidenav-item.styles.js.map
