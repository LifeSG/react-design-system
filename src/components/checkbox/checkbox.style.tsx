import styled from "styled-components";
import { Icon } from "../icon";
import { Color } from "../styles/theme";
import { CheckboxProps } from "./types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    selected?: boolean;
    disabled?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
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
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => (props.disabled ? Color.Neutral[4] : Color.Neutral[8])};
`;
