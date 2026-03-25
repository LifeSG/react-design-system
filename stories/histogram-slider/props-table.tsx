import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { HistogramSlider } from "src/histogram-slider";
import { HistogramBinPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "HistogramSlider",
                content: <ArgTypes of={HistogramSlider} />,
            },
            {
                label: "HistogramBinProps",
                content: <ApiTable sections={HistogramBinPropsData} />,
            },
        ]}
    />
);
