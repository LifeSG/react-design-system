import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UnitNumberInput } from "src/unit-number";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("UnitNumberInput", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should render default component", () => {
        render(<UnitNumberInput />);

        expect(screen.queryByTestId("floor-input")).toHaveValue("");
        expect(screen.queryByTestId("floor-input")).toHaveAttribute(
            "placeholder",
            "00"
        );
        expect(screen.queryByTestId("unit-input")).toHaveValue("");
        expect(screen.queryByTestId("unit-input")).toHaveAttribute(
            "placeholder",
            "8888"
        );
    });

    it("should render component with formatted floor and unit values", () => {
        render(<UnitNumberInput value="1-3" />);

        expect(screen.queryByTestId("floor-input")).toHaveValue("01");
        expect(screen.queryByTestId("unit-input")).toHaveValue("03");
    });

    it("should have accessible labels and live region to both inputs", () => {
        render(<UnitNumberInput />);

        const floorInput = screen.getByRole("textbox", {
            name: "Enter floor number",
        });
        const unitInput = screen.getByRole("textbox", {
            name: "Enter unit number",
        });
        const liveRegion = document.getElementById(
            floorInput.getAttribute("aria-describedby") as string
        );

        expect(floorInput).toHaveAccessibleName("Enter floor number");
        expect(unitInput).toHaveAccessibleName("Enter unit number");
        expect(liveRegion).toHaveAttribute("aria-live", "polite");
        expect(unitInput).toHaveAttribute(
            "aria-describedby",
            liveRegion?.id as string
        );
    });

    describe("change handling", () => {
        it("should convert letters to uppercase and preserve caret position", async () => {
            render(<UnitNumberInput />);

            const floorInput: HTMLInputElement =
                screen.getByTestId("floor-input");
            const floorInputSpy = jest.spyOn(floorInput, "setSelectionRange");

            const unitInput: HTMLInputElement =
                screen.getByTestId("unit-input");
            const unitInputSpy = jest.spyOn(unitInput, "setSelectionRange");

            fireEvent.change(floorInput, {
                target: {
                    value: "a1",
                    selectionStart: 1,
                    selectionEnd: 1,
                },
            });

            fireEvent.change(unitInput, {
                target: {
                    value: "b2",
                    selectionStart: 1,
                    selectionEnd: 1,
                },
            });

            expect(floorInput).toHaveValue("A1");
            expect(floorInputSpy).toHaveBeenCalledWith(1, 1);
            expect(unitInput).toHaveValue("B2");
            expect(unitInputSpy).toHaveBeenCalledWith(1, 1);
        });

        it("should remove non-alphanumeric characters and preserve caret position", async () => {
            render(<UnitNumberInput />);

            const floorInput: HTMLInputElement =
                screen.getByTestId("floor-input");
            const floorInputSpy = jest.spyOn(floorInput, "setSelectionRange");

            const unitInput: HTMLInputElement =
                screen.getByTestId("unit-input");
            const unitInputSpy = jest.spyOn(unitInput, "setSelectionRange");

            fireEvent.change(floorInput, {
                target: {
                    value: "A!1",
                    selectionStart: 2,
                    selectionEnd: 2,
                },
            });

            fireEvent.change(unitInput, {
                target: {
                    value: "B!2",
                    selectionStart: 2,
                    selectionEnd: 2,
                },
            });

            expect(floorInput).toHaveValue("A1");
            expect(floorInputSpy).toHaveBeenCalledWith(1, 1);
            expect(unitInput).toHaveValue("B2");
            expect(unitInputSpy).toHaveBeenCalledWith(1, 1);
        });

        it("should call onChange with new floor value when only floor number is changed", () => {
            const mockOnChange = jest.fn();
            render(<UnitNumberInput value="01-123" onChange={mockOnChange} />);

            const floorInput: HTMLInputElement =
                screen.getByTestId("floor-input");

            fireEvent.change(floorInput, {
                target: { value: "05" },
            });

            expect(mockOnChange).toHaveBeenCalledWith("05-123");
        });

        it("should call onChange with new unit value when only unit number is changed", () => {
            const mockOnChange = jest.fn();
            render(<UnitNumberInput value="01-123" onChange={mockOnChange} />);

            const unitInput: HTMLInputElement =
                screen.getByTestId("unit-input");

            fireEvent.change(unitInput, {
                target: { value: "456" },
            });

            expect(mockOnChange).toHaveBeenCalledWith("01-456");
        });

        it("should call onChangeRaw with new floor value when only floor number is changed", () => {
            const mockOnChangeRaw = jest.fn();
            render(
                <UnitNumberInput value="01-123" onChangeRaw={mockOnChangeRaw} />
            );

            const floorInput: HTMLInputElement =
                screen.getByTestId("floor-input");

            fireEvent.change(floorInput, {
                target: { value: "05" },
            });

            expect(mockOnChangeRaw).toHaveBeenCalledWith(["05", "123"]);
        });

        it("should call onChangeRaw with new unit value when only unit number is changed", () => {
            const mockOnChangeRaw = jest.fn();
            render(
                <UnitNumberInput value="01-123" onChangeRaw={mockOnChangeRaw} />
            );

            const unitInput: HTMLInputElement =
                screen.getByTestId("unit-input");

            fireEvent.change(unitInput, {
                target: { value: "456" },
            });

            expect(mockOnChangeRaw).toHaveBeenCalledWith(["01", "456"]);
        });
    });

    describe("blur handling", () => {
        it("should call onBlur callback on component defocus", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();
            render(<UnitNumberInput onBlur={mockOnBlur} />);

            const floorInput: HTMLInputElement =
                screen.getByTestId("floor-input");
            const unitInput: HTMLInputElement =
                screen.getByTestId("unit-input");

            await user.click(floorInput);
            await user.type(floorInput, "05");
            await user.tab();
            await user.type(unitInput, "123");
            await user.tab();

            expect(mockOnBlur).toHaveBeenCalledWith("05-123");
        });

        it("should call onBlurRaw callback on component defocus", async () => {
            const user = userEvent.setup();
            const mockOnBlurRaw = jest.fn();
            render(<UnitNumberInput onBlurRaw={mockOnBlurRaw} />);

            const floorInput: HTMLInputElement =
                screen.getByTestId("floor-input");
            const unitInput: HTMLInputElement =
                screen.getByTestId("unit-input");

            await user.click(floorInput);
            await user.type(floorInput, "05");
            await user.tab();
            await user.type(unitInput, "123");
            await user.tab();

            expect(mockOnBlurRaw).toHaveBeenCalledWith(["05", "123"]);
        });
    });
});
