import React from "react";
import { Lottie } from "@crello/react-lottie";
import animationData from "./data.json";

export const LottieSpinner = () => {
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
            height="200px"
            width="200px"
            playingState="playing"
        />
    );
};
