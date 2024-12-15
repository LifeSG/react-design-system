import { ExclamationTriangleIcon } from "@lifesg/react-icons/exclamation-triangle";
import styled, { css } from "styled-components";
import { Alert } from "../alert";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner/component-loading-spinner";
import { Colour, Font, FontSpec, MediaQuery } from "../theme";
import { UneditableSectionItemDisplayWidth } from "./types";

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

    ${MediaQuery.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`;

export const IconContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${Colour["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${FontSpec["body-size-baseline"]};
        height: ${FontSpec["body-size-baseline"]};
    }
`;

export const Clickable = styled.button`
    ${Font["body-baseline-regular"]}
    color: ${Colour["text"]};
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
    color: ${Colour["text-disabled"]};
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    margin-right: 0.5rem;
    color: ${Colour["text-disabled"]};
`;

// -----------------------------------------------------------------------------
// ERROR DISPLAY
// -----------------------------------------------------------------------------
export const ErrorIcon = styled(ExclamationTriangleIcon)`
    color: ${Colour["icon-warning"]};
    margin-right: 0.5rem;
    height: ${FontSpec["body-size-baseline"]};
    width: ${FontSpec["body-size-baseline"]};
`;

export const ErrorLabel = styled.span`
    color: ${Colour["text-warning"]};
`;

export const TryAgainLabel = styled.span`
    ${Font["body-baseline-semibold"]}
    color: ${Colour["hyperlink"]};
    text-decoration: underline;
    margin-left: 0.5rem;
`;

export const StyledAlert = styled(Alert)`
    margin-top: 0.5rem;
`;
