import {
    ApiTable,
    ApiTableSectionProps,
    code,
    quote,
} from "stories/storybook-common";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const TIME_FORMAT = (
    <>
        <strong>Dial variant:</strong>
        <br />
        <ul style={{ marginLeft: "2rem" }}>
            <li>
                24 hour uses {quote("hh:mm")} e.g. {code(quote("13:00"))}
            </li>
            <li>
                12 hour uses {quote("hh:mmA")} e.g. {code(quote("01:00PM"))}
            </li>
        </ul>
        <br />
        <strong>Combobox variant:</strong>
        <br />
        <ul style={{ marginLeft: "2rem" }}>
            <li>
                24 hour uses {quote("hh:mm")} e.g. {code(quote("13:00"))}
            </li>
            <li>
                12 hours uses {quote("h:mma")} e.g. {code(quote("1:00pm"))}
            </li>
        </ul>
    </>
);

const DATA: ApiTableSectionProps[] = [
    {
        name: "TimeRangePicker specific props",
        attributes: [
            {
                name: "value",
                description: "The time range values in the format specified",
                propTypes: ["TimeRangePickerValue"],
            },
            {
                name: "format",
                description: "The time input format",
                propTypes: [`"12hr"`, `"24hr"`],
                defaultValue: `"24hr"`,
            },
            {
                name: "disabled",
                description:
                    "Indicates if the component is disabled and entry is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "readOnly",
                description:
                    "Indicates if the component has a read only state and selection or input is not allowed",
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
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "style",
                description: "Allows for inline styling of the component",
                propTypes: ["React.CSSProperties"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "variant",
                description: "Specifies the variant for the component",
                propTypes: [`"dial"`, `"combobox"`],
                defaultValue: `"dial"`,
            },
            {
                name: "onChange",
                description:
                    "Called when the user clicks on the 'Done' button in the time selection box. Returns the time range values in the format specified",
                propTypes: ["(value: TimeRangePickerValue) => void"],
            },
            {
                name: "onBlur",
                description: "Called when a defocus happens",
                propTypes: ["() => void"],
            },
            {
                name: "onFocus",
                description: "Called when the field is focused",
                propTypes: ["() => void"],
            },
        ],
    },
    {
        name: "Combobox variant specific props",
        attributes: [
            {
                name: "interval",
                description:
                    "The interval (minutes) between each dropdown option",
                propTypes: ["number"],
                defaultValue: "15",
            },
            {
                name: "startLimit",
                description: "The starting time for the dropdown options",
                propTypes: ["string"],
            },
            {
                name: "endLimit",
                description: "The ending time for the dropdown options",
                propTypes: ["string"],
            },
            {
                name: "alignment",
                description:
                    "Specifies if the dropdown is aligned to the left or right of the main field",
                propTypes: [`"left"`, `"right"`],
                defaultValue: `"left"`,
            },
            {
                name: "dropdownZIndex",
                description:
                    "The custom z-index of the dropdown. Try specifying this if you encounter z-index conflicts.",
                propTypes: ["number"],
                defaultValue: "50",
            },
        ],
    },
    {
        name: "TimeRangePickerValue",
        attributes: [
            {
                name: "start",
                description: (
                    <>
                        The selected start time value as an empty string or a
                        string-based format.
                        <br />
                        <br />
                        {TIME_FORMAT}
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "end",
                description: (
                    <>
                        The selected start time value as an empty string or a
                        string-based format.
                        <br />
                        <br />
                        {TIME_FORMAT}
                    </>
                ),
                propTypes: ["string"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
