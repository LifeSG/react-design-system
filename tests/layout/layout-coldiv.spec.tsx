import "jest-styled-components";

import { render } from "@testing-library/react";
import { ColDiv } from "src/layout/col-div";
import * as styles from "src/layout/col-div.styles";

describe("ColDiv Component", () => {
    it("should render with the colDiv class", () => {
        const { container } = render(<ColDiv>Default ColDiv</ColDiv>);

        expect(container.firstChild).toHaveClass(styles.colDiv);
    });

    it("should render with no CSS vars set when no cols props are provided", () => {
        const { container } = render(<ColDiv>Default ColDiv</ColDiv>);
        const el = container.firstChild as HTMLElement;

        expect(el.style.getPropertyValue(styles.tokens.xxsSpan)).toBe("");
        expect(el.style.getPropertyValue(styles.tokens.xxsStart)).toBe("");
    });

    it("should correctly apply xxs column span", () => {
        const { container } = render(<ColDiv xxsCols={2}>XXS ColDiv</ColDiv>);
        const el = container.firstChild as HTMLElement;

        expect(el.style.getPropertyValue(styles.tokens.xxsSpan)).toBe("2");
        expect(el.style.getPropertyValue(styles.tokens.xxsStart)).toBe("");
    });

    it("should correctly apply xs column span", () => {
        const { container } = render(<ColDiv xsCols={3}>XS ColDiv</ColDiv>);
        const el = container.firstChild as HTMLElement;

        expect(el.style.getPropertyValue(styles.tokens.xsSpan)).toBe("3");
        expect(el.style.getPropertyValue(styles.tokens.xsStart)).toBe("");
    });

    it("should correctly apply sm column span", () => {
        const { container } = render(<ColDiv smCols={4}>SM ColDiv</ColDiv>);
        const el = container.firstChild as HTMLElement;

        expect(el.style.getPropertyValue(styles.tokens.smSpan)).toBe("4");
        expect(el.style.getPropertyValue(styles.tokens.smStart)).toBe("");
    });

    it("should correctly apply start and span for xxs", () => {
        const { container } = render(
            <ColDiv xxsCols={[1, 3]}>XXS Start and Span ColDiv</ColDiv>
        );
        const el = container.firstChild as HTMLElement;

        expect(el.style.getPropertyValue(styles.tokens.xxsStart)).toBe("1");
        expect(el.style.getPropertyValue(styles.tokens.xxsSpan)).toBe("2");
    });

    it("should correctly apply start and span for lg", () => {
        const { container } = render(
            <ColDiv lgCols={[2, 6]}>LG Start and Span ColDiv</ColDiv>
        );
        const el = container.firstChild as HTMLElement;

        expect(el.style.getPropertyValue(styles.tokens.lgStart)).toBe("2");
        expect(el.style.getPropertyValue(styles.tokens.lgSpan)).toBe("4");
    });

    it("should correctly apply span to end (-1) for xxs", () => {
        const { container } = render(
            <ColDiv xxsCols={[2, -1]}>XXS Span to End ColDiv</ColDiv>
        );
        const el = container.firstChild as HTMLElement;

        expect(el.style.getPropertyValue(styles.tokens.xxsStart)).toBe("2");
        expect(el.style.getPropertyValue(styles.tokens.xxsSpan)).toBe("");
        expect(el.style.getPropertyValue(styles.tokens.xxsEnd)).toBe("-1");
    });

    it("should fall back to smaller breakpoint cols when larger not specified", () => {
        const { container } = render(
            <ColDiv xxsCols={4}>Fallback ColDiv</ColDiv>
        );
        const el = container.firstChild as HTMLElement;

        expect(el.style.getPropertyValue(styles.tokens.xxsSpan)).toBe("4");
        expect(el.style.getPropertyValue(styles.tokens.xsSpan)).toBe("4");
        expect(el.style.getPropertyValue(styles.tokens.smSpan)).toBe("4");
        expect(el.style.getPropertyValue(styles.tokens.mdSpan)).toBe("4");
        expect(el.style.getPropertyValue(styles.tokens.lgSpan)).toBe("4");
        expect(el.style.getPropertyValue(styles.tokens.xlSpan)).toBe("4");
        expect(el.style.getPropertyValue(styles.tokens.xxlSpan)).toBe("4");
    });

    it("should merge external className", () => {
        const { container } = render(
            <ColDiv className="custom-class">ColDiv with class</ColDiv>
        );

        expect(container.firstChild).toHaveClass(styles.colDiv);
        expect(container.firstChild).toHaveClass("custom-class");
    });

    it("should merge external style", () => {
        const { container } = render(
            <ColDiv style={{ color: "red" }}>ColDiv with style</ColDiv>
        );
        const el = container.firstChild as HTMLElement;

        expect(el.style.color).toBe("red");
    });
});
