import { test as base, expect, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";
import { THEME_TYPES } from "../../../../src/theme/types";
import { fixedTimestamp } from "../../consts";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "footer";

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

test.describe("Footer", () => {
    for (const theme of THEME_TYPES) {
        test.describe("Default", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("default-layout", {
                    mockedTimestamp: fixedTimestamp,
                    theme: theme,
                });
            });

            test(`${theme} theme`, async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe("Default dark mode", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("default-layout", {
                    mode: "dark",
                    mockedTimestamp: fixedTimestamp,
                    theme: theme,
                });
            });

            test(`${theme} theme`, async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    }

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("minimal", { mockedTimestamp: fixedTimestamp });
        });

        test("Minimal layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("minimal", {
                mode: "dark",
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Minimal layout dark", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("download-addon-variant", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Download addon variant", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("download-addon-variant", {
                mode: "dark",
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Download addon variant dark", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("resource-addon-variant", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Resource addon variant", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("resource-addon-variant", {
                mode: "dark",
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Resource addon variant dark", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-content", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Custom content layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("stretch-layout", {
                mockedTimestamp: fixedTimestamp,
                size: "xxl",
            });
        });

        test("Stretch layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("hidden-logo", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Hidden logo layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-copyright", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Custom copyright info", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-layout", {
                mockedTimestamp: fixedTimestamp,
                size: "mobile",
            });
        });

        test("Mobile", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-layout", {
                mockedTimestamp: fixedTimestamp,
                size: "tablet",
            });
        });

        test("Tablet", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
