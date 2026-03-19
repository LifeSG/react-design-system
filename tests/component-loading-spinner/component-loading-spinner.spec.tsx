import { render, screen } from "@testing-library/react";
import { ComponentLoadingSpinner } from "src/shared/component-loading-spinner/component-loading-spinner";
import {
    innerRing,
    innerRing2,
    innerRing3,
    innerRing4,
    outerRing,
} from "src/shared/component-loading-spinner/component-loading-spinner.style";

describe("ComponentLoadingSpinner", () => {
    it("should render spinner root and 4 inner rings", () => {
        const { container } = render(<ComponentLoadingSpinner />);

        const spinner = screen.getByTestId("component-loading-spinner");
        const inner1 = container.querySelector("#inner1");
        const inner2 = container.querySelector("#inner2");
        const inner3 = container.querySelector("#inner3");
        const inner4 = container.querySelector("#inner4");

        expect(spinner).toBeInTheDocument();
        expect(spinner).toHaveClass(outerRing);
        expect(inner1).toHaveClass(innerRing);
        expect(inner2).toHaveClass(innerRing, innerRing2);
        expect(inner3).toHaveClass(innerRing, innerRing3);
        expect(inner4).toHaveClass(innerRing, innerRing4);
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

    it("should use default class and no css variables when props are omitted", () => {
        render(<ComponentLoadingSpinner />);

        const spinner = screen.getByTestId("component-loading-spinner");

        expect(spinner).toHaveClass(outerRing);
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

    it("should apply ring delay classes", () => {
        const { container } = render(<ComponentLoadingSpinner />);
        const inner2 = container.querySelector("#inner2");
        const inner3 = container.querySelector("#inner3");
        const inner4 = container.querySelector("#inner4");

        expect(inner2).toHaveClass(innerRing2);
        expect(inner3).toHaveClass(innerRing3);
        expect(inner4).toHaveClass(innerRing4);
    });
});
