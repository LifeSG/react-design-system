import clsx from "clsx";
import { lazy, Suspense } from "react";

import type { AnimationProps } from "../types";
import * as styles from "./loading-spinner.styles";

// lazy load to fix next.js SSR errors
const LottieSpinner = lazy(async () => ({
    default: (await import("./lottie-animation")).LottieSpinner,
}));

export const LoadingSpinner = ({
    className,
    ...otherProps
}: AnimationProps) => {
    return (
        <div {...otherProps} className={clsx(styles.container, className)}>
            <Suspense fallback={<Placeholder />}>
                <LottieSpinner />
            </Suspense>
        </div>
    );
};

const Placeholder = () => {
    return <div className={styles.placeholder} />;
};
