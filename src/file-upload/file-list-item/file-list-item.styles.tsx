import { DragHandleIcon as DSDragHandleIcon } from "@lifesg/react-icons/drag-handle";
import styled, { css } from "styled-components";
import { IconButton as DSIconButton } from "../../icon-button";
import { ClickableIcon } from "../../shared/clickable-icon";
import { Border, Colour, MediaQuery, Radius, Spacing } from "../../theme";
import { Typography } from "../../typography";

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
    $active?: boolean | undefined;
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

    &:not(:last-child) {
        margin-bottom: ${Spacing["spacing-16"]};
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
                &:hover {
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
    margin-right: ${Spacing["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${Colour["icon"]};

    ${(props) => {
        if (props.$active) {
            return css`
                color: ${Colour["icon-primary"]};
            `;
        }

        if (props.$disabled) {
            return css`
                color: ${Colour["icon-disabled"]};
            `;
        }
    }};
`;

export const Box = styled.div<BoxStyleProps>`
    background: ${Colour["bg-primary-subtlest"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${MediaQuery.MaxWidth.sm} {
        padding: ${Spacing["spacing-16"]};
    }

    ${(props) => {
        if (props.$focused) {
            return css`
                border-color: ${Colour["border-focus"]};
                box-shadow: 0 0 4px 1px
                    rgb(from ${Colour["border-focus"]} r g b / 50%);
            `;
        } else if (props.$disabled) {
            return css`
                border-color: ${Colour["border-disabled"]};
            `;
        } else if (props.$error) {
            return css`
                background: ${Colour["bg-error"]};
                border-color: ${Colour["border-error"]};
            `;
        }
    }}

    ${(props) => {
        if (!props.$error && (props.$loading || props.$editable)) {
            return css`
                ${MediaQuery.MaxWidth.sm} {
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

    ${MediaQuery.MaxWidth.sm} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${(props) => {
        if (props.$hasThumbnail) {
            return css`
                ${MediaQuery.MaxWidth.sm} {
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

    ${MediaQuery.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`;

export const FileSizeSection = styled.div<FileSizeSectionStyleProps>`
    display: flex;
    width: 5rem;
    margin-left: ${Spacing["spacing-8"]};
    justify-content: flex-end;

    ${MediaQuery.MaxWidth.sm} {
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
                    margin-top: ${Spacing["spacing-8"]};
                    justify-content: flex-start;
                `;
            }
        }}
    }
`;

export const ItemText = styled(Typography.BodyMD)``;
export const ItemDescriptionText = styled(ItemText)`
    margin-top: ${Spacing["spacing-4"]};
`;

export const BaseErrorMessage = styled(Typography.BodySM)`
    color: ${Colour["text-error"]};
`;

export const DesktopErrorMessage = styled(BaseErrorMessage)`
    margin-top: ${Spacing["spacing-4"]};
    ${MediaQuery.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`;

export const MobileErrorMessage = styled(BaseErrorMessage)`
    display: none;
    visibility: hidden;
    ${MediaQuery.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${Spacing["spacing-8"]};
    }
`;

export const ActionContainer = styled.div<ActionContainerStyleProps>`
    width: 6rem;
    margin-left: ${Spacing["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${MediaQuery.MaxWidth.sm} {
        width: fit-content;

        ${(props) => {
            if (props.$loading && !props.$error) {
                return css`
                    margin-left: 0;
                    margin-top: ${Spacing["spacing-16"]};
                    width: 100%;
                `;
            } else if (props.$editable && !props.$error) {
                return css`
                    margin-left: 0;
                    margin-top: ${Spacing["spacing-16"]};
                    align-self: flex-end;
                `;
            }
        }}
    }
`;

export const IconButton = styled(DSIconButton)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${Spacing["spacing-16"]};
    }
`;

export const ErrorIconButton = styled(ClickableIcon)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Colour["icon"]};
    }
`;
