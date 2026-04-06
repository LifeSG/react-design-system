import clsx from "clsx";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

import { ComponentToken, parseCSSVariableValue } from "../../theme";
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
    const [resolvedTokenColor, setResolvedTokenColor] = useState<
        string | undefined
    >(undefined);

    useEffect(() => {
        if (color) {
            setResolvedTokenColor(undefined);
            return;
        }

        const tokenColor = parseCSSVariableValue(
            ComponentToken.Animation["loading-dots-spinner-colour"],
            containerRef.current
        );
        setResolvedTokenColor(tokenColor || undefined);
    }, [color]);

    const animationColor = color || resolvedTokenColor;
    return (
        <div
            ref={containerRef}
            {...otherProps}
            className={clsx(styles.container, className)}
        >
            <Suspense fallback={<Placeholder />}>
                <LottieLoadingDotsSpinner color={animationColor} />
            </Suspense>
        </div>
    );
};

const Placeholder = () => {
    return (
        <div
            style={{
                height: "200px",
                width: "200px",
            }}
        />
    );
};
