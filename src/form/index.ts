import { FormCustomField } from "./form-custom-field";
import { FormDateInput } from "./form-date-input";
import { FormDateRangeInput } from "./form-date-range-input";
import { FormESignature } from "./form-e-signature";
import { FormHistogramSlider } from "./form-histogram";
import { FormInput } from "./form-input";
import { FormInputGroup } from "./form-input-group";
import { FormLabel } from "./form-label";
import { FormMaskedInput } from "./form-masked-input";
import { FormMultiSelect } from "./form-multi-select";
import { FormNestedMultiSelect } from "./form-nested-multi-select";
import { FormNestedSelect } from "./form-nested-select";
import { FormPhoneNumberInput } from "./form-phone-number-input";
import { FormPredictiveTextInput } from "./form-predictive-text-input";
import { FormRangeSelect } from "./form-range-select";
import { FormRangeSlider } from "./form-range-slider";
import { FormSelect } from "./form-select";
import { FormSlider } from "./form-slider";
import { FormTextarea } from "./form-textarea";
import { FormTimeRangePicker } from "./form-time-range-picker";
import { FormTimepicker } from "./form-timepicker";
import { FormUnitNumberInput } from "./form-unit-number-input";

export const Form = {
    DateInput: FormDateInput,
    DateRangeInput: FormDateRangeInput,
    ESignature: FormESignature,
    HistogramSlider: FormHistogramSlider,
    Input: FormInput,
    InputGroup: FormInputGroup,
    MaskedInput: FormMaskedInput,
    Label: FormLabel,
    MultiSelect: FormMultiSelect,
    NestedSelect: FormNestedSelect,
    NestedMultiSelect: FormNestedMultiSelect,
    Select: FormSelect,
    Slider: FormSlider,
    RangeSlider: FormRangeSlider,
    RangeSelect: FormRangeSelect,
    Textarea: FormTextarea,
    Timepicker: FormTimepicker,
    TimeRangePicker: FormTimeRangePicker,
    CustomField: FormCustomField,
    UnitNumberInput: FormUnitNumberInput,
    PhoneNumberInput: FormPhoneNumberInput,
    PredictiveTextInput: FormPredictiveTextInput,
};
