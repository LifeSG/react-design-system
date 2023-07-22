import { useCallback, useRef, useState } from "react";
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
    selectedKey?: string[] | undefined;
    defaultExpandKeys: string[];
    itemTruncationType: TruncateType;
    visible: boolean;
    onSelect: (item: FItemOption<V1, V2, V3>) => void;
    onExpand: () => void;
    onBlur: () => void;
}

export const ListItem = <V1, V2, V3>({
    item,
    mode,
    selectedKey,
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
                if (selectedKey && selectedKey.length) {
                    for (let i = 0; i < selectedKey.length; i++) {
                        const found = item.keyPath.every(
                            (key, index) => selectedKey[index] === key
                        );

                        if (!found) break;

                        return found;
                    }
                } else {
                    const found = defaultExpandKeys.includes(
                        item.keyPath[item.keyPath.length - 1]
                    );
                    return found;
                }
        }
    }

    const checkListItemSelected = (keyPath: string[]): boolean => {
        return JSON.stringify(selectedKey) === JSON.stringify(keyPath);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderTruncatedText = (
        item: FItemOption<V1, V2, V3>
    ): JSX.Element => {
        return (
            <TruncateContainer data-testid="truncate-middle-container">
                <TruncateFirstLine>{item.label}</TruncateFirstLine>
                <TruncateSecondLine>{item.label}</TruncateSecondLine>
            </TruncateContainer>
        );
    };

    const hasExceededContainer = (item: FItemOption<V1, V2, V3>) => {
        const displayText = item.label;

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
            <List>
                {[...nextSubItems].map((item) => (
                    <ListItem
                        key={item.keyPath.join("-")}
                        item={item}
                        mode={mode}
                        selectedKey={selectedKey}
                        defaultExpandKeys={defaultExpandKeys}
                        itemTruncationType={itemTruncationType}
                        visible={visible}
                        onBlur={onBlur}
                        onExpand={onExpand}
                        onSelect={onSelect}
                    />
                ))}
            </List>
        );
    };

    if (!item.subItems) {
        return (
            <li ref={labelRef}>
                <ListItemSelector
                    type="button"
                    data-testid="list-item"
                    tabIndex={visible ? 0 : -1}
                    $selected={checkListItemSelected(item.keyPath)}
                    onBlur={handleBlur}
                    onClick={handleSelect}
                >
                    <Label $truncateType={itemTruncationType}>
                        {itemTruncationType === "middle" &&
                        hasExceededContainer(item)
                            ? renderTruncatedText(item)
                            : item.label}
                    </Label>
                </ListItemSelector>
            </li>
        );
    }

    return (
        <li>
            <Category onClick={handleClick}>
                <ArrowButton $expand={expand}>
                    <TriangleIcon />
                </ArrowButton>
                <Title tabIndex={-1}>
                    <span>{item.label}</span>
                </Title>
            </Category>
            {renderListItem()}
        </li>
    );
};
