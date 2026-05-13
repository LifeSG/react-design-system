"use client";
import { Footer } from "@lifesg/react-design-system/footer";
import { links } from "./footer-shared";
import { ThemeProvider } from "@lifesg/react-design-system/theme";

export default function Story() {
    return (
        <ThemeProvider theme="mylegacy">
            <Footer
                data-testid="footer-resource-addon-variant"
                links={links}
                showResourceAddon
            />
        </ThemeProvider>
    );
}
