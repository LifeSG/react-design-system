import { render, screen } from "@testing-library/react";
import ReactDOMServer from "react-dom/server";
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

    it("should correctly apply end (-1) for xxs", () => {
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

    it("should apply span as data attributes before hydration and CSS variables after hydration", () => {
        const ui = (
            <ColDiv data-testid="output" xxsCols={4}>
                Fallback ColDiv
            </ColDiv>
        );

        // simulate server-side rendering
        const container = document.createElement("div");
        document.body.appendChild(container);
        container.innerHTML = ReactDOMServer.renderToString(ui);

        const el = screen.getByTestId("output");
        expect(el.style.getPropertyValue(styles.tokens.xxsSpan)).toBe("");
        expect(el.getAttribute(styles.tokens.xxsSpanAttr)).toBe("4");

        // hydrate the component
        render(ui, { hydrate: true, container });

        expect(el.style.getPropertyValue(styles.tokens.xxsSpan)).toBe("4");
        expect(el.getAttribute(styles.tokens.xxsSpanAttr)).toBe(null);
    });

    it("should apply start and span as data attributes before hydration and CSS variables after hydration", () => {
        const ui = (
            <ColDiv data-testid="output" xxsCols={[1, 4]}>
                Fallback ColDiv
            </ColDiv>
        );

        // simulate server-side rendering
        const container = document.createElement("div");
        document.body.appendChild(container);
        container.innerHTML = ReactDOMServer.renderToString(ui);

        const el = screen.getByTestId("output");
        expect(el.style.getPropertyValue(styles.tokens.xxsSpan)).toBe("");
        expect(el.style.getPropertyValue(styles.tokens.xxsStart)).toBe("");
        expect(el.getAttribute(styles.tokens.xxsStartAttr)).toBe("1");
        expect(el.getAttribute(styles.tokens.xxsSpanAttr)).toBe("3");

        // hydrate the component
        render(ui, { hydrate: true, container });

        expect(el.style.getPropertyValue(styles.tokens.xxsStart)).toBe("1");
        expect(el.style.getPropertyValue(styles.tokens.xxsSpan)).toBe("3");
        expect(el.getAttribute(styles.tokens.xxsStartAttr)).toBe(null);
        expect(el.getAttribute(styles.tokens.xxsSpanAttr)).toBe(null);
    });

    it("should apply end (-1) as data attributes before hydration and CSS variables after hydration", () => {
        const ui = (
            <ColDiv data-testid="output" xxsCols={[1, -1]}>
                Fallback ColDiv
            </ColDiv>
        );

        // simulate server-side rendering
        const container = document.createElement("div");
        document.body.appendChild(container);
        container.innerHTML = ReactDOMServer.renderToString(ui);

        const el = screen.getByTestId("output");
        expect(el.style.getPropertyValue(styles.tokens.xxsEnd)).toBe("");
        expect(el.style.getPropertyValue(styles.tokens.xxsStart)).toBe("");
        expect(el.getAttribute(styles.tokens.xxsStartAttr)).toBe("1");
        expect(el.getAttribute(styles.tokens.xxsEndAttr)).toBe("-1");

        // hydrate the component
        render(ui, { hydrate: true, container });

        expect(el.style.getPropertyValue(styles.tokens.xxsEnd)).toBe("-1");
        expect(el.style.getPropertyValue(styles.tokens.xxsStart)).toBe("1");
        expect(el.getAttribute(styles.tokens.xxsEndAttr)).toBe(null);
        expect(el.getAttribute(styles.tokens.xxsStartAttr)).toBe(null);
    });
});
