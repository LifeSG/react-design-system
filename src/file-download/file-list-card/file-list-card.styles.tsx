import { DragHandleIcon as DSDragHandleIcon } from "@lifesg/react-icons/drag-handle";
import styled, { css } from "styled-components";
import { Color } from "../../color";
import { IconButton as DSIconButton } from "../../icon-button";
import { MediaQuery } from "../../media";
import { Text } from "../../text";
import { ClickableIcon } from "../../shared/clickable-icon";
import { ComponentLoadingSpinner } from "../../shared/component-loading-spinner/component-loading-spinner";
import { MainStyleProps } from "../../button";

// =============================================================================
// STYLE INTERFACES
// =============================================================================

interface DragHandleIconStyleProps {
    $disabled?: boolean | undefined;
}

interface ContentSectionStyleProps {
    $hasThumbnail?: boolean | undefined;
}

interface FileSizeSectionStyleProps {
    $hideInMobile?: boolean | undefined;
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

export const DragHandleIcon = styled(
    DSDragHandleIcon
)<DragHandleIconStyleProps>`
    // Temp icon
    margin-right: 1rem;
    height: 1.5rem;
    width: 1.5rem;

    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${Color.Neutral[4]};
            `;
        }
    }}
`;

export const Box = styled.div`
    background: ${Color.Accent.Light[6]};
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    ${MediaQuery.MaxWidth.mobileL} {
        padding: 1rem;
    }
    :hover {
        background: ${Color.Accent.Light[5]};
    }
`;

export const ContentSection = styled.div<ContentSectionStyleProps>`
    display: flex;
    flex: 1;
    align-items: center;

    ${MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${(props) => {
        if (props.$hasThumbnail) {
            return css`
                ${MediaQuery.MaxWidth.mobileL} {
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
    max-width: 22.688rem;
`;

export const ExtendedNameSection = styled.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`;

export const FileSizeSection = styled.div<FileSizeSectionStyleProps>`
    display: flex;
    width: 5rem;
    margin-left: 0.5rem;
    justify-content: flex-end;

    ${MediaQuery.MaxWidth.mobileL} {
        ${(props) => {
            if (props.$hideInMobile) {
                return css`
                    display: none;
                    visibility: hidden;
                `;
            } else {
                return css`
                    width: 100%;
                    margin-left: 0;
                    margin-top: 0.5rem;
                    justify-content: flex-start;
                `;
            }
        }}
    }
`;

export const ItemText = styled(Text.BodySmall)``;
export const ItemDescriptionText = styled(ItemText)`
    margin-top: 0.25rem;
`;

export const BaseErrorMessage = styled(Text.XSmall)`
    font-size: 0.875rem !important;
    color: ${Color.Validation.Red.Text};
`;

export const DesktopErrorMessage = styled(BaseErrorMessage)`
    margin-top: 0.25rem;
    ${MediaQuery.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`;

export const MobileErrorMessage = styled(BaseErrorMessage)`
    display: none;
    visibility: hidden;
    ${MediaQuery.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`;

export const Spinner = styled(ComponentLoadingSpinner)<MainStyleProps>`
    ${(props) => {
        let color = Color.Primary(props);
        switch (props.$buttonStyle) {
            case "secondary":
            case "light":
            case "link":
                break;
            case "disabled":
                color = Color.Neutral[3](props);
                break;
            default:
                color = Color.Neutral[8](props);
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

    ${MediaQuery.MaxWidth.mobileL} {
        width: fit-content;
    }
`;

export const IconButton = styled(DSIconButton)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`;
