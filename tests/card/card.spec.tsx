import { render, screen } from "@testing-library/react";
import { Card } from "../../src";
import { CardProps } from "../../src/card/types";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Card", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should render the component", () => {
        renderComponent();

        expect(screen.getByText(DEFAULT_TEXT)).toBeInTheDocument();
    });

    it("should be able to render JSX.Element as children", () => {
        const customText = "custom element";
        renderComponent({ children: <div>{customText}</div> });

        expect(screen.getByText(customText)).toBeInTheDocument();
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_TEXT = "default text";

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

// =============================================================================
// RENDER FUNCTIONS
// =============================================================================
const renderComponent = (props?: CardProps) => {
    return render(<Card {...props}>{props?.children || DEFAULT_TEXT}</Card>);
};
