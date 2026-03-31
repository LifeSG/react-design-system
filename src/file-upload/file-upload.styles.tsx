import styled from "styled-components";

import { Alert } from "../alert";
import { Button } from "../button";
import { Markup } from "../markup";
import { Typography } from "../typography";
import { V3_Colour, V3_MediaQuery, V3_Spacing } from "../v3_theme";

// =============================================================================
// STYLING
// =============================================================================
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${V3_Spacing["spacing-32"]};
    gap: ${V3_Spacing["spacing-8"]};
`;

export const Title = styled(Typography.BodyBL)``;

export const TitleContainer = styled(Markup)`
    color: ${V3_Colour.text};
`;

export const Description = styled(Typography.BodyMD)`
    color: ${V3_Colour["text-subtler"]};
`;

export const DescriptionContainer = styled(Markup)`
    color: ${V3_Colour.text};
`;

export const WarningAlert = styled(Alert)`
    margin-bottom: ${V3_Spacing["spacing-32"]};
`;

export const UploadButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${V3_MediaQuery.MaxWidth.md} {
        align-items: flex-start;
    }
`;

export const UploadButton = styled(Button.Small)`
    width: 10rem;

    ${V3_MediaQuery.MaxWidth.md} {
        width: 100%;
    }
`;

export const UploadButtonText = styled(Typography.BodyMD)`
    color: ${V3_Colour["text-subtler"]};
    margin-top: ${V3_Spacing["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${V3_MediaQuery.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`;

export const ErrorAlert = styled(Alert)`
    margin-bottom: ${V3_Spacing["spacing-32"]};
`;
