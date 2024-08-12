import styled, { css } from "styled-components";
import { V2_Color } from "../v2_color";
import { V2_MediaQuery } from "../v2_media";
import { V2_Text } from "../v2_text";
import { CloudArrowUpFillIcon } from "@lifesg/react-icons/cloud-arrow-up-fill";

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
            const color = encodeURIComponent(V2_Color.Neutral[5](props));
            return css`
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${color}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
                border-radius: 4px;
                padding: 2rem;

                ${V2_MediaQuery.MaxWidth.mobileL} {
                    padding: 2rem 1.25rem;
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
    background: ${V2_Color.Accent.Light[5]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${(props) => {
        const color = encodeURIComponent(V2_Color.Primary(props));
        return css`
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${color}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='square'/%3e%3c/svg%3e");
            border-radius: 4px;
        `;
    }}
`;

export const OverlayText = styled(V2_Text.BodySmall)`
    color: ${V2_Color.Primary};
    text-align: center;
`;

export const OverlayIcon = styled(CloudArrowUpFillIcon)`
    color: ${V2_Color.Primary};
    height: 4rem;
    width: 4rem;
`;
