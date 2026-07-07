import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentProps } from "react";
import { TimepickerDropdown } from "src/shared/timepicker-dropdown/timepicker-dropdown";

describe("TimepickerDropdown", () => {
    const ID = "timepicker-dropdown";
    const getHourInput = () => screen.getByLabelText("hour");
    const getMinuteInput = () => screen.getByLabelText("minute");
    const getConfirmButton = () => screen.getByRole("button", { name: "Done" });
    const getCancelButton = () =>
        screen.getByRole("button", { name: "Cancel" });
    const getIncreaseHourButton = () => screen.getByLabelText("increase hour");
    const getDecreaseMinuteButton = () =>
        screen.getByLabelText("decrease minute");

    const renderDropdown = (
        props?: Partial<ComponentProps<typeof TimepickerDropdown>>
    ) => {
        return render(
            <TimepickerDropdown
                id={ID}
                show
                format="12hr"
                value=""
                onChange={jest.fn()}
                onCancel={jest.fn()}
                {...props}
            />
        );
    };

    it("should focus hour input when shown", async () => {
        renderDropdown();

        await waitFor(() => {
            expect(getHourInput()).toHaveFocus();
        });
    });

    it("should populate hour and minute inputs from a prefilled 12hr value", () => {
        renderDropdown({ format: "12hr", value: "03:15AM" });

        expect(getHourInput()).toHaveValue(3);
        expect(getMinuteInput()).toHaveValue(15);
        expect(screen.getByLabelText("AM")).toBeChecked();
    });

    it("should populate hour and minute inputs from a prefilled 24hr value", () => {
        renderDropdown({ format: "24hr", value: "13:45" });

        expect(getHourInput()).toHaveValue(1);
        expect(getMinuteInput()).toHaveValue(45);
        expect(screen.getByLabelText("PM")).toBeChecked();
    });

    it("should call onChange with selected 12hr value when Done is clicked", async () => {
        const user = userEvent.setup();
        const onChange = jest.fn();

        renderDropdown({ format: "12hr", onChange });

        const hourInput = getHourInput();
        const minuteInput = getMinuteInput();

        await user.clear(hourInput);
        await user.type(hourInput, "13");
        await user.clear(minuteInput);
        await user.type(minuteInput, "05");

        await user.click(getConfirmButton());

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith("01:05AM");
    });

    it("should call onChange with selected 24hr value when Done is clicked", async () => {
        const user = userEvent.setup();
        const onChange = jest.fn();

        renderDropdown({ format: "24hr", onChange });

        const hourInput = getHourInput();
        const minuteInput = getMinuteInput();

        await user.clear(hourInput);
        await user.type(hourInput, "1");
        await user.clear(minuteInput);
        await user.type(minuteInput, "05");

        const pmToggle = screen.getByLabelText("PM");
        await user.click(pmToggle);
        expect(pmToggle).toBeChecked();
        await user.click(getConfirmButton());

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith("13:05");
    });

    it("should disable Done when hour or minute is empty", async () => {
        const user = userEvent.setup();

        renderDropdown({ value: undefined });

        const confirmBtn = getConfirmButton();
        const hourInput = getHourInput();
        const minuteInput = getMinuteInput();

        expect(confirmBtn).toBeDisabled();

        await user.type(hourInput, "9");
        expect(confirmBtn).toBeDisabled();

        await user.type(minuteInput, "00");
        expect(confirmBtn).not.toBeDisabled();
    });

    it("should prevent special characters in time inputs", async () => {
        const user = userEvent.setup();

        renderDropdown({ value: "03:15AM" });

        const hourInput = getHourInput();
        const minuteInput = getMinuteInput();

        await user.click(hourInput);
        await user.keyboard("@.-");
        expect(hourInput).toHaveValue(3);

        await user.click(minuteInput);
        await user.keyboard("-1");
        expect(minuteInput).toHaveValue(1);
    });

    it("should keep hour value on blur when hour is valid", async () => {
        const user = userEvent.setup();
        const onChange = jest.fn();

        renderDropdown({ value: "03:00AM", onChange });

        const hourInput = getHourInput();

        await user.clear(hourInput);
        await user.type(hourInput, "7");
        await user.tab();
        await user.click(getConfirmButton());

        expect(onChange).toHaveBeenCalledWith("07:00AM");
    });

    it("should reset hour to initial value when blurred hour is out of range", async () => {
        const user = userEvent.setup();

        renderDropdown({ value: "03:00AM" });

        const hourInput = getHourInput();

        await user.clear(hourInput);
        await user.type(hourInput, "99");
        await user.tab();

        expect(hourInput).toHaveValue(3);
    });

    it("should keep minute value on blur when minute is valid", async () => {
        const user = userEvent.setup();
        const onChange = jest.fn();

        renderDropdown({ value: "03:00AM", onChange });

        const minuteInput = getMinuteInput();

        await user.clear(minuteInput);
        await user.type(minuteInput, "7");
        await user.tab();
        await user.click(getConfirmButton());

        expect(onChange).toHaveBeenCalledWith("03:07AM");
    });

    it("should reset minute to initial value when blurred minute is out of range", async () => {
        const user = userEvent.setup();

        renderDropdown({ value: "03:15AM" });

        const minuteInput = getMinuteInput();

        await user.clear(minuteInput);
        await user.type(minuteInput, "99");
        await user.tab();

        expect(minuteInput).toHaveValue(15);
    });

    it("should update hour and minute with increment/decrement controls", async () => {
        const user = userEvent.setup();

        renderDropdown({ value: "12:00AM" });

        const hourInput = getHourInput();
        const minuteInput = getMinuteInput();

        await user.click(getIncreaseHourButton());
        await user.click(getDecreaseMinuteButton());

        expect(hourInput).toHaveValue(1);
        expect(minuteInput).toHaveValue(55);
    });

    it("should call onCancel when Cancel is clicked", async () => {
        const user = userEvent.setup();
        const onCancel = jest.fn();

        renderDropdown({ onCancel });

        await user.click(getCancelButton());

        expect(onCancel).toHaveBeenCalledTimes(1);
    });
});
