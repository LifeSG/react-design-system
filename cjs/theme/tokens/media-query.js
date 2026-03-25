"use strict";const s=["xxs","xs","sm","md","lg","xl"],t=[...s,"xxl"],x=(s,t)=>{const x={};return s.forEach((s=>{x[s]=((s,t)=>`body.fds-breakpoint-${s}-${t} &`)(s,t)})),x},i={MaxWidth:x(s,"max"),MinWidth:x(t,"min")};exports.MediaQuery=i;
//# sourceMappingURL=media-query.js.map
