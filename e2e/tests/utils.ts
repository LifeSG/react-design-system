import { expect, Locator, Page } from "@playwright/test";
import { viewport } from "./consts";

export abstract class AbstractStoryPage {
    public readonly page: Page;
    public readonly layout: Locator;
    protected abstract readonly component: string;

    constructor(page: Page) {
        this.page = page;
        this.layout = page.getByTestId("story-layout");
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

        await expect(this.layout).toBeVisible();
    }
}

/**
 * Compares a screenshot of the story page or a specific locator within the page.
 * @param storyPage The story page instance.
 * @param name The name of the screenshot file.
 * @param options.fullscreen Set to true to capture the entire page, useful for floating elements
 * @param options.locator Specify a specific element to capture
 */
export const compareScreenshot = async (
    storyPage: AbstractStoryPage,
    name: string,
    options?: { fullscreen?: boolean; locator?: Locator }
) => {
    if (options?.locator) {
        const box = await options.locator.boundingBox();
        if (!box) {
            throw new Error("Could not get bounding box for locator");
        }

        await expect(storyPage.page).toHaveScreenshot(`${name}.png`, {
            // Adding a 10px boundary around the element to capture any shadows or outlines
            clip: {
                x: Math.max(0, box.x - 10),
                y: Math.max(0, box.y - 10),
                width: box.width + 20,
                height: box.height + 20,
            },
            threshold: 0, // Strict colour matching
        });
        return;
    }

    const target = options?.fullscreen
        ? storyPage.page
        : storyPage.page.locator("body");

    await expect(target).toHaveScreenshot(`${name}.png`, {
        fullPage: options?.fullscreen ?? false,
        threshold: 0, // Strict colour matching
    });
};

export const compareLocatorScreenshot = async (
    locator: ReturnType<Page["locator"]>,
    name: string,
    options?: { threshold?: number }
) => {
    await expect(locator).toHaveScreenshot(`${name}.png`, {
        threshold: options?.threshold ?? 0, // Strict colour matching by default
    });
};
