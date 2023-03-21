import { useEffect, useState } from "react";
import { FilterItem } from "../filter-item";
import { FilterItemCheckboxProps } from "../types";
import { Group, Item } from "./filter-item-checkbox.styles";

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
        <FilterItem minimisable {...filterItemProps}>
            {(mode, { minimised }) => (
                <Group role="group" aria-label={filterItemProps.title}>
                    {options.map(({ label, value: optionValue }, i) => {
                        return (
                            // TODO: this should be the toggle button
                            <Item
                                key={optionValue}
                                $visible={!minimised || i < 5}
                            >
                                <label>
                                    <input
                                        type="checkbox"
                                        id={optionValue}
                                        name={filterItemProps.title}
                                        checked={selected.includes(optionValue)}
                                        onChange={handleItemClick(optionValue)}
                                        value={optionValue}
                                    />
                                    {label} {mode}
                                </label>
                            </Item>
                        );
                    })}
                </Group>
            )}
        </FilterItem>
    );
};
