import e,{css as i}from"styled-components";import{Font as l,Colour as t}from"../../theme/index.js";import{lineClampCss as r}from"../styles/index.js";const o=e.div`
    font-weight: ${e=>e.$bold?l.Spec["weight-semibold"]:l.Spec["weight-regular"]};

    ${e=>e.$disabled?i`
                color: ${t["text-disabled"]};
            `:e.$selected?i`
                color: ${t["text-selected"]};
            `:i`
                color: ${t.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&r(e.$maxLines||2)}
    overflow-wrap: break-word;
`,d=e.div`
    color: ${t["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&r(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?i`
                    ${l["body-md-semibold"]}
                `:i`
                    ${"small"===e.$variant?l["body-md-regular"]:l["body-baseline-regular"]}
                `}
`,a=e.span`
    font-weight: ${l.Spec["weight-semibold"]};
`,n=e.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?l["body-md-regular"]:l["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i`
                    ${o} {
                        display: inline;
                    }

                    ${d} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,s=e.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,$=e.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;export{n as Label,a as MatchedText,o as PrimaryText,d as SecondaryText,s as TruncateFirstLine,$ as TruncateSecondLine};
//# sourceMappingURL=dropdown-label.styles.js.map
