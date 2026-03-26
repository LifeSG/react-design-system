import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    HistogramBinPropsData,
    HistogramSliderPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "HistogramSliderProps",
                content: <ApiTable sections={HistogramSliderPropsData} />,
            },
            {
                label: "HistogramBinProps",
                content: <ApiTable sections={HistogramBinPropsData} />,
            },
        ]}
    />
);
