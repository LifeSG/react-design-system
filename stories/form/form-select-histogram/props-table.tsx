import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "HistogramSlider specific props",
        attributes: [
            {
                name: "histogramSlider",
                description: "The properties from histogram slider",
                mandatory: true,
                propTypes: (
                    <a
                        href="../?path=/docs/form-histogramslider--docs"
                        target="_top"
                        rel="noreferrer"
                    >
                        HistogramSlider
                    </a>
                ),
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
