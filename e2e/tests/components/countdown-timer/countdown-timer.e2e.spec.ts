import { test as base, Locator, Page } from "@playwright/test";
import { fixedTimestamp } from "../../consts";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "countdown-timer";

    public readonly locators: {
        countdownTimer: Locator;
        inlineCountdown: Locator;
        fixedCountdown: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            countdownTimer: page.getByTestId("countdown-timer"),
            inlineCountdown: page.locator('[data-id="countdown-wrapper"]'),
            fixedCountdown: page.locator('[data-id="fixed-countdown-wrapper"]'),
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
});
