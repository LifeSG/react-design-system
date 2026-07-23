import type { InputMultiSelectPartialProps } from "../../input-multi-select/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.MultiSelect`, combining multi-select input props with the
 * shared form field layout.
 *
 * `T` is the option item type. `V` is the selected value type.
 */
export interface FormMultiSelectProps<T, V>
    extends InputMultiSelectPartialProps<T, V>,
        BaseFormElementProps {}
