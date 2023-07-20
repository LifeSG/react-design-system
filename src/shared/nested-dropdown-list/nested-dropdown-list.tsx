import { useEffect, useMemo, useRef, useState } from "react";
import { useSpring } from "react-spring";
import { useEventListener } from "../../util/use-event-listener";
import { Spinner } from "../../button/button.style";
import { ItemOption } from "../../input-nested-select";
import { ListItem } from "./list-item";
import { FItemOption, FormattedOption, NestedDropdownListProps } from "./types";
import {
    Container,
    DropdownCommonButton,
    LabelIcon,
    List,
    ResultStateContainer,
    ResultStateText,
} from "./nested-dropdown-list.styles";

/**
 * NOTE: This component is not directly exportables
 * but forms part of a component
 */
export const NestedDropdownList = <V1, V2, V3>({
    listItems: _listItems,
    listStyleWidth,
    visible,
    mode = "default",
    selectedKeys,
    itemsLoadState = "success",
    itemTruncationType = "end",
    onBlur,
    onDismiss,
    onRetry,
    onSelectItem,
    ...otherProps
}: NestedDropdownListProps<V1, V2, V3>): JSX.Element => {
    // =============================================================================
    // CONST, REF, STATE
    // =============================================================================
    const listItems = useMemo((): Map<string, FormattedOption<V1, V2, V3>> => {
        if (!_listItems || !_listItems.length) return new Map([]);

        const formatted = (
            options: ItemOption<V1, V2, V3>[],
            parentKeys: string[]
        ): Map<string, FormattedOption<V1, V2, V3>> => {
            return options.reduce((result, option) => {
                const { key, label, value, subItems } = option;
                const stringKey = key.toString();

                let keyPath = [];

                keyPath = [...parentKeys, stringKey];

                const item = {
                    label,
                    value,
                    keyPath,
                    subItems: subItems ? new Map() : undefined,
                };

                result.set(stringKey, item);

                if (subItems && subItems.length) {
                    const keys = [...parentKeys, stringKey];

                    result.get(stringKey).subItems = formatted(subItems, keys);
                }

                return result;
            }, new Map());
        };

        return formatted(_listItems, []);
    }, [_listItems]);

    const [contentHeight, setContentHeight] = useState<number>(0);

    // React spring animation configuration
    const containerStyles = useSpring({
        height: contentHeight,
    });

    const nodeRef = useRef<HTMLDivElement>();
    const listRef = useRef<HTMLUListElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (visible) {
            // Give some time for the custom call-to-action to be rendered
            setTimeout(() => {
                setContentHeight(getContentHeight());
            });
        } else {
            setContentHeight(0);
        }
    }, [visible]);

    useEffect(() => {
        if (visible) {
            // safeguard
            const contentHeight = getContentHeight();
            setContentHeight(contentHeight);
        }
    }, [_listItems]);

    useEventListener("keydown", handleKeyboardPress, "document");

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleSelect = (item: FItemOption<V1, V2, V3>) => {
        onSelectItem(item);
    };

    const handleExpand = () => {
        setTimeout(() => {
            setContentHeight(getContentHeight());
        });
    };

    function handleKeyboardPress(event: KeyboardEvent) {
        if (nodeRef && (nodeRef.current as any).contains(event.target)) {
            switch (event.code) {
                case "ArrowDown":
                    break;
                case "ArrowUp":
                    break;
                case "Escape":
                    if (onDismiss) onDismiss(true);
                    break;
                default:
                    break;
            }
        }
    }

    const handleBlur = () => {
        if (onBlur) {
            handleBlur;
        }
    };

    const handleTryAgain = () => {
        if (onRetry) {
            onRetry();
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getContentHeight = () => {
        const listHeight =
            listRef && listRef.current
                ? listRef.current.getBoundingClientRect().height
                : 0;

        return listHeight;
    };

    const getDefaultExpandKeys = (
        items: Map<string, FItemOption<V1, V2, V3>> | undefined,
        parentKeys?: string[]
    ): string[] => {
        /**
         * Get the keys which has the subItems on "items" tier
         */
        let keys = [];

        if (!items) return keys;

        if (parentKeys && parentKeys.length) {
            keys = parentKeys;
        }

        for (const [key, item] of items.entries()) {
            if (item.subItems && item.subItems.size) {
                keys.push(key);

                getDefaultExpandKeys(item.subItems, keys);

                // stop loop once hit the innermost level
                break;
            }
        }

        return keys;
    };

    const getItemWithSubItems = (
        items: Map<string, FItemOption<V1, V2, V3>>
    ) => {
        /**
         * Filter the category which has the subItems
         */
        const itemWithSubItems = [];

        for (const [key, value] of items.entries()) {
            if (value.subItems && value.subItems.size) {
                const item = new Map();

                item.set(key, value);
                itemWithSubItems.push(item);

                // stop loop once found the item
                break;
            }
        }

        return itemWithSubItems;
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderItems = () => {
        if (!onRetry || (onRetry && itemsLoadState === "success")) {
            const [item] = getItemWithSubItems(listItems);
            const defaultExpandKeys = getDefaultExpandKeys(item);

            return Array.from(listItems).map(([key, item]) => (
                <ListItem
                    key={key}
                    item={item}
                    mode={mode}
                    selectedKeys={selectedKeys}
                    defaultExpandKeys={defaultExpandKeys}
                    itemTruncationType={itemTruncationType}
                    visible={visible}
                    onBlur={handleBlur}
                    onExpand={handleExpand}
                    onSelect={handleSelect}
                />
            ));
        }
    };

    const renderLoading = () => {
        if (onRetry && itemsLoadState === "loading") {
            return (
                <ResultStateContainer key="loading" data-testid="list-loading">
                    <Spinner $buttonStyle="secondary" size={24} />
                    <ResultStateText>Loading...</ResultStateText>
                </ResultStateContainer>
            );
        }
    };

    const renderTryAgain = () => {
        if (onRetry && itemsLoadState === "fail") {
            return (
                <ResultStateContainer key="noResults" data-testid="list-fail">
                    <LabelIcon data-testid="load-error-icon" />
                    <ResultStateText>Failed to load.</ResultStateText>
                    <DropdownCommonButton
                        onClick={handleTryAgain}
                        type="button"
                    >
                        Try again.
                    </DropdownCommonButton>
                </ResultStateContainer>
            );
        }
    };

    const renderList = () => {
        if (!visible) {
            return;
        }

        return (
            <List
                ref={listRef}
                data-testid="dropdown-list"
                width={listStyleWidth}
                role="list"
                {...otherProps}
            >
                {renderLoading()}
                {renderTryAgain()}
                {renderItems()}
            </List>
        );
    };

    /**
        TODO:
        2. renderSearchInput
        3. renderSelectAll
        4. renderNoResults
        9. handleKeyboardPress
        10. handleSearchInputChange
        11. handleOnClear
        12. handleTryAgain
        15. focus search input
        16. renderBottomCta
        17. focus search input if exist else first option item
        18. keyboard arrow actions
     */

    return (
        <>
            <Container
                style={containerStyles}
                data-testid={
                    visible ? "dropdown-container" : "dropdown-container-hidden"
                }
                ref={nodeRef}
            >
                {renderList()}
            </Container>
        </>
    );
};
