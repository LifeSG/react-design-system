import React, { useEffect, useRef, useState } from "react";
import { DropdownList } from "../shared/dropdown-list/dropdown-list";
import { DropdownWrapper } from "../shared/dropdown-wrapper";
import {
    DisplayContainer,
    Divider,
    IconContainer,
    LabelContainer,
    PlaceholderLabel,
    Selector,
    SelectorReadOnly,
    StyledChevronIcon,
    ValueLabel,
} from "./input-group-list-addon.style";
import { MainInput } from "./input-group.style";
import { InputGroupProps, ListAddon } from "./types";

export const Component = <T, V>(
    {
        addon,
        error,
        onChange,
        readOnly,
        className,
        onBlur,
        ...otherProps
    }: InputGroupProps<T, V>,
    ref
) => {
    const {
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

    const { position } = addon;

    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [selected, setSelected] = useState<T>(selectedOption);
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const selectorRef = useRef<HTMLButtonElement>(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelected(selectedOption);
    }, [selectedOption]);

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
    const handleWrapperBlur = () => {
        setShowOptions(false);
        triggerOptionDisplayCallback(false);
        handleBlur();
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

    const handleBlur = () => {
        if (onBlur) onBlur();
    };

    const handleDismiss = () => {
        setShowOptions(false);
        triggerOptionDisplayCallback(false);

        if (selectorRef) {
            selectorRef.current.focus();
        }
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
                    onBlur={handleBlur}
                    onDismiss={handleDismiss}
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
                <StyledChevronIcon />
            </IconContainer>
        </>
    );

    const renderSelector = () => {
        if (readOnly) {
            return selected ? (
                <SelectorReadOnly>
                    <ValueLabel data-testid="selector-label">
                        {getDisplayValue()}
                    </ValueLabel>
                </SelectorReadOnly>
            ) : null;
        } else {
            return (
                <Selector
                    ref={selectorRef}
                    type="button"
                    disabled={otherProps.disabled}
                    data-testid={selectorTestId || "addon-selector"}
                    onClick={handleAddonSelectorClick}
                >
                    {renderSelectorContent()}
                </Selector>
            );
        }
    };

    const renderDisplay = () => (
        <DisplayContainer
            $expanded={showOptions}
            $readOnly={readOnly}
            $position={position}
        >
            {renderSelector()}
            <Divider $readOnly={readOnly} $position={position} />
            <MainInput
                ref={ref}
                {...otherProps}
                readOnly={readOnly}
                error={error}
                onChange={handleInputChange}
                data-testid={otherProps["data-testid"] || "input"}
                onBlur={handleBlur}
                styleType="no-border"
            />
        </DisplayContainer>
    );

    return (
        <DropdownWrapper
            className={className}
            show={showOptions}
            error={error && !showOptions}
            disabled={otherProps.disabled}
            readOnly={readOnly}
            onBlur={handleWrapperBlur}
        >
            {renderDisplay()}
            {renderOptionList()}
        </DropdownWrapper>
    );
};

export const InputGroupListAddon = React.forwardRef(Component);
