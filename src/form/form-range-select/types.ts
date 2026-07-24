import type { InputRangeSelectPartialProps } from "../../input-range-select/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.RangeSelect`, combining range-select input props with the
 * shared form field layout.
 *
 * `T` is the option item type. `V` is the selected value type.
 */
export interface FormInputRangeSelectProps<T, V>
    extends InputRangeSelectPartialProps<T, V>,
        BaseFormElementProps {}
