import type { PredictiveTextInputProps } from "../../predictive-text-input/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.PredictiveTextInput`, combining predictive text input props
 * with the shared form field layout.
 *
 * `T` is the suggestion item type. `V` is the selected value type.
 */
export interface FormPredictiveTextInputProps<T, V>
    extends PredictiveTextInputProps<T, V>,
        BaseFormElementProps {}
