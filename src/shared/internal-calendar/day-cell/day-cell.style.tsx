import styled, { css } from "styled-components";
import { v2_Color } from "../../../v2_color";
import { v2_Text, v2_TextStyleHelper } from "../../../v2_text";
import { CellType, LabelType } from "./types";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface StyleProps {
    $type?: CellType;
    $shadow?: boolean;
}

interface LabelStyleProps {
    $type: LabelType;
    $disabled: boolean;
    $interactive: boolean | null;
}

// =============================================================================
// HELPERS
// =============================================================================
const getCellStyle = (props: StyleProps) => {
    let color = v2_Color.Neutral[8];
    let border = "1px solid transparent";

    switch (props.$type) {
        case "current":
            color = v2_Color.Accent.Light[5];
            break;
        case "hover-dash":
            color = v2_Color.Accent.Light[6];
            border = `1px dashed ${v2_Color.Accent.Light[4](props)}`;
            break;
        case "hover-current":
            color = v2_Color.Neutral[8];
            border = `1px solid ${v2_Color.Primary(props)}`;
            break;
        case "selected":
            color = v2_Color.Accent.Light[5];
            border = `1px solid ${v2_Color.Accent.Light[4](props)}`;
            break;
        case "selected-outline":
            color = v2_Color.Accent.Light[5];
            border = `1px solid ${v2_Color.Primary(props)}`;
            break;
        case "overlap":
            color = v2_Color.Accent.Light[4];
            border = `1px solid ${v2_Color.Accent.Light[4](props)}`;
            break;
        case "overlap-outline":
            color = v2_Color.Accent.Light[4];
            border = `1px solid ${v2_Color.Primary(props)}`;
            break;
    }

    return { color, border };
};

// =============================================================================
// COMPONENTS
// =============================================================================
export const Cell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`;

const Half = styled.div<StyleProps>`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${(props) => {
        if (!props.$type) {
            return;
        }
        const { color, border } = getCellStyle(props);
        return css`
            background-color: ${color};
            background-clip: content-box;
            border-top: ${border};
            border-bottom: ${border};
        `;
    }}
`;

export const LeftHalf = styled(Half)`
    left: 0;
`;

export const RightHalf = styled(Half)`
    right: 0;
`;

const HalfShadow = styled.div<StyleProps>`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${v2_Color.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${(props) => props.$shadow && "display: block;"}
`;

export const LeftHalfShadow = styled(HalfShadow)`
    left: 0;
`;

export const RightHalfShadow = styled(HalfShadow)`
    right: 0;
`;

export const Circle = styled.div<StyleProps>`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${(props) => {
        if (props.$type) {
            const { color, border } = getCellStyle(props);
            return css`
                background-color: ${color};
                background-clip: content-box;
                border: ${border};
            `;
        }
    }}

    ${(props) =>
        props.$shadow &&
        css`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`;

export const LeftCircle = styled(Circle)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${v2_Color.Shadow.Accent};
    }
`;

export const RightCircle = styled(Circle)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${v2_Color.Shadow.Accent};
    }
`;

export const Label = styled(v2_Text.H5)<LabelStyleProps>`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;

    cursor: ${(props) => {
        if (props.$interactive) {
            return "pointer";
        } else if (props.$interactive === null) {
            return "default";
        } else {
            return "not-allowed";
        }
    }};

    ${(props) => {
        const { $disabled, $type } = props;

        if ($disabled) {
            if ($type === "selected") {
                return css`
                    ${v2_TextStyleHelper.getTextStyle("H5", "semibold")};
                    color: ${v2_Color.Accent.Light[2]};
                `;
            }

            return css`
                color: ${v2_Color.Neutral[4]};
            `;
        }

        switch ($type) {
            case "selected":
                return css`
                    ${v2_TextStyleHelper.getTextStyle("H5", "semibold")};
                    color: ${v2_Color.Primary};
                `;
            case "current":
                return css`
                    color: ${v2_Color.Neutral[3]};
                `;
            case "unavailable":
                return css`
                    color: ${v2_Color.Neutral[4]};
                `;
            case "available":
            default:
                return css`
                    color: ${v2_Color.Neutral[1]};
                `;
        }
    }}
`;
