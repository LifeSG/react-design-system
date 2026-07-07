"use client";
import { ThemedLoadingSpinner } from "@lifesg/react-design-system/animations";
import { ThemeProvider } from "@lifesg/react-design-system/theme";

export default function Story() {
    return (
        <div>
            <div data-testid="themed-lifesg-scope">
                <ThemedLoadingSpinner data-testid="themed-lifesg" />
            </div>

            <ThemeProvider theme="bookingsg">
                <div data-testid="themed-bookingsg-scope">
                    <ThemedLoadingSpinner data-testid="themed-bookingsg" />
                </div>
            </ThemeProvider>
        </div>
    );
}
