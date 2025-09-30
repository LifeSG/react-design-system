import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { FilterContext } from "../filter-context";
import { FilterItemCheckboxProps, FilterOption } from "../types";
import {
    buildKeyPath,
    flattenNestedOptions,
    getAllDescendantKeyPaths,
    hasNestedOptions,
} from "./filter-item-checkbox-helpers";
import {
    Group,
    Item,
    SelectAllButton,
    StyledCheckbox,
    StyledFilterItem,
    StyledToggle,
} from "./filter-item-checkbox.styles";

export const FilterItemCheckbox = <T extends FilterOption = FilterOption>({
    selectedOptions,
    options,
    showAsCheckboxInMobile = false,
    minimisableOptions = true,
    onSelect,
    labelExtractor,
    valueExtractor,
    useToggleContentWidth,
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
    const parentRef = useRef<HTMLDivElement>(null);
    const lastVisibleElement = useRef<HTMLLabelElement>(null);
    const isMobileToggleMode = mode === "mobile" && !showAsCheckboxInMobile;

    // Check if options have nested structure
    const isNested = hasNestedOptions(options as T[]);
    const flattenedOptions = isNested
        ? flattenNestedOptions(options as T[])
        : [];

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleItemClick = (item: T) => () => {
        if (isNested) {
            // Handle nested option click following IndeterminateState pattern
            const flatOption = flattenedOptions.find(
                (opt) => opt.originalItem === item
            );
            if (!flatOption) return;

            if (flatOption.hasChildren) {
                // Handle parent click - similar to "Select all" logic
                const allChildren = getAllDescendantKeyPaths(
                    flattenedOptions,
                    flatOption.keyPath
                )
                    .map((keyPath) =>
                        flattenedOptions.find(
                            (opt) =>
                                buildKeyPath(opt.keyPath) ===
                                buildKeyPath(keyPath)
                        )
                    )
                    .filter((opt) => opt && !opt.hasChildren)
                    .map((opt) => opt!.originalItem as T);

                const currentlySelectedChildren = allChildren.filter((child) =>
                    selected.some((s) => getValue(s) === getValue(child))
                );

                let newSelection = [...selected];

                if (currentlySelectedChildren.length === allChildren.length) {
                    // All children selected, deselect all
                    newSelection = newSelection.filter(
                        (s) =>
                            !allChildren.some(
                                (child) => getValue(child) === getValue(s)
                            )
                    );
                } else {
                    // Some or no children selected, select all
                    allChildren.forEach((child) => {
                        if (
                            !newSelection.some(
                                (s) => getValue(s) === getValue(child)
                            )
                        ) {
                            newSelection.push(child);
                        }
                    });
                }

                setSelected(newSelection);
                onSelect?.(newSelection);
            } else {
                // Handle leaf item click - simple toggle
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
            }
        } else {
            // Handle flat option click (original logic)
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
        }
    };

    const handleSelectClearAll = () => {
        if (isNested) {
            if (selected.length > 0) {
                // Clear all
                setSelected([]);
                onSelect?.([]);
            } else {
                // Select all leaf nodes
                const leafOptions = flattenedOptions.filter(
                    (option) => !option.hasChildren
                );
                const allValues = leafOptions.map(
                    (option) => option.originalItem
                ) as T[];
                setSelected(allValues);
                onSelect?.(allValues);
            }
        } else {
            const newSelection = selected.length ? [] : options;
            setSelected(newSelection);
            onSelect?.(newSelection);
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getCheckboxState = (flatOption: (typeof flattenedOptions)[0]) => {
        if (!flatOption.hasChildren) {
            // Leaf item - simple check
            return {
                checked: selected.some(
                    (s) =>
                        getValue(s) === getValue(flatOption.originalItem as T)
                ),
                indeterminate: false,
            };
        }

        // Parent item - check children states (following IndeterminateState pattern)
        const allChildren = getAllDescendantKeyPaths(
            flattenedOptions,
            flatOption.keyPath
        )
            .map((keyPath: string[]) =>
                flattenedOptions.find(
                    (opt) => buildKeyPath(opt.keyPath) === buildKeyPath(keyPath)
                )
            )
            .filter((opt) => opt && !opt.hasChildren)
            .map((opt) => opt!.originalItem as T);

        const selectedChildren = allChildren.filter((child) =>
            selected.some((s) => getValue(s) === getValue(child))
        );

        return {
            checked:
                selectedChildren.length === allChildren.length &&
                allChildren.length > 0,
            indeterminate:
                selectedChildren.length > 0 &&
                selectedChildren.length < allChildren.length,
        };
    };
    const getLabel = (item: T): React.ReactNode => {
        return labelExtractor
            ? labelExtractor(item)
            : (item as any).label ?? item?.toString();
    };

    const getValue = (item: T): string => {
        return valueExtractor
            ? valueExtractor(item)
            : (item as any).value ?? item?.toString();
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
        if (isMobileToggleMode) {
            setVisibleMobileItemsWhenMinimised();
        } else {
            setVisibleItemsWhenMinimised();
        }
    }, [options]);

    useResizeDetector({
        handleWidth: true,
        handleHeight: false,
        skipOnMount: true,
        refreshMode: "throttle",
        targetRef: parentRef,
        onResize: isMobileToggleMode
            ? setVisibleMobileItemsWhenMinimised
            : setVisibleItemsWhenMinimised,
    });

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderCheckboxIcon = (
        option: T,
        flatOption?: (typeof flattenedOptions)[0]
    ) => {
        if (isNested && flatOption) {
            const { checked, indeterminate } = getCheckboxState(flatOption);

            return (
                <StyledCheckbox
                    displaySize="small"
                    checked={checked}
                    indeterminate={indeterminate}
                    onChange={handleItemClick(option)}
                />
            );
        } else {
            const checked = !!selected.find(
                (s) => getValue(s) === getValue(option)
            );
            return (
                <StyledCheckbox
                    displaySize="small"
                    checked={checked}
                    onChange={handleItemClick(option)}
                />
            );
        }
    };

    const renderCheckbox = (option: T, index: number, minimised: boolean) => {
        const optionLabel = getLabel(option);
        const optionValue = getValue(option);

        if (isNested) {
            const flatOption = flattenedOptions.find(
                (opt) => opt.originalItem === option
            );
            if (!flatOption) return null;

            const { checked, indeterminate } = getCheckboxState(flatOption);
            const isSelected = checked || indeterminate;

            return (
                <Item
                    key={buildKeyPath(flatOption.keyPath)}
                    $visible={!minimised || index < 5}
                    $selected={isSelected}
                    $level={flatOption.level}
                    $hasChildren={flatOption.hasChildren}
                    ref={index === 4 ? lastVisibleElement : undefined}
                >
                    {renderCheckboxIcon(option, flatOption)}
                    {optionLabel}
                </Item>
            );
        } else {
            const checked = !!selected.find((s) => getValue(s) === optionValue);
            return (
                <Item
                    key={optionValue}
                    $visible={!minimised || index < 5}
                    $selected={checked}
                    ref={index === 4 ? lastVisibleElement : undefined}
                >
                    {renderCheckboxIcon(option)}
                    {optionLabel}
                </Item>
            );
        }
    };

    const renderToggle = (option: T, index: number, minimised: boolean) => {
        const optionLabel = getLabel(option);
        const optionValue = getValue(option);
        const checked = !!selected.find((s) => getValue(s) === optionValue);
        return (
            <StyledToggle
                key={optionValue}
                type="checkbox"
                checked={checked}
                $visible={
                    !minimised ||
                    (!!minimisedHeight && index <= lastVisibleElementIndex)
                }
                onChange={handleItemClick(option)}
                useContentWidth={useToggleContentWidth}
            >
                {optionLabel}
            </StyledToggle>
        );
    };

    const renderSelectClearAllButton = () => {
        const totalOptions = isNested
            ? flattenedOptions.length
            : options.length;
        if (totalOptions < 3) {
            return null;
        }

        return (
            <SelectAllButton
                styleType="link"
                type="button"
                onClick={handleSelectClearAll}
                aria-label={
                    selected.length
                        ? "Clear all selections"
                        : `Select all in ${
                              parentRef.current?.ariaLabel || "this group"
                          }`
                }
            >
                {selected.length ? "Clear all" : "Select all"}
            </SelectAllButton>
        );
    };

    const renderOptions = isNested
        ? flattenedOptions.map((opt) => opt.originalItem)
        : options;
    const totalOptions = renderOptions.length;

    return (
        <StyledFilterItem
            minimisable={
                minimisableOptions
                    ? isMobileToggleMode // set minimisable base on mobile toggle mode
                        ? !!minimisedHeight
                        : totalOptions > 5
                    : false // if minimisableOptions is false, never allow minimising
            }
            minimisedHeight={minimisedHeight}
            {...filterItemProps}
        >
            {(_, { minimised }) => (
                <>
                    {renderSelectClearAllButton()}
                    <Group
                        role="group"
                        aria-label={filterItemProps.title}
                        ref={parentRef}
                        $isMobileToggleMode={isMobileToggleMode}
                        $isNested={isNested}
                    >
                        {renderOptions.map((option, i) =>
                            mode === "default" || isNested
                                ? renderCheckbox(option as T, i, minimised)
                                : renderToggle(option as T, i, minimised)
                        )}
                    </Group>
                </>
            )}
        </StyledFilterItem>
    );
};

FilterItemCheckbox.displayName = "Filter.Checkbox";
