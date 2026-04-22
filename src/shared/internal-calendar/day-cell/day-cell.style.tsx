import styled, { css } from "styled-components";
import { Border, Colour, Font, Motion, Radius } from "../../../theme";
import { CellType, LabelType } from "./types";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface StyleProps {
    $type: CellType | undefined;
}

interface LabelStyleProps {
    $type: LabelType | undefined;
    $disabled: boolean | undefined;
    $interactive: boolean | null | undefined;
}

interface LabelWrapperProps {
    $interactive: boolean | null | undefined;
}

interface IndicatorStyleProps {
    $disabled: boolean | undefined;
}

// =============================================================================
// HELPERS
// =============================================================================
const getCellStyle = (props: StyleProps) => {
    let color = Colour.bg;
    let borderColor: typeof color | string = "transparent";

    switch (props.$type) {
        case "hover-subtle":
            color = Colour["bg-hover"];
            borderColor = Colour["bg-hover"];
            break;
        case "hover":
            color = Colour["bg-hover-strong"];
            borderColor = Colour["bg-hover-strong"];
            break;
        case "hover-outline":
            color = Colour["bg-hover-subtle"];
            borderColor = Colour["border-hover"];
            break;
        case "selected-outline":
            color = Colour["bg-selected"];
            borderColor = Colour["border-selected"];
            break;
        case "selected-outline-subtle":
            color = Colour["bg-selected"];
            borderColor = Colour["border-selected-subtle"];
            break;
        case "selected-hover":
            color = Colour["bg-selected-hover"];
            // no border to give it an overlay effect
            break;
        case "selected-hover-outline":
            color = Colour["bg-selected-hover"];
            borderColor = Colour["border-selected-hover"];
            break;
    }

    return { color, borderColor };
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
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
    border: ${Border["width-010"]} ${Border["solid"]} transparent;
    border-left: none;
    border-right: none;

    ${(props) => {
        if (!props.$type) {
            return;
        }
        const { color, borderColor } = getCellStyle(props);
        return css`
            background-color: ${color};
            background-clip: border-box;
            border-top-color: ${borderColor};
            border-bottom-color: ${borderColor};
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
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};

    border: ${Border["width-010"]} ${Border["solid"]} transparent;
    border-radius: ${Radius["md"]};

    ${(props) => {
        if (props.$type) {
            const { color, borderColor } = getCellStyle(props);
            return css`
                background-color: ${color};
                background-clip: content-box;
                border-color: ${borderColor};
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

export const LabelWrapper = styled.span<LabelWrapperProps>`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${(props) => {
        if (props.$interactive) {
            return "pointer";
        } else if (props.$interactive === null) {
            return "default";
        } else {
            return "not-allowed";
        }
    }};
`;

export const Label = styled.div<LabelStyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Font["body-md-regular"]}
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};

    pointer-events: ${(props) => {
        if (props.$interactive || props.$interactive === null) {
            return "auto";
        } else {
            return "none";
        }
    }};

    ${(props) => {
        const { $disabled, $type } = props;

        if ($disabled) {
            if ($type === "hidden") {
                return css`
                    visibility: hidden;
                `;
            }

            return css`
                color: ${Colour["text-disabled-subtlest"]};
            `;
        }

        switch ($type) {
            case "selected":
                return css`
                    font-weight: ${Font.Spec["weight-semibold"]};
                    color: ${Colour["text-selected"]};
                `;
            case "selected-hover":
                return css`
                    font-weight: ${Font.Spec["weight-semibold"]};
                    color: ${Colour["text-selected-hover"]};
                `;
            case "current":
                return css`
                    font-weight: ${Font.Spec["weight-semibold"]};
                    color: ${Colour["text-primary"]};
                `;
            case "hover":
                return css`
                    font-weight: ${Font.Spec["weight-semibold"]};
                    color: ${Colour["text-hover"]};
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

    &:focus {
        outline: none;
    }
`;

export const Indicator = styled.div<IndicatorStyleProps>`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`;
