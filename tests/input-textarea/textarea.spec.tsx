import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "src/input-textarea";

describe("Textarea", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        globalThis.requestAnimationFrame = (callback: FrameRequestCallback) => {
            callback(0);
            return 0;
        };
    });

    it("should render default component", () => {
        render(<Textarea data-testid="textarea" />);

        expect(screen.getByTestId("textarea")).toHaveValue("");
        expect(screen.queryByTestId("counter-label")).not.toBeInTheDocument();
    });

    it("should render counter label when maxLength is provided", () => {
        render(
            <Textarea data-testid="textarea" maxLength={100} value="hello" />
        );

        expect(screen.getByTestId("textarea")).toHaveValue("hello");
        expect(screen.getByTestId("counter-label")).toHaveTextContent(
            "95 characters left"
        );
    });

    it("should render the correct counter label when maxLength is almost reached", () => {
        render(<Textarea data-testid="textarea" maxLength={6} value="hello" />);

        expect(screen.getByTestId("textarea")).toHaveValue("hello");
        expect(screen.getByTestId("counter-label")).toHaveTextContent(
            "1 character left"
        );
    });

    it("should render custom counter label", () => {
        const renderCustomCounter = jest.fn((maxLength, currentValueLength) => (
            <span>
                {currentValueLength}/{maxLength}
            </span>
        ));

        render(
            <Textarea
                data-testid="textarea"
                maxLength={10}
                value="test"
                renderCustomCounter={renderCustomCounter}
            />
        );

        expect(renderCustomCounter).toHaveBeenCalledWith(10, 4);
        expect(screen.getByText("4/10")).toBeInTheDocument();
    });

    it("should transform value before updating", async () => {
        const handleChange = jest.fn();
        const user = userEvent.setup();

        render(
            <Textarea
                data-testid="textarea"
                onChange={handleChange}
                transformValue={(value) =>
                    value.replaceAll(/[^A-Za-z0-9 ]/g, "")
                }
            />
        );

        const textarea = screen.getByTestId("textarea");

        await user.type(textarea, "hello!@#");

        expect(textarea).toHaveValue("hello");
        expect(handleChange).toHaveBeenCalled();
        expect(handleChange.mock.calls.at(-1)?.[0].target.value).toBe("hello");
    });

    it("should preserve prefix in displayed value and emit value without prefix", async () => {
        const handleChange = jest.fn();
        const user = userEvent.setup();

        render(
            <Textarea
                data-testid="textarea"
                prefix="prefix: "
                onChange={handleChange}
            />
        );

        const textarea = screen.getByTestId("textarea");

        expect(textarea).toHaveValue("prefix: ");

        await user.click(textarea);
        await user.type(textarea, "hello");

        expect(textarea).toHaveValue("prefix: hello");
        expect(handleChange).toHaveBeenCalledTimes(5);
        expect(handleChange.mock.calls[4][0].target.value).toBe("hello");
    });

    it("should prevent backspace when cursor is inside prefix", () => {
        const handleChange = jest.fn();

        render(
            <Textarea
                data-testid="textarea"
                prefix="prefix: "
                onChange={handleChange}
            />
        );

        const textarea = screen.getByTestId("textarea");
        const event = createEvent.keyDown(textarea, {
            key: "Backspace",
        });

        Object.defineProperty(textarea, "selectionStart", {
            configurable: true,
            value: 8,
        });

        const preventDefaultSpy = jest.spyOn(event, "preventDefault");

        fireEvent(textarea, event);

        expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
        expect(handleChange).not.toHaveBeenCalled();
    });

    it("should prevent left arrow when cursor is inside prefix", () => {
        const handleChange = jest.fn();

        render(
            <Textarea
                data-testid="textarea"
                prefix="prefix: "
                onChange={handleChange}
            />
        );

        const textarea = screen.getByTestId("textarea");
        const event = createEvent.keyDown(textarea, {
            key: "ArrowLeft",
        });

        Object.defineProperty(textarea, "selectionStart", {
            configurable: true,
            value: 8,
        });

        const preventDefaultSpy = jest.spyOn(event, "preventDefault");

        fireEvent(textarea, event);

        expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
        expect(handleChange).not.toHaveBeenCalled();
    });

    it("should move cursor to the end of prefix when home key is pressed", () => {
        const handleChange = jest.fn();

        render(
            <Textarea
                data-testid="textarea"
                prefix="prefix: "
                onChange={handleChange}
            />
        );

        const textarea = screen.getByTestId("textarea") as HTMLTextAreaElement;
        const event = createEvent.keyDown(textarea, {
            key: "Home",
        });

        Object.defineProperty(textarea, "selectionStart", {
            configurable: true,
            value: 12,
        });

        const preventDefaultSpy = jest.spyOn(event, "preventDefault");
        const setSelectionRangeSpy = jest.spyOn(textarea, "setSelectionRange");

        fireEvent(textarea, event);

        expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
        expect(setSelectionRangeSpy).toHaveBeenCalledWith(8, 8);
        expect(handleChange).not.toHaveBeenCalled();
    });

    it("should allow navigation keys when cursor is outside prefix", () => {
        const handleChange = jest.fn();

        render(
            <Textarea
                data-testid="textarea"
                prefix="prefix: "
                onChange={handleChange}
            />
        );

        const textarea = screen.getByTestId("textarea");
        const backspaceEvent = createEvent.keyDown(textarea, {
            key: "Backspace",
        });
        const arrowLeftEvent = createEvent.keyDown(textarea, {
            key: "ArrowLeft",
        });

        Object.defineProperty(textarea, "selectionStart", {
            configurable: true,
            value: 10,
        });

        const backspacePreventDefaultSpy = jest.spyOn(
            backspaceEvent,
            "preventDefault"
        );
        const arrowLeftPreventDefaultSpy = jest.spyOn(
            arrowLeftEvent,
            "preventDefault"
        );

        fireEvent(textarea, backspaceEvent);
        fireEvent(textarea, arrowLeftEvent);

        expect(backspacePreventDefaultSpy).not.toHaveBeenCalled();
        expect(arrowLeftPreventDefaultSpy).not.toHaveBeenCalled();
        expect(handleChange).not.toHaveBeenCalled();
    });
});
