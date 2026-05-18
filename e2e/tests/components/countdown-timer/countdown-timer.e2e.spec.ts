import { test as base, expect, Locator, Page } from "@playwright/test";
import { fixedTimestamp } from "../../consts";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "countdown-timer";

    public readonly locators: {
        internal: {
            inlineCountdown: Locator;
        };
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                inlineCountdown: page.locator('[data-id="countdown-wrapper"]'),
            },
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Countdown Timer", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("non-warn", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Non-warn", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("non-warn", {
                mockedTimestamp: fixedTimestamp,
                mode: "dark",
            });
        });

        test("Non-warn (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("non-warn", {
                mockedTimestamp: fixedTimestamp,
                size: "mobile",
            });
        });

        test("Non-warn (mobile)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("warn", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Warn", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("warn", {
                mockedTimestamp: fixedTimestamp,
                mode: "dark",
            });
        });

        test("Warn (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("right-aligned", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Right-aligned fixed position", async ({ story }) => {
            await story.scrollToEnd({ scrollTarget: story.layout });

            await compareScreenshot(story, "scrolled", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("left-aligned", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Left-aligned fixed position", async ({ story }) => {
            await story.scrollToEnd({ scrollTarget: story.layout });

            await compareScreenshot(story, "scrolled", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("right-aligned", {
                mockedTimestamp: fixedTimestamp,
                size: "mobile",
            });
        });

        test("Fixed position mobile", async ({ story }) => {
            await story.scrollToEnd({ scrollTarget: story.layout });

            await compareScreenshot(story, "scrolled", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-offset", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Custom offset", async ({ story }) => {
            await story.scrollToEnd({ scrollTarget: story.layout });

            await compareScreenshot(story, "scrolled", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-offset", {
                mockedTimestamp: fixedTimestamp,
                size: "mobile",
            });
        });

        test("Custom offset (mobile)", async ({ story }) => {
            await story.scrollToEnd({ scrollTarget: story.layout });

            await compareScreenshot(story, "scrolled", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.page.clock.install({
                time: new Date("2024-02-02T08:00:00"),
            });
            await story.init("non-warn", {
                size: "mobile",
            });
        });

        test("No timer drift", async ({ story }) => {
            // Pretend that the user closed the laptop lid and opened it again
            await story.page.clock.fastForward(60 * 1000 + 100);

            await expect(story.locators.internal.inlineCountdown).toContainText(
                "1 min 00 secs"
            );

            // Repeat
            await story.page.clock.fastForward(61 * 1000);

            await expect(story.locators.internal.inlineCountdown).toContainText(
                "0 mins 00 secs"
            );
        });
    });
});
