import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import { Accordion } from "src/accordion";
import { Typography } from "src/typography";

jest.mock("react-resize-detector", () => ({
    useResizeDetector: () => ({
        height: 100,
        ref: jest.fn(),
    }),
}));

describe("Accordion", () => {
    beforeEach(() => {
        jest.clearAllMocks();

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
        expect(screen.getByTestId(ACCORDION_BUTTON_ID)).toBeInTheDocument();
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

        expect(screen.getByTestId(ACCORDION_TITLE_ID)).toBeInTheDocument();
        expect(screen.getByTestId(ACCORDION_TITLE_ID).textContent).toEqual(
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

        expect(
            screen.queryByTestId(ACCORDION_TITLE_ID)
        ).not.toBeInTheDocument();
    });

    describe("Expand/Collapse all button", () => {
        describe("initialDisplay='expand-all'", () => {
            it("should render the button label as 'Hide all'", () => {
                render(
                    <Accordion initialDisplay="expand-all">
                        <Accordion.Item data-testid="item1" title="Item title">
                            <Typography.BodyBL data-testid="item1-content">
                                {DEFAULT_TEXT_CONTENT}
                            </Typography.BodyBL>
                        </Accordion.Item>
                    </Accordion>
                );

                expect(
                    screen.getByRole("button", {
                        name: ACCORDION_HIDE_ALL_BUTTON_LABEL,
                    })
                ).toBeInTheDocument();
            });

            it("should collapse all the children items on toggle", async () => {
                render(
                    <Accordion initialDisplay="expand-all">
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

                expectItemExpanded(
                    screen.getByTestId("item1-expandable-container")
                );
                expectItemExpanded(
                    screen.getByTestId("item2-expandable-container")
                );

                act(() => {
                    fireEvent.click(
                        screen.getByRole("button", {
                            name: ACCORDION_HIDE_ALL_BUTTON_LABEL,
                        })
                    );
                });

                expect(
                    screen.getByRole("button", {
                        name: ACCORDION_EXPAND_ALL_BUTTON_LABEL,
                    })
                ).toBeInTheDocument();

                await waitFor(() => {
                    expectItemCollapsed(
                        screen.getByTestId("item1-expandable-container")
                    );
                    expectItemCollapsed(
                        screen.getByTestId("item2-expandable-container")
                    );
                });
            });
        });

        describe("initialDisplay='collapse-all'", () => {
            it("should render the button label as 'Show all'", () => {
                render(
                    <Accordion initialDisplay="collapse-all">
                        <Accordion.Item data-testid="item1" title="Item title">
                            <Typography.BodyBL data-testid="item1-content">
                                {DEFAULT_TEXT_CONTENT}
                            </Typography.BodyBL>
                        </Accordion.Item>
                    </Accordion>
                );

                expect(
                    screen.getByRole("button", {
                        name: ACCORDION_EXPAND_ALL_BUTTON_LABEL,
                    })
                ).toBeInTheDocument();
            });

            it("should expand all the children items on toggle", async () => {
                render(
                    <Accordion initialDisplay="collapse-all">
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

                expectItemCollapsed(
                    screen.getByTestId("item1-expandable-container")
                );
                expectItemCollapsed(
                    screen.getByTestId("item2-expandable-container")
                );

                act(() => {
                    fireEvent.click(
                        screen.getByRole("button", {
                            name: ACCORDION_EXPAND_ALL_BUTTON_LABEL,
                        })
                    );
                });

                expect(
                    screen.getByRole("button", {
                        name: ACCORDION_HIDE_ALL_BUTTON_LABEL,
                    })
                ).toBeInTheDocument();

                await waitFor(() => {
                    expectItemExpanded(
                        screen.getByTestId("item1-expandable-container")
                    );
                    expectItemExpanded(
                        screen.getByTestId("item2-expandable-container")
                    );
                });
            });
        });

        describe("enableExpandAll", () => {
            it("should not render the button if enableExpandAll=false", () => {
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
                expectItemExpanded(
                    screen.getByTestId("item1-expandable-container")
                );
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

            const expandableContainer = screen.getByTestId(
                "item1-expandable-container"
            );

            expectItemExpanded(expandableContainer);

            act(() => {
                fireEvent.click(
                    screen.getByTestId("item1-expand-collapse-button")
                );
            });

            await waitFor(() => expectItemCollapsed(expandableContainer));
        });

        it("should minimize the contents if expanded=false regardless of initialDisplay", () => {
            render(
                <Accordion initialDisplay="expand-all">
                    <Accordion.Item
                        data-testid="item1"
                        title="Item title"
                        expanded={false}
                    >
                        <Typography.BodyBL>
                            {DEFAULT_TEXT_CONTENT}
                        </Typography.BodyBL>
                    </Accordion.Item>
                </Accordion>
            );

            expectItemCollapsed(
                screen.getByTestId("item1-expandable-container")
            );
        });

        it("should expand the contents if expanded=true regardless of initialDisplay", () => {
            render(
                <Accordion initialDisplay="collapse-all">
                    <Accordion.Item
                        data-testid="item1"
                        title="Item title"
                        expanded={true}
                    >
                        <Typography.BodyBL>
                            {DEFAULT_TEXT_CONTENT}
                        </Typography.BodyBL>
                    </Accordion.Item>
                </Accordion>
            );

            expectItemExpanded(
                screen.getByTestId("item1-expandable-container")
            );
        });

        it("should toggle inert on accordion content when collapsed and expanded", () => {
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
            const expandableContainer = screen.getByTestId(
                "item1-expandable-container"
            );

            expect(expandableContainer).not.toHaveAttribute("inert");

            act(() => {
                fireEvent.click(button);
            });
            expect(expandableContainer).toHaveAttribute("inert");

            act(() => {
                fireEvent.click(button);
            });
            expect(expandableContainer).not.toHaveAttribute("inert");
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
const expectItemExpanded = (element: HTMLElement) => {
    expect(element).not.toHaveStyle({
        height: 0,
    });
};

const expectItemCollapsed = (element: HTMLElement) => {
    expect(element).toHaveStyle({
        height: 0,
    });
};

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_TEXT_CONTENT = "This is some default text";
const ACCORDION_BUTTON_ID = "accordion-expand-collapse-button";
const ACCORDION_HIDE_ALL_BUTTON_LABEL = "Hide all";
const ACCORDION_EXPAND_ALL_BUTTON_LABEL = "Show all";
const ACCORDION_TITLE_ID = "accordion-title";
