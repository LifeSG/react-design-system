import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "pagination";

    public readonly locators: {
        internal: {
            pageSizeSelector: Locator;
            pageSizeDropdown: Locator;
        };
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
        firstPageButton: (pagination: Locator) => Locator;
        lastPageButton: (pagination: Locator) => Locator;
        focusTargetBefore: Locator;
        focusTargetAfter: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                pageSizeSelector: page.getByRole("combobox"),
                pageSizeDropdown: page.getByTestId("dropdown-container"),
            },
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
            firstPageButton: (pagination) =>
                pagination.getByRole("button", { name: "First page" }),
            lastPageButton: (pagination) =>
                pagination.getByRole("button", { name: "Last page" }),
            focusTargetBefore: page.getByTestId("focus-target-before"),
            focusTargetAfter: page.getByTestId("focus-target-after"),
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

    test.describe("showPageSizeChanger=true", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("page-size-changer");
            });

            test("Desktop", async ({ story }) => {
                await compareScreenshot(story, "mount");

                await test.step("Click selector to open dropdown", async () => {
                    await story.locators.internal.pageSizeSelector.click();

                    await compareScreenshot(story, "dropdown-open", {
                        fullscreen: true,
                    });
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("page-size-changer", { size: "mobile" });
            });

            test("Mobile", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("page-size-changer", { mode: "dark" });
            });

            test("Dark mode", async ({ story }) => {
                await compareScreenshot(story, "mount");

                await test.step("Click selector to open dropdown", async () => {
                    await story.locators.internal.pageSizeSelector.click();

                    await compareScreenshot(story, "dropdown-open", {
                        fullscreen: true,
                    });
                });
            });
        });
    });

    test.describe("showFirstAndLastNav=true", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("first-last-nav");
            });

            test("States", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });

            test("Hover states", async ({ story }) => {
                await test.step("Hover first page button", async () => {
                    const button = story.locators.firstPageButton(
                        story.locators.paginationMiddle
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-first-page", {
                        locator: button,
                    });
                });

                await test.step("Hover last page button", async () => {
                    const button = story.locators.lastPageButton(
                        story.locators.paginationMiddle
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-last-page", {
                        locator: button,
                    });
                });

                await test.step("Hover disabled first page button", async () => {
                    const button = story.locators.firstPageButton(
                        story.locators.paginationFirst
                    );
                    await button.hover();
                    await compareScreenshot(
                        story,
                        "hover-disabled-first-page",
                        {
                            locator: button,
                        }
                    );
                });

                await test.step("Hover disabled last page button", async () => {
                    const button = story.locators.lastPageButton(
                        story.locators.paginationLast
                    );
                    await button.hover();
                    await compareScreenshot(story, "hover-disabled-last-page", {
                        locator: button,
                    });
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("first-last-nav", { mode: "dark" });
            });

            test("States (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("first-last-nav", { size: "mobile" });
            });

            test("States (mobile)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("interaction");
        });

        test("Keyboard navigation", async ({ story }) => {
            const pagination = story.locators.paginationMiddle;

            await test.step("Focus on pagination", async () => {
                await story.locators.focusTargetBefore.focus();
            });

            await test.step("Tab to first page button", async () => {
                await story.page.keyboard.press("Tab");

                await expect(
                    story.locators.firstPageButton(pagination)
                ).toBeFocused();
                await compareScreenshot(story, "focus-first-page-button", {
                    locator: pagination,
                });
            });

            await test.step("Tab to prev button", async () => {
                await story.page.keyboard.press("Tab");

                await expect(
                    story.locators.prevButton(pagination)
                ).toBeFocused();
                await compareScreenshot(story, "focus-prev-button", {
                    locator: pagination,
                });
            });

            await test.step("Tab to page button", async () => {
                await story.page.keyboard.press("Tab");

                await expect(
                    story.locators.pageButton(pagination, 1, 20)
                ).toBeFocused();
                await compareScreenshot(story, "focus-page-button", {
                    locator: pagination,
                });
            });

            await test.step("Tab to ellipsis", async () => {
                await story.page.keyboard.press("Tab");

                await expect(
                    story.locators.ellipsisBackward(pagination)
                ).toBeFocused();
            });

            await test.step("Tab to active page button", async () => {
                await story.page.keyboard.press("Tab");
                await story.page.keyboard.press("Tab");
                await story.page.keyboard.press("Tab");

                await expect(
                    story.locators.pageButton(pagination, 10, 20)
                ).toBeFocused();
            });

            await test.step("Tab to page size selector", async () => {
                await story.page.keyboard.press("Tab");
                await story.page.keyboard.press("Tab");
                await story.page.keyboard.press("Tab");
                await story.page.keyboard.press("Tab");
                await story.page.keyboard.press("Tab");
                await story.page.keyboard.press("Tab");

                await expect(
                    story.locators.internal.pageSizeSelector
                ).toBeFocused();
                await compareScreenshot(story, "focus-page-size-selector", {
                    locator: pagination,
                });
            });
        });
    });
});
