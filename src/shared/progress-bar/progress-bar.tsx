import { css } from "@linaria/core";
import clsx from "clsx";

import { Border, Colour, Radius } from "../../theme";

interface Props {
    className?: string | undefined;
    /** Progress from 0 to 1 */
    progress: number;
    color?: string | undefined;
    "data-testid"?: string | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
const barBaseClass = css`
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
`;

const dynamicBarBaseClass = css`
    &:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        background: var(--bar-color);
        width: var(--bar-width);
    }
`;

const barContainerClass = css`
    border-style: solid;
    border-width: ${Border["width-010"]};
    border-radius: ${Radius["sm"]};
`;

export const ProgressBar = ({
    className,
    progress,
    color,
    "data-testid": testId,
}: Props) => {
    const colorToUse = color ?? Colour["icon-primary-subtle"];

    return (
        <div
            className={clsx(
                barBaseClass,
                dynamicBarBaseClass,
                barContainerClass,
                className
            )}
            style={
                {
                    borderColor: colorToUse,
                    "--bar-color": colorToUse,
                    "--bar-width": `${progress * 100}%`,
                } as React.CSSProperties
            }
            data-testid={testId}
        >
            <progress
                value={progress * 100}
                max={100}
                style={{
                    background: colorToUse,
                    width: `${progress * 100}%`,
                }}
            />
        </div>
    );
};
