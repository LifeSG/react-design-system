import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "select";

    public readonly locators: {
        select: Locator;
        selector: Locator;
        dropdownContainer: Locator;
        dropdownList: Locator;
        searchInput: Locator;
        listItems: Locator;
        noResults: Locator;
        listFail: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            select: page.getByTestId("select"),
            selector: page.getByTestId("selector"),
            dropdownContainer: page.getByTestId("dropdown-container"),
            dropdownList: page.getByTestId("dropdown-list"),
            searchInput: page.getByTestId("search-input"),
            listItems: page.getByTestId("list-item"),
            noResults: page.getByTestId("list-no-results"),
            listFail: page.getByTestId("list-fail"),
        };
    }

    public getOption(name: string) {
        return this.page.getByRole("option", { name });
    }

    public async openDropdown() {
        await this.locators.select.click();
        await expect(this.locators.dropdownContainer).toBeVisible();
        await expect(this.locators.dropdownList).toBeVisible();
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Select", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default states", async ({ story }) => {
            await test.step("Mount - dropdown should be closed", async () => {
                await expect(story.locators.select).toBeVisible();
                await expect(
                    story.locators.dropdownContainer
                ).not.toBeVisible();

                await compareScreenshot(story, "mount-closed");
            });

            await test.step("Open - dropdown should be visible and first option should be active", async () => {
                await story.openDropdown();

                const first = story.getOption("Option A");
                await expect(first).toBeVisible();
                await expect(first).toMatchAriaSnapshot(`
                    - option "Option A"
                `);

                await compareScreenshot(story, "open-first-active", {
                    fullscreen: true,
                });
            });

            await test.step("Mouse hover on other option - hovered option should be active", async () => {
                const second = story.getOption("Option B");
                await second.hover();

                await expect(second).toMatchAriaSnapshot(`
                    - option "Option B"
                `);

                await compareScreenshot(story, "open-hover-other", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("selected");
        });

        test("Selected states", async ({ story }) => {
            await test.step("Selected on mount", async () => {
                await expect(story.locators.select).toContainText("Option B");
                await expect(
                    story.locators.dropdownContainer
                ).not.toBeVisible();

                await compareScreenshot(story, "selected-on-mount");
            });

            await test.step("Selected + open - selected option should be selected and active", async () => {
                await story.openDropdown();

                const selected = story.getOption("Option B");
                await expect(selected).toMatchAriaSnapshot(`
                    - option "Option B" [selected]
                `);

                await compareScreenshot(story, "selected-open", {
                    fullscreen: true,
                });
            });

            await test.step("Selected + hover other option - selected remains selected and hovered is active", async () => {
                const selected = story.getOption("Option B");
                const hovered = story.getOption("Option C");

                await hovered.hover();

                await expect(selected).toMatchAriaSnapshot(`
                    - option "Option B" [selected]
                `);
                await expect(hovered).toMatchAriaSnapshot(`
                    - option "Option C"
                `);

                await compareScreenshot(story, "selected-hover-other", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-search");
        });

        test("With search", async ({ story }) => {
            await test.step("Open with search", async () => {
                await story.openDropdown();

                await expect(story.locators.searchInput).toBeVisible();
                await expect(story.locators.searchInput).toBeFocused();

                await compareScreenshot(story, "open-with-search", {
                    fullscreen: true,
                });
            });

            await test.step("With search but without result", async () => {
                await story.locators.searchInput.fill("zzzz");

                await expect(story.locators.noResults).toBeVisible();

                await compareScreenshot(story, "open-with-search-no-results", {
                    fullscreen: true,
                });
            });

            await test.step("Search cleared should restore options", async () => {
                await story.locators.searchInput.fill("");

                await expect(story.locators.noResults).not.toBeVisible();
                await expect(story.getOption("Option A")).toBeVisible();

                await compareScreenshot(story, "open-with-search-cleared", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("fail");
        });

        test("Fail state", async ({ story }) => {
            await story.openDropdown();
            await expect(story.locators.listFail).toBeVisible();
            await expect(story.page.getByText("Try again.")).toBeVisible();

            await compareScreenshot(story, "open-fail", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("disabled");
        });

        test("Disabled state", async ({ story }) => {
            await expect(story.locators.selector).toBeDisabled();
            await expect(story.locators.selector).toMatchAriaSnapshot(`
                - combobox [disabled]
            `);
            await expect(story.locators.dropdownContainer).not.toBeVisible();

            await compareScreenshot(story, "disabled-on-mount");

            await story.locators.select.click({ force: true });
            await expect(story.locators.dropdownContainer).not.toBeVisible();
        });
    });
});
