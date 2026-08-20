import t from"styled-components";import"../../util/calendar-helper.js";import"../../util/date-helper.js";import"../../util/date-input-helper.js";import{isReact19 as i}from"../../util/version.js";import"../../util/simple-id-generator.js";import"../../util/string-helper.js";import"react";import"@react-aria/live-announcer";const e=t.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,r=t=>i()?t:t?"true":void 0,o=(...t)=>t.filter((t=>!!t)).join(" ");export{e as VisuallyHidden,o as concatIds,r as inertValue};
//# sourceMappingURL=index.js.map
