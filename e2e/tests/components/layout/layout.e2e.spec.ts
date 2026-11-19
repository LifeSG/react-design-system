import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "layout";

    public readonly locators: {};

    constructor(page: Page) {
        super(page);

        this.locators = {};
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Layout", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("content");
        });

        test("Content variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("section");
        });

        test("Section variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("container");
        });

        test("Container variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("container", { size: "xxl" });
        });

        test("Stretched container has no max-width constraint", async ({
            story,
        }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("ColDiv", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("col-div", { size: "xs" });
            });

            test("XS breakpoint", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("col-div", { size: "md" });
            });

            test("MD breakpoint", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("col-div", { size: "lg" });
            });

            test("LG", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("col-div", { size: "xl" });
            });

            test("XL breakpoint", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.use({ javaScriptEnabled: false });

            test.beforeEach(async ({ story }) => {
                await story.init("col-div", { size: "lg" });
            });

            test("Pre-hydration fallback", async ({ story }) => {
                // force evaluation of the script which didn't run since JavaScript is disabled
                await story.page.evaluate(() => {
                    const script = document.getElementById("fds-init-script");
                    if (script) {
                        eval(script.innerHTML);
                    }
                });

                const body = story.page.locator("body");
                await expect(body).toContainClass("fds-breakpoint-lg");
                await expect(body).not.toContainClass("fds-breakpoint-md");
                await expect(body).not.toContainClass("fds-breakpoint-xl");

                await compareScreenshot(story, "mount");
            });
        });
    });
});
