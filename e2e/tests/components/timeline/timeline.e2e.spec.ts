import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "timeline";

    public readonly locators: {
        timeline: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            timeline: page.getByTestId("timeline"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Timeline", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants");
        });

        test("All variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants", { mode: "dark" });
        });

        test("All variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("pills");
        });

        test("Status pills", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("pills", { mode: "dark" });
        });

        test("Status pills (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("numeric-offset");
        });

        test("Numeric variant with counter offset", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants");
        });

        test("Accessibility", async ({ story }) => {
            await expect(story.locators.timeline).toMatchAriaSnapshot(`
                - heading "What's next" [level=2]
                - list:
                    - listitem:
                        - text: Completed step
                        - heading "Completed" [level=3]
                        - paragraph: An example with the completed variant.
                    - listitem:
                        - text: Current step
                        - heading "Current" [level=3]
                        - paragraph: An example with the current variant.
                    - listitem:
                        - text: Step number 1
                        - heading "Numeric" [level=3]
                        - paragraph: An example with the numeric variant.
                    - listitem:
                        - text: Upcoming active step
                        - heading "Upcoming active" [level=3]
                        - paragraph: An example with the upcoming-active variant.
                    - listitem:
                        - text: Upcoming inactive step
                        - heading "Upcoming inactive" [level=3]
                        - paragraph: An example with the upcoming-inactive variant.
                    - listitem:
                        - text: Current step, action required
                        - heading "Error" [level=3]
                        - paragraph: An example with the error variant.
                    - listitem:
                        - text: Inactive step
                        - heading "Disabled" [level=3]
                        - paragraph: An example with the disabled variant.
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("col-span");
        });

        test("Grid column span", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { size: "mobile" });
        });

        test("Mobile", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { size: "mobile", mode: "dark" });
        });

        test("Mobile (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants", { size: "mobile" });
        });

        test("Mobile - all variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants", { size: "mobile", mode: "dark" });
        });

        test("Mobile - all variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
