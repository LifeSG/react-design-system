import{_ as e}from"./_memoizeCapped.js";var r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,p=e((function(e){var p=[];return 46===e.charCodeAt(0)&&p.push(""),e.replace(r,(function(e,r,o,t){p.push(o?t.replace(a,"$1"):r||e)})),p}));export{p as _};
//# sourceMappingURL=_stringToPath.js.map
