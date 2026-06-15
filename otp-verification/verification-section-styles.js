import i from"styled-components";import{Typography as t}from"../typography/typography.js";import{Colour as p,Spacing as o,MediaQuery as a}from"../theme/index.js";import{Button as n}from"../button/button.js";const s=i.div`
    display: flex;
    align-items: center;
    background-color: ${p["bg-strong"]};
    padding: ${o["spacing-16"]} ${o["spacing-32"]};
    gap: ${o["spacing-32"]};
    ${a.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${o["spacing-16"]};
        padding: ${o["spacing-16"]};
    }
`,e=i.div`
    display: flex;
    flex-direction: column;
    gap: ${o["spacing-16"]};
`,g=i(t.BodyMD)`
    color: ${p["text-subtlest"]};
`,r=i.div`
    display: flex;
    gap: ${o["spacing-8"]};
    max-width: 472px;
`,d=i(n.Default)`
    flex-shrink: 0;
    width: 83px;
`;export{g as ReSendMessage,e as SectionContainer,s as VerificationSectionWrapper,d as VerifyButton,r as VerifyInputWrapper};
//# sourceMappingURL=verification-section-styles.js.map
