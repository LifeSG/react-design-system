import { fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from "src/checkbox";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Checkbox", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // =========================================================================
    // Input behaviour
    // =========================================================================
    describe("input behaviour", () => {
        it("forwards id and additional props to the input", () => {
            render(<Checkbox id="my-checkbox" name="agree" value="yes" />);

            const input = screen.getByTestId("checkbox-input");

            expect(input).toHaveAttribute("id", "my-checkbox");
            expect(input).toHaveAttribute("name", "agree");
            expect(input).toHaveAttribute("value", "yes");
        });

        it("is enabled by default", () => {
            render(<Checkbox />);

            expect(screen.getByTestId("checkbox-input")).toBeEnabled();
        });

        it("is disabled when disabled prop is set", () => {
            render(<Checkbox disabled />);

            expect(screen.getByTestId("checkbox-input")).toBeDisabled();
        });

        it("does not set tabIndex when disabled (browser handles via disabled attr)", () => {
            render(<Checkbox disabled />);

            expect(screen.getByTestId("checkbox-input")).not.toHaveAttribute(
                "tabindex"
            );
        });

        it("sets tabIndex=0 and aria-disabled when disabled with focusableWhenDisabled", () => {
            render(<Checkbox disabled focusableWhenDisabled />);

            const input = screen.getByTestId("checkbox-input");
            expect(input).toHaveAttribute("tabindex", "0");
            expect(input).toHaveAttribute("aria-disabled", "true");
            expect(input).not.toBeDisabled();
        });

        it("sets aria-checked=mixed when indeterminate", () => {
            render(<Checkbox indeterminate readOnly />);

            expect(screen.getByTestId("checkbox-input")).toHaveAttribute(
                "aria-checked",
                "mixed"
            );
        });

        it("sets aria-checked=true when checked", () => {
            render(<Checkbox checked readOnly />);

            expect(screen.getByTestId("checkbox-input")).toHaveAttribute(
                "aria-checked",
                "true"
            );
        });

        it("calls onChange when clicked", () => {
            const onChange = jest.fn();
            render(<Checkbox onChange={onChange} />);

            fireEvent.click(screen.getByTestId("checkbox-input"));

            expect(onChange).toHaveBeenCalledTimes(1);
        });
    });
});
