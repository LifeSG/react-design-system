var r=function(r,e){if(r&&e){var t=Array.isArray(e)?e:e.split(","),a=r.name||"",n=(r.type||"").toLowerCase(),o=n.replace(/\/.*$/,"");return t.some((function(r){var e=r.trim().toLowerCase();return"."===e.charAt(0)?a.toLowerCase().endsWith(e):e.endsWith("/*")?o===e.replace(/\/.*$/,""):n===e}))}return!0};export{r as default};
//# sourceMappingURL=index.js.map
