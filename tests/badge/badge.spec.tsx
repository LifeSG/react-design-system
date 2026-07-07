import { render, screen } from "@testing-library/react";
import { Badge } from "src/badge";

describe("Badge", () => {
    describe("count display", () => {
        it("should display the count as-is when 999 or below", () => {
            render(<Badge count={999} />);

            expect(screen.getByText("999")).toBeInTheDocument();
        });

        it("should display '1K' when count is exactly 1000", () => {
            render(<Badge count={1000} />);

            expect(screen.getByText("1K")).toBeInTheDocument();
        });

        it("should display '1K+' when count exceeds 1000", () => {
            render(<Badge count={2090} />);

            expect(screen.getByText("1K+")).toBeInTheDocument();
        });
    });

    describe("variants", () => {
        it.each(["number", "number-with-border", "square-number"] as const)(
            "should display the count for variant '%s'",
            (variant) => {
                render(<Badge count={5} variant={variant} />);

                expect(screen.getByText("5")).toBeInTheDocument();
            }
        );

        it.each(["dot", "dot-with-border"] as const)(
            "should not display the count for variant '%s'",
            (variant) => {
                render(<Badge count={5} variant={variant} />);

                expect(screen.queryByText("5")).not.toBeInTheDocument();
            }
        );
    });
});
