import { render, screen } from "@testing-library/react";
import { ComponentLoadingSpinner } from "src/shared/component-loading-spinner/component-loading-spinner";

describe("ComponentLoadingSpinner", () => {
    it("should render spinner root and 4 inner rings", () => {
        const { container } = render(<ComponentLoadingSpinner />);

        const spinner = screen.getByTestId("component-loading-spinner");
        const inner1 = container.querySelector("#inner1");
        const inner2 = container.querySelector("#inner2");
        const inner3 = container.querySelector("#inner3");
        const inner4 = container.querySelector("#inner4");

        expect(spinner).toBeInTheDocument();
        expect(inner1).toBeInTheDocument();
        expect(inner2).toBeInTheDocument();
        expect(inner3).toBeInTheDocument();
        expect(inner4).toBeInTheDocument();
    });

    it("should apply custom size and color", () => {
        render(<ComponentLoadingSpinner size={24} color="#ff0000" />);

        const spinner = screen.getByTestId("component-loading-spinner");

        expect(
            spinner.style.getPropertyValue(
                "--fds-internal-componentLoadingSpinner-root-size"
            )
        ).toBe("24px");
        expect(
            spinner.style.getPropertyValue(
                "--fds-internal-componentLoadingSpinner-root-colour"
            )
        ).toBe("#ff0000");
    });

    it("should have no css variables when props are omitted", () => {
        render(<ComponentLoadingSpinner />);

        const spinner = screen.getByTestId("component-loading-spinner");
        expect(
            spinner.style.getPropertyValue(
                "--fds-internal-componentLoadingSpinner-root-size"
            )
        ).toBe("");
        expect(
            spinner.style.getPropertyValue(
                "--fds-internal-componentLoadingSpinner-root-colour"
            )
        ).toBe("");
    });
});
