import React, { useRef } from "react";
import {
    LinkContainerWrapper,
    LinkDivider,
    LinkItem,
    LinkList,
    LinkListItem,
} from "./link-container-variant.style";
import { ARIA_LABEL, LANGUAGE_CODES, LANGUAGE_DISPLAY_MAP } from "./data";
import { VariantInternalProps } from "./internal-types";

export const LinkContainerVariant = ({
    selectedLanguage,
    onSelectLanguage,
    testId,
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
        <LinkContainerWrapper data-testid={testId} {...otherProps}>
            <LinkList role="group" aria-label={ARIA_LABEL}>
                {LANGUAGE_CODES.map((code, index) => {
                    const isActive = code === selectedLanguage;
                    return (
                        <React.Fragment key={code}>
                            {index > 0 && (
                                <li aria-hidden>
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
                                    tabIndex={isActive ? 0 : -1}
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
        </LinkContainerWrapper>
    );
};
