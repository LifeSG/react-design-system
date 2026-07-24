import type { InputNestedMultiSelectPartialProps } from "../../input-nested-multi-select";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.NestedMultiSelect`, combining nested multi-select input
 * props with the shared form field layout.
 *
 * `V1`, `V2`, and `V3` are the value types for the first, second, and third
 * nesting levels respectively.
 */
export interface FormNestedMultiSelectProps<V1, V2, V3>
    extends InputNestedMultiSelectPartialProps<V1, V2, V3>,
        BaseFormElementProps {}
