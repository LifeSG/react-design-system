import styled, { css } from "styled-components";
import { CellType, LabelType } from "./types";
import { Colour, Font, Radius } from "../../../theme";
import { Typography } from "../../../typography";
import { StyledComponentProps } from "../../../theme/helpers";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface StyleProps extends StyledComponentProps {
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
    let color = Colour.bg;
    let border = "1px solid transparent";
    let dot = false;

    switch (props.$type) {
        case "current":
            color = Colour.bg;
            dot = true;
            break;
        case "hover-dash":
            color = Colour["bg-hover-subtle"];
            border = `1px dashed ${Colour["border-hover"](props)}`;
            break;
        case "hover-current":
            color = Colour["bg-hover-strong"];
            break;
        case "selected":
            color = Colour["bg-selected"];
            border = `1px solid ${Colour["border-selected-subtle"](props)}`;
            break;
        case "selected-outline":
            color = Colour["bg-selected"];
            border = `1px solid ${Colour["border-selected"](props)}`;
            break;
        case "overlap":
            color = Colour["bg-selected"];
            border = `1px solid ${Colour["border-selected-subtle"](props)}`;
            break;
        case "overlap-outline":
            color = Colour["bg-selected-hover"];
            break;
    }

    return { color, border, dot };
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
    border-radius: ${Radius.md};

    ${(props) => {
        if (props.$type) {
            const { color, border, dot } = getCellStyle(props);
            return css`
                background-color: ${color};
                background-clip: content-box;
                border: ${border};

                ${dot &&
                css`
                    &::after {
                        content: "";
                        position: absolute;
                        width: 4px;
                        height: 4px;
                        background-color: ${Colour["icon-primary"]};
                        border-radius: 50%;
                        bottom: 3px;
                    }
                `}
            `;
        }
    }}
`;

export const Dot = styled.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: ${Colour["icon-primary"]};
    border-radius: 50%;
    bottom: 3px;
`;

export const LeftCircle = styled(Circle)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`;

export const RightCircle = styled(Circle)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`;

export const Label = styled(Typography.BodyMD)<LabelStyleProps>`
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
            return css`
                color: ${Colour["text-disabled-subtlest"]};
            `;
        }

        switch ($type) {
            case "selected":
                return css`
                    ${Font["body-md-semibold"]}
                    color: ${Colour["text-selected"]};
                `;
            case "current":
                return css`
                    ${Font["body-md-semibold"]}
                    color: ${Colour["text-primary"]};

                    /* position: relative;

                    &::after {
                        content: "";
                        position: absolute;
                        width: 4px;
                        height: 4px;
                        background-color: ${Colour["icon-primary"]};
                        border-radius: 50%;
                        bottom: 0;
                    } */
                `;
            case "unavailable":
                return css`
                    color: ${Colour["text-disabled-subtlest"]};
                `;
            case "hidden":
                return css`
                    visibility: hidden;
                `;
            case "available":
            default:
                return css`
                    color: ${Colour.text};
                `;
        }
    }}
`;
