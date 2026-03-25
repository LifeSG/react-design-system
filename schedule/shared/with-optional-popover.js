import{jsx as o}from"react/jsx-runtime";import t from"styled-components";import"../../_virtual/_tslib.js";import"react";import"../../modal-v2/index.js";import"../../typography/typography.js";import"../../v3_theme/index.js";import"../../popover-v2/popover.styles.js";import{PopoverTrigger as r}from"../../popover-v2/popover-trigger.js";import"../../popover-v2/popover-inline/popover-inline.styles.js";const e=t(r)`
    width: 100%;
    display: flex;
    flex-direction: column;
`,p=({containerRef:t,children:r,customPopover:p})=>{if(!p)return r;const i={position:"bottom-start",rootNode:t,customOffset:p.offset,children:r,trigger:p.trigger,delay:p.delay,popoverContent:p.content};return o(e,Object.assign({zIndex:2},i))};export{p as WithOptionalPopover};
//# sourceMappingURL=with-optional-popover.js.map
