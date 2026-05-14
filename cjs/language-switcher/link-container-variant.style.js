"use strict";var e=require("styled-components");require("../theme/theme-provider/index.js"),require("react"),require("../theme/theme-provider/context.js");var r=require("../theme/tokens/border.js"),t=require("../theme/tokens/colour.js"),i=require("../theme/tokens/font.js");require("../theme/tokens/media-query.js");var o=require("../theme/tokens/motion.js"),n=require("../theme/tokens/radius.js"),s=require("../theme/tokens/spacing.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../util/calendar-helper.js"),require("../external/dayjs/dayjs.min.js"),require("../util/simple-id-generator.js"),require("../util/string-helper.js"),require("@react-aria/live-announcer");var u=a(e);const l=u.default.div`
    display: inline-flex;
    padding: ${s.Spacing["spacing-8"]} ${s.Spacing["spacing-16"]};
    align-items: center;
    border-radius: ${n.Radius.sm};
    border: ${r.Border["width-010"]} ${r.Border.solid} ${t.Colour.border};
    background: ${t.Colour.bg};
`,d=u.default.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    gap: 0 ${s.Spacing["spacing-8"]};
    flex-wrap: wrap;
`,c=u.default.li`
    display: flex;
    align-items: center;
`,p=u.default.button`
    display: flex;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border: none;
    border-radius: ${n.Radius.md};
    ${i.Font["body-md-semibold"]}
    color: ${t.Colour["text-subtler"]};
    text-align: center;
    transition: color ${o.Motion["duration-150"]} ${o.Motion["ease-default"]};

    ${({$active:r})=>r?e.css`
                  background: ${t.Colour["bg-primary-subtler"]};
                  color: ${t.Colour["text-selected"]};
                  cursor: default;
              `:e.css`
                  background: none;
                  cursor: pointer;

                  &:hover {
                      color: ${t.Colour["text-hover"]};
                      text-decoration: underline;
                  }
              `}

    &:focus-visible {
        outline: 2px solid ${t.Colour["focus-ring"]};
        outline-offset: -2px;
    }
`;exports.LinkContainerWrapper=l,exports.LinkItem=p,exports.LinkList=d,exports.LinkListItem=c;
//# sourceMappingURL=link-container-variant.style.js.map
