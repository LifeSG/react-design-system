import React from "react";
import { useLottie } from "lottie-react";
import animationData from "./data.json";

export const LottieLoadingDotsSpinner = () => {
    const options = {
        animationData,
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
