import styled from "styled-components";

import { Button } from "../button";
import { Typography } from "../typography";
import { V3_Colour, V3_MediaQuery, V3_Spacing } from "../v3_theme";

export const VerificationSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: ${V3_Colour["bg-strong"]};
    padding: ${V3_Spacing["spacing-16"]} ${V3_Spacing["spacing-32"]};
    gap: ${V3_Spacing["spacing-32"]};
    ${V3_MediaQuery.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${V3_Spacing["spacing-16"]};
        padding: ${V3_Spacing["spacing-16"]};
    }
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${V3_Spacing["spacing-16"]};
`;

export const ReSendMessage = styled(Typography.BodyMD)`
    color: ${V3_Colour["text-subtlest"]};
`;

export const VerifyInputWrapper = styled.div`
    display: flex;
    gap: ${V3_Spacing["spacing-8"]};
    max-width: 472px;
`;

export const VerifyButton = styled(Button.Default)`
    flex-shrink: 0;
    width: 83px;
`;
