import type { DateInputProps } from "../date-input/types";
import type { DateRangeInputProps } from "../date-range-input/types";
import type { EsignatureProps } from "../e-signature/types";
import type { HistogramSliderProps } from "../histogram-slider";
import type { InputPartialProps } from "../input/types";
import type { InputGroupPartialProps } from "../input-group/types";
import type { InputMultiSelectPartialProps } from "../input-multi-select/types";
import type { InputNestedMultiSelectPartialProps } from "../input-nested-multi-select";
import type { InputNestedSelectPartialProps } from "../input-nested-select";
import type { InputRangeSelectPartialProps } from "../input-range-select/types";
import type { InputRangeSliderProps } from "../input-range-slider/types";
import type { InputSelectPartialProps } from "../input-select/types";
import type { InputSliderProps } from "../input-slider";
import type { TextareaPartialProps } from "../input-textarea/types";
import type { ColProps } from "../layout/types";
import type { MaskedInputPartialProps } from "../masked-input/types";
import type { PhoneNumberInputProps } from "../phone-number-input/types";
import type { PredictiveTextInputProps } from "../predictive-text-input/types";
import type { SelectHistogramProps } from "../select-histogram";
import type { TimeRangePickerProps } from "../time-range-picker/types";
import type { TimepickerProps } from "../timepicker/types";
import type { UnitNumberInputProps } from "../unit-number/types";

/**
 * Display mechanism for the form label addon.
 *
 * - `"popover"` renders an icon that triggers a popover.
 * - `"tooltip"` is currently unsupported.
 */
export type FormLabelAddonType = "tooltip" | "popover";

/**
 * Configuration for an informational icon rendered inline with a form label.
 */
export interface FormLabelAddonProps {
    /** Text or element displayed inside the popover overlay. */
    content: string | JSX.Element;
    /**
     * Display mechanism for the addon.
     * Omit to render no addon icon.
     */
    type?: FormLabelAddonType | undefined;
    /**
     * Custom icon element.
     *
     * @default <ICircleFillIcon />
     */
    icon?: JSX.Element | undefined;
    id?: string | undefined;
    /** Stacking order of the popover overlay. */
    zIndex?: number | undefined;
    "data-testid"?: string | undefined;
}

/**
 * Props for a form field label or `Form.Label` component.
 */
export interface FormLabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    /** Informational icon and popover rendered inline with the label text. */
    addon?: FormLabelAddonProps | undefined;
    /** Supporting description rendered below the label. */
    subtitle?: string | JSX.Element | undefined;
    "data-testid"?: string | undefined;
}

/**
 * Controls how a form field's outer container is rendered.
 *
 * - `"flex"` — plain `div` with no column constraints.
 * - `"grid"` — `ColDiv` that accepts responsive column span props from `ColProps`.
 */
export type FormElementLayoutType = "flex" | "grid";

/**
 * Common props shared by all `Form.*` field components.
 */
export interface BaseFormElementProps extends ColProps {
    /**
     * Label rendered above the input. Accepts a plain string or a
     * `FormLabelProps` object to provide additional configuration.
     */
    label?: FormLabelProps | string | undefined;
    /**
     * Inline error text rendered below the input.
     */
    errorMessage?: string | React.ReactNode | undefined;
    "data-testid"?: string | undefined;
    "data-error-testid"?: string | undefined;
    /**
     * Controls whether the container uses flex layout or a responsive column grid.
     */
    layoutType?: FormElementLayoutType | undefined;
}

/**
 * Props for the `FormWrapper` layout container.
 */
export interface FormWrapperProps extends BaseFormElementProps {
    children: JSX.Element | JSX.Element[];
    /**
     * Base ID used to derive ARIA label, subtitle, and error-message element
     * IDs. A generated ID is used when omitted.
     */
    id?: string | undefined;
}

/**
 * Props for `Form.Input`, combining text input props with the shared form
 * field layout.
 */
export interface FormInputProps
    extends InputPartialProps,
        BaseFormElementProps {}

/**
 * Props for `Form.InputGroup`, combining input group props with the shared
 * form field layout.
 *
 * `T` is the option item type. `V` is the selected value type.
 */
export interface FormInputGroupProps<T, V>
    extends InputGroupPartialProps<T, V>,
        BaseFormElementProps {}

/**
 * Props for `Form.MaskedInput`, combining masked input props with the shared
 * form field layout.
 */
export interface FormMaskedInputProps
    extends MaskedInputPartialProps,
        BaseFormElementProps {}

/**
 * Props for `Form.Textarea`, combining textarea props with the shared form
 * field layout.
 */
export interface FormTextareaProps
    extends TextareaPartialProps,
        BaseFormElementProps {}

/**
 * Props for `Form.CustomField`, which wraps any custom input element with a
 * shared label, subtitle, and inline error message layout.
 */
export interface FormCustomFieldProps
    extends FormWrapperProps,
        BaseFormElementProps {}

/**
 * Props for `Form.Select`, combining single-select input props with the shared
 * form field layout.
 *
 * `T` is the option item type. `V` is the selected value type.
 */
export interface FormInputSelectProps<T, V>
    extends InputSelectPartialProps<T, V>,
        BaseFormElementProps {}

/**
 * Props for `Form.RangeSelect`, combining range-select input props with the
 * shared form field layout.
 *
 * `T` is the option item type. `V` is the selected value type.
 */
export interface FormInputRangeSelectProps<T, V>
    extends InputRangeSelectPartialProps<T, V>,
        BaseFormElementProps {}

/**
 * Props for `Form.MultiSelect`, combining multi-select input props with the
 * shared form field layout.
 *
 * `T` is the option item type. `V` is the selected value type.
 */
export interface FormMultiSelectProps<T, V>
    extends InputMultiSelectPartialProps<T, V>,
        BaseFormElementProps {}

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

/**
 * Props for `Form.DateInput`, combining date input props with the shared form
 * field layout.
 */
export interface FormDateInputProps
    extends DateInputProps,
        BaseFormElementProps {}

/**
 * Props for `Form.DateRangeInput`, combining date-range input props with the
 * shared form field layout.
 */
export interface FormDateRangeInputProps
    extends DateRangeInputProps,
        BaseFormElementProps {}

/**
 * Props for `Form.Timepicker`, combining time picker props with the shared
 * form field layout.
 */
export interface FormTimepickerProps
    extends TimepickerProps,
        BaseFormElementProps {}

/**
 * Props for `Form.UnitNumberInput`, combining unit-number input props with the
 * shared form field layout.
 */
export interface FormUnitNumberInputProps
    extends UnitNumberInputProps,
        BaseFormElementProps {}

/**
 * Props for `Form.PhoneNumberInput`, combining phone-number input props with
 * the shared form field layout.
 */
export interface FormPhoneNumberInputProps
    extends PhoneNumberInputProps,
        BaseFormElementProps {}

/**
 * Props for `Form.TimeRangePicker`, combining time-range picker props with the
 * shared form field layout.
 */
export interface FormTimeRangePickerProps
    extends TimeRangePickerProps,
        BaseFormElementProps {}

/**
 * Props for `Form.PredictiveTextInput`, combining predictive text input props
 * with the shared form field layout.
 *
 * `T` is the suggestion item type. `V` is the selected value type.
 */
export interface FormPredictiveTextInputProps<T, V>
    extends PredictiveTextInputProps<T, V>,
        BaseFormElementProps {}

/**
 * Props for `Form.Slider`, combining single-value slider props with the shared
 * form field layout.
 */
export interface FormSliderProps
    extends InputSliderProps,
        BaseFormElementProps {}

/**
 * Props for `Form.RangeSlider`, combining range slider props with the shared
 * form field layout.
 */
export interface FormRangeSliderProps
    extends InputRangeSliderProps,
        BaseFormElementProps {}

/**
 * Props for `Form.HistogramSlider`, combining histogram slider props with the
 * shared form field layout.
 */
export interface FormHistogramSliderProps
    extends HistogramSliderProps,
        BaseFormElementProps {}

/**
 * Props for `Form.ESignature`, combining e-signature props with the shared
 * form field layout.
 */
export interface FormESignatureProps
    extends EsignatureProps,
        BaseFormElementProps {}

/**
 * Props for `Form.SelectHistogram`, combining select-histogram props with the
 * shared form field layout.
 */
export interface FormSelectHistogramProps
    extends SelectHistogramProps,
        BaseFormElementProps {}
