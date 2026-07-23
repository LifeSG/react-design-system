import { useContext } from "react";

import { ThemeContext } from "../../theme/theme-provider/context";
import { LoadingDotsSpinner } from "../loading-dots-spinner/loading-dots-spinner";
import { LoadingSpinner } from "../loading-spinner/loading-spinner";
import type { AnimationProps } from "../types";

export const ThemedLoadingSpinner = (props: AnimationProps) => {
    const fdsThemeContext = useContext(ThemeContext);

    const isLifesgTheme = fdsThemeContext?.theme === "lifesg";

    if (isLifesgTheme) {
        return <LoadingSpinner {...props} />;
    }

    return <LoadingDotsSpinner {...props} />;
};
