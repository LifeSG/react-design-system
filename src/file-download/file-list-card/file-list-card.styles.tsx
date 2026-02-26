import styled, { css } from "styled-components";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { IconButton as DSIconButton } from "../../icon-button";
import { ComponentLoadingSpinner } from "../../shared/component-loading-spinner";
import { ImageWithFallback } from "../../shared/image-with-fallback/image-with-fallback";
import { lineClampCss } from "../../shared/styles";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_MediaQuery,
    V3_Radius,
    V3_Spacing,
} from "../../v3_theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================

interface BoxStyleProps {
    $error?: boolean | undefined;
}

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

    &:not(:last-child) {
        margin-bottom: ${V3_Spacing["spacing-16"]};
    }
`;

export const Box = styled.div<BoxStyleProps>`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${V3_Spacing["spacing-16"]} ${V3_Spacing["spacing-32"]};
    cursor: pointer;

    background: ${V3_Colour["bg-primary-subtlest"]};
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    border-radius: ${V3_Radius["sm"]};

    ${V3_MediaQuery.MaxWidth.lg} {
        padding: ${V3_Spacing["spacing-16"]};
    }

    &:hover {
        background: ${V3_Colour["bg-hover"]};
    }

    ${(props) => {
        if (props.$error) {
            return css`
                background: ${V3_Colour["bg-error"]};
                border-color: ${V3_Colour["border-error"]};

                &:hover {
                    background: ${V3_Colour["bg-error"]};
                }
            `;
        }
    }}
`;

export const ContentSection = styled.div<ContentSectionStyleProps>`
    display: flex;
    flex: 1;
    align-items: center;

    ${V3_MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${(props) => {
        if (props.$hasThumbnail) {
            return css`
                ${V3_MediaQuery.MaxWidth.lg} {
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

    ${V3_MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`;

export const FileSizeSection = styled.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${V3_Spacing["spacing-8"]};

    ${V3_Font["body-md-regular"]}
    color: ${V3_Colour["text"]};

    ${V3_MediaQuery.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${V3_Spacing["spacing-8"]};

        ${lineClampCss(2)}
    }
`;

export const ItemNameText = styled.div`
    ${V3_Font["body-md-regular"]}
    color: ${V3_Colour["text"]};

    ${V3_MediaQuery.MaxWidth.lg} {
        ${lineClampCss(2)}
    }
`;

export const ItemDescriptionText = styled(ItemNameText)`
    ${V3_Font["body-md-regular"]}
    margin-top: ${V3_Spacing["spacing-4"]};
`;

export const ErrorIcon = styled(ExclamationCircleFillIcon)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${V3_Colour["icon-error-strong"]};
`;

const BaseErrorMessage = styled.div`
    ${V3_Font["body-sm-semibold"]}
    color: ${V3_Colour["text-error"]};
`;

export const DesktopErrorMessage = styled(BaseErrorMessage)`
    margin-top: ${V3_Spacing["spacing-4"]};
    display: flex;
    gap: ${V3_Spacing["spacing-4"]};

    ${V3_MediaQuery.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`;

export const MobileErrorMessage = styled(BaseErrorMessage)`
    display: none;
    visibility: hidden;

    ${V3_MediaQuery.MaxWidth.lg} {
        display: flex;
        gap: ${V3_Spacing["spacing-4"]};
        visibility: visible;
        margin-top: ${V3_Spacing["spacing-8"]};
    }
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    color: ${V3_Colour["icon-primary"]};
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${V3_Spacing["spacing-32"]};

    ${V3_MediaQuery.MaxWidth.lg} {
        margin-left: ${V3_Spacing["spacing-16"]};
    }
`;

export const IconButton = styled(DSIconButton)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${V3_Spacing["spacing-16"]};
    }
`;

export const ThumbnailContainer = styled.div`
    width: auto;
    margin-right: ${V3_Spacing["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${V3_MediaQuery.MaxWidth.lg} {
        margin-right: ${V3_Spacing["spacing-16"]};
    }
`;

export const Thumbnail = styled(ImageWithFallback)`
    border-radius: ${V3_Radius["sm"]};
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${V3_MediaQuery.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`;
