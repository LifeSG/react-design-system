import { render, screen } from "@testing-library/react";
import { Pill } from "../../src/pill";
import { PlusCircleFillIcon } from "@lifesg/react-icons";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Pill", () => {
    const label = "Some label";
    it("should render the label correctly", () => {
        render(
            <Pill type="solid" data-testid="pill-component">
                {label}
            </Pill>
        );

        expect(screen.getByText(label)).toBeInTheDocument();
    });

    it("should render with an icon if specified", () => {
        render(
            <Pill type="outline" icon={<PlusCircleFillIcon />}>
                {label}
            </Pill>
        );

        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    it("should render without an icon if not specified", () => {
        render(<Pill type="outline">{label}</Pill>);

        expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
    });
});
