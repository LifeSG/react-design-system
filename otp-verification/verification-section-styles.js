import i from"styled-components";import{Button as t}from"../button/button.js";import{Typography as n}from"../typography/index.js";import{V3_Colour as o,V3_Spacing as p,V3_MediaQuery as a}from"../v3_theme/index.js";const s=i.div`
    display: flex;
    align-items: center;
    background-color: ${o["bg-strong"]};
    padding: ${p["spacing-16"]} ${p["spacing-32"]};
    gap: ${p["spacing-32"]};
    ${a.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${p["spacing-16"]};
        padding: ${p["spacing-16"]};
    }
`,e=i.div`
    display: flex;
    flex-direction: column;
    gap: ${p["spacing-16"]};
`,d=i(n.BodyMD)`
    color: ${o["text-subtlest"]};
`,g=i.div`
    display: flex;
    gap: ${p["spacing-8"]};
    max-width: 472px;
`,r=i(t.Default)`
    flex-shrink: 0;
    width: 83px;
`;export{d as ReSendMessage,e as SectionContainer,s as VerificationSectionWrapper,r as VerifyButton,g as VerifyInputWrapper};
//# sourceMappingURL=verification-section-styles.js.map
