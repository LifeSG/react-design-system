"use strict";var r=require("styled-components"),e=require("../pill/pill.js"),o=require("../typography/index.js"),i=require("../v3_theme/index.js");function t(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var n=t(r);const l=n.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;

    ${e=>{switch(e.$variant){case"current":return r.css`
                    background-color: ${i.V3_Colour["icon-primary-subtle"]};
                `;case"upcoming-active":return r.css`
                    border: 4px solid ${i.V3_Colour["icon-primary-subtle"]};
                `;case"upcoming-inactive":return r.css`
                    border: 4px solid ${i.V3_Colour["icon-subtle"]};
                `;case"disabled":return r.css`
                    background-color: ${i.V3_Colour["icon-disabled-subtle"]};
                `;case"completed":return r.css`
                    background-color: ${i.V3_Colour["icon-success"]};
                    svg {
                        color: ${i.V3_Colour["icon-inverse"]};
                    }
                `;case"numeric":return r.css`
                    background-color: ${i.V3_Colour["icon-info"]};
                    color: ${i.V3_Colour["text-inverse"]};
                    font-size: ${i.V3_Font["body-sm-bold"]};
                `;case"error":return r.css`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${i.V3_Colour["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,c=n.default.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: ${i.V3_Radius.full};

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return r.css`
                    background-color: ${i.V3_Colour["icon-primary-subtle"]};
                `;case"upcoming-inactive":return r.css`
                    background-color: ${i.V3_Colour["icon-subtle"]};
                `;case"disabled":return r.css`
                    background-color: ${i.V3_Colour["icon-disabled-subtle"]};
                `;case"completed":return r.css`
                    background-color: ${i.V3_Colour["icon-success"]};
                `;case"numeric":return r.css`
                    background-color: ${i.V3_Colour["icon-info"]};
                `;case"error":return r.css`
                    margin-left: -0.15rem;
                    background-color: ${i.V3_Colour["icon-error"]};
                `}}}
`,s=n.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,a=n.default.div`
    grid-column: ${r=>r.$startCol?r.$startCol:3} / span
        ${r=>r.$colSpan?r.$colSpan:8};

    ${i.V3_MediaQuery.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${i.V3_MediaQuery.MaxWidth.sm} {
        grid-column: span 8;
    }
`,u=n.default(o.Typography.HeadingSM)`
    margin-bottom: 1rem;

    ${i.V3_MediaQuery.MaxWidth.lg} {
        margin-bottom: 1.5rem;
    }
`,d=n.default(o.Typography.HeadingXS)`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,m=n.default.div`
    display: flex;

    &:last-of-type ${c} {
        margin-bottom: 0;
    }
`,p=n.default.div`
    margin-bottom: 2rem;
    width: 100%;
`,g=n.default.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,b=n.default(e.Pill)`
    padding: 0.125rem 0.5rem;
`;exports.CircleIndicator=l,exports.LineIndicator=c,exports.TimelineIndicators=s,exports.TimelineItem=m,exports.TimelineItemContent=p,exports.TimelineItemTitle=d,exports.TimelinePill=b,exports.TimelinePills=g,exports.TimelineTitle=u,exports.TimelineWrapper=a;
//# sourceMappingURL=timeline.style.js.map
