import { render, screen } from "@testing-library/react";
import { Pill } from "../../src/pill";
import { PlusCircleFillIcon } from "@lifesg/react-icons";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Pill", () => {
    it("should render pill component", () => {
        const label = "pill statuses";
        render(
            <Pill type="solid" data-testid="pill-component">
                {label}
            </Pill>
        );

        const element = screen.getByTestId("pill-component");
        expect(element).toBeInTheDocument();
        expect(element.innerHTML).toContain(label);
        expect(element.innerHTML).not.toContain("svg");
        expect(element).toHaveStyle("background: #282828;");
    });

    it("should render pill component with icon", () => {
        const label = "pill with icon";
        render(
            <Pill type="outline" icon={<PlusCircleFillIcon />}>
                {label}
            </Pill>
        );

        const element = screen.getByTestId("pill");
        expect(element).toBeInTheDocument();
        expect(element.innerHTML).toContain("svg");
        expect(element).toHaveStyle("background: #FFFFFF;");
    });
});
