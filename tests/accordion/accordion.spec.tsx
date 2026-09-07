import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
    within,
} from "@testing-library/react";
import { useState } from "react";
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
            screen.getByRole("button", {
                name: ACCORDION_HIDE_ALL_BUTTON_LABEL,
            })
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

                expect(
                    getAccordionButton(ACCORDION_HIDE_ALL_BUTTON_LABEL)
                ).toBeInTheDocument();
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

            it("should minimise all the children items if the button has been clicked", async () => {
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

                const button = getAccordionButton(
                    ACCORDION_HIDE_ALL_BUTTON_LABEL
                );

                act(() => {
                    fireEvent.click(button);
                });

                await expectItemCollapsed("item1");
                await expectItemCollapsed("item2");
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

            await expectItemCollapsed("item1");
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

    describe("Accordion.Item controlled mode (onExpandChange)", () => {
        it("should call onExpandChange with the toggled value when item is clicked", () => {
            const onExpandChange = jest.fn();

            function TestComponent() {
                const [isExpanded, setIsExpanded] = useState(false);
                return (
                    <Accordion>
                        <Accordion.Item
                            data-testid="item1"
                            title="Item title"
                            expanded={isExpanded}
                            onExpandChange={(val) => {
                                onExpandChange(val);
                                setIsExpanded(val);
                            }}
                        >
                            <Typography.BodyBL>
                                {DEFAULT_TEXT_CONTENT}
                            </Typography.BodyBL>
                        </Accordion.Item>
                    </Accordion>
                );
            }

            render(<TestComponent />);

            act(() => {
                fireEvent.click(
                    screen.getByTestId("item1-expand-collapse-button")
                );
            });

            expect(onExpandChange).toHaveBeenCalledWith(true);

            act(() => {
                fireEvent.click(
                    screen.getByTestId("item1-expand-collapse-button")
                );
            });

            expect(onExpandChange).toHaveBeenCalledWith(false);
        });

        it("should not expand the item without the caller updating the expanded prop", async () => {
            const onExpandChange = jest.fn();

            render(
                <Accordion>
                    <Accordion.Item
                        data-testid="item1"
                        title="Item title"
                        expanded={false}
                        onExpandChange={onExpandChange}
                    >
                        <Typography.BodyBL>
                            {DEFAULT_TEXT_CONTENT}
                        </Typography.BodyBL>
                    </Accordion.Item>
                </Accordion>
            );

            await expectItemCollapsed("item1");

            act(() => {
                fireEvent.click(
                    screen.getByTestId("item1-expand-collapse-button")
                );
            });

            await expectItemCollapsed("item1");
        });

        it("should keep all items expanded when all are manually opened", async () => {
            // Regression: expandAll auto-detection must not reset controlled items
            function TestComponent() {
                const [states, setStates] = useState([true, false, false]);
                return (
                    <Accordion
                        enableExpandAll={false}
                        initialDisplay="collapse-all"
                    >
                        {states.map((isExpanded, index) => (
                            <Accordion.Item
                                key={index}
                                data-testid={`item${index + 1}`}
                                title={`Item ${index + 1}`}
                                expanded={isExpanded}
                                onExpandChange={(val) =>
                                    setStates((prev) =>
                                        prev.map((v, i) =>
                                            i === index ? val : v
                                        )
                                    )
                                }
                            >
                                <Typography.BodyBL>
                                    {DEFAULT_TEXT_CONTENT}
                                </Typography.BodyBL>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                );
            }

            render(<TestComponent />);

            await expectItemExpanded("item1");
            await expectItemCollapsed("item2");
            await expectItemCollapsed("item3");

            act(() => {
                fireEvent.click(
                    screen.getByTestId("item2-expand-collapse-button")
                );
            });
            act(() => {
                fireEvent.click(
                    screen.getByTestId("item3-expand-collapse-button")
                );
            });

            await expectItemExpanded("item1");
            await expectItemExpanded("item2");
            await expectItemExpanded("item3");
        });

        it("should call onExpandChange when Show all / Hide all is clicked", async () => {
            const onExpandChange1 = jest.fn();
            const onExpandChange2 = jest.fn();

            function TestComponent() {
                const [states, setStates] = useState([false, false]);
                return (
                    <Accordion initialDisplay="collapse-all">
                        <Accordion.Item
                            data-testid="item1"
                            title="Item 1"
                            expanded={states[0]}
                            onExpandChange={(val) => {
                                onExpandChange1(val);
                                setStates((prev) => [val, prev[1]]);
                            }}
                        >
                            <Typography.BodyBL>
                                {DEFAULT_TEXT_CONTENT}
                            </Typography.BodyBL>
                        </Accordion.Item>
                        <Accordion.Item
                            data-testid="item2"
                            title="Item 2"
                            expanded={states[1]}
                            onExpandChange={(val) => {
                                onExpandChange2(val);
                                setStates((prev) => [prev[0], val]);
                            }}
                        >
                            <Typography.BodyBL>
                                {DEFAULT_TEXT_CONTENT}
                            </Typography.BodyBL>
                        </Accordion.Item>
                    </Accordion>
                );
            }

            render(<TestComponent />);

            act(() => {
                fireEvent.click(
                    screen.getByRole("button", {
                        name: ACCORDION_EXPAND_ALL_BUTTON_LABEL,
                    })
                );
            });

            await waitFor(() => {
                expect(onExpandChange1).toHaveBeenCalledWith(true);
                expect(onExpandChange2).toHaveBeenCalledWith(true);
            });

            act(() => {
                fireEvent.click(
                    screen.getByRole("button", {
                        name: ACCORDION_HIDE_ALL_BUTTON_LABEL,
                    })
                );
            });

            await waitFor(() => {
                expect(onExpandChange1).toHaveBeenCalledWith(false);
                expect(onExpandChange2).toHaveBeenCalledWith(false);
            });
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

const expectItemExpanded = async (testId: string) => {
    const item = screen.getByTestId(testId);
    const heading = within(item).getByTestId(
        `${testId}-expand-collapse-button`
    );
    await waitFor(() => {
        expect(heading).toHaveAttribute("aria-expanded", "true");
    });
};

const expectItemCollapsed = async (testId: string) => {
    const item = screen.getByTestId(testId);
    const heading = within(item).getByTestId(
        `${testId}-expand-collapse-button`
    );
    await waitFor(() => {
        expect(heading).toHaveAttribute("aria-expanded", "false");
    });
};

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_TEXT_CONTENT = "This is some default text";
const ACCORDION_BUTTON_ID = "accordion-expand-collapse-button";
const ACCORDION_HIDE_ALL_BUTTON_LABEL = "Hide all";
const ACCORDION_EXPAND_ALL_BUTTON_LABEL = "Show all";
