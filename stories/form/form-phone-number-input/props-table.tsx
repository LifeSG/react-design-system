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
                    "The value containing the country code and phone number",
                propTypes: ["PhoneNumberInputValue"],
            },
            {
                name: "allowClear",
                description:
                    "Indicates if the clear icon button will be displayed in the input",
                propTypes: ["boolean"],
            },
            {
                name: "name",
                description: "The name of the component",
                propTypes: ["string"],
            },
            {
                name: "placeholder",
                description: "The placeholder for the input",
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
                description: (
                    <>
                        The placeholder for the country code options search
                        field (applicable if
                        <code>enableSearch</code> is set to <code>true</code>
                    </>
                ),
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
                name: "onChange",
                description:
                    "Called when a change is made on the input field or a selection on the country code options dropdown",
                propTypes: ["(value: PhoneNumberInputValue) => void"],
            },
            {
                name: "onClear",
                description:
                    "Called when the clear icon of the input is clicked",
                propTypes: ["() => void"],
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
                description: "The value of the phone number",
                propTypes: ["string"],
            },
            {
                name: "countryCode",
                description: (
                    <>
                        The value of the country code (e.g. +65)
                        <br />
                        <strong>
                            Note: When passing in a value, you may choose to
                            omit the &ldquo;+&rdquo;. But the return value in
                            the <code>onChange</code> function will always
                            include the &ldquo;+&rdquo;
                        </strong>
                    </>
                ),
                propTypes: ["string"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
