import React, { useRef } from "react";
import { CombinedFormattedOptionProps, TruncateType } from "./types";
import { StringHelper } from "../../util";
import {
    ArrowButton,
    Bold,
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
    selectableCategory?: boolean | undefined;
    searchValue: string | undefined;
    itemTruncationType?: TruncateType | undefined;
    visible: boolean;
    onBlur: () => void;
    onExpand: (parentKeys: string[]) => void;
    onRef: (ref: HTMLButtonElement, keyPaths: string[]) => void;
    onSelect: (item: CombinedFormattedOptionProps<V1, V2, V3>) => void;
}

export const ListItem = <V1, V2, V3>({
    item,
    selectedKeyPath,
    selectableCategory,
    searchValue,
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

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderTruncatedText = (
        item: CombinedFormattedOptionProps<V1, V2, V3>
    ): JSX.Element => {
        return (
            <TruncateContainer data-testid="truncate-middle-container">
                <TruncateFirstLine>{renderBolded(item)}</TruncateFirstLine>
                <TruncateSecondLine>{renderBolded(item)}</TruncateSecondLine>
            </TruncateContainer>
        );
    };

    const renderBolded = (item: CombinedFormattedOptionProps<V1, V2, V3>) => {
        if (!item.isSearchTerm) {
            return <>{item.label}</>;
        }

        const label = item.label;
        const searchTerm = searchValue.toLowerCase().trim();
        const startIndex = label.toLowerCase().indexOf(searchTerm);
        const endIndex = startIndex + searchTerm.length;

        if (startIndex == -1) {
            return <>{item.label}</>;
        }

        return (
            <>
                {`${label.slice(0, startIndex)}`}
                <Bold>{label.slice(startIndex, endIndex)}</Bold>
                {`${label.slice(endIndex)}`}
            </>
        );
    };

    const renderListItem = () => {
        const nextSubItems = item.subItems.values();

        return (
            <List $expanded={item.expanded}>
                {[...nextSubItems].map((item) => (
                    <ListItem
                        key={item.keyPath.join("-")}
                        item={item}
                        selectedKeyPath={selectedKeyPath}
                        selectableCategory={selectableCategory}
                        searchValue={searchValue}
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

    const renderTitleItem = () => {
        if (selectableCategory) {
            return (
                <Category>
                    <ArrowButton
                        ref={(ref) => onRef(ref, item.keyPath)}
                        onClick={handleExpand}
                        $expanded={item.expanded}
                        aria-expanded={item.expanded}
                    >
                        <TriangleIcon />
                    </ArrowButton>
                    <Title onClick={handleSelect}>
                        <span>{item.label}</span>
                    </Title>
                </Category>
            );
        }

        return (
            <Category onClick={handleExpand}>
                <ArrowButton
                    ref={(ref) => onRef(ref, item.keyPath)}
                    $expanded={item.expanded}
                    aria-expanded={item.expanded}
                >
                    <TriangleIcon />
                </ArrowButton>
                <Title tabIndex={-1}>
                    <span>{item.label}</span>
                </Title>
            </Category>
        );
    };

    if (!item.subItems) {
        return (
            <li ref={labelRef}>
                <ListItemSelector
                    ref={(ref) => onRef(ref, item.keyPath)}
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
                            : renderBolded(item)}
                    </Label>
                </ListItemSelector>
            </li>
        );
    }

    return (
        <li>
            {renderTitleItem()}
            {renderListItem()}
        </li>
    );
};
