import { FilterBaseProps } from "./types";

export const useFilterBase = ({ onClear, customLabels }: FilterBaseProps) => {
    const handleClear = () => onClear?.();

    const labels = {
        toggle: customLabels?.toggleFilterButtonLabel || "Filters",
        title: customLabels?.headerTitle || "Filters",
        done: customLabels?.doneButtonLabel || "Done",
        clear: customLabels?.clearButtonLabel || "Clear",
    };

    return {
        handleClear,
        labels,
    };
};
