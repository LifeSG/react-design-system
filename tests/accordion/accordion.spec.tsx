import { act, fireEvent, render, screen } from "@testing-library/react";
import { Accordion, V2_Text } from "../../src";

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
                    <V2_Text.Body data-testid="item1-content">
                        {DEFAULT_TEXT_CONTENT}
                    </V2_Text.Body>
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
                    <V2_Text.Body data-testid="item1-content">
                        {DEFAULT_TEXT_CONTENT}
                    </V2_Text.Body>
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
                    <V2_Text.Body data-testid="item1-content">
                        {DEFAULT_TEXT_CONTENT}
                    </V2_Text.Body>
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
                            <V2_Text.Body data-testid="item1-content">
                                {DEFAULT_TEXT_CONTENT}
                            </V2_Text.Body>
                        </Accordion.Item>
                    </Accordion>
                );

                expect(getAccordionButton("Hide all")).toBeInTheDocument();
            });

            it("should render the button label as 'Show all' if it has been clicked", () => {
                render(
                    <Accordion>
                        <Accordion.Item data-testid="item1" title="Item title">
                            <V2_Text.Body data-testid="item1-content">
                                {DEFAULT_TEXT_CONTENT}
                            </V2_Text.Body>
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
                            <V2_Text.Body>{DEFAULT_TEXT_CONTENT}</V2_Text.Body>
                        </Accordion.Item>
                        <Accordion.Item data-testid="item2" title="Item title">
                            <V2_Text.Body>{DEFAULT_TEXT_CONTENT}</V2_Text.Body>
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
                            <V2_Text.Body data-testid="item1-content">
                                {DEFAULT_TEXT_CONTENT}
                            </V2_Text.Body>
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
                        <V2_Text.Body data-testid="my-content">
                            {DEFAULT_TEXT_CONTENT}
                        </V2_Text.Body>
                    </Accordion.Item>
                </Accordion>
            );

            expect(screen.getByTestId("item1")).toBeInTheDocument();
            expect(screen.getByTestId("my-content")).toBeInTheDocument();
            expect(screen.getByTestId("my-content").textContent).toEqual(
                DEFAULT_TEXT_CONTENT
            );
        });

        it("should render the expand/collapse button for each item", () => {
            render(
                <Accordion>
                    <Accordion.Item data-testid="item1" title="Item title">
                        <V2_Text.Body>{DEFAULT_TEXT_CONTENT}</V2_Text.Body>
                    </Accordion.Item>
                    <Accordion.Item data-testid="item2" title="Item title">
                        <V2_Text.Body>{DEFAULT_TEXT_CONTENT}</V2_Text.Body>
                    </Accordion.Item>
                </Accordion>
            );

            const button1 = screen.getByTestId("item1-expand-collapse-button");
            const button2 = screen.getByTestId("item1-expand-collapse-button");

            expect(button1).toBeInTheDocument();
            expect(button2).toBeInTheDocument();
        });

        it("should minimize the contents if the expand/collapse button is clicked", async () => {
            render(
                <Accordion>
                    <Accordion.Item data-testid="item1" title="Item title">
                        <V2_Text.Body>{DEFAULT_TEXT_CONTENT}</V2_Text.Body>
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

        it("should hide the expand button if collapsible=false specified", () => {
            const ACCORDION_TITLE = "Accordion Title";

            render(
                <Accordion title={ACCORDION_TITLE}>
                    <Accordion.Item
                        data-testid="item1"
                        title="Item title"
                        collapsible={false}
                    >
                        <V2_Text.Body data-testid="item1-content">
                            {DEFAULT_TEXT_CONTENT}
                        </V2_Text.Body>
                    </Accordion.Item>
                </Accordion>
            );

            const button = screen.queryByTestId("item1-expand-collapse-button");
            expect(button).not.toBeInTheDocument();
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
