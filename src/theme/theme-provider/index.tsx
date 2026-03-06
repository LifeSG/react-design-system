import React, { useEffect, useState } from "react";
import { ThemeContext } from "./context";
import type { ThemeProviderProps } from "./types";
import {
    getSystemColourMode,
    listenToSystemColourMode,
} from "./system-colour-mode";

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    theme = "lifesg",
    mode,
    className,
    style,
}) => {
    const isModeControlled = mode !== undefined;

    const [computedMode, setComputedMode] = useState(
        mode ?? getSystemColourMode()
    );

    const themeMode = isModeControlled ? mode! : computedMode;

    const themeElementRef = React.useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isModeControlled) return;

        return listenToSystemColourMode(setComputedMode);
    }, [isModeControlled]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                mode: themeMode,
                themeElement: themeElementRef.current,
            }}
        >
            <div
                ref={themeElementRef}
                data-fds-theme={theme}
                data-fds-theme-mode={themeMode}
                className={className}
                style={style}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
