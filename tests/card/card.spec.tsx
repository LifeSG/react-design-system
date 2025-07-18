import { render, screen } from "@testing-library/react";
import { Card } from "../../src";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Card", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should render the component", () => {
        render(<Card>{DEFAULT_TEXT}</Card>);

        expect(screen.getByText(DEFAULT_TEXT)).toBeInTheDocument();
    });

    it("should be able to render a custom React.JSX.Element as children", () => {
        const CUSTOM_TEXT = "custom element";
        render(
            <Card>
                <div>{CUSTOM_TEXT}</div>
            </Card>
        );

        expect(screen.getByText(CUSTOM_TEXT)).toBeInTheDocument();
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_TEXT = "default text";
