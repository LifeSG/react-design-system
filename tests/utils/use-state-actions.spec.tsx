import { act, fireEvent, render, screen } from "@testing-library/react";
import { useStateActions } from "../../src/util/use-state-actions";

describe("useStateActions", () => {
    it("should update state correctly when an action is called", () => {
        render(<TestComponent />);

        expect(screen.queryByTestId("test")).toHaveTextContent("1");

        act(() => {
            fireEvent.click(screen.getByTestId("increment"));
        });

        expect(screen.queryByTestId("test")).toHaveTextContent("2");

        act(() => {
            fireEvent.click(screen.getByTestId("multiply"));
        });

        expect(screen.queryByTestId("test")).toHaveTextContent("6");
    });
});

const TestComponent = () => {
    const [state, actions] = useStateActions({
        initialState: { count: 1 },
        reducers: {
            increment: (state) => ({
                ...state,
                count: state.count + 1,
            }),
            multiplyBy: (state, multiplier: number) => ({
                ...state,
                count: state.count * multiplier,
            }),
        },
    });

    return (
        <div>
            <div data-testid="test">{state.count}</div>
            <button data-testid="increment" onClick={() => actions.increment()}>
                increment
            </button>
            <button
                data-testid="multiply"
                onClick={() => actions.multiplyBy(3)}
            >
                multiply
            </button>
        </div>
    );
};
