import { useEffect, useState } from "react";
import { FilterItem } from "../filter-item";
import { FilterItemCheckboxProps } from "../types";
import { Group } from "./filter-item-checkbox.styles";

export const FilterItemCheckbox = ({
    value,
    options,
    onChange,
    ...filterItemProps
}: FilterItemCheckboxProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [selected, setSelected] = useState(value || []);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelected(value || []);
    }, [value]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleItemClick = (item) => (e) => {
        const newSelection = e.target.checked
            ? selected.concat(item)
            : selected.filter((v) => v !== item);
        setSelected(newSelection);
        onChange?.(newSelection);
    };

    return (
        <FilterItem {...filterItemProps}>
            <Group role="group" aria-label={filterItemProps.title}>
                {options.map(({ label, value: optionValue }) => {
                    return (
                        // TODO: this should be the toggle button
                        <div key={optionValue}>
                            <label>
                                <input
                                    type="checkbox"
                                    name={filterItemProps.title}
                                    checked={selected.includes(optionValue)}
                                    onChange={handleItemClick(optionValue)}
                                    value={optionValue}
                                />
                                {label}
                            </label>
                        </div>
                    );
                })}
            </Group>
        </FilterItem>
    );
};
