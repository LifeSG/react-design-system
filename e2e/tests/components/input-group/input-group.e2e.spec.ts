import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "input-group";

    public readonly locators: {
        formLabelDefault: Locator;
        formLabelReadonly: Locator;
        formLabelError: Locator;

        // Prefilled variant locators
        formLabelLeftPrefilled: Locator;
        formLabelRightPrefilled: Locator;
        formLabelDisabledPrefilled: Locator;
        formLabelReadonlyPrefilled: Locator;
        formLabelErrorPrefilled: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            formLabelDefault: page.getByTestId(
                "form-input-group-label-default-base"
            ),
            formLabelReadonly: page.getByTestId(
                "form-input-group-label-readonly-base"
            ),
            formLabelError: page.getByTestId(
                "form-input-group-label-error-base"
            ),

            // Prefilled variant locators
            formLabelLeftPrefilled: page.getByTestId(
                "form-input-group-label-left-prefilled-base"
            ),
            formLabelRightPrefilled: page.getByTestId(
                "form-input-group-label-right-prefilled-base"
            ),
            formLabelDisabledPrefilled: page.getByTestId(
                "form-input-group-label-disabled-prefilled-base"
            ),
            formLabelReadonlyPrefilled: page.getByTestId(
                "form-input-group-label-readonly-prefilled-base"
            ),
            formLabelErrorPrefilled: page.getByTestId(
                "form-input-group-label-error-prefilled-base"
            ),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Form", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-label-variants");
        });

        test("Label variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await test.step("Default state focus", async () => {
                await story.locators.formLabelDefault
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "default focus", {
                    locator: story.locators.formLabelDefault,
                });
            });

            await test.step("Readonly state focus", async () => {
                await story.locators.formLabelReadonly
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "readonly focus", {
                    locator: story.locators.formLabelReadonly,
                });
            });

            await test.step("Error state focus", async () => {
                await story.locators.formLabelError
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "error focus", {
                    locator: story.locators.formLabelError,
                });
            });
        });
    });

    test.describe(() => {
        test("Label variants dark", async ({ story }) => {
            await story.init("form-label-variants", { mode: "dark" });
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test("Label variants mobile", async ({ story }) => {
            await story.init("form-label-variants", { size: "mobile" });
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-label-variants-prefilled");
        });

        test("Label variants prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test("Label variants prefilled dark", async ({ story }) => {
            await story.init("form-label-variants-prefilled", { mode: "dark" });
            await compareScreenshot(story, "prefilled-mount-dark");
        });
    });
});

test.describe("Standalone", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("label-variants");
        });

        test("Label variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
