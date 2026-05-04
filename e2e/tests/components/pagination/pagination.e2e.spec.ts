import { test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "pagination";

    public readonly locators: {
        paginationFirst: Locator;
        paginationMiddle: Locator;
        paginationLast: Locator;
        prevButton: (pagination: Locator) => Locator;
        nextButton: (pagination: Locator) => Locator;
        ellipsisForward: (pagination: Locator) => Locator;
        ellipsisBackward: (pagination: Locator) => Locator;
        pageButton: (
            pagination: Locator,
            pageNumber: number,
            totalPages: number
        ) => Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            paginationFirst: page.getByTestId("pagination-first"),
            paginationMiddle: page.getByTestId("pagination-middle"),
            paginationLast: page.getByTestId("pagination-last"),
            prevButton: (pagination) =>
                pagination.getByRole("button", {
                    name: "Previous page",
                }),
            nextButton: (pagination) =>
                pagination.getByRole("button", {
                    name: "Next page",
                }),
            ellipsisForward: (pagination) =>
                pagination.getByRole("button", { name: "Next 5 pages" }),
            ellipsisBackward: (pagination) =>
                pagination.getByRole("button", { name: "Previous 5 pages" }),
            pageButton: (pagination, pageNumber, totalPages) =>
                pagination.getByRole("button", {
                    name: `page ${pageNumber} of ${totalPages}`,
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

test.describe("Pagination", () => {
    test.describe("Few pages", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("few-pages");
            });

            test("States", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("few-pages", { mode: "dark" });
            });

            test("States (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("few-pages", { size: "mobile" });
            });

            test("States (mobile)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("few-pages", { size: "mobile", mode: "dark" });
            });

            test("States (mobile, dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Many pages", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("many-pages");
            });

            test("States", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("many-pages", { mode: "dark" });
            });

            test("States (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("many-pages", { size: "mobile" });
            });

            test("States (mobile)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("many-pages", {
                    size: "mobile",
                    mode: "dark",
                });
            });

            test("States (mobile, dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("many-pages");
            });

            test("Hover states", async ({ story }) => {
                await test.step("Hover ellipsis forward", async () => {
                    const button = story.locators.ellipsisForward(
                        story.locators.paginationMiddle
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-ellipsis-forward");
                });

                await test.step("Hover ellipsis backward", async () => {
                    const button = story.locators.ellipsisBackward(
                        story.locators.paginationMiddle
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-ellipsis-backward");
                });

                await test.step("Hover prev button", async () => {
                    const button = story.locators.prevButton(
                        story.locators.paginationMiddle
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-prev", {
                        locator: button,
                    });
                });

                await test.step("Hover next button", async () => {
                    const button = story.locators.nextButton(
                        story.locators.paginationMiddle
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-next", {
                        locator: button,
                    });
                });

                await test.step("Hover disabled prev button", async () => {
                    const button = story.locators.prevButton(
                        story.locators.paginationFirst
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-disabled-prev", {
                        locator: button,
                    });
                });

                await test.step("Hover disabled next button", async () => {
                    const button = story.locators.nextButton(
                        story.locators.paginationLast
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-disabled-next", {
                        locator: button,
                    });
                });

                await test.step("Hover selected page", async () => {
                    const button = story.locators.pageButton(
                        story.locators.paginationMiddle,
                        10,
                        20
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-selected-page", {
                        locator: button,
                    });
                });

                await test.step("Hover unselected page", async () => {
                    const button = story.locators.pageButton(
                        story.locators.paginationMiddle,
                        1,
                        20
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-unselected-page", {
                        locator: button,
                    });
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("many-pages", { mode: "dark" });
            });

            test("Hover states (dark mode)", async ({ story }) => {
                await test.step("Hover ellipsis forward", async () => {
                    const button = story.locators.ellipsisForward(
                        story.locators.paginationMiddle
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-ellipsis-forward");
                });

                await test.step("Hover ellipsis backward", async () => {
                    const button = story.locators.ellipsisBackward(
                        story.locators.paginationMiddle
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-ellipsis-backward");
                });

                await test.step("Hover prev button", async () => {
                    const button = story.locators.prevButton(
                        story.locators.paginationMiddle
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-prev", {
                        locator: button,
                    });
                });

                await test.step("Hover next button", async () => {
                    const button = story.locators.nextButton(
                        story.locators.paginationMiddle
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-next", {
                        locator: button,
                    });
                });

                await test.step("Hover selected page", async () => {
                    const button = story.locators.pageButton(
                        story.locators.paginationMiddle,
                        10,
                        20
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-selected-page", {
                        locator: button,
                    });
                });

                await test.step("Hover unselected page", async () => {
                    const button = story.locators.pageButton(
                        story.locators.paginationMiddle,
                        1,
                        20
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-unselected-page", {
                        locator: button,
                    });
                });
            });
        });
    });
});
