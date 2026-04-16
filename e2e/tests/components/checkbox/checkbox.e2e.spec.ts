import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "checkbox";

    public readonly locators: {
        checkboxDefault: Locator;
        checkboxChecked: Locator;
        checkboxIndeterminate: Locator;
        checkboxDisabled: Locator;
        checkboxDisabledChecked: Locator;
        checkboxDisabledIndeterminate: Locator;
        checkboxSmall: Locator;
        checkboxSmallChecked: Locator;
        checkboxSmallIndeterminate: Locator;
        checkboxSmallDisabled: Locator;
        checkboxSmallDisabledChecked: Locator;
        checkboxSmallDisabledIndeterminate: Locator;
        // interactive
        checkboxContainer: Locator;
        checkboxInput: Locator;
        focusStart: Locator;
        checkedState: Locator;
        changeCount: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            checkboxDefault: page.getByTestId("checkbox-default"),
            checkboxChecked: page.getByTestId("checkbox-checked"),
            checkboxIndeterminate: page.getByTestId("checkbox-indeterminate"),
            checkboxDisabled: page.getByTestId("checkbox-disabled"),
            checkboxDisabledChecked: page.getByTestId(
                "checkbox-disabled-checked"
            ),
            checkboxDisabledIndeterminate: page.getByTestId(
                "checkbox-disabled-indeterminate"
            ),
            checkboxSmall: page.getByTestId("checkbox-small"),
            checkboxSmallChecked: page.getByTestId("checkbox-small-checked"),
            checkboxSmallIndeterminate: page.getByTestId(
                "checkbox-small-indeterminate"
            ),
            checkboxSmallDisabled: page.getByTestId("checkbox-small-disabled"),
            checkboxSmallDisabledChecked: page.getByTestId(
                "checkbox-small-disabled-checked"
            ),
            checkboxSmallDisabledIndeterminate: page.getByTestId(
                "checkbox-small-disabled-indeterminate"
            ),
            // interactive
            checkboxContainer: page.getByTestId("checkbox"),
            checkboxInput: page.getByTestId("checkbox-input"),
            focusStart: page.getByTestId("focus-start"),
            checkedState: page.getByTestId("checked-state"),
            changeCount: page.getByTestId("change-count"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Checkbox", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants");
        });

        test("All variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.layout).toMatchAriaSnapshot(`
                - checkbox "Default" [checked=false]
                - checkbox "Checked" [checked]
                - checkbox "Indeterminate" [checked=mixed]
                - checkbox "Disabled" [disabled]
                - checkbox "Disabled Checked" [checked] [disabled]
                - checkbox "Disabled Indeterminate" [checked=mixed] [disabled]
                - checkbox "Small"
                - checkbox "Small Checked" [checked]
                - checkbox "Small Indeterminate" [checked=mixed]
                - checkbox "Small Disabled" [disabled]
                - checkbox "Small Disabled Checked" [checked] [disabled]
                - checkbox "Small Disabled Indeterminate" [checked=mixed] [disabled]
            `);

            await test.step("Hover unchecked", async () => {
                await story.locators.checkboxDefault.hover();
                await compareScreenshot(story, "hover-unchecked", {
                    locator: story.locators.checkboxDefault,
                });
            });

            await test.step("Hover checked", async () => {
                await story.locators.checkboxChecked.hover();
                await compareScreenshot(story, "hover-checked", {
                    locator: story.locators.checkboxChecked,
                });
            });

            await test.step("Hover indeterminate", async () => {
                await story.locators.checkboxIndeterminate.hover();
                await compareScreenshot(story, "hover-indeterminate", {
                    locator: story.locators.checkboxIndeterminate,
                });
            });

            await test.step("Hover disabled", async () => {
                await story.locators.checkboxDisabled.hover();
                await compareScreenshot(story, "hover-disabled", {
                    locator: story.locators.checkboxDisabled,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants", { mode: "dark" });
        });

        test("All variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("focusable-when-disabled");
        });

        test("Focusable when disabled", async ({ story }) => {
            await test.step("Checkbox remains disabled for ATs", async () => {
                await expect(story.locators.checkboxInput).toMatchAriaSnapshot(
                    `- checkbox [disabled]`
                );
            });

            await test.step("Checkbox can receive focus", async () => {
                await story.locators.focusStart.focus();
                await story.page.keyboard.press("Tab");

                await expect(story.locators.checkboxInput).toBeFocused();
            });

            await test.step("Clicking the checkbox does not fire the onChange handler", async () => {
                await expect(story.locators.changeCount).toHaveText("0");

                await story.locators.checkboxInput.click({
                    force: true,
                });

                await expect(story.locators.changeCount).toHaveText("0");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("interactive");
        });

        test("Clicking checkbox toggles checked state", async ({ story }) => {
            await expect(story.locators.checkedState).toHaveText("false");

            await story.locators.checkboxInput.click();
            await expect(story.locators.checkedState).toHaveText("true");

            await story.locators.checkboxInput.click();
            await expect(story.locators.checkedState).toHaveText("false");
        });

        test("Tab moves focus to checkbox", async ({ story }) => {
            await story.locators.focusStart.focus();
            await story.page.keyboard.press("Tab");

            await expect(story.locators.checkboxInput).toBeFocused();
        });

        test("Space key toggles checked state when focused", async ({
            story,
        }) => {
            await story.locators.focusStart.focus();
            await story.page.keyboard.press("Tab");

            await expect(story.locators.checkedState).toHaveText("false");

            await story.page.keyboard.press("Space");
            await expect(story.locators.checkedState).toHaveText("true");

            await story.page.keyboard.press("Space");
            await expect(story.locators.checkedState).toHaveText("false");
        });

        test("Focus-visible ring appears on keyboard focus", async ({
            story,
        }) => {
            await story.locators.focusStart.focus();
            await story.page.keyboard.press("Tab");

            await compareScreenshot(story, "focus-visible", {
                locator: story.locators.checkboxContainer,
            });
        });
    });
});
