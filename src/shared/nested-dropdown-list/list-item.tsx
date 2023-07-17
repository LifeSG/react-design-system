import { useCallback, useRef, useState } from "react";
import { find, isEqual } from "lodash";
import { FItemOption, Mode, TruncateType } from "./types";
import { StringHelper } from "../../util";
import {
    ArrowButton,
    Category,
    Label,
    List,
    ListItemSelector,
    Title,
    TriangleIcon,
    TruncateContainer,
    TruncateFirstLine,
    TruncateSecondLine,
} from "./list-item.styles";

interface ListItemProps<V1, V2, V3> {
    item: FItemOption<V1, V2, V3>;
    mode: Mode;
    parentKeys: string[];
    listExtractor?: ((item: FItemOption<V1, V2, V3>) => string) | undefined;
    selectedItems?: (V1 | V2 | V3)[] | undefined;
    selectedKeys: string[];
    defaultExpandKeys: string[];
    itemTruncationType?: TruncateType | undefined;
    visible: boolean;
    onSelect: (item: FItemOption<V1, V2, V3>) => void;
    onExpand: () => void;
    onBlur: () => void;
}

export const ListItem = <V1, V2, V3>({
    item,
    mode,
    parentKeys,
    listExtractor,
    selectedItems,
    selectedKeys,
    defaultExpandKeys,
    itemTruncationType,
    visible,
    onExpand,
    onSelect,
    onBlur,
}: ListItemProps<V1, V2, V3>): JSX.Element => {
    // =============================================================================
    // CONST, REF, STATE
    // =============================================================================
    const [expand, setExpand] = useState<boolean>(isExpand());

    const labelRef = useRef<HTMLLIElement>();

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleClick = useCallback(() => {
        setExpand(!expand);
        onExpand();
    }, [expand]);

    const handleSelect = (event: React.MouseEvent) => {
        event.preventDefault();
        onSelect(item);
    };

    const handleBlur = () => {
        if (onBlur) {
            onBlur();
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    function isExpand() {
        switch (mode) {
            case "expand":
                return true;
            case "collapse":
                return false;
            default:
                if (selectedKeys && selectedKeys.length) {
                    const found = parentKeys.every((key) =>
                        selectedKeys.includes(key)
                    );

                    return found;
                } else {
                    const found = defaultExpandKeys.includes(item.key);
                    return found;
                }
        }
    }

    const checkListItemSelected = (item: V1 | V2 | V3): boolean => {
        return !!find(selectedItems, (arrItem) => {
            return isEqual(arrItem, item);
        });
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderTruncatedText = (
        item: FItemOption<V1, V2, V3>
    ): JSX.Element => {
        const displayText = listExtractor
            ? listExtractor(item)
            : item.toString();

        return (
            <TruncateContainer data-testid="truncate-middle-container">
                <TruncateFirstLine>{displayText}</TruncateFirstLine>
                <TruncateSecondLine>{displayText}</TruncateSecondLine>
            </TruncateContainer>
        );
    };

    const hasExceededContainer = (item: FItemOption<V1, V2, V3>) => {
        const displayText = listExtractor
            ? listExtractor(item)
            : item.toString();

        let widthOfElement = 0;
        if (labelRef && labelRef.current) {
            widthOfElement = labelRef.current.getBoundingClientRect().width;
        }

        return StringHelper.shouldTruncateToTwoLines(
            displayText,
            widthOfElement
        );
    };

    const renderListItem = () => {
        if (!expand) return;

        const nextSubItems = item.subItems.values();

        return (
            <ul data-testid="sub-category-list">
                <List>
                    <ul>
                        {[...nextSubItems].map((item) => (
                            <ListItem
                                key={item.key}
                                parentKeys={[...parentKeys, item.key]}
                                item={item}
                                mode={mode}
                                listExtractor={listExtractor}
                                selectedItems={selectedItems}
                                selectedKeys={selectedKeys}
                                defaultExpandKeys={defaultExpandKeys}
                                visible={visible}
                                onBlur={onBlur}
                                onExpand={onExpand}
                                onSelect={onSelect}
                            />
                        ))}
                    </ul>
                </List>
            </ul>
        );
    };

    if (!item.subItems) {
        const hasExceeded = hasExceededContainer(item);

        /**
         * force re-render dropdown height
         * buggy happened if flat option in tier 1
         */
        if (!hasExceeded) onExpand();

        return (
            <li ref={labelRef}>
                <ListItemSelector
                    type="button"
                    data-testid="list-item"
                    tabIndex={visible ? 0 : -1}
                    $selected={checkListItemSelected(item.value)}
                    onBlur={handleBlur}
                    onClick={handleSelect}
                >
                    <Label $truncateType={itemTruncationType}>
                        {itemTruncationType === "middle" && hasExceeded
                            ? renderTruncatedText(item)
                            : item.label}
                    </Label>
                </ListItemSelector>
            </li>
        );
    }

    return (
        <li data-testid="category-list">
            <ul>
                <Category data-testid="category-title" onClick={handleClick}>
                    <ArrowButton $expand={expand}>
                        <TriangleIcon />
                    </ArrowButton>
                    <Title>{item.label}</Title>
                </Category>
                {renderListItem()}
            </ul>
        </li>
    );
};
