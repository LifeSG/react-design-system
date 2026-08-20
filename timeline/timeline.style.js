import r,{css as e}from"styled-components";import{Pill as o}from"../pill/pill.js";import{Colour as i,Font as n,Radius as t,MediaQuery as c}from"../theme/index.js";import{Typography as a}from"../typography/typography.js";const m=r.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;

    ${r=>{switch(r.$variant){case"current":return e`
                    background-color: ${i["icon-primary-subtle"]};
                `;case"upcoming-active":return e`
                    border: 4px solid ${i["icon-primary-subtle"]};
                `;case"upcoming-inactive":return e`
                    border: 4px solid ${i["icon-subtle"]};
                `;case"disabled":return e`
                    background-color: ${i["icon-disabled-subtle"]};
                `;case"completed":return e`
                    background-color: ${i["icon-success"]};
                    svg {
                        color: ${i["icon-inverse"]};
                    }
                `;case"numeric":return e`
                    background-color: ${i["icon-info"]};
                    color: ${i["text-inverse"]};
                    font-size: ${n["body-sm-bold"]};
                `;case"error":return e`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${i["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,s=r.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: ${t.full};

    ${r=>{switch(r.$variant){case"current":case"upcoming-active":return e`
                    background-color: ${i["icon-primary-subtle"]};
                `;case"upcoming-inactive":return e`
                    background-color: ${i["icon-subtle"]};
                `;case"disabled":return e`
                    background-color: ${i["icon-disabled-subtle"]};
                `;case"completed":return e`
                    background-color: ${i["icon-success"]};
                `;case"numeric":return e`
                    background-color: ${i["icon-info"]};
                `;case"error":return e`
                    margin-left: -0.15rem;
                    background-color: ${i["icon-error"]};
                `}}}
`,l=r.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,d=r.div`
    grid-column: ${r=>r.$startCol?r.$startCol:3} / span
        ${r=>r.$colSpan?r.$colSpan:8};

    ${c.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${c.MaxWidth.sm} {
        grid-column: span 8;
    }
`,u=r(a.HeadingSM)`
    margin-bottom: 1rem;

    ${c.MaxWidth.lg} {
        margin-bottom: 1.5rem;
    }
`,g=r(a.HeadingXS)`
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
