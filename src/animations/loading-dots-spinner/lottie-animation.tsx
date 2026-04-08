import { flatten, getColors } from "lottie-colorify";
import type { LottieOptions } from "lottie-react";
import { useLottie } from "lottie-react";

import type { CustomisedProps } from "../types";
import animationData from "./data.json";
import * as styles from "./lottie-animation.styles";

export const LottieLoadingDotsSpinner = ({
    color = getColors(animationData)[0],
}: CustomisedProps) => {
    const options: LottieOptions = {
        animationData: flatten(color, animationData),
        loop: true,
        autoplay: true,
        className: styles.view,
    };

    const { View } = useLottie(options);

    return <>{View}</>;
};
