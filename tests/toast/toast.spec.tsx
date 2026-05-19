import { act, fireEvent, render, screen } from "@testing-library/react";
import { Toast } from "src/toast";

describe("Toast", () => {
    beforeEach(() => {
        jest.useFakeTimers();
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("should render component", () => {
        render(<Toast type="warning" title="Toast title" label="Toast body" />);

        expect(screen.getByText("warning")).toBeInTheDocument();

        expect(screen.getByText("Toast title")).toBeInTheDocument();
        expect(screen.getByText("Toast body")).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Close notification" })
        ).toBeInTheDocument();
    });

    it("should toggle inert when toast is auto dismissed", () => {
        render(
            <Toast
                type="success"
                title="Toast title"
                label="Toast body"
                autoDismiss
                autoDismissTime={10}
            />
        );

        const alert = screen.getByRole("alert");

        expect(alert).not.toHaveAttribute("inert");

        act(() => {
            jest.advanceTimersByTime(10);
        });

        expect(alert).toHaveAttribute("inert");
    });

    it("should dismiss when close button is clicked", () => {
        render(<Toast type="success" title="Toast title" label="Toast body" />);

        const alert = screen.getByRole("alert");
        const dismissButton = screen.getByRole("button", {
            name: "Close notification",
        });

        fireEvent.click(dismissButton);

        expect(alert).toHaveAttribute("inert");
    });

    it("should dismiss on Escape when focus is inside toast", () => {
        render(<Toast type="success" title="Toast title" label="Toast body" />);

        const alert = screen.getByRole("alert");
        const dismissButton = screen.getByRole("button", {
            name: "Close notification",
        });
        dismissButton.focus();

        fireEvent.keyDown(document, { key: "Escape" });

        expect(alert).toHaveAttribute("inert");
    });

    it("should trigger action button callback when clicked", () => {
        const actionClick = jest.fn();

        render(
            <Toast
                type="info"
                title="Toast title"
                label="Toast body"
                actionButton={{
                    label: "Click me",
                    onClick: actionClick,
                }}
            />
        );

        fireEvent.click(screen.getByRole("button", { name: "Click me" }));

        expect(actionClick).toHaveBeenCalledTimes(1);
    });

    it("should call onDismiss after auto dismiss animation ends", () => {
        const onDismiss = jest.fn();

        render(
            <Toast
                type="success"
                title="Toast title"
                label="Toast body"
                autoDismiss
                autoDismissTime={10}
                onDismiss={onDismiss}
            />
        );

        act(() => {
            jest.advanceTimersByTime(10);
            jest.advanceTimersByTime(1000);
        });

        expect(onDismiss).toHaveBeenCalledTimes(1);
    });
});
