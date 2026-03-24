import styled from "styled-components";
import { Alert } from "../alert";
import { Button } from "../button";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { Colour, MediaQuery, Spacing } from "../theme";
import { Typography } from "../typography";

// =============================================================================
// STYLING
// =============================================================================
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Spacing["spacing-32"]};
    gap: ${Spacing["spacing-8"]};
`;

export const Title = styled(Typography.BodyBL)``;

export const TitleContainer = styled.div`
    color: ${Colour.text};
    ${applyHtmlContentStyle({ textSize: "body-baseline" })}
`;

export const Description = styled(Typography.BodyMD)`
    color: ${Colour["text-subtler"]};
`;

export const DescriptionContainer = styled.div`
    color: ${Colour.text};
    ${applyHtmlContentStyle({ textSize: "body-md" })}
`;

export const WarningAlert = styled(Alert)`
    margin-bottom: ${Spacing["spacing-32"]};
`;

export const UploadButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${MediaQuery.MaxWidth.md} {
        align-items: flex-start;
    }
`;

export const UploadButton = styled(Button.Small)`
    width: 10rem;

    ${MediaQuery.MaxWidth.md} {
        width: 100%;
    }
`;

export const UploadButtonText = styled(Typography.BodyMD)`
    color: ${Colour["text-subtler"]};
    margin-top: ${Spacing["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${MediaQuery.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`;

export const ErrorAlert = styled(Alert)`
    margin-bottom: ${Spacing["spacing-32"]};
`;
