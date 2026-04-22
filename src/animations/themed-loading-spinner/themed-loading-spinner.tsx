import { ThemeContext } from "styled-components";
import { LoadingDotsSpinner } from "../loading-dots-spinner/loading-dots-spinner";
import { LoadingSpinner } from "../loading-spinner/loading-spinner";
import { BaseAnimationProps } from "../types";
import { useContext } from "react";

export const ThemedLoadingSpinner = (props: BaseAnimationProps) => {
    const theme = useContext(ThemeContext);

    if (theme?.resourceScheme === "lifesg") {
        return <LoadingSpinner {...props} />;
    }
    return <LoadingDotsSpinner {...props} />;
};
