import { flatten, getColors } from "lottie-colorify";
import { useLottie } from "lottie-react";

import type { CustomisedProps } from "../types";
import animationData from "./data.json";
import * as styles from "./lottie-animation.styles";

export const LottieLoadingDotsSpinner = ({
    color = getColors(animationData)[0],
}: CustomisedProps) => {
    const options = {
        animationData: flatten(color, animationData),
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return <div className={styles.view}>{View}</div>;
};
