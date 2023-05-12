import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "DateInput specific props",
        attributes: [
            {
                name: "between",
                description: (
                    <>
                        Restrict selection to this date range. To specify in the
                        format <code>[YYYY-MM-DD, YYYY-MM-DD]</code>
                    </>
                ),
                propTypes: ["[string, string]"],
            },
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "disabledDates",
                description: (
                    <>
                        The dates to be disabled. To specify each date in the
                        format <code>YYYY-MM-DD</code>
                    </>
                ),
                propTypes: ["string[]"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "disabled",
                description:
                    "Indicates if the component is disabled and entry is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "endValue",
                description: (
                    <>
                        The value of end date in string based format. Available
                        only for ranged selection.&nbsp;
                        <code>YYYY-MM-DD</code> or <code>YYYY-M-D</code>
                    </>
                ),
                propTypes: ["string"],
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
                name: "id",
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "readOnly",
                description:
                    "Indicates if the component has a read only state and selection or input is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "role",
                description: "The aria role of the component",
                propTypes: ["React.AriaRole"],
            },
            {
                name: "value",
                description: (
                    <>
                        The value of begin date in string based format.&nbsp;
                        <code>YYYY-MM-DD</code> or <code>YYYY-M-D</code>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "variant",
                description: (
                    <>
                        Specify <code>single</code> for single date selection
                        and <code>range</code> for ranged selection
                    </>
                ),
                propTypes: [`"single"`, `"range"`],
                defaultValue: `"single"`,
            },
            {
                name: "withButton",
                description:
                    "Specifies if done/cancel buttons are visible. Always true on mobile.",
                propTypes: ["boolean"],
                defaultValue: `"true"`,
            },
            {
                name: "onChange",
                description: (
                    <>
                        Called when a valid selection is made.
                        <br />
                        If <code>withButton</code> is true, this is when the
                        confirmed button is clicked. Otherwise, whenever a valid
                        date is entered or selected.
                    </>
                ),
                propTypes: ["(value: ChangeValueTypes) => void"],
            },
            {
                name: "onChangeRaw",
                description: <>Called when a valid selection is made.</>,
                propTypes: ["(value: RawInputValues) => void"],
            },
            {
                name: "onBlur",
                description: "Called when a defocus happens from input field.",
                propTypes: ["(value: ChangeValueTypes) => void"],
            },
            {
                name: "onBlurRaw",
                description: "Called when a defocus happens.",
                propTypes: ["(value: RawInputValues) => void"],
            },
        ],
    },
    {
        name: "ChangeValueTypes",
        attributes: [
            {
                name: "start",
                description: (
                    <>
                        A string in the format <code>YYYY-MM-DD</code>
                    </>
                ),
            },
            {
                name: "end",
                description: (
                    <>
                        Only available in the ranged date input. A string in the
                        format <code>YYYY-MM-DD</code>
                    </>
                ),
            },
        ],
    },
    {
        name: "RawInputValues",
        attributes: [
            {
                name: "start",
                description: (
                    <>
                        An object in the format
                        <code>&#123; year, month, day &#125;</code>
                    </>
                ),
            },
            {
                name: "end",
                description: (
                    <>
                        Only available in the ranged date input. An object in
                        the format
                        <code>&#123; year, month, day &#125;</code>
                    </>
                ),
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
