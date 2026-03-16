import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Timepicker } from "src/timepicker/timepicker";

import { waitForElementToBeRemoved } from "../common/waitForElementRemoved";

describe("Timepicker (Floating UI)", () => {
    beforeEach(() => {
        jest.resetAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    const ID = "tp";
    const selectorTestId = `${ID}-timepicker-selector`;
    const dropdownTestId = `${ID}-timepicker-dropdown`;
    const hourInputId = `${ID}-hour-input`;
    const minuteInputId = `${ID}-minute-input`;
    const confirmBtnId = `${ID}-confirm-button`;
    const cancelBtnId = `${ID}-cancel-button`;

    const openDropdown = async (user: ReturnType<typeof userEvent.setup>) => {
        await user.click(screen.getByTestId(selectorTestId));
        await waitFor(() =>
            expect(screen.getByTestId(dropdownTestId)).toBeVisible()
        );
    };

    describe("selection behaviour", () => {
        it("should call onChange and refocus selector when clicking Done", async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();
            const onBlur = jest.fn();

            render(
                <Timepicker
                    id={ID}
                    format="12hr"
                    onChange={onChange}
                    onBlur={onBlur}
                />
            );

            await openDropdown(user);

            const hour = screen.getByTestId(hourInputId);
            const minute = screen.getByTestId(minuteInputId);

            await user.clear(hour);
            await user.type(hour, "1");

            await user.clear(minute);
            await user.type(minute, "05");

            await user.click(screen.getByLabelText("PM"));
            await user.click(screen.getByTestId(confirmBtnId));

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith("01:05PM");
            expect(onBlur).toHaveBeenCalledTimes(0);

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(dropdownTestId)
            );

            expect(screen.getByTestId(selectorTestId)).toHaveFocus();
        });

        it("should NOT call onChange and should refocus selector when clicking Cancel", async () => {
            const user = userEvent.setup();
            const onChange = jest.fn();
            const onBlur = jest.fn();

            render(
                <Timepicker
                    id={ID}
                    format="12hr"
                    value="3:00pm"
                    onChange={onChange}
                    onBlur={onBlur}
                />
            );

            await openDropdown(user);

            const hour = screen.getByTestId(hourInputId);
            await user.clear(hour);
            await user.type(hour, "9");

            await user.click(screen.getByTestId(cancelBtnId));

            expect(onChange).toHaveBeenCalledTimes(0);
            expect(onBlur).toHaveBeenCalledTimes(0);

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(dropdownTestId)
            );

            expect(screen.getByTestId(selectorTestId)).toHaveFocus();
        });

        it("should disable Done when hour or minute is empty", async () => {
            const user = userEvent.setup();

            render(<Timepicker id={ID} />);

            await openDropdown(user);

            const confirm = screen.getByTestId(confirmBtnId);
            expect(confirm).toBeDisabled();

            await user.type(screen.getByTestId(hourInputId), "9");
            expect(confirm).toBeDisabled();

            await user.type(screen.getByTestId(minuteInputId), "00");
            expect(confirm).not.toBeDisabled();
        });
    });

    describe("focus/blur behaviour", () => {
        it("should call onFocus when selector is focused (opens dropdown)", async () => {
            const user = userEvent.setup();
            const onFocus = jest.fn();

            render(<Timepicker id={ID} onFocus={onFocus} />);

            await user.click(screen.getByTestId(selectorTestId));
            expect(onFocus).toHaveBeenCalledTimes(1);

            await waitFor(() =>
                expect(screen.getByTestId(dropdownTestId)).toBeVisible()
            );
        });

        it("should dismiss dropdown and call onBlur on outside click", async () => {
            const user = userEvent.setup();
            const onBlur = jest.fn();

            render(<Timepicker id={ID} onBlur={onBlur} />);

            await openDropdown(user);
            expect(onBlur).toHaveBeenCalledTimes(0);

            await act(async () => {
                await user.click(document.body);
            });

            expect(onBlur).toHaveBeenCalledTimes(1);

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(dropdownTestId)
            );
        });

        it("should dismiss dropdown via Esc", async () => {
            const user = userEvent.setup();
            const onBlur = jest.fn();

            render(<Timepicker id={ID} onBlur={onBlur} />);

            await openDropdown(user);

            await user.keyboard("{Escape}");

            expect(onBlur).toHaveBeenCalledTimes(0);

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(dropdownTestId)
            );

            expect(screen.getByTestId(selectorTestId)).toHaveFocus();

            await act(async () => {
                await user.click(document.body);
            });

            expect(onBlur).toHaveBeenCalledTimes(1);
            expect(screen.getByTestId(selectorTestId)).not.toHaveFocus();
        });
    });

    describe("readonly/disabled behaviour", () => {
        it("should not open when disabled", async () => {
            const user = userEvent.setup();
            render(<Timepicker id={ID} disabled />);

            await user.click(screen.getByTestId(selectorTestId));
            expect(
                screen.queryByTestId(dropdownTestId)
            ).not.toBeInTheDocument();
        });

        it("should not open when readOnly", async () => {
            const user = userEvent.setup();
            render(<Timepicker id={ID} readOnly />);

            await user.click(screen.getByTestId(selectorTestId));
            expect(
                screen.queryByTestId(dropdownTestId)
            ).not.toBeInTheDocument();
        });
    });
});
