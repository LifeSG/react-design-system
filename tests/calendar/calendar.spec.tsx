import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { Calendar } from "../../src";

describe("Calendar", () => {
    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date("2024-02-01T12:00:00"));
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    describe("single variant", () => {
        it("renders without error", () => {
            render(<Calendar />);

            expect(screen.getByTestId("calendar-content")).toBeInTheDocument();
        });

        it("renders the selected date when value prop is provided on single variant", () => {
            render(<Calendar value="2024-02-15" />);

            expect(
                screen.getByRole("gridcell", {
                    name: /15 February 2024 Thursday, Available/i,
                })
            ).toHaveAttribute("aria-selected", "true");
        });

        it("calls onChange with the selected date string when a date is selected on single variant", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onChange = jest.fn();

            render(<Calendar onChange={onChange} />);

            await user.click(
                screen.getByRole("gridcell", {
                    name: /15 February 2024 Thursday, Available/i,
                })
            );

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith("2024-02-15");
        });

        it("updates rendered selection when controlled value prop changes on single variant", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            const TestComponent = () => {
                const [value, setValue] = useState<string | undefined>(undefined);

                return (
                    <>
                        <button onClick={() => setValue("2024-02-15")}>
                            Set date
                        </button>
                        <Calendar value={value} />
                    </>
                );
            };

            render(<TestComponent />);

            expect(
                screen.getByRole("gridcell", {
                    name: /15 February 2024 Thursday, Available/i,
                })
            ).toHaveAttribute("aria-selected", "false");

            await user.click(screen.getByRole("button", { name: "Set date" }));

            expect(
                screen.getByRole("gridcell", {
                    name: /15 February 2024 Thursday, Available/i,
                })
            ).toHaveAttribute("aria-selected", "true");
        });
    });

    describe("multi variant", () => {
        it("calls onChange with added date when selecting an unselected date", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onChange = jest.fn();

            render(<Calendar variant="multi" onChange={onChange} />);

            await user.click(
                screen.getByRole("gridcell", {
                    name: /15 February 2024 Thursday, Available/i,
                })
            );

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith(["2024-02-15"]);
        });

        it("calls onChange with removed date when selecting an existing date", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onChange = jest.fn();

            render(
                <Calendar
                    variant="multi"
                    values={["2024-02-15"]}
                    onChange={onChange}
                />
            );

            await user.click(
                screen.getByRole("gridcell", {
                    name: /15 February 2024 Thursday, Available/i,
                })
            );

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith([]);
        });

        it("uses values prop to control initial multi-selection", () => {
            render(<Calendar variant="multi" values={["2024-02-15"]} />);

            expect(
                screen.getByRole("gridcell", {
                    name: /15 February 2024 Thursday, Available/i,
                })
            ).toHaveAttribute("aria-selected", "true");
        });

        it("updates rendered selection when controlled values prop changes", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            const TestComponent = () => {
                const [values, setValues] = useState<string[]>([]);

                return (
                    <>
                        <button onClick={() => setValues(["2024-02-15"])}>
                            Set date
                        </button>
                        <Calendar variant="multi" values={values} />
                    </>
                );
            };

            render(<TestComponent />);

            expect(
                screen.getByRole("gridcell", {
                    name: /15 February 2024 Thursday, Available/i,
                })
            ).toHaveAttribute("aria-selected", "false");

            await user.click(screen.getByRole("button", { name: "Set date" }));

            expect(
                screen.getByRole("gridcell", {
                    name: /15 February 2024 Thursday, Available/i,
                })
            ).toHaveAttribute("aria-selected", "true");
        });

        it("updates rendered selection when a selected date is deselected", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            const TestComponent = () => {
                const [values, setValues] = useState<string[]>(["2024-02-15"]);

                return (
                    <>
                        <button onClick={() => setValues([])}>Clear dates</button>
                        <Calendar variant="multi" values={values} />
                    </>
                );
            };

            render(<TestComponent />);

            expect(
                screen.getByRole("gridcell", {
                    name: /15 February 2024 Thursday, Available/i,
                })
            ).toHaveAttribute("aria-selected", "true");

            await user.click(screen.getByRole("button", { name: "Clear dates" }));

            expect(
                screen.getByRole("gridcell", {
                    name: /15 February 2024 Thursday, Available/i,
                })
            ).toHaveAttribute("aria-selected", "false");
        });
    });
});
