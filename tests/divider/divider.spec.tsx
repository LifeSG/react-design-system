import { render } from "@testing-library/react";
import { Divider } from "src/divider";

// =============================================================================
// UNIT TESTS
// =============================================================================

describe("Divider", () => {
    describe("rendering", () => {
        it("should render an hr element", () => {
            const { container } = render(<Divider data-testid="divider" />);
            expect(container.querySelector("hr")).toBeInTheDocument();
        });

        it("should forward extra HTML attributes to the hr element", () => {
            const { container } = render(
                <Divider data-testid="divider" aria-label="divider" />
            );
            const hr = container.querySelector("hr");
            expect(hr).toHaveAttribute("aria-label", "divider");
        });

        it("should apply a custom className alongside internal classes", () => {
            const { container } = render(<Divider className="custom-class" />);
            const hr = container.querySelector("hr");
            expect(hr?.className).toContain("custom-class");
        });
    });
});
