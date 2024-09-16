import { DialPicker } from "./dial-picker/dial-picker";
import { ComboboxPicker } from "./combobox-picker/combobox-picker";
import { TimeRangePickerProps } from "./types";

export const TimeRangePicker = ({
    variant = "dial",
    ...otherProps
}: TimeRangePickerProps): JSX.Element => {
    if (variant === "dial") {
        return <DialPicker {...otherProps} />;
    } else if (variant === "combobox") {
        return <ComboboxPicker {...otherProps} />;
    }
};
