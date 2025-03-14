import { DialPicker } from "./dial-picker/dial-picker";
import { ComboboxPicker } from "./combobox-picker/combobox-picker";
import { TimeRangePickerProps } from "./types";

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
