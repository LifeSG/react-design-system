import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { Icon } from "../icon/icon";
import { CheckboxProps, CheckboxSize } from "./types";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    selected?: boolean;
    disabled?: boolean;
    $displaySize?: CheckboxSize;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) => {
        let height;
        let width;

        switch (props.$displaySize) {
            case "small":
                height = "1.5rem";
                width = "1.5rem";
                break;
            default:
                height = "2rem";
                width = "2rem";
                break;
        }

        return css`
            height: ${height};
            width: ${width};
        `;
    }}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${Color.Accent.Light[2]};
    background: transparent;

    ${(props) => {
        let borderColor;
        let background;

        if (props.selected) {
            borderColor = Color.Primary(props);
            background = Color.Primary(props);
        }

        if (props.disabled) {
            borderColor = Color.Neutral[6](props);
            background = Color.Neutral[6](props);
        }

        return `
			border: 1px solid ${borderColor};
			background: ${background};
		`;
    }}
`;

export const Input = styled.input<CheckboxProps>`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const Checkmark = styled(Icon)<StyleProps>`
    ${(props) => {
        let size;

        switch (props.$displaySize) {
            case "small":
                size = "1.3rem";
                break;
            default:
                size = "1.5rem";
                break;
        }

        return css`
            height: ${size};
            width: ${size};
        `;
    }}
    color: ${(props) => (props.disabled ? Color.Neutral[4] : Color.Neutral[8])};
`;
