"use strict";var e=require("styled-components"),r=require("../theme/index.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=o(e);const i=t.default.div`
    display: inline-flex;
    padding: ${r.Spacing["spacing-8"]} ${r.Spacing["spacing-16"]};
    align-items: center;
    border-radius: ${r.Radius.sm};
    border: ${r.Border["width-010"]} ${r.Border.solid} ${r.Colour.border};
    background: ${r.Colour.bg};
`,n=t.default.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    gap: 0 ${r.Spacing["spacing-8"]};
    flex-wrap: wrap;
`,l=t.default.li`
    display: flex;
    align-items: center;
`,s=t.default.button`
    display: flex;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border: none;
    border-radius: ${r.Radius.md};
    ${r.Font["body-md-semibold"]}
    color: ${r.Colour["text-subtler"]};
    text-align: center;
    transition: color ${r.Motion["duration-150"]} ${r.Motion["ease-default"]};

    ${({$active:o})=>o?e.css`
                  background: ${r.Colour["bg-primary-subtler"]};
                  color: ${r.Colour["text-selected"]};
                  cursor: default;
              `:e.css`
                  background: none;
                  cursor: pointer;

                  &:hover {
                      color: ${r.Colour["text-hover"]};
                      text-decoration: underline;
                  }
              `}

    &:focus-visible {
        outline: 2px solid ${r.Colour["focus-ring"]};
        outline-offset: -2px;
    }
`;exports.LinkContainerWrapper=i,exports.LinkItem=s,exports.LinkList=n,exports.LinkListItem=l;
//# sourceMappingURL=link-container-variant.style.js.map
