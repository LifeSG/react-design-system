import {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { useResizeDetector } from "react-resize-detector";
import { FilterContext } from "../filter-context";
import {
    FilterItemCheckboxOptionProps,
    FilterItemCheckboxProps,
} from "../types";
import {
    buildKeyPath,
    flattenNestedOptions,
    getAllDescendantChildren,
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
import { FlattenedFilterOption } from "./types";

export const FilterItemCheckbox = <T = FilterItemCheckboxOptionProps,>({
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

    // Check if options have nested structure
    const isNested = useMemo(
        () => hasNestedOptions(options, (item) => (item as any).options),
        [options]
    );

    const isMobileToggleMode =
        mode === "mobile" && !showAsCheckboxInMobile && !isNested;

    // Flatten nested options
    const flattenedOptions = useMemo(
        () =>
            flattenNestedOptions(
                options,
                [],
                valueExtractor || ((item) => (item as any).value),
                labelExtractor || ((item) => (item as any).label)
            ),
        [options, valueExtractor, labelExtractor]
    );

    const optionCount = flattenedOptions.length;

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleItemClick = (item: T) => () => {
        // Find the flattened option
        const flatOption = flattenedOptions.find(
            (opt) => opt.originalItem === item
        );
        if (!flatOption) return;

        if (flatOption.hasChildren) {
            // Handle parent click - select/deselect all children
            const allChildren = getAllDescendantChildren<T>(
                flattenedOptions,
                flatOption.keyPath
            );

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
            // Handle leaf item click - toggle selection
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
        originalItem: T,
        flatOption: FlattenedFilterOption<T>
    ) => {
        const { checked, indeterminate } = getCheckboxState(flatOption);

        return (
            <StyledCheckbox
                displaySize="small"
                checked={checked}
                indeterminate={indeterminate}
                onChange={!isNested ? handleItemClick(originalItem) : undefined}
                tabIndex={isNested ? -1 : undefined}
                aria-hidden={isNested ? "true" : undefined}
            />
        );
    };

    const renderCheckbox = (
        option: FlattenedFilterOption<T>,
        index: number,
        minimised: boolean
    ) => {
        const originalItem = option.originalItem;
        const optionLabel = getLabel(originalItem);
        const { checked, indeterminate } = getCheckboxState(option);
        const isSelected = checked || indeterminate;
        const isVisible = !minimised || index < 5;

        const hasTreeItemRole = isNested && isVisible;

        return (
            <Item
                key={buildKeyPath(option.keyPath)}
                as={isNested ? "div" : "label"}
                role={hasTreeItemRole ? "treeitem" : undefined}
                aria-checked={hasTreeItemRole ? checked : undefined}
                aria-selected={hasTreeItemRole ? !!checked : undefined}
                aria-level={hasTreeItemRole ? option.level + 1 : undefined}
                aria-posinset={
                    hasTreeItemRole ? option.indexInParent + 1 : undefined
                }
                aria-setsize={
                    hasTreeItemRole ? option.parentSetSize : undefined
                }
                onClick={isNested ? handleItemClick(originalItem) : undefined}
                $visible={isVisible}
                $selected={isSelected}
                $level={option.level}
                $hasChildren={option.hasChildren}
                ref={index === 4 ? lastVisibleElement : undefined}
            >
                {renderCheckboxIcon(originalItem, option)}
                {optionLabel}
            </Item>
        );
    };

    const renderToggle = (
        option: FlattenedFilterOption<T>,
        index: number,
        minimised: boolean
    ) => {
        const originalItem = option.originalItem;
        const optionLabel = getLabel(originalItem);
        const optionValue = getValue(originalItem);
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
                onChange={handleItemClick(originalItem)}
                useContentWidth={useToggleContentWidth}
            >
                {optionLabel}
            </StyledToggle>
        );
    };

    const renderSelectClearAllButton = () => {
        if (optionCount < 3) {
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

    return (
        <StyledFilterItem
            minimisable={
                minimisableOptions
                    ? isMobileToggleMode // set minimisable base on mobile toggle mode
                        ? !!minimisedHeight
                        : optionCount > 5
                    : false // if minimisableOptions is false, never allow minimising
            }
            minimisedHeight={minimisedHeight}
            {...filterItemProps}
        >
            {(_, { minimised }) => (
                <>
                    {renderSelectClearAllButton()}
                    <Group
                        role={isNested ? "tree" : "group"}
                        aria-label={filterItemProps.title}
                        aria-multiselectable={true}
                        ref={parentRef}
                        $isMobileToggleMode={isMobileToggleMode}
                    >
                        {flattenedOptions.map((option, i) =>
                            isMobileToggleMode
                                ? renderToggle(option, i, minimised)
                                : renderCheckbox(option, i, minimised)
                        )}
                    </Group>
                </>
            )}
        </StyledFilterItem>
    );
};

FilterItemCheckbox.displayName = "Filter.Checkbox";
