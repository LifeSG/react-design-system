import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "table";

    public readonly locators: {
        table: Locator;
        tableWrapper: Locator;
        row1: Locator;
        row2: Locator;
        row3: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            table: page.getByTestId("table"),
            tableWrapper: page.getByTestId("table-wrapper"),
            row1: page.getByTestId("row-1"),
            row2: page.getByTestId("row-2"),
            row3: page.getByTestId("row-3"),
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

        test("Row hover", async ({ story }) => {
            await story.locators.row1.hover();
            await compareScreenshot(story, "hover-row", {
                locator: story.locators.table,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { mode: "dark" });
        });

        test("Default table (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Row hover (dark mode)", async ({ story }) => {
            await story.locators.row1.hover();
            await compareScreenshot(story, "hover-row", {
                locator: story.locators.table,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("overflow");
        });

        test("Overflow scrollable table", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Table can be scrolled horizontally", async ({ story }) => {
            await story.locators.tableWrapper.hover();
            await story.page.mouse.wheel(200, 0);
            const scrollLeft = await story.locators.tableWrapper.evaluate(
                (el) => el.scrollLeft
            );
            expect(scrollLeft).toBeGreaterThan(0);
            await compareScreenshot(story, "scrolled", {
                locator: story.locators.tableWrapper,
            });
        });
    });
});
