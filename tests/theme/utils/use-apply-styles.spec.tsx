import { act, render } from "@testing-library/react";
import { useRef } from "react";
import type { ApplyStyleMap } from "src/theme/utils";
import { useApplyStyle } from "src/theme/utils";

const TestComponent = ({ styles }: { styles: ApplyStyleMap | undefined }) => {
    const ref = useRef<HTMLDivElement>(null);

    useApplyStyle(ref, styles);

    return <div data-testid="target" ref={ref} />;
};

describe("useApplyStyle Hooks", () => {
    it("applies string style value", () => {
        const { getByTestId } = render(
            <TestComponent styles={{ background: "red" }} />
        );

        const element = getByTestId("target");

        expect(element.style.background).toBe("red");
    });

    it("applies number style value without unit for unitless property", () => {
        const { getByTestId } = render(
            <TestComponent styles={{ opacity: 0.5 }} />
        );

        const element = getByTestId("target");

        expect(element.style.opacity).toBe("0.5");
    });

    it("applies number style value with px for property that requires units", () => {
        const { getByTestId } = render(
            <TestComponent styles={{ width: 100 }} />
        );

        const element = getByTestId("target");

        expect(element.style.width).toBe("100px");
    });

    it("normalises properties to the expected CSS equivalent", () => {
        const { getByTestId } = render(
            <TestComponent
                styles={{
                    backgroundColor: "red",
                    marginBottom: 10,
                    WebkitLineClamp: 1, // vendor prefix in uppercase
                    webkitTextFillColor: "blue", // vendor prefix in lowercase
                }}
            />
        );

        const element = getByTestId("target");

        expect(element.style.backgroundColor).toBe("red");
        expect(element.style.marginBottom).toBe("10px");
        expect(element.style.webkitLineClamp).toBe("1");
        expect(element.style.webkitTextFillColor).toBe("blue");
    });

    it("removes style when value is null", () => {
        const { getByTestId, rerender } = render(
            <TestComponent styles={{ background: "red" }} />
        );

        const element = getByTestId("target");

        expect(element.style.background).toBe("red");

        act(() => {
            rerender(<TestComponent styles={{ background: null }} />);
        });

        expect(element.style.getPropertyValue("background")).toBe("");
    });

    it("applies CSS variable", () => {
        const { getByTestId } = render(
            <TestComponent styles={{ "--fds-colour-bg": "green" }} />
        );

        const element = getByTestId("target");

        expect(element.style.getPropertyValue("--fds-colour-bg")).toBe("green");
    });

    it("removes CSS variable when undefined", () => {
        const { getByTestId, rerender } = render(
            <TestComponent styles={{ "--fds-colour-bg": "green" }} />
        );

        const element = getByTestId("target");

        expect(element.style.getPropertyValue("--fds-colour-bg")).toBe("green");

        rerender(<TestComponent styles={{ "--fds-colour-bg": undefined }} />);

        expect(element.style.getPropertyValue("--fds-colour-bg")).toBe("");
    });

    it("does not crash when ref is null", () => {
        const BrokenComponent = () => {
            useApplyStyle(null as any, { background: "red" });
            return null;
        };

        expect(() => render(<BrokenComponent />)).not.toThrow();
    });

    it("does not crash when style not provided", () => {
        const { getByTestId } = render(<TestComponent styles={undefined} />);

        const element = getByTestId("target");

        expect(element).toBeInTheDocument();
    });
});
