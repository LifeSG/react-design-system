import { test as base, expect, Locator, Page } from "@playwright/test";
import {
    AbstractStoryPage,
    compareScreenshot,
    waitForAnimationEnd,
} from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "filter-checkbox";

    public readonly locators: {
        sidebar: Locator;
        modal: Locator;
        showButton: Locator;
        checkboxDefault: Locator;
        checkboxDefaultViewMoreButton: Locator;
        checkboxDefaultViewLessButton: Locator;
        checkboxNonMinimisable: Locator;
        checkboxMobileCheckbox: Locator;
        checkboxToggleContentWidth: Locator;
        checkboxNested: Locator;
    };

    constructor(page: Page) {
        super(page);

        const sidebar = page.getByTestId("filter-desktop");
        const modal = page.getByTestId("filter-mobile");
        const checkboxDefault = page.getByTestId("checkbox-default");

        this.locators = {
            sidebar,
            modal,
            showButton: page.getByTestId("filter-show-button"),
            checkboxDefault,
            checkboxDefaultViewMoreButton: checkboxDefault.getByRole("button", {
                name: /view more/i,
            }),
            checkboxDefaultViewLessButton: checkboxDefault.getByRole("button", {
                name: /view less/i,
            }),
            checkboxNonMinimisable: page.getByTestId(
                "checkbox-non-minimisable"
            ),
            checkboxMobileCheckbox: page.getByTestId(
                "checkbox-mobile-checkbox"
            ),
            checkboxToggleContentWidth: page.getByTestId(
                "checkbox-toggle-content-width"
            ),
            checkboxNested: page.getByTestId("checkbox-nested"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Filter Checkbox", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.sidebar,
            });
            await test.step("Hovering over an option", async () => {
                const { checkboxDefault } = story.locators;

                await checkboxDefault
                    .getByRole("checkbox", { name: "Option 1" })
                    .hover();

                await compareScreenshot(story, "hover", {
                    locator: story.locators.sidebar,
                });
            });
        });

        test("Minimisable", async ({ story }) => {
            const {
                checkboxDefault,
                checkboxDefaultViewMoreButton,
                checkboxDefaultViewLessButton,
            } = story.locators;

            await test.step("Expand options", async () => {
                await checkboxDefaultViewMoreButton.click();
                await waitForAnimationEnd(checkboxDefault);
                await expect(checkboxDefaultViewLessButton).toBeVisible();
                await story.page.mouse.move(0, 0); // to avoid capturing hover state
            });

            await compareScreenshot(story, "expanded");

            await test.step("Collapse options", async () => {
                await checkboxDefaultViewLessButton.click();
                await waitForAnimationEnd(checkboxDefault);
                await expect(checkboxDefaultViewMoreButton).toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mode: "dark" });
        });

        test("Default (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.sidebar,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("non-minimisable");
        });

        test("Non-minimisable", async ({ story }) => {
            const { checkboxNonMinimisable } = story.locators;

            await expect(
                checkboxNonMinimisable.getByRole("button", {
                    name: /view more/i,
                })
            ).toBeHidden();
            await expect(
                checkboxNonMinimisable.getByRole("checkbox", {
                    name: "Option 8",
                })
            ).toBeVisible();
            await compareScreenshot(story, "mount", {
                locator: story.locators.sidebar,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("nested");
        });

        test("Nested", async ({ story }) => {
            const { checkboxNested } = story.locators;

            await compareScreenshot(story, "mount");

            await test.step("Clicking a parent selects all descendants", async () => {
                const parent = checkboxNested.getByRole("treeitem", {
                    name: /south-east asia/i,
                });
                await parent.click();

                await expect(
                    checkboxNested.getByRole("treeitem", {
                        name: /singapore/i,
                    })
                ).toHaveAttribute("aria-checked", "true");
                await expect(
                    checkboxNested.getByRole("treeitem", {
                        name: /malaysia/i,
                    })
                ).toHaveAttribute("aria-checked", "true");
                await expect(
                    checkboxNested.getByRole("treeitem", {
                        name: /thailand/i,
                    })
                ).toHaveAttribute("aria-checked", "true");
            });

            await test.step("Parent ancestor shows indeterminate state", async () => {
                await expect(
                    checkboxNested.getByRole("treeitem", {
                        name: /^asia$/i,
                    })
                ).toHaveAttribute("aria-checked", "mixed");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("nested", { mode: "dark" });
        });

        test("Nested (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Mobile", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", { size: "mobile" });
                await story.locators.showButton.click();
                await waitForAnimationEnd(story.locators.modal);
            });

            test("Default", async ({ story }) => {
                await expect(
                    story.locators.checkboxDefault.getByTestId("toggle-input")
                ).toHaveCount(8);
                await compareScreenshot(story, "mount", { fullscreen: true });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", {
                    size: "mobile",
                    mode: "dark",
                });
                await story.locators.showButton.click();
                await waitForAnimationEnd(story.locators.modal);
            });

            test("Default (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount", { fullscreen: true });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("mobile-checkbox", { size: "mobile" });
                await story.locators.showButton.click();
                await waitForAnimationEnd(story.locators.modal);
            });

            test("Mobile checkbox mode", async ({ story }) => {
                const { checkboxMobileCheckbox } = story.locators;

                await expect(
                    checkboxMobileCheckbox.getByTestId("toggle-input")
                ).toHaveCount(0);
                await expect(
                    checkboxMobileCheckbox.getByRole("checkbox", {
                        name: "Option 1",
                    })
                ).toBeVisible();

                await compareScreenshot(story, "mount", { fullscreen: true });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("mobile-checkbox", {
                    size: "mobile",
                    mode: "dark",
                });
                await story.locators.showButton.click();
                await waitForAnimationEnd(story.locators.modal);
            });

            test("Mobile checkbox mode (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount", { fullscreen: true });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("mobile-toggle-content-width", {
                    size: "mobile",
                });
                await story.locators.showButton.click();
                await waitForAnimationEnd(story.locators.modal);
                await story.page.waitForTimeout(1000); // wait for content width to adjust
            });

            test("useToggleContentWidth", async ({ story }) => {
                await compareScreenshot(story, "mount", { fullscreen: true });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("mobile-toggle-content-width", {
                    size: "mobile",
                    mode: "dark",
                });
                await story.locators.showButton.click();
                await waitForAnimationEnd(story.locators.modal);
                await story.page.waitForTimeout(1000); // wait for content width to adjust
            });

            test("useToggleContentWidth (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount", { fullscreen: true });
            });
        });
    });
});
