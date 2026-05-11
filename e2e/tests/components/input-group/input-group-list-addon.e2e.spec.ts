import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "input-group";

    public readonly locators: {
        formListDefault: Locator;
        formListRight: Locator;
        formListDisabled: Locator;
        formListReadonly: Locator;
        formListError: Locator;
        formListDefaultInput: Locator;
        formListDisabledInput: Locator;
        formListReadonlyInput: Locator;
        formListErrorInput: Locator;
        textbox: (field: Locator) => Locator;
        combobox: (field: Locator) => Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            formListDefault: page.getByTestId("form-input-group-list-default"),
            formListRight: page.getByTestId("form-input-group-list-right"),
            formListDisabled: page.getByTestId(
                "form-input-group-list-disabled"
            ),
            formListReadonly: page.getByTestId(
                "form-input-group-list-readonly"
            ),
            formListError: page.getByTestId("form-input-group-list-error"),
            formListDefaultInput: page.getByTestId(
                "form-input-group-list-default-base"
            ),
            formListDisabledInput: page.getByTestId(
                "form-input-group-list-disabled-base"
            ),
            formListReadonlyInput: page.getByTestId(
                "form-input-group-list-readonly-base"
            ),
            formListErrorInput: page.getByTestId(
                "form-input-group-list-error-base"
            ),
            textbox: (field: Locator) => field.getByRole("textbox"),
            combobox: (field: Locator) => field.getByRole("combobox"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Input Group List", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-list-variants");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Accessibility", async ({ story }) => {
            await expect(story.locators.formListDefault).toMatchAriaSnapshot(`
            - text: Form list variant This is the subtitle
            - combobox "Form list variant": Select
            - text: Press space to open options
            - textbox "Form list variant":
                - /placeholder: Enter something
            `);
            await expect(
                story.locators.textbox(story.locators.formListDefault)
            ).toHaveAccessibleDescription("This is the subtitle");
            await expect(
                story.locators.combobox(story.locators.formListDefault)
            ).toHaveAccessibleDescription(
                "This is the subtitle Press space to open options"
            );

            await expect(story.locators.formListRight).toMatchAriaSnapshot(`
            - text: Form list variant (right) This is the subtitle
            - combobox "Form list variant (right)": Select
            - text: Press space to open options
            - textbox "Form list variant (right)":
                - /placeholder: Enter something
            `);
            await expect(
                story.locators.textbox(story.locators.formListRight)
            ).toHaveAccessibleDescription("This is the subtitle");
            await expect(
                story.locators.combobox(story.locators.formListRight)
            ).toHaveAccessibleDescription(
                "This is the subtitle Press space to open options"
            );

            await expect(story.locators.formListDisabled).toMatchAriaSnapshot(`
            - text: Form list variant disabled state This is the subtitle
            - combobox "Form list variant disabled state" [disabled]: Select
            - text: Press space to open options
            - textbox "Form list variant disabled state" [disabled]:
                - /placeholder: Enter something
            `);
            await expect(
                story.locators.textbox(story.locators.formListDisabled)
            ).toHaveAccessibleDescription("This is the subtitle");
            await expect(
                story.locators.combobox(story.locators.formListDisabled)
            ).toHaveAccessibleDescription(
                "This is the subtitle Press space to open options"
            );

            await expect(story.locators.formListReadonly).toMatchAriaSnapshot(`
            - text: Form list variant readonly state (pristine) This is the subtitle
            - textbox "Form list variant readonly state (pristine)":
                - /placeholder: Enter something
            `);
            await expect(
                story.locators.textbox(story.locators.formListReadonly)
            ).toHaveAccessibleDescription("This is the subtitle");

            await expect(story.locators.formListError).toMatchAriaSnapshot(`
            - text: Form list variant error state This is the subtitle
            - combobox "Form list variant error state": Select
            - text: Press space to open options
            - textbox "Form list variant error state":
                - /placeholder: Enter something
            - paragraph: Sample error message
            `);
            await expect(
                story.locators.textbox(story.locators.formListError)
            ).toHaveAccessibleDescription(
                "Sample error message This is the subtitle"
            );
            await expect(
                story.locators.combobox(story.locators.formListError)
            ).toHaveAccessibleDescription(
                "Sample error message This is the subtitle Press space to open options"
            );
        });

        test("Focus", async ({ story }) => {
            await test.step("Default state focus", async () => {
                await story.locators.formListDefaultInput
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.formListDefaultInput,
                });
            });

            await test.step("Disabled state focus", async () => {
                await story.locators.formListDisabledInput
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.formListDisabledInput,
                });
            });

            await test.step("Readonly state focus", async () => {
                await story.locators.formListReadonlyInput
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.formListReadonlyInput,
                });
            });

            await test.step("Error state focus", async () => {
                await story.locators.formListError.scrollIntoViewIfNeeded();
                await story.locators.formListErrorInput
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "error", {
                    locator: story.locators.formListErrorInput,
                });
            });
        });

        test("Select", async ({ story }) => {
            await test.step("Open dropdown", async () => {
                await story.locators.formListDefaultInput
                    .getByTestId("selector")
                    .click();
                await compareScreenshot(story, "dropdown-open");
            });

            await test.step("Selected option hover", async () => {
                await story.page
                    .getByRole("option", { name: "Option 2" })
                    .click();
                await story.locators.formListDefaultInput
                    .getByTestId("selector")
                    .click();
                await story.page
                    .getByRole("option", { name: "Option 2" })
                    .hover();
                await compareScreenshot(story, "hover");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-list-variants", { mode: "dark" });
        });

        test("Dark mode visual", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Dark mode focus", async ({ story }) => {
            await test.step("Default state focus", async () => {
                await story.locators.formListDefaultInput
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.formListDefaultInput,
                });
            });

            await test.step("Disabled state focus", async () => {
                await story.locators.formListDisabledInput
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.formListDisabledInput,
                });
            });

            await test.step("Readonly state focus", async () => {
                await story.locators.formListReadonlyInput
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.formListReadonlyInput,
                });
            });

            await test.step("Error state focus", async () => {
                await story.locators.formListError.scrollIntoViewIfNeeded();
                await story.locators.formListErrorInput
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "error", {
                    locator: story.locators.formListErrorInput,
                });
            });
        });

        test("Dark mode select", async ({ story }) => {
            await test.step("Open dropdown", async () => {
                await story.locators.formListDefaultInput
                    .getByTestId("selector")
                    .click();
                await compareScreenshot(story, "dropdown-open");
            });

            await test.step("Selected option hover", async () => {
                await story.page
                    .getByRole("option", { name: "Option 2" })
                    .click();
                await story.locators.formListDefaultInput
                    .getByTestId("selector")
                    .click();
                await story.page
                    .getByRole("option", { name: "Option 2" })
                    .hover();
                await compareScreenshot(story, "hover");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-list-variants", { size: "mobile" });
        });

        test("Mobile", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-list-variants-prefilled");
        });

        test("Prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-list-variants-prefilled", { mode: "dark" });
        });

        test("Dark mode prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
