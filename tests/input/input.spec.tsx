import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "src/input";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Input", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render default component", () => {
        render(<Input />);

        expect(screen.queryByTestId("input")).toHaveValue("");
    });

    it("should render component with value", () => {
        render(<Input value="test" />);

        expect(screen.queryByTestId("input")).toHaveValue("test");
    });

    describe("tel type with spacing", () => {
        it("should format value and preserve caret position", async () => {
            render(<Input type="tel" spacing={2} value="123456" />);

            expect(screen.queryByTestId("input")).toHaveValue("12 34 56");
        });

        describe("change handling", () => {
            it("should format value and preserve caret position", async () => {
                render(<Input type="tel" spacing={2} onChange={jest.fn()} />);

                const input: HTMLInputElement = screen.getByTestId("input");
                const inputSpy = jest.spyOn(input, "setSelectionRange");

                fireEvent.change(input, {
                    target: {
                        value: "12 346 5",
                        selectionStart: 6,
                        selectionEnd: 6,
                    },
                });

                expect(input).toHaveValue("12 34 65");
                expect(inputSpy).toBeCalledWith(7, 7);
            });

            it("should remove non-numeric characters and preserve caret position", async () => {
                render(<Input type="tel" spacing={2} onChange={jest.fn()} />);

                const input: HTMLInputElement = screen.getByTestId("input");
                const inputSpy = jest.spyOn(input, "setSelectionRange");

                fireEvent.change(input, {
                    target: {
                        value: "12 3!4",
                        selectionStart: 5,
                        selectionEnd: 5,
                    },
                });

                expect(input).toHaveValue("12 34");
                expect(inputSpy).toBeCalledWith(4, 4);
            });
        });
    });
});
