import { render, screen } from "@testing-library/react";
import { TimepickerDropdown } from "src/shared/timepicker-dropdown/timepicker-dropdown";

describe("TimepickerDropdown", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        globalThis.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should set inert when hidden and remove inert when shown", () => {
        const onChange = jest.fn();
        const onCancel = jest.fn();

        const { rerender } = render(
            <TimepickerDropdown
                value="10:30"
                show={false}
                format="24hr"
                onChange={onChange}
                onCancel={onCancel}
            />
        );

        const dropdown = screen.getByTestId("timepicker-dropdown");
        expect(dropdown).toHaveAttribute("inert");

        rerender(
            <TimepickerDropdown
                value="10:30"
                show
                format="24hr"
                onChange={onChange}
                onCancel={onCancel}
            />
        );

        expect(dropdown).not.toHaveAttribute("inert");
    });
});
