import e,{css as t}from"styled-components";import"../theme/theme-provider/index.js";import"react";import"../theme/theme-provider/context.js";import{Border as r}from"../theme/tokens/border.js";import{Colour as o}from"../theme/tokens/colour.js";import{Font as i}from"../theme/tokens/font.js";import"../theme/tokens/media-query.js";import{Motion as n}from"../theme/tokens/motion.js";import{Radius as s}from"../theme/tokens/radius.js";import{Spacing as m}from"../theme/tokens/spacing.js";import"../util/calendar-helper.js";import"../external/dayjs/dayjs.min.js";import"../util/simple-id-generator.js";import"../util/string-helper.js";import"@react-aria/live-announcer";const a=e.div`
    display: inline-flex;
    padding: ${m["spacing-8"]} ${m["spacing-16"]};
    align-items: center;
    border-radius: ${s.sm};
    border: ${r["width-010"]} ${r.solid} ${o.border};
    background: ${o.bg};
`,l=e.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    gap: 0 ${m["spacing-8"]};
    flex-wrap: wrap;
`,d=e.li`
    display: flex;
    align-items: center;
`,p=e.button`
    display: flex;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border: none;
    border-radius: ${s.md};
    ${i["body-md-semibold"]}
    color: ${o["text-subtler"]};
    text-align: center;
    transition: color ${n["duration-150"]} ${n["ease-default"]};

    ${({$active:e})=>e?t`
                  background: ${o["bg-primary-subtler"]};
                  color: ${o["text-selected"]};
                  cursor: default;
              `:t`
                  background: none;
                  cursor: pointer;

                  &:hover {
                      color: ${o["text-hover"]};
                      text-decoration: underline;
                  }
              `}

    &:focus-visible {
        outline: 2px solid ${o["focus-ring"]};
        outline-offset: -2px;
    }
`;export{a as LinkContainerWrapper,p as LinkItem,l as LinkList,d as LinkListItem};
//# sourceMappingURL=link-container-variant.style.js.map
