"use strict";var e=require("react/jsx-runtime"),r=require("styled-components");require("../../_virtual/_tslib.js"),require("react"),require("../../modal-v2/index.js"),require("../../typography/typography.js"),require("../../v3_theme/index.js"),require("../../popover-v2/popover.styles.js");var o=require("../../popover-v2/popover-trigger.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../popover-v2/popover-inline/popover-inline.styles.js");const i=t(r).default(o.PopoverTrigger)`
    width: 100%;
    display: flex;
    flex-direction: column;
`;exports.WithOptionalPopover=({containerRef:r,children:o,customPopover:t})=>{if(!t)return o;const n={position:"bottom-start",rootNode:r,customOffset:t.offset,children:o,trigger:t.trigger,delay:t.delay,popoverContent:t.content};return e.jsx(i,Object.assign({zIndex:2},n))};
//# sourceMappingURL=with-optional-popover.js.map
