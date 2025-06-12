import {
    ApiTable,
    ApiTableSectionProps,
    code,
    quote,
} from "stories/storybook-common";
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
                name: "allowDisabledSelection",
                description: (
                    <>
                        Specifies if dates normally disabled by{" "}
                        {code("minDate")}, {code("maxDate")} and{" "}
                        {code("disabledDates")}
                        are still selectable
                    </>
                ),
                propTypes: ["boolean"],
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
                        E.g.{" "}
                        <code>
                            [{quote("2023-01-01")}, {quote("2023-01-03")}]
                        </code>
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
                name: "maxDate",
                description: (
                    <>
                        Specifies the maximum date allowed for selection in
                        the&nbsp;{STRING_FORMAT}&nbsp;{`(Inclusive)`}
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "minDate",
                description: (
                    <>
                        Specifies the minimum date allowed for selection in
                        the&nbsp;{STRING_FORMAT}&nbsp;{`(Inclusive)`}
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "readOnly",
                description:
                    "Indicates if the component has a read only state and selection or input is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "hideInputKeyboard",
                description:
                    "If specified, the input keyboard will be hidden when the user focuses on the input field",
                propTypes: ["boolean"],
            },
            {
                name: "value",
                description: (
                    <>The value of the date input in the {STRING_FORMAT}</>
                ),
                propTypes: ["string"],
            },
            {
                name: "withButton",
                description: (
                    <>
                        Specifies if the {quote("Done")} and {quote("Cancel")}{" "}
                        action buttons should be rendered
                    </>
                ),
                propTypes: ["boolean"],
                defaultValue: `true`,
            },
            {
                name: "zIndex",
                description:
                    "The custom z-index of the calendar dropdown. Try specifying this if you encounter z-index conflicts.",
                propTypes: ["number"],
                defaultValue: "50",
            },
            {
                name: "rootNode",
                description: (
                    <>
                        The root element that hosts the calendar dropdown
                        element. Try specifying this if <code>zIndex</code> does
                        not work.
                        <br />
                        <br />
                        For example, if the parent of the date input element has
                        a higher z-index than the date input, the date input
                        dropdown may not be visible. Specify the parent here
                        instead so that they share the same stacking context.
                    </>
                ),
                propTypes: ["RefObject<HTMLElement>"],
                defaultValue: (
                    <>
                        document<code>body</code>
                    </>
                ),
            },
            {
                name: "onChange",
                description: (
                    <>
                        Called when a selection is made. Returns the date in the{" "}
                        {STRING_FORMAT}
                    </>
                ),
                propTypes: ["(date: string) => void"],
            },
            {
                name: "onBlur",
                description: "Called when a defocus on the field is made.",
                propTypes: ["() => void"],
            },
            {
                name: "onFocus",
                description: "Called when the field is focused",
                propTypes: ["() => void"],
            },
            {
                name: "onYearMonthDisplayChange",
                description:
                    "Called when the current displayed month and year changes",
                propTypes: ["(value: YearMonthDisplay) => void"],
            },
        ],
    },
    {
        name: "YearMonthDisplay",
        attributes: [
            {
                name: "year",
                description: (
                    <>The current displayed year in {code("YYYY")} format</>
                ),
                propTypes: ["number"],
            },
            {
                name: "month",
                description: "The current displayed month, from 1 to 12",
                propTypes: ["number"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
