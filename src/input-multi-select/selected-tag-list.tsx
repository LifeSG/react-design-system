import { CrossIcon } from "@lifesg/react-icons/cross";
import clsx from "clsx";
import { useRef, useState } from "react";

import { useIsomorphicLayoutEffect } from "../util";
import * as styles from "./selected-tag-list.styles";

export interface SelectedTagListItem {
    key: string;
    label: string;
    onRemove: () => void;
}

interface SelectedTagListProps {
    items: SelectedTagListItem[];
    /** Whether the remove button is shown on each tag */
    removable: boolean;
    /**
     * Rows shown before the remaining tags collapse into an "and X more" tag
     * @default 4
     */
    maxRows?: number | undefined;
}

export const SelectedTagList = ({
    items,
    removable,
    maxRows = 4,
}: SelectedTagListProps): JSX.Element => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    // `null` renders every tag so that the rows can be measured
    const [visibleCount, setVisibleCount] = useState<number | null>(null);
    const [width, setWidth] = useState<number>(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const measuredSignatureRef = useRef<string>();

    const itemsSignature = JSON.stringify(
        items.map(({ key, label }) => [key, label])
    );

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useIsomorphicLayoutEffect(() => {
        const element = containerRef.current;

        if (!element || typeof ResizeObserver === "undefined") {
            return;
        }

        const observer = new ResizeObserver(([entry]) => {
            setWidth(Math.round(entry.contentRect.width));
        });
        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    useIsomorphicLayoutEffect(() => {
        const element = containerRef.current;

        if (!element) {
            return;
        }

        // changes in tags or width invalidate the previous measurement
        const signature = `${itemsSignature}|${width}|${maxRows}`;
        if (measuredSignatureRef.current !== signature) {
            measuredSignatureRef.current = signature;

            if (visibleCount !== null) {
                setVisibleCount(null);
                return;
            }
        }

        const tags = Array.from(element.children) as HTMLElement[];
        const rowTops = Array.from(new Set(tags.map((tag) => tag.offsetTop)));
        rowTops.sort((a, b) => a - b);

        if (rowTops.length <= maxRows) {
            return;
        }

        if (visibleCount === null) {
            const firstHiddenIndex = tags.findIndex(
                (tag) => tag.offsetTop >= rowTops[maxRows]
            );
            setVisibleCount(firstHiddenIndex);
        } else if (visibleCount > 0) {
            // the "and X more" tag does not fit in the last row
            setVisibleCount(visibleCount - 1);
        }
    }, [visibleCount, itemsSignature, width, maxRows]);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const visibleItems =
        visibleCount === null ? items : items.slice(0, visibleCount);
    const hiddenCount = items.length - visibleItems.length;

    return (
        <div ref={containerRef} className={styles.container}>
            {visibleItems.map(({ key, label, onRemove }) => (
                <div
                    key={key}
                    className={clsx(
                        styles.tag,
                        !removable && styles.tagInactive
                    )}
                >
                    <span className={styles.tagLabel} aria-hidden>
                        {label}
                    </span>
                    {removable && (
                        <button
                            type="button"
                            className={styles.removeButton}
                            aria-label={`Remove ${label}`}
                            onClick={(event) => {
                                // do not toggle the dropdown
                                event.stopPropagation();
                                onRemove();
                            }}
                        >
                            <CrossIcon aria-hidden />
                        </button>
                    )}
                </div>
            ))}
            {hiddenCount > 0 && (
                <div className={styles.tag} data-testid="more-tag">
                    <span className={styles.tagLabel}>
                        and {hiddenCount} more
                    </span>
                    <span className={styles.moreEllipsis} aria-hidden>
                        ...
                    </span>
                </div>
            )}
        </div>
    );
};
