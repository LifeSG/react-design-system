import { FormInputProps } from "src/form/types";
import { InputProps } from "../input/types";
import { ListAddon } from "src/input-group";

export interface PhoneNumberInputProps<T, V>
    extends InputProps,
        FormInputProps {
    countrySelector?: ListAddon<T, V>;
}
