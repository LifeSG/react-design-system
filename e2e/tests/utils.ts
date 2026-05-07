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
            mockedTimestamp?: string;
            theme?: string;
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

        const query = new URLSearchParams();
        if (options?.mode === "light" || options?.mode === "dark") {
            query.set("mode", options.mode);
        }
        if (options?.mockedTimestamp) {
            query.set("now", options.mockedTimestamp);
        }
        if (options?.theme) {
            query.set("theme", options.theme);
        }

        const queryString = query.toString();

        await this.page.goto(
            `/components/${this.component}/${story}?${queryString}`
        );

        await expect(this.layout).toBeVisible();

        if (await this.page.locator("#devtools-indicator").isVisible()) {
            console.warn(
                "DevTools indicator is visible, collapsing it to avoid interference with screenshots. Please check the console logs for more details."
            );

            await this.page
                .locator("#devtools-indicator")
                .getByRole("button", { name: "Collapse issues badge" })
                .click();
        }
    }

    public async scrollWithWheelUntil(options: {
        scrollTarget: Locator;
        until: () => Promise<boolean>;
        deltaX?: number;
        deltaY?: number;
        maxAttempts?: number;
    }) {
        const {
            scrollTarget,
            until,
            deltaX = 0,
            deltaY = 240,
            maxAttempts = 12,
        } = options;

        await scrollTarget.hover();
        await expect
            .poll(async () => {
                for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
                    if (await until()) {
                        return true;
                    }

                    await this.page.mouse.wheel(deltaX, deltaY);
                }

                return await until();
            })
            .toBe(true);
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
    await storyPage.page.evaluate(() => document.fonts.ready);

    if (options?.locator) {
        const box = await options.locator.boundingBox();
        if (!box) {
            throw new Error("Could not get bounding box for locator");
        }

        await expect.soft(storyPage.page).toHaveScreenshot(`${name}.png`, {
            // Adding a 10px boundary around the element to capture any shadows or outlines
            clip: {
                x: Math.max(0, box.x - 10),
                y: Math.max(0, box.y - 10),
                width: box.width + 20,
                height: box.height + 20,
            },
            threshold: 0.01, // Strict colour matching
            maxDiffPixelRatio: 0.01, // Allow a small percentage of pixels to differ
        });
        return;
    }

    const target = options?.fullscreen
        ? storyPage.page
        : storyPage.page.locator("body");

    await expect.soft(target).toHaveScreenshot(`${name}.png`, {
        fullPage: options?.fullscreen ?? false,
        threshold: 0.01, // Strict colour matching
        maxDiffPixelRatio: 0.01, // Allow a small percentage of pixels to differ
    });
};

export const applyMockedTimestamp = async (
    page: Page,
    timestamp: string
): Promise<void> => {
    const mockedDate = new Date(timestamp);
    const clock = page.clock;

    await clock.install({ time: mockedDate });
};

export const waitForAnimationEnd = async (locator: Locator) => {
    const handle = await locator.elementHandle();
    await handle?.waitForElementState("stable");
    await handle?.dispose();
};
