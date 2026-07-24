import type { InputNestedSelectPartialProps } from "../../input-nested-select";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.NestedSelect`, combining nested single-select input props
 * with the shared form field layout.
 *
 * `V1`, `V2`, and `V3` are the value types for the first, second, and third
 * nesting levels respectively.
 */
export interface FormNestedSelectProps<V1, V2, V3>
    extends InputNestedSelectPartialProps<V1, V2, V3>,
        BaseFormElementProps {}
