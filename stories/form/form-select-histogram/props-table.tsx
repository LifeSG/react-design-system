import React from "react";
import { ApiTable, code } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "SelectHistogram specific props",
        attributes: [
            {
                name: "className",
                mandatory: false,
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "id",
                mandatory: false,
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                mandatory: false,
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "disabled",
                mandatory: false,
                description:
                    "Indicates if the component is disabled and selection is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "readOnly",
                mandatory: false,
                description:
                    "Indicates if the component is in the readonly state",
                propTypes: ["boolean"],
            },
            {
                name: "value",
                mandatory: false,
                description: (
                    <>
                        The selected range, in the format {code("[start, end]")}
                    </>
                ),
                propTypes: ["[number, number]"],
            },
            {
                name: "rangeLabelPrefix",
                mandatory: false,
                description:
                    "Text to be prepended to the selection range labels",
                propTypes: ["string"],
            },
            {
                name: "rangeLabelSuffix",
                mandatory: false,
                description:
                    "Text to be appended to the selection range labels",
                propTypes: ["string"],
            },
            {
                name: "renderRangeLabel",
                mandatory: false,
                description: "Function to render custom selection range labels",
                propTypes: ["(value: number) => React.ReactNode"],
            },
            {
                name: "onChange",
                mandatory: false,
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
                mandatory: false,
                description: (
                    <>
                        Called when a thumb is released after selection is
                        complete. Returns value in the format{" "}
                        {code("[start, end]")}
                    </>
                ),
                propTypes: ["(value: [number, number]) => void"],
            },
            {
                name: "placeholder",
                mandatory: false,
                description: "The placeholder text of the selector",
                propTypes: ["string"],
                defaultValue: "Select",
            },
            {
                name: "error",
                mandatory: false,
                description: (
                    <>
                        Indicates if an error display is to be set&nbsp; (Not
                        needed if you indicated <code>errorMessage</code>)
                    </>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "alignment",
                mandatory: false,
                description:
                    "Specifies if the dropdown is aligned to the left or right of the main field",
                propTypes: [`"left"`, `"right"`],
                defaultValue: `"left"`,
            },
            {
                name: "dropdownZIndex",
                mandatory: false,
                description:
                    "The custom z-index of the dropdown. Try specifying this if you encounter z-index conflicts.",
                propTypes: ["number"],
                defaultValue: "50",
            },
        ],
    },
    {
        name: "HistogramSlider specific props",
        attributes: [
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
                name: "renderEmptyView",
                mandatory: false,
                description: (
                    <>
                        A custom display if there are no results across any of
                        the bins
                    </>
                ),
                propTypes: ["() => void"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
