"use client";
import { ThemeProvider } from "@lifesg/react-design-system/theme";

import { Pairs } from "../../../consumer/pairs";

export default function Page() {
    return (
        <ThemeProvider>
            <Pairs />
        </ThemeProvider>
    );
}
