import { CloudArrowUpFillIcon } from "@lifesg/react-icons/cloud-arrow-up-fill";
import styled, { css } from "styled-components";

import { DashedBorder } from "../dashed-border";
import { Typography } from "../typography";
import { V3_Colour, V3_MediaQuery, V3_Spacing } from "../v3_theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface StyleProps {
    $showDashedBorder: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================

export const Container = styled(DashedBorder)<StyleProps>`
    position: relative;
    display: flex;
    flex-direction: column;

    ${(props) => {
        if (props.$showDashedBorder) {
            return css`
                padding: ${V3_Spacing["spacing-32"]};

                ${V3_MediaQuery.MaxWidth.md} {
                    padding: ${V3_Spacing["spacing-32"]}
                        ${V3_Spacing["spacing-20"]};
                }
            `;
        }
    }}
`;

export const HiddenInput = styled.input`
    display: none;
`;

export const DragOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${V3_Colour["bg-primary-subtler"]};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const OverlayText = styled(Typography.BodyMD)`
    color: ${V3_Colour["text-primary"]};
    text-align: center;
`;

export const OverlayIcon = styled(CloudArrowUpFillIcon)`
    color: ${V3_Colour["icon-primary"]};
    height: 4rem;
    width: 4rem;
`;
