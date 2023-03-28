import React from "react";
import { useLottie } from "lottie-react";
import animationData from "./data.json";
import { flatten, getColors } from "lottie-colorify";
import { LoadingDotsSpinnerProps } from "./types";

export const LottieLoadingDotsSpinner = ({
    color = getColors(animationData)[0],
}: LoadingDotsSpinnerProps) => {
    const options = {
        animationData: flatten(color, animationData),
        loop: true,
        autoplay: true,
        style: {
            height: "200px",
            width: "200px",
        },
    };

    const { View } = useLottie(options);

    return <>{View}</>;
};
