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
        checkboxMobileCheckbox: Locator;
        checkboxToggleContentWidth: Locator;
        checkboxMinimisable: Locator;
        checkboxMinimisableViewMoreButton: Locator;
        checkboxMinimisableViewLessButton: Locator;
        checkboxNested: Locator;
    };

    constructor(page: Page) {
        super(page);

        const sidebar = page.getByTestId("filter-desktop");
        const modal = page.getByTestId("filter-mobile");
        const checkboxMinimisable = page.getByTestId("checkbox-minimisable");

        this.locators = {
            sidebar,
            modal,
            showButton: page.getByTestId("filter-show-button"),
            checkboxDefault: page.getByTestId("checkbox-default"),
            checkboxMobileCheckbox: page.getByTestId(
                "checkbox-mobile-checkbox"
            ),
            checkboxToggleContentWidth: page.getByTestId(
                "checkbox-toggle-content-width"
            ),
            checkboxMinimisable,
            checkboxMinimisableViewMoreButton: checkboxMinimisable.getByRole(
                "button",
                { name: /view more/i }
            ),
            checkboxMinimisableViewLessButton: checkboxMinimisable.getByRole(
                "button",
                { name: /view less/i }
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
            const { checkboxDefault } = story.locators;
            await expect(
                checkboxDefault.getByRole("button", {
                    name: /view more/i,
                })
            ).toBeHidden();
            await expect(
                checkboxDefault.getByRole("checkbox", {
                    name: "Option 8",
                })
            ).toBeVisible();
            await compareScreenshot(story, "mount", {
                locator: story.locators.sidebar,
            });
        });
    });

    test.describe(() => {
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
    });

    test.describe("", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("minimisable");
            });

            test("Minimisable", async ({ story }) => {
                const {
                    checkboxMinimisable,
                    checkboxMinimisableViewMoreButton,
                    checkboxMinimisableViewLessButton,
                } = story.locators;

                await compareScreenshot(story, "minimised");

                await test.step("Expand options", async () => {
                    await checkboxMinimisableViewMoreButton.click();
                    await waitForAnimationEnd(checkboxMinimisable);
                    await expect(
                        checkboxMinimisableViewLessButton
                    ).toBeVisible();
                });

                await compareScreenshot(story, "expanded");

                await test.step("Collapse options", async () => {
                    await checkboxMinimisableViewLessButton.click();
                    await waitForAnimationEnd(checkboxMinimisable);
                    await expect(
                        checkboxMinimisableViewMoreButton
                    ).toBeVisible();
                });
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

    test.describe("", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("nested", { mode: "dark" });
            });

            test("Nested (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
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
            });

            test("useToggleContentWidth (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount", { fullscreen: true });
            });
        });
    });
});
