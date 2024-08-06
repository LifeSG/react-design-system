import styled from "styled-components";
import { Alert } from "../alert";
import { Button } from "../button";
import { v2_Color } from "../v2_color";
import { v2_MediaQuery } from "../v2_media";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { V2_Text, V2_TextStyleHelper } from "../v2_text";

// =============================================================================
// STYLING
// =============================================================================
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`;

export const Title = styled(V2_Text.H4)`
    margin-bottom: 0.5rem;
`;

export const TitleContainer = styled.div`
    color: ${v2_Color.Neutral[1]};
    ${applyHtmlContentStyle({ textSize: "Body" })}
`;

export const Description = styled(V2_Text.BodySmall)`
    margin-bottom: 0;
    color: ${v2_Color.Neutral[3]};
`;

export const DescriptionContainer = styled.div`
    color: ${v2_Color.Neutral[3]};
    ${applyHtmlContentStyle({ textSize: "BodySmall" })}
`;

export const WarningAlert = styled(Alert)`
    margin-bottom: 2rem;
`;

export const UploadButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${v2_MediaQuery.MaxWidth.mobileL} {
        align-items: flex-start;
    }
`;

export const UploadButton = styled(Button.Small)`
    width: 10rem;

    ${v2_MediaQuery.MaxWidth.mobileL} {
        width: 100%;
    }
`;
export const UploadButtonLabel = styled.label`
    ${V2_TextStyleHelper.getTextStyle("BodySmall", "semibold")}
    color: ${v2_Color.Neutral[3]};
    margin-top: 0.5rem;
    width: 10rem;
    text-align: center;
    ${v2_MediaQuery.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`;

export const ErrorAlert = styled(Alert)`
    margin-bottom: 2rem;
`;
