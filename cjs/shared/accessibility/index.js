"use strict";var e=require("styled-components");require("../../util/calendar-helper.js"),require("../../util/date-helper.js"),require("../../util/date-input-helper.js");var r=require("../../util/version.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../util/simple-id-generator.js"),require("../../util/string-helper.js"),require("react"),require("@react-aria/live-announcer");const t=i(e).default.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;exports.VisuallyHidden=t,exports.concatIds=(...e)=>e.filter((e=>!!e)).join(" "),exports.inertValue=e=>r.isReact19()?e:e?"true":void 0;
//# sourceMappingURL=index.js.map
