import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "language-switcher";

    public readonly locators: {
        component: {
            trigger: Locator;
            panel: Locator;
        };
        languageSwitcher: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            component: {
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
    story: async ({ page }, mountStory) => {
        const story = new StoryPage(page);
        await mountStory(story);
    },
});

test.describe("LanguageSwitcher", () => {
    test.describe("Dropdown", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("dropdown-default");
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.languageSwitcher,
            });

            await expect(story.locators.languageSwitcher).toMatchAriaSnapshot(`
                - combobox "Choose language / 选择语言 / Pilih bahasa / மொழியை தேர்ந்தெடுக்கவும், English"
            `);

            await story.locators.component.trigger.click();
            await compareScreenshot(story, "open", {
                fullscreen: true,
            });

            await expect(story.locators.languageSwitcher).toMatchAriaSnapshot(`
                - combobox "Choose language / 选择语言 / Pilih bahasa / மொழியை தேர்ந்தெடுக்கவும், English" [expanded]
                - listbox "Choose language / 选择语言 / Pilih bahasa / மொழியை தேர்ந்தெடுக்கவும்":
                    - option "English" [selected]
                    - option "中文"
                    - option "Melayu"
                    - option "தமிழ்"
            `);
        });

        test("Keyboard Interaction", async ({ story }) => {
            await story.locators.component.trigger.focus();
            await story.page.keyboard.press("Enter");
            await expect(story.locators.component.panel).toBeVisible();

            await story.page.keyboard.press("ArrowDown");
            await expect(story.getDropdownOption("中文")).toBeFocused();

            await story.page.keyboard.press("End");
            await expect(story.getDropdownOption("தமிழ்")).toBeFocused();

            await story.page.keyboard.press("Home");
            await expect(story.getDropdownOption("English")).toBeFocused();

            await story.page.keyboard.press("ArrowDown");
            await story.page.keyboard.press("Enter");
            await expect(story.locators.component.panel).not.toBeVisible();
            await expect(story.locators.component.trigger).toContainText(
                "中文"
            );
        });

        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("dropdown-preselected");
            });

            test("Preselected", async ({ story }) => {
                await expect(story.locators.component.trigger).toContainText(
                    "中文"
                );

                await compareScreenshot(story, "mount", {
                    locator: story.locators.languageSwitcher,
                });
            });
        });
    });

    test.describe("Link", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("link-default");
        });

        test("Default", async ({ story }) => {
            await expect(story.locators.languageSwitcher).toMatchAriaSnapshot(`
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

        test.describe("", () => {
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
    });
});
