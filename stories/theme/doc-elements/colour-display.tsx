import React, { useState } from "react";
import { ColourMode, ThemeSpec } from "src/theme/types";
import styled, { ThemeProvider } from "styled-components";

interface ColourModeSwitcherProps {
    colourMode: ColourMode;
    onColourModeChange: (colourMode: ColourMode) => void;
}

const ColourModeSwitcher = ({
    colourMode,
    onColourModeChange,
}: ColourModeSwitcherProps) => {
    const darkMode = colourMode === "dark";

    return (
        <Switcher>
            <code>light</code>
            <input
                aria-label="Enable dark mode"
                type="checkbox"
                checked={darkMode}
                onChange={() => onColourModeChange(darkMode ? "light" : "dark")}
            />
            <code>dark</code>
        </Switcher>
    );
};

interface ColourDisplayProps {
    theme: ThemeSpec;
    children: React.ReactNode;
}

export const ColourDisplay = ({ theme, children }: ColourDisplayProps) => {
    const [colourMode, setColourMode] = useState<ColourMode>("light");

    return (
        <ThemeProvider theme={{ ...theme, colourMode }}>
            <Container>
                <ColourModeSwitcher
                    colourMode={colourMode}
                    onColourModeChange={(mode) => setColourMode(mode)}
                />
                {children}
            </Container>
        </ThemeProvider>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const Container = styled.div`
    position: relative;
`;

const Switcher = styled.div`
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
