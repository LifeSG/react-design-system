import { ComboboxPicker } from "./combobox-picker/combobox-picker";
import { DialPicker } from "./dial-picker/dial-picker";
import type { TimeRangePickerProps } from "./types";

// @catalog
/**
 * A two-field time picker for selecting a start and end time.
 *
 * Use `TimeRangePicker` when users need to define a time range.
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
