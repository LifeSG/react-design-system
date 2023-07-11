import { render, screen } from "@testing-library/react";
import { Pill } from "../../src/pill";
import { PlusCircleFillIcon } from "@lifesg/react-icons";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Pill", () => {
    const label = "Some label";
    it("should render the label correctly", () => {
        render(<Pill type="solid">{label}</Pill>);

        expect(screen.getByText(label)).toBeInTheDocument();
    });

    it("should render with an icon if specified", () => {
        render(
            <Pill
                type="outline"
                icon={<PlusCircleFillIcon data-testid="icon" />}
            >
                {label}
            </Pill>
        );

        expect(screen.getByText(label)).toBeInTheDocument();
        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });
});
