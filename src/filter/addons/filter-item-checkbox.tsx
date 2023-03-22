import { useEffect, useRef, useState } from "react";
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
    const [selected, setSelected] = useState<FilterItemCheckboxProps["value"]>(
        value || []
    );
    const [minimisedHeight, setMinimisedHeight] = useState<number>();
    const lastVisibleElement = useRef<HTMLDivElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (value !== selected) {
            setSelected(value || []);
        }
    }, [value]);

    useEffect(() => {
        const elementBottom = lastVisibleElement.current
            ? lastVisibleElement.current.offsetTop +
              lastVisibleElement.current.clientHeight
            : undefined;

        setMinimisedHeight(elementBottom);
    }, [options]);

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
        <FilterItem
            minimisable={options.length > 5}
            minimisedHeight={minimisedHeight}
            {...filterItemProps}
        >
            {(mode, { minimised }) => (
                <Group role="group" aria-label={filterItemProps.title}>
                    {options.map(({ label, value: optionValue }, i) => {
                        return (
                            // TODO: this should be the toggle button
                            <Item
                                key={optionValue}
                                $visible={!minimised || i < 5}
                                ref={i === 4 ? lastVisibleElement : undefined}
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
                                    {label}
                                </label>
                            </Item>
                        );
                    })}
                </Group>
            )}
        </FilterItem>
    );
};
