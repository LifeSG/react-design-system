import type { LottieOptions } from "lottie-react";
import { useLottie } from "lottie-react";

import animationData from "./data.json";
import * as styles from "./lottie-animation.styles";

export const LottieLoadingDots = () => {
    const options: LottieOptions = {
        animationData,
        loop: true,
        autoplay: true,
        className: styles.view,
    };

    const { View } = useLottie(options);

    return <>{View}</>;
};
