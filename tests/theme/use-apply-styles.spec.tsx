import { useRef } from "react";
import { act, render } from "@testing-library/react";
import { ApplyStyleMap, useApplyStyle } from "../../src/theme/utils";

const TestComponent = ({
    styles,
    props,
}: {
    styles: ApplyStyleMap<any>;
    props: any;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useApplyStyle(ref, styles, props);

    return <div data-testid="target" ref={ref} />;
};

describe("useApplyStyle Hooks", () => {
    it("applies string style value", () => {
        const { getByTestId } = render(
            <TestComponent styles={{ background: "red" }} props={{}} />
        );

        const element = getByTestId("target");

        expect(element.style.background).toBe("red");
    });

    it("applies number style value", () => {
        const { getByTestId } = render(
            <TestComponent styles={{ opacity: 0.5 }} props={{}} />
        );

        const element = getByTestId("target");

        expect(element.style.opacity).toBe("0.5");
    });

    it("applies function style value using props", () => {
        const { getByTestId } = render(
            <TestComponent
                styles={{
                    background: (props) => (props.active ? "blue" : "gray"),
                }}
                props={{ active: true }}
            />
        );

        const element = getByTestId("target");

        expect(element.style.background).toBe("blue");
    });

    it("updates style when props change", () => {
        const { getByTestId, rerender } = render(
            <TestComponent
                styles={{
                    background: (props) => (props.active ? "blue" : "gray"),
                }}
                props={{ active: false }}
            />
        );

        const element = getByTestId("target");

        expect(element.style.background).toBe("gray");

        rerender(
            <TestComponent
                styles={{
                    background: (props) => (props.active ? "blue" : "gray"),
                }}
                props={{ active: true }}
            />
        );

        expect(element.style.background).toBe("blue");
    });

    it("removes style when value is null", () => {
        const { getByTestId, rerender } = render(
            <TestComponent styles={{ background: "red" }} props={{}} />
        );

        const element = getByTestId("target");

        expect(element.style.background).toBe("red");

        act(() => {
            rerender(
                <TestComponent styles={{ background: null }} props={{}} />
            );
        });

        expect(element.style.getPropertyValue("background")).toBe("");
    });

    it("applies CSS variable", () => {
        const { getByTestId } = render(
            <TestComponent styles={{ "--block-bg": "green" }} props={{}} />
        );

        const element = getByTestId("target");

        expect(element.style.getPropertyValue("--block-bg")).toBe("green");
    });

    it("removes CSS variable when null", () => {
        const { getByTestId, rerender } = render(
            <TestComponent styles={{ "--block-bg": "green" }} props={{}} />
        );

        const element = getByTestId("target");

        expect(element.style.getPropertyValue("--block-bg")).toBe("green");

        rerender(<TestComponent styles={{ "--block-bg": null }} props={{}} />);

        expect(element.style.getPropertyValue("--block-bg")).toBe("");
    });

    it("does not crash when ref is null", () => {
        const BrokenComponent = () => {
            useApplyStyle(null as any, { background: "red" }, {});
            return null;
        };

        expect(() => render(<BrokenComponent />)).not.toThrow();
    });
});
