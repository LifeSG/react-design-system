import styled, { css } from "styled-components";
import { V2_Color } from "../../../v2_color";
import { V2_Text, V2_TextStyleHelper } from "../../../v2_text";
import { CellType, LabelType } from "./types";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface StyleProps {
    $type?: CellType;
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
    let color = V2_Color.Neutral[8];
    let border = "1px solid transparent";

    switch (props.$type) {
        case "current":
            color = V2_Color.Accent.Light[5];
            break;
        case "hover-dash":
            color = V2_Color.Accent.Light[6];
            border = `1px dashed ${V2_Color.Accent.Light[4](props)}`;
            break;
        case "hover-current":
            color = V2_Color.Neutral[8];
            border = `1px solid ${V2_Color.Primary(props)}`;
            break;
        case "selected":
            color = V2_Color.Accent.Light[5];
            border = `1px solid ${V2_Color.Accent.Light[4](props)}`;
            break;
        case "selected-outline":
            color = V2_Color.Accent.Light[5];
            border = `1px solid ${V2_Color.Primary(props)}`;
            break;
        case "overlap":
            color = V2_Color.Accent.Light[4];
            border = `1px solid ${V2_Color.Accent.Light[4](props)}`;
            break;
        case "overlap-outline":
            color = V2_Color.Accent.Light[4];
            border = `1px solid ${V2_Color.Primary(props)}`;
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
`;

export const LeftCircle = styled(Circle)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`;

export const RightCircle = styled(Circle)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`;

export const Label = styled(V2_Text.H5)<LabelStyleProps>`
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
                    ${V2_TextStyleHelper.getTextStyle("H5", "semibold")};
                    color: ${V2_Color.Accent.Light[2]};
                `;
            }

            return css`
                color: ${V2_Color.Neutral[4]};
            `;
        }

        switch ($type) {
            case "selected":
                return css`
                    ${V2_TextStyleHelper.getTextStyle("H5", "semibold")};
                    color: ${V2_Color.Primary};
                `;
            case "current":
                return css`
                    color: ${V2_Color.Neutral[3]};
                `;
            case "unavailable":
                return css`
                    color: ${V2_Color.Neutral[4]};
                `;
            case "hidden":
                return css`
                    visibility: hidden;
                `;
            case "available":
            default:
                return css`
                    color: ${V2_Color.Neutral[1]};
                `;
        }
    }}
`;
