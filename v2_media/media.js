import{MediaWidths as e}from"../v2_spec/media-spec.js";const t=t=>Object.keys(e).reduce(((i,d)=>{const c=e[d];return i[d]=`@media screen and (${t}: ${c}px)`,i}),{}),i={MaxWidth:t("max-width"),MinWidth:t("min-width")},d=e;export{i as V2_MediaQuery,d as V2_MediaWidths};
//# sourceMappingURL=media.js.map
