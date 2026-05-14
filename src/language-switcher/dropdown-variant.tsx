import { LanguageIcon } from "@lifesg/react-icons/language";
import type React from "react";
import { useEffect, useRef, useState } from "react";

import { ExpandableElement } from "../shared/dropdown-list";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import { useId } from "../util";
import { ARIA_LABEL, LANGUAGE_CODES, LANGUAGE_DISPLAY_MAP } from "./data";
import { DropdownPanel } from "./dropdown-panel";
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

    const renderDropdown = () => (
        <DropdownPanel
            focusedIndex={focusedIndex}
            handleItemSelect={handleItemSelect}
            handleListKeyDown={handleListKeyDown}
            itemRefs={itemRefs}
            listboxId={listboxId}
            selectedLanguage={selectedLanguage}
            testId={testId}
        />
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
