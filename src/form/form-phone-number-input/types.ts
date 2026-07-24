import type { PhoneNumberInputProps } from "../../phone-number-input/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.PhoneNumberInput`, combining phone-number input props with
 * the shared form field layout.
 */
export interface FormPhoneNumberInputProps
    extends PhoneNumberInputProps,
        BaseFormElementProps {}
