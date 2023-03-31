import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { FilterContext } from "../filter-context";
import { FilterItemCheckboxProps } from "../types";
import {
    Group,
    Input,
    Item,
    StyledFilterItem,
    StyledToggle,
    StyledToggleIcon,
} from "./filter-item-checkbox.styles";

export const FilterItemCheckbox = <T,>({
    selectedOptions,
    options,
    onSelect,
    labelExtractor,
    valueExtractor,
    ...filterItemProps
}: FilterItemCheckboxProps<T>) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { mode } = useContext(FilterContext);
    const [selected, setSelected] = useState<T[]>(selectedOptions || []);
    const [minimisedHeight, setMinimisedHeight] = useState<number>();
    const [lastVisibleElementIndex, setLastVisibleElementIndex] =
        useState<number>(options.length);
    const parentRef = useRef<HTMLDivElement>();
    const lastVisibleElement = useRef<HTMLLabelElement>();

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleItemClick = (item: T) => () => {
        const newSelection = [...selected];
        const selectedIndex = selected.findIndex(
            (s) => getValue(s) === getValue(item)
        );

        if (selectedIndex >= 0) {
            newSelection.splice(selectedIndex, 1);
        } else {
            newSelection.push(item);
        }
        setSelected(newSelection);
        onSelect?.(newSelection);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getLabel = (item: T): string => {
        return labelExtractor
            ? labelExtractor(item)
            : (item as any).label ?? item.toString();
    };

    const getValue = (item: T): string => {
        return valueExtractor
            ? valueExtractor(item)
            : (item as any).value ?? item.toString();
    };

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
        if (selectedOptions !== selected) {
            setSelected(selectedOptions || []);
        }
    }, [selectedOptions]);

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
    const renderCheckbox = (option: T, index: number, minimised: boolean) => {
        const optionLabel = getLabel(option);
        const optionValue = getValue(option);
        const checked = !!selected.find((s) => getValue(s) === optionValue);

        return (
            <Item
                key={optionValue}
                $visible={!minimised || index < 5}
                $selected={checked}
                ref={index === 4 ? lastVisibleElement : undefined}
            >
                <Input
                    type="checkbox"
                    checked={checked}
                    onChange={handleItemClick(option)}
                />
                <StyledToggleIcon type="checkbox" active={checked} />
                {optionLabel}
            </Item>
        );
    };

    const renderToggle = (option: T, index: number, minimised: boolean) => {
        const optionLabel = getLabel(option);
        const optionValue = getValue(option);
        const checked = !!selected.find((s) => getValue(s) === optionValue);

        return (
            <StyledToggle
                type="checkbox"
                checked={checked}
                $visible={
                    !minimised ||
                    (minimisedHeight && index <= lastVisibleElementIndex)
                }
                onChange={handleItemClick(option)}
            >
                {optionLabel}
            </StyledToggle>
        );
    };

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
                    {options.map((option, i) =>
                        mode === "default"
                            ? renderCheckbox(option, i, minimised)
                            : renderToggle(option, i, minimised)
                    )}
                </Group>
            )}
        </StyledFilterItem>
    );
};
