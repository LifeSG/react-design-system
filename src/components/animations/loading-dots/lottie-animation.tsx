import React from "react";
import { Lottie } from "@crello/react-lottie";
import animationData from "./data.json";

export const LottieLoadingDots = () => {
    const config = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Lottie
            config={config}
            height="16px"
            width="64px"
            playingState="playing"
        />
    );
};
