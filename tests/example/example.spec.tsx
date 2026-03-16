import { fireEvent, render, screen } from "@testing-library/react";
import { Example } from "src/example/example";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Example", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should render the component", () => {
        render(<Example>{DEFAULT_TEXT}</Example>);

        expect(getToggleButton()).toBeInTheDocument();
        expect(screen.queryByText(DEFAULT_TEXT)).not.toBeInTheDocument();
    });

    it("should show children when button is clicked", () => {
        render(<Example>{DEFAULT_TEXT}</Example>);

        fireEvent.click(getToggleButton());

        expect(screen.getByText(DEFAULT_TEXT)).toBeInTheDocument();
    });

    it("should hide children when button is clicked twice", () => {
        render(<Example>{DEFAULT_TEXT}</Example>);

        fireEvent.click(getToggleButton());
        fireEvent.click(getToggleButton());

        expect(screen.queryByText(DEFAULT_TEXT)).not.toBeInTheDocument();
    });

    it("should apply wrapper inline styles on mount", () => {
        render(<Example>{DEFAULT_TEXT}</Example>);

        expect(getWrapper()).toHaveStyle({
            border: "1px solid black",
            padding: "1rem",
            borderRadius: "0.5rem",
            width: "50%",
        });
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_TEXT = "default text";

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const getToggleButton = () => {
    return screen.getByRole("button", { name: /click me/i });
};

const getWrapper = () => {
    return getToggleButton().parentElement as HTMLDivElement;
};
