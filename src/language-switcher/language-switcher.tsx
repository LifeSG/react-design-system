import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { LanguageIcon } from "@lifesg/react-icons/language";
import { TickIcon } from "@lifesg/react-icons/tick";
import React, { useCallback, useRef, useState } from "react";
import { PopoverTrigger } from "../popover-v2";
import {
    ChevronWrapper,
    DropdownItem,
    DropdownList,
    DropdownPanel,
    LanguageIconWrapper,
    LinkContainerWrapper,
    LinkDivider,
    LinkItem,
    LinkList,
    LinkListItem,
    LiveRegion,
    TickIconWrapper,
    TriggerButton,
} from "./language-switcher.style";
import {
    LANGUAGE_CODES,
    LANGUAGE_DISPLAY_MAP,
    LanguageCode,
    LanguageSwitcherProps,
} from "./types";

// =============================================================================
// CONSTANTS
// =============================================================================
const ARIA_LABEL =
    "Choose language / 选择语言 / Pilih bahasa / மொழியை தேர்ந்தெடுக்கவும்";

export const LanguageSwitcher = ({
    variant = "dropdown",
    selectedLanguage = "en",
    onSelectLanguage,
    "data-testid": testId = "language-switcher",
    ...otherProps
}: LanguageSwitcherProps): JSX.Element => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const [liveMessage, setLiveMessage] = useState("");

    // =========================================================================
    // HELPER
    // =========================================================================
    const announceLanguage = useCallback((code: LanguageCode) => {
        setLiveMessage(`${LANGUAGE_DISPLAY_MAP[code]} selected`);
    }, []);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleSelectLanguage = useCallback(
        (code: LanguageCode) => {
            if (code !== selectedLanguage && onSelectLanguage) {
                onSelectLanguage(code);
                announceLanguage(code);
            }
        },
        [selectedLanguage, onSelectLanguage, announceLanguage]
    );

    // =========================================================================
    // RENDER
    // =========================================================================
    switch (variant) {
        case "dropdown":
            return (
                <DropdownVariant
                    selectedLanguage={selectedLanguage}
                    onSelectLanguage={handleSelectLanguage}
                    testId={testId}
                    liveMessage={liveMessage}
                    otherProps={otherProps}
                />
            );
        case "link-container":
            return (
                <LinkContainerVariant
                    selectedLanguage={selectedLanguage}
                    onSelectLanguage={handleSelectLanguage}
                    testId={testId}
                    liveMessage={liveMessage}
                    otherProps={otherProps}
                />
            );
    }
};

// =============================================================================
// DROPDOWN VARIANT (internal)
// =============================================================================
interface VariantInternalProps {
    selectedLanguage: LanguageCode;
    onSelectLanguage: (code: LanguageCode) => void;
    testId: string;
    liveMessage: string;
    otherProps: React.HTMLAttributes<HTMLDivElement>;
}

const DropdownVariant = ({
    selectedLanguage,
    onSelectLanguage,
    testId,
    liveMessage,
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
    // EVENT HANDLERS
    // =========================================================================
    const handlePopoverAppear = () => {
        setIsOpen(true);
        const selectedIdx = LANGUAGE_CODES.indexOf(selectedLanguage);
        const idx = selectedIdx >= 0 ? selectedIdx : 0;
        setFocusedIndex(idx);
        requestAnimationFrame(() => {
            itemRefs.current[idx]?.focus();
        });
    };

    const handlePopoverDismiss = () => {
        setIsOpen(false);
        setFocusedIndex(-1);
    };

    const dismissPopover = () => {
        // Dispatch Escape to close PopoverTrigger via its useDismiss hook
        document.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "Escape",
                bubbles: true,
            })
        );
    };

    const handleItemSelect = (code: LanguageCode) => {
        onSelectLanguage(code);
        dismissPopover();
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
            case "Tab": {
                dismissPopover();
                break;
            }
        }
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderDropdownContent = () => {
        const triggerWidth = triggerRef.current?.offsetWidth;
        return (
            <DropdownPanel
                data-testid={`${testId}--panel`}
                $width={triggerWidth}
            >
                <DropdownList
                    role="listbox"
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
                                $selected={isSelected}
                                onClick={() => handleItemSelect(code)}
                                data-testid={`${testId}--item-${code}`}
                            >
                                {isSelected && (
                                    <TickIconWrapper aria-hidden="true">
                                        <TickIcon />
                                    </TickIconWrapper>
                                )}
                                {LANGUAGE_DISPLAY_MAP[code]}
                            </DropdownItem>
                        );
                    })}
                </DropdownList>
            </DropdownPanel>
        );
    };

    // =========================================================================
    // RENDER
    // =========================================================================
    return (
        <div data-testid={testId} {...otherProps}>
            <PopoverTrigger
                position="bottom-start"
                popoverContent={() => renderDropdownContent()}
                customOffset={8}
                onPopoverAppear={handlePopoverAppear}
                onPopoverDismiss={handlePopoverDismiss}
                data-testid={`${testId}--popover`}
            >
                <TriggerButton
                    ref={triggerRef}
                    type="button"
                    role="combobox"
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                    aria-label={`${ARIA_LABEL}, ${LANGUAGE_DISPLAY_MAP[selectedLanguage]}`}
                    data-testid={`${testId}--trigger`}
                >
                    <LanguageIconWrapper aria-hidden="true">
                        <LanguageIcon />
                    </LanguageIconWrapper>
                    {LANGUAGE_DISPLAY_MAP[selectedLanguage]}
                    <ChevronWrapper $expanded={isOpen} aria-hidden="true">
                        <ChevronDownIcon />
                    </ChevronWrapper>
                </TriggerButton>
            </PopoverTrigger>
            <LiveRegion aria-live="polite" role="status">
                {liveMessage}
            </LiveRegion>
        </div>
    );
};

// =============================================================================
// LINK CONTAINER VARIANT (internal)
// =============================================================================
const LinkContainerVariant = ({
    selectedLanguage,
    onSelectLanguage,
    testId,
    liveMessage,
    otherProps,
}: VariantInternalProps): JSX.Element => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
        let nextIndex: number | null = null;

        switch (event.key) {
            case "ArrowRight":
            case "ArrowDown": {
                event.preventDefault();
                nextIndex = Math.min(index + 1, LANGUAGE_CODES.length - 1);
                break;
            }
            case "ArrowLeft":
            case "ArrowUp": {
                event.preventDefault();
                nextIndex = Math.max(index - 1, 0);
                break;
            }
            case "Enter":
            case " ": {
                event.preventDefault();
                const code = LANGUAGE_CODES[index];
                onSelectLanguage(code);
                break;
            }
        }

        if (nextIndex !== null) {
            itemRefs.current[nextIndex]?.focus();
        }
    };

    // =========================================================================
    // RENDER
    // =========================================================================
    return (
        <LinkContainerWrapper
            data-testid={testId}
            role="group"
            aria-label={ARIA_LABEL}
            {...otherProps}
        >
            <LinkList>
                {LANGUAGE_CODES.map((code, index) => {
                    const isActive = code === selectedLanguage;
                    return (
                        <React.Fragment key={code}>
                            {index > 0 && (
                                <li aria-hidden="true">
                                    <LinkDivider />
                                </li>
                            )}
                            <LinkListItem>
                                <LinkItem
                                    ref={(el) => {
                                        itemRefs.current[index] = el;
                                    }}
                                    type="button"
                                    lang={code}
                                    $active={isActive}
                                    aria-pressed={isActive}
                                    tabIndex={0}
                                    onClick={() => onSelectLanguage(code)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    data-testid={`${testId}--item-${code}`}
                                >
                                    {LANGUAGE_DISPLAY_MAP[code]}
                                </LinkItem>
                            </LinkListItem>
                        </React.Fragment>
                    );
                })}
            </LinkList>
            <LiveRegion aria-live="polite" role="status">
                {liveMessage}
            </LiveRegion>
        </LinkContainerWrapper>
    );
};
