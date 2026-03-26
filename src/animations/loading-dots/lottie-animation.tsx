import { useLottie } from "lottie-react";
import animationData from "./data.json";

export const LottieLoadingDots = () => {
    const options = {
        animationData,
        loop: true,
        autoplay: true,
        style: {
            height: "16px",
            width: "64px",
        },
    };

    const { View } = useLottie(options);

    return <>{View}</>;
};
