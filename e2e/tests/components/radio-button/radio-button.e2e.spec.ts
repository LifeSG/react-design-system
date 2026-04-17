import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "radio-button";

    public readonly locators: {
        components: {
            radio: Locator;

            radioUncheckedDefault: Locator;
            radioCheckedDefault: Locator;
            radioUncheckedDisabled: Locator;
            radioCheckedDisabled: Locator;
        };
        focusStart: Locator;
        changeCount: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            components: {
                radio: page.getByRole("radio"),

                radioUncheckedDefault: page.getByTestId(
                    "radio-unchecked-default"
                ),
                radioCheckedDefault: page.getByTestId("radio-checked-default"),
                radioUncheckedDisabled: page.getByTestId(
                    "radio-unchecked-disabled"
                ),
                radioCheckedDisabled: page.getByTestId(
                    "radio-checked-disabled"
                ),
            },
            focusStart: page.getByTestId("focus-start"),
            changeCount: page.getByTestId("change-count"),
        };
    }

    public getContainer(locator: Locator) {
        return locator.locator("xpath=..");
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, runStory) => {
        const story = new StoryPage(page);
        await runStory(story);
    },
});

test.describe("RadioButton", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants");
        });

        test("Variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(
                story.getContainer(
                    story.locators.components.radioUncheckedDefault
                )
            ).toMatchAriaSnapshot(`
                - radio
            `);

            await expect(
                story.getContainer(
                    story.locators.components.radioCheckedDefault
                )
            ).toMatchAriaSnapshot(`
                - radio [checked]
            `);

            await expect(
                story.getContainer(
                    story.locators.components.radioCheckedDisabled
                )
            ).toMatchAriaSnapshot(`
                - radio [disabled] [checked]
            `);

            await story.locators.components.radioUncheckedDefault.hover();
            await compareScreenshot(story, "hover-enabled", {
                locator: story.getContainer(
                    story.locators.components.radioUncheckedDefault
                ),
            });

            await story.locators.components.radioUncheckedDisabled.hover();
            await compareScreenshot(story, "hover-disabled", {
                locator: story.getContainer(
                    story.locators.components.radioUncheckedDisabled
                ),
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("focusable-when-disabled");
        });

        test("Focusable when disabled", async ({ story }) => {
            await test.step("Remains disabled", async () => {
                await expect(story.locators.components.radio).toHaveAttribute(
                    "aria-disabled",
                    "true"
                );

                await expect(story.locators.components.radio).toBeDisabled();
            });

            await test.step("Can receive focus", async () => {
                await story.locators.focusStart.focus();
                await story.page.keyboard.press("Tab");

                await expect(story.locators.components.radio).toBeFocused();
            });

            await test.step("Do not trigger onChange", async () => {
                await expect(story.locators.changeCount).toHaveText("0");

                await story.locators.components.radio.click({
                    force: true,
                });

                await story.page.keyboard.press("Space");

                await expect(story.locators.changeCount).toHaveText("0");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("keyboard-navigation");
        });

        test("Keyboard navigation", async ({ story }) => {
            await test.step("Radio can receive focus", async () => {
                await story.locators.focusStart.focus();
                await story.page.keyboard.press("Tab");

                await expect(story.locators.components.radio).toBeFocused();
            });

            await test.step("Space key checks radio and fires onChange", async () => {
                await expect(story.locators.changeCount).toHaveText("0");

                await story.page.keyboard.press("Space");

                await expect(story.locators.components.radio).toBeChecked();
                await expect(story.locators.changeCount).toHaveText("1");
            });
        });
    });
});
