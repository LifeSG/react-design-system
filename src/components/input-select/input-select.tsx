import React, { useEffect, useRef, useState } from "react";
import { DropdownList } from "../dropdown-list/dropdown-list";
import {
    Divider,
    ElementBoundary,
    IconContainer,
    LabelContainer,
    PlaceholderLabel,
    Selector,
    StyledIcon,
    ValueLabel,
    Wrapper,
} from "./input-select.styles";
import { InputSelectProps } from "./types";

export const InputSelect = <T,>({
    selectedOption,
    placeholder,
    options,
    disabled,
    error,
    "data-testid": testId,
    enableSearch = false,
    searchFunction,
    valueExtractor,
    listExtractor,
    displayValueExtractor,
    onSelectItem,
    listStyleWidth,
    onShowOptions,
    onHideOptions,
    ...otherProps
}: InputSelectProps<T>) => {
    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const [selected, setSelected] = useState<any>(selectedOption);
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const nodeRef = useRef<HTMLDivElement>();
    const selectorRef = useRef<HTMLButtonElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDownEvent);

        return () => {
            document.removeEventListener("mousedown", handleMouseDownEvent);
        };
    }, []);

    useEffect(() => {
        setSelected(selectedOption);
    }, [selectedOption]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleMouseDownEvent = (event: MouseEvent) => {
        if (!disabled) {
            if (nodeRef && (nodeRef.current as any).contains(event.target)) {
                // inside click
                return;
            }
            // outside click
            setShowOptions(false);
            triggerOptionDisplayCallback(false);
        }
    };

    const handleSelectorClick = (event: React.MouseEvent) => {
        event.preventDefault();

        if (!disabled) {
            setShowOptions(!showOptions);
            triggerOptionDisplayCallback(!showOptions);
        }
    };

    const handleListItemClick = (item: any, extractedValue: any) => {
        setSelected(item);
        setShowOptions(false);
        triggerOptionDisplayCallback(false);

        if (selectorRef) {
            selectorRef.current.focus();
        }

        if (onSelectItem) {
            onSelectItem(item, extractedValue);
        }
    };

    const handleListDismiss = () => {
        setShowOptions(false);
        triggerOptionDisplayCallback(false);

        if (selectorRef) {
            selectorRef.current.focus();
        }
    };

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================
    const getDisplayValue = () => {
        if (displayValueExtractor) {
            return displayValueExtractor(selected);
        }

        if (valueExtractor) {
            return valueExtractor(selected);
        }

        return selected.toString();
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
    const renderSelectorContent = () => (
        <>
            <LabelContainer>
                {placeholder && !selected && (
                    <PlaceholderLabel>{placeholder}</PlaceholderLabel>
                )}
                {selected && <ValueLabel>{getDisplayValue()}</ValueLabel>}
            </LabelContainer>
            <IconContainer expanded={showOptions}>
                <StyledIcon type="chevron-down" />
            </IconContainer>
        </>
    );

    const renderOptionList = () => {
        if (options && options.length > 0) {
            return (
                <DropdownList
                    listItems={options}
                    onSelectItem={handleListItemClick}
                    onDismiss={handleListDismiss}
                    valueExtractor={valueExtractor}
                    listExtractor={listExtractor}
                    listStyleWidth={listStyleWidth}
                    visible={showOptions}
                    enableSearch={enableSearch}
                    searchFunction={searchFunction}
                    data-testid="dropdown-list"
                />
            );
        }

        return null;
    };

    return (
        <Wrapper>
            <ElementBoundary
                ref={nodeRef}
                error={error && !showOptions}
                disabled={disabled}
                expanded={showOptions}
                data-testid={testId}
            >
                <Selector
                    ref={selectorRef}
                    type="button"
                    data-testid="selector"
                    onClick={handleSelectorClick}
                    {...otherProps}
                >
                    {renderSelectorContent()}
                </Selector>
                {showOptions && <Divider />}
                {renderOptionList()}
            </ElementBoundary>
        </Wrapper>
    );
};
