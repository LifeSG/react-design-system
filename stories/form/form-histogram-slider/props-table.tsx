import { ApiTable, ApiTableSectionProps, code } from "stories/storybook-common";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "HistogramSlider specific props",
        attributes: [
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
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "bins",
                mandatory: true,
                description:
                    "A list of histogram bins grouped by their lower limit",
                propTypes: ["HistogramBinProps[]"],
            },
            {
                name: "interval",
                mandatory: true,
                description: "Dictates the upper limit of each bin",
                propTypes: ["number"],
            },
            {
                name: "value",
                description: (
                    <>
                        The selected range, in the format {code("[start, end]")}
                    </>
                ),
                propTypes: ["[number, number]"],
            },
            {
                name: "disabled",
                description:
                    "Indicates if the component is disabled and selection is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "readOnly",
                description:
                    "Indicates if the component is in the readonly state",
                propTypes: ["boolean"],
            },
            {
                name: "showRangeLabels",
                description:
                    "Specifies if the selection range label is visible",
                propTypes: ["boolean"],
            },
            {
                name: "rangeLabelPrefix",
                description:
                    "Text to be prepended to the selection range labels",
                propTypes: ["string"],
            },
            {
                name: "rangeLabelSuffix",
                description:
                    "Text to be appended to the selection range labels",
                propTypes: ["string"],
            },
            {
                name: "renderRangeLabel",
                description: "Function to render custom selection range labels",
                propTypes: ["(value: number) => React.ReactNode"],
            },
            {
                name: "ariaLabels",
                description: "The user-friendly description of each thumb",
                propTypes: ["[string, string]"],
            },
            {
                name: "onChange",
                description: (
                    <>
                        Called on every selection change. Returns value in the
                        format {code("[start, end]")}
                    </>
                ),
                propTypes: ["(value: [number, number]) => void"],
            },
            {
                name: "onChangeEnd",
                description: (
                    <>
                        Called when a thumb is released after selection is
                        complete. Returns value in the format{" "}
                        {code("[start, end]")}
                    </>
                ),
                propTypes: ["(value: [number, number]) => void"],
            },
        ],
    },
    {
        name: "HistogramBinProps",
        attributes: [
            {
                name: "count",
                mandatory: true,
                description: "The number of results for this bin",
                propTypes: ["number"],
            },
            {
                name: "minValue",
                mandatory: true,
                description: "The lower limit of the values for this bin",
                propTypes: ["number"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
