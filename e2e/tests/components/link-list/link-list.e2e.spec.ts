import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";
import { fixedTimestamp, modes } from "../../consts";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "link-list";

    public readonly locators: {
        internal: {
            viewMoreButton: Locator;
            viewLessButton: Locator;
            loadingButton: Locator;
        };
        list: Locator;
        link: (title: string) => Locator;
        itemWithSecondaryDescription: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                viewMoreButton: page.getByRole("button", { name: "View more" }),
                viewLessButton: page.getByRole("button", { name: "View less" }),
                loadingButton: page.getByRole("button", { name: "Loading" }),
            },
            list: page.getByTestId("link-list"),
            link: (title: string) => page.getByRole("link", { name: title }),
            itemWithSecondaryDescription: page.getByRole("link", {
                name: "Item with secondary description",
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

test.describe("LinkList", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await story.locators.itemWithSecondaryDescription.hover();
            await compareScreenshot(story, "hover", {
                locator: story.locators.itemWithSecondaryDescription,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mode: "dark" });
        });

        test("Default (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("small");
        });

        test("Small style", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Eager load", () => {
        test.describe(() => {
            modes.forEach((mode) => {
                test.describe(() => {
                    test.beforeEach(async ({ story }) => {
                        await story.init("eager-load", { mode });
                    });

                    test(`${mode} mode`, async ({ story }) => {
                        await test.step("Collapsed state on mount", async () => {
                            await expect(
                                story.locators.internal.viewMoreButton
                            ).toHaveAttribute("aria-expanded", "false");

                            await compareScreenshot(story, "collapsed");
                        });

                        await test.step("Hover on 'View more' toggle button", async () => {
                            await story.locators.internal.viewMoreButton.hover();

                            await compareScreenshot(story, "hover-view-more", {
                                locator: story.locators.internal.viewMoreButton,
                            });
                        });

                        await test.step("Expanded state after clicking 'View more' button", async () => {
                            await story.locators.internal.viewMoreButton.click();

                            // TODO: common util
                            const element =
                                await story.locators.list.elementHandle();
                            await element?.waitForElementState("stable");
                            await element?.dispose();

                            await compareScreenshot(story, "expanded");
                        });

                        await test.step("Hover on View less toggle button", async () => {
                            await story.locators.internal.viewLessButton.hover();

                            await compareScreenshot(story, "hover-view-less", {
                                locator: story.locators.internal.viewLessButton,
                            });
                        });
                    });
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("eager-load");
            });

            test("Keyboard navigation", async ({ story }) => {
                await test.step("Tab through visible items", async () => {
                    await story.page.keyboard.press("Tab");
                    await expect(story.locators.link("Item 1")).toBeFocused();

                    await story.page.keyboard.press("Tab");
                    await expect(story.locators.link("Item 2")).toBeFocused();

                    await story.page.keyboard.press("Tab");
                    await expect(story.locators.link("Item 3")).toBeFocused();
                });

                await test.step("Tab reaches 'View more' button and hidden items are skipped", async () => {
                    await story.page.keyboard.press("Tab");
                    await expect(
                        story.locators.internal.viewMoreButton
                    ).toBeFocused();
                });

                await test.step("Activate 'View more' button with Enter key", async () => {
                    await story.page.keyboard.press("Enter");
                    await expect(
                        story.locators.internal.viewLessButton
                    ).toBeVisible();
                });

                await test.step("Tab through newly revealed items", async () => {
                    await story.page.keyboard.press("Shift+Tab");
                    await expect(
                        story.locators.link("Item 5 (hidden)")
                    ).toBeFocused();

                    await story.page.keyboard.press("Shift+Tab");
                    await expect(
                        story.locators.link("Item 4 (hidden)")
                    ).toBeFocused();
                });
            });
        });
    });

    test.describe("Lazy load", () => {
        modes.forEach((mode) => {
            test.describe(() => {
                const now = new Date(fixedTimestamp).getTime();

                test.beforeEach(async ({ story }) => {
                    await story.page.clock.install({ time: now - 30 * 1000 });
                    await story.init("lazy-load", { mode });
                });

                test(`${mode} mode`, async ({ story }) => {
                    await test.step("Initial state with 'View more' button", async () => {
                        await compareScreenshot(story, "initial");
                    });

                    await test.step("Hover on 'View more' toggle button", async () => {
                        await story.locators.internal.viewMoreButton.hover();

                        await compareScreenshot(story, "hover-view-more", {
                            locator: story.locators.internal.viewMoreButton,
                        });
                    });

                    await test.step("Loading spinner shown while loading", async () => {
                        await story.page.clock.pauseAt(now);
                        await story.locators.internal.viewMoreButton.click();

                        await compareScreenshot(story, "loading", {
                            locator: story.locators.internal.loadingButton,
                        });
                    });

                    await test.step("Items appended and 'View more' button hidden", async () => {
                        await story.page.clock.runFor(1000);
                        await story.page.clock.resume();

                        // TODO: common util
                        const element =
                            await story.locators.list.elementHandle();
                        await element?.waitForElementState("stable");
                        await element?.dispose();

                        await expect(
                            story.locators.internal.viewMoreButton
                        ).not.toBeVisible();

                        await compareScreenshot(story, "end-of-list");
                    });
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("lazy-load");
            });

            test("Keyboard navigation", async ({ story }) => {
                await test.step("Tab through available items", async () => {
                    await story.page.keyboard.press("Tab");
                    await expect(story.locators.link("Item 1")).toBeFocused();

                    await story.page.keyboard.press("Tab");
                    await expect(story.locators.link("Item 2")).toBeFocused();

                    await story.page.keyboard.press("Tab");
                    await expect(story.locators.link("Item 3")).toBeFocused();
                });

                await test.step("Tab reaches 'View more' button", async () => {
                    await story.page.keyboard.press("Tab");
                    await expect(
                        story.locators.internal.viewMoreButton
                    ).toBeFocused();
                });
            });
        });
    });
});
