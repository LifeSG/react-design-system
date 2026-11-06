import { CrossIcon } from "@lifesg/react-icons/cross";
import clsx from "clsx";
import type React from "react";
import { useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

import { useIsomorphicLayoutEffect } from "../../util";
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

    const containerRef = useRef<HTMLDivElement>(null);
    const measuredSignatureRef = useRef<string>();

    const { width } = useResizeDetector({
        targetRef: containerRef,
        handleHeight: false,
    });

    const itemsSignature = JSON.stringify(
        items.map(({ key, label }) => [key, label])
    );

    // =========================================================================
    // EFFECTS
    // =========================================================================
    /**
     * Measures how many tags fit within `maxRows`. This runs over several
     * layout-effect passes before paint:
     * 1. `visibleCount === null`: render every tag and find the first one that
     *    starts on row `maxRows + 1`
     * 2. render up to that tag plus the "and X more" tag
     * 3. if "and X more" wrapped onto a new row, hide one more tag and repeat
     * Changes to the items, width or `maxRows` reset to step 1.
     */
    useIsomorphicLayoutEffect(() => {
        const element = containerRef.current;

        if (!element) {
            return;
        }

        const signature = `${itemsSignature}|${Math.round(
            width ?? 0
        )}|${maxRows}`;
        if (measuredSignatureRef.current !== signature) {
            measuredSignatureRef.current = signature;

            if (visibleCount !== null) {
                setVisibleCount(null);
                return;
            }
        }

        // tags wrap in DOM order, so offsetTop never decreases
        const tags = Array.from(element.children) as HTMLElement[];
        let rows = 0;
        let lastTop: number | undefined;
        const firstHiddenIndex = tags.findIndex((tag) => {
            if (tag.offsetTop !== lastTop) {
                rows += 1;
                lastTop = tag.offsetTop;
            }
            return rows > maxRows;
        });

        if (firstHiddenIndex === -1) {
            // fits within maxRows
            return;
        }

        if (visibleCount === null) {
            setVisibleCount(firstHiddenIndex);
        } else if (visibleCount > 0) {
            // the "and X more" tag does not fit in the last row
            setVisibleCount(visibleCount - 1);
        }
    }, [visibleCount, itemsSignature, width, maxRows]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleRemoveClick =
        (onRemove: () => void) =>
        (event: React.MouseEvent<HTMLButtonElement>) => {
            // do not toggle the dropdown
            event.stopPropagation();
            onRemove();
        };

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
                            onClick={handleRemoveClick(onRemove)}
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
