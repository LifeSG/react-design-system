import styled, { css } from "styled-components";
import { v2_Color } from "../../v2_color";
import { getThemeColors } from "../../theme/color-theme-helper";

type ThemeColorFunctions = ReturnType<typeof getThemeColors>;

interface Props {
    className?: string | undefined;
    /** Progress from 0 to 1 */
    progress: number;
    color?: string | ThemeColorFunctions | undefined;
    "data-testid"?: string | undefined;
}

export const ProgressBar = ({
    className,
    progress,
    color,
    "data-testid": testId,
}: Props) => (
    <Bar
        className={className}
        $innerWidth={progress}
        $color={color}
        data-testid={testId}
    >
        <progress value={progress * 100} max={100} />
    </Bar>
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

    progress {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    ${(props) => {
        const { $color: color } = props;
        let colorToUse;
        if (color && typeof color === "string") {
            colorToUse = color;
        } else if (color) {
            colorToUse = (color as ThemeColorFunctions)(props);
        } else {
            colorToUse = v2_Color.Accent.Light[1](props);
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
