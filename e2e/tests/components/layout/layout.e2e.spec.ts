import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "layout";

    public readonly locators: {
        section: Locator;

        containerFlex: Locator;
        containerFlexColumn: Locator;
        containerGrid: Locator;
        containerStretched: Locator;

        colDivGrid: Locator;
        colDivSpan: Locator;
        colDivStartSpan: Locator;
        colDivEndMinusOne: Locator;

        content: Locator;
        contentContainer: Locator;
        contentGridContainer: Locator;
        contentStretchedContainer: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            section: page.getByTestId("test-section"),
            containerFlex: page.getByTestId("container-flex"),
            containerFlexColumn: page.getByTestId("container-flex-column"),
            containerGrid: page.getByTestId("container-grid"),
            containerStretched: page.getByTestId("container-stretched"),
            colDivGrid: page.getByTestId("col-div-grid"),
            colDivSpan: page.getByTestId("col-div-span"),
            colDivStartSpan: page.getByTestId("col-div-start-span"),
            colDivEndMinusOne: page.getByTestId("col-div-end-minus-one"),
            content: page.getByTestId("test-content"),
            contentContainer: page.getByTestId("test-content-container"),
            contentGridContainer: page.getByTestId("content-grid-container"),
            contentStretchedContainer: page.getByTestId(
                "content-stretched-container"
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

test.describe("Layout", () => {
    // =============================================================================
    // Section
    // =============================================================================
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("section");
        });

        test("renders children inside a section element with correct data-testid", async ({
            story,
        }) => {
            await expect(story.locators.section).toBeVisible();
            await expect(story.locators.section).toHaveAttribute(
                "data-testid",
                "test-section"
            );
            await expect(story.locators.section.locator("p")).toHaveText(
                "Section content"
            );
        });

        test("applies custom className to section element", async ({
            story,
        }) => {
            await expect(story.locators.section).toHaveClass(/custom-section/);
        });
    });

    // =============================================================================
    // Container
    // =============================================================================
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("container");
        });

        test("renders Container with type flex", async ({ story }) => {
            await expect(story.locators.containerFlex).toBeVisible();
            await expect(story.locators.containerFlex).toHaveCSS(
                "display",
                "flex"
            );
        });

        test("renders Container with type flex-column", async ({ story }) => {
            await expect(story.locators.containerFlexColumn).toBeVisible();
            await expect(story.locators.containerFlexColumn).toHaveCSS(
                "display",
                "flex"
            );
            await expect(story.locators.containerFlexColumn).toHaveCSS(
                "flex-direction",
                "column"
            );
        });

        test("renders Container with type grid", async ({ story }) => {
            await expect(story.locators.containerGrid).toBeVisible();
            await expect(story.locators.containerGrid).toHaveCSS(
                "display",
                "grid"
            );
        });

        test("non-stretched Container has max-width of 1440px", async ({
            story,
        }) => {
            await expect(story.locators.containerFlex).toHaveCSS(
                "max-width",
                "1440px"
            );
        });

        test("stretched Container has no max-width constraint", async ({
            story,
        }) => {
            await expect(story.locators.containerStretched).toHaveCSS(
                "max-width",
                "none"
            );
        });
    });

    // =============================================================================
    // ColDiv
    // =============================================================================
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("col-div");
        });

        test("renders ColDiv children inside grid container", async ({
            story,
        }) => {
            await expect(story.locators.colDivGrid).toBeVisible();
            await expect(story.locators.colDivGrid).toHaveCSS(
                "display",
                "grid"
            );
        });

        test("applies CSS variable for span via xxsCols number prop", async ({
            story,
        }) => {
            const span = await story.locators.colDivSpan.evaluate((el) =>
                (el as HTMLElement).style.getPropertyValue(
                    "--fds-internal-colDiv-xxs-span"
                )
            );
            expect(span).toBe("2");
            const start = await story.locators.colDivSpan.evaluate((el) =>
                (el as HTMLElement).style.getPropertyValue(
                    "--fds-internal-colDiv-xxs-start"
                )
            );
            expect(start).toBe("");
        });

        test("applies CSS variables for start and span via xxsCols array prop", async ({
            story,
        }) => {
            const start = await story.locators.colDivStartSpan.evaluate((el) =>
                (el as HTMLElement).style.getPropertyValue(
                    "--fds-internal-colDiv-xxs-start"
                )
            );
            const span = await story.locators.colDivStartSpan.evaluate((el) =>
                (el as HTMLElement).style.getPropertyValue(
                    "--fds-internal-colDiv-xxs-span"
                )
            );
            expect(start).toBe("2");
            expect(span).toBe("2");
        });

        test("sets only start CSS variable when end is -1 (span to grid end)", async ({
            story,
        }) => {
            const start = await story.locators.colDivEndMinusOne.evaluate(
                (el) =>
                    (el as HTMLElement).style.getPropertyValue(
                        "--fds-internal-colDiv-xxs-start"
                    )
            );
            const span = await story.locators.colDivEndMinusOne.evaluate((el) =>
                (el as HTMLElement).style.getPropertyValue(
                    "--fds-internal-colDiv-xxs-span"
                )
            );
            expect(start).toBe("1");
            expect(span).toBe("");
        });
    });

    // =============================================================================
    // Content
    // =============================================================================
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("content");
        });

        test("renders Content as a section element", async ({ story }) => {
            await expect(story.locators.content).toBeVisible();
            const tagName = await story.locators.content.evaluate((el) =>
                el.tagName.toLowerCase()
            );
            expect(tagName).toBe("section");
        });

        test("renders a nested container inside Content", async ({ story }) => {
            await expect(story.locators.contentContainer).toBeVisible();
        });

        test("nested container inside Content defaults to flex display", async ({
            story,
        }) => {
            await expect(story.locators.contentContainer).toHaveCSS(
                "display",
                "flex"
            );
        });

        test("Content with type grid renders a grid container", async ({
            story,
        }) => {
            await expect(story.locators.contentGridContainer).toHaveCSS(
                "display",
                "grid"
            );
        });

        test("stretched Content container has no max-width constraint", async ({
            story,
        }) => {
            await expect(story.locators.contentStretchedContainer).toHaveCSS(
                "max-width",
                "none"
            );
        });

        test("Content renders children inside the nested container", async ({
            story,
        }) => {
            await expect(
                story.locators.contentContainer.locator("p")
            ).toHaveText("Content child");
        });
    });
});
