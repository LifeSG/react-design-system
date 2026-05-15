"use strict";var t=require("@lifesg/react-icons/chevron-right"),e=require("styled-components"),i=require("../theme/index.js"),n=require("../typography/typography.js");function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var a=r(e);const o=a.default.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${i.Spacing["spacing-32"]} 0;

    ${i.MediaQuery.MaxWidth.xl} {
        margin: ${i.Spacing["spacing-24"]} 0;
    }

    ${i.MediaQuery.MaxWidth.lg} {
        margin: ${i.Spacing["spacing-16"]} 0;
    }
`,l=a.default.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${i.Spacing["spacing-8"]};
    font-size: ${i.Font.Spec["body-size-md"]};
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${i.MediaQuery.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`,p=a.default.div`
    width: ${i.Spacing["spacing-64"]};
    height: calc(1lh + ${i.Spacing["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${t=>{let n;const r="rgba(255,255,255,0.001)",a=i.Colour.bg(t);return n="left"===t.$position?`\n\t\t\t\tleft: -8px;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${t.$backgroundColor||a}, \n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: 8px;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${t.$backgroundColor||a},\n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`,e.css`
            ${i.MediaQuery.MaxWidth.lg} {
                ${n}
            }
        `}};
`,s=a.default.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${t=>t.$styleProps||""};
`,g=a.default(t.ChevronRightIcon)`
    height: 1em;
    width: 1em;
    color: ${i.Colour["icon-subtle"]};
`,d=a.default(n.Typography.BodyMD)`
    display: inline-block;
    color: ${i.Colour["text-subtlest"]};
`,c=a.default(n.Typography.BodyMD)`
    margin: ${i.Spacing["spacing-8"]} !important;
`,u=a.default(n.Typography.LinkMD)`
    margin: ${i.Spacing["spacing-8"]} !important;
`;exports.Caret=g,exports.Content=l,exports.CurrentLabel=c,exports.Fade=p,exports.Item=s,exports.PreviousLink=u,exports.Slash=d,exports.Wrapper=o;
//# sourceMappingURL=breadcrumb.style.js.map
