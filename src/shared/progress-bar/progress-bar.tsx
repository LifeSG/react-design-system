import clsx from "clsx";
import { useRef } from "react";

import type { ColourCSSVariableString } from "../../theme";
import { Colour, useApplyStyle } from "../../theme";
import * as styles from "./progress-bar.styles";

interface Props {
    className?: string | undefined;
    /** Progress from 0 to 1 */
    progress: number;
    colour?: string | ColourCSSVariableString | undefined;
    "data-testid"?: string | undefined;
}

export const ProgressBar = ({
    className,
    progress,
    colour,
    "data-testid": testId,
}: Props) => {
    const colourToUse = colour ?? Colour["icon-primary-subtle"];

    const barRef = useRef<HTMLDivElement>(null);

    useApplyStyle(barRef, {
        [styles.tokens.barColour]: colourToUse,
        [styles.tokens.barWidth]: `${progress * 100}%`,
    });

    return (
        <div
            className={clsx(styles.bar, className)}
            data-testid={testId}
            ref={barRef}
        >
            <progress value={progress * 100} max={100} />
        </div>
    );
};
