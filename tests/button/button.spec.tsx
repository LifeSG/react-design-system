import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "src/button";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Button", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    // =========================================================================
    // TEXT-ONLY MODE
    // =========================================================================
    describe("text-only mode", () => {
        it("should render text label", () => {
            render(<Button>{BUTTON_TEXT}</Button>);
            expect(screen.getByText(BUTTON_TEXT)).toBeInTheDocument();
        });

        it("should fire onClick when clicked", () => {
            const onClickMock = jest.fn();
            render(
                <Button onClick={onClickMock} data-testid="btn">
                    {BUTTON_TEXT}
                </Button>
            );
            fireEvent.click(screen.getByTestId("btn"));
            expect(onClickMock).toHaveBeenCalledTimes(1);
        });

        it("should not fire onClick when disabled", () => {
            const onClickMock = jest.fn();
            render(
                <Button onClick={onClickMock} data-testid="btn" disabled>
                    {BUTTON_TEXT}
                </Button>
            );
            const btn = screen.getByTestId("btn");
            fireEvent.click(btn);
            expect(onClickMock).not.toHaveBeenCalled();
            expect(btn).toBeDisabled();
        });

        it("should set aria-disabled when disabled", () => {
            render(
                <Button disabled data-testid="btn">
                    {BUTTON_TEXT}
                </Button>
            );
            expect(screen.getByTestId("btn")).toHaveAttribute(
                "aria-disabled",
                "true"
            );
        });

        it("should remain focusable when focusableWhenDisabled is set", () => {
            const onClickMock = jest.fn();
            render(
                <Button
                    onClick={onClickMock}
                    data-testid="btn"
                    disabled
                    focusableWhenDisabled
                >
                    {BUTTON_TEXT}
                </Button>
            );
            const btn = screen.getByTestId("btn");
            expect(btn).not.toBeDisabled();
            fireEvent.click(btn);
            expect(onClickMock).not.toHaveBeenCalled();
        });

        it("should show loading spinner and keep text visible when loading", () => {
            render(
                <Button data-testid="btn" loading>
                    {BUTTON_TEXT}
                </Button>
            );
            expect(
                screen.getByTestId("component-loading-spinner")
            ).toBeInTheDocument();
            expect(screen.getByText(BUTTON_TEXT)).toBeInTheDocument();
        });

        it("should set aria-busy when loading", () => {
            render(
                <Button data-testid="btn" loading>
                    {BUTTON_TEXT}
                </Button>
            );
            expect(screen.getByTestId("btn")).toHaveAttribute(
                "aria-busy",
                "true"
            );
        });
    });

    // =========================================================================
    // ICON + LABEL MODE
    // =========================================================================
    describe("icon + label mode", () => {
        it("should render icon and text", () => {
            render(
                <Button icon={<PlaceholderIcon />} data-testid="btn">
                    {BUTTON_TEXT}
                </Button>
            );
            const btn = screen.getByTestId("btn");
            expect(screen.getByText(BUTTON_TEXT)).toBeInTheDocument();
            expect(btn.querySelector("svg")).toBeInTheDocument();
        });

        it("should mark icon as aria-hidden", () => {
            render(
                <Button icon={<PlaceholderIcon />} data-testid="btn">
                    {BUTTON_TEXT}
                </Button>
            );
            const btn = screen.getByTestId("btn");
            const icon = btn.querySelector("svg");
            expect(icon).toHaveAttribute("aria-hidden", "true");
        });

        it("should hide icon and show spinner when loading", () => {
            render(
                <Button icon={<PlaceholderIcon />} data-testid="btn" loading>
                    {BUTTON_TEXT}
                </Button>
            );
            const btn = screen.getByTestId("btn");
            expect(btn.querySelector("svg")).not.toBeInTheDocument();
            expect(
                screen.getByTestId("component-loading-spinner")
            ).toBeInTheDocument();
            expect(screen.getByText(BUTTON_TEXT)).toBeInTheDocument();
        });

        it("should not fire onClick when disabled", () => {
            const onClickMock = jest.fn();
            render(
                <Button
                    icon={<PlaceholderIcon />}
                    onClick={onClickMock}
                    data-testid="btn"
                    disabled
                >
                    {BUTTON_TEXT}
                </Button>
            );
            fireEvent.click(screen.getByTestId("btn"));
            expect(onClickMock).not.toHaveBeenCalled();
        });

        it("should remain focusable and not fire onClick when focusableWhenDisabled is set", () => {
            const onClickMock = jest.fn();
            render(
                <Button
                    icon={<PlaceholderIcon />}
                    onClick={onClickMock}
                    data-testid="btn"
                    disabled
                    focusableWhenDisabled
                >
                    {BUTTON_TEXT}
                </Button>
            );
            const btn = screen.getByTestId("btn");
            expect(btn).not.toBeDisabled();
            fireEvent.click(btn);
            expect(onClickMock).not.toHaveBeenCalled();
        });

        it("should render icon with iconPosition='right'", () => {
            render(
                <Button
                    icon={<PlaceholderIcon />}
                    iconPosition="right"
                    data-testid="btn"
                >
                    {BUTTON_TEXT}
                </Button>
            );
            const btn = screen.getByTestId("btn");
            expect(btn.querySelector("svg")).toBeInTheDocument();
            expect(screen.getByText(BUTTON_TEXT)).toBeInTheDocument();
        });
    });

    // =========================================================================
    // ICON-ONLY MODE
    // =========================================================================
    describe("icon-only mode", () => {
        it("should render icon without text", () => {
            render(
                <Button
                    icon={<PlaceholderIcon />}
                    aria-label={ARIA_LABEL}
                    data-testid="btn"
                />
            );
            const btn = screen.getByTestId("btn");
            expect(btn.querySelector("svg")).toBeInTheDocument();
            expect(btn.querySelector("span")).not.toBeInTheDocument();
        });

        it("should mark icon as aria-hidden", () => {
            render(
                <Button
                    icon={<PlaceholderIcon />}
                    aria-label={ARIA_LABEL}
                    data-testid="btn"
                />
            );
            const btn = screen.getByTestId("btn");
            const icon = btn.querySelector("svg");
            expect(icon).toHaveAttribute("aria-hidden", "true");
        });

        it("should have accessible name via aria-label", () => {
            render(
                <Button
                    icon={<PlaceholderIcon />}
                    aria-label={ARIA_LABEL}
                    data-testid="btn"
                />
            );
            expect(
                screen.getByRole("button", { name: ARIA_LABEL })
            ).toBeInTheDocument();
        });

        it("should hide icon and show spinner when loading", () => {
            render(
                <Button
                    icon={<PlaceholderIcon />}
                    aria-label={ARIA_LABEL}
                    data-testid="btn"
                    loading
                />
            );
            const btn = screen.getByTestId("btn");
            expect(btn.querySelector("svg")).not.toBeInTheDocument();
            expect(
                screen.getByTestId("component-loading-spinner")
            ).toBeInTheDocument();
        });

        it("should not fire onClick when disabled", () => {
            const onClickMock = jest.fn();
            render(
                <Button
                    icon={<PlaceholderIcon />}
                    aria-label={ARIA_LABEL}
                    onClick={onClickMock}
                    data-testid="btn"
                    disabled
                />
            );
            fireEvent.click(screen.getByTestId("btn"));
            expect(onClickMock).not.toHaveBeenCalled();
        });

        it("should remain focusable and not fire onClick when focusableWhenDisabled is set", () => {
            const onClickMock = jest.fn();
            render(
                <Button
                    icon={<PlaceholderIcon />}
                    aria-label={ARIA_LABEL}
                    onClick={onClickMock}
                    data-testid="btn"
                    disabled
                    focusableWhenDisabled
                />
            );
            const btn = screen.getByTestId("btn");
            expect(btn).not.toBeDisabled();
            fireEvent.click(btn);
            expect(onClickMock).not.toHaveBeenCalled();
        });
    });

    // =========================================================================
    // SIZE VARIANTS
    // =========================================================================
    describe("size variants", () => {
        it("should render with size='large'", () => {
            render(
                <Button size="large" data-testid="btn">
                    {BUTTON_TEXT}
                </Button>
            );
            expect(screen.getByTestId("btn")).toBeInTheDocument();
        });

        it("should render with size='default'", () => {
            render(
                <Button size="default" data-testid="btn">
                    {BUTTON_TEXT}
                </Button>
            );
            expect(screen.getByTestId("btn")).toBeInTheDocument();
        });

        it("should render with size='small'", () => {
            render(
                <Button size="small" data-testid="btn">
                    {BUTTON_TEXT}
                </Button>
            );
            expect(screen.getByTestId("btn")).toBeInTheDocument();
        });
    });

    // =========================================================================
    // LOADING STATE
    // =========================================================================
    describe("loading state", () => {
        it("should render loading spinner in default, small and large variants", () => {
            const { rerender } = render(
                <Button.Default loading data-testid="test-button">
                    Click me
                </Button.Default>
            );

            expect(
                screen.getByTestId("component-loading-spinner")
            ).toBeInTheDocument();

            rerender(
                <Button.Small loading data-testid="test-button">
                    Click me
                </Button.Small>
            );

            expect(
                screen.getByTestId("component-loading-spinner")
            ).toBeInTheDocument();

            rerender(
                <Button.Large loading data-testid="test-button">
                    Click me
                </Button.Large>
            );

            expect(
                screen.getByTestId("component-loading-spinner")
            ).toBeInTheDocument();
        });

        it("should toggle spinner based on loading state", () => {
            const { rerender } = render(
                <Button.Default loading data-testid="test-button">
                    Click me
                </Button.Default>
            );

            expect(
                screen.getByTestId("component-loading-spinner")
            ).toBeInTheDocument();

            rerender(
                <Button.Default data-testid="test-button">
                    Click me
                </Button.Default>
            );

            expect(
                screen.queryByTestId("component-loading-spinner")
            ).not.toBeInTheDocument();
        });
    });

    // =========================================================================
    // DANGER
    // =========================================================================
    describe("danger", () => {
        it("should render with danger flag", () => {
            render(
                <Button danger data-testid="btn">
                    {BUTTON_TEXT}
                </Button>
            );
            expect(screen.getByTestId("btn")).toBeInTheDocument();
        });

        it("should render icon+label button with danger flag", () => {
            render(
                <Button icon={<PlaceholderIcon />} danger data-testid="btn">
                    {BUTTON_TEXT}
                </Button>
            );
            const btn = screen.getByTestId("btn");
            expect(btn.querySelector("svg")).toBeInTheDocument();
            expect(screen.getByText(BUTTON_TEXT)).toBeInTheDocument();
        });

        it("should show loading spinner when danger and loading are combined", () => {
            render(
                <Button danger loading data-testid="btn">
                    {BUTTON_TEXT}
                </Button>
            );
            expect(
                screen.getByTestId("component-loading-spinner")
            ).toBeInTheDocument();
        });
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const BUTTON_TEXT = "Click me";
const ARIA_LABEL = "Archive item";
