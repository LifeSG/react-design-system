import { DragHandleIcon as DSDragHandleIcon } from "@lifesg/react-icons/drag-handle";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import styled from "styled-components";

import { Button as DSIconButton } from "../../button";
import {
    Border,
    Colour,
    MediaQuery,
    Radius,
    Shadow,
    Spacing,
} from "../../theme";
import { Typography } from "../../typography";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
export type ItemFocusType = "self" | "others" | "none";
export const itemDisabled = "fileUploadListItemDisabled";
export const itemSortable = "fileUploadListItemSortable";
export const itemSortableActive = "fileUploadListItemSortableActive";

export const dragHandleIconActive = "fileUploadListItemDragHandleIconActive";
export const dragHandleIconDisabled =
    "fileUploadListItemDragHandleIconDisabled";

export const boxFocused = "fileUploadListItemBoxFocused";
export const boxDisabled = "fileUploadListItemBoxDisabled";
export const boxError = "fileUploadListItemBoxError";
export const boxStackMobile = "fileUploadListItemBoxStackMobile";

export const contentSectionWithThumbnail =
    "fileUploadListItemContentSectionWithThumbnail";

export const fileSizeSectionHideInMobile =
    "fileUploadListItemFileSizeSectionHideInMobile";
export const fileSizeSectionExpandMobile =
    "fileUploadListItemFileSizeSectionExpandMobile";

export const actionContainerLoading =
    "fileUploadListItemActionContainerLoading";
export const actionContainerEditable =
    "fileUploadListItemActionContainerEditable";

// =============================================================================
// STYLING
// =============================================================================
export const Item = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${Spacing["spacing-16"]};
    }

    &.${itemDisabled} {
        cursor: not-allowed;
    }

    &.${itemSortableActive} {
        cursor: grabbing;
        touch-action: manipulation;
    }

    &.${itemSortable} {
        &:hover {
            cursor: grab;
        }
        touch-action: manipulation;
    }
`;

export const DragHandleIcon = styled(DSDragHandleIcon)`
    margin-right: ${Spacing["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${Colour["icon"]};

    &.${dragHandleIconActive} {
        color: ${Colour["icon-primary"]};
    }

    &.${dragHandleIconDisabled} {
        color: ${Colour["icon-disabled"]};
    }
`;

export const Box = styled.div`
    background: ${Colour["bg-primary-subtlest"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${MediaQuery.MaxWidth.md} {
        padding: ${Spacing["spacing-16"]};
    }

    &.${boxFocused} {
        border-color: ${Colour["border-focus"]};
        box-shadow: ${Shadow["xs-focus-strong"]};
    }

    &.${boxDisabled} {
        border-color: ${Colour["border-disabled"]};
    }

    &.${boxError} {
        background: ${Colour["bg-error"]};
        border-color: ${Colour["border-error"]};
    }

    &.${boxStackMobile} {
        ${MediaQuery.MaxWidth.md} {
            flex-direction: column;
            align-items: flex-start;
        }
    }
`;

export const ContentSection = styled.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${MediaQuery.MaxWidth.md} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    &.${contentSectionWithThumbnail} {
        ${MediaQuery.MaxWidth.md} {
            flex-direction: row;
            align-items: center;
        }
    }
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

    ${MediaQuery.MaxWidth.md} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`;

export const FileSizeSection = styled.div`
    display: flex;
    width: 5rem;
    margin-left: ${Spacing["spacing-8"]};
    justify-content: flex-end;

    &.${fileSizeSectionHideInMobile} {
        ${MediaQuery.MaxWidth.md} {
            display: none;
            visibility: hidden;
        }
    }

    &.${fileSizeSectionExpandMobile} {
        ${MediaQuery.MaxWidth.md} {
            width: 100%;
            margin-left: 0;
            margin-top: ${Spacing["spacing-8"]};
            justify-content: flex-start;
        }
    }
`;

export const FileSizeText = styled(Typography.BodyMD)`
    color: ${Colour["text-subtler"]};
`;

export const ItemText = styled(Typography.BodyMD)``;

export const ItemDescriptionText = styled(Typography.BodyMD)`
    margin-top: ${Spacing["spacing-4"]};
`;

export const ErrorIcon = styled(ExclamationCircleFillIcon)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${Colour["icon-error-strong"]};
`;

export const BaseErrorMessage = styled(Typography.BodySM)`
    color: ${Colour["text-error"]};
`;

export const DesktopErrorMessage = styled(Typography.BodySM)`
    color: ${Colour["text-error"]};
    margin-top: ${Spacing["spacing-4"]};
    display: flex;
    gap: ${Spacing["spacing-4"]};

    ${MediaQuery.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`;

export const MobileErrorMessage = styled(Typography.BodySM)`
    color: ${Colour["text-error"]};
    display: none;
    visibility: hidden;

    ${MediaQuery.MaxWidth.md} {
        display: flex;
        gap: ${Spacing["spacing-4"]};
        visibility: visible;
        margin-top: ${Spacing["spacing-8"]};
    }
`;

export const ActionContainer = styled.div`
    width: 6rem;
    margin-left: ${Spacing["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${MediaQuery.MaxWidth.md} {
        width: fit-content;
    }

    &.${actionContainerLoading} {
        ${MediaQuery.MaxWidth.md} {
            margin-left: 0;
            margin-top: ${Spacing["spacing-16"]};
            width: 100%;
        }
    }

    &.${actionContainerEditable} {
        ${MediaQuery.MaxWidth.md} {
            margin-left: 0;
            margin-top: ${Spacing["spacing-16"]};
            align-self: flex-end;
        }
    }
`;

export const IconButton = styled(DSIconButton)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${Spacing["spacing-16"]};
    }
`;
