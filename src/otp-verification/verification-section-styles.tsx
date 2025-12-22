import styled from "styled-components";
import { Typography } from "../typography";
import { Colour, MediaQuery, Spacing } from "../theme";

export const VerificationSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: ${Colour["bg-strong"]};
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
    gap: ${Spacing["spacing-32"]};
    ${MediaQuery.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${Spacing["spacing-16"]};
        padding: ${Spacing["spacing-16"]};
    }
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Spacing["spacing-16"]};
`;

export const TitleWrapper = styled.div``;

export const InputSectionWrapper = styled.div``;

export const ReSendMessage = styled(Typography.BodyMD)`
    color: ${Colour["text-subtlest"]};
`;

export const VerifyInputWrapper = styled.div`
    display: flex;
    gap: ${Spacing["spacing-8"]};
    max-width: 472px;
`;
