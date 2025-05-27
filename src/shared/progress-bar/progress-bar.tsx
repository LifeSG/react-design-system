import styled, { css } from "styled-components";
import { Border, Colour, Radius } from "@/theme";
import type { getPrimitiveColour } from "../../theme/colour-primitive/theme-helper";
import type { getSemanticColour } from "../../theme/colour-semantic/theme-helper";

type ThemeColorFunctions = ReturnType<
    typeof getSemanticColour | typeof getPrimitiveColour
>;

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
        let colorToUse: string;
        if (color && typeof color === "string") {
            colorToUse = color;
        } else if (color) {
            colorToUse = (color as ThemeColorFunctions)(props);
        } else {
            colorToUse = Colour["icon-primary-subtle"](props);
        }

        return css`
            border: ${Border["width-010"]} ${Border["solid"]} ${colorToUse};
            border-radius: ${Radius["sm"]};

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
