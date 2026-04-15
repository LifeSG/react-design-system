import { fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from "src/checkbox";
import * as styles from "src/checkbox/checkbox.styles";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Checkbox", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // =========================================================================
    // Rendering
    // =========================================================================
    describe("rendering", () => {
        it("renders the checkbox container and input", () => {
            render(<Checkbox />);

            expect(screen.getByTestId("checkbox")).toBeInTheDocument();
            expect(screen.getByTestId("checkbox-input")).toBeInTheDocument();
        });

        it("renders the unchecked icon by default", () => {
            render(<Checkbox />);

            expect(screen.getByTestId("empty-checkbox")).toBeInTheDocument();
        });

        it("renders the checked icon when checked", () => {
            render(<Checkbox checked readOnly />);

            expect(screen.getByTestId("checkmark")).toBeInTheDocument();
            expect(
                screen.queryByTestId("empty-checkbox")
            ).not.toBeInTheDocument();
        });

        it("renders the indeterminate icon when indeterminate", () => {
            render(<Checkbox indeterminate readOnly />);

            expect(screen.getByTestId("indeterminate")).toBeInTheDocument();
            expect(screen.queryByTestId("checkmark")).not.toBeInTheDocument();
        });

        it("renders the disabled unchecked icon when disabled and unchecked", () => {
            render(<Checkbox disabled />);

            expect(
                screen.getByTestId("empty-disabled-checkbox")
            ).toBeInTheDocument();
            expect(
                screen.queryByTestId("empty-checkbox")
            ).not.toBeInTheDocument();
        });

        it("renders the checked icon (with disabled class) when disabled and checked", () => {
            render(<Checkbox disabled checked readOnly />);

            expect(screen.getByTestId("checkmark")).toBeInTheDocument();
            expect(
                screen.queryByTestId("empty-disabled-checkbox")
            ).not.toBeInTheDocument();
        });

        it("renders the indeterminate icon (with disabled class) when disabled and indeterminate", () => {
            render(<Checkbox disabled indeterminate readOnly />);

            expect(screen.getByTestId("indeterminate")).toBeInTheDocument();
        });
    });

    // =========================================================================
    // Input behaviour
    // =========================================================================
    describe("input behaviour", () => {
        it("forwards id to the input", () => {
            render(<Checkbox id="my-checkbox" />);

            expect(screen.getByTestId("checkbox-input")).toHaveAttribute(
                "id",
                "my-checkbox"
            );
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

        it("does not set tabIndex when enabled (browser default is focusable)", () => {
            render(<Checkbox />);

            expect(screen.getByTestId("checkbox-input")).not.toHaveAttribute(
                "tabindex"
            );
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

        it("forwards additional props to the input element", () => {
            render(<Checkbox name="agree" value="yes" />);

            const input = screen.getByTestId("checkbox-input");
            expect(input).toHaveAttribute("name", "agree");
            expect(input).toHaveAttribute("value", "yes");
        });
    });

    // =========================================================================
    // className and displaySize
    // =========================================================================
    describe("className and displaySize", () => {
        it("forwards className to the container element", () => {
            render(<Checkbox className="custom-class" />);

            expect(screen.getByTestId("checkbox")).toHaveClass("custom-class");
        });

        it("applies containerSmall Linaria class when displaySize is small", () => {
            const { rerender } = render(<Checkbox displaySize="small" />);
            const container = screen.getByTestId("checkbox");

            expect(container).toHaveClass(styles.containerSmall);

            rerender(<Checkbox displaySize="default" />);

            expect(container).not.toHaveClass(styles.containerSmall);
        });

        it("renders custom className after the Linaria container class", () => {
            render(<Checkbox className="last-class" />);
            const containerClass = screen.getByTestId("checkbox").className;

            expect(containerClass).toContain("last-class");
        });
    });

    // =========================================================================
    // Indeterminate ref
    // =========================================================================
    describe("indeterminate state via ref", () => {
        it("sets input.indeterminate=true when indeterminate prop is true", () => {
            render(<Checkbox indeterminate />);

            const input = screen.getByTestId(
                "checkbox-input"
            ) as HTMLInputElement;
            expect(input.indeterminate).toBe(true);
        });

        it("sets input.indeterminate=false when indeterminate prop is false", () => {
            render(<Checkbox indeterminate={false} />);

            const input = screen.getByTestId(
                "checkbox-input"
            ) as HTMLInputElement;
            expect(input.indeterminate).toBe(false);
        });
    });
});
