"use client";
import { LoadingDotsSpinner } from "@lifesg/react-design-system/animations";
import { ThemeProvider } from "@lifesg/react-design-system/theme";

export default function Story() {
    return (
        <div>
            <div data-testid="lifesg-scope">
                <LoadingDotsSpinner data-testid="spinner-lifesg" />
            </div>

            <ThemeProvider theme="bookingsg">
                <div data-testid="bookingsg-scope">
                    <LoadingDotsSpinner data-testid="spinner-bookingsg" />
                </div>
            </ThemeProvider>
        </div>
    );
}
