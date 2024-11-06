import styled, { css } from "styled-components";
import { MainStyleProps } from "../../button";
import { V2_Color } from "../../v2_color";
import { IconButton as DSIconButton } from "../../icon-button";
import { V2_MediaQuery } from "../../v2_media";
import { ComponentLoadingSpinner } from "../../shared/component-loading-spinner/component-loading-spinner";
import { V2_Text } from "../../v2_text";
import { ImageWithFallback } from "../../shared/image-with-fallback/image-with-fallback";

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
        margin-bottom: 1rem;
    }
`;

export const Box = styled.div`
    background: ${V2_Color.Accent.Light[6]};
    border: 1px solid ${V2_Color.Neutral[5]};
    border-radius: 4px;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    ${V2_MediaQuery.MaxWidth.mobileL} {
        padding: 1rem;
    }
    :hover {
        background: ${V2_Color.Accent.Light[5]};
    }
`;

export const ContentSection = styled.div<ContentSectionStyleProps>`
    display: flex;
    flex: 1;
    align-items: center;

    ${V2_MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${(props) => {
        if (props.$hasThumbnail) {
            return css`
                ${V2_MediaQuery.MaxWidth.mobileL} {
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

    ${V2_MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`;

export const FileSizeSection = styled.div`
    display: flex;
    width: 5rem;
    margin-left: 0.5rem;
    justify-content: flex-end;
    ${V2_MediaQuery.MaxWidth.mobileL} {
        width: 100%;
        margin-left: 0;
        margin-top: 0.5rem;
        justify-content: flex-start;
    }
`;

export const ItemText = styled(V2_Text.BodySmall)`
    ${V2_MediaQuery.MaxWidth.mobileL} {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: normal;
    }
`;

export const ItemDescriptionText = styled(ItemText)`
    margin-top: 0.25rem;
`;

export const BaseErrorMessage = styled(V2_Text.XSmall)`
    font-size: 0.875rem !important;
    color: ${V2_Color.Validation.Red.Text};
`;

export const DesktopErrorMessage = styled(BaseErrorMessage)`
    margin-top: 0.25rem;
    ${V2_MediaQuery.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`;

export const MobileErrorMessage = styled(BaseErrorMessage)`
    display: none;
    visibility: hidden;
    ${V2_MediaQuery.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`;

export const Spinner = styled(ComponentLoadingSpinner)<MainStyleProps>`
    ${(props) => {
        let color = V2_Color.Primary(props);
        switch (props.$buttonStyle) {
            case "secondary":
            case "light":
            case "link":
                break;
            case "disabled":
                color = V2_Color.Neutral[3](props);
                break;
            default:
                color = V2_Color.Neutral[8](props);
                break;
        }

        return css`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${color} transparent transparent transparent;
            }
        `;
    }}
`;

export const ActionContainer = styled.div`
    width: 6rem;
    margin-left: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${V2_MediaQuery.MaxWidth.mobileL} {
        width: fit-content;
        margin-left: 1rem;
    }
`;

export const IconButton = styled(DSIconButton)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`;

export const ThumbnailContainer = styled.div`
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    ${V2_MediaQuery.MaxWidth.mobileL} {
        margin-right: 1rem;
    }
`;

export const Thumbnail = styled(ImageWithFallback)`
    width: 6rem;
    height: 6rem;
    aspect-ratio: 1;
    border-radius: 4px;
    border: 1px solid ${V2_Color.Neutral[5]};
    object-fit: cover;

    ${V2_MediaQuery.MaxWidth.mobileL} {
        width: 4rem;
        height: 4rem;
    }
`;
