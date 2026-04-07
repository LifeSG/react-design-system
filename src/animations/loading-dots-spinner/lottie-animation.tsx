import { flatten, getColors } from "lottie-colorify";
import { useLottie } from "lottie-react";

import type { CustomisedProps } from "../types";
import animationData from "./data.json";
import * as styles from "./lottie-animation.styles";

const normalizeLottieColor = (value: string | number[]) => {
    if (Array.isArray(value)) return value;

    const trimmedValue = value.trim();
    const shorthandHexMatch = /^#([a-f\d]{3})$/i.exec(trimmedValue);

    if (!shorthandHexMatch) return trimmedValue;

    const [r, g, b] = shorthandHexMatch[1];
    return `#${r}${r}${g}${g}${b}${b}`;
};

export const LottieLoadingDotsSpinner = ({
    color = getColors(animationData)[0],
}: CustomisedProps) => {
    const options = {
        animationData: flatten(normalizeLottieColor(color), animationData),
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return <div className={styles.view}>{View}</div>;
};
