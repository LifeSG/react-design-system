import { useRef } from "react";
import { act, render } from "@testing-library/react";
import { ApplyStyleMap, useApplyStyle } from "src/theme/utils";

const TestComponent = ({ styles }: { styles: ApplyStyleMap }) => {
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

    it("applies number style value", () => {
        const { getByTestId } = render(
            <TestComponent styles={{ opacity: 0.5 }} />
        );

        const element = getByTestId("target");

        expect(element.style.opacity).toBe("0.5");
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
});
