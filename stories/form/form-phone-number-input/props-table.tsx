import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "PhoneNumberInput specific props",
        attributes: [
            {
                name: "value",
                description:
                    "The value of the country code options and phone number input",
                propTypes: ["PhoneNumberInputValue"],
            },
            {
                name: "onChange",
                description:
                    "Called when an country code options is selected and when phone number input change/clear",
                propTypes: ["(value: PhoneNumberInputValue) => void"],
            },

            {
                name: "allowClear",
                description:
                    "Indicates if the phone number input should have clearable option or not",
                propTypes: ["boolean"],
            },
            {
                name: "onClear",
                description: "Called when an phone number input is cleared",
                propTypes: ["() => void"],
            },
            {
                name: "name",
                description: "The name of the component",
                propTypes: ["string"],
            },
            {
                name: "placeholder",
                description:
                    "The placeholder phone number input of the component",
                propTypes: ["string"],
                defaultValue: "Select",
            },
            {
                name: "disabled",
                description:
                    "Indicates if the component is disabled and selection is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "error",
                description: (
                    <>
                        Indicates if an error display is to be set&nbsp; (Not
                        needed if you indicated <code>errorMessage</code>)
                    </>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "optionSearchPlaceholder",
                description:
                    "The placeholder for the country code search field",
                propTypes: ["string"],
            },
            {
                name: "enableSearch",
                description:
                    "When specified, it will allow a text base search for the country code options",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onShowOptions",
                description: "Called when the country code options is expanded",
                propTypes: ["() => void"],
            },
            {
                name: "onHideOptions",
                description:
                    "Called when the country code options is minimised",
                propTypes: ["() => void"],
            },
        ],
    },
    {
        name: "PhoneNumberInputValue",
        attributes: [
            {
                name: "number",
                description: "The value of the phone number input",
                propTypes: ["string"],
            },
            {
                name: "countryCode",
                description: "The value of the country code options",
                propTypes: ["string"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
