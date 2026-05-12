import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "table";

    public readonly locators: {
        table: Locator;
        tableWrapper: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            table: page.getByTestId("table"),
            tableWrapper: page.getByTestId("table-wrapper"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Table", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic");
        });

        test("Default table", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.table).toMatchAriaSnapshot(`
                - table:
                  - rowgroup:
                    - row "Name Email Status":
                      - columnheader "Name"
                      - columnheader "Email"
                      - columnheader "Status"
                  - rowgroup:
                    - row "Alice Tan alice@example.com Active":
                      - cell "Alice Tan"
                      - cell "alice@example.com"
                      - cell "Active"
                    - row "Bob Lim bob@example.com Inactive":
                      - cell "Bob Lim"
                      - cell "bob@example.com"
                      - cell "Inactive"
                    - row "Carol Wong carol@example.com Pending":
                      - cell "Carol Wong"
                      - cell "carol@example.com"
                      - cell "Pending"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { mode: "dark" });
        });

        test("Default table (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("horizontal-overflow");
        });

        test("Horizontal overflow scrollable table", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Table can be scrolled horizontally", async ({ story }) => {
            await story.locators.tableWrapper.hover();
            await story.page.mouse.wheel(200, 0);
            await compareScreenshot(story, "scrolled", {
                locator: story.locators.tableWrapper,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("vertical-overflow");
        });

        test("Vertical overflow scrollable table", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Table can be scrolled vertically", async ({ story }) => {
            await story.locators.tableWrapper.hover();
            await story.page.mouse.wheel(0, 200);
            await compareScreenshot(story, "scrolled", {
                locator: story.locators.tableWrapper,
            });
        });
    });
});
