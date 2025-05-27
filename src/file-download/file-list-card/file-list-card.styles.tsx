import styled, { css } from "styled-components";
import { IconButton as DSIconButton } from "../../icon-button";
import { ComponentLoadingSpinner } from "../../shared/component-loading-spinner";
import { ImageWithFallback } from "../../shared/image-with-fallback/image-with-fallback";
import { lineClampCss } from "../../shared/styles";
import { Border, Colour, Font, MediaQuery, Radius, Spacing } from "@/theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================

interface ContentSectionStyleProps {
    $hasThumbnail?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Item = styled.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${Spacing["spacing-16"]};
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
    cursor: pointer;

    background: ${Colour["bg-primary-subtlest"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};

    ${MediaQuery.MaxWidth.lg} {
        padding: ${Spacing["spacing-16"]};
    }

    :hover {
        background: ${Colour["bg-hover"]};
    }
`;

export const ContentSection = styled.div<ContentSectionStyleProps>`
    display: flex;
    flex: 1;
    align-items: center;

    ${MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${(props) => {
        if (props.$hasThumbnail) {
            return css`
                ${MediaQuery.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `;
        }
    }}
`;

export const NameSection = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`;

export const ExtendedNameSection = styled.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`;

export const FileSizeSection = styled.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${Spacing["spacing-8"]};

    ${Font["body-md-regular"]}
    color: ${Colour["text"]};

    ${MediaQuery.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${Spacing["spacing-8"]};

        ${lineClampCss(2)}
    }
`;

export const ItemNameText = styled.div`
    ${Font["body-md-regular"]}
    color: ${Colour["text"]};

    ${MediaQuery.MaxWidth.lg} {
        ${lineClampCss(2)}
    }
`;

export const ItemDescriptionText = styled(ItemNameText)`
    ${Font["body-md-regular"]}
    margin-top: ${Spacing["spacing-4"]};
`;

const BaseErrorMessage = styled.div`
    ${Font["body-sm-semibold"]}
    color: ${Colour["text-error"]};
`;

export const DesktopErrorMessage = styled(BaseErrorMessage)`
    margin-top: ${Spacing["spacing-4"]};
    ${MediaQuery.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`;

export const MobileErrorMessage = styled(BaseErrorMessage)`
    display: none;
    visibility: hidden;
    ${MediaQuery.MaxWidth.lg} {
        display: block;
        visibility: visible;
        margin-top: ${Spacing["spacing-8"]};
    }
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    color: ${Colour["icon-primary"]};
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${Spacing["spacing-32"]};

    ${MediaQuery.MaxWidth.lg} {
        margin-left: ${Spacing["spacing-16"]};
    }
`;

export const IconButton = styled(DSIconButton)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${Spacing["spacing-16"]};
    }
`;

export const ThumbnailContainer = styled.div`
    width: auto;
    margin-right: ${Spacing["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${MediaQuery.MaxWidth.lg} {
        margin-right: ${Spacing["spacing-16"]};
    }
`;

export const Thumbnail = styled(ImageWithFallback)`
    border-radius: ${Radius["sm"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${MediaQuery.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`;
