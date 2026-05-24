import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "unit-number";

    public readonly locators: {
        defaultUnitNumber: Locator;
        disabledUnitNumber: Locator;
        readonlyUnitNumber: Locator;
        errorUnitNumber: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            defaultUnitNumber: page.getByTestId("unit-number-default"),
            disabledUnitNumber: page.getByTestId("unit-number-disabled"),
            readonlyUnitNumber: page.getByTestId("unit-number-readonly"),
            errorUnitNumber: page.getByTestId("unit-number-error"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("UnitNumberInput", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("all-variants");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Focus", async ({ story }) => {
            await test.step("Default state focus", async () => {
                await story.locators.defaultUnitNumber
                    .getByTestId("floor-input")
                    .focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.defaultUnitNumber,
                });
            });

            await test.step("Disabled state focus", async () => {
                await story.locators.disabledUnitNumber
                    .getByTestId("floor-input")
                    .focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.disabledUnitNumber,
                });
            });

            await test.step("Readonly state focus", async () => {
                await story.locators.readonlyUnitNumber
                    .getByTestId("floor-input")
                    .focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.readonlyUnitNumber,
                });
            });

            await test.step("Error state focus", async () => {
                await story.locators.errorUnitNumber
                    .getByTestId("floor-input")
                    .focus();
                await compareScreenshot(story, "error", {
                    locator: story.locators.errorUnitNumber,
                });
            });
        });

        test("Accessibility", async ({ story }) => {
            await test.step("Default state", async () => {
                await expect(story.locators.defaultUnitNumber)
                    .toMatchAriaSnapshot(`
                - text: "Default This is the subtitle #"
                - textbox "Default Enter floor number":
                    - /placeholder: "00"
                - paragraph: "-"
                - textbox "Default Enter unit number":
                    - /placeholder: "8888"
                `);
            });

            await test.step("Disabled state", async () => {
                await expect(story.locators.disabledUnitNumber)
                    .toMatchAriaSnapshot(`
                - text: "Disabled This is the subtitle #"
                - textbox "Disabled Enter floor number" [disabled=true]:
                    - /placeholder: "00"
                - paragraph: "-"
                - textbox "Disabled Enter unit number" [disabled=true]:
                    - /placeholder: "8888"
                `);
            });

            await test.step("Readonly state", async () => {
                await expect(story.locators.readonlyUnitNumber)
                    .toMatchAriaSnapshot(`
                - text: "Readonly This is the subtitle #"
                - textbox "Readonly Enter floor number":
                    - /placeholder: "00"
                - paragraph: "-"
                - textbox "Readonly Enter unit number":
                    - /placeholder: "8888"
                `);
            });

            await test.step("Error state", async () => {
                await expect(story.locators.errorUnitNumber)
                    .toMatchAriaSnapshot(`
                - text: "Error This is the subtitle #"
                - textbox "Error Enter floor number":
                    - /placeholder: "00"
                - paragraph: "-"
                - textbox "Error Enter unit number":
                    - /placeholder: "8888"
                - paragraph: Sample error message
                `);
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("all-variants", { mode: "dark" });
        });

        test("Visual dark mode", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Focus dark mode", async ({ story }) => {
            await test.step("Default state focus", async () => {
                await story.locators.defaultUnitNumber
                    .getByTestId("floor-input")
                    .focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.defaultUnitNumber,
                });
            });

            await test.step("Disabled state focus", async () => {
                await story.locators.disabledUnitNumber
                    .getByTestId("floor-input")
                    .focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.disabledUnitNumber,
                });
            });

            await test.step("Readonly state focus", async () => {
                await story.locators.readonlyUnitNumber
                    .getByTestId("floor-input")
                    .focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.readonlyUnitNumber,
                });
            });

            await test.step("Error state focus", async () => {
                await story.locators.errorUnitNumber
                    .getByTestId("floor-input")
                    .focus();
                await compareScreenshot(story, "error", {
                    locator: story.locators.errorUnitNumber,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("all-variants", { size: "mobile" });
        });

        test("Mobile", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("prefilled");
        });

        test("Prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid-layout");
        });

        test("Grid layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-variants");
        });

        test("Standalone variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
