import React, { useEffect, useRef, useState } from "react";
import { useSpring } from "react-spring";
import {
    Container,
    Label,
    List,
    ListItem,
    ListItemSelector,
    SearchInput,
    SearchInputContainer,
} from "./dropdown-list.styles";
import { DropdownListProps } from "./types";

/**
 * NOTE: This component is not directly exportables
 * but forms part of a component
 */
export const DropdownList = <T,>({
    listItems,
    listExtractor,
    valueExtractor,
    onSelectItem,
    listStyleWidth,
    visible,
    enableSearch,
    onSearch,
    searchFunction,
    onDismiss,
    ...otherProps
}: DropdownListProps<T>) => {
    // =============================================================================
    // CONST, REF, STATE
    // =============================================================================
    const [focusedListIndex, _setFocusedIndex] = useState<number>(0);
    const [searchValue, setSearchValue] = useState<string>("");
    const [displayListItems, _setDisplayListItems] = useState<T[]>(listItems);
    const [listHeight, setListHeight] = useState<number>(0);

    const nodeRef = useRef<HTMLDivElement>();
    const listRef = useRef<HTMLUListElement>();
    const listItemRefs = useRef<HTMLButtonElement[]>([]);
    const searchInputRef = useRef<HTMLInputElement>();

    /**
     * Have to use refs to allow the state values to be accessible
     * by the event listener callback functions
     * Reference:
     * https://stackoverflow.com/questions/55265255/react-usestate-hook-event-handler-using-initial-state
     */
    const focusedListIndexStateRef = useRef<number>(focusedListIndex);
    const displayListItemStateRef = useRef<T[]>(displayListItems);

    // =============================================================================
    // REF FUNCTIONS
    // =============================================================================
    const setFocusedIndex = (data: number) => {
        focusedListIndexStateRef.current = data;
        _setFocusedIndex(data);
    };

    const setDisplayListItems = (data: T[]) => {
        displayListItemStateRef.current = data;
        _setDisplayListItems(data);
    };

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        document.addEventListener("keydown", handleKeyboardPress);
        return () => {
            document.removeEventListener("keydown", handleKeyboardPress);
        };
    }, []);

    useEffect(() => {
        filterAndUpdateList(searchValue);
    }, [searchValue]);

    useEffect(() => {
        setSearchValue("");

        if (visible) {
            setListHeight(getListHeight());

            // Focus search input if there is a search input
            if (searchInputRef && searchInputRef.current) {
                searchInputRef.current.focus();
                setFocusedIndex(-1);
            } else if (listItemRefs.current[focusedListIndex]) {
                // Else focus on the first/last focused element
                listItemRefs.current[focusedListIndex].focus();
            }
        } else {
            setListHeight(0);
        }
    }, [visible]);

    useEffect(() => {
        if (visible) {
            // safeguard
            const listHeight = getListHeight();
            setListHeight(listHeight);
        }
    }, [displayListItems]);

    useEffect(() => {
        setDisplayListItems(listItems);

        // Reset
        setSearchValue("");
        setFocusedIndex(0);
    }, [listItems]);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const formatValue = (value: any) => {
        return valueExtractor ? valueExtractor(value) : value;
    };

    const formatKeyValue = (value: any, index: number) => {
        const formattedValue = valueExtractor ? valueExtractor(value) : value;
        // This is needed as some items might have the same value
        return `item_${index}__${formattedValue}`;
    };

    const formatListItemLabel = (value: any): string => {
        return listExtractor ? listExtractor(value) : value.toString();
    };

    const filterAndUpdateList = (searchValue: string) => {
        if (searchValue === "") {
            // reset
            setDisplayListItems(listItems);
        } else if (searchFunction) {
            const updated = searchFunction(searchValue);
            setDisplayListItems(updated);
        } else {
            const updated = listItems.filter((item) => {
                const displayValue = formatListItemLabel(item).toLowerCase();
                return displayValue.includes(searchValue.trim().toLowerCase());
            });
            setDisplayListItems(updated);
        }
    };

    const getListHeight = () => {
        return listRef && listRef.current
            ? listRef.current.getBoundingClientRect().height
            : 0;
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleKeyboardPress = (event: KeyboardEvent) => {
        if (nodeRef && (nodeRef.current as any).contains(event.target)) {
            // inside click
            switch (event.code) {
                case "ArrowDown":
                    // Cannot go further than last element
                    if (
                        focusedListIndexStateRef.current <
                        displayListItemStateRef.current.length - 1
                    ) {
                        const upcomingIndex =
                            focusedListIndexStateRef.current + 1;
                        listItemRefs.current[upcomingIndex].focus();

                        setFocusedIndex(upcomingIndex);
                    }
                    break;
                case "ArrowUp":
                    // Cannot go further than first element
                    if (focusedListIndexStateRef.current > 0) {
                        const upcomingIndex =
                            focusedListIndexStateRef.current - 1;
                        listItemRefs.current[upcomingIndex].focus();

                        setFocusedIndex(focusedListIndexStateRef.current - 1);
                    }
                    break;
                case "Escape":
                    if (onDismiss) onDismiss();
                    break;
                default:
                    break;
            }
        }
        return;
    };

    const handleListItemClick = (event: React.MouseEvent, item: any) => {
        event.preventDefault();
        if (onSelectItem) {
            onSelectItem(item, formatValue(item));
        }
    };

    const handleSearchInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        setSearchValue(value);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderItems = () => {
        return displayListItems.map((item, index) => {
            return (
                <ListItem key={formatKeyValue(item, index)}>
                    <ListItemSelector
                        onClick={(event) => handleListItemClick(event, item)}
                        ref={(element) =>
                            (listItemRefs.current[index] = element)
                        }
                        data-testid={`list-item`}
                        type="button"
                        tabIndex={visible ? 0 : -1}
                    >
                        <Label>{formatListItemLabel(item)}</Label>
                    </ListItemSelector>
                </ListItem>
            );
        });
    };

    const renderSearchInput = () => {
        if (enableSearch || searchFunction) {
            return (
                <SearchInputContainer key="search">
                    <SearchInput
                        ref={searchInputRef}
                        onChange={handleSearchInputChange}
                        value={searchValue}
                        data-testid="search-input"
                        aria-label="search-input"
                        tabIndex={visible ? 0 : -1}
                    />
                </SearchInputContainer>
            );
        }

        return null;
    };

    // React spring animation configuration
    const styles = useSpring({
        height: listHeight,
    });

    return (
        <Container
            style={styles}
            data-testid="dropdown-container"
            ref={nodeRef}
        >
            <List
                ref={listRef}
                data-testid="dropdown-list"
                width={listStyleWidth}
                role="list"
                {...otherProps}
            >
                {renderSearchInput()}
                {renderItems()}
            </List>
        </Container>
    );
};
