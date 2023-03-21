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
                        Only selectable the date between the range. To specify
                        in a format as such &nbsp; (e.g.{" "}
                        <code>[2023-02-10, 2023-04-12]</code>)
                    </>
                ),
                propTypes: ["string[]"],
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
                        The dates to be disabled. To specify in a format as such
                        (e.g. <code>[2022-01-01, 2022-02-02]</code>)
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
                        only in variant props is range.&nbsp;
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
                        Specifies the input variant which affects layout and
                        styles. <br />
                        When the <code>single</code> variant is specified, the
                        component is rendered one input element. While if
                        <code>range</code> is specified, the component is
                        rendered two input element for range selection.
                    </>
                ),
                propTypes: [`"single"`, `"range"`],
                defaultValue: `"single"`,
            },
            {
                name: "withButton",
                description:
                    "Indicates to display Cancel/Done button inside the component.",
                propTypes: ["boolean"],
                defaultValue: `"true"`,
            },
            {
                name: "onChange",
                description: (
                    <>
                        Called when the user enters the set of value in the
                        field. Returns value in an object &nbsp;
                        <code>
                            &#123;start: 2023-03-10, end: 2023-04-05&#125;
                        </code>
                        format. Should the value be invalid, the&nbsp;
                        &lsquo;Invalid date&rsquo; value will be returned
                    </>
                ),
                propTypes: ["(value: {start: string, end: string}) => void"],
            },
            {
                name: "onChangeRaw",
                description: (
                    <>
                        Called when the user enters a value in the field.
                        Returns actual values in an array format as such
                        <code>
                            &#123;start: &#123;year, month, day&#125;, end:
                            &#123;year, month, day&#125;&#125;
                        </code>
                        &nbsp;regardless if it is invalid
                    </>
                ),
                propTypes: ["(value: {start: {}}, end: {}}) => void"],
            },
            {
                name: "onBlur",
                description: (
                    <>
                        Called when a defocus happens from input field. Returns
                        the existing value in&nbsp;
                        <code>
                            &#123;start: 2023-03-10, end: 2023-04-05&#125;
                        </code>
                        &nbsp; format
                    </>
                ),
                propTypes: ["(value: {start: string, end: string}) => void"],
            },
            {
                name: "onBlurRaw",
                description: (
                    <>
                        Called when a defocus happens. Returns values in an
                        array format as such
                        <code>
                            &#123;start: &#123;year, month, day&#125;, end:
                            &#123;year, month, day&#125;&#125;
                        </code>
                        &nbsp;regardless if it is invalid
                    </>
                ),
                propTypes: ["(value: {start: {}}, end: {}}) => void"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
