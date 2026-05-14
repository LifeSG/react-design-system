import r,{css as e}from"styled-components";import{Pill as o}from"../pill/pill.js";import{Typography as i}from"../typography/index.js";import{V3_Colour as n,V3_Font as t,V3_Radius as c,V3_MediaQuery as a}from"../v3_theme/index.js";const m=r.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;

    ${r=>{switch(r.$variant){case"current":return e`
                    background-color: ${n["icon-primary-subtle"]};
                `;case"upcoming-active":return e`
                    border: 4px solid ${n["icon-primary-subtle"]};
                `;case"upcoming-inactive":return e`
                    border: 4px solid ${n["icon-subtle"]};
                `;case"disabled":return e`
                    background-color: ${n["icon-disabled-subtle"]};
                `;case"completed":return e`
                    background-color: ${n["icon-success"]};
                    svg {
                        color: ${n["icon-inverse"]};
                    }
                `;case"numeric":return e`
                    background-color: ${n["icon-info"]};
                    color: ${n["text-inverse"]};
                    font-size: ${t["body-sm-bold"]};
                `;case"error":return e`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${n["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,s=r.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: ${c.full};

    ${r=>{switch(r.$variant){case"current":case"upcoming-active":return e`
                    background-color: ${n["icon-primary-subtle"]};
                `;case"upcoming-inactive":return e`
                    background-color: ${n["icon-subtle"]};
                `;case"disabled":return e`
                    background-color: ${n["icon-disabled-subtle"]};
                `;case"completed":return e`
                    background-color: ${n["icon-success"]};
                `;case"numeric":return e`
                    background-color: ${n["icon-info"]};
                `;case"error":return e`
                    margin-left: -0.15rem;
                    background-color: ${n["icon-error"]};
                `}}}
`,l=r.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,d=r.div`
    grid-column: ${r=>r.$startCol?r.$startCol:3} / span
        ${r=>r.$colSpan?r.$colSpan:8};

    ${a.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${a.MaxWidth.sm} {
        grid-column: span 8;
    }
`,u=r(i.HeadingSM)`
    margin-bottom: 1rem;

    ${a.MaxWidth.lg} {
        margin-bottom: 1.5rem;
    }
`,g=r(i.HeadingXS)`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,p=r.div`
    display: flex;

    &:last-of-type ${s} {
        margin-bottom: 0;
    }
`,b=r.div`
    margin-bottom: 2rem;
    width: 100%;
`,$=r.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,h=r(o)`
    padding: 0.125rem 0.5rem;
`;export{m as CircleIndicator,s as LineIndicator,l as TimelineIndicators,p as TimelineItem,b as TimelineItemContent,g as TimelineItemTitle,h as TimelinePill,$ as TimelinePills,u as TimelineTitle,d as TimelineWrapper};
//# sourceMappingURL=timeline.style.js.map
