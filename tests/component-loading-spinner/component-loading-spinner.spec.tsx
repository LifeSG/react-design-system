import "jest-styled-components";

import { render, screen } from "@testing-library/react";
import { ComponentLoadingSpinner } from "src/shared/component-loading-spinner/component-loading-spinner";

describe("ComponentLoadingSpinner", () => {
    it("should render spinner root and 4 inner rings", () => {
        const { container } = render(<ComponentLoadingSpinner />);

        const spinner = screen.getByTestId("component-loading-spinner");
        const innerRings = container.querySelectorAll(
            "#inner1, #inner2, #inner3, #inner4"
        );

        expect(spinner).toBeInTheDocument();
        expect(innerRings).toHaveLength(4);
    });

    it("should apply custom size and color", () => {
        const { container } = render(
            <ComponentLoadingSpinner size={24} color="#ff0000" />
        );

        expect(container.firstChild).toHaveStyleRule("width", "24px");
        expect(container.firstChild).toHaveStyleRule("height", "24px");
        expect(container.firstChild).toHaveStyleRule("color", "#ff0000");
    });

    it("should use default size and color when props are omitted", () => {
        const { container } = render(<ComponentLoadingSpinner />);

        expect(container.firstChild).toHaveStyleRule("width", "1em");
        expect(container.firstChild).toHaveStyleRule("height", "1em");
        expect(container.firstChild).toHaveStyleRule("color", "currentColor");
    });

    it("should apply animation configuration for all rings", () => {
        const { container } = render(<ComponentLoadingSpinner />);
        const inner1 = container.querySelector("#inner1");
        const inner2 = container.querySelector("#inner2");
        const inner3 = container.querySelector("#inner3");
        const inner4 = container.querySelector("#inner4");

        expect(inner1).toHaveStyleRule(
            "animation",
            expect.stringContaining("1.2s")
        );
        expect(inner2).toHaveStyleRule("animation-delay", "-0.45s");
        expect(inner3).toHaveStyleRule("animation-delay", "-0.3s");
        expect(inner4).toHaveStyleRule("animation-delay", "-0.15s");
    });
});
