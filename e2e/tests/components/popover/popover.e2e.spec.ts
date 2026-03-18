import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "popover";

    public readonly locators: {
        lightTriggerButton: Locator;
        darkTriggerButton: Locator;
        popover: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            lightTriggerButton: page.getByRole("button", {
                name: "Open light popover",
            }),
            darkTriggerButton: page.getByRole("button", {
                name: "Open dark popover",
            }),
            popover: page.getByTestId("popover"),
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
        markerTestIdLight: "basic-popover-content-light",
        markerTestIdDark: "basic-popover-content-dark",
    },
    {
        story: "custom-variable",
        title: "Custom variable propagation",
        markerTestIdLight: "custom-propagation-marker-light",
        markerTestIdDark: "custom-propagation-marker-dark",
    },
] as const;

test.describe("Popover", () => {
    scenarios.forEach((scenario) => {
        test.describe(scenario.title, () => {
            test.beforeEach(async ({ story }) => {
                await story.init(scenario.story);
            });

            test(`${scenario.title} (light and dark rendered)`, async ({
                story,
            }) => {
                await test.step("Component mounts", async () => {
                    await expect(
                        story.locators.lightTriggerButton
                    ).toBeVisible();
                    await expect(
                        story.locators.darkTriggerButton
                    ).toBeVisible();
                    await expect(story.locators.popover).not.toBeVisible();

                    await compareScreenshot(story, "mount");
                });

                await test.step("Light popover opens and only light content is visible", async () => {
                    await story.locators.lightTriggerButton.click();

                    await expect(story.locators.popover).toHaveCount(1);
                    await expect(
                        story.page.getByTestId(scenario.markerTestIdLight)
                    ).toBeVisible();
                    await expect(
                        story.page.getByTestId(scenario.markerTestIdDark)
                    ).toHaveCount(0);

                    await compareScreenshot(story, "after-click-light");
                });

                await test.step("Dark popover opens and light popover is closed", async () => {
                    await story.page.keyboard.press("Escape");
                    await expect(story.locators.popover).toHaveCount(0);
                    await story.locators.darkTriggerButton.scrollIntoViewIfNeeded();
                    await story.locators.darkTriggerButton.click();

                    await expect(story.locators.popover).toHaveCount(1);
                    await expect(
                        story.page.getByTestId(scenario.markerTestIdLight)
                    ).toHaveCount(0);
                    await expect(
                        story.page.getByTestId(scenario.markerTestIdDark)
                    ).toBeVisible();

                    await compareScreenshot(story, "after-click-dark");
                });
            });
        });
    });
});
