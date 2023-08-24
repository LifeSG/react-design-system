import { FormCustomField } from "./form-custom-field";
import { FormDateInput } from "./form-date-input";
import { FormDateRangeInput } from "./form-date-range-input";
import { FormInput } from "./form-input";
import { FormInputGroup } from "./form-input-group";
import { FormLabel } from "./form-label";
import { FormMultiSelect } from "./form-multi-select";
import { FormNestedSelect } from "./form-nested-select";
import { FormNestedMultiSelect } from "./form-nested-multi-select";
import { FormPhoneNumberInput } from "./form-phone-number-input";
import { FormPredictiveTextInput } from "./form-predictive-text-input";
import { FormRangeSelect } from "./form-range-select";
import { FormSelect } from "./form-select";
import { FormTextarea } from "./form-textarea";
import { FormTimeRangePicker } from "./form-time-range-picker";
import { FormTimepicker } from "./form-timepicker";
import { FormUnitNumberInput } from "./form-unit-number-input";

export const Form = {
    DateInput: FormDateInput,
    DateRangeInput: FormDateRangeInput,
    Input: FormInput,
    InputGroup: FormInputGroup,
    Label: FormLabel,
    MultiSelect: FormMultiSelect,
    NestedSelect: FormNestedSelect,
    NestedMultiSelect: FormNestedMultiSelect,
    Select: FormSelect,
    RangeSelect: FormRangeSelect,
    Textarea: FormTextarea,
    Timepicker: FormTimepicker,
    TimeRangePicker: FormTimeRangePicker,
    CustomField: FormCustomField,
    UnitNumberInput: FormUnitNumberInput,
    PhoneNumberInput: FormPhoneNumberInput,
    PredictiveTextInput: FormPredictiveTextInput,
};
