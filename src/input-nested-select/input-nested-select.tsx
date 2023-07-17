import React, { useEffect, useRef, useState } from "react";
import { NestedDropdownList } from "../shared/nested-dropdown-list/nested-dropdown-list";
import { DropdownWrapper } from "../shared/dropdown-wrapper";
import {
    Divider,
    IconContainer,
    LabelContainer,
    PlaceholderLabel,
    Selector,
    StyledChevronIcon,
    ValueLabel,
} from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { InputNestedSelectProps } from "./types";
import { StringHelper } from "../util";
import {
    FL2,
    FL3,
    FormattedOption,
} from "../shared/nested-dropdown-list/types";

export const InputNestedSelect = <V1, V2, V3>({
    selectedOption,
    placeholder = "Select",
    options,
    disabled,
    error,
    className,
    "data-testid": testId,
    id,
    displayValueExtractor,
    selectedKeyPath,
    mode,
    valueExtractor,
    valueToStringFunction,
    listExtractor,
    onSelectOption,
    listStyleWidth,
    onShowOptions,
    onHideOptions,
    onRetry,
    optionsLoadState = "success",
    optionTruncationType = "end",
    ...otherProps
}: InputNestedSelectProps<V1, V2, V3>): JSX.Element => {
    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const [selected, setSelected] = useState<V1 | V2 | V3>(selectedOption);
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const selectorRef = useRef<HTMLButtonElement>();
    const labelContainerRef = useRef<HTMLDivElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelected(selectedOption);
    }, [selectedOption]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSelectorClick = (event: React.MouseEvent) => {
        event.preventDefault();

        // TODO: what is this?
        if (disabled || otherProps.readOnly) {
            return;
        }
        setShowOptions(!showOptions);
        triggerOptionDisplayCallback(!showOptions);
    };

    const handleListItemClick = (
        item: FormattedOption<V1, V2, V3> | FL2<V2, V3> | FL3<V3>
    ) => {
        setSelected(item.value);
        setShowOptions(false);
        triggerOptionDisplayCallback(false);

        if (selectorRef) {
            selectorRef.current.focus();
        }

        if (onSelectOption) {
            // onSelectOption(item.categories, value);
        }
    };

    const handleWrapperBlur = () => {
        setShowOptions(false);
        triggerOptionDisplayCallback(false);
    };

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================
    const getDisplayValue = (): string | V1 | V2 | V3 => {
        if (displayValueExtractor) {
            return displayValueExtractor(selected);
        }

        if (valueExtractor) {
            return valueExtractor(selected);
        }

        return selected.toString();
    };

    const convertValueToString = (value: string | V1 | V2 | V3): string => {
        if (typeof value === "string") {
            return value;
        } else {
            return valueToStringFunction(value) || value.toString();
        }
    };

    const truncateValue = (value: string | V1 | V2 | V3) => {
        if (optionTruncationType === "middle") {
            let widthOfElement = 0;
            if (labelContainerRef && labelContainerRef.current) {
                widthOfElement =
                    labelContainerRef.current.getBoundingClientRect().width;
            }

            return StringHelper.truncateOneLine(
                convertValueToString(value),
                widthOfElement,
                120,
                8
            );
        }

        return value;
    };

    const triggerOptionDisplayCallback = (show: boolean) => {
        if (!show && onHideOptions) {
            onHideOptions();
        }

        if (show && onShowOptions) {
            onShowOptions();
        }
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const renderLabel = () => {
        if (!selected) {
            return (
                <PlaceholderLabel truncateType={optionTruncationType}>
                    {placeholder}
                </PlaceholderLabel>
            );
        } else {
            return (
                <ValueLabel truncateType={optionTruncationType}>
                    {truncateValue(getDisplayValue())}
                </ValueLabel>
            );
        }
    };

    const renderSelectorContent = () => (
        <>
            <LabelContainer ref={labelContainerRef}>
                {renderLabel()}
            </LabelContainer>
            <IconContainer expanded={showOptions}>
                <StyledChevronIcon />
            </IconContainer>
        </>
    );

    const renderOptionList = () => {
        if ((options && options.length > 0) || onRetry) {
            return (
                <NestedDropdownList
                    data-testid="dropdown-list"
                    listItems={options}
                    valueExtractor={valueExtractor}
                    listExtractor={listExtractor}
                    listStyleWidth={listStyleWidth}
                    visible={showOptions}
                    mode={mode}
                    selectedKeyPath={selectedKeyPath}
                    selectedItems={selected ? [selected] : []}
                    itemsLoadState={optionsLoadState}
                    itemTruncationType={optionTruncationType}
                    onSelectItem={handleListItemClick}
                    onRetry={onRetry}
                />
            );
        }

        return null;
    };

    /**
     * TODO:
     * 1. handleListDismiss
     */

    return (
        <DropdownWrapper
            className={className}
            show={showOptions}
            error={error && !showOptions}
            disabled={disabled}
            readOnly={otherProps.readOnly}
            testId={testId}
            onBlur={handleWrapperBlur}
        >
            <Selector
                ref={selectorRef}
                type="button"
                data-testid={id || "selector"}
                disabled={disabled}
                onClick={handleSelectorClick}
                {...otherProps}
            >
                {renderSelectorContent()}
            </Selector>
            {showOptions && <Divider />}
            {renderOptionList()}
        </DropdownWrapper>
    );
};
