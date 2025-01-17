import { CloudArrowUpFillIcon } from "@lifesg/react-icons/cloud-arrow-up-fill";
import styled, { css } from "styled-components";
import { Border, Colour, MediaQuery, Radius, Spacing } from "../theme";
import { Typography } from "../typography";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface StyleProps {
    $border?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================

export const Container = styled.div<StyleProps>`
    position: relative;
    display: flex;
    flex-direction: column;

    ${(props) => {
        if (props.$border) {
            return css`
                ${Border["dashed-default"]({
                    radius: Radius["sm"],
                    thickness: Border["width-040"],
                    colour: Colour["border"],
                })}
                padding: ${Spacing["spacing-32"]};

                ${MediaQuery.MaxWidth.sm} {
                    padding: ${Spacing["spacing-32"]} ${Spacing["spacing-20"]};
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

    background: ${Colour["bg-primary-subtler"]};
    ${Border["dashed-default"]({
        radius: Radius["sm"],
        thickness: Border["width-040"],
        colour: Colour["border-primary"],
    })}

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
