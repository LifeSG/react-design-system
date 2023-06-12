import styled, { css } from "styled-components";
import { Color } from "../../color";
import { getThemeColors } from "../../theme/color-theme-helper";

type ThemeColorFunctions = ReturnType<typeof getThemeColors>;

interface Props {
    className?: string | undefined;
    /** Progress from 0 to 1 */
    progress: number;
    color?: string | ThemeColorFunctions | undefined;
}

export const ProgressBar = ({ className, progress, color }: Props) => (
    <Bar className={className} $innerWidth={progress} $color={color} />
);
// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $color?: string | ThemeColorFunctions | undefined;
    $innerWidth: number;
}

// =============================================================================
// STYLING
// =============================================================================
const Bar = styled.div<StyleProps>`
    position: relative;
    width: 100%;
    height: 8px;
    background: transparent;

    ${(props) => {
        const { $color: color } = props;
        let colorToUse;
        if (color && typeof color === "string") {
            colorToUse = color;
        } else if (color) {
            colorToUse = (color as ThemeColorFunctions)(props);
        } else {
            colorToUse = Color.Accent.Light[1](props);
        }

        return css`
            border: 1px solid ${colorToUse};
            border-radius: 4px;

            :after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                border-radius: inherit;
                background: ${colorToUse};
                width: ${props.$innerWidth * 100}%;
            }
        `;
    }}
`;
