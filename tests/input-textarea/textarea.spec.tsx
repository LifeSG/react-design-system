import { render, screen } from "@testing-library/react";
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

    it("should render custom counter label", async () => {
        const user = userEvent.setup();
        const renderCustomCounter = jest.fn((maxLength, currentValueLength) => (
            <span>
                {currentValueLength}/{maxLength}
            </span>
        ));

        render(
            <Textarea
                data-testid="textarea"
                maxLength={10}
                renderCustomCounter={renderCustomCounter}
            />
        );

        expect(screen.getByText("0/10")).toBeInTheDocument();

        await user.type(screen.getByTestId("textarea"), "test");

        expect(renderCustomCounter).toHaveBeenLastCalledWith(10, 4);
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
        expect(handleChange).toHaveBeenLastCalledWith(
            expect.objectContaining({
                target: expect.objectContaining({
                    value: "hello",
                }),
            })
        );
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
        expect(handleChange).toHaveBeenLastCalledWith(
            expect.objectContaining({
                target: expect.objectContaining({
                    value: "hello",
                }),
            })
        );
    });

    it("should prevent backspace when cursor is inside prefix", async () => {
        const handleChange = jest.fn();
        const user = userEvent.setup();

        render(
            <Textarea
                data-testid="textarea"
                prefix="prefix: "
                onChange={handleChange}
            />
        );

        const textarea: HTMLTextAreaElement = screen.getByTestId("textarea");

        textarea.setSelectionRange(4, 4);
        await user.type(textarea, "{backspace}");

        expect(textarea).toHaveValue("prefix: ");
        expect(handleChange).not.toHaveBeenCalled();
    });

    it("should prevent left arrow when cursor is inside prefix", async () => {
        const handleChange = jest.fn();
        const user = userEvent.setup();

        render(
            <Textarea
                data-testid="textarea"
                prefix="prefix: "
                onChange={handleChange}
            />
        );

        const textarea: HTMLTextAreaElement = screen.getByTestId("textarea");

        textarea.setSelectionRange(4, 4);

        await user.keyboard("{arrowleft}");

        expect(textarea).toHaveValue("prefix: ");
        expect(textarea.selectionStart).toBe(4);
        expect(textarea.selectionEnd).toBe(4);
        expect(handleChange).not.toHaveBeenCalled();
    });

    it("should move cursor to the end of prefix when home key is pressed", async () => {
        const handleChange = jest.fn();
        const user = userEvent.setup();

        render(
            <Textarea
                data-testid="textarea"
                prefix="prefix: "
                onChange={handleChange}
            />
        );

        const textarea = screen.getByTestId("textarea") as HTMLTextAreaElement;

        textarea.setSelectionRange(4, 4);

        await user.type(textarea, "{home}");

        expect(textarea).toHaveValue("prefix: ");
        expect(textarea.selectionStart).toBe(8);
        expect(textarea.selectionEnd).toBe(8);
        expect(handleChange).not.toHaveBeenCalled();
    });

    it("should allow navigation keys when cursor is outside prefix", async () => {
        const handleChange = jest.fn();
        const user = userEvent.setup();

        render(
            <Textarea
                data-testid="textarea"
                prefix="prefix: "
                onChange={handleChange}
                value={"Some text"}
            />
        );

        const textarea: HTMLTextAreaElement = screen.getByTestId("textarea");
        textarea.setSelectionRange(10, 10);

        await user.type(textarea, "{backspace}");

        expect(textarea).toHaveValue("prefix: Some tex");
        expect(textarea.selectionStart).toBe(16);
        expect(textarea.selectionEnd).toBe(textarea.selectionStart);

        await user.keyboard("{arrowleft}");

        expect(textarea.selectionStart).toBe(15);

        expect(handleChange).toHaveBeenCalled();
        expect(handleChange).toHaveBeenLastCalledWith(
            expect.objectContaining({
                target: expect.objectContaining({
                    value: "Some tex",
                }),
            })
        );
    });
});
