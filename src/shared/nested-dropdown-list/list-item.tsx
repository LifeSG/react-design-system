import React, { useRef } from "react";
import { CombinedFormattedOptionProps, TruncateType } from "./types";
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
    item: CombinedFormattedOptionProps<V1, V2, V3>;
    selectedKeyPath?: string[] | undefined;
    itemTruncationType: TruncateType;
    visible: boolean;
    onBlur: () => void;
    onExpand: (parentKeys: string[]) => void;
    onRef: (ref: HTMLButtonElement, keyPaths: string[]) => void;
    onSelect: (item: CombinedFormattedOptionProps<V1, V2, V3>) => void;
}

export const ListItem = <V1, V2, V3>({
    item,
    selectedKeyPath,
    itemTruncationType,
    visible,
    onBlur,
    onExpand,
    onRef,
    onSelect,
}: ListItemProps<V1, V2, V3>): JSX.Element => {
    // =============================================================================
    // CONST, REF, STATE
    // =============================================================================
    const labelRef = useRef<HTMLLIElement>();

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleExpand = (event: React.MouseEvent) => {
        event.preventDefault();
        onExpand(item.keyPath);
    };
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
    const checkListItemSelected = (keyPath: string[]): boolean => {
        return JSON.stringify(selectedKeyPath) === JSON.stringify(keyPath);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderTruncatedText = (
        item: CombinedFormattedOptionProps<V1, V2, V3>
    ): JSX.Element => {
        return (
            <TruncateContainer data-testid="truncate-middle-container">
                <TruncateFirstLine>{item.label}</TruncateFirstLine>
                <TruncateSecondLine>{item.label}</TruncateSecondLine>
            </TruncateContainer>
        );
    };

    const hasExceededContainer = (
        item: CombinedFormattedOptionProps<V1, V2, V3>
    ) => {
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
        if (!item.expanded) return;

        const nextSubItems = item.subItems.values();

        return (
            <List>
                {[...nextSubItems].map((item) => (
                    <ListItem
                        key={item.keyPath.join("-")}
                        item={item}
                        selectedKeyPath={selectedKeyPath}
                        itemTruncationType={itemTruncationType}
                        visible={visible}
                        onBlur={onBlur}
                        onExpand={onExpand}
                        onRef={onRef}
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
                    ref={(ref) => onRef(ref, item.keyPath)}
                    aria-expanded={item.expanded}
                    type="button"
                    tabIndex={visible ? 0 : -1}
                    $selected={checkListItemSelected(item.keyPath)}
                    $level_3={item.keyPath.length === 3}
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
            <Category onClick={handleExpand}>
                <ArrowButton
                    ref={(ref) => onRef(ref, item.keyPath)}
                    $expand={item.expanded}
                    aria-expanded={item.expanded}
                >
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
