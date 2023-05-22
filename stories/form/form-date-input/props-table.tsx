import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const STRING_FORMAT = (
    <>
        string based format <code>YYYY-MM-DD</code>
    </>
);

const DATA: ApiTableSectionProps[] = [
    {
        name: "DateInput specific props",
        attributes: [
            {
                name: "between",
                description: (
                    <>
                        Specifies the selection between a given date range. To
                        specify in an array where&nbsp;
                        <code>[startDate, endDate]</code> using the{" "}
                        {STRING_FORMAT} for the dates.
                        <br />
                        E.g. <code>["2023-01-01", "2023-02-01"]</code>
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
                        The dates to be disabled. To specify each date in
                        the&nbsp;
                        {STRING_FORMAT}.
                        <br />
                        E.g. <code>["2023-01-01", "2023-01-03"]</code>
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
                        The value of begin date in the {STRING_FORMAT}. It also
                        serves as the start date value in ranged selection
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "valueEnd",
                description: (
                    <>
                        The value of end date in the {STRING_FORMAT}
                        <br />
                        <b>Note: Only relevant for ranged selection</b>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "variant",
                description: (
                    <>
                        Specifies if the component supports the single or ranged
                        selection
                    </>
                ),
                propTypes: [`"single"`, `"range"`],
                defaultValue: `"single"`,
            },
            {
                name: "withButton",
                description: (
                    <>
                        Specifies if the "Done" and "Cancel" action buttons
                        should be rendered
                        <br />
                        <b>Note: It appears by default in mobile viewports</b>
                    </>
                ),
                propTypes: ["boolean"],
                defaultValue: `true`,
            },
            {
                name: "onChange",
                description: (
                    <>
                        Called when a selection is made. Returns the start and
                        end date in the {STRING_FORMAT}
                    </>
                ),
                propTypes: ["(startDate: string, endDate: string) => void"],
            },
            {
                name: "onChangeRaw",
                description: (
                    <>
                        Called when a selection is made. Returns the start and
                        end date values in a string array format{" "}
                        <code>[day, month, year]</code>
                        <br />
                        E.g. "2023-02-01" will be returned as{" "}
                        <code>["01", "02", "2023"]</code>
                    </>
                ),
                propTypes: ["(startDate: string[], endDate: string[]) => void"],
            },
            {
                name: "onBlur",
                description: (
                    <>
                        Called when a defocus on the field is made. Returns the
                        start and end date in the {STRING_FORMAT}
                    </>
                ),
                propTypes: ["(startDate: string, endDate: string) => void"],
            },
            {
                name: "onBlurRaw",
                description: (
                    <>
                        Called when a defocus on the field is made. Returns the
                        start and end date values in a string array format{" "}
                        <code>[day, month, year]</code>
                        <br />
                        E.g. "2023-02-01" will be returned as{" "}
                        <code>["01", "02", "2023"]</code>
                    </>
                ),
                propTypes: ["(startDate: string[], endDate: string[]) => void"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
