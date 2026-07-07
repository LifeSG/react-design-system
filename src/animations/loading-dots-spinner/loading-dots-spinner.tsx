import clsx from "clsx";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

import { ComponentToken, useApplyStyle } from "../../theme";
import type { CustomisableAnimationProps } from "../types";
import * as styles from "./loading-dots-spinner.styles";

// lazy load to fix next.js SSR errors
const LottieLoadingDotsSpinner = lazy(async () => ({
    default: (await import("./lottie-animation")).LottieLoadingDotsSpinner,
}));

export const LoadingDotsSpinner = ({
    className,
    color,
    ...otherProps
}: CustomisableAnimationProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [resolvedColor, setResolvedColor] = useState<string | undefined>(
        undefined
    );

    useApplyStyle(containerRef, {
        [styles.tokens.containerColor]:
            color || ComponentToken.Animation["loading-dots-spinner-colour"],
    });

    useEffect(() => {
        const element = containerRef.current;
        if (!element) return;

        const computedColor = getComputedStyle(element)
            .getPropertyValue(styles.tokens.containerColor)
            .trim();

        setResolvedColor(computedColor || undefined);
    }, [color]);

    return (
        <div
            ref={containerRef}
            {...otherProps}
            className={clsx(styles.container, className)}
        >
            <Suspense fallback={<Placeholder />}>
                <LottieLoadingDotsSpinner color={resolvedColor} />
            </Suspense>
        </div>
    );
};

const Placeholder = () => {
    return <div className={styles.placeholder} />;
};
