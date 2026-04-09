import { LanguageIcon } from "@lifesg/react-icons/language";
import { TickIcon } from "@lifesg/react-icons/tick";
import React, { useEffect, useRef, useState } from "react";
import { DropdownRenderProps } from "../shared/dropdown-wrapper";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import {
    DropdownItem,
    DropdownList,
    DropdownPanel,
    LanguageIconWrapper,
    SelectedIndicator,
    StyledExpandableElement,
    UnselectedIndicator,
} from "./dropdown-variant.style";
import { ARIA_LABEL, LANGUAGE_CODES, LANGUAGE_DISPLAY_MAP } from "./data";
import { LanguageCode, VariantInternalProps } from "./types";

export const DropdownVariant = ({
    selectedLanguage,
    onSelectLanguage,
    testId,
    otherProps,
}: VariantInternalProps): JSX.Element => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        if (isOpen) {
            const selectedIdx = LANGUAGE_CODES.indexOf(selectedLanguage);
            const idx = selectedIdx >= 0 ? selectedIdx : 0;
            setFocusedIndex(idx);
            setTimeout(() => {
                itemRefs.current[idx]?.focus();
            }, 0);
        } else {
            setFocusedIndex(-1);
        }
    }, [isOpen, selectedLanguage]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleDismiss = () => {
        setIsOpen(false);
        triggerRef.current?.focus();
    };

    const handleItemSelect = (code: LanguageCode) => {
        onSelectLanguage(code);
        setIsOpen(false);
        triggerRef.current?.focus();
    };

    const handleListKeyDown = (event: React.KeyboardEvent) => {
        switch (event.key) {
            case "ArrowDown": {
                event.preventDefault();
                const next = Math.min(
                    focusedIndex + 1,
                    LANGUAGE_CODES.length - 1
                );
                setFocusedIndex(next);
                itemRefs.current[next]?.focus();
                break;
            }
            case "ArrowUp": {
                event.preventDefault();
                const prev = Math.max(focusedIndex - 1, 0);
                setFocusedIndex(prev);
                itemRefs.current[prev]?.focus();
                break;
            }
            case "Home": {
                event.preventDefault();
                setFocusedIndex(0);
                itemRefs.current[0]?.focus();
                break;
            }
            case "End": {
                event.preventDefault();
                const last = LANGUAGE_CODES.length - 1;
                setFocusedIndex(last);
                itemRefs.current[last]?.focus();
                break;
            }
            case "Enter":
            case " ": {
                event.preventDefault();
                if (focusedIndex >= 0) {
                    handleItemSelect(LANGUAGE_CODES[focusedIndex]);
                }
                break;
            }
        }
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderElement = () => (
        <StyledExpandableElement
            ref={triggerRef}
            disabled={false}
            expanded={isOpen}
            listboxId={`${testId}--listbox`}
            popupRole="listbox"
            readOnly={false}
            aria-label={`${ARIA_LABEL}, ${LANGUAGE_DISPLAY_MAP[selectedLanguage]}`}
            data-testid={`${testId}--trigger`}
        >
            <LanguageIconWrapper aria-hidden="true">
                <LanguageIcon />
            </LanguageIconWrapper>
            {LANGUAGE_DISPLAY_MAP[selectedLanguage]}
        </StyledExpandableElement>
    );

    const renderDropdown = ({
        elementWidth,
        styles,
        setFloatingRef,
        getFloatingProps,
    }: DropdownRenderProps) => (
        <DropdownPanel
            ref={setFloatingRef}
            style={{ ...styles, width: elementWidth }}
            data-testid={`${testId}--panel`}
            {...getFloatingProps()}
        >
            <DropdownList
                role="listbox"
                id={`${testId}--listbox`}
                aria-label={ARIA_LABEL}
                onKeyDown={handleListKeyDown}
            >
                {LANGUAGE_CODES.map((code, index) => {
                    const isSelected = code === selectedLanguage;
                    const isFocused = index === focusedIndex;
                    return (
                        <DropdownItem
                            key={code}
                            ref={(el) => {
                                itemRefs.current[index] = el;
                            }}
                            role="option"
                            lang={code}
                            aria-selected={isSelected}
                            tabIndex={isFocused ? 0 : -1}
                            $active={isFocused}
                            $selected={isSelected}
                            onClick={() => handleItemSelect(code)}
                            data-testid={`${testId}--item-${code}`}
                        >
                            {isSelected ? (
                                <SelectedIndicator aria-hidden="true">
                                    <TickIcon />
                                </SelectedIndicator>
                            ) : (
                                <UnselectedIndicator />
                            )}
                            {LANGUAGE_DISPLAY_MAP[code]}
                        </DropdownItem>
                    );
                })}
            </DropdownList>
        </DropdownPanel>
    );

    // =========================================================================
    // RENDER
    // =========================================================================
    return (
        <div data-testid={testId} {...otherProps}>
            <ElementWithDropdown
                enabled={true}
                isOpen={isOpen}
                renderElement={renderElement}
                renderDropdown={renderDropdown}
                onOpen={handleOpen}
                onClose={handleClose}
                onDismiss={handleDismiss}
                clickToToggle
                offset={8}
            />
        </div>
    );
};
