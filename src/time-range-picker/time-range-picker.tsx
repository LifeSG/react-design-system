import { ComboboxPicker } from "./combobox-picker/combobox-picker";
import { DialPicker } from "./dial-picker/dial-picker";
import type { TimeRangePickerProps } from "./types";

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
