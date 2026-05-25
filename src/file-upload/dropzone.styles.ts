import { CloudArrowUpFillIcon } from "@lifesg/react-icons/cloud-arrow-up-fill";
import styled from "styled-components";

import { DashedBorder } from "../dashed-border";
import { Colour, MediaQuery, Spacing } from "../theme";
import { Typography } from "../typography";

export const containerWithDashedBorder =
    "fileUploadDropzoneContainerWithDashedBorder";

// =============================================================================
// STYLING
// =============================================================================

export const Container = styled(DashedBorder)`
    position: relative;
    display: flex;
    flex-direction: column;

    &.${containerWithDashedBorder} {
        padding: ${Spacing["spacing-32"]};

        ${MediaQuery.MaxWidth.md} {
            padding: ${Spacing["spacing-32"]} ${Spacing["spacing-20"]};
        }
    }
`;

export const HiddenInput = styled.input`
    display: none;
`;

export const DragOverlay = styled(DashedBorder)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const OverlayText = styled(Typography.BodyMD)`
    color: ${Colour["text-primary"]};
    text-align: center;
`;

export const OverlayIcon = styled(CloudArrowUpFillIcon)`
    color: ${Colour["icon-primary"]};
    height: 4rem;
    width: 4rem;
`;
