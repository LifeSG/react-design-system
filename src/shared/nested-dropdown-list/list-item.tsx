import React, { useRef } from "react";
import { CombinedFormattedOptionProps, TruncateType } from "./types";
import { StringHelper } from "../../util";
import {
    ArrowButton,
    Bold,
    ButtonSection,
    Category,
    CheckboxInput,
    Item,
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
    selectedKeyPaths: string[][];
    selectableCategory?: boolean | undefined;
    searchValue: string | undefined;
    itemTruncationType?: TruncateType | undefined;
    multiSelect: boolean;
    visible: boolean;
    onBlur: () => void;
    onExpand: (parentKeys: string[]) => void;
    onRef: (ref: HTMLButtonElement, keyPaths: string[]) => void;
    onSelect: (item: CombinedFormattedOptionProps<V1, V2, V3>) => void;
    onSelectCategory: (item: CombinedFormattedOptionProps<V1, V2, V3>) => void;
}

export const ListItem = <V1, V2, V3>({
    item,
    selectedKeyPaths,
    selectableCategory,
    searchValue,
    itemTruncationType,
    multiSelect,
    visible,
    onBlur,
    onExpand,
    onRef,
    onSelect,
    onSelectCategory,
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

    const handleSelectParent = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        onSelectCategory(item);
    };

    const handleBlur = () => {
        if (onBlur) {
            onBlur();
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const checkListItemSelected = (keyPath: string[]): boolean =>
        selectedKeyPaths.some(
            (key) => JSON.stringify(key) === JSON.stringify(keyPath)
        );

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
            return <>{label}</>;
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
            <List $expanded={item.expanded} $multiSelect={multiSelect}>
                {[...nextSubItems].map((item) => (
                    <ListItem
                        key={item.keyPath.join("-")}
                        item={item}
                        selectedKeyPaths={selectedKeyPaths}
                        selectableCategory={selectableCategory}
                        searchValue={searchValue}
                        itemTruncationType={itemTruncationType}
                        multiSelect={multiSelect}
                        visible={visible}
                        onBlur={onBlur}
                        onExpand={onExpand}
                        onRef={onRef}
                        onSelect={onSelect}
                        onSelectCategory={onSelectCategory}
                    />
                ))}
            </List>
        );
    };

    const renderCategoryIcon = () => {
        return (
            <ButtonSection>
                <ArrowButton
                    ref={(ref) => onRef(ref, item.keyPath)}
                    $expanded={item.expanded}
                    aria-expanded={item.expanded}
                    onClick={handleExpand}
                >
                    <TriangleIcon />
                </ArrowButton>
                {multiSelect && (
                    <CheckboxInput
                        displaySize="small"
                        $type="category"
                        checked={item.checked}
                        onChange={handleSelectParent}
                    />
                )}
            </ButtonSection>
        );
    };

    const renderCategoryItem = () => {
        let categoryProps = {};
        let titleProps = {};

        if (selectableCategory) {
            titleProps = {
                onClick: handleSelect,
            };
        }

        if (multiSelect) {
            titleProps = {
                onClick: handleExpand,
                tabIndex: -1,
            };
        } else {
            categoryProps = {
                onClick: handleExpand,
            };
        }

        return (
            <Category {...categoryProps}>
                {renderCategoryIcon()}
                <Title {...titleProps}>
                    <span>{item.label}</span>
                </Title>
            </Category>
        );
    };

    const renderLabel = () => {
        return (
            <>
                {multiSelect && (
                    <CheckboxInput
                        displaySize="small"
                        checked={checkListItemSelected(item.keyPath)}
                        $type="label"
                    />
                )}
                <Label $truncateType={itemTruncationType}>
                    {itemTruncationType === "middle" &&
                    hasExceededContainer(item)
                        ? renderTruncatedText(item)
                        : renderBolded(item)}
                </Label>
            </>
        );
    };

    if (!item.subItems) {
        return (
            <Item
                ref={labelRef}
                $level={item.keyPath.length}
                $multiSelect={multiSelect}
            >
                <ListItemSelector
                    ref={(ref) => onRef(ref, item.keyPath)}
                    type="button"
                    tabIndex={visible ? 0 : -1}
                    $selected={checkListItemSelected(item.keyPath)}
                    $multiSelect={multiSelect}
                    onBlur={handleBlur}
                    onClick={handleSelect}
                >
                    {renderLabel()}
                </ListItemSelector>
            </Item>
        );
    }

    return (
        <li>
            {renderCategoryItem()}
            {renderListItem()}
        </li>
    );
};
