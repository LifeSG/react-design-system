import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { ButtonWithIcon } from "../../src/button-with-icon";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("ButtonWithIcon", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should render the component", () => {
        render(
            <ButtonWithIcon.Default icon={<PlaceholderIcon />}>
                {BUTTON_TEXT}
            </ButtonWithIcon.Default>
        );

        expect(screen.getByText(BUTTON_TEXT)).toBeInTheDocument();
    });

    it("should render the icon", () => {
        const { getByTestId } = render(
            <ButtonWithIcon.Default
                icon={<PlaceholderIcon />}
                iconPosition="left"
                data-testid="test-button"
            >
                {BUTTON_TEXT}
            </ButtonWithIcon.Default>
        );

        const button = getByTestId("test-button");
        const icon = button.querySelector("svg");

        expect(icon).toBeInTheDocument();
    });

    it("should render the button and registers onClick event", () => {
        const onClickMock = jest.fn();
        const { getByTestId } = render(
            <ButtonWithIcon.Default
                onClick={onClickMock}
                icon={<PlaceholderIcon />}
                data-testid="test-button"
            >
                {BUTTON_TEXT}
            </ButtonWithIcon.Default>
        );
        const button = getByTestId("test-button");

        fireEvent.click(button);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const BUTTON_TEXT = "Click me";
