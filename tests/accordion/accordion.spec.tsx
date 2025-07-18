import { act, fireEvent, render, screen } from "@testing-library/react";
import { Accordion } from "src/accordion";
import { Typography } from "src/typography";

describe("Accordion", () => {
    beforeEach(() => {
        jest.resetAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the relevant components correctly", () => {
        const ITEM_TITLE = "Item 1";

        render(
            <Accordion>
                <Accordion.Item data-testid="item1" title={ITEM_TITLE}>
                    <Typography.BodyBL data-testid="item1-content">
                        {DEFAULT_TEXT_CONTENT}
                    </Typography.BodyBL>
                </Accordion.Item>
            </Accordion>
        );

        expect(screen.getByTestId("item1")).toBeInTheDocument();
        expect(screen.getByTestId("item1-content")).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Hide all" })
        ).toBeInTheDocument();
    });

    it("should render the accordion title if specified", () => {
        const ACCORDION_TITLE = "Accordion Title";

        render(
            <Accordion title={ACCORDION_TITLE}>
                <Accordion.Item data-testid="item1" title="Item title">
                    <Typography.BodyBL data-testid="item1-content">
                        {DEFAULT_TEXT_CONTENT}
                    </Typography.BodyBL>
                </Accordion.Item>
            </Accordion>
        );

        expect(screen.getByTestId("accordion-title")).toBeInTheDocument();
        expect(screen.getByTestId("accordion-title").textContent).toEqual(
            ACCORDION_TITLE
        );
    });

    it("should not render the accordion title if not specified", () => {
        render(
            <Accordion>
                <Accordion.Item data-testid="item1" title="Item title">
                    <Typography.BodyBL data-testid="item1-content">
                        {DEFAULT_TEXT_CONTENT}
                    </Typography.BodyBL>
                </Accordion.Item>
            </Accordion>
        );

        expect(screen.queryByTestId("accordion-title")).not.toBeInTheDocument();
    });

    describe("Expand/Collapse all button", () => {
        describe("Default behaviour", () => {
            it("should render the button label as 'Hide all' by default", () => {
                render(
                    <Accordion>
                        <Accordion.Item data-testid="item1" title="Item title">
                            <Typography.BodyBL data-testid="item1-content">
                                {DEFAULT_TEXT_CONTENT}
                            </Typography.BodyBL>
                        </Accordion.Item>
                    </Accordion>
                );

                expect(getAccordionButton("Hide all")).toBeInTheDocument();
            });

            it("should render the button label as 'Show all' if it has been clicked", () => {
                render(
                    <Accordion>
                        <Accordion.Item data-testid="item1" title="Item title">
                            <Typography.BodyBL data-testid="item1-content">
                                {DEFAULT_TEXT_CONTENT}
                            </Typography.BodyBL>
                        </Accordion.Item>
                    </Accordion>
                );

                // Checking if the same button did indeed change it's label
                const button = screen.getByTestId(ACCORDION_BUTTON_ID);
                expect(button).toBeInTheDocument();
                expect(button.innerHTML).toBe("<span>Hide all</span>");

                act(() => {
                    fireEvent.click(button);
                });

                expect(button.innerHTML).toBe("<span>Show all</span>");
            });

            it("should minimise all the children items if the button has been clicked", () => {
                render(
                    <Accordion>
                        <Accordion.Item data-testid="item1" title="Item title">
                            <Typography.BodyBL>
                                {DEFAULT_TEXT_CONTENT}
                            </Typography.BodyBL>
                        </Accordion.Item>
                        <Accordion.Item data-testid="item2" title="Item title">
                            <Typography.BodyBL>
                                {DEFAULT_TEXT_CONTENT}
                            </Typography.BodyBL>
                        </Accordion.Item>
                    </Accordion>
                );

                const button = getAccordionButton("Hide all");

                act(() => {
                    fireEvent.click(button);
                });

                expect(
                    screen.queryByTestId("item1-expandable-container")
                ).toHaveStyle({
                    height: 0,
                });
                expect(
                    screen.queryByTestId("item2-expandable-container")
                ).toHaveStyle({
                    height: 0,
                });
            });
        });

        describe("If expandAll is false", () => {
            it("should not render the button", () => {
                render(
                    <Accordion enableExpandAll={false}>
                        <Accordion.Item data-testid="item1" title="Item title">
                            <Typography.BodyBL data-testid="item1-content">
                                {DEFAULT_TEXT_CONTENT}
                            </Typography.BodyBL>
                        </Accordion.Item>
                    </Accordion>
                );

                expect(
                    screen.queryByTestId(ACCORDION_BUTTON_ID)
                ).not.toBeInTheDocument();
            });
        });
    });

    describe("Accordion item", () => {
        it("should render the contents correctly", () => {
            render(
                <Accordion>
                    <Accordion.Item data-testid="item1" title="Item title">
                        <Typography.BodyBL data-testid="my-content">
                            {DEFAULT_TEXT_CONTENT}
                        </Typography.BodyBL>
                    </Accordion.Item>
                </Accordion>
            );

            expect(screen.getByTestId("item1")).toBeInTheDocument();
            expect(screen.getByTestId("my-content")).toBeInTheDocument();
            expect(screen.getByTestId("my-content").textContent).toEqual(
                DEFAULT_TEXT_CONTENT
            );
        });

        it("should enable expand/collapse functionality for each item", () => {
            render(
                <Accordion>
                    <Accordion.Item data-testid="item1" title="Item title 1">
                        <Typography.BodyBL>
                            {DEFAULT_TEXT_CONTENT}
                        </Typography.BodyBL>
                    </Accordion.Item>
                    <Accordion.Item data-testid="item2" title="Item title 2">
                        <Typography.BodyBL>
                            {DEFAULT_TEXT_CONTENT}
                        </Typography.BodyBL>
                    </Accordion.Item>
                </Accordion>
            );

            expect(
                screen.getByRole("button", { name: "Item title 1" })
            ).toHaveAttribute("aria-disabled", "false");
            expect(
                screen.getByTestId("item2-expand-collapse-icon")
            ).toBeInTheDocument();

            expect(
                screen.getByRole("button", { name: "Item title 2" })
            ).toHaveAttribute("aria-disabled", "false");
            expect(
                screen.getByTestId("item2-expand-collapse-icon")
            ).toBeInTheDocument();
        });

        it("should minimize the contents if header is clicked", async () => {
            render(
                <Accordion>
                    <Accordion.Item data-testid="item1" title="Item title">
                        <Typography.BodyBL>
                            {DEFAULT_TEXT_CONTENT}
                        </Typography.BodyBL>
                    </Accordion.Item>
                </Accordion>
            );

            const button = screen.getByTestId("item1-expand-collapse-button");

            act(() => {
                fireEvent.click(button);
            });

            expect(
                screen.getByTestId("item1-expandable-container")
            ).toHaveStyle({
                height: 0,
            });
        });

        it("should disable expand/collapse functionality if collapsible=false specified", () => {
            const ACCORDION_TITLE = "Accordion Title";
            const ITEM_TITLE = "Item title";

            render(
                <Accordion title={ACCORDION_TITLE}>
                    <Accordion.Item
                        data-testid="item1"
                        title={ITEM_TITLE}
                        collapsible={false}
                    >
                        <Typography.BodyBL data-testid="item1-content">
                            {DEFAULT_TEXT_CONTENT}
                        </Typography.BodyBL>
                    </Accordion.Item>
                </Accordion>
            );

            expect(
                screen.getByRole("button", { name: ITEM_TITLE })
            ).toHaveAttribute("aria-disabled", "true");
            expect(
                screen.queryByTestId("item1-expand-collapse-icon")
            ).not.toBeInTheDocument();
        });
    });

    describe("Heading level", () => {
        it("should apply the right heading level to the title and item title", () => {
            const ACCORDION_TITLE = "Accordion Title";
            const ITEM_TITLE = "Item title";

            render(
                <Accordion title={ACCORDION_TITLE} headingLevel={1}>
                    <Accordion.Item data-testid="item1" title={ITEM_TITLE}>
                        <Typography.BodyBL data-testid="item1-content">
                            {DEFAULT_TEXT_CONTENT}
                        </Typography.BodyBL>
                    </Accordion.Item>
                </Accordion>
            );

            expect(
                screen.getByRole("heading", { level: 1, name: ACCORDION_TITLE })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("heading", { level: 2, name: ITEM_TITLE })
            ).toBeInTheDocument();
        });

        it("should apply the right heading level to the item title", () => {
            const ITEM_TITLE = "Item title";

            render(
                <Accordion headingLevel={1}>
                    <Accordion.Item data-testid="item1" title={ITEM_TITLE}>
                        <Typography.BodyBL data-testid="item1-content">
                            {DEFAULT_TEXT_CONTENT}
                        </Typography.BodyBL>
                    </Accordion.Item>
                </Accordion>
            );

            expect(
                screen.getByRole("heading", { level: 1, name: ITEM_TITLE })
            ).toBeInTheDocument();
        });
    });
});

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const getAccordionButton = (label: string) => {
    return screen.getByRole("button", { name: label });
};

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_TEXT_CONTENT = "This is some default text";
const ACCORDION_BUTTON_ID = "accordion-expand-collapse-button";
