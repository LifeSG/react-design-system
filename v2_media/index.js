const e={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},t=t=>Object.keys(e).reduce(((d,i)=>{const o=e[i];return d[i]=`@media screen and (${t}: ${o}px)`,d}),{}),d={MaxWidth:t("max-width"),MinWidth:t("min-width")},i=e;export{d as V2_MediaQuery,i as V2_MediaWidths};
//# sourceMappingURL=index.js.map
