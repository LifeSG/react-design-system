import e from"styled-components";import{Button as r}from"../button/button.js";import{V3_MediaQuery as t,V3_Colour as i}from"../v3_theme/index.js";const m=e.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    ${t.MaxWidth.md} {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,d=e.div`
    border-top: 1px solid ${i.border};
    border-bottom: 1px solid ${i.border};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    ${t.MaxWidth.md} {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,o=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    ${t.MaxWidth.md} {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,n=e(r.Default)`
    margin-top: 1rem;
    width: 100%;
`;export{o as ChildContainer,m as Image,d as MainContainer,n as SubmitButton};
//# sourceMappingURL=feedback-rating.styles.js.map
