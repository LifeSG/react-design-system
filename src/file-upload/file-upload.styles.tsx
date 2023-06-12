import styled from "styled-components";
import { Alert } from "../alert";
import { Text, TextStyleHelper } from "../text";
import { MediaQuery } from "../media";
import { Button } from "../button";
import { Color } from "../color";

// =============================================================================
// STYLING
// =============================================================================
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`;

export const Title = styled(Text.H4)`
    margin-bottom: 0.5rem;
`;

export const Description = styled(Text.BodySmall)`
    margin-bottom: 0;
    color: ${Color.Neutral[3]};
`;

export const ItemsContainer = styled.ul`
    list-style-type: none;
    margin-bottom: 2rem;
`;

export const WarningAlert = styled(Alert)`
    margin-bottom: 2rem;
`;

export const UploadButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${MediaQuery.MaxWidth.mobileL} {
        align-items: flex-start;
    }
`;

export const UploadButton = styled(Button.Small)`
    width: 10rem;

    ${MediaQuery.MaxWidth.mobileL} {
        width: 100%;
    }
`;
export const UploadButtonLabel = styled.label`
    ${TextStyleHelper.getTextStyle("BodySmall", "semibold")}
    color: ${Color.Neutral[3]};
    margin-top: 0.5rem;
    width: 10rem;
    text-align: center;
    ${MediaQuery.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`;
