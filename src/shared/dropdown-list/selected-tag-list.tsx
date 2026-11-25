import { CrossIcon } from "@lifesg/react-icons/cross";
import { useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useIsomorphicLayoutEffect } from "../../util";
import {
    Container,
    MoreEllipsis,
    RemoveButton,
    Tag,
    TagLabel,
} from "./selected-tag-list.styles";

export interface SelectedTagListItem {
    key: string;
    label: string;
    onRemove: () => void;
}

const MAX_ROWS_DEFAULT = 4;

export interface SelectedTagListProps {
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
    maxRows = MAX_ROWS_DEFAULT,
}: SelectedTagListProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const containerRef = useRef<HTMLDivElement>(null);
    const { width = 0 } = useResizeDetector({
        targetRef: containerRef,
        handleHeight: false,
    });
    // `null` renders every tag so that the rows can be measured
    const [visibleCount, setVisibleCount] = useState<number | null>(null);
    const measuredSignatureRef = useRef<string>();

    const itemsSignature = JSON.stringify(
        items.map(({ key, label }) => [key, label])
    );

    // =============================================================================
    // EFFECTS
    // =============================================================================
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

        const signature = `${itemsSignature}|${Math.round(width)}|${maxRows}`;
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

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleRemoveClick =
        (onRemove: () => void) => (event: React.MouseEvent) => {
            // do not toggle the dropdown
            event.stopPropagation();
            onRemove();
        };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const visibleItems =
        visibleCount === null ? items : items.slice(0, visibleCount);
    const hiddenCount = items.length - visibleItems.length;

    return (
        <Container ref={containerRef} data-testid="selected-tag-list">
            {visibleItems.map(({ key, label, onRemove }) => (
                <Tag key={key} $inactive={!removable}>
                    <TagLabel title={label} aria-hidden>
                        {label}
                    </TagLabel>
                    {removable && (
                        <RemoveButton
                            type="button"
                            aria-label={`Remove ${label}`}
                            onClick={handleRemoveClick(onRemove)}
                        >
                            <CrossIcon aria-hidden />
                        </RemoveButton>
                    )}
                </Tag>
            ))}
            {hiddenCount > 0 && (
                <Tag data-testid="more-tag" aria-hidden>
                    <TagLabel>and {hiddenCount} more</TagLabel>
                    <MoreEllipsis aria-hidden>...</MoreEllipsis>
                </Tag>
            )}
        </Container>
    );
};
