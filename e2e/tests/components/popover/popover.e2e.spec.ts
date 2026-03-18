import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "popover";

    public readonly locators: {
        triggerButton: Locator;
        popover: Locator;
        themeToggle: Locator;
        themeSelect: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            triggerButton: page.getByRole("button", {
                name: "Open popover",
            }),
            popover: page.getByTestId("popover"),
            themeToggle: page.getByTestId("theme-toggle"),
            themeSelect: page.getByTestId("theme-select"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

const scenarios = [
    {
        story: "basic",
        title: "Basic",
        markerTestId: "basic-popover-content",
    },
    {
        story: "custom-variable",
        title: "Custom variable propagation",
        markerTestId: "custom-propagation-marker",
    },
] as const;

test.describe("Popover", () => {
    scenarios.forEach((scenario) => {
        test.describe(scenario.title, () => {
            test.beforeEach(async ({ story }) => {
                await story.init(scenario.story);
            });

            test(`${scenario.title} (uses theme controls)`, async ({
                story,
            }) => {
                await test.step("Component mounts in light mode", async () => {
                    await expect(story.locators.triggerButton).toBeVisible();
                    await expect(story.locators.themeSelect).toHaveValue(
                        "lifesg"
                    );
                    await expect(story.locators.themeToggle).toHaveText(
                        "Theme: light"
                    );
                    await expect(story.locators.popover).not.toBeVisible();

                    await compareScreenshot(story, "mount-light");
                });

                await test.step("Popover opens in light mode", async () => {
                    await story.locators.triggerButton.click();

                    await expect(story.locators.popover).toHaveCount(1);
                    await expect(
                        story.page.getByTestId(scenario.markerTestId)
                    ).toBeVisible();

                    await compareScreenshot(story, "after-click-light");
                });

                await test.step("Switches theme and dark mode from toolbar", async () => {
                    await story.page.keyboard.press("Escape");
                    await expect(story.locators.popover).toHaveCount(0);
                    await story.locators.themeSelect.selectOption("bookingsg");
                    await expect(story.locators.themeSelect).toHaveValue(
                        "bookingsg"
                    );
                    await story.locators.themeToggle.click();
                    await expect(story.locators.themeToggle).toHaveText(
                        "Theme: dark"
                    );

                    await compareScreenshot(story, "mount-dark-bookingsg");
                });

                await test.step("Popover opens in dark mode", async () => {
                    await story.locators.triggerButton.click();

                    await expect(story.locators.popover).toHaveCount(1);
                    await expect(
                        story.page.getByTestId(scenario.markerTestId)
                    ).toBeVisible();

                    await compareScreenshot(story, "after-click-dark");
                });
            });
        });
    });
});
