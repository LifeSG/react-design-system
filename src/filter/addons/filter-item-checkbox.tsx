import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { FilterContext } from "../filter-context";
import { FilterItemCheckboxProps } from "../types";
import {
    Group,
    Icon,
    Input,
    Item,
    StyledFilterItem,
    StyledToggle,
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
    const { mode } = useContext(FilterContext);
    const [selected, setSelected] = useState<FilterItemCheckboxProps["value"]>(
        value || []
    );
    const [minimisedHeight, setMinimisedHeight] = useState<number>();
    const [lastVisibleElementIndex, setLastVisibleElementIndex] =
        useState<number>(options.length);
    const parentRef = useRef<HTMLDivElement>();
    const lastVisibleElement = useRef<HTMLLabelElement>();

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleItemClick = (item: string) => () => {
        const newSelection = !selected.includes(item)
            ? selected.concat(item)
            : selected.filter((v) => v !== item);
        setSelected(newSelection);
        onChange?.(newSelection);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const setVisibleItemsWhenMinimised = () => {
        const elementBottom = lastVisibleElement.current
            ? lastVisibleElement.current.offsetTop +
              lastVisibleElement.current.clientHeight
            : undefined;

        setMinimisedHeight(elementBottom);
    };

    const setVisibleMobileItemsWhenMinimised = useCallback(() => {
        if (!parentRef.current) {
            setMinimisedHeight(undefined);
            return;
        }

        const children = Array.from(parentRef.current.children);

        let lastElementInRow = 0;
        let rowCount = 0;
        let rowTop = -1;

        for (let i = 0; i < children.length; i++) {
            const childTop = (children[i] as HTMLDivElement).offsetTop;
            if (childTop > rowTop) {
                rowCount++;
                rowTop = childTop;
                // show only the first 2 rows
                if (rowCount > 2) {
                    break;
                }
            }
            lastElementInRow = i;
        }

        setLastVisibleElementIndex(lastElementInRow);

        if (rowCount > 2) {
            setMinimisedHeight(rowTop - 8); // gap from next row
        } else {
            setMinimisedHeight(undefined);
        }
    }, []);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (value !== selected) {
            setSelected(value || []);
        }
    }, [value]);

    useEffect(() => {
        if (mode === "default") {
            setVisibleItemsWhenMinimised();
        } else {
            setVisibleMobileItemsWhenMinimised();
        }
    }, [options]);

    useResizeDetector({
        handleWidth: mode === "mobile",
        handleHeight: false,
        skipOnMount: true,
        refreshMode: "throttle",
        targetRef: parentRef,
        onResize: setVisibleMobileItemsWhenMinimised,
    });

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    return (
        <StyledFilterItem
            minimisable={options.length > 5}
            minimisedHeight={minimisedHeight}
            {...filterItemProps}
        >
            {(mode, { minimised }) => (
                <Group
                    role="group"
                    aria-label={filterItemProps.title}
                    ref={parentRef}
                >
                    {options.map(({ label, value: optionValue }, i) => {
                        const checked = selected.includes(optionValue);

                        return mode === "default" ? (
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
                        ) : (
                            <StyledToggle
                                type="checkbox"
                                checked={checked}
                                $visible={
                                    !minimised ||
                                    (minimisedHeight &&
                                        i <= lastVisibleElementIndex)
                                }
                                onChange={handleItemClick(optionValue)}
                            >
                                {label}
                            </StyledToggle>
                        );
                    })}
                </Group>
            )}
        </StyledFilterItem>
    );
};
