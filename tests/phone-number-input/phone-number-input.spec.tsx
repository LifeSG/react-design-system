import { fireEvent, render, screen } from "@testing-library/react";
import { PhoneNumberInput } from "src/phone-number-input";

const INPUT_TESTID = "input";
const SELECTOR_TESTID = "selector";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("PhoneNumberInput", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        // Make requestAnimationFrame synchronous to avoid async focus issues in tests (see https://github.com/floating-ui/floating-ui/issues/2488)
        global.requestAnimationFrame = (cb: FrameRequestCallback) => {
            cb(0);
            return 0;
        };

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render default component", () => {
        render(<PhoneNumberInput />);

        expect(screen.queryByTestId(SELECTOR_TESTID)).toHaveTextContent(
            "Select"
        );
        expect(screen.queryByTestId(INPUT_TESTID)).toHaveValue("");
    });

    it("should render component with formatted value", () => {
        render(
            <PhoneNumberInput
                value={{ countryCode: "994", number: "123456789" }}
            />
        );

        expect(screen.queryByTestId(SELECTOR_TESTID)).toHaveTextContent("+994");
        expect(screen.queryByTestId(INPUT_TESTID)).toHaveValue(
            "(12) 345 67 89"
        );
    });

    describe("change handling", () => {
        it("should format number and preserve caret position", async () => {
            render(<PhoneNumberInput value={{ countryCode: "994" }} />);

            const input: HTMLInputElement = screen.getByTestId("input");
            const inputSpy = jest.spyOn(input, "setSelectionRange");

            fireEvent.change(input, {
                target: {
                    value: "231",
                    selectionStart: 2,
                    selectionEnd: 2,
                },
            });

            expect(input).toHaveValue("(23) 1");
            expect(inputSpy).toHaveBeenCalledWith(3, 3);
        });

        it("should remove non-numeric characters and preserve caret position", async () => {
            render(<PhoneNumberInput value={{ countryCode: "994" }} />);

            const input: HTMLInputElement = screen.getByTestId("input");
            const inputSpy = jest.spyOn(input, "setSelectionRange");

            fireEvent.change(input, {
                target: {
                    value: "(1!2",
                    selectionStart: 3,
                    selectionEnd: 3,
                },
            });

            expect(input).toHaveValue("(12");
            expect(inputSpy).toHaveBeenCalledWith(2, 2);
        });
    });
});
