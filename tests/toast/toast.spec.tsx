import { act, render, screen } from "@testing-library/react";
import { Toast } from "src/toast";

describe("Toast", () => {
    beforeEach(() => {
        jest.useFakeTimers();
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("should render visually hidden accessibility text", () => {
        render(<Toast type="warning" title="Toast title" label="Toast body" />);

        expect(screen.getByText("warning")).toBeInTheDocument();
        expect(screen.getByText("Close notification")).toBeInTheDocument();
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
});
