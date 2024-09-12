import { CardPicker } from "./card-picker/card-picker";
import { DropdownPicker } from "./dropdown-picker/dropdown-picker";
import { TimeRangePickerProps } from "./types";

export const TimeRangePicker = ({
    variant = "card",
    ...otherProps
}: TimeRangePickerProps): JSX.Element => {
    if (variant === "card") {
        return <CardPicker {...otherProps} />;
    } else if (variant === "dropdown") {
        return <DropdownPicker {...otherProps} />;
    }
};
