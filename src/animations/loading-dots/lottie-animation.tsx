import { useLottie } from "lottie-react";

import animationData from "./data.json";
import * as styles from "./lottie-animation.styles";

export const LottieLoadingDots = () => {
    const options = {
        animationData,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return <div className={styles.view}>{View}</div>;
};
