"use strict";const s=["xxs","xs","sm","md","lg","xl"],t=[...s,"xxl"],x=(s,t)=>{const x={};return s.forEach((s=>{x[s]=((s,t)=>`:where(body.fds-breakpoint-${s}-${t}) &`)(s,t)})),x},e={MaxWidth:x(s,"max"),MinWidth:x(t,"min")};exports.MediaQuery=e;
//# sourceMappingURL=media-query.js.map
