import type { SelectHistogramProps } from "../../select-histogram";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.SelectHistogram`, combining select-histogram props with the
 * shared form field layout.
 */
export interface FormSelectHistogramProps
    extends SelectHistogramProps,
        BaseFormElementProps {}
