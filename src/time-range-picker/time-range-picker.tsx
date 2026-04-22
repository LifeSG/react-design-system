import { DialPicker } from "./dial-picker/dial-picker";
import { ComboboxPicker } from "./combobox-picker/combobox-picker";
import { TimeRangePickerProps } from "./types";

/**
 * A dual time-entry field for selecting a start and end time.
 *
 * Supports `"dial"` and `"combobox"` variants in 12-hour or 24-hour formats.
 * Controlled via separate `startTime` / `endTime` string values.
 *
 * @example
 * ```tsx
 * <TimeRangePicker startTime={start} endTime={end} onStartTimeChange={setStart} onEndTimeChange={setEnd} />
 * ```
 */
export const TimeRangePicker = ({
    variant = "dial",
    ...otherProps
}: TimeRangePickerProps) => {
    if (variant === "combobox") {
        return <ComboboxPicker {...otherProps} />;
    } else {
        return <DialPicker {...otherProps} />;
    }
};
