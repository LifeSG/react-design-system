import { DragHandleIcon as DSDragHandleIcon } from "@lifesg/react-icons/drag-handle";
import styled, { css } from "styled-components";
import { Color } from "../../color";
import { IconButton as DSIconButton } from "../../icon-button";
import { MediaQuery } from "../../media";
import { Text } from "../../text";
import { ClickableIcon } from "../../shared/clickable-icon";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
export type ItemFocusType = "self" | "others" | "none";
interface ItemStyleProps {
    $sortable: boolean;
    $disabled?: boolean | undefined;
    $focusType: ItemFocusType;
}

interface DragHandleIconStyleProps {
    $disabled?: boolean | undefined;
}

interface BoxStyleProps {
    $error?: boolean | undefined;
    $disabled?: boolean | undefined;
    $focused?: boolean | undefined;
    $loading?: boolean | undefined;
    $editable?: boolean | undefined;
}

interface ContentSectionStyleProps {
    $hasThumbnail?: boolean | undefined;
}

interface ActionContainerStyleProps {
    $editable?: boolean | undefined;
    $error?: boolean | undefined;
    $loading?: boolean | undefined;
}

interface FileSizeSectionStyleProps {
    $hideInMobile?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Item = styled.li<ItemStyleProps>`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: 1rem;
    }

    ${(props) => {
        if (props.$disabled && props.$focusType === "none") {
            // Show disabled cursor only if no dragging is happening
            return css`
                cursor: not-allowed;
            `;
        } else if (props.$sortable && props.$focusType === "self") {
            return css`
                cursor: grabbing;
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `;
        } else if (props.$sortable) {
            return css`
                :hover {
                    cursor: grab;
                }
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `;
        }
    }}
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

export const Box = styled.div<BoxStyleProps>`
    background: ${Color.Accent.Light[6]};
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    width: 100%;

    ${MediaQuery.MaxWidth.mobileL} {
        padding: 1rem;
    }

    ${(props) => {
        if (props.$focused) {
            return css`
                border-color: ${Color.Accent.Light[1]};
                box-shadow: 0 0 4px 1px ${Color.Shadow.Accent};
            `;
        } else if (props.$disabled) {
            return css`
                background: ${Color.Neutral[7]};
            `;
        } else if (props.$error) {
            return css`
                background: ${Color.Validation.Red.Background};
                border-color: ${Color.Validation.Red.Border};
            `;
        }
    }}

    ${(props) => {
        if (!props.$error && (props.$loading || props.$editable)) {
            return css`
                ${MediaQuery.MaxWidth.mobileL} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `;
        }
    }}
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

export const ActionContainer = styled.div<ActionContainerStyleProps>`
    width: 6rem;
    margin-left: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${MediaQuery.MaxWidth.mobileL} {
        width: fit-content;

        ${(props) => {
            if (props.$editable && !props.$error) {
                return css`
                    margin-left: 0;
                    margin-top: 1rem;
                    align-self: flex-end;
                `;
            }
        }}

        ${(props) => {
            if (props.$loading) {
                return css`
                    width: 100%;
                `;
            }
        }}
    }
`;

export const IconButton = styled(DSIconButton)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`;

export const ErrorIconButton = styled(ClickableIcon)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Color.Neutral[3]};
    }
`;
