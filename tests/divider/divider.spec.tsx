import { render } from "@testing-library/react";
import { Colour } from "src/theme";
import { Divider } from "src/divider";
import * as styles from "src/divider/divider.styles";

// =============================================================================
// UNIT TESTS
// =============================================================================

describe("Divider", () => {
    // =========================================================================
    // RENDERING
    // =========================================================================
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

    // =========================================================================
    // LINE STYLE
    // =========================================================================
    describe("lineStyle", () => {
        it("should apply the solid class by default", () => {
            const { container } = render(<Divider />);
            const hr = container.querySelector("hr");
            expect(hr?.className).toContain(styles.solidLine);
        });

        it("should apply the solid class when lineStyle is solid", () => {
            const { container } = render(<Divider lineStyle="solid" />);
            const hr = container.querySelector("hr");
            expect(hr?.className).toContain(styles.solidLine);
            expect(hr?.className).not.toContain(styles.dashedLine);
        });

        it("should apply the dashed class when lineStyle is dashed", () => {
            const { container } = render(<Divider lineStyle="dashed" />);
            const hr = container.querySelector("hr");
            expect(hr?.className).toContain(styles.dashedLine);
            expect(hr?.className).not.toContain(styles.solidLine);
        });

        it("should always apply the lineBase class", () => {
            const { container: solidContainer } = render(<Divider lineStyle="solid" />);
            const { container: dashedContainer } = render(<Divider lineStyle="dashed" />);

            expect(solidContainer.querySelector("hr")?.className).toContain(styles.lineBase);
            expect(dashedContainer.querySelector("hr")?.className).toContain(styles.lineBase);
        });
    });

    // =========================================================================
    // CSS TOKENS – THICKNESS
    // =========================================================================
    describe("thickness token", () => {
        it("should set the thickness token to 1px by default", () => {
            const { container } = render(<Divider />);
            const hr = container.querySelector("hr") as HTMLElement;
            expect(hr.style.getPropertyValue(styles.tokens.thickness)).toBe("1px");
        });

        it("should set the thickness token to the provided value in px", () => {
            const { container } = render(<Divider thickness={4} />);
            const hr = container.querySelector("hr") as HTMLElement;
            expect(hr.style.getPropertyValue(styles.tokens.thickness)).toBe("4px");
        });
    });

    // =========================================================================
    // CSS TOKENS – COLOR
    // =========================================================================
    describe("color token", () => {
        it("should not set the color token when no color prop is provided", () => {
            const { container } = render(<Divider />);
            const hr = container.querySelector("hr") as HTMLElement;
            expect(hr.style.getPropertyValue(styles.tokens.color)).toBe("");
        });

        it("should set the color token when a plain CSS color string is provided", () => {
            const { container } = render(<Divider color="red" />);
            const hr = container.querySelector("hr") as HTMLElement;
            expect(hr.style.getPropertyValue(styles.tokens.color)).toBe("red");
        });

        it("should set the color token when a design token is provided", () => {
            const { container } = render(
                <Divider color={Colour["border-primary"]} />
            );
            const hr = container.querySelector("hr") as HTMLElement;
            expect(hr.style.getPropertyValue(styles.tokens.color)).toBe(
                Colour["border-primary"]
            );
        });
    });
});
