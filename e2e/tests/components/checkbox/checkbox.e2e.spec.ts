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
    test.describe("Variants", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants");
        });

        test("All variants render correctly", async ({ story }) => {
            await compareScreenshot(story, "variants");

            // Verify each variant — data-testid prop is spread onto <input> via ...otherProps
            const { locators: l } = story;

            // Default size
            await expect(l.checkboxDefault).not.toBeChecked();
            await expect(l.checkboxDefault).toBeEnabled();
            await expect(l.checkboxChecked).toBeChecked();
            await expect(l.checkboxChecked).toBeEnabled();
            await expect(l.checkboxIndeterminate).toHaveAttribute(
                "aria-checked",
                "mixed"
            );
            await expect(l.checkboxDisabled).toBeDisabled();
            await expect(l.checkboxDisabledChecked).toBeDisabled();
            await expect(l.checkboxDisabledIndeterminate).toBeDisabled();

            // Small size
            await expect(l.checkboxSmall).not.toBeChecked();
            await expect(l.checkboxSmallChecked).toBeChecked();
            await expect(l.checkboxSmallIndeterminate).toHaveAttribute(
                "aria-checked",
                "mixed"
            );
            await expect(l.checkboxSmallDisabled).toBeDisabled();
        });

        test("Hover — unchecked", async ({ story }) => {
            await story.locators.checkboxDefault.hover();
            await compareScreenshot(story, "hover-unchecked", {
                locator: story.locators.checkboxDefault,
            });
        });

        test("Hover — checked", async ({ story }) => {
            await story.locators.checkboxChecked.hover();
            await compareScreenshot(story, "hover-checked", {
                locator: story.locators.checkboxChecked,
            });
        });

        test("Hover — indeterminate", async ({ story }) => {
            await story.locators.checkboxIndeterminate.hover();
            await compareScreenshot(story, "hover-indeterminate", {
                locator: story.locators.checkboxIndeterminate,
            });
        });

        test("Hover — disabled (no hover effect)", async ({ story }) => {
            await story.locators.checkboxDisabled.hover();
            await compareScreenshot(story, "hover-disabled", {
                locator: story.locators.checkboxDisabled,
            });
        });
    });

    test.describe("Variants (dark mode)", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants", { mode: "dark" });
        });

        test("All variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "variants-dark");
        });
    });

    test.describe("Interactive", () => {
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
