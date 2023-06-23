import { MenuIcon } from "@lifesg/react-icons/menu";
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
    $hasThumbnail?: boolean | undefined;
}

interface ActionContainerStyleProps {
    $editable?: boolean | undefined;
    $error?: boolean | undefined;
    $loading?: boolean | undefined;
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

export const DragHandleIcon = styled(MenuIcon)<DragHandleIconStyleProps>`
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
    border-style: solid;
    border-width: 1px;
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
        } else {
            return css`
                border-color: ${Color.Neutral[5]};
            `;
        }
    }}

    ${(props) => {
        if (props.$loading || props.$hasThumbnail) {
            return css`
                ${MediaQuery.MaxWidth.mobileL} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `;
        }
    }}
`;

export const ContentSection = styled.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }
`;

export const DetailsSection = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`;

export const FileSizeSection = styled.div`
    display: flex;
    width: 5rem;
    margin-left: 0.5rem;
    justify-content: flex-end;

    ${MediaQuery.MaxWidth.mobileL} {
        width: 100%;
        margin-left: 0;
        margin-top: 0.5rem;
        justify-content: flex-start;
    }
`;

export const LoadingFileSizeSection = styled(FileSizeSection)`
    ${MediaQuery.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
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
