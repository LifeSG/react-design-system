import { expect, test as base, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "error-display";
    constructor(page: Page) {
        super(page);
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("ErrorDisplay", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default – renders image, title and description", async ({
            story,
        }) => {
            await test.step("Screenshot matches", async () => {
                await compareScreenshot(story, "default-mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mode: "dark" });
        });

        test("Default (dark mode)", async ({ story }) => {
            await test.step("Component mounts in dark mode", async () => {
                await expect(
                    story.page.getByTestId("error-display--title")
                ).toBeVisible();
            });

            await test.step("Screenshot matches", async () => {
                await compareScreenshot(story, "default-dark");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { size: "mobile" });
        });

        test("Default – mobile viewport", async ({ story }) => {
            await test.step("Component mounts on mobile", async () => {
                await expect(
                    story.page.getByTestId("error-display--title")
                ).toBeVisible();
            });

            await test.step("Screenshot matches", async () => {
                await compareScreenshot(story, "default-mobile");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-action-button");
        });

        test("With action button – renders and fires onClick", async ({
            story,
        }) => {
            const button = story.page.getByRole("button", {
                name: "Continue anyway",
            });

            await test.step("Screenshot matches", async () => {
                await compareScreenshot(story, "with-action-button-mount");
            });

            await test.step("Clicking the button fires the handler", async () => {
                await button.click();
                await expect(
                    story.page.getByTestId("continue-button-click-result")
                ).toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("image-only");
        });

        test("Image only – title and description are not rendered", async ({
            story,
        }) => {
            await test.step("Title is not rendered", async () => {
                await expect(
                    story.page.getByTestId("error-display--title")
                ).not.toBeVisible();
            });

            await test.step("Description is not rendered", async () => {
                await expect(
                    story.page.getByTestId("error-display--description")
                ).not.toBeVisible();
            });

            await test.step("Screenshot matches", async () => {
                await compareScreenshot(story, "image-only-mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-error");
        });

        test("Custom error – renders custom title and description", async ({
            story,
        }) => {
            await test.step("Custom title is rendered", async () => {
                await expect(
                    story.page.getByRole("heading", {
                        level: 2,
                        name: "My Custom 404",
                    })
                ).toBeVisible();
            });

            await test.step("Custom description with JSX is rendered", async () => {
                await expect(
                    story.page.getByTestId("error-display--description")
                ).toContainText("JSX component");
            });

            await test.step("Screenshot matches", async () => {
                await compareScreenshot(story, "custom-error-mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("maintenance");
        });

        test("Maintenance – renders dateString in description", async ({
            story,
        }) => {
            await test.step("Screenshot matches", async () => {
                await compareScreenshot(story, "maintenance-mount");
            });
        });
    });
});
