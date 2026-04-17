import { fireEvent, render, screen } from "@testing-library/react";
import { RadioButton } from "src/radio-button";

describe("RadioButton", () => {
    it("should fire onChange when enabled", () => {
        const onChange = jest.fn();
        render(<RadioButton onChange={onChange} checked={false} />);

        fireEvent.click(screen.getByTestId("radio-input"));

        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it("should not fire onChange when disabled", () => {
        const onChange = jest.fn();
        render(<RadioButton onChange={onChange} disabled />);

        fireEvent.click(screen.getByTestId("radio-input"));

        expect(onChange).not.toHaveBeenCalled();
    });

    it("should remain focusable when disabled and focusableWhenDisabled is true", () => {
        const onChange = jest.fn();
        render(
            <RadioButton onChange={onChange} disabled focusableWhenDisabled />
        );

        const input = screen.getByTestId("radio-input");
        fireEvent.click(input);

        expect(input).not.toBeDisabled();
        expect(input).toHaveAttribute("aria-disabled", "true");
        expect(input).toHaveAttribute("tabIndex", "0");
        expect(onChange).not.toHaveBeenCalled();
    });
});
