import { FormField } from "./form-field";
import { FormFieldGroup } from "./form-field-group";
import { FormTextarea } from "./form-textarea";
import { FormCustomField } from "./form-custom-field";
import { FormLabel, FormLabelAddonTrigger } from "./form-label";
import { FormInputSelect } from "./form-input-select";
import { FormErrorMessage } from "./form-basic";
import { FormDateInput } from "./form-date-input";
import { FormTimepicker } from "./form-timepicker";
export namespace Form {
    /* Main Components */
    export const Field = FormField;
    export const FieldGroup = FormFieldGroup;
    export const Select = FormInputSelect;
    export const Textarea = FormTextarea;
    export const DateInput = FormDateInput;
    export const Timepicker = FormTimepicker;

    /* Customised Components */
    export const CustomField = FormCustomField;

    /* Utility Components */
    export const Label = FormLabel;
    export const LabelAddon = FormLabelAddonTrigger;
    export const ErrorMessage = FormErrorMessage;
}
