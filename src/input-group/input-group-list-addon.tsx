import React, { useEffect, useRef, useState } from "react";
import { DropdownList } from "../shared/dropdown-list/dropdown-list";
import {
    DisplayContainer,
    Divider,
    ElementBoundary,
    IconContainer,
    LabelContainer,
    PlaceholderLabel,
    Selector,
    StyledIcon,
    ValueLabel,
    Wrapper,
} from "./input-group-list-addon.style";
import { MainInput } from "./input-group.style";
import { InputGroupProps, ListAddon } from "./types";

export const InputGroupListAddon = <T, V>({
    addon,
    error,
    onChange,
    ...otherProps
}: InputGroupProps<T, V>) => {
    const {
        value,
        placeholder,
        options,
        enableSearch,
        searchFunction,
        searchPlaceholder,
        valueExtractor,
        listExtractor,
        displayValueExtractor,
        selectedOption,
        onSelectOption,
        onHideOptions,
        onShowOptions,
        "data-selector-testid": selectorTestId,
    } = addon.attributes as ListAddon<T, V>;

    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [selected, setSelected] = useState<T>(value);
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const nodeRef = useRef();
    const selectorRef = useRef<HTMLButtonElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelected(value);
    }, [value]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    // =============================================================================
    // HELPER FUNCTIONS
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
    // EVENT HANDLERS
    // =============================================================================
    const handleClick = (event: MouseEvent) => {
        if (!otherProps.disabled) {
            if (nodeRef && (nodeRef.current as any).contains(event.target)) {
                // inside click
                return;
            }
            // outside click
            setShowOptions(false);
            triggerOptionDisplayCallback(false);
        }
    };

    const handleAddonSelectorClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();

        if (!otherProps.disabled) {
            setShowOptions(!showOptions);
            triggerOptionDisplayCallback(!showOptions);
        }
    };

    const handleListItemClick = (item: T, extractedValue: V) => {
        setSelected(item);
        setShowOptions(false);
        triggerOptionDisplayCallback(false);

        if (selectorRef) {
            selectorRef.current.focus();
        }

        if (onSelectOption) {
            onSelectOption(item, extractedValue);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(event);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderOptionList = () => {
        if (options && options.length > 0) {
            return (
                <DropdownList
                    listItems={options}
                    selectedItems={selectedOption ? [selectedOption] : []}
                    onSelectItem={handleListItemClick}
                    valueExtractor={valueExtractor}
                    listExtractor={listExtractor}
                    visible={showOptions}
                    enableSearch={enableSearch}
                    searchFunction={searchFunction}
                    searchPlaceholder={searchPlaceholder}
                    data-testid="dropdown-list"
                />
            );
        }

        return null;
    };

    const renderSelectorContent = () => (
        <>
            <LabelContainer>
                {placeholder && !selected && (
                    <PlaceholderLabel>{placeholder}</PlaceholderLabel>
                )}
                {selected && (
                    <ValueLabel data-testid="selector-label">
                        {getDisplayValue()}
                    </ValueLabel>
                )}
            </LabelContainer>
            <IconContainer $expanded={showOptions}>
                <StyledIcon type="chevron-down" />
            </IconContainer>
        </>
    );

    const renderDisplay = () => (
        <DisplayContainer $expanded={showOptions}>
            <Selector
                ref={selectorRef}
                type="button"
                data-testid={selectorTestId || "addon-selector"}
                onClick={handleAddonSelectorClick}
            >
                {renderSelectorContent()}
            </Selector>
            <Divider />
            <MainInput
                {...otherProps}
                error={error}
                onChange={handleInputChange}
                data-testid={otherProps["data-testid"] || "input"}
            />
        </DisplayContainer>
    );

    return (
        <Wrapper>
            <ElementBoundary
                ref={nodeRef}
                disabled={otherProps.disabled}
                error={error && !showOptions}
                expanded={showOptions}
            >
                {renderDisplay()}
                {renderOptionList()}
            </ElementBoundary>
        </Wrapper>
    );
};
