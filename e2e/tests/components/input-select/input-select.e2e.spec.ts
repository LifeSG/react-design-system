import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "input-select";

    public readonly locators: {
        component: {
            ctaButton: Locator;
            dropdownContainer: Locator;
            dropdownList: Locator;
            noResults: Locator;
            searchInput: Locator;
        };
        standalone: {
            default: Locator;
            selected: Locator;
            readonly: Locator;
            disabled: Locator;
            error: Locator;
        };
        form: {
            default: Locator;
            selected: Locator;
            readonly: Locator;
            disabled: Locator;
            error: Locator;
        };
        truncation: {
            middle: Locator;
            end: Locator;
        };
        variants: {
            default: Locator;
            withSearch: Locator;
        };
        cta: Locator;
        virtualization: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            component: {
                ctaButton: page.getByTestId("cta-button"),
                dropdownContainer: page.getByTestId("dropdown-container"),
                dropdownList: page.getByTestId("dropdown-list"),
                noResults: page.getByTestId("list-no-results"),
                searchInput: page.getByTestId("search-input"),
            },
            standalone: {
                default: page.getByTestId("input-select-default"),
                selected: page.getByTestId("input-select-selected"),
                readonly: page.getByTestId("input-select-readonly"),
                disabled: page.getByTestId("input-select-disabled"),
                error: page.getByTestId("input-select-error"),
            },
            form: {
                default: page.getByTestId("input-select-default-base"),
                selected: page.getByTestId("input-select-selected-base"),
                readonly: page.getByTestId("input-select-readonly-base"),
                disabled: page.getByTestId("input-select-disabled-base"),
                error: page.getByTestId("input-select-error-base"),
            },
            truncation: {
                middle: page.getByTestId("input-select-truncation-middle"),
                end: page.getByTestId("input-select-truncation-end"),
            },
            variants: {
                default: page.getByTestId("input-select-small-default"),
                withSearch: page.getByTestId("input-select-small-search"),
            },
            cta: page.getByTestId("input-select-cta-base"),
            virtualization: page.getByTestId("input-select-virtualization"),
        };
    }

    public getOption(name: string) {
        return this.page.getByRole("option", { name });
    }

    public getActiveOption() {
        return this.locators.component.dropdownList.locator(
            '[role="option"][tabindex="0"]'
        );
    }

    public async openDropdown(select: Locator) {
        await select.click();
        await expect(this.locators.component.dropdownContainer).toBeVisible();
        await expect(this.locators.component.dropdownList).toBeVisible();
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("InputSelect", () => {
    test.describe("Form", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.form.default,
            });

            await story.openDropdown(story.locators.form.default);
            await compareScreenshot(story, "open", {
                fullscreen: true,
            });

            await story.page.mouse.click(0, 0);

            await expect(story.locators.form.selected).toContainText(
                "Option B"
            );
            await compareScreenshot(story, "selected", {
                locator: story.locators.form.selected,
            });

            await compareScreenshot(story, "error", {
                locator: story.locators.form.error,
            });
        });

        test("Readonly disabled", async ({ story }) => {
            await expect(story.locators.form.readonly).not.toBeDisabled();

            await story.locators.form.readonly.click();
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();

            await story.locators.form.readonly.focus();
            await story.page.keyboard.press("Enter");
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();

            await expect(story.locators.form.disabled).toMatchAriaSnapshot(`
                - combobox [disabled]
            `);

            await story.locators.form.disabled.click();
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();
        });
    });

    test.describe("Standalone", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.standalone.default,
            });

            await story.openDropdown(story.locators.standalone.default);
            await compareScreenshot(story, "open", {
                fullscreen: true,
            });

            await story.page.mouse.click(0, 0);

            await expect(story.locators.standalone.selected).toContainText(
                "Option B"
            );
            await compareScreenshot(story, "selected", {
                locator: story.locators.standalone.selected,
            });

            await compareScreenshot(story, "error", {
                locator: story.locators.standalone.error,
            });
        });

        test("Readonly disabled", async ({ story }) => {
            await expect(story.locators.standalone.readonly).not.toBeDisabled();

            await story.locators.standalone.readonly.click();
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();

            await story.locators.standalone.readonly.focus();
            await story.page.keyboard.press("Enter");
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();

            await expect(story.locators.standalone.disabled)
                .toMatchAriaSnapshot(`
                - combobox [disabled]
            `);

            await story.locators.standalone.disabled.click();
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants");
        });

        test("Keyboard", async ({ story }) => {
            await story.locators.form.default.focus();

            await story.page.keyboard.press("Enter");
            await expect(
                story.locators.component.dropdownContainer
            ).toBeVisible();

            await story.page.keyboard.press("ArrowDown");
            await story.page.keyboard.press("ArrowDown");
            await expect(story.getActiveOption()).toContainText("Option C");

            await story.page.keyboard.press("Escape");
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();
        });

        test("Focus", async ({ story }) => {
            await story.openDropdown(story.locators.form.default);

            await story.getOption("Option B").hover();
            await compareScreenshot(story, "hover-item", {
                fullscreen: true,
            });

            await story.getOption("Option B").click();
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();
            await expect(story.locators.form.default).toContainText("Option B");

            await story.openDropdown(story.locators.form.default);
            await story.getOption("Option B").hover();
            await compareScreenshot(story, "hover-selected-item", {
                fullscreen: true,
            });
        });
    });

    test.describe(async () => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-search");
        });

        test("With search", async ({ story }) => {
            await story.openDropdown(story.locators.form.default);
            await compareScreenshot(story, "open", {
                fullscreen: true,
            });

            await story.locators.component.searchInput.fill("zzzz");
            await expect(story.locators.component.noResults).toBeVisible();
            await compareScreenshot(story, "search-no-results", {
                fullscreen: true,
            });

            await story.locators.component.searchInput.fill("");
            await expect(story.locators.component.noResults).not.toBeVisible();
            await expect(story.getOption("Option A")).toBeVisible();

            await compareScreenshot(story, "search-cleared", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("truncation");
        });

        test("Truncation", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await story.openDropdown(story.locators.truncation.middle);
            await compareScreenshot(story, "open-middle", {
                fullscreen: true,
            });

            await story.page.mouse.click(0, 0);

            await story.openDropdown(story.locators.truncation.end);
            await compareScreenshot(story, "open-end", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("virtualization");
        });

        test("Long list", async ({ story }) => {
            await story.openDropdown(story.locators.virtualization);

            const before =
                await story.locators.component.dropdownContainer.boundingBox();
            await expect(story.locators.component.searchInput).toBeFocused();

            await story.locators.component.searchInput.fill("Option 49999");
            await expect(story.getOption("Option 49999")).toBeVisible();
            await expect(story.locators.component.searchInput).toBeFocused();

            const after =
                await story.locators.component.dropdownContainer.boundingBox();
            expect(before).not.toBeNull();
            expect(after).not.toBeNull();
            expect(
                Math.abs((after?.y ?? 0) - (before?.y ?? 0))
            ).toBeLessThanOrEqual(2);

            await compareScreenshot(story, "search-result", {
                fullscreen: true,
            });

            await story.getOption("Option 49999").click();
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();
            await expect(story.locators.virtualization).toContainText(
                "Option 49999"
            );
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-cta");
        });

        test("Custom CTA", async ({ story }) => {
            await story.openDropdown(story.locators.cta);
            await expect(story.locators.component.ctaButton).toBeVisible();
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });

            await story.locators.component.ctaButton.click();
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants");
        });

        test("Variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await story.openDropdown(story.locators.variants.default);
            await compareScreenshot(story, "open-default", {
                fullscreen: true,
            });

            await story.page.mouse.click(0, 0);

            await story.openDropdown(story.locators.variants.withSearch);
            await compareScreenshot(story, "open-with-search", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid");
        });

        test("Grid layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
