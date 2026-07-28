import { useContext } from "react";

import { ThemeContext } from "../../theme/theme-provider/context";
import { LoadingDotsSpinner } from "../loading-dots-spinner/loading-dots-spinner";
import { LoadingSpinner } from "../loading-spinner/loading-spinner";
import type { BaseAnimationProps } from "../types";

// @catalog
/**
 * A loading spinner that automatically adapts to the theme's resourceScheme.
 */
export const ThemedLoadingSpinner = (props: BaseAnimationProps) => {
    const fdsThemeContext = useContext(ThemeContext);

    const isLifesgTheme = fdsThemeContext?.theme === "lifesg";

    if (isLifesgTheme) {
        return <LoadingSpinner {...props} />;
    }

    return <LoadingDotsSpinner {...props} />;
};
