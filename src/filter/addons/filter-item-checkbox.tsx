import { useEffect, useRef, useState } from "react";
import { FilterItemCheckboxProps } from "../types";
import {
    Group,
    Icon,
    Input,
    Item,
    StyledFilterItem,
} from "./filter-item-checkbox.styles";

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
    const lastVisibleElement = useRef<HTMLLabelElement>();

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
        <StyledFilterItem
            minimisable={options.length > 5}
            minimisedHeight={minimisedHeight}
            {...filterItemProps}
        >
            {(mode, { minimised }) => (
                <Group role="group" aria-label={filterItemProps.title}>
                    {options.map(({ label, value: optionValue }, i) => {
                        const checked = selected.includes(optionValue);

                        return (
                            // TODO: this should be the toggle button on mobile
                            <Item
                                key={optionValue}
                                $visible={!minimised || i < 5}
                                $selected={checked}
                                ref={i === 4 ? lastVisibleElement : undefined}
                            >
                                <Input
                                    type="checkbox"
                                    id={optionValue}
                                    checked={checked}
                                    onChange={handleItemClick(optionValue)}
                                />
                                <Icon type="checkbox" active={checked} />
                                {label}
                            </Item>
                        );
                    })}
                </Group>
            )}
        </StyledFilterItem>
    );
};
