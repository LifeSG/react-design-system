import clsx from "clsx";
import type React from "react";
import { useRef } from "react";

import { ARIA_LABEL, LANGUAGE_CODES, LANGUAGE_DISPLAY_MAP } from "./data";
import type { VariantInternalProps } from "./internal-types";
import * as styles from "./link-container-variant.styles";

export const LinkContainerVariant = ({
    selectedLanguage,
    onSelectLanguage,
    testId,
    className,
    ...otherProps
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
        <div
            className={clsx(styles.linkContainerWrapper, className)}
            data-testid={testId}
            {...otherProps}
        >
            <ul
                className={styles.linkList}
                role="group"
                aria-label={ARIA_LABEL}
            >
                {LANGUAGE_CODES.map((code, index) => {
                    const isActive = code === selectedLanguage;
                    return (
                        <li className={styles.linkListItem} key={code}>
                            <button
                                ref={(el) => {
                                    itemRefs.current[index] = el;
                                }}
                                type="button"
                                lang={code}
                                className={clsx(
                                    styles.linkItem,
                                    isActive && styles.linkItemActive
                                )}
                                aria-pressed={isActive}
                                tabIndex={isActive ? 0 : -1}
                                onClick={() => onSelectLanguage(code)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                data-testid={`${testId}--item-${code}`}
                            >
                                {LANGUAGE_DISPLAY_MAP[code]}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
