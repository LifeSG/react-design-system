"use strict";var e=require("styled-components"),o=require("../shared/input-wrapper/input-wrapper.js"),r=require("../shared/styles/index.js"),t=require("../typography/index.js"),i=require("../v3_theme/index.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=s(e);const n=d.default.li`
    width: 100%;
`,a=d.default.span`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1rem;
    border-radius: ${i.V3_Radius.md};
    color: ${i.V3_Colour["icon-primary"]};
    transition: ${i.V3_Motion["duration-250"]} ${i.V3_Motion["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,l=d.default(t.Typography.BodyXS)`
    ${r.lineClampCss(2)}
    margin-top: 0.25rem;
    transition: ${i.V3_Motion["duration-250"]} ${i.V3_Motion["ease-default"]};
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
            background-color: ${i.V3_Colour["bg-hover"]};
        }

        ${l} {
            ${i.V3_Font["body-xs-semibold"]}
            color: ${i.V3_Colour["text-hover"]};
        }
    }

    ${o=>o.$highlight&&e.css`
            ${a} {
                background-color: ${i.V3_Colour["bg-hover"]};
            }

            ${l} {
                ${i.V3_Font["body-xs-semibold"]}
                color: ${i.V3_Colour["text-selected"]};
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
    background-color: ${i.V3_Colour["bg-primary-subtlest"]};
    border-top-right-radius: ${i.V3_Radius.md};
    border-bottom-right-radius: ${i.V3_Radius.md};
    border: ${i.V3_Border["width-010"]} ${i.V3_Border.solid} ${i.V3_Colour.border};
    ${o=>o.$showShadow&&e.css`
            box-shadow: ${i.V3_Shadow["xs-subtle"]};
            clip-path: inset(0 -6px 0 0);
        `}
`;exports.Container=n,exports.DefaultButton=u,exports.DesktopDrawer=p,exports.IconContainer=a,exports.TitleText=l;
//# sourceMappingURL=sidenav-item.styles.js.map
