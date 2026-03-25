import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Form } from "src/form";
import {
    FormCustomFieldPropsData,
    FormDateInputPropsData,
    FormDateRangeInputPropsData,
    FormESignaturePropsData,
    FormHistogramSliderPropsData,
    FormInputGroupPropsData,
    FormInputPropsData,
    FormInputRangeSelectPropsData,
    FormInputSelectPropsData,
    FormLabelAddonPropsData,
    FormLabelAddonTriggerPropsData,
    FormLabelPropsData,
    FormMaskedInputPropsData,
    FormMultiSelectPropsData,
    FormNestedMultiSelectPropsData,
    FormNestedSelectPropsData,
    FormPhoneNumberInputPropsData,
    FormPredictiveTextInputPropsData,
    FormRangeSliderPropsData,
    FormSliderPropsData,
    FormTextareaPropsData,
    FormTimeRangePickerPropsData,
    FormTimepickerPropsData,
    FormUnitNumberInputPropsData,
    FormWrapperPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Form", content: <ArgTypes of={Form} /> },
            {
                label: "FormLabelAddonTriggerProps",
                content: <ApiTable sections={FormLabelAddonTriggerPropsData} />,
            },
            {
                label: "FormLabelAddonProps",
                content: <ApiTable sections={FormLabelAddonPropsData} />,
            },
            {
                label: "FormLabelProps",
                content: <ApiTable sections={FormLabelPropsData} />,
            },
            {
                label: "FormWrapperProps",
                content: <ApiTable sections={FormWrapperPropsData} />,
            },
            {
                label: "FormInputProps",
                content: <ApiTable sections={FormInputPropsData} />,
            },
            {
                label: "FormInputGroupProps",
                content: <ApiTable sections={FormInputGroupPropsData} />,
            },
            {
                label: "FormMaskedInputProps",
                content: <ApiTable sections={FormMaskedInputPropsData} />,
            },
            {
                label: "FormTextareaProps",
                content: <ApiTable sections={FormTextareaPropsData} />,
            },
            {
                label: "FormCustomFieldProps",
                content: <ApiTable sections={FormCustomFieldPropsData} />,
            },
            {
                label: "FormInputSelectProps",
                content: <ApiTable sections={FormInputSelectPropsData} />,
            },
            {
                label: "FormInputRangeSelectProps",
                content: <ApiTable sections={FormInputRangeSelectPropsData} />,
            },
            {
                label: "FormMultiSelectProps",
                content: <ApiTable sections={FormMultiSelectPropsData} />,
            },
            {
                label: "FormNestedSelectProps",
                content: <ApiTable sections={FormNestedSelectPropsData} />,
            },
            {
                label: "FormNestedMultiSelectProps",
                content: <ApiTable sections={FormNestedMultiSelectPropsData} />,
            },
            {
                label: "FormDateInputProps",
                content: <ApiTable sections={FormDateInputPropsData} />,
            },
            {
                label: "FormDateRangeInputProps",
                content: <ApiTable sections={FormDateRangeInputPropsData} />,
            },
            {
                label: "FormTimepickerProps",
                content: <ApiTable sections={FormTimepickerPropsData} />,
            },
            {
                label: "FormUnitNumberInputProps",
                content: <ApiTable sections={FormUnitNumberInputPropsData} />,
            },
            {
                label: "FormPhoneNumberInputProps",
                content: <ApiTable sections={FormPhoneNumberInputPropsData} />,
            },
            {
                label: "FormTimeRangePickerProps",
                content: <ApiTable sections={FormTimeRangePickerPropsData} />,
            },
            {
                label: "FormPredictiveTextInputProps",
                content: (
                    <ApiTable sections={FormPredictiveTextInputPropsData} />
                ),
            },
            {
                label: "FormSliderProps",
                content: <ApiTable sections={FormSliderPropsData} />,
            },
            {
                label: "FormRangeSliderProps",
                content: <ApiTable sections={FormRangeSliderPropsData} />,
            },
            {
                label: "FormHistogramSliderProps",
                content: <ApiTable sections={FormHistogramSliderPropsData} />,
            },
            {
                label: "FormESignatureProps",
                content: <ApiTable sections={FormESignaturePropsData} />,
            },
        ]}
    />
);
