const x=["xxs","xs","sm","md","lg","xl"],t=[...x,"xxl"],n=(x,t)=>{const n={};return x.forEach((x=>{n[x]=((x,t)=>`body.fds-breakpoint-${x}-${t} &`)(x,t)})),n},o={MaxWidth:n(x,"max"),MinWidth:n(t,"min")};export{o as MediaQuery};
//# sourceMappingURL=media-query.js.map
