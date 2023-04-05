import { flatten, getColors } from "lottie-colorify";
import { useLottie } from "lottie-react";
import { CustomisedProps } from "../types";
import animationData from "./data.json";

export const LottieLoadingDotsSpinner = ({
    color = getColors(animationData)[0],
}: CustomisedProps) => {
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
