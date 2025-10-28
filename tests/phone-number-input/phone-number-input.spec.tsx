import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "src/form";
import { PhoneNumberInput } from "src/phone-number-input";

const INPUT_TESTID = "input";
const SELECTOR_TESTID = "selector";
const LABEL = "Test label";
const DESCRIPTION = "Test subtitle";
const DROPDOWN_LABEL = `${LABEL} Country code`;
const DROPDOWN_INSTRUCTION = "Press Space or Enter to open options";
const TEXTBOX_LABEL = `${LABEL} Enter phone number`;
const ERROR = "Error message";

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

    describe("accessible names", () => {
        it("should apply the correct label", () => {
            render(<Form.PhoneNumberInput label={LABEL} />);

            expect(
                screen.getByRole("combobox", {
                    name: DROPDOWN_LABEL,
                    description: DROPDOWN_INSTRUCTION,
                })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("textbox", {
                    name: TEXTBOX_LABEL,
                })
            ).toBeInTheDocument();
        });

        it("should apply the correct label and description", () => {
            render(
                <Form.PhoneNumberInput
                    label={{ children: LABEL, subtitle: DESCRIPTION }}
                />
            );

            expect(
                screen.getByRole("combobox", {
                    name: DROPDOWN_LABEL,
                    description: `${DESCRIPTION} ${DROPDOWN_INSTRUCTION}`,
                })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("textbox", {
                    name: TEXTBOX_LABEL,
                    description: DESCRIPTION,
                })
            ).toBeInTheDocument();
        });

        it("should apply the error state and error description", () => {
            render(
                <Form.PhoneNumberInput
                    label={{ children: LABEL, subtitle: DESCRIPTION }}
                    errorMessage={ERROR}
                />
            );

            const combobox = screen.getByRole("combobox", {
                name: DROPDOWN_LABEL,
                description: `${ERROR} ${DESCRIPTION} ${DROPDOWN_INSTRUCTION}`,
            });
            const textbox = screen.getByRole("textbox", {
                name: TEXTBOX_LABEL,
                description: `${ERROR} ${DESCRIPTION}`,
            });
            expect(combobox).toBeInTheDocument();
            expect(combobox).toBeInvalid();
            expect(textbox).toBeInTheDocument();
            expect(textbox).toBeInvalid();
        });
    });
});
