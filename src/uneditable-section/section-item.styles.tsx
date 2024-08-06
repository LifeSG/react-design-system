import { ExclamationTriangleIcon } from "@lifesg/react-icons/exclamation-triangle";
import styled, { css } from "styled-components";
import { v2_Color } from "../v2_color";
import { v2_MediaQuery } from "../v2_media";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner/component-loading-spinner";
import { TextStyleHelper } from "../text";
import { UneditableSectionItemDisplayWidth } from "./types";
import { Alert } from "../alert";

// =============================================================================
// STYLING INTERFACES
// =============================================================================
interface ContainerStyleProps {
    $widthStyle: UneditableSectionItemDisplayWidth;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.li<ContainerStyleProps>`
    display: flex;
    flex-direction: column;

    ${(props) => {
        switch (props.$widthStyle) {
            case "half":
                return css`
                    grid-column: auto / span 4;
                `;
            case "full":
                return css`
                    grid-column: auto / span 8;
                `;
        }
    }}

    ${v2_MediaQuery.MaxWidth.tablet} {
        grid-column: auto / span 8;
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
        grid-column: auto / span 4;
    }

    overflow-wrap: break-word;
`;

export const IconContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${v2_Color.Primary};
    margin-left: 0.5rem;

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`;

export const Clickable = styled.button`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    color: ${v2_Color.Neutral[1]};
    border: none;
    background: transparent;
    padding: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    overflow-wrap: anywhere;
    text-align: left;

    span {
        overflow-wrap: anywhere;
        text-align: left;
    }
`;

// -----------------------------------------------------------------------------
// LOADING DISPLAY
// -----------------------------------------------------------------------------
export const LoadingLabel = styled.span`
    color: ${v2_Color.Neutral[3]};
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${v2_Color.Neutral[3]} transparent transparent transparent;
    }
`;

// -----------------------------------------------------------------------------
// ERROR DISPLAY
// -----------------------------------------------------------------------------
export const ErrorIcon = styled(ExclamationTriangleIcon)`
    color: ${v2_Color.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`;

export const ErrorLabel = styled.span`
    color: ${v2_Color.Validation.Orange.Text};
`;

export const TryAgainLabel = styled.span`
    ${TextStyleHelper.getTextStyle("Body", "semibold")}
    color: ${v2_Color.Primary};
    text-decoration: underline;
    margin-left: 0.5rem;
`;

export const StyledAlert = styled(Alert)`
    margin-top: 0.5rem;
`;
