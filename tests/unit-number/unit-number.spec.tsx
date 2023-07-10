import { fireEvent, render, screen } from "@testing-library/react";
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

    describe("change handling", () => {
        it("should convert letters to uppercase and preserve caret position", async () => {
            render(<UnitNumberInput />);

            const floorInput: HTMLInputElement =
                screen.queryByTestId("floor-input");
            const floorInputSpy = jest.spyOn(floorInput, "setSelectionRange");

            const unitInput: HTMLInputElement =
                screen.queryByTestId("unit-input");
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
            expect(floorInputSpy).toBeCalledWith(1, 1);
            expect(unitInput).toHaveValue("B2");
            expect(unitInputSpy).toBeCalledWith(1, 1);
        });

        it("should remove non-alphanumeric characters and preserve caret position", async () => {
            render(<UnitNumberInput />);

            const floorInput: HTMLInputElement =
                screen.queryByTestId("floor-input");
            const floorInputSpy = jest.spyOn(floorInput, "setSelectionRange");

            const unitInput: HTMLInputElement =
                screen.queryByTestId("unit-input");
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
            expect(floorInputSpy).toBeCalledWith(1, 1);
            expect(unitInput).toHaveValue("B2");
            expect(unitInputSpy).toBeCalledWith(1, 1);
        });
    });
});
