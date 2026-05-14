import i from"styled-components";import{Button as t}from"../button/button.js";import{Input as n}from"../input/input.js";import{Typography as o}from"../typography/index.js";import{V3_Spacing as e}from"../v3_theme/index.js";const r=i.div`
    display: flex;
    flex-direction: column;
`,m=i.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    gap: ${e["spacing-8"]};
`,p=i(n)`
    min-width: 20px;
    margin-bottom: 0rem !important;

    input {
        padding: 0;
        text-align: center;
    }
`,l=i(t.Small)`
    margin: ${e["spacing-32"]} 0;
`,a=i(o.BodyBL)`
    flex-shrink: 0;
`;export{l as CTAButton,m as InputContainer,p as InputField,a as Prefix,r as Wrapper};
//# sourceMappingURL=otp-input.styles.js.map
