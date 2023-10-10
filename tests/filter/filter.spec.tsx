import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { Filter } from "../../src";

describe("Filter", () => {
    beforeEach(() => {
        jest.resetAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the relevant components correctly on desktop", () => {
        render(
            <Filter>
                <Filter.Item data-testid="item1">{ITEM_CONTENT}</Filter.Item>
                <Filter.Item data-testid="item2">{ITEM_CONTENT}</Filter.Item>
            </Filter>
        );

        const desktop = within(screen.queryByTestId(DESKTOP_TESTID));
        expect(desktop.getByTestId("item1")).toBeInTheDocument();
        expect(desktop.getByTestId("item2")).toBeInTheDocument();
    });

    it("should render the relevant components correctly on mobile", () => {
        render(
            <Filter>
                <Filter.Item data-testid="item1">{ITEM_CONTENT}</Filter.Item>
                <Filter.Item data-testid="item2">{ITEM_CONTENT}</Filter.Item>
            </Filter>
        );

        act(() => {
            fireEvent.click(screen.getByTestId(MOBILE_SHOW_BUTTON_TESTID));
        });

        const mobile = within(screen.queryByTestId(MOBILE_TESTID));
        expect(mobile.getByTestId("item1")).toBeVisible();
        expect(mobile.getByTestId("item2")).toBeVisible();
    });

    describe("Filter.Item", () => {
        it("should render the item correctly", () => {
            render(
                <Filter.Item title={ITEM_TITLE}>{ITEM_CONTENT}</Filter.Item>
            );

            expect(screen.getByText(ITEM_TITLE)).toBeInTheDocument();
            expect(screen.getByText(ITEM_CONTENT)).toBeInTheDocument();
        });

        it("should render children specified as render prop correctly", () => {
            const mockRender = jest.fn(() => (
                <div data-testid="item1">{ITEM_CONTENT}</div>
            ));
            render(<Filter.Item>{mockRender}</Filter.Item>);

            expect(screen.getByTestId("item1")).toBeInTheDocument();
            expect(mockRender).toBeCalledWith("default", { minimised: false });
        });

        describe("initialExpanded", () => {
            it("should be collapsed by default", () => {
                render(<Filter.Item>{ITEM_CONTENT}</Filter.Item>);

                expect(screen.getByLabelText("Expand")).toBeVisible();
            });

            it("should be expanded by default when initialExpanded is true", () => {
                render(
                    <Filter.Item initialExpanded>{ITEM_CONTENT}</Filter.Item>
                );

                expect(screen.getByLabelText("Collapse")).toBeVisible();
            });
        });

        describe("expanded (controlled component)", () => {
            it("should be expanded when expanded is true and not update the local state when display is toggled", () => {
                const mockOnChange = jest.fn();
                render(
                    <Filter.Item expanded={false} onExpandChange={mockOnChange}>
                        {ITEM_CONTENT}
                    </Filter.Item>
                );

                act(() => {
                    fireEvent.click(screen.getByLabelText("Expand"));
                });

                expect(screen.getByLabelText("Expand")).toBeVisible();
                expect(mockOnChange).toBeCalledWith(true);
            });

            it("should be collapsed when expanded is false and not update the local state when display is toggled", () => {
                const mockOnChange = jest.fn();
                render(
                    <Filter.Item expanded={true} onExpandChange={mockOnChange}>
                        {ITEM_CONTENT}
                    </Filter.Item>
                );

                act(() => {
                    fireEvent.click(screen.getByLabelText("Collapse"));
                });

                expect(screen.getByLabelText("Collapse")).toBeVisible();
                expect(mockOnChange).toBeCalledWith(false);
            });
        });

        describe("Expand behaviour (uncontrolled component)", () => {
            it("should expand when display is toggled", () => {
                const mockOnChange = jest.fn();
                render(
                    <Filter.Item onExpandChange={mockOnChange}>
                        {ITEM_CONTENT}
                    </Filter.Item>
                );

                act(() => {
                    fireEvent.click(screen.getByLabelText("Expand"));
                });

                expect(screen.getByLabelText("Collapse")).toBeVisible();
                expect(mockOnChange).toBeCalledWith(true);
            });

            it("should collapse when display is toggled", () => {
                const mockOnChange = jest.fn();
                render(
                    <Filter.Item initialExpanded onExpandChange={mockOnChange}>
                        {ITEM_CONTENT}
                    </Filter.Item>
                );

                act(() => {
                    fireEvent.click(screen.getByLabelText("Collapse"));
                });

                expect(screen.getByLabelText("Expand")).toBeVisible();
                expect(mockOnChange).toBeCalledWith(false);
            });
        });
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const DESKTOP_TESTID = "filter-desktop";
const MOBILE_TESTID = "filter-mobile";
const MOBILE_SHOW_BUTTON_TESTID = "filter-show-button";
const ITEM_TITLE = "test title";
const ITEM_CONTENT = "test body";
