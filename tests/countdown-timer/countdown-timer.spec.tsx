import { act, render, screen } from "@testing-library/react";
import { CountdownTimer } from "src/countdown-timer";
import { InViewHookResponse, useInView } from "react-intersection-observer";

jest.mock("react-intersection-observer");

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("CountdownTimer", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();

        jest.mocked(useInView).mockReturnValue({
            inView: true,
        } as InViewHookResponse);
    });

    it.each`
        seconds | expectedDisplay
        ${0}    | ${"0 mins 00 secs"}
        ${1}    | ${"0 mins 01 sec"}
        ${60}   | ${"1 min 00 secs"}
        ${120}  | ${"2 mins 00 secs"}
        ${155}  | ${"2 mins 35 secs"}
    `(
        "should render the component with the remaining time left",
        ({ seconds, expectedDisplay }) => {
            render(<CountdownTimer show timer={seconds} />);

            expect(screen.getByText(expectedDisplay)).toBeInTheDocument();
        }
    );

    it("should invoke event callbacks correctly", async () => {
        const mockOnFinish = jest.fn();
        const mockOnNotify = jest.fn();
        const mockOnTick = jest.fn();

        render(
            <CountdownTimer
                show
                timer={5}
                notifyTimer={3}
                onFinish={mockOnFinish}
                onNotify={mockOnNotify}
                onTick={mockOnTick}
            />
        );

        // start of countdown
        await act(async () => {
            jest.advanceTimersByTime(1000);
        });

        expect(mockOnTick).not.toHaveBeenCalled();
        expect(mockOnNotify).not.toHaveBeenCalled();
        expect(mockOnFinish).not.toHaveBeenCalled();

        // notifyTimer reached
        await act(async () => {
            jest.advanceTimersByTime(1000);
        });

        expect(mockOnTick).toHaveBeenCalledWith(3);
        expect(mockOnNotify).toHaveBeenCalledTimes(1);
        expect(mockOnFinish).not.toHaveBeenCalled();

        // after notifyTimer reached
        await act(async () => {
            jest.advanceTimersByTime(1000);
        });

        expect(mockOnTick).toHaveBeenCalledWith(2);
        expect(mockOnNotify).toHaveBeenCalledTimes(1);
        expect(mockOnFinish).not.toHaveBeenCalled();

        // end of countdown
        await act(async () => {
            jest.advanceTimersByTime(2000);
        });

        expect(mockOnTick).toHaveBeenCalledWith(2);
        expect(mockOnNotify).toHaveBeenCalledTimes(1);
        expect(mockOnFinish).toHaveBeenCalledTimes(1);
    });
});
