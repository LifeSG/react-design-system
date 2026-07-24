import type { UnitNumberInputProps } from "../../unit-number/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.UnitNumberInput`, combining unit-number input props with the
 * shared form field layout.
 */
export interface FormUnitNumberInputProps
    extends UnitNumberInputProps,
        BaseFormElementProps {}
