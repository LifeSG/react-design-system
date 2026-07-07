import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "language-switcher";

    public readonly locators: {
        internal: {
            trigger: Locator;
            panel: Locator;
        };
        languageSwitcher: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                trigger: page.getByTestId("language-switcher--trigger"),
                panel: page.getByTestId("language-switcher--panel"),
            },
            languageSwitcher: page.getByTestId("language-switcher"),
        };
    }

    public getDropdownOption(name: string) {
        return this.page.getByRole("option", { name });
    }

    public getLinkButton(name: string) {
        return this.page.getByRole("button", { name, exact: true });
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("LanguageSwitcher", () => {
    test.describe("Dropdown", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("dropdown-default");
            });

            test("Default", async ({ story }) => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.languageSwitcher,
                });

                await expect(story.locators.languageSwitcher)
                    .toMatchAriaSnapshot(`
                - combobox "Choose language / 选择语言 / Pilih bahasa / மொழியை தேர்ந்தெடுக்கவும், English"
            `);

                await story.locators.internal.trigger.click();

                await compareScreenshot(story, "open", {
                    fullscreen: true,
                });

                await expect(story.locators.languageSwitcher)
                    .toMatchAriaSnapshot(`
                - combobox "Choose language / 选择语言 / Pilih bahasa / மொழியை தேர்ந்தெடுக்கவும், English" [expanded]
                - listbox "Choose language / 选择语言 / Pilih bahasa / மொழியை தேர்ந்தெடுக்கவும்":
                    - option "English" [selected]
                    - option "中文"
                    - option "Melayu"
                    - option "தமிழ்"
            `);
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("dropdown-default", { mode: "dark" });
            });

            test("Default (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.languageSwitcher,
                });

                await story.locators.internal.trigger.click();
                await compareScreenshot(story, "open", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("dropdown-default", { size: "mobile" });
            });

            test("Hover", async ({ story }) => {
                await story.locators.internal.trigger.click();
                await story.getDropdownOption("English").hover();

                await compareScreenshot(story, "selected", {
                    fullscreen: true,
                });

                await story.getDropdownOption("中文").hover();

                await compareScreenshot(story, "unselected", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("dropdown-preselected");
            });

            test("Preselected", async ({ story }) => {
                await expect(story.locators.internal.trigger).toContainText(
                    "中文"
                );

                await compareScreenshot(story, "mount", {
                    locator: story.locators.languageSwitcher,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("dropdown-default");
            });

            test("Keyboard Interaction", async ({ story }) => {
                await story.locators.internal.trigger.focus();
                await story.page.keyboard.press("Enter");
                await expect(story.locators.internal.panel).toBeVisible();
                await expect(story.getDropdownOption("English")).toBeFocused();

                await story.page.keyboard.press("ArrowDown");
                await expect(story.getDropdownOption("中文")).toBeFocused();

                await story.page.keyboard.press("End");
                await expect(story.getDropdownOption("தமிழ்")).toBeFocused();

                await story.page.keyboard.press("Home");
                await expect(story.getDropdownOption("English")).toBeFocused();

                await story.page.keyboard.press("ArrowDown");
                await story.page.keyboard.press("Enter");
                await expect(story.locators.internal.panel).not.toBeVisible();
                await expect(story.locators.internal.trigger).toContainText(
                    "中文"
                );

                await story.page.keyboard.press("Enter");
                await expect(story.locators.internal.panel).toBeVisible();

                await story.page.keyboard.press("Escape");
                await expect(story.locators.internal.panel).not.toBeVisible();
            });
        });
    });

    test.describe("Link", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("link-default");
            });

            test("Default", async ({ story }) => {
                await expect(story.locators.languageSwitcher)
                    .toMatchAriaSnapshot(`
                - group "Choose language / 选择语言 / Pilih bahasa / மொழியை தேர்ந்தெடுக்கவும்":
                    - listitem:
                        - button "English" [pressed]
                    - listitem:
                        - button "中文"
                    - listitem:
                        - button "Melayu"
                    - listitem:
                        - button "தமிழ்"
            `);

                await compareScreenshot(story, "mount", {
                    locator: story.locators.languageSwitcher,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("link-default", { mode: "dark" });
            });

            test("Default (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.languageSwitcher,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("link-preselected");
            });

            test("Preselected", async ({ story }) => {
                const tamil = story.getLinkButton("தமிழ்");

                await expect(tamil).toHaveAttribute("aria-pressed", "true");

                await compareScreenshot(story, "mount", {
                    locator: story.locators.languageSwitcher,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("link-default", { size: "mobile" });
            });

            test("Hover", async ({ story }) => {
                await story.getLinkButton("English").hover();

                await compareScreenshot(story, "selected", {
                    locator: story.locators.languageSwitcher,
                });

                await story.getLinkButton("中文").hover();

                await compareScreenshot(story, "unselected", {
                    locator: story.locators.languageSwitcher,
                });
            });
        });
    });
});
