import type { InputGroupPartialProps } from "../../input-group/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.InputGroup`, combining input group props with the shared
 * form field layout.
 *
 * `T` is the option item type. `V` is the selected value type.
 */
export interface FormInputGroupProps<T, V>
    extends InputGroupPartialProps<T, V>,
        BaseFormElementProps {}
