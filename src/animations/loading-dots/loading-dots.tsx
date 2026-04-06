import clsx from "clsx";
import { lazy, Suspense } from "react";

import type { BaseAnimationProps } from "../types";
import * as styles from "./loading-dots.styles";

// lazy load to fix next.js SSR errors
const LottieLoadingDots = lazy(async () => ({
    default: (await import("./lottie-animation")).LottieLoadingDots,
}));

export const LoadingDots = ({
    className,
    ...otherProps
}: BaseAnimationProps) => {
    return (
        <div {...otherProps} className={clsx(styles.container, className)}>
            <Suspense fallback={<Placeholder />}>
                <LottieLoadingDots />
            </Suspense>
        </div>
    );
};

const Placeholder = () => {
    return (
        <div
            style={{
                height: "16px",
                width: "64px",
            }}
        />
    );
};
