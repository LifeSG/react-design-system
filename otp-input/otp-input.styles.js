import t from"styled-components";import{Button as i}from"../button/button.js";import{Input as n}from"../input/input.js";import{Spacing as o}from"../theme/index.js";import{Typography as r}from"../typography/typography.js";const e=t.div`
    display: flex;
    flex-direction: column;
`,p=t.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    gap: ${o["spacing-8"]};
`,m=t(n)`
    min-width: 20px;
    margin-bottom: 0rem !important;

    input {
        padding: 0;
        text-align: center;
    }
`,a=t(i.Small)`
    margin: ${o["spacing-32"]} 0;
`,l=t(r.BodyBL)`
    flex-shrink: 0;
`;export{a as CTAButton,p as InputContainer,m as InputField,l as Prefix,e as Wrapper};
//# sourceMappingURL=otp-input.styles.js.map
