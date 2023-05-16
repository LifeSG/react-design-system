import { FormCustomField } from "./form-custom-field";
import { FormDateInput } from "./form-date-input";
import { FormInput } from "./form-input";
import { FormInputGroup } from "./form-input-group";
import { FormLabel } from "./form-label";
import { FormMultiSelect } from "./form-multi-select";
import { FormSelect } from "./form-select";
import { FormTextarea } from "./form-textarea";
import { FormTimepicker } from "./form-timepicker";
import { FormTimeRangePicker } from "./form-timerangepicker";
import { FormUnitNumberInput } from "./form-unit-number-input";
import { FormPhoneNumberInput } from "./form-phone-number-input";
import { FormRangeSelect } from "./form-range-select";

export const Form = {
    DateInput: FormDateInput,
    Input: FormInput,
    InputGroup: FormInputGroup,
    Label: FormLabel,
    MultiSelect: FormMultiSelect,
    Select: FormSelect,
    RangeSelect: FormRangeSelect,
    Textarea: FormTextarea,
    Timepicker: FormTimepicker,
    TimeRangePicker: FormTimeRangePicker,
    CustomField: FormCustomField,
    UnitNumberInput: FormUnitNumberInput,
    PhoneNumberInput: FormPhoneNumberInput,
};
