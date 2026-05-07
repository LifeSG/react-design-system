import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "input-group";

    public readonly locators: {
        formLabelDefault: Locator;
        formLabelDefaultRight: Locator;
        formLabelReadonly: Locator;
        formLabelError: Locator;
        formLabelDisabled: Locator;
        formLabelDefaultInput: Locator;
        formLabelReadonlyInput: Locator;
        formLabelErrorInput: Locator;
        formLabelDisabledInput: Locator;
        textbox: (field: Locator) => Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            formLabelDefault: page.getByTestId(
                "form-input-group-label-default"
            ),
            formLabelDefaultRight: page.getByTestId(
                "form-input-group-label-right"
            ),
            formLabelReadonly: page.getByTestId(
                "form-input-group-label-readonly"
            ),
            formLabelError: page.getByTestId("form-input-group-label-error"),
            formLabelDisabled: page.getByTestId(
                "form-input-group-label-disabled"
            ),
            formLabelDefaultInput: page.getByTestId(
                "form-input-group-label-default-base"
            ),
            formLabelReadonlyInput: page.getByTestId(
                "form-input-group-label-readonly-base"
            ),
            formLabelErrorInput: page.getByTestId(
                "form-input-group-label-error-base"
            ),
            formLabelDisabledInput: page.getByTestId(
                "form-input-group-label-disabled-base"
            ),
            textbox: (field: Locator) => field.getByRole("textbox"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Input Group Label", () => {
    test.describe("Form", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-label-variants");
            });

            test("Visual", async ({ story }) => {
                await compareScreenshot(story, "mount");

                await expect(story.locators.formLabelDefault)
                    .toMatchAriaSnapshot(`
                - text: Default This is the subtitle $
                - textbox "Default $":
                    - /placeholder: Enter an amount                   
                `);
                await expect(
                    story.locators.textbox(story.locators.formLabelDefault)
                ).toHaveAccessibleDescription("This is the subtitle");

                await expect(story.locators.formLabelDefaultRight)
                    .toMatchAriaSnapshot(`
                - text: Default (Right Label) This is the subtitle kg
                - textbox "Default $":
                    - /placeholder: Enter an amount             
                `);
                await expect(
                    story.locators.textbox(story.locators.formLabelDefaultRight)
                ).toHaveAccessibleDescription("This is the subtitle");

                await expect(story.locators.formLabelDisabled)
                    .toMatchAriaSnapshot(`
                - text: Disabled This is the subtitle $
                - textbox "Default $" [disabled=true]:
                    - /placeholder: Enter an amount                
                `);
                await expect(
                    story.locators.textbox(story.locators.formLabelDisabled)
                ).toHaveAccessibleDescription("This is the subtitle");

                await expect(story.locators.formLabelReadonly)
                    .toMatchAriaSnapshot(`
                - text: Readonly This is the subtitle $
                - textbox "Default $":
                    - /placeholder: Enter an amount                   
                `);
                await expect(
                    story.locators.textbox(story.locators.formLabelReadonly)
                ).toHaveAccessibleDescription("This is the subtitle");

                await expect(story.locators.formLabelError)
                    .toMatchAriaSnapshot(`
                - text: Error This is the subtitle $
                - textbox "Default $":
                    - /placeholder: Enter an amount
                - paragraph: Sample error message               
                `);
                await expect(
                    story.locators.textbox(story.locators.formLabelError)
                ).toHaveAccessibleDescription(
                    "Sample error message This is the subtitle"
                );
            });

            test("Focus", async ({ story }) => {
                await test.step("Default state focus", async () => {
                    await story.locators.formLabelDefaultInput
                        .getByTestId("input")
                        .focus();
                    await compareScreenshot(story, "default", {
                        locator: story.locators.formLabelDefaultInput,
                    });
                });

                await test.step("Disabled state focus", async () => {
                    await story.locators.formLabelDisabledInput
                        .getByTestId("input")
                        .focus();
                    await compareScreenshot(story, "disabled", {
                        locator: story.locators.formLabelDisabledInput,
                    });
                });

                await test.step("Readonly state focus", async () => {
                    await story.locators.formLabelReadonlyInput
                        .getByTestId("input")
                        .focus();
                    await compareScreenshot(story, "readonly", {
                        locator: story.locators.formLabelReadonlyInput,
                    });
                });

                await test.step("Error state focus", async () => {
                    await story.locators.formLabelErrorInput
                        .getByTestId("input")
                        .focus();
                    await compareScreenshot(story, "error", {
                        locator: story.locators.formLabelErrorInput,
                    });
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-label-variants", { mode: "dark" });
            });

            test("Dark mode visual", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });

            test("Dark mode focus", async ({ story }) => {
                await test.step("Default state focus", async () => {
                    await story.locators.formLabelDefaultInput
                        .getByTestId("input")
                        .focus();
                    await compareScreenshot(story, "default", {
                        locator: story.locators.formLabelDefaultInput,
                    });
                });

                await test.step("Disabled state focus", async () => {
                    await story.locators.formLabelDisabledInput
                        .getByTestId("input")
                        .focus();
                    await compareScreenshot(story, "disabled", {
                        locator: story.locators.formLabelDisabledInput,
                    });
                });

                await test.step("Readonly state focus", async () => {
                    await story.locators.formLabelReadonlyInput
                        .getByTestId("input")
                        .focus();
                    await compareScreenshot(story, "readonly", {
                        locator: story.locators.formLabelReadonlyInput,
                    });
                });

                await test.step("Error state focus", async () => {
                    await story.locators.formLabelErrorInput
                        .getByTestId("input")
                        .focus();
                    await compareScreenshot(story, "error", {
                        locator: story.locators.formLabelErrorInput,
                    });
                });
            });
        });

        test.describe(() => {
            test("Mobile", async ({ story }) => {
                await story.init("form-label-variants", { size: "mobile" });
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test("Prefilled", async ({ story }) => {
                await story.init("form-label-variants-prefilled");
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test("Dark mode prefilled", async ({ story }) => {
                await story.init("form-label-variants-prefilled", {
                    mode: "dark",
                });
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Standalone", () => {
        test.describe(() => {
            test("Visual", async ({ story }) => {
                await story.init("standalone-label-variants");
                await compareScreenshot(story, "mount");
            });
        });
    });
});
