import type { InputSelectPartialProps } from "../../input-select/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.Select`, combining single-select input props with the shared
 * form field layout.
 *
 * `T` is the option item type. `V` is the selected value type.
 */
export interface FormInputSelectProps<T, V>
    extends InputSelectPartialProps<T, V>,
        BaseFormElementProps {}
