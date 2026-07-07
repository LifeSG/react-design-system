import { css } from "@linaria/core";
import { useState } from "react";
import type { ThemeMode, ThemeType } from "src/theme";
import { ThemeProvider } from "src/theme";

interface ColourModeSwitcherProps {
    colourMode: ThemeMode;
    onColourModeChange: (colourMode: ThemeMode) => void;
}

const ColourModeSwitcher = ({
    colourMode,
    onColourModeChange,
}: ColourModeSwitcherProps) => {
    const darkMode = colourMode === "dark";

    return (
        <div className={switcher}>
            <code>light</code>
            <input
                aria-label="Enable dark mode"
                type="checkbox"
                checked={darkMode}
                onChange={() => onColourModeChange(darkMode ? "light" : "dark")}
            />
            <code>dark</code>
        </div>
    );
};

interface ColourDisplayProps {
    theme: ThemeType;
    children: JSX.Element | JSX.Element[];
}

export const ColourDisplay = ({ theme, children }: ColourDisplayProps) => {
    const [colourMode, setColourMode] = useState<ThemeMode>("light");

    return (
        <ThemeProvider theme={theme} mode={colourMode}>
            <div className={container}>
                <ColourModeSwitcher
                    colourMode={colourMode}
                    onColourModeChange={(mode) => setColourMode(mode)}
                />
                {children}
            </div>
        </ThemeProvider>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const container = css`
    position: relative;
`;

const switcher = css`
    position: sticky;
    top: 0;
    padding: 1rem 0;

    display: flex;
    align-items: center;
    gap: 1rem;
    background: white;

    input {
        appearance: none;
        width: 3rem;
        height: 1.5rem;
        border: 2px solid black;
        border-radius: 40px;
        position: relative;
    }

    input::after {
        content: "";
        border-radius: 100%;
        background: black;
        height: 1rem;
        width: 1rem;
        position: absolute;
        left: 0.125rem;
        top: 50%;
        transform: translateY(-50%);
        transition: all 300ms ease-in;
    }

    input:checked::after {
        left: calc(100% - 1.125rem);
    }
`;
