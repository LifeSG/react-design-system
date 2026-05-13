import { LanguageIcon } from "@lifesg/react-icons/language";
import { TickIcon } from "@lifesg/react-icons/tick";
import clsx from "clsx";
import type React from "react";
import { useEffect, useRef, useState } from "react";

import { ExpandableElement } from "../shared/dropdown-list";
import {
    baseIndicatorStyle,
    listItem,
    listItemActive,
    listItemActiveSelected,
} from "../shared/dropdown-list/dropdown-list.styles";
import type { DropdownRenderProps } from "../shared/dropdown-wrapper";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import { useId } from "../util";
import { ARIA_LABEL, LANGUAGE_CODES, LANGUAGE_DISPLAY_MAP } from "./data";
import * as styles from "./dropdown-variant.styles";
import type { VariantInternalProps } from "./internal-types";
import type { LanguageSwitcherCode } from "./types";

export const DropdownVariant = ({
    selectedLanguage,
    onSelectLanguage,
    testId,
    ...otherProps
}: VariantInternalProps): JSX.Element => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

    const id = useId();
    const listboxId = `listbox-${id}`;

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

    const handleItemSelect = (code: LanguageSwitcherCode) => {
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
        <ExpandableElement
            ref={triggerRef}
            className={styles.expandableElement}
            disabled={false}
            expanded={isOpen}
            listboxId={listboxId}
            popupRole="listbox"
            readOnly={false}
            aria-label={`${ARIA_LABEL}, ${LANGUAGE_DISPLAY_MAP[selectedLanguage]}`}
            data-testid={`${testId}--trigger`}
        >
            <span className={styles.languageIconWrapper} aria-hidden>
                <LanguageIcon />
            </span>
            {LANGUAGE_DISPLAY_MAP[selectedLanguage]}
        </ExpandableElement>
    );

    const renderDropdown = ({
        elementWidth,
        styles: floatingStyles,
        setFloatingRef,
        getFloatingProps,
    }: DropdownRenderProps) => (
        <div
            ref={setFloatingRef}
            className={styles.dropdownPanel}
            style={{ ...floatingStyles, width: elementWidth }}
            data-testid={`${testId}--panel`}
            {...getFloatingProps()}
        >
            <ul
                className={styles.dropdownList}
                role="listbox"
                id={listboxId}
                aria-label={ARIA_LABEL}
                onKeyDown={handleListKeyDown}
            >
                {LANGUAGE_CODES.map((code, index) => {
                    const isSelected = code === selectedLanguage;
                    const isFocused = index === focusedIndex;
                    return (
                        <li
                            key={code}
                            ref={(el: HTMLLIElement | null) => {
                                itemRefs.current[index] = el;
                            }}
                            role="option"
                            lang={code}
                            className={clsx(
                                styles.dropdownItem,
                                listItem,
                                isFocused &&
                                    isSelected &&
                                    listItemActiveSelected,
                                isFocused && !isSelected && listItemActive,
                                isSelected && styles.dropdownItemSelected
                            )}
                            aria-selected={isSelected}
                            tabIndex={isFocused ? 0 : -1}
                            onClick={() => handleItemSelect(code)}
                            data-testid={`${testId}--item-${code}`}
                        >
                            {isSelected ? (
                                <TickIcon
                                    className={clsx(
                                        baseIndicatorStyle,
                                        styles.selectedIndicator
                                    )}
                                    aria-hidden
                                />
                            ) : (
                                <div className={baseIndicatorStyle} />
                            )}
                            {LANGUAGE_DISPLAY_MAP[code]}
                        </li>
                    );
                })}
            </ul>
        </div>
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
