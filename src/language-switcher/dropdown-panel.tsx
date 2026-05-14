import { TickIcon } from "@lifesg/react-icons/tick";
import clsx from "clsx";
import type React from "react";
import { useRef } from "react";

import {
    baseIndicatorStyle,
    listItem,
    listItemActive,
    listItemActiveSelected,
} from "../shared/dropdown-list/dropdown-list.styles";
import { useDropdownRender } from "../shared/dropdown-wrapper";
import { useApplyStyle } from "../theme";
import { mergeRefs } from "../util";
import { ARIA_LABEL, LANGUAGE_CODES, LANGUAGE_DISPLAY_MAP } from "./data";
import * as styles from "./dropdown-panel.styles";
import type { LanguageSwitcherCode } from "./types";

interface DropdownPanelProps {
    focusedIndex: number;
    handleItemSelect: (code: LanguageSwitcherCode) => void;
    handleListKeyDown: (event: React.KeyboardEvent<HTMLUListElement>) => void;
    itemRefs: React.MutableRefObject<(HTMLLIElement | null)[]>;
    listboxId: string;
    selectedLanguage: LanguageSwitcherCode;
    testId: string;
}

export const DropdownPanel = ({
    focusedIndex,
    handleItemSelect,
    handleListKeyDown,
    itemRefs,
    listboxId,
    selectedLanguage,
    testId,
}: DropdownPanelProps) => {
    const {
        elementWidth,
        styles: floatingStyles,
        setFloatingRef,
        getFloatingProps,
    } = useDropdownRender();
    const panelRef = useRef<HTMLDivElement>(null);

    useApplyStyle(panelRef, {
        [styles.tokens.width]: `${elementWidth}px`,
    });

    return (
        <div
            ref={mergeRefs(setFloatingRef, panelRef)}
            className={styles.dropdownPanel}
            style={floatingStyles}
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
                            ref={(element: HTMLLIElement | null) => {
                                itemRefs.current[index] = element;
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
};
