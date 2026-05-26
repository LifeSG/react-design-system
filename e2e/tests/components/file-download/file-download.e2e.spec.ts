import { test as base, Locator, Page } from "@playwright/test";

import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "file-download";

    public readonly locators: {
        fileDownload: Locator;
        fileItem: (id: string) => Locator;
        downloadButton: (fileName: string) => Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            fileDownload: page.getByTestId("file-download"),
            fileItem: (id: string) => page.getByTestId(id),
            downloadButton: (fileName: string) =>
                page.getByRole("button", {
                    name: `download ${fileName}`,
                }),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("File Download", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await test.step("Hover over file item", async () => {
                await story.locators.fileItem("file-1").hover();
                await compareScreenshot(story, "hover");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mode: "dark" });
        });

        test("Default (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await test.step("Hover over file item", async () => {
                await story.locators.fileItem("file-1").hover();
                await compareScreenshot(story, "hover");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { size: "mobile" });
        });

        test("Default (mobile)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("no-border");
        });

        test("No border", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-thumbnail");
        });

        test("With thumbnail", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("error");
        });

        test("Error", async ({ story }) => {
            await story.locators.downloadButton("document.pdf").click();
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("not-ready");
        });

        test("Not ready", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("download-interaction");
        });

        test("Download interaction", async ({ story }) => {
            await test.step("Click download button", async () => {
                await story.locators.downloadButton("document.pdf").click();
            });

            await test.step("Loading state is visible", async () => {
                await compareScreenshot(story, "loading");
            });
        });
    });
});
