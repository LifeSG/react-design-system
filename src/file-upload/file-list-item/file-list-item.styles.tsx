import styled, { css } from "styled-components";
import { DragHandleIcon as DSDragHandleIcon } from "@lifesg/react-icons/drag-handle";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { IconButton as DSIconButton } from "../../icon-button";
import { ClickableIcon } from "../../shared/clickable-icon";
import {
    V3_Border,
    V3_Colour,
    V3_MediaQuery,
    V3_Radius,
    V3_Shadow,
    V3_Spacing,
} from "../../v3_theme";
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
        margin-bottom: ${V3_Spacing["spacing-16"]};
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
    margin-right: ${V3_Spacing["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${V3_Colour["icon"]};

    ${(props) => {
        if (props.$active) {
            return css`
                color: ${V3_Colour["icon-primary"]};
            `;
        }

        if (props.$disabled) {
            return css`
                color: ${V3_Colour["icon-disabled"]};
            `;
        }
    }};
`;

export const Box = styled.div<BoxStyleProps>`
    background: ${V3_Colour["bg-primary-subtlest"]};
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    border-radius: ${V3_Radius["sm"]};
    padding: ${V3_Spacing["spacing-16"]} ${V3_Spacing["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${V3_MediaQuery.MaxWidth.md} {
        padding: ${V3_Spacing["spacing-16"]};
    }

    ${(props) => {
        if (props.$focused) {
            return css`
                border-color: ${V3_Colour["border-focus"]};
                box-shadow: ${V3_Shadow["xs-focus-strong"]};
            `;
        } else if (props.$disabled) {
            return css`
                border-color: ${V3_Colour["border-disabled"]};
            `;
        } else if (props.$error) {
            return css`
                background: ${V3_Colour["bg-error"]};
                border-color: ${V3_Colour["border-error"]};
            `;
        }
    }}

    ${(props) => {
        if (!props.$error && (props.$loading || props.$editable)) {
            return css`
                ${V3_MediaQuery.MaxWidth.md} {
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

    ${V3_MediaQuery.MaxWidth.md} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${(props) => {
        if (props.$hasThumbnail) {
            return css`
                ${V3_MediaQuery.MaxWidth.md} {
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

    ${V3_MediaQuery.MaxWidth.md} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`;

export const FileSizeSection = styled.div<FileSizeSectionStyleProps>`
    display: flex;
    width: 5rem;
    margin-left: ${V3_Spacing["spacing-8"]};
    justify-content: flex-end;

    ${V3_MediaQuery.MaxWidth.md} {
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
                    margin-top: ${V3_Spacing["spacing-8"]};
                    justify-content: flex-start;
                `;
            }
        }}
    }
`;

export const ItemText = styled(Typography.BodyMD)``;
export const ItemDescriptionText = styled(ItemText)`
    margin-top: ${V3_Spacing["spacing-4"]};
`;

export const ErrorIcon = styled(ExclamationCircleFillIcon)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${V3_Colour["icon-error-strong"]};
`;

export const BaseErrorMessage = styled(Typography.BodySM)`
    color: ${V3_Colour["text-error"]};
`;

export const DesktopErrorMessage = styled(BaseErrorMessage)`
    margin-top: ${V3_Spacing["spacing-4"]};
    display: flex;
    gap: ${V3_Spacing["spacing-4"]};

    ${V3_MediaQuery.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`;

export const MobileErrorMessage = styled(BaseErrorMessage)`
    display: none;
    visibility: hidden;

    ${V3_MediaQuery.MaxWidth.md} {
        display: flex;
        gap: ${V3_Spacing["spacing-4"]};
        visibility: visible;
        margin-top: ${V3_Spacing["spacing-8"]};
    }
`;

export const ActionContainer = styled.div<ActionContainerStyleProps>`
    width: 6rem;
    margin-left: ${V3_Spacing["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${V3_MediaQuery.MaxWidth.md} {
        width: fit-content;

        ${(props) => {
            if (props.$loading && !props.$error) {
                return css`
                    margin-left: 0;
                    margin-top: ${V3_Spacing["spacing-16"]};
                    width: 100%;
                `;
            } else if (props.$editable && !props.$error) {
                return css`
                    margin-left: 0;
                    margin-top: ${V3_Spacing["spacing-16"]};
                    align-self: flex-end;
                `;
            }
        }}
    }
`;

export const IconButton = styled(DSIconButton)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${V3_Spacing["spacing-16"]};
    }
`;

export const ErrorIconButton = styled(ClickableIcon)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${V3_Colour["icon"]};
    }
`;
