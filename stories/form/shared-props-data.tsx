import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import {
    FORM_LABEL_ADDON_PROPS_DATA,
    FORM_LABEL_USED_WITH_WRAPPER_PROPS_DATA,
} from "./form-label/props-table";

export const SHARED_FORM_PROPS_DATA: ApiTableSectionProps[] = [
    {
        name: "Form specific props",
        attributes: [
            {
                name: "label",
                description: "The label of the field",
                propTypes: ["FormLabelProps", "string"],
            },
            {
                name: "errorMessage",
                description: "The error message text to be displayed",
                propTypes: ["string"],
            },
            {
                name: "data-error-testid",
                description: "The test identifier for the error message",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "FormLabelProps",
        ...FORM_LABEL_USED_WITH_WRAPPER_PROPS_DATA,
    },
    FORM_LABEL_ADDON_PROPS_DATA,
];
