import { render, screen } from "@testing-library/react";
import { Timeline } from "../../src/timeline";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Timeline", () => {
    describe("numeric variant", () => {
        it("should display incrementing numeric indices for numeric variant items", () => {
            render(
                <Timeline
                    data-base-indicator-testid="test"
                    items={[
                        {
                            title: "Step 1",
                            variant: "numeric",
                            content: "First step content",
                        },
                        {
                            title: "Step 2",
                            variant: "numeric",
                            content: "Second step content",
                        },
                        {
                            title: "Step 3",
                            variant: "numeric",
                            content: "Third step content",
                        },
                        {
                            title: "Step 4",
                            variant: "numeric",
                            content: "Fourth step content",
                        },
                        {
                            title: "Step 5",
                            variant: "numeric",
                            content: "Fifth step content",
                        },
                    ]}
                />
            );

            const indicator1 = screen.getByTestId("circleindicator1_div_test");
            const indicator2 = screen.getByTestId("circleindicator2_div_test");
            const indicator3 = screen.getByTestId("circleindicator3_div_test");
            const indicator4 = screen.getByTestId("circleindicator4_div_test");
            const indicator5 = screen.getByTestId("circleindicator5_div_test");

            expect(indicator1).toHaveTextContent("1");
            expect(indicator2).toHaveTextContent("2");
            expect(indicator3).toHaveTextContent("3");
            expect(indicator4).toHaveTextContent("4");
            expect(indicator5).toHaveTextContent("5");
        });

        it("should include accessible step number in visually hidden text", () => {
            render(
                <Timeline
                    items={[
                        {
                            title: "Step 1",
                            variant: "numeric",
                            content: "First step content",
                        },
                        {
                            title: "Step 2",
                            variant: "numeric",
                            content: "Second step content",
                        },
                    ]}
                />
            );

            expect(screen.getByText("Step number 1")).toBeInTheDocument();
            expect(screen.getByText("Step number 2")).toBeInTheDocument();
        });

        it("should render numeric indices correctly when mixed with other variants", () => {
            render(
                <Timeline
                    data-base-indicator-testid="mixed"
                    items={[
                        {
                            title: "Completed step",
                            variant: "completed",
                            content: "Completed content",
                        },
                        {
                            title: "Numeric step 1",
                            variant: "numeric",
                            content: "Numeric content 1",
                        },
                        {
                            title: "Numeric step 2",
                            variant: "numeric",
                            content: "Numeric content 2",
                        },
                    ]}
                />
            );

            // The numeric variant should still show index-based numbers (2 and 3)
            // The index is based on position in the array, not filtered by variant
            const indicator2 = screen.getByTestId("circleindicator2_div_mixed");
            const indicator3 = screen.getByTestId("circleindicator3_div_mixed");

            expect(indicator2).toHaveTextContent("2");
            expect(indicator3).toHaveTextContent("3");
        });
    });
});
