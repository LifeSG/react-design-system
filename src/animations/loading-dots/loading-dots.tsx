import clsx from "clsx";
import { lazy, Suspense } from "react";

import type { AnimationProps } from "../types";
import * as styles from "./loading-dots.styles";

// lazy load to fix next.js SSR errors
const LottieLoadingDots = lazy(async () => ({
    default: (await import("./lottie-animation")).LottieLoadingDots,
}));

export const LoadingDots = ({ className, ...otherProps }: AnimationProps) => {
    return (
        <div {...otherProps} className={clsx(styles.container, className)}>
            <Suspense fallback={<Placeholder />}>
                <LottieLoadingDots />
            </Suspense>
        </div>
    );
};

const Placeholder = () => {
    return <div className={styles.placeholder} />;
};
