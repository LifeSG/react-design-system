import { expect, Page } from "@playwright/test";
import { viewport } from "./consts";

export abstract class AbstractStoryPage {
    public readonly page: Page;
    protected abstract readonly component: string;

    constructor(page: Page) {
        this.page = page;
    }

    public async init(
        story: string,
        options?: {
            size?: keyof typeof viewport;
            mode?: "light" | "dark" | "auto";
        }
    ) {
        await this.page.setViewportSize(viewport[options?.size ?? "desktop"]);

        if (options?.mode && options.mode !== "auto") {
            await this.page.emulateMedia({
                colorScheme:
                    options.mode === "dark" || options.mode === "light"
                        ? options.mode
                        : "no-preference",
            });
        }

        const modeQuery =
            options?.mode === "light" || options?.mode === "dark"
                ? `?mode=${options.mode}`
                : "";

        await this.page.goto(
            `/components/${this.component}/${story}${modeQuery}`
        );
    }
}

export const compareScreenshot = async (
    page: AbstractStoryPage,
    name: string,
    options?: { fullscreen?: boolean }
) => {
    const locator = options?.fullscreen ? page.page : page.page.locator("body");

    await expect(locator).toHaveScreenshot(`${name}.png`, {
        fullPage: options?.fullscreen ?? false,
        threshold: 0, // Strict colour matching
    });
};
