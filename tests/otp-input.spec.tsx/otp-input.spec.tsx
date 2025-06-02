import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OtpInput } from "src/otp-input";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("OtpInput", () => {
    beforeEach(() => {
        jest.useFakeTimers();
        jest.clearAllMocks();
    });

    it("should render default component", () => {
        render(<OtpInput numOfInput={3} cooldownDuration={10} />);

        expect(screen.queryAllByRole("textbox")).toHaveLength(3);
        expect(screen.queryByLabelText("1st digit")).toHaveValue("");
        expect(screen.queryByLabelText("2nd digit")).toHaveValue("");
        expect(screen.queryByLabelText("3rd digit")).toHaveValue("");

        expect(
            screen.getByRole("button", { name: "Resend OTP in 10 seconds" })
        ).toBeInTheDocument();
    });

    it("should render component with value", () => {
        render(
            <OtpInput
                numOfInput={3}
                cooldownDuration={10}
                value={["1", "2", "3"]}
            />
        );

        expect(screen.queryAllByRole("textbox")).toHaveLength(3);
        expect(screen.queryByLabelText("1st digit")).toHaveValue("1");
        expect(screen.queryByLabelText("2nd digit")).toHaveValue("2");
        expect(screen.queryByLabelText("3rd digit")).toHaveValue("3");
    });

    it("should invoke onChange with the correct value", () => {
        const onChange = jest.fn();
        render(
            <OtpInput
                numOfInput={3}
                cooldownDuration={10}
                onChange={onChange}
            />
        );

        fireEvent.change(screen.getByLabelText("1st digit"), {
            target: { value: "8" },
        });

        expect(onChange).toHaveBeenCalledWith(["8", "", ""]);

        fireEvent.change(screen.getByLabelText("2nd digit"), {
            target: { value: "1" },
        });

        expect(onChange).toHaveBeenCalledWith(["8", "1", ""]);
    });

    it("should handle countdown behaviour", () => {
        const onCooldownStart = jest.fn();
        const onCooldownEnd = jest.fn();
        render(
            <OtpInput
                numOfInput={3}
                cooldownDuration={10}
                onCooldownStart={onCooldownStart}
                onCooldownEnd={onCooldownEnd}
            />
        );

        expect(
            screen.getByRole("button", { name: "Resend OTP in 10 seconds" })
        ).toBeDisabled();
        expect(onCooldownStart).toHaveBeenCalled();

        act(() => jest.advanceTimersByTime(1000));

        expect(
            screen.getByRole("button", { name: "Resend OTP in 9 seconds" })
        ).toBeDisabled();

        act(() => jest.advanceTimersByTime(10000));

        expect(
            screen.getByRole("button", { name: "Resend OTP" })
        ).toBeEnabled();
        expect(onCooldownEnd).toHaveBeenCalled();
    });

    it("should support keyboard navigation", async () => {
        const user = userEvent.setup({ delay: null });

        render(<OtpInput numOfInput={3} cooldownDuration={10} />);

        await user.click(screen.getByLabelText("1st digit"));

        expect(screen.getByLabelText("1st digit")).toHaveFocus();

        await user.keyboard("{ArrowRight}{ArrowRight}");

        expect(screen.getByLabelText("3rd digit")).toHaveFocus();

        await user.keyboard("{ArrowRight}");

        expect(screen.getByLabelText("3rd digit")).toHaveFocus();

        await user.keyboard("{ArrowLeft}{ArrowLeft}");

        expect(screen.getByLabelText("1st digit")).toHaveFocus();

        await user.keyboard("{ArrowLeft}");

        expect(screen.getByLabelText("1st digit")).toHaveFocus();
    });
});
